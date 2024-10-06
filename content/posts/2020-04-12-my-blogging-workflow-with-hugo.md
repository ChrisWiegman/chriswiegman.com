---
title: My Blogging Workflow With Hugo
type: post
date: 2020-04-12T14:53:31+00:00
url: /2020/04/my-blogging-workflow-with-hugo/
featured_image: /images/2020/08/my-blogging-workflow-with-hugo.png
categories:
  - Technical
tags:
  - Blogging
  - Hugo
  - Tools

---
This month marks 8 months since [I moved this site][1] off of WordPress and to [Hugo][2]. Now that I feel like I’ve got my workflow down pretty well, here’s how I write these days and how it differs from what I had been doing on WordPress.
## My Hugo Workflow {#my-hugo-workflow.wp-block-heading}

First, let me break down _how_ I actually write in Hugo as it is definitely a different workflow from what I had been doing for almost 20 years.

### Draft and edit in Ghostwriter {#draft-and-edit-in-ghostwriter.wp-block-heading}

For drafting and editing text, I use the wonderful [Ghostwriter][3] app for Linux. This simple [Markdown][4] editor makes it easy for me to write the actual content I put into this site. I don’t use it for images or other graphics, just writing and, for this, it does a wonderful job.

Of course, as this app is [best on Linux][5], it can easily be replaced with any Markdown editor you like. The idea here is simply a place to easily work on the content that will actually go into your site.

As I like to keep multiple drafts going at any given time I keep a “Blog Posts” folder on my [Nextcloud][6] instance to sync content between computers and other devices. This method allows me to write, if I choose, on any of my computers and devices where I can save the content to publish when I’m ready.

### Moving the content to Hugo {#moving-the-content-to-hugo.wp-block-heading}

When a draft post is complete, it’s time to add it to Hugo. As the site itself is a simple [Git repository][7] all I need to do this is a computer with a copy of Hugo installed (I should note here that I prefer [Homebrew][8] on both Linux and Mac to install and update Hugo). Then I just clone the site and I’m ready to go.

To actually create the post in Hugo I use a script I adapted from a similar version by [Aral Balkan][9] to create the new post in Hugo on one of my computers. This script creates the post file, adds the appropriate meta information and does all of this so I can maintain my _////_ link structure. For example, if my post was titled “Example Post” and I moved it in to Hugo today (April 2020) I would use the following command from the sites root directory:

<pre class="wp-block-code" aria-describedby="shcb-language-105" data-shcb-language-name="Bash" data-shcb-language-slug="bash"><span><code class="hljs language-bash">./new example-post</code></span><small class="shcb-language" id="shcb-language-105"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">Bash</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">bash</span><span class="shcb-language__paren">)</span></small></pre>

This would create the file _/content/posts/2020/04/example-post.md_ into which I could cut and past the content from Ghostwriter.

### Adding images and other data {#adding-images-and-other-data.wp-block-heading}

Once I’ve edited and moved my content over it’s time to add images and other data. I store most images in a generic _/static/uploads/_ directory in the site root. Here I put edited images ready for the web. Yes, I could put each image in the same folder as the post but I prefer the single location, for now.

At a minimum I try to put a featured image with each post. If the post requires it this is also where I’ll add any other images to the post such as diagrams or more.

Finally, I’ll use this stage to add tags and a description as well as update the publish time (if needed) in [Visual Studio Code][10]. Now I have a post that is ready to go.

### Pushing to the server {#pushing-to-the-server.wp-block-heading}

Here’s the easy part. This site is hosted at [Netlify][11], for now. This means that, while I have to mirror it at a Git host Netlify works with (I use a private repo at [Github][12] for this), all I have to do is push to _master_ and I’m done. Netlify takes care of the rest.

## How this differs from WordPress {#how-this-differs-from-wordpress.wp-block-heading}

In the end my workflow has two major steps:

<ol class="wp-block-list">
  <li>
    Draft and edit in Ghostwriter
  </li>
  <li>
    Add images and more later in Visual Studio Code
  </li>
</ol>

This sounds pretty complex compared to some blog tools and, in some ways, it most definitely is. That is not an accident. When I was blogging in WordPress I found myself worried too much about visuals and too little about editing. Separating the steps allows me to focus on the content I’m writing first and foremost. One that is complete I can then add the rest. I like to think it’s resulted in a much more readable site.

In addition to the divided workflow the other major difference from blogging in WordPress is that my Hugo site revolves around text. There are no fancy forms, blocks other other bells and whistles (there isn’t any JavaScript at all) to take away from what I want to _write_ about. Sure, I could go back to WordPress and do similar but doing it all this way has a few additional benefits including a faster site I can host for cheap (Netlify is free) and a setup that is secure, private and is not subject to database corruption or other issues. If I want to change to WordPress later it will be a relatively easy concept. On the other side, in coming from WordPress <s>I wound up pushing all existing content to archive.chriswiegman.com as handling the export to Hugo just seemed to be more trouble than it was worth</s>. That won’t be a problem now if I decide to leave Hugo later.

In the end, my current workflow allows me an easy way to focus on my content from any computer, even if I don’t have web access. In addition, it would be easy to replace any of the tools I’ve listed above to modify my workflow to one that will work best for you. If you’re looking at moving off WordPress, give it a shot. It isn’t hard and the results could just leave you with a much better experience for both your users and for you.

_Update: Removed link to the archive site as all content has been moved back into this site._

 [1]: /2019/08/its-time-for-a-new-site/
 [2]: https://gohugo.io/
 [3]: https://ghostwriter.kde.org
 [4]: https://daringfireball.net/projects/markdown/
 [5]: https://github.com/wereturtle/ghostwriter#installation
 [6]: https://nextcloud.com/
 [7]: https://github.com/ChrisWiegman/chriswiegman.com
 [8]: https://brew.sh/
 [9]: https://ar.al/
 [10]: https://code.visualstudio.com/
 [11]: https://www.netlify.com/
 [12]: https://github.com/