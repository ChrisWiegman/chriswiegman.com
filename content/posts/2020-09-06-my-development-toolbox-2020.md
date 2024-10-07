---
title: My Development Toolbox – 2020
type: post
date: 2020-09-06T18:59:54+00:00
url: /2020/09/my-development-toolbox-2020/
categories:
  - Technical
tags:
  - Development Tools
---

Once a year I love to go through my devices and take inventory ([2019][1], [2018][2], [2017][3], [2016][4], [2015][5], [2014][6], [2013][7], [2012][8]). I've been writing this series since 2012 and, looking back, it always amazes me how things change over the years and this year is no exception.
For many years my focus was solely on developing WordPress plugins and that was reflected in my toolbox. These days that isn't the case and my toolbox definitely reflects the change. Instead of working solely in the technologies behind WordPress, even while still at a WordPress company, today it isn't uncommon that, in a single week, I can find myself working in raw SQL, Python, Go, NodeJS, PHP, Ruby, Bash, Go and a host of other tech.

As much as the tech changes, my primary goal is still simplicity. It might be harder to do these days but I like to think I've managed to strike as much of a balance as possible between supporting the many technologies I need to do my job while still having a toolbox that is simple enough that it doesn't manage to suck up my time with it's own maintenance.

So how do I do it? Here's my breakdown:

## Hardware

Unlike years past, hardware has become a bit more important for me. While I no longer add devices just for the sake of saying I own them (as could be said with devices like the iPad I wasted years trying to make work for me) I still am quite picky on what I use. First, work has given me a 13&#8243; MacBook Pro which is perfectly adequate for my day job while sill being portable. I actually had to fight for this machine as all engineers where I work are normally given 16&#8243; MacBook Pros which, anymore, is simply more than I need. This does code and my development environments just fine and is enough power for 99% of what I need to do on a daily basis.

For the bulk of my code and all my personal work I have two machines, A 2018 [System76 Oryx Pro][9] which is my high-power workhorse and an [Asus Zenbook 13][10] which is a bit more powerful than my work Mac yet even smaller in size. It is my writing machine and the first machine I go to for travel due to it's tiny size.

I spent years trying to get to the point where I had a single computer for everything but that's no longer possible and I've stopped fighting it. The Oryx Pro is more than capable of handling nearly anything I can throw at it and splitting my own work between it and the Zenbook allows me to travel light and to separate different types of work such as writing and dev work. This separation has been great for my focus as it helps prevent me from getting distracted. If I'm on the Asus it is to write or browse the web. For everything else I have the Oryx. The combination works well.

Beyond three computers I still have a [Google Pixel 3XL][11] for my mobile. Anymore I do my best to use this only for communications and navigation and it's worked well for that. It will also, most likely, be the next device I replace although, at least for now, probably with two phones instead of one. I've been eyeing the [Pinephone][12] for a while which could serve as my daily driver with either a lower-end iPhone or Android for apps that I can't, yet, run on a Linux phone such as our house lights and a few others. That change will hopefully happen later this month.

## Software

For the last two years I've been running Linux on both of my own machines. Currently they are both on [Pop!_OS 20.04][13] which has been pretty much the perfect workstation operating system for me. To manage software on them I use a combination of Apt repos, [Flatpaks][14] and, for development tools, [Homebrew][15]. Together these allow me to script the installation of nearly all my apps making it easy to keep computers in sync and software up to date.

On all my computers I run [Firefox][16] as my browser (though some work tasks still make Chrome a hard-requirement to keep around). I sync my browser bookmarks, as well as all my files, contacts, calendar and more through a personal [Nextcloud][17] installation my wife and I share. While Firefox is my browser, I've also consolidated most of the sites I follow into a [FreshRSS][18] instance and I use [Wallabag][19] as my read-it-later service for anything I want to keep as a reference. Both are self-hosted.

For code itself, my only editor, currently, is [VS Codium][20] which is an opensource implementation of VS Code. This is a switch from the JetBrains products I used to use. JetBrains makes great IDE's if you're going deep in a single technology but if you're switching between tech stacks a lot than the utility of JetBrains' products meets its limits pretty quickly.

For database work I've been using [DBeaver Community][21] for a couple of years now which is an excellent database GUI allowing for powerful connections to a host of databases from MySQL to PostgreSQL and many others. I still keep [Filezilla][22] around as well for when I just need to quickly move files between servers. I also use [Postman][23] for working with APIs.

