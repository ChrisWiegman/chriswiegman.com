---
title: My Tools of the Trade for 2017
date: 2017-05-23T17:58:57+00:00
draft: false
categories:
  - Technical
tags:
  - Development
  - Development Tools
  - Tools
---

While I don’t make it a habit to do too many post series my “Tools of the trade” post has become something of an annual tradition of mine for a good number of years ([2016][1], [2015][2], [2014][3], [2013][4], [2012][5]).

This year I realize it’s changed just a little bit in that, as something of a continuation of last year, I’ve focused on making the most of the tools I have rather than adding too many more to the mix. I’ve narrowed it down so much in fact that rather than just some of my primary tools I think it’ll just be easier to break down what I have across all my devices:

## My Computer

First, that computer. I upgraded my [2012 rMBP][6] last fall to a new 15″ MacBook Pro with the Touch Bar and all the other bells and whistles. In fact the only thing I didn’t max out was the hard drive as the 512GB I bought is simply big enough for literally all the digital crap I’ve accumulated over the years. I also have a 2015 15″ MacBook Pro for my day job that I pretty much only use when I’m on campus as I simply don’t have any realistic need for two computers and, as I work from home, I find trying to switch between multiple computers more trouble than it’s worth.

While I’ve often thought of giving Windows or Linux another try as my daily driver I have to admit that the Mac is just too much a part of my workflow to want to change it. That said, I love the new MacBook Pro but it isn’t perfect. If, by the time I next upgrade, they haven’t made some big leaps in RAM I’ll probably look at something different again but for now the new keyboard and USB-C make up for most of the shortcomings. Yes, I did have to buy a few dongles at first but that experience was pretty much forgettable and now the ability to swap ports for nearly everything is incredible.

As for software, there really isn’t too much I need to do my job these days. Here’s a screenshot of nearly every application I have on this machine (the only thing it’s missing is command line apps I’ll talk about in a bit).

![All the apps I have installed on my daily computer](/images/2020/07/2017-desktop-software.jpg "All the apps I have installed on my daily computer")

Let’s start from the top (and leave out most of the default apps unless I use them):

