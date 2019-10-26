---
title: "How I Mostly Removed Google From My Life"
date: 2019-10-26T13:19:22-05:00
description: "A list of the services I've used to mostly replace Google in my life."
draft: false
images: ["/images/how-i-mostly-removed-google-from-my-life.jpg"]
tags: ["deGoogle","de-Google","Google","OSS","FOSS","open-source"]
---

![How I Mostly Removed Google From My Life](/images/how-i-mostly-removed-google-from-my-life.jpg)

Last month I wrote about [my ongoing efforts to leave big tech ecosystems behind](https://chriswiegman.com/2019/09/leaving-big-tech-ecosystems-behind/ "Post: Leaving Big Tech Ecosystems Behind"). In that post I talked a lot about leaving Google behind without giving any conrete examples. As a lot of you have asked what I've replaced Google services with, here's a list of where I've come on that effort and where I still need to go (recommendations are welcome).

* **Google Wifi -> [UniFi Networks](https://unifi-network.ui.com/)**: Google WiFi sounds great in theory. It's simplicity and scalability in your home should really make for a good product. In practice it failed for us though, and not just because I was passing all my internet traffic through yet another Google device (although that wasn't a good thing either). Even though our house is only about 1800 square feet I still needed 3 Google pucks as our walls are really tough on WiFi signals. This was too much for the main puck which crashed constantly due to, we think, interference but taking other pucks out killed WiFi to the rooms they were in. While it seemed like a great solution to replace our dead Time Capsule router, in the end it really wasn't. UniFi is a prosumer level solution (somewhere between consumer and commercial grade) that has allowed us to build out a solid network complete with a hardware firewall. In the 6 months I've had it I've only had to reboot it once for a firmware upgrade. I'll call that solid. If I was adding a network to any house or small business today I wouldn't look anywhere else.

* **Google Assistant -> ???**: This is something we lost in de-Googling (if you can really call it a loss). The fact is, Google Assistant, even with 4 home minis, never worked great. Add to that the fact that they are horrible for privacy and we just cut them out of our lives. I am looking at a combination of open source solutions such as [Candle](https://www.candlesmarthome.com/) in the future but for now we just added some hardware switches for our Phillips Hue lights (Google Assistant was originally added as a lazy way to control the lights) and all is well.

* **Chromecast Audio -> [Sonos](https://www.sonos.com)**: Chromecast Audio was one of the first Google devices we ever bought, well before we even had Android phones. They were simply a cheap and effective way to stream music thoughout the house. One of ours died, however, in June and they're no longer made. I bought a 2-pack of Sonos 1's (without Alexa or any other assitant) to replace it and I'm hooked. We now have 5 of them thoughout the house. For someone who listens to music or other audio all day rather than watch TV they have been wonderful.

* **Google Docs -> [LibreOffice](https://www.libreoffice.org/)**: I actually like LibreOffice but collaboration is something I do often as well as access docs from mobile. Both are next to impossible with LibreOffice at the scale of life (try getting your Google/MS/iWork friends to use LibreOffice... go ahead, I'll wait). All that said, until something better comes along, it works pretty well for my personal needs.

* **Google Music -> [Spotify](https://www.spotify.com)**: I like the seamless transition between devices but overall it feels like Spotify build 80% of an interface and gave up. From managing playlists to starting play over a Sonos speaker, it does work well though. While they could improve the UX, what they have is definitely good enough to keep me around for a while.

* **Gmail -> [Mailbox.org](https://mailbox.org)**: Six months in and I've been incredibly happy with this solution. I have them encrypt everything in my inbox with my public key which feels like a win. K-9 mail is adequate to get my mail on Android and I'm really liking Evolution in Linux for accessing it on my laptops.

* **Google Photos -> [Synology Moments](https://www.synology.com/en-us/dsm/feature/moments)**: I bought a [Synology DS918+](https://www.synology.com/en-global/products/DS918+) back in July as a device to finally replace the Apple Time Capsule that had died a couple of years ago. On top of backup, we use it for DNS and other services including as a replacement for Google Photos. It isn't as "smart" as Google's offering but I've found it actually easier to use for backing up photos on the phone and more. It's fast, efficient and still has some automatic sorting features making it easily the best replacement I've tried (and I've tried quite a few). In our case, ours is only accessible from a single IP address I pay for with my VPN provider. This keeps it off the main internet and far more secure. If you're looking at a device like this, and would want to put it on the general internet, I would highly suggest a similar setup.

* **Google Calendar/Contact/Drive/Tasks -> [Nextcloud](https://nextcloud.com/)**: While sharing isn't as easy as Google where everyone probably already has an account, it has been a solid solution. I run my own instance using Docker which has made for a mostly maintenance-free solution, that helps a lot as I can focus on using it rather than maintaining it.

* **Google Keep -> [Standard Notes](https://standardnotes.org/)**: If you actually want to take notes (I never did much in Google Keep as it was so bad) this is a great solution. It's basically a no-frills Evernote that works on every platform.

* **Google Keep -> [Wallabag](https://wallabag.org)**: As I said with Standard Notes, Google Keep really sucked for taking actual notes. What it did a descent job at was as a read-it-later service like Pocket and others. Wallabag replaces that functionality with a self-hosted solution that has been great for tracking and sorting posts for later. In Keep they were basically just bookmarks but Wallabag saves the whole article for reference and searching later, even if the original post is removed from the internet.

* **Google Maps -> [OsmAnd+](https://osmand.net/)**: OSM is so neat in concept but a complete failure at actually getting around. When I'm in a city and no where I'm going it will get me there. That's about all I can say about it. It is something I will replace when I can find a better solution.

* **Google Chrome -> [Firefox](https://www.mozilla.org/en-US/firefox)**: I love it on desktop and Android. Now, when I go back to Chrome, I feel like I've lost so much.

* **Google Search -> [DuckDuckGo](https://duckduckgo.com/)**: This has been a great service. At first I was afraid I was  missing something but, 6 months in and many comparison searches later, that just isn't the case. It works well and it doesn't track you like Google. That's a win in my book.

* **Youtube TV -> Netflix/Amazon Prime/Disney+**: We don't watch much TV so removing broadcast TV wasn't a big deal. I do occasionally miss some sports but not enough to justify the cost. If there is a fixture we really want to catch we can leave the house to catch it at a local pub or restaurant.

* **Google Domains -> [Hover](https://www.hover.com/)**: Hover is a bit more expensive, but it works. As a bonus, I don't have to worry about running afoul of ToS on Google which might cost me my domains.

* **Google DNS - > DNSMadeEasy and Quad9**. DNSMadeEasy has been great for my domains, Quad9 seems ok for home use. I plan to moving to an encrypted DNS solution for home by the end of the year but until I get there this does the job.

* **Google Fi -> NordVPN/???**: I'm using Nord to replace Google's VPN functionality but I can't find a replacement for the phone. In 3 years our highest combined data usage is this month where one of us has been gone the whole billing cycle and we're still barely over 1GB. Our bill this month will still only be about $50. I can't find anything that would work with travel while not doubling, or more, our monthly bill. On the VPN side (Google Fi does come with a VPN) I've been using NordVPN for about 2 years but, due to their recent acknoledgement of being hacked, I think it's time to find a new solution for that one.

* **Google Play Store -> [F-droid](https://f-droid.org)**: This works for _some_ things but most of the apps I need for work are still on play store so I can't get rid of it completely. I am getting closer though.

* **Google sports -> ???**: I'd love a good app for Soccer, College Football and MLB scores but I can't find anything that can compete with Google. For now I'm just doing without. Frankly, it hasn't been a big loss but I do miss knowing how the season is going for a few teams.

* **Google Messages -> [Signal](https://signal.org/)**: I would say about 80% of the people I text use Signal... the rest won't touch it. As a result keeping up with messages has become much more of a headache than it used to be on desktop as I often miss messages from non-Signal users entirely. On my phone I use Signal as the default SMS app though so it has been pretty much perfect.

* **Android -> ???**: Even as a long-time iOS user who only came to Android for Google Fi, I don't have much interest in going back that route. I've been eyeing the [Librem 5](https://puri.sm/products/librem-5/) for a while now and would love to give it a shot at some point but I'll probably need to find another phone service first.

In all, I'm pretty happy with my progress on getting out of big tech in general, and Google in particular, over the last few months. No longer do I have to worry about my entire life being in one account and what would happen if I ran afoul of a policy or if that account was ever compromised. For the most part, I even have less total expenses for subscription services than I did a year ago, although I make up for that with the time I spent in setup. Going forward I feel like I'm finally approaching a simple, for me, solution that will be sustainable over time. That's the real win in my book.
