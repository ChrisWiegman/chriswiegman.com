---
title: Hello Again Linux, I Missed You
type: post
date: 2022-12-05T14:12:05+00:00
url: /2022/12/hello-again-linux-i-missed-you/
featured_image: /images/2022/12/hello-again-linux.jpg
categories:
  - Technical
tags:
  - Apple
  - Hardware
  - Linux
  - Tools

---
When I started moving back to Apple last year, both [with my mobile][1] and [my laptop][2], I promised myself it would be a temporary move as I really loved working [Pop!_OS][3] and Android. Today I'm deeper into the Apple ecosystem than I've ever been and, frankly I'm not too happy about it. Add to that projects like [Kana][4] work great in Mac but I'd like to at least make it available to Linux users and my all-Apple tech stack just doesn't sit will with me.
The last time [I tried to leave Apple][5] I did pretty well until issued came up with the tech I share with my family. I moved too fast, pulling all my data out of both Apple and, later, Google and it made working with family extremely stressful for everyone. In part of coming back I tried to simplify things for my wife and parents even further and added them to a family iCloud account which now handles nearly every piece of data you can imagine. Email, reminders, calendar, music, TV, podcasts, photos, news, files, games, fitness, health data, even a lot of my purchases all go through Apple today and I don't think it's a safe place to keep that data but I can't just drop it all again. I need to move slowly and deliberately to make sure everyone can still work with me the way they need to.

This past week I took the first step to moving back out of Apple. I bought a [framework][6] laptop and installed [Ubuntu][7] on it. This post is my first real work on it and I'm so very impressed so far. With a bit of luck this will be a real first step to getting away from manipulative big tech for good.

## The Framework Laptop

My last Linux laptop was an Oryx Pro from [System76][8]. I loved the software on it and the hardware was incredibly capable but it also had two fatal flaws for me. First, it was HUGE. I used to tell people I could use the power supply as a weapon and, really, I wasn't kidding. Second, it had a hybrid graphics card that was a bit weird to work with in the best of times and, in the end, lead me to sell it when a driver update stopped it from working with my monitor at all.

I've never really stopped looking at Linux hardware after selling the Oryx Pro but I didn't really see anything else I cared to use either. I wanted something more portable, preferably with USB-C charging, and I wanted something both powerful enough and well enough supported that I could use it for anything I need it for and can get it fixed easily when something goes wrong. That last one is particularly important as I also had an Asus Zenbook laptop I bought alongside the Oryx Pro to have something I could carry easily. It was great on size and power but died after 14 months. After talking to support the fix was going to cost more than the machine was worth so I wound up recycling the machine and going without. It was a tough lesson on the benefits of good support.

I first encountered framework earlier this year and it seemed like the perfect laptop for my needs. It offers lots of power with configurations up to i7 processors and 64GB of RAM. It is small, even lighter than my 13&#8243; work Mac and, most importantly, it isn't just repairable but comes from a company with a goal of making _sustainable_ machines. Nearly every piece of it can be replaced with nothing but a screwdriver and everything from the keyboard to the monitor to the processor and more can be replaced or even upgraded a-la-carte later.

When I read [Cory Doctorow's post on what happened when he broke his framework][9] I was sold. Here was a small laptop with plenty of power and Linux support all in a package that could last me years, even after something does fail. It was time to try Linux again.

This past Wednesday I ordered a DIY model (yes, you can order this laptop and put some parts of it together yourself) with a 12th generation i7 processor, 32GB or RAM, a 512GB hard drive and 4 USB-C ports. I didn't order another charger with it as I have plenty already and I didn't quite max it out but this configuration will be more than enough for what I want to work on.

In a testament to the responsiveness of framework, a small company, I ordered it about 9pm ET on Wednesday. It shipped by 9am ET Thursday morning from Taiwan and I had it in my hands in Florida at about 10am on Friday. Even Amazon can't get most orders to me that fast.

Mine arrived with the ports, RAM and hard drive in their own boxes so Friday night I assembled it all. It took about 15 min and was super easy. The only issue I had was that I still took the keyboard off a bit quickly (every step warns you to be careful) and thought I broke the ribbon cable but all was good. It booted up right away and within about 20 minutes I had Ubuntu 22.10 on it and was ready to go.

## Back to Linux

This weekend I've been working more on Linux than I have on Mac and oh how I missed it. I had my code setup on the machine quickly and was able to get started working on various projects within an hour or two. The only issue I've found so far is that waking the computer from sleep can be a bit weird and often requires a reboot but that isn't anything new both my Oryx Pro and the Asus had the same annoying issue.

Overall the hardware support with Ubuntu has been even better than what I had with System76 which is saying something as System76 not only sold me the Oryx Pro, but build the Linux distro, Pop!_OS, that ran on it. For example, the fingerprint sensor on the Oryx Pro never did work. With my framework and Ubuntu it worked right out of the box. That was pretty cool to me.

What isn't so good, so far, is just how much data I have in Apple. While I was able to get my iCloud email into Thunderbird (yay for legacy IMAP support) that's about the limit of what Apple will let me access with Linux. I've spent far too much time going back and forth for files, reminders and other data and that is going to have to change.

So far the only big issue I've had with Linux is my music. We use Apple Music with Sonos as it allows us to merge our old albums and streaming music seamlessly. More important, we started with Sonos when I was last on Linux as it seemed to work so well with the platform. This time around it was a complete failure. It doesn't seem like there is anything that can make Sonos and Apple Music work on Linux and that's a bit rough considering I listen to albums all day and constantly adjust my playlist while I work.

## Going forward with Linux and my data

So now starts the real fun in getting my data and services back off of Apple in a way that won't make things difficult for my family. I do believe I'll start with carefully setting up some self-hosted services like Nextcloud and Wallabag again and take my time with moving Joy and everyone else only when they need something. Thankfully my iPhone and Mac should last quite some time yet so there's no reason to hurry other than there are things I really do want to be able to get to more easily from this machine.

In the end this is the route I should've taken in the first place instead of [getting a fancy iPad][10]. My desire to simplify combined with my family's tech needs and simply lead me into complacency and, frankly, Apple does mostly work for me. If I can make a tech stack that works better and better fits my values than Apple or Google I will be very happy indeed.

 [1]: /2021/01/back-to-iphone/
 [2]: /2021/11/first-impressions-of-my-m1-macbook-pro/
 [3]: https://pop.system76.com/
 [4]: https://github.com/ChrisWiegman/kana/
 [5]: /2020/12/my-adventures-in-leaving-big-tech-a-status-update/
 [6]: https://frame.work/
 [7]: https://ubuntu.com/
 [8]: https://system76.com/
 [9]: https://doctorow.medium.com/the-framework-is-the-most-exciting-laptop-ive-ever-broken-c06fc1245807
 [10]: /2021/06/two-weeks-with-the-ipad/