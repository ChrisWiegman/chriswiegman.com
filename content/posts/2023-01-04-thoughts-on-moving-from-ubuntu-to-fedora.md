---
title: Thoughts on moving from Ubuntu to Fedora
type: post
date: 2023-01-04T13:43:24+00:00
url: /2023/01/thoughts-on-moving-from-ubuntu-to-fedora/
categories:
  - Technical
tags:
  - Fedora
  - Linux
  - Tools
  - Ubuntu
---

Last week I did something I didn't expect to do. I switched from [Ubuntu Linux][1], which I had used directly or via derivatives for well over a decade, to [Fedora Linux][2]. After a few days on Fedora I don't think I'll be going back to Ubuntu any time soon.

## Why switch?

There wasn't a technical reason for the change. I had been thinking of trying Fedora since [I bought my laptop][3] a month ago. What got me to do it last week was when I realized, probably thanks to not having used Linux for a while, that I had missed adding full-disk encryption to the machine on Ubuntu.

Unlike other operating systems you can't just encrypt a disk that is already running Linux. Instead you have to re-install the OS and apply encryption during the setup process. This made for a perfect opportunity to give Fedora a try.

It's not that I had been unhappy with Ubuntu either. After over a decade of using it with both laptops and servers it worked well for me and didn't create any real problems. I just wanted to try something new. Given that Fedora is also well supported by [Framework][4] and offers a bit more vanilla implementation of Gnome, I didn't have anything to lose. My Linux laptop isn't my primary computer, it was time to try something new.

## Where Fedora wins

First, Fedora _feels_ cleaner than Ubuntu. The UI seems less cluttered and smoother than where Ubuntu has gone. That may just be because it doesn't rely so heavily on the brown color scheme but it was instantly noticeable to me and, frankly, I really like it.

Second, at least on my laptop Fedora does seem to run better. Both distros worked fine with all the hardware but Ubuntu, at least with 22.04, still tended to crash a lot. In addition, Ubuntu often couldn't wake from sleep at all if I closed the lid and it threw a bios warning with every boot. Fedora does none of that. It boots without any warnings and has had far fewer crashes than Ubuntu. I don't even feel like I have to turn the laptop off if I put it aside for a little while and that has been incredibly nice.

In the end, while it surely has a lot to do with my hardware, Fedora is just working better than Ubuntu. Add in the cleaner interface and I'm very happy with it.

## Where Ubuntu wins

I've railed against Linux software distribution [for quite a long time][5]. The need for multiple package managers on every distro is not a good thing, on Fedora I'm finding even a few more issues with software distribution than I did with Ubuntu.

Fedora uses Flatpak, which is fine. Ubuntu defaults to Snap. The catch is I've encountered a number of apps that say they only support Ubuntu. While nothing has been a show-stopper, just getting everything to work in Fedora was definitely more of a challenge as the entire ecosystem seems to have conflated Ubuntu with Linux in the same way that so many conflate Mastodon with the Fediverse. It's incredibly annoying.

One example I'm still trying to sort out is Docker. On Ubuntu Docker Engine's installer takes care of all the firewall rules for you. That isn't the case on Fedora and now I find myself still trying to figure out how to get containers to talk to each other on the new distro. It isn't insurmountable, but it isn't fun either. If I was a less-experienced user I could see the additional burden of less-supported software forcing me to throw in the towel.

## In conclusion

In the end, I do have the experience to push through the issues caused by the lack of support for Fedora and I really do appreciate both its hardware support and clean Gnome implementation. I won't say I'll never go back to Ubuntu but, at least for the time being, I think Fedora is going to work quite well for me. Maybe it will even be able to become my daily driver before too long.

 [1]: https://ubuntu.com/
 [2]: https://getfedora.org/
 [3]: /2022/12/hello-again-linux-i-missed-you/
 [4]: https://frame.work/
 [5]: /2020/04/why-i-cant-recommend-linux-to-others/