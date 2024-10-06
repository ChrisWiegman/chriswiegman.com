---
title: Updating GitHub Profiles with WordPress and Go
type: post
date: 2023-02-06T13:32:09+00:00
url: /2023/02/updating-github-profiles-with-wordpress-and-go/
featured_image: /images/2023/02/updating-your-github-profile-with-wordpress-and-go.jpg
categories:
  - Technical
tags:
  - Career Development
  - GitHub
  - Go
  - WordPress
---

For quite some time GitHub has had a neat [feature][1] that lets you customize your GitHub profile with a README file that you can use to tell visitors about yourself.

By itself the feature is pretty cool but with WordPress, and a little [Go][2], it can get a lot better as you can easily configure it to update itself to display your latest posts or anything else from your WordPress site. In this post we'll use WordPress' built-in RSS feed to get our post data and update our GitHub profile daily using a small Go script and GitHub actions. Here's how we do it.
## Creating the GitHub profile repository

The first thing you'll need is a GitHub repository with the same name as your GitHub username. In my case that means I setup the repository _ChrisWiegman_ as that is my GitHub username. You can see that repository [here][3].

Once you create the repository you can initialize it with a single README.md file to get started. Don't worry about the contents, yet. We'll get to that next.

## Creating the template

The next thing you'll need is a template file to build your README from. I put this in a directory called _update_ in my repo but you don't need to do it that way. In it you can start by putting your content in markdown format in a file named _template.md_. Here's what mine looked like to start:

``` markdown
### Hi! I am Chris Wiegman

I currently lead the team building **[Faust.js](https://faustjs.org)** as an **Engineering Manager** for **[WP Engine](https://wpengine.com/)**. For the last 20 years I've lead various tech teams building everything from JavaScript frameworks, WordPress plugins, Chrome extensions, development environments and more. When not building products I enjoy teaching, mentoring an **[speaking](https://chriswiegman.com/speaking/)** and have been fortunate to do so at dozens of courses, conferences, Meetups and other events over the years. Today my work, both personal and professional, focuses on improving the development experience of WordPress developers and anyone who has ever visited a WordPress site.

My latest blog post is: **[My WordPress wish list](https://chriswiegman.com/2023/02/my-wordpress-wish-list/)**.

#### More recent posts from my blog:

* [Things I will miss from Apple](https://chriswiegman.com/2023/02/things-i-will-miss-from-apple/)
* [Design is more than visuals](https://chriswiegman.com/2023/01/design-is-more-than-visuals/)
* [Still wishing for a better blogging tool](https://chriswiegman.com/2023/01/still-wishing-for-a-better-blogging-tool/)
* [The Perfect Mastodon Client for Me](https://chriswiegman.com/2023/01/the-perfect-mastodon-client-for-me/)
* [Code, Ideas and the Future of Kana](https://chriswiegman.com/2023/01/code-ideas-and-the-future-of-kana/)

If you like my posts take a look at my site, **[chriswiegman.com](https://chriswiegman.com/)**, and subscribe to get them in your favorite feed reader via **[RSS](https://chriswiegman.com/feed/)**.

You can also find me on **[Mastodon](https://mastodon.chriswiegman.com/@chris)** and **[Pixelfed](https://pixelfed.chriswiegman.com/@chris)** or you can view **[my full resume](https://gist.github.com/ChrisWiegman/8a89d7c2aca775884ae4227ca3b5be01)**.

<sub>Last updated: February 5, 2023</sub>
```

Note that, for now, it doesn't look like much of a template as all the content is already there. We'll get to the rest shortly.

## Processing the template file with Go

Now for the fun part. If you're a WordPress developer this might seem a bit daunting but I think you'll quickly find that, if you like working in PHP, you'll love working in [Go][2]

First, install Go if you haven't already. If you use Homebrew on Linux or Mac I recommend just using _brew install go_. If not, check out their [installation instructions][4] to get started.

Next, setup your normal code editor for Go. If you use [VSCode][5] this is as easy as installing a single plugin (which it wlil prompt you to do when you first open a Go file). If not, check with your editor for proper setup instructions.

Once your editor is setup and Go is installed navigate in your Terminal to where your _template.md_ file from earlier is located and let's initialize a Go project. This is a bit like what you might do with NPM or Composer but a lot easier. Simply run _go mod init_ with the repo and path to your _template.md_ file. In the below example you can see the repo as I created mine and the _update_ folder where I'm putting my Go script.

