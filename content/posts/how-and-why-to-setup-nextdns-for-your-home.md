---
title: "How and Why to Setup NextDNS for Your Home"
date: 2020-04-18T17:01:07-04:00
description: "A tutorial on how and why to setup private DNS for your home using NextDNS."
draft: false
images: ["/uploads/how-and-why-to-setup-nextdns-for-your-home.png"]
tags: ["DNS","networking","privacy"]
---

![How and Why to Setup NextDNS for Your Home](/uploads/how-and-why-to-setup-nextdns-for-your-home.png)

For the last decade or more I've been changing DNS hosts at home in hopes of achieving the holy grail, if you will of DNS services: a fast, private and reliable service that will do the job over the long hall.

Well, if you think I'm hear to tell you I've achieved that holy grail I'm going to warn you, I haven't. That said, I've managed to get very close. I've found a setup that can handle ad blocking and encryption without using Google or another big-tech DNS service and all without, at least so far, sacrificing performance and stability. I'll call that a big win.

## Why change your DNS service?

If you're connected to the internet on any modern device you're using a DNS service. This is the service that associates the URL you put into your browser or elsewhere with an IP address allowing your computer to find the server it needs. If you're looking for a deeper primer on what DNS is, I recommend you check out [this article](https://www.lifewire.com/what-is-a-dns-server-2625854).

For most of us DNS is a transparent service we never think of. When we connect to an internet provider at home or on the road we simply use the one specified in the connection without giving it a second thought. While fast enough, and mostly reliable, the problem here is we leak a lot of data to our DNS provider, data that can be used to target ads or, worse, to [redirect us to more lucrative destinations for the connection provider](https://labs.ripe.net/Members/babak_farrokhi/is-your-isp-hijacking-your-dns-traffic).

Simply put, where SSL might protect the actual data you transfer between your computer and the service you're connecting to your DNS data can still be used to know where you're going and then, in turn, can be used to help build profiles of you for ads or other services. For example, if I go to [https://www.trade-a-plane.com/], it would be relatively easy to deduce that I'm either looking to buy an airplane or, at a minimum, interested in aviation enough to target me with associated ads.

There are better ways.

## Changing your DNS service

In most cases, changing your DNS service to one other than your internet provider is trivial. You simply search for a service you want to use (Google and many others provide this service and may even configure it on your devices for you) and follow their instructions to configure it on your device or network. This does help, a little, in the privacy department as long as you trust the DNS provider you switch to with your data. Your internet provider, however, can still intercept your DNS traffic and get your data accordingly because most of these services aren't encrypted. Instead they're just like http addresses without the "s" where anyone listening can see the data being exchanged (if you're not familiar with https, I recommend checking out [this post](https://blog.hartleybrody.com/https-certificates/)).

In other words, sure you can switch your DNS provider but now that provider is getting your data (whether you trust them or not) and your internet provider can still read it if they want. Not much has really changed.

To get past this problem we need to encrypt our DNS queries like we do with https. There are two ways this is normally carried out, [DNS over HTTPS (DoH)](https://en.wikipedia.org/wiki/DNS_over_HTTPS) and [DNS over TLS](https://en.wikipedia.org/wiki/DNS_over_TLS). Both protocols make it much more difficult for your internet provider to know what you're looking for. Unfortunately, though, they're not as easy to implement, nor does every provider provide  it. Just adding the address, as you do with a normal DNS service, won't do it. Instead we need to do a bit more. Below is a breakdown of how I've implemented this for my home. It isn't free but, with little investment and about 20 min, you should be able to set this up yourself.

## Choosing a secure DNS provider

There are a lot of DNS providers out there. From Google to CloudFlare and OpenDNS to your ISP it isn't hard to find a DNS provider. The catch comes in two places. First, do you trust that provider with your data and, second, is it both fast and reliable enough for daily use. The latter is harder than it may seem to find and the former, well, I don't think I need to go into the issues surrounding Google and their use of your data.

After a lot of research and experimentation I've wound up [NextDNS](https://nextdns.io/) today. They're a new player, formed in 2019, but they have a few features that make them really stand out:

1. They have simple and solid [privacy policy](https://nextdns.io/privacy)
2. They offer both DNS over HTTPS and DNS over TLS
3. After a few months of use they have been fast an effective
4. They're currently free (although I'll gladly pay when the time comes)
5. They provide ad blocking that I've found to be as effective as [Pi-hole](https://pi-hole.net/) and similar services. I still use an ad-blocker but I could probably even drop it at home at this point
6. They have a [command line utility](https://github.com/nextdns/nextdns) that can run on a Raspberry Pi Zero to easily handle all the traffic for the devices in your home

For me this means we have a service I've found to be more reliable than Pi-hole and that I can easily take with me, particularly on my phone, using Android's [https://www.androidpolice.com/2018/04/14/google-explains-new-private-dns-setting-android-p/](private DNS feature).

## Setting up NextDNS at home

Looking to set this up yourself? Here's how I setup encrypted DNS for my whole home using NextDNS and a Raspberry Pi Zero.

### Setup Raspberry PI Zero to boot in headless mode

For this step you don't need to install anything special on the Raspberry Pi, just set it up so you get it on your network and can log into it via SSH. Here's a [great post](https://desertbot.io/blog/headless-pi-zero-w-wifi-setup-windows) on getting to that point.

### Configure your router to assign a static IP address to the Raspberry Pi

In order to make sure we have a consistent connection to the Raspberry Pi you will need to make sure it has a consistent address so that other devices can easily connect. Unfortunately, how to do this depends entirely on the router you have. Check for tutorials on yours to set this up.

### Install and configure the NextDNS client

Once the Pi is on your network with a consistent address, you're ready to set it up for NextDNS. For this step, log into your Pi and run the [install script](https://github.com/nextdns/nextdns#install) to get it running and configured.

### Set your Raspberry Pi IP address as your DNS address

Finally, all you need to do here is set your Raspberry Pi's IP address as the DNS server in your router or device.

That's it, you should now have reliable, secure and private DNS for your entire home.
