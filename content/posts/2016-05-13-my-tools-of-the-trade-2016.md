---
title: 'My Tools of the Trade: 2016'
date: 2016-05-13T04:00:00+00:00
draft: false
categories:
  - Technical
tags:
  - Development Tools
  - Tools
---

In what has become something of an annual tradition of mine about this time each year I take stock of the tools I use for my work each day, both as something of an “inventory” as well as to share as ideas with those whom I work with.

## What else has changed?

This year, in many ways, I find the changes in my tools particularly interesting as, while many of the same software titles are still there, the way I use many of them and the additions I now compliment them with have changed considerably. For example, up until quite recently I wrote all my posts on my MacBook Pro which has been a workhorse since I bought it 4 years ago. Today I type this on an 9.7″ iPad Pro as I find using it for writing allows me to focus on what I’m writing rather than succumbing to the distractions that are all too easy to get to me when I work on posts on the same computer on which I write code and pretty much live the bulk of my life.

In addition to a new hardware setup I’ve also added tools that help me offload common tasks and focus on the work that really matters. From Todoist to Evernote and Ulysses to Paw I’ve found a number of tools that have helped me finally feel like I can stay connected while still maintaining focus on what I need to do.

## On to the apps

That’s enough about the changes. Let’s take a look at the actual apps I’ve got in my toolbox this year.

**1. [PhpStorm][1]**

While I’ve been using PhpStorm for a few years now this year I feel like I’ve really taken it to the next level and made it work for me. From auto formatting code to incorporating on-the-fly linters and other code quality tools it has significantly reduced the time I’ve spent on the semantics of code allowing me to focus on using code to actually solve problems. I can now setup a site with XDebug, appropriate code standards and numerous other helpers in a matter of minutes and can focus on code without switching between dozens of other tools and websites or losing time correcting semantic issues in a code review. While it doesn’t make my code better it now lets me focus my energy on making that code better myself while it takes care of the details that simply don’t need to be at the top of my mind.

**2. [Primary Vagrant][2]**

As most of the work I do today is still for WordPress it is vital that I have a developer environment that I can both spin up quickly and with which I don’t have to worry about configuration or tool availability. Primary Vagrant solves both of those problems by giving me the tools I need to build and debug complex WordPress themes and plugins (as well as any other PHP applications) all while integrating seamlessly with PhpStorm. This project is actually almost 3 years old now and it has really been the last few months in which I feel it has finally matured to the point where I no longer worry about it as a tool and worry more about what I’m building with it. If you’re looking for a very versatile Vagrant setup for your own work I would definitely ask that you try it out and maybe even submit a pull request or two. Version 3.0 is going to be out very soon and it’s going to be awesome.

**3. [GIT][3]**

In past years I worried about the services I ran my repos on. Not anymore. All my public repos are on GitHub whereas my private repos live happily on Gitlab. It’s a combination that works well enough that I’ve stopped shopping for alternatives and just learned to trust what I have available to me.

**4. [Todoist][4] and [Evernote][5]**

Although not code tools I don’t know what I would do without Todoist and Evernote. Together they allow me to stop worrying about what I have to do and to not spend time memorizing anything I might either find interesting or might be important to me later. I seriously put pretty much everything in them and I simply don’t worry about forgetting anything anymore. I’ve heard Evernote described elsewhere as a “digital brain” and I think that’s the perfect description for it. Together with Todoist it really has been one of the greatest stress relievers I’ve found in a long time.

**5. [Dash][6]**

One of the greatest benefits of PhpStorm is its support for Frameworks like WordPress and others. I can click on a WordPress hook and go right to the source allowing me to easily get the information I need about what it’s doing. As with all code though, sometimes that isn’t enough. For those moments Dash let’s me go right to the vendor documentation (as well as a lot of 3rd party documentation) on any function in just about any language or framework I use in one click, even when I’m offline. This little gem has probably saved me weeks worth of hours over the last year as just about anything from jQuery documentation to Markdown, WordPress, React and more are all instantly accessible no matter where I am. No more Google searches or guessing, it’s just there. It couldn’t be easier.

**6. [Homebrew][7]**

OSX has come a long way over the years but it still isn’t exactly a developer’s dream to work on. With so many common CLI packages either missing or horribly outdated keeping up with tools I need to do my job as a developer can be an awfully daunting task. Homebrew just makes it all easy. From Vagrant to GIT and numerous other utilities I know that what ever I need is rarely ever further away that “brew install” and, thanks to a little CRON script I don’t even have to worry about keeping any of it updated anymore. If you’re developing on Mac I really don’t know how you can work without it.

**7. [Oh My Zsh][8]**

Bash is OK… ZSH is better. Oh My Zsh is a dotfile configuration for ZSH that improves the prompt and allows for plugins and themes that help you get things done a bit faster. From auto-correction to better completion and aliases to improve the workflow on nearly any command-line tool you can imagine OhMyZsh simply makes working with the command line easier. I actually love it so much that I’ve added it to Primary Vagrant and just hate logging into any server where I don’t already have it available.

**8. [Navicat][9] and Paw**

These workhorses haven’t gone away from my workflow but they’re no longer front and center. If I need to work in a MySQL or MariaDB database Navicat is still my go-to application. I’ve tried the competition but the ability to drag and drop tables between databases and servers just make this one too useful to give up. Same thing goes with Paw. It’s an HTTP client that blows the rest away. Up until I started doing a lot of work with Elasticsearch I had actually kept Postman around for API work as well but it gets far too cumbersome with complex data. Paw, on the other hand, makes it all so easy to work with.

**9. [SourceTree][10]**

GIT is the one tool that, even as I become more and more efficient with it on the command line I still just prefer to use in a good GUI. There’s just something to be said for being able to more easily view the history of a given repository as I work in it. Over the last year I’ve tried pretty much everything else on the market but SourceTree is just so much more powerful than them all.

**10. [Ulysses][11]**

I’ve tried a lot of writing apps lately as I attempt to get some drafts queued up for this site. From full word processors like Pages to minimalistic apps like ByWord I think I own licenses to most of what is on the market at this point but none of them fit the happy medium I was looking for between simple and complex until I found Ulysses. Think of it as the perfect combination between Evernote and ByWord with a focus on simply getting the words out.

## The rest

Of course, even with all of these, there are a number of little tools and utilities I use on a daily basis but they’re much more in the background for me these days than they use to be. For now it’s safe to say that, as I’ve focused on productivity and reducing stress this last year, they’re not as much a part of my daily workflow as they used to be. Of course, as it always does, I’m sure these will all change over the course of the next year but for the first time in a while I feel like I’ve finally found a usable toolbox rather than a collection of software that acts more as a project in and of itself.

 [1]: http://jetbrains.com/phpstorm
 [2]: https://github.com/ChrisWiegman/primary-vagrant
 [3]: https://git-scm.com
 [4]: https://todoist.com/
 [5]: https://evernote.com/
 [6]: https://kapeli.com/dash
 [7]: http://brew.sh
 [8]: http://ohmyz.sh
 [9]: https://www.navicat.com
 [10]: https://www.sourcetreeapp.com
 [11]: http://ulyssesapp.com