``` bash
go mod init github.com/chriswiegman/chriswiegman/update
```

This will create the _go.mod_ file in your directory which is to Go what _package.lock_ is to JavaScript.

Just like PHP or JavaScript we also have one dependency we're going to need for this. This is _[gofeed][6]_, a small package to parse our WordPress (or any other) RSS feed. Go packages are easy to install. Usually you can just tell Go to go (no pun intended) and get it from it's repository. Use the following command in your terminal.

``` bash
go get github.com/mmcdole/gofeed
```

When you run the above command it will create a _go.sum_ file which acts like the lock files in Composer or JavaScript. Your _go.mod_ file will also show the package and it's dependency tree. We're now ready to start writing our Go Script.

In your editor create a new file called _main.go_ in the same directory we used previously. For now all we need at the top is the following package declaration. This is important in Go. All files need a package declaration and every Go app needs a _main_ package.

``` go
package main
```

Underneath the package declaration we'll create our main function and a couple of data types to hold the information for our template. There are two data types, as identified by the _struct_ keyword below. _templateLink_ which holds the _Display_ text and the actual _Link_ that we output in our template and _templateVars_ which holds all the variables we are going to use in the template. In this case _Date_ to replace the date at the bottom of the template, _LatestLink_ for the link to the latest post and _PostLinks_ which holds as many posts as we want to pull from RSS to populate the post list as in the template above.

Below that goes the _main_ function which all Go apps require as their entry point. You can see all the code so far below.

``` go
package main

// templateLink is all the data we need for an individual link in our Markdown template
type templateLink struct {
	Link, Display string
}

//templateVars are all the variables we will use to build our template
type templateVars struct {
	Date       string
	LatestLink templateLink
	PostLinks  []templateLink
}

func main() {
}
```

You can test this all in terminal by running _go run main.go_. It won't do anything yet but you're well on your way. Our next task is to import our RSS feed with the library we imported above.

We'll do this by initializing the feed parser and parsing the feed as seen below. Note the error checking with _err_. This is a pretty normal paradigm in Go and serves to exit the app if the parser encounters and error.

``` go
package main

import (
	"log"
	"os"

	"github.com/mmcdole/gofeed"
)

// templateLink is all the data we need for an individual link in our Markdown template
type templateLink struct {
	Link, Display string
}

// templateVars are all the variables we will use to build our template
type templateVars struct {
	Date       string
	LatestLink templateLink
	PostLinks  []templateLink
}

func main() {
	fp := gofeed.NewParser()

      	// gets the feed from my own site and logs an error if it fails
	feed, err := fp.ParseURL("https://chriswiegman.com/feed/")
	if err != nil {
		log.Fatalf("error getting feed: %v", err)
		os.Exit(1)
	}
}
```

Another thing to call out here is the _import_ at the top. Most Go dependencies will autopopulate themselves if you've run _go get_ or if they're otherwise known. In this case you'll probably need to initialize it with the _github.com/mmcdole/gofeed_ package and Go should take care of the rest. Also note that you won't be able to run it here yet. Go doesn't like you defining unused variables so it will fail because we're not doing anything with _feed_ yet. Let's fix that

Our next step is to populate our _templateVariables_ so we can use them in our template. We'll do that by looping through the feed, first grabbing the top post for _LatestLink_ and then the next 5 for the _PostLinks_. Here's the code for that.

``` go
package main

import (
	"log"
	"os"
	"time"

	"github.com/mmcdole/gofeed"
)

// templateLink is all the data we need for an individual link in our Markdown template
type templateLink struct {
	Link, Display string
}

// templateVars are all the variables we will use to build our template
type templateVars struct {
	Date       string
	LatestLink templateLink
	PostLinks  []templateLink
}

func main() {
	fp := gofeed.NewParser()

	// gets the feed from my own site and logs an error if it fails
	feed, err := fp.ParseURL("https://chriswiegman.com/feed/")
	if err != nil {
		log.Fatalf("error getting feed: %v", err)
		os.Exit(1)
	}

	templateVars := templateVars{
		Date: time.Now().Format("January 2, 2006"), //gets and formats the current date
		LatestLink: templateLink{
			Display: feed.Items[0].Title, //calls the feed like a PHP array to populate the latest link
			Link:    feed.Items[0].Link,
		},
	}

	index := 1 // start at 1 to skip the latest link we already processed

	// Loop through the next 5 posts and add them to the PostLinks in templateVars
	for index <= 5 {
		link := templateLink{
			Display: feed.Items[index].Title,
			Link:    feed.Items[index].Link,
		}
		templateVars.PostLinks = append(templateVars.PostLinks, link)

		index++
	}
}
```

