---
title: Code, Ideas and the Future of Kana
date: 2023-01-23T11:21:28+00:00
draft: false
categories:
  - Technical
tags:
  - Blogging
  - Development Tools
  - Kana
  - Sustainability
  - Tools
  - WordPress
---

I’ve spent the weekend working on [Kana][1] and I’m starting to think it really is getting close to the 1.0 feature set I had originally envisioned. This is exciting for me as I feel like it is finally a project I’ve been able to follow through with and take to completion, something I haven’t really been able to do since my [iThemes Security][2] days.

## Side projects are hard

I tend to fall into a few traps when coding.

First, I have to go deep on a tech or I don’t go far at all. Hackathon-level projects are rarely of any interest to me. I either need something I can focus on for months or I don’t get interested at all.

Second, while I can focus for months on a project I get easily discouraged and never finish what I start. If there’s competition I just assume it’s automatically “better” and that’s a reason to stop working on it. Without competition I work until I get a request I’m not interested in and then get discouraged that it isn’t “good enough.”

Finally, I have to have a real goal in mind to get started at all. This means I rarely do courses on coding, without a useful end-game I just can’t get interested. It’s a frustrating cycle that means so many of my ideas never see the light of day.

Kana has been different. I’ve been able to work on it regularly for nine months now yet it hasn’t become an obsession that I _must_ work on. I’ve been able to take breaks to keep working on this site as well as a few smaller projects and it really does feel good.

## So what’s next for Kana?

There are a few things I want to get into Kana for a 1.0 release:

* [Mailhog](https://github.com/mailhog/MailHog) or similar support for catching emails
* More testing. I’ve gotten lazy here but, hey, it’s a personal project so I don’t feel too bad about it
* Support for more operating systems and docker implementations
* Support for plugins that aren’t on WordPress.org such as plugins developed locally
* Support for automatic installation of themes
* Support for more [Xdebug](https://xdebug.org) modes
* Improved messaging and prompts within the various commands
* Upgrade prompts when a new version is available
* Support for running on ports other than 80/443 to avoid conflicts with other apps


That seems like a long list but I’m already pretty close on some of those. With a bit more work I think I could easily have this there by Spring at which point I think I can safely call the original goal of Kana complete. That’s not where the project ends though.

## Kana 2.0 and it’s place in a the world of blogging

One of Kana’s weak points now is that it is hard for others to use. I want to fix this with proper documentation. I’m using the sites.kana.li subdomain for serving sites and I want to take advantage of the parent kana.li domain for a documentation site for it. That should help make Kana more usable for others and bring in ideas for a 2.0.

Beyond the site I also want to work on a minimal GUI for Kana to better be able to control sites without opening the terminal. For now I’m thinking of a toolbar app and a VSCode extension to make working with sites a bit quicker.

Once it’s a bit easier to use I’m also thinking of ways to sync Kana sites between computers. I’m not entirely sure the best way to approach this, yet, but I have a few ideas. This will be super helpful for my own work on this site, among other things.

Finally, I’d like to finish a static site plugin for WordPress I’ve been playing with for a while and combine it with Kana to turn Kana into a full static site generator. The vision here is that users can run WordPress 100% locally with Kana and use it to push your site to services like WP Engine’s Atlas, Netlify or others.

There seems to be a resurgence of blogging in the wake of Twitter’s collapse and I’m here for it. I think it’s not only an opportunity for folks to own their own content but to do so in a sustainable way and Kana and WordPress could be the perfect combination to make this happen.

 [1]: https://github.com/ChrisWiegman/kana/
 [2]: /2014/08/why-i-sold-better-wp-security/