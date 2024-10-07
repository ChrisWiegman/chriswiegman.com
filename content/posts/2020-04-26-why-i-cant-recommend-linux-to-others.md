---
title: Why I Can’t Recommend Linux to Others
type: post
date: 2020-04-26T15:04:00+00:00
url: /2020/04/why-i-cant-recommend-linux-to-others/
categories:
  - Technical
tags:
  - Linux
---

I love working with Linux. It’s been my primary OS for almost two years now and I’ve been using it on servers for 20 and as a secondary OS for nearly as long. That said, it isn’t perfect. As much as it pains me to say it, I would not recommend anyone switch to Linux these days. It just isn’t a great OS for a daily driver unless you are both patient and simply love the software. Here’s why…

## It’s not the drivers

It isn’t driver support that keeps me from recommending Linux. In fact my own experience has been my Linux laptops work with nearly everything right out of the box and even require less driver installs for things like printers and other peripherals than our Mac laptops. The only trick is to spend a good 5 minutes looking at the hardware you’re considering before you buy it. Gone are the days of fighting network or display drivers. These days things just work, and, at least in my experience, work well.

## It’s not the software availability

In addition to drivers, there aren’t many applications or, at a minimum, application categories that aren’t available on Linux these days.

When I switched to Linux from Mac two years ago this was a big worry for me. I still remember the search for software when I went from a combination of Windows with some Linux almost 15 years ago. It wasn’t fun as, at the time, nearly everything was restricted to a single platform. That’s not true anymore. Today, not only is everything I need available but, in some cases, it works better than it did on Mac. There were a few Mac-only apps that I had to replace, in particular Paw and Forklift, but the replacements I’ve found for Linux are at least as good for my needs if not better, as is the case of going to Postman from Paw.

It’s not a perfect world though. There are still apps that don’t transfer. If you need Microsoft Office or Adobe Creative Suite, for example, you’re still out of luck. If you’re a casual user of either of these you might find dual booting with Windows serves your purposes just fine but, if you use either of these heavily, you’re out of luck. That said, thanks to Electron and other projects software parity between desktop operating systems is easily achievable for 99% of users. From development to productivity and even gaming there is a lot more that can run on Linux these days and that is a very good thing.

## Software distribution is a dumpster fire

So my hardware works and the software I need is available so what’s the problem?

Software distribution

There seems to be almost as many package managers and other software distribution gimmicks for Linux as there are frameworks for JavaScript and nearly all are just as bad.

Finding your app for Linux is one thing. Getting a current version installed on even a mainstream distribution is another thing altogether. Here’s my workflow on nearly every app I use these days:

1. Is it in the official apt repos (I use Ubuntu and Pop_OS)?
2. If it is in the official apt repos is it current? Many apps in the official repos will only see updates when the operating system updates.
3. If it is not in the official repos is there a [PPA](https://itsfoss.com/ppa-guide/)?
4. If there is a PPA is it from the software creator or is it someone else who may never update it again?
5. If there isn’t a PPA does the software creator have their own apt repo?
6. If there is no apt repo can I install it with [Homebrew](https://brew.sh/)?
7. If it’s not in Homebrew which format is officially supported, [Snap](https://snapcraft.io/), [Flatpak](https://flathub.org/), [Appimage](https://appimage.org/), something else?
8. If it is in another format is that format maintained?
9. If it is in another format will that format work with my Gnome setup, etc?
10. etc… etc…

The list goes on. Trying to find a current version of most apps that can be kept current and will actually work with even your mainstream distro is an exercise in extreme patience.

Did you know, for example, that Snaps, the official format adopted by Ubuntu, only works with its own packaged Gnome themes? Use something else like the popular [Materia Theme][1] and your app might not look like it even belongs on your system. Maybe you want a popular app like [Standard Notes][2] but you [actually want the app icon to install in your app drawer so you can launch it][3]? Sorry, you’re out of luck without handling that common function yourself. Want a current copy of the popular [GnuCash][4] without compiling it yourself? Nope, you’re out of luck again.

Even when you get it all worked out on your current OS, just wait for a new OS version to come out. You’re back to square one in trying to find current sources for many apps again.

## How can this be fixed?

The solution to this problem isn’t a technical limitation, not by a long shot. Every other operating system handles this just fine. In Linux, however, we many never get there simply because of egos. Rather than work together on the problem Linux users have decided to follow JavaScript’s model of reinventing the wheel in a silo over and over again rather than working together for a solution that would benefit all.

Maybe, someday, Linux users will be able to work together and solve this, at least for the major distributions. At that point I will gladly recommend Linux to everyone I know. Until then I know better than to do so.

 [1]: https://github.com/nana-4/materia-theme
 [2]: https://standardnotes.org/
 [3]: https://github.com/standardnotes/desktop/issues/518
 [4]: https://gnucash.org/