Great! We're getting closer. Now we just need to populate our template. First, we need to load it. Fortunately Go has a standard _embed_ library. We import the library (we have to do this import manually in most editors) and simply call _go:embed_ and the template file in a commend before the variable we'll save the template to. Later, when we run our app again, Go will automatically load the template file into memory so we can parse it. Here's how we load that below. Note I've taken out the whole _main_ function so we can focus on the embed.

``` go
package main

import (
	_ "embed"
	"log"
	"os"
	"time"

	"github.com/mmcdole/gofeed"
)

//go:embed template.md
var markdownTemplate string
```

The above code will save our template to the _markdownTemplate_ variable which is now a string we can parse. We'll parse it with a few lines of code using Go's standard _text/template_ package as highlighted below.

``` go {linenos=table,hl_lines=["59-66"]}
package main

import (
	_ "embed"
	"log"
	"os"
	"text/template"
	"time"

	"github.com/mmcdole/gofeed"
)

//go:embed template.md
var markdownTemplate string

// templateLink is all the data we need for an individual link in our Markdown template
type templateLink struct {
	Link, Display string
}

// templateVars are all the variables we will use to build our template
type templateVars struct {
	Date       string
	LatestLink templateLink
	PostLinks  []templateLink
}

func main() {
	fp := gofeed.NewParser()

	// gets the feed from my own site and logs an error if it fails
	feed, err := fp.ParseURL("https://chriswiegman.com/feed/")
	if err != nil {
		log.Fatalf("error getting feed: %v", err)
		os.Exit(1)
	}

	templateVars := templateVars{
		Date: time.Now().Format("January 2, 2006"), //gets and formats the current date
		LatestLink: templateLink{
			Display: feed.Items[0].Title, //calls the feed like a PHP array to populate the latest link
			Link:    feed.Items[0].Link,
		},
	}

	index := 1 // start at 1 to skip the latest link we already processed

	// Loop through the next 5 posts and add them to the PostLinks in templateVars
	for index <= 5 {
		link := templateLink{
			Display: feed.Items[index].Title,
			Link:    feed.Items[index].Link,
		}
		templateVars.PostLinks = append(templateVars.PostLinks, link)

		index++
	}

	// we'll parse the template itself to a tmpl variable
	tmpl := template.Must(template.New("chriswiegmanReadme").Parse(markdownTemplate))

	// Create the readme file again. Note my go code is in a folder called `update` so this creates it in the parent folder. Make sure yours in in the root of your repo.
	myFile, _ := os.Create("../README.md")

	// This combines the template with the templateVars
	tmpl.Execute(myFile, templateVars)
}
```

I've highlighted the relavent code in lines 59-66 above. if you now run _go run main.go_ again in your terminal you should get a README.md file in the root of your repository. Great! We're close but we're not done yet. We've populated our template variables but now we need to use them in our template.

## Using template variables in a Go template

Go has a very robuse [_text/template_ package][7] that inserts variables delimited by _{{_ and _}}_. For example to call the _Date_ from _templateVars_ we would use _{{ .Date }}_. To get child variables such as from _LatestPosts_ we just add an extra "." such as _{{ .LatestLink.Display }}_ and we can even use loops (see the example below) to go through all the _PostLinks_. Below is our final template with the lines highlighted where I've replaced the text in our above example with the variables we want to output.

