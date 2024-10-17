---
title: From Vista to Linux (It was a lot easier than I thought)
date: 2009-02-19T05:00:00+00:00
draft: false
categories:
  - Technical
tags:
  - Development Tools
---

![From Vista to Linux](/images/2009/02/Linux-penguin-225x225-150x150-1.jpg)

Like many I had been looking for a way to get my office computer off of Windows for some time. I had played around with various [Linux distros](http://www.distrowatch.com) and even [Mac](http://www.apple.com/mac/) for about 5 years, but I always had some excuse as to why I couldn’t just make the switch. Usually this amounted to “but what would I do without \[insert app here\].” For the most part I use my computers for web development as well as a little software development as well as networking with friends and colleagues. I don’t play games and I don’t have to work with many proprietary applications so the idea that I couldn’t replace the apps I use with those available on Linux was a little less founded.

Well, last week I decided enough was enough. I was tired of the 7 and a 1/2 minute boot-up. I was tired of the random waiting after clicking on anything in nearly any program. I was generally tired of all the little nuances we take for granted in Windows. It was time to switch.

For the switch I picked [Ubuntu](http://www.ubuntu.com) 8.10. Why? Well there are a few reasons. First, it has one of the largest package repositories available. Although I don’t mind compiling and installing apps, the idea that they are there waiting for me does make things a little easier. Second, although I don’t often pay for commercial support I am a big believer in that a strong base of free support such as forums, blogs, etc is a necessity. In this area Ubuntu really seems to outshine the competition. Nearly every search I’ve had to do to answer a Linux question has presented the answer based on Ubuntu (Fedora was a close second, but just not quite there). Finally, I like [Gnome](http://en.wikipedia.org/wiki/GNOME). Say what you want about [KDE](http://en.wikipedia.org/wiki/KDE), Gnome, etc but Gnome for me has always been stable in all the distrobutions I’ve worked with. On top of that, although KDE has matured with 4.2 there just seems to be too many bugs and other problems to make it worth it.

So what about the app issue? How did I manage to replace [Microsoft Office](http://office.microsoft.com), [Adobe Web Suite](http://www.adobe.com/products/creativesuite/web/?promoid=121DJGTB_P_US_FP2_WP_CS4_MN&tt=P_US_FP2_WP_CS4_MN), and all the other apps I use with Windows? Well here’s the breakdown:

For Office I chose [Openoffice](http://www.openoffice.org/) and I’ve been highly impressed. I had used the App back in the 1.0 line and it left a lot to be desired. With the advent of 3.0 however it seems to have come of age in both features and stability. I’ve been able to completely replace MS Office without looking back.

For [Dreamweaver](http://www.adobe.com/products/dreamweaver/?promoid=BPDEC) I’ve migrated to [Aptana](http://aptana.com/). For those who like the WYSIWYG features of Dreamweaver this won’t be an option, however as I hand code everything myself and haven’t use Dreamweaver’s WYSIWYG since DW 3 or earlier I didn’t lose anything. In fact, I’ve gained quite a bit in code support and the ability to integrate my projects with other applications such as [Eclipse][1] (which I’ve used for some time on Win/Mac).

[Photoshop](http://www.adobe.com/products/photoshop/family/?promoid=BPDEK) has been a little trickier. For the most part I’ve been able to do everything I did in Photoshop using [Gimp](http://www.gimp.org/) and [Inkscape](http://www.inkscape.org/). However I still can’t do all the little details I had perfected in Photoshop over the years and I admit that I have kept Photoshop installed on my Mac. Over time I’m sure I’ll be able to get rid of this as well, however for now I still use it for about 20% of the graphics I need to do.

For web browsers I’ve finally given up my [IE](http://www.microsoft.com/windows/products/winfamily/ie/default.mspx) and [Safari](http://www.apple.com/safari/) and migrated to [Firefox](http://www.mozilla.com/en-US/firefox/). This was another app which in the past hadn’t quite evolved to where I needed it. However with 3.0 I’ve found it to be the most versatile browser I’ve used especially when combined with all the [add-ons](https://addons.mozilla.org/en-US/firefox/) available.

For development I’ve been using FTP and testing remotely for years, but with dropping Dreamweaver I just haven’t found the same ease of integration that Dreamweaver has with their FTP features. Instead I’ve replaced it with something better. Namely, I’ve migrated my projects to Subversion repositories using [SmartSVN](http://www.smartsvn.com/) as a client and I test locally with [XAMPP](https://www.apachefriends.org). This setup has even managed to work on some of my servers in that I can use an SVN update to push the latest version of the files out to the server without having to deal with FTP or any other technologies (although I do keep [Filezilla](http://filezilla-project.org/index.php) on all my systems just in case).

As for keeping my files in sync between all my computers I’ve gone from [Sugarsync](http://www.sugarsync.com) on Mac and Windows to [Dropbox](http://www.getdropbox.com/). For the most part its a flawless solution however Dropbox does have one downside in that you cannot choose individual folders to sync on each machine. It isn’t something I can’t live without but I would be lying if I said I didn’t miss Sugarsync for that one feature.

Lastly there have been a few things that I just have to have Windows for. Namely there is an app known as Talon we use at work which is specifically designed to only run on Windows/IE (don’t get me started on that topic). For this I’ve gone with [Virtualbox](http://www.virtualbox.org/) and loaded a copy of Windows XP in a virtual machine. Considering I only have to look in Talon for a few minutes once every few days this has been a fine solution. Using the Virtual Machine also gives me the added ability of testing websites on Window’s browsers so in the end it definitely is a worth-while setup.

All in all I couldn’t be happier with my switch. On top of having a much faster, more stable system I have found that using Open Source apps has been a great benefit over the multiple computers I use (so I’m a little behind on that one, what can I say). At this point I’ve managed to integrate all the new apps I’ve found with Linux into my other Windows and Mac machines. The only exception has been Photoshop which I have left on my Mac for the few tasks I still can’t figure out in the Gimp.

Oh, by the way, now that I seem to have all my computers in order I should be able to start writing a little more often…

 [1]: http://www.eclipse.org