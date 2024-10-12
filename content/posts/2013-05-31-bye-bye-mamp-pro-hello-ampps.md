---
title: Bye Bye MAMP Pro, Hello AMPPS
type: post
date: 2013-05-31T04:00:00+00:00
url: /2013/05/bye-bye-mamp-pro-hello-ampps/
categories:
  - Technical
tags:
  - Development Tools

---
<div class="wp-block-image">
  <figure class="alignright"><a href="http://www.ampps.com/"><img decoding="async" src="/images/2013/05/ampps_logo.png" alt="AMPPS Logo" class="wp-image-5495" /></a></figure>
</div>

Ironically, only 2 days after [writing about how MAMP Pro would be the next app I would dump][1] I find myself with a new development stack for my local machines. <a title="MAMP Pro" href="http://www.mamp.info/en/mamp-pro/" target="_blank" rel="noopener noreferrer">MAMP Pro</a> was just getting outdated and, combined with their inability to offer any kind of support, it was time to move on.

As of today [AMPPS][2] is my new development stack.

After almost four years with MAMP Pro matching it’s ease of configuring virtual hosts wasn’t easy. I’ve tried (in no particular order)

<ol class="wp-block-list">
  <li>
    <a href="https://www.apachefriends.org">XAMPP</a> wound up being abandoned over 3 years ago.
  </li>
  <li>
    <a title="Bitnami MAMP Stack" href="http://bitnami.com/stack/mamp">Bitnami</a> was just too limited to really be useful.
  </li>
  <li>
    <a title="Homebrew" href="http://mxcl.github.io/homebrew/">Homebrew</a> came close but the idea was to save time, not spend countless hours in configuration.
  </li>
  <li>
    <a title="Macports" href="http://www.macports.org/">Macports</a> had the same problems as Homebrew.
  </li>
  <li>
    <a title="VirtualHostX" href="http://clickontyler.com/virtualhostx/">VirtualHostX</a> which was great for what it was but required too many other variables to fall into place to be useful.
  </li>
</ol>

So in comes AMPPS. What really attracted me to AMPPS was the ability to use databases other than MySQL and easily experiment with numerous other packages through their Softaculous script library. Now I can experiment with MongoDB, Python, Perl, and a host of other apps without the need of installing further software. While some of you may wonder what the point is, for me it comes down to the fact that my local webserver stack is a tool I use to complete my work and, as such, I do my best to make sure it doesn’t become the work itself. In other words it’s one of those tools I just want to install and forget about.

### What brought me to AMPPS?

First, as I pointed out **it has more than just Apache/MySQL/PHP**. As my role at my day job requires a variety of development environments I wanted a tool that could encompass as many different environments as possible making it easy to concentrate on the solutions rather than the development environment.

Second, **AMPPS is still supported.** While I only posted a single question to the AMPPS forums it was answered by one of there developers almost immediately. Try getting that from the folks who make MAMP. I haven’t found a way to get them to respond to anything in over a year (which is rather sad considering what MAMP Pro costs).

Third, **it’s portable**. I’ve put AMPPS in my <a title="Dropbox" href="http://www.dropbox.com" target="_blank" rel="noopener noreferrer">Dropbox</a> allowing me to sync my entire development environment between computers. For me this is both a timesaver and an insurance policy in that it helps make certain I don’t miss any critical server configurations when going from one machine to another.

Finally, **it’s free**. I’ve spent a lot of time and money on MAMP Pro over the years so finding a replacement that is actually free is rather impressive. The fact that it can do even more than the expensive paid software is just incredible.

_**So why are you still messing with MAMP Pro? Give AMPPS a try. You won’t be disappointed. **_

 [1]: /2013/05/bit51s-development-tools-2013-edition/
 [2]: http://www.ampps.com/ "Softaculous AMPPS"