``` markdown {hl_lines=[15,"8-9",5]}
### Hi! I am Chris Wiegman

I currently lead the team building **[Faust.js](https://faustjs.org)** as an **Engineering Manager** for **[WP Engine](https://wpengine.com/)**. For the last 20 years I've lead various tech teams building everything from JavaScript frameworks, WordPress plugins, Chrome extensions, development environments and more. When not building products I enjoy teaching, mentoring an **[speaking](https://chriswiegman.com/speaking/)** and have been fortunate to do so at dozens of courses, conferences, Meetups and other events over the years. Today my work, both personal and professional, focuses on improving the development experience of WordPress developers and anyone who has ever visited a WordPress site.

My latest blog post is: **[{{ .LatestLink.Display }}]({{ .LatestLink.Link }})**.

#### More recent posts from my blog:
{{ range $link := .PostLinks }}
* [{{ $link.Display }}]({{ $link.Link }}){{ end }}

If you like my posts take a look at my site, **[chriswiegman.com](https://chriswiegman.com/)**, and subscribe to get them in your favorite feed reader via **[RSS](https://chriswiegman.com/feed/)**.

You can also find me on **[Mastodon](https://mastodon.chriswiegman.com/@chris)** and **[Pixelfed](https://pixelfed.chriswiegman.com/@chris)** or you can view **[my full resume](https://gist.github.com/ChrisWiegman/8a89d7c2aca775884ae4227ca3b5be01)**.

<sub>Last updated: {{ .Date }}</sub>
```

Saving your template and running _go run main.go_ again from your terminal should give you a complete template with all the variables dynamically populated instead of being hard-coded as we originally did.

So close. Now we just need to get GitHub to process it.

## Updating your README daily with GitHub Actions

Our final task is to automate it all with [GitHub Actions][8]. To do this we first need to create two folders: _.github_ in the root of your repository and, within the _.github_ folder create a folder called _workflows_. Once you have these create a file called _update.yml_ in the _workflows_ folder and open it in your editor. At this point you should be editing the following file: _.github/workflows/update.yml_.

Populate your _update.yml_ with the following content:

``` yaml {linenos=table}
name: update

on:
  push:
    branches:
      - main
  schedule:
    - cron: "0 18 * * *"

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Get working copy
        uses: actions/checkout@main
        with:
          fetch-depth: 1
      - name: Update Readme
        run: |
          cd ${GITHUB_WORKSPACE}/update/
          go run main.go
      - name: Deploy
        uses: EndBug/add-and-commit@v9
        with:
          default_author: github_actions
          message: Update GitHub profile
          committer_name: GitHub Actions
          committer_email: actions@github.com
```

Now let's walk through what this all does:

First it will run this action on any push to the _main_ branch in your repository (if you're using a different branch name change this accordingly on line 6). It will also run this action at 18:00 (6pm) GMT every day. This is denoted with the _schedule_ and _cron_ configs on lines 7 and 8.

Next it will checkout your repo and run the _go run main.go_ command we used to test our work eariler. Note the folder name on line 20. Update this accordingly if your _main.go_ doesn't live in an _update_ folder under the root of your repo.

Finally it will commit the changes to your repo using a fictional "GitHub Actions" user as denoted on lines 25-28. You can change this to your own GitHub user info if you would like but that will mean GitHub will show an extra commit from you every time this runs and anyone who looks at your profile might think you're working every single day given you'll have at least one daily commit in your GitHub profile.

## Finishing up

That's it. Commit your work and push it yo GitHub. After a couple of minutes you'll see the results. Don't worry if it fails the first time as it might not have any README.md changes to make if you've committed everything right after generating the file (if you really want to test it clear out all the contents from README.md and then commit allowing GitHub Actions to populate it).

While it's all a fairly simple script you should be able to edit your profile for all kinds of fancy bio or other information from here. You can see this all put together [on my repo on GitHub][3]. Feel free to reach out to me if you have issues with any of it and I'll do my best to help if I can.

One final call-out on this is to note that my profile updates daily. This works for me because I publish every Monday, Wednesday and Friday morning. Depending on your schedule you might want to modify this or even use a [webhook trigger][9] to update yours right when you press publish in WordPress.

## Credits

I do want to give credit for this post to [Victoria Drake][10]. While my own implementation has evolved considerably it was her original script that I forked to start my own profile bio.

If this works for you, please do [reach out to me on Mastodon][11] and share your own profile. I'd love to follow you there and share some of the better profiles I see.

 [1]: https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme
 [2]: https://go.dev/
 [3]: https://github.com/ChrisWiegman/ChrisWiegman
 [4]: https://go.dev/doc/install
 [5]: https://code.visualstudio.com/
 [6]: https://github.com/mmcdole/gofeed
 [7]: https://pkg.go.dev/text/template
 [8]: https://docs.github.com/en/actions
 [9]: https://github.com/marketplace/actions/webhook-trigger
 [10]: https://victoria.dev/
 [11]: https://mastodon.chriswiegman.com/@chris