1. **[1Password](https://1password.com)**: My password manager of choice. I use it for all my passwords, 2-factor, etc. I’ve looked at LastPass and others but the ease of use of 1Password combined with the safety of still having my 2-factor codes when I don’t have my phone is just too hard to pass up. These days I also sync most of my passwords with my wife and the new 1Password family plans have made that so incredibly easy.

2. **[Alfred](https://www.alfredapp.com)**: I use this for all kinds of tasks from running basic terminal commands to launching applications (I actually don’t keep any applications in the Mac Dock and launch them all through Alfred). As handy as it is for getting too things though the truth is Spotlight can handle most of it these days. The reason I stick with Alfred over just making do with Spotlight is the clipboard history feature which I simply can’t find another app that can touch.

3. **[CleanMyMac 3](https://macpaw.com/cleanmymac)**: This is a handy tool to help keep the Mac clean. I use it to securely erase trash, completely uninstall apps and perform general cleanup and maintenance. I do believe it is actually one of the first apps I bought when I started with Mac back in 2008 and I continue to use it regularly 9 years later. It is definitely worth the modest price.

4. **[Cloak](https://www.getcloak.com)**: Cloak is my personal VPN of choice. It isn’t the cheapest (I use the $99/year unlimited plan) but it takes the thought out of remembering to activate a VPN every time I switch connections. If you’re all in with Apple like I am I would highly recommend it to help keep your connection at least a little bit safer.

5. **[ForkLift](http://binarynights.com/forklift/)**: I’ve tried (and still own current licenses) numerous file transfer clients over the years but none of them can hold a candle to ForkLift. On large transfers it has proven to be many times faster than Transmit and pretty much everything else out there while also being rock solid not just in application stability itself but in resuming an operation after my wi-fi or other connection hiccups on me.

6. **GPG Keychain **: This is part of the** [GPG Suite for Mac](https://gpgtools.org)** and is a great tool for handling email and other encryption across my system. It’s only downfall… not many others use it to the point where I’ve thought of removing it but with GitHub now supporting commit signing and other initiatives I’m hoping maybe this will change in the future. (if I ever email you you can see my PGP signature in the “weird” attachment that goes on all my outgoing emails).

7. [**iTunes**](https://www.apple.com/itunes/): I’m listing this as it’s both my podcast and music app of choice. I share a family subscription to [**Apple Music**](https://www.apple.com/music/) with my wife and it has been one of the most valuable services I’ve ever subscribed to. I use it everywhere, on all my devices and typically have something playing for about 8-10 hours a day. I’ve tried the “other services” but the combination of discovery and apps with Apple Music just make it the best for me.

8. **[Keynote](https://www.apple.com/keynote/)**: I’ve been moving many of my presentation slides to Reveal.js but for the rest there’s Keynote. It’s easy, reliable and plenty capable for my needs.

9. **Mail**: My work is on Outlook but I use Mac’s mail for everything anyway. It’s so much faster and does all I need it to do.

10. [**Microsoft Office**](https://www.office.com): It’s installed, but only for work. It’s so bloated these days that I only open it when I absolutely have to and have taken to doing most of my documentation for work projects directly in GitLab using Markdown.

11. [**Navicat for MySQL**](https://navicat.com/products/navicat-for-mysql): There are a lot of newer MySQL clients but this one still is king. I use it to drag and drop whole databases between servers and, thanks to it’s PHP connection methods, I don’t have to worry about getting access to anything but FTP when I work with a freelance or other client. I seriously don’t know how I could work without it.

12. **Notes**: I used to use Evernote but notes sync has been more reliable and it’s just the right mix of simplicity and features to compliment my workflow perfectly.

13. [**Numbers**](https://www.apple.com/numbers/) and **[Pages](https://www.apple.com/pages/)**: If I have to work in a spreadsheet or word processor it’s usually iWork. They just work for me.

14. [**Paw**](https://paw.cloud): A lot of code I write is either consuming or creating APIs. PAW makes testing and debugging these easy. It’s like Postman but so much more powerful.

15. [**Photos**](https://www.apple.com/macos/photos/): The perfect solution for 25 years of photos for me.

16. [**PhpStorm**](https://www.jetbrains.com/phpstorm/): This has replaced a LOT of apps for me from Atom to others. I use it as both my text editor and have really learned to make use of the IDE features over the last few years. My Primary Vagrant project interacts well with it allowing for complete debugging without dealing with dozens of plugins and other hacks to just make it all work.

17. **Pulse Secure**: My work VPN

18. [**Quicken 2017**](https://www.quicken.com/qkn17): While not the most reliable app I’ve ever had I can still tell you every penny I’ve spent since the year 2000 thanks to it’s tracking. We use it for expense tracking, planning and budgeting and it does all of them well enough. The biggest thing is that its sync with its mobile app actually works so both my wife and I can enter receipts on the go.

19. **Reminders**: I don’t think there’s a todo list/GTD app I haven’t tried (and probably not one I haven’t bought either). Three things have brought me back to Reminders… easy sharing with my wife, Siri task entry and the price. It does task tracking well even over the 30 or so projects I have in it and it’s never lost anything on me nor have I missed a notification due to forgetting to open the app.

20. **Safari**: still my browser of choice. It’s a good compromise between features and utility for me. I love it’s reading list feature and the flawless sync between devices. While I which it supported more extensions and kept a little more current with standards I can truthfully say that it has never prevented me from getting the information I need (and the reading list makes keeping track of articles I want to read so much easier than anything else).

21. **Skype for Business**: This is a rather unfortunate requirement of my day job.

22. **[Slack](https://slack.com)**: My team at work uses this for pretty much everything (it’s the rest of our organization that uses Skype) and I keep involved in a few other slack teams to stay connected throughout the day.

23. **[SourceTree](https://www.sourcetreeapp.com)**: I do most of my GIT work either in PhpStorm or on the command line but for heavy lifting SourceTree makes visualizing complex repositories or handling complex operations just simply easier. I also tend to use it as something of an application manager as it’s repository screen tells me instantly if one of my local repos has fallen behind.

24. **Time Machine**: I don’t know how much life it has left in it but I still have an**[Apple Time Capsule](https://www.apple.com/airport-time-capsule/)** and back up my machine with it. It’s saved my but plenty of times for minor issues.

25. **[Tweetbot](https://www.tapbots.com/tweetbot/mac/)**: I do less and less social media these days but Twitter is still valuable to me. I hate the native Twitter site so Tweetbot both makes it usable and allows me to sync my position across all my devices so I never have to read my timeline twice nor skip anything I don’t want to.

26. [**VirtualBox**](https://www.virtualbox.org): I do all my dev work in Vagrant boxes and Virtualbox makes a solid VM host for the price.

27. [**Zoom.us**](https://zoom.us): For my team at work as well as any other video conferencing needs I have Zoom.us is pretty awesome. It’s faster and more reliable than Hangouts and the stand-alone client is more appealing to me than many other browser based solutions.

### A few apps not listed:

* [**Vagrant**](https://www.vagrantup.com): I do all my work on virtual machines wrapped in Vagrant. Docker might be shinier these days by Vagrant has proven to be reliable for all I need to do with it.

* [**oh_my_zsh**](http://ohmyz.sh): I use the built in Mac Terminal app for command line stuff and zsh with .oh_my_zsh as my shell environment. I used to play around with lots of custom dotfiles and other nonsense but haven’t looked back since I found oh_my_zsh. It just makes it all easier.

* [**Homebrew**](https://brew.sh): For the remaining few apps (I only install node and composer with it these days) Homebrew does a great job of making managing packages easy.

* [**iCloud Drive**](https://www.icloud.com): It works and works well for my needs without the battery drain of another application like Google Drive or Dropbox.

## My Mobile

After my computer it’s my phone that probably gets the most use. I have a white, 32GB iPhone 7+ that I’ll upgrade when the next phones are released simply because 32GB is pushing the space limit a little too far. While I’ve looked at Android and been very impressed with Google Fi I can’t see myself leaving iPhone any time soon as it’s just so easy. The integration between all my devices is, to me, the single most underrated feature of the Apple Ecosystem. From phone calls to text messages, web browsing and everything else I can put down any of my devices and pick up exactly where I left off on another. Until other ecosystems can match this with such ease it will take a lot to pull me away from Apple.

That said, I really don’t actually do a whole lot on my phone. I use it primarily to communicate and, when needed, to consume information and as a result I really don’t need a whole lot of apps to do what I need to do. Here’s what I have:

![iPhone Screenshot 2017](/images/2020/07/iphone-screenshot-2017.jpg)

For the most part it’s all stock apps (the only app not visible is the Watch app on the 2nd page of the “Apps” folder). Until I got the Apple Watch I actually had 4 less apps as the Fitbit watch did all of the health stuff I needed it to. Now I have a few others to get me extra information and while I fully admit the information is much better than what Fitbit offered I often feel like it might be a bit of overkill. The rest of the apps on here are geared either towards communication with people I care about or some browsing. **[Reeder][7]** is one of my favorites to keep up with RSS feeds when I’m not home.

I also have an iPad Pro (9.7″ with the Apple Keyboard cover) that is configured in a similar way as the iPhone but with even fewer apps as I use it almost entirely to browse the web or for Reeder when I’m at home and not in my office. While it is handy it will probably be my last iPad as I simply don’t need it around the house.

Finally, I have a white 42mm Series 2 Apple Watch I bought last month to replace a Fitbit Charge that was simply falling apart. This was a surprise find for me as I really didn’t think I would care for it but it is now one of my favorite devices of all time. While home my phone pretty much stays on its dock and with the watch I can handle phone calls, text messages, Slack, weather, sports scores and even our Phillips Hue lights. While none of these functions are vital, combined with the excellent health tracking I’ve found it far more valuable than my Fitbit ever was and it will make moving on from iPhone a lot more difficult for me in the future.

## That’s it

Over the last couple of years my toolbox has evolved from a mishmash of apps to a powerful toolkit that works with my devices to, hopefully, make me as productive as I can be without the stress of endless notifications and other distractions.  I’ve gone from finding a new tool for each task to simply learning how to apply the tools I already have to meet further challenges and it has, quite simply, made me better at what I do.

_**So what’s on your computer?**_

 [1]: /2016/05/my-tools-of-the-trade-2016/
 [2]: /2015/03/my-development-toolbox-2015/
 [3]: /2014/01/my-development-toolbox-2014/
 [4]: /2013/05/bit51s-development-tools-2013-edition/
 [5]: /2012/02/my-web-development-toolbox-2012/
 [6]: https://support.apple.com/kb/SP653?locale=en_US
 [7]: http://reederapp.com/ios/