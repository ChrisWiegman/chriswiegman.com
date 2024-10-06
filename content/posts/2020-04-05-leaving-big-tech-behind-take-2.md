---
title: Leaving Big Tech Behind Take 2
type: post
date: 2020-04-05T14:50:19+00:00
url: /2020/04/leaving-big-tech-behind-take-2/
categories:
  - Technical
tags:
  - Amazon
  - Big Tech
  - FOSS
  - Google
  - Nextcloud

---
For much of 2019 I focused hard on reducing my reliance on big-tech, especially Google. While I had gone fairly far, I hit a few bumps in January that had me [temporarily reversing some of my progress][1] and putting my email, calendar and files storage back on Google for a bit. To make a long story short, the configuration and services I was running were requiring far more time than I had and simply weren’t sustainable for me or, should something happen to me, for my wife. Things had to change.
I spent much of February this year looking at ways to de-Google again and learned quite a bit in the process. First, much of my original problem had to do with how I was running the services I was using. In short, I had a corrupt file-system on the shared storage drive I was using that was causing all sorts of weird issues in pretty much every service I was using. In addition, running Mastodon on my own required a lot more power and time than I really wanted to deal with. It was, by far, my most needy service on a good day. With the disk problems I didn’t know I was having at the time it was pretty much unmanageable.

Today I’m happy to say I’ve managed to dump far more Google and big-tech from my life than I had even before January’s road blocks. While it’s all still a work in progress (I still have an Android phone, for example), I’m pretty happy with how far I’ve come.

## Restarting My Own Services {#restarting-my-own-services.wp-block-heading}

The first major change I’ve done this time is I’ve restarted my own services with a few changes. Now I use both DigitalOcean backups as well as a few weekly scripts to ensure I have a regular off-site backup of all my servers. Last time around I was using Amazon S3 as a shared file store and it was what was costing me all my problems. I’m not doing that anymore. This time it’s just native storage and good backups and it all works so much better.

One thing I’m not self-hosting anymore is my Mastodon server. I’ve gone back to my own instance but, instead of dealing with it myself, I’m using [mastohost][2] to host it. For a price about the same as I was paying, the updates and other maintenance are now taken care of and it has been quite the weight off my shoulders.

## Leaving Big Tech Behind Part II {#leaving-big-tech-behind-part-ii.wp-block-heading}

First, there are a lot of services I don’t need to repeat from [my previous post on the topic][3]. Many of the services I had moved to last October I’ve gone back to. I won’t repeat those here. Instead, here’s a list of the remaining services and the changes from that post.

<ul class="wp-block-list">
  <li>
    <strong>Google Assistant</strong> <br />In the end, this is one service I simply didn’t need to replace. I bought physical switches for some of our Phillips Hue bulbs and they’re working great. If I want to listen to music, I simply start it with my phone or computer. If I want to set a timer I do it on my watch. Somehow I think we’ve forgotten how easy or simply unnecessary many of the tasks we rely on assistants for actually were. That was definitely my case here.
  </li>
  <li>
    <strong>Google Keep -> NextCloud</strong> <br />When I last wrote about leaving tech last year I had moved my notes to Standard Notes. In the end I found their apps more trouble than they were worth so I’ve since moved all my notes to NextCloud where I use the <a href="https://apps.nextcloud.com/apps/notes">NextCloud Notes App</a> on my phone and my normal text editors on Linux and Mac. It’s easy, agile and I can write all my notes in markdown which is a feature I’ve really come to appreciate as I’ve begun taking more and more notes for work and personal.
  </li>
  <li>
    <strong>Google Domains/Hover -> <a href="https://www.gandi.net/">Gandi</a></strong> <br />I wanted to like Hover but they had real issues with any changes that needed to be made to contact information or anything else. At the recommendation of a few friends I gave Gandi a try and they’ve been one of the easiest registrars I’ve ever transferred a domain to. Granted I don’t have many that I maintain anymore but, for what I do have, I managed to move them to Gandi in less than an hour. That’s a record even for my modest collection.
  </li>
  <li>
    <strong>YouTube TV -> <a href="https://www.hulu.com/">Hulu</a></strong> <br />We still have Netflix and Disney+ but we’ve replaced live TV with Hulu. They have a great channel lineup, including local news, for times like now where we’re home more than ever. I don’t know if we’ll keep live TV forever but, for now, we’re quite happy with the service from Hulu.
  </li>
  <li>
    <strong>Google Fi -> <a href="https://www.xfinity.com/mobile/">Xfinity Mobile</a></strong> <br />Fi was a hard service for us to leave because it simply worked. When Xfinity added support for our Pixel phones a few months ago though, we couldn’t resist. We use almost no mobile data so our entire phone bill each month is now less than $15. For the next time we leave the country I’ll just get a sim card. Problem solved.
  </li>
  <li>
    <strong>Google Fi VPN/NordVPN -> <a href="https://github.com/trailofbits/algo">Algo</a></strong> <br />With VPNs I’m done trusting any service. Algo itself isn’t a service but a script that will spin up a VPN server on your own hosting. For less than we were paying on NordVPN I now have a super fast VPN running on DigitalOcean and with a static IP that I use to help further lock down my own servers and networks.
  </li>
  <li>
    <strong>Amazon Prime -> Local Stores</strong> While not Google, another big-tech ecosystem I’ve wanted to leave for a while now is Amazon. Paying for their Prime service just made using them too easy. I’m happy to say I’ve finally dropped prime and we’re using local stores for as much as possible. If I absolutely need something, and it isn’t available locally, I can wait for it for a few days from Amazon. It’s amazing how much this has cut down our splurge purchases and how many great local places we’ve found for the rest.
  </li>
</ul>

For now I’m pretty happy with this. When I last wrote on leaving big-tech we were still stuck in Google Fi and relied all-too-much on Amazon for shopping. Dropping them has made a huge difference. I’m still on an Android phone, for now, until a worthy alternative is available but I use my phone so much less than I used to that it doesn’t really bother me. In an ideal world everything I own would be small-tech but I don’t think that world is possible in the foreseeable future. I’ve stopped worrying about it and just embraced doing what I can to make a world of sustainable small-tech possible.

 [1]: /2020/01/the-road-to-sustainable-tech/
 [2]: https://masto.host/
 [3]: /2019/10/how-i-mostly-removed-google-from-my-life/