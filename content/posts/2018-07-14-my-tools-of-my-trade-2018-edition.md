---
title: My Tools of My Trade – 2018 Edition
type: post
date: 2018-07-14T17:58:00+00:00
url: /2018/07/my-tools-of-my-trade-2018-edition/
categories:
  - Technical
tags:
  - Development Tools
  - Software

---
It’s the time of year, again, to take inventory of what I’m working with and share it for others who might be looking to update their own toolbox. This is the 7th year ([2017][1], [2016][2],&nbsp;[2015][3],&nbsp;[2014][4],&nbsp;[2013][5],&nbsp;[2012][6]) I’ve been doing this and this year marks one of the bigger changes in my tooling since I started the series.

Most years it seems, especially after looking over the older posts today, that not much changes from year to year and I guess, in some ways, there’s some truth to that this year as a number of the tools I use have been with me for a long time at this point. What has changed this year is how I use them and many of the supporting tools I’ve relied on for years. In changing my workflow I’ve managed to pare down my apps from what I had previously as well as learn to better use the available features in others. So far it seems to be paying off for me.
## My Computer

<div class="wp-block-image">
  <figure class="aligncenter"><img decoding="async" src="/images/2020/07/my-mac-software-2018.jpg" alt="My Mac Software - 2018" class="wp-image-10143" /></figure>
</div>

I’m still stuck on using a 2016 15″ Macbook Pro I bought right when they were released. I loved it at first but now I can’t wait to get rid of it. While the touchpad is nice and I’ve grown to like the all USB-C setup, the keyboard, touch bar (which I originally liked) and overall quality of the machine and macOS in general have really degraded over the last few years and, at this point, I’m comfortable saying this will probably be my last Mac for the foreseeable future.

As far as applications are concerned, my biggest change this year has been moving from nearly all default software to the Google ecosystem. This means dropping Safari, Notes, Reminders, iMessage, etc for their Google counterparts and, after 6 months or so working like this, it was definitely the right move for me. I’ve also simplified a lot of others and removed what I didn’t need resulting in a much simpler workflow. Heck, with a hard drive of 512 GB and with direct access to literally every piece of data I have my laptop still has 446 GB available on the drive. I’ll call that a win. As for individual apps, here’s the breakdown:

<ol class="wp-block-list">
  <li>
    <strong><a href="https://1password.com">1Password</a></strong>: This is still my password manager of choice. My wife, parents and myself share a family plan and I’ve been able to work it where I don’t need to keep all my data from it on any given device which should make travel safer. I still can’t find anything to beat its ease of use and feature set which might be a huge issue when I do eventually move to Linux.
  </li>
  <li>
    <strong><a href="https://www.alfredapp.com">Alfred</a></strong>: It’s clipboard history feature is really the only thing I keep this around for these days. Where there are other tools that can do that I already own a license for this so I’ve stuck with it.
  </li>
  <li>
    <strong><a href="https://www.google.com/drive/download/backup-and-sync/">Backup and Sync from Google</a>:</strong> In switching to the Google ecosystem I moved from iCloud Drive to Google Drive and this little utility just helps me manage all of it. Frankly, I could probably do without but it is handy to backup some things so, so far, it stays.
  </li>
  <li>
    <a href="https://www.macbartender.com/"><strong>Bartender 3</strong></a>: This handy little utility just keeps my toolbar free from clutter (which is mostly just the few apps in which I can’t turn off their menu bar items).
  </li>
  <li>
    <strong><a href="https://macpaw.com/cleanmymac">CleanMyMac 3</a></strong>: This is a handy tool to help keep the Mac clean. I use it to securely erase trash, completely uninstall apps and perform general cleanup and maintenance. I do believe it is actually one of the first apps I bought when I started with Mac back in 2008 and I continue to use it regularly 9 years later. It is definitely worth the modest price.
  </li>
  <li>
    <strong><a href="https://www.docker.com/">Docker</a>: </strong><a href="/2018/06/so-long-primary-vagrant/">Recently I finally stopped working on my Primary Vagrant environment</a> and moved all my development to Docker. The ability to divide environments up between projects has been great and I’m spending far less time maintaining the environment itself so I’ll call this one a win.
  </li>
  <li>
    <strong><a href="http://binarynights.com/forklift/">ForkLift</a></strong>: I’ve tried numerous file transfer clients over the years but none of them can hold a candle to ForkLift. On large transfers it has proven to be many times faster than Transmit and pretty much everything else out there while also being rock solid not just in application stability itself but in resuming an operation after my wi-fi or other connection hiccups on me.
  </li>
  <li>
    <a href="https://www.gimp.org/"><strong>Gimp</strong></a>: For my limited image editing needs (mostly cropping and resizing for this site) the free Gimp editor does me quite well. If anything changes in the next year it will probably be this one.
  </li>
  <li>
    <a href="https://www.gitkraken.com/"><strong>Gitkraken</strong></a>: I moved to this for visualizing GIT repos since SourceTree has become almost unusable over the last few years. It isn’t quite a powerful as SourceTree but it doesn’t freeze up for 30 seconds or move on every single action so I’ll call that a win.
  </li>
  <li>
    <a href="https://www.google.com/chrome/"><strong>Google Chrome</strong></a>: These days I use this as my primary browser and it does a really solid job without the battery issues that plagued it when I used it 4 or 5 years ago.
  </li>
  <li>
    <strong>GPG Keychain</strong>: This is part of the <strong><a href="https://gpgtools.org">GPG Suite for Mac.</a></strong> While I rarely bother with signing or encrypting emails anymore, this still helps me easily manage what keys I do still have.
  </li>
  <li>
    <a href="https://www.kaleidoscopeapp.com/"><strong>Kaleidoscope</strong></a>: This is a very powerful merge/conflict tool that really helps working with my team and our [monolithic] GIT codebases. I’ve actually had this one for a few years now and although I don’t use it all that often it has come in handy and saved my butt numerous times.
  </li>
  <li>
    <a href="https://manytricks.com/moom/"><strong>Moom</strong></a>: This is a great little screen manager that helps me sort apps on my screen with a single keystroke. I think I’ve been using it for two or three years now, since Window Tidy went to a subscription model, and it’s proven incredibly handy.
  </li>
  <li>
    <a href="https://navicat.com/products/navicat-for-mysql"><strong>Navicat for MySQL</strong></a>: I think other clients, namely Sequel Pro, are getting close to being on parity with Navicat now but I still can’t give up it’s ability to transfer database tables and data between databases and other servers.
  </li>
  <li>
    <a href="https://paw.cloud"><strong>Paw</strong></a>: A lot of code I write is either consuming or creating APIs. PAW makes testing and debugging these easy. It’s like Postman but so much more powerful.
  </li>
  <li>
    <a href="https://www.jetbrains.com/phpstorm/"><strong>PhpStorm</strong></a>: This is still the king of the PHP IDEs and something I use daily for all kinds of tasks.
  </li>
  <li>
    <strong>Pulse Secure</strong>: My work VPN
  </li>
  <li>
    <a href="https://www.quicken.com/"><strong>Quicken 2018</strong></a>: With the current version Quicken has gotten better but it’s still something I would like to replace in the future. For now, however, it helps keep me organized.
  </li>
  <li>
    <strong><a href="https://slack.com">Slack</a></strong>: My team at work uses this for pretty much everything (it’s the rest of our organization that uses Skype) and I keep involved in a few other slack teams to stay connected throughout the day.
  </li>
  <li>
    <a href="https://code.visualstudio.com/"><strong>Visual Studio Code</strong></a>: This is my backup text editor for small edits or other tasks in which PhpStorm is overkill. It’s great for it’s secondary role but simply not powerful enough to replace a real IDE.
  </li>
  <li>
    <a href="https://zoom.us"><strong>Zoom.us</strong></a>: For my team at work as well as any other video conferencing needs I have Zoom.us is pretty awesome. It’s faster and more reliable than Hangouts and the stand-alone client is more appealing to me than many other browser based solutions.
  </li>
