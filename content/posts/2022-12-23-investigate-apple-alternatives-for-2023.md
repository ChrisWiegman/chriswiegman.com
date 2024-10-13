---
title: Investigate Apple Alternatives for 2023
date: 2022-12-23T11:50:44+00:00
draft: false
categories:
  - Technical
tags:
  - Self-hosting
---

I'm back at it. For the last week I've been exploring what it will take for me to get out of the Apple ecosystem and on to more open system such as Linux again.

## What I'm testing

I use a lot of Apple services at this point. Pretty much, if it can be turned on in iCloud settings I'm probably making use of it at one level or another. This means I have a lot of things to explore to replace it all. I spun up a private repo for testing my self-hosted configuration with the following apps:

* [FreshRSS](https://freshrss.org/)
* [Gitea](https://gitea.io/)
* [Lychee](https://lychee.electerious.com/)
* [Nextcloud](https://nextcloud.com/)
* [Photoprism](https://photoprism.app/)
* [Vaultwarden](https://github.com/dani-garcia/vaultwarden)
* [Wallabag](https://www.wallabag.it/)

All these apps sit behind a [Traefik][1] proxy and, as of this writing, are running well on my Linux machine locally.

## What is working, and what isn't

Out of the apps above Nextcloud, Wallabag and Gitea are all working well. The rest are missing one thing or more that I already have that I don't want to do without. For example, FreshRSS was great the last time I used it but today I'm using [Inoreader][2] for hosting, not only the feeds I read (about 200 in total) but also a number of email and other site configs (sites without RSS). FreshRSS can only handle the RSS feeds so switching to it would mean losing about 10% or so of the sites I read daily. To the best of my knowledge there's no open-source solution that can replace the functionality.

Beyond RSS, Vaultwarden will be very promising if I can convince family to switch but I fear photos are going to be a major pain point no matter what I do. Photoprism seemed like the most promising alternative until I realized it can only support a single user. That simply isn't going to work for me at all.

In any case, it now looks I have solid alternatives to a number of iCloud's services I'm currently using. If I can fill in the crucial gaps of Music and Photos I might be able to make some real headway.

## Is self-hosting actually cheaper?

As I narrow down what I want to run myself, the next question is "will this actually save me anything?" To answer that I need to clarify what I'm trying to save, time or money.

For time there is no way in the world this saves me anything. On the contrary, my current setup requires almost no intervention on my part sans with helping my family use their own tech. If i move to a self-hosted stack I will be solely responsible for setting it up, maintaining it and supporting it for my family. There is no way that doing so isn't going to be a considerable time investment on my part.

As for monetary costs, the jury is still out there. For all of my family my current setup is about $45/month. This includes iCloud's Premiere plan, 1Password, Inoreader and ProtonVPN. To self host I will wind up replacing most of those costs with hosting costs which, done right, will be at least the same as what I have today. If I really optimize I might be able to get slightly less but I think that's wishful thinking.

## What's the point of this?

So what's the point of all this?

I simply know I can switch to tech that isn't so exploitative of its customers. From open hardware that doesn't cost a small fortune to operating systems that allow me to do what I want to do to apps and services that aren't trying to track me the goal is to practice what I preach and prove there is usable tech that is more ethical and more sustainable than my current setup.

I don't know if I'm going to be able to pull this all off this time but the fact I've already identified many alternatives is, I believe, a good thing. We'll see where I can take this now in 2023

 [1]: https://traefik.io/
 [2]: https://inoreader.com/