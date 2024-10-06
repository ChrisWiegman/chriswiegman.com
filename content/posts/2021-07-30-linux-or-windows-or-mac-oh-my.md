---
title: Linux or Windows or Mac, Oh My!
type: post
date: 2021-07-30T13:53:46+00:00
url: /2021/07/linux-or-windows-or-mac-oh-my/
categories:
  - Technical
tags:
  - Linux
  - MacOS
  - Windows
---

The last few years have been a time of experimenting for me. Back in 2017 I realized my wife and I were too deep into the Apple ecosystem so [we left it and tried out a number of solutions][1] including Android, Linux and Windows in an effort to not be so heavily tied to one ecosystem.

On the desktop this has meant working at least part time in each of the three major operating systems available today: Linux, MacOS and Windows. Frankly, each has its pluses and minuses. Here is how they all shook out for my use.

## Microsoft Windows 10

I'm starting with Windows 10 as it is still the system I've used the least in the last few years. We bought a Windows Surface Pro for Joy that was intended to be an iPad replacement she could do real work on when we travelled.

My role with this machine has been to test various projects I'm working on in Windows and to maintain it for her. As a result my experience with the OS is more limited than the alternatives but has been more than enough for me to get a handle on how it works for my own workflow.

My big takeaway from Windows 10 is that, while better than Windows the [last time I used it in 2008][2], it is still too bloated and difficult to maintain compared to the alternatives. Updates are constant and interrupt work. Getting development tools to run is difficult even with WSL2 and the system has been, at least in my experience, the least intuitive out of any of the machines I've used.

All that said, if I was using it for basic computing like word processing, spreadsheets and similar tasks it would be fine for the day to day. I appreciate it is easily available without paying a premium for the Apple hardware and nearly anything I would need could run on it if I put enough work into it but that just wasn't something I was willing to do.

Add into the equation the tracking prevalent on modern Windows and it simply isn't something I can see myself going back to as my daily driver.

## Linux

Just saying I used Linux is something of a misnomer as, for all practicality, Linux is the underlying kernel for a variety of operating systems. In my case I've used two of these. On my servers I have used and continue to use [Ubuntu][3] and on my laptop I had used [Pop!_OS][4] from 2018 until last month.

On the server there isn't much more that I would want out of an operating system like Ubuntu. It's fast and stable, all the packages I would need are readily available and documentation for nearly any task is a web search away. I only have one personal server on Linux at the moment but it isn't going anywhere anytime soon.

On the desktop (or laptop as it might be), Linux is a different story. It's definitely faster and easier to maintain than Windows but managing software on it still isn't easy. While nearly everything is available for it getting that all to work with your system is another matter entirely. Earlier last year we were even considering replacing Joy's Mac with a Linux machine but, in the end, I realized that [I simply couldn't recommend it for anyone else to use][5].

The issue with desktop Linux simply comes down to the fact that I need computers to be tools I use to implement my ideas and do my work. With even the best Linux distros, however, my computer became the project itself. Instead of focusing on building _with_ Linux I found I spent the bulk of my time getting one app or another to simply work as it should.

When I switched to Linux I knew I was going to have to make changes in the software I used but what I wasn't prepared for was how many apps that were officially available on Linux needed to be changed out as well. For example, PhpStorm, which simply couldn't easily launch a project from the command line at the time.

Another great example is Docker itself. While it's made for Linux and super fast on the platform, for development most of what I needed to work on was originally created by Mac users. As a result I came to loathe dealing with Docker permissions on Linux as it was quite an adventure to get many dev environments to work in a productive fashion.

All that said, the real end of my Linux experiment on my personal computer came from two major issues. First, a driver change meant I couldn't use my monitor with the machine. Going through various support forums didn't result in an answer as everyone involved kept blaming someone else for the problem. This was a common theme with my Linux experience in that everything works great until it doesn't and then you're just out of luck.