</ol>

### A few apps not listed:

<ul class="wp-block-list">
  <li>
    <a href="http://ohmyz.sh"><strong>oh_my_zsh</strong></a>: I use the built in Mac Terminal app for command line stuff and zsh with .oh_my_zsh as my shell environment. I used to play around with lots of custom dotfiles and other nonsense but haven’t looked back since I found oh_my_zsh. It just makes it all easier.
  </li>
  <li>
    <strong><a href="https://brew.sh">Homebrew</a></strong>: As the Mac App Store has pretty much become abandonware I manage all the software on my computer with it. As a bonus, if I was to switch computers I could install everything I use now with a single BASH script so I guess I’ve got that going for me.
  </li>
</ul>

## My Phone

<div class="wp-block-image">
  <figure class="aligncenter"><img decoding="async" src="/images/2020/07/my-mobile-2018.jpg" alt="My Mobile 2018" class="wp-image-10144" /></figure>
</div>

The biggest change to my mobile this year is that it’s now a Pixel 2 XL on Google FI. If you’re interested in how my experience to go the platform went [I’ve written a fairly long post on it recently][7]. For the most part, as with my older iPhones, I stick to the stock apps. The screenshot above actually has every app installed on it visible.

For me my phone is simply an extension of my laptop allowing me to access whatever I might need when I’m not near the laptop. It’s worked so well in this role that, in the last year, I’ve dumped my iPad and Apple Watch (replacing the latter with a [Fitbit Versa][8] which I absolutely love) resulting in a much more streamlined tech footprint&nbsp;for me overall.

## What’s on Your Computer?

If there’s a theme to my tech use over the last few years it has been “simple.” From apps to the very hardware I use I’ve put in a lot of effort to simplify what I use to both be more productive with existing tools as well as to reduce the distraction of “new and shiny” I’ve fallen victim to all too often over the years.The result is I’m happier with and more efficient with my setup. What else could I ask for?

 [1]: /2017/05/my-tools-of-the-trade-for-2017/
 [2]: /2016/05/my-tools-of-the-trade-2016/
 [3]: /2015/03/my-development-toolbox-2015/
 [4]: /2014/01/my-development-toolbox-2014/
 [5]: /2013/05/bit51s-development-tools-2013-edition/
 [6]: /2012/02/my-web-development-toolbox-2012/
 [7]: /2018/05/google-fi-and-pixel-5-months-later/
 [8]: https://www.fitbit.com/shop/versa