While I keep various development environments such as PHP, Go and others up to date with Homebrew, I try to do all my work in containers powered by [Docker][24]. This ensures that no matter what my environment is or where I'm working I will always be compatible with my team and won't need to spend a ton of time debugging the environment itself. For WordPress work and other more complex environments I use [Lando][25] as a development tool. It is, by far, the most complete and usable stack I've found for professional WordPress development and, while I would love to see some improvements in aspects of it, there really isn't anything else that can hold a candle to it on the market. Last year when I wrote this post I was working with our own DevKit tool for this type of work. When the project was cancelled I decided I was done building my own and found Lando is the first tool in the genre that I could actually make work for advanced dev projects.

For development work these tools are complimented by the default Gnome terminal app in my Linux distro where both [Oh My Zsh][26] and [tmux][27] make for a powerful combination to bring it all together.

When not working on code I've switched to [Glimpse][28] for image editing, [GnuCash][29] for keep track of my spending, [LibreOffice][30] as my office suite, [Evolution][31] for my email, Gnome apps for calendar and to-do, [Typora][32] for note taking (synced with Nextcloud) and [Signal][33] and [Slack][34] for pretty much all my communications.

Finally, [Spotify][35] and [Sonos][36] help me keep focused and on track around the house and my [Kindle][37] is my preferred way to unwind when I'm not working.

What I've managed to leave behind this past year is a lot of tech by big companies or companies who make surveillance a core component of their business model. Our only remaining Google connection is our phones, we've dropped out of Prime and similar programs and we've found [NextDNS][38] as a great whole-house solution for ad and tracking control. In fact, it's so good that it blocks about 30% of all outgoing connections across all our devices! If we need to get around it we now self host our own VPN with [Algo][39] which does the trick and helps keep our devices safe when we travel.

Unlike previous years, I'm more comfortable and, in fact, look forward to changing more of these tools out going forward. I've already mentioned the phone but I'd also like to find a good alternative to my old FitBit which still helps me keep more active. I'd also love to rely less on my Kindle by using our local library more when being in enclosed spaces is safe again (I've tried renting Kindle books from them but it's almost impossible locally). Ideally I'd also like to look at more low-powered tech in general where possible as it is an area I've been interested in for a long time.

As for my phone, It's been stripped down to just the apps I need for travel (Spotify and [Magic Earth][40]), a few apps for devices such as our lights, Signal, the native phone app and [Duolingo][40] for when I'm bored with it. In an effort to be more mindful of my phone use as, let's face it, it's all too easy to mindlessly pick up a phone and browse rather than do literally anything else, all other apps, including the browser, have been removed. It works too. I went from spending 2-3 hours a day on it to 10-15 minutes or less most days. That's a major win.

If there's a theme to my toolbox it is two-fold. First, I've gone from expensive proprietary tools to what I hope are more sustainable alternatives over wider range of projects. Second, I still strive to keep it all as simple as possible. As the title of this points out, this is my _toolbox_, not my life. In my line of work it is all too easy to confuse the two and that is a habit I am determined to break.

 [1]: /2019/08/tools-of-the-trade-2019/
 [2]: /2018/07/my-tools-of-my-trade-2018-edition/
 [3]: /2017/05/my-tools-of-the-trade-for-2017/
 [4]: /2016/05/my-tools-of-the-trade-2016/
 [5]: /2015/03/my-development-toolbox-2015/
 [6]: /2014/01/my-development-toolbox-2014/
 [7]: /2013/05/bit51s-development-tools-2013-edition/
 [8]: /2012/02/my-web-development-toolbox-2012/
 [9]: https://system76.com/laptops/oryx
 [10]: https://www.asus.com/us/Laptops/ASUS-ZenBook-13-UX333FA/
 [11]: https://www.tomsguide.com/us/google-pixel-3-xl,review-5826.html
 [12]: https://www.pine64.org/pinephone/
 [13]: https://pop.system76.com/
 [14]: https://www.flatpak.org/
 [15]: https://brew.sh/
 [16]: https://www.mozilla.org/en-US/firefox/new/
 [17]: https://nextcloud.com/
 [18]: https://freshrss.org/
 [19]: https://wallabag.org/
 [20]: https://vscodium.com/
 [21]: https://dbeaver.io/
 [22]: https://filezilla-project.org/
 [23]: https://www.postman.com/
 [24]: https://www.docker.com/
 [25]: https://lando.dev/
 [26]: https://ohmyz.sh/
 [27]: https://en.wikipedia.org/wiki/Tmux
 [28]: https://glimpse-editor.github.io/
 [29]: https://gnucash.org/
 [30]: https://www.libreoffice.org/
 [31]: https://wiki.gnome.org/Apps/Evolution/
 [32]: https://typora.io/
 [33]: https://signal.org/
 [34]: https://slack.com/
 [35]: https://www.spotify.com/us/
 [36]: https://www.sonos.com/
 [37]: https://www.amazon.com/dp/B07CXG6C9W
 [38]: https://nextdns.io/
 [39]: https://github.com/trailofbits/algo
 [40]: https://www.magicearth.com/