The second dealbreaker for me was integration. I don't want to ever have to juggle multiple devices at the same time. I could reach this state, for the most part, if I moved entirely into the Google ecosystem but their issues with personal privacy meant that was not a good option for me. For example, if I get a phone call or a message I want it to come through to whichever device I'm working on. On Mac that's built into their ecosystem. On Linux I never could get it all to work no matter which blog posts I read or apps I tried. Combine this with fighting other issues in the ecosystem and, in the end, Linux is great for some workflows but not mine.

## MacOS

Finally I'll talk about MacOS. As of today this is what powers my work machine and I don't have a personal laptop at all.

As a computer MacOS has a few distinct disadvantages. First, Apple computers are ridiculously expensive up front. Second, Apple limits their operating system in weird ways and getting some apps and dev tools to work on a Mac can sometimes be harder today than it was ten years ago.

For my needs, however, Mac does just kinda work. The default apps (Safari, Notes, Reminders, etc) are good enough for most of my needs (on Linux I never could find a note taking app that could compete on simplicity and flexibility) and the integration means I can use my computers the way I want to. On top of it all, I'm not memorizing multiple keyboard shortcuts, learning to use new apps, etc. What I use for work I'll be able to use when I get a new MacBook Pro and all my data is available to me on any device on which I need it.

While I often wish Apple was more flexible with its software there's also some truth to the fact that just using default apps keeps me from wasting endless time looking for alternatives.

In three years on Linux I tried 4 different note taking apps and, in the end, had exactly zero notes saved in any of them when I sold my last Linux machine. On my iPad and work Mac I already have dozens of notes I refer to regularly and use for things like helping to write for this site. The apps aren't perfect, not by a long shot, but they're good enough that I can actually use them without losing all my productivity to decision fatigue while looking for the "perfect" app. That goes a long way.

Finally, one of the biggest wins for Mac is the family sharing features. My parents have been on Apple for years. As they've retired and stopped using computers daily it has fallen more and more on my shoulders to support what computing they do (they both have iPhones and iPads). When I was using everything outside of Apple helping them with issues or even sharing photos or messages with them was far more difficult. While I was able to get them on Signal (and we still use it) for messaging there were so many other little things that frustrated them to no end.

Today I've simply bought [Apple One][6] and added them to a family plan and everything really is much smoother. Yes, if I had unlimited time and they had unlimited patience we could meet their needs with something else but that is not and never will be possible. Moving to Apple One means my mom can share pics with me or FaceTime me during holidays. It means that when I send a song or a video link to them I know how it works and they'll be able to use it. It means that when my dad needs help due to a change in an app or setting I have a reference where I can instantly look it up and try it myself first. These little "wins" are something I don't want to give up again. The frustration for the time I left Apple was real on their part as I was always "that one person" who insisted they install and learn a new app for everything. No more of that.

## So which is best?

So that's a whole lot of stories on my experience with various operating systems without advice on which is best for you. That isn't an accident.

The best operating system for you is the one that best enables to do your best work.

That's not a trick. If your work requires Windows then that is the best operating system for you at work. If you're familiar with Apple it very well might be the best operating system for you. If you like to tinker and are willing and able to put up with all its quirks, Linux is a really wonderful operating system.

In the end we can argue which OS is technically superior today (it really does change from year to year) but the best means nothing if "that one app" you really need isn't available for it.

In a perfect work privacy wouldn't be a worry, cost wouldn't be prohibitive and extensive knowledge wouldn't be a requirement to use your tool but, we're not in that perfect world. Go out on make your best work on what works best for you. There's no need to worry about what the alternatives offer. Try them because you can, if you wish, but never worry about them as something you must switch to because what you're using is somehow "wrong."

 [1]: /2017/12/from-apple-to-google-and-more-my-adventure-in-escaping-the-apple-ecosystem/
 [2]: /2008/11/2-weeks-with-a-mac-after-15-years-with-windows/
 [3]: https://ubuntu.com
 [4]: https://pop.system76.com
 [5]: /2020/04/why-i-cant-recommend-linux-to-others/
 [6]: https://www.apple.com/apple-one/