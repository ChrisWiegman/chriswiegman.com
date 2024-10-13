---
title: Introducing Kana – A Simple and Powerful WordPress Development Environment
date: 2022-09-12T12:21:48+00:00
featured_image: /images/2022/07/meet-kana.jpg
categories:
  - Technical
tags:
  - Development Tools
  - Kana
  - WordPress
---

I've been on the hunt for the perfect WordPress development environment for a very long time. Not only have I tried just about every option on the market but I've even made a few of my own and even joined WP Engine to build such a tool before they bought Local. It's time for something new. It's time for Kana.

## What I want in a development tool

Why has this been such a long hunt and why do I need to build Kana? My list of requirements is actually pretty short:

**It's got to be a CLI tool.** I've never been a fan of trying to find information on a GUI somewhere or trying to figure out what screen is hiding the one thing I need to do. I strongly prefer CLI apps for their simplicity and portability.

**It's got to allow for the development of plugins or themes as first-class projects, not just full sites.** I don't want to download huge sites from a host. I want to build plugins and themes that I can upload to existing sites to distribute to users.

**It's got to be easy to use.** I don't want to spend a ton of time setting it up every time I start a new project.

**It's got to be portable.** I don't want to switch computers and get stuck with a whole new environment, even using the same app.

That's really it. Since the demise of WP Engine's DevKit I've been using Lando but it is rather complex for what I need it for and my interactions with their devs have been anything but positive. Before DevKit my home-grown solutions, such as [Primary Vagrant][1], were anything but simple. Heck, even DevKit was a bit more than I needed as it was designed for site developers and not the plugins and themes I work on. I've needed a better tool for me for a very long time so I finally built one.

## Introducing Kana

After a few months of using it for my own site, this past weekend I released [Kana][2], a simple development environment for working on WordPress projects, for your to try.

Kana is written in [Go][3] and takes inspiration from [wp-env][4] and many of my previous projects to allow for super-simple WordPress development sites that can be run with zero-config while maintaining the ability to allow for robust debugging in order to make WordPress plugin and theme development as easy as possible.

Unlike previous projects I've been involved with, Kana isn't trying to be everything. It won't download a site from your host or run your Laravel app. It is simply a powerful tool I can use to work with WordPress plugins and themes, including this site and a few other projects I have in the works.

## Getting started with Kana

Kana is super simple. All you need to do is to download the latest version for your computer from [its releases page][5], unzip the download and copy the "kana" executable to any location in your system path. Then just run "kana start" to bring up your first site. It will take care of the rest including ensuring that its SSL certificate is trusted in your Mac's system store.

Of course, it can do a bit more than that too. You can currently see all the options and possibilities for it on its [README][6] at GitHub.

## The future of Kana

Of course I'm just getting started with Kana. Yesterday I tagged version 0.0.1 so, while I'm already using it with this site, it's got a long way to go. Currently the roadmap includes the following:

* Improving testing (I wrote this for me so I didn't spend as much time here as I would like)
* Improving CLI output so users know exactly what each command is doing, particularly some of the longer running commands
* Squashing bugs
* Building a better documentation site (you'll see the domain I've already bought when you use the product)
* Expanding on default debugging and other capabilities for even more robust plugin and theme development where needed
*  Making it easier to install on Mac (probably via [Homebrew](https://brew.sh))
* Expanding it to run on Linux and, if possible, maybe even Windows

All in all, there's a lot I can do with this while still keeping it simple to use. The fact is, I like building such products, especially as they let me work in Go, so Kana is just getting started.

[**Download Kana today and let me know what you think!**][2]

 [1]: https://github.com/ChrisWiegman/Primary-Vagrant
 [2]: https://github.com/ChrisWiegman/kana/
 [3]: https://go.dev
 [4]: https://developer.wordpress.org/block-editor/reference-guides/packages/packages-env/
 [5]: https://github.com/ChrisWiegman/kana/releases
 [6]: https://github.com/ChrisWiegman/kana#readme