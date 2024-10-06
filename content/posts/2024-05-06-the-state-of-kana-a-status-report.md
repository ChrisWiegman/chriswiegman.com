---
title: 'The State of Kana: A Status Report'
type: post
date: 2024-05-06T11:53:25+00:00
url: /2024/05/the-state-of-kana-a-status-report/
featured_image: /images/2024/05/Kana-on-GitHub.jpg
categories:
  - Technical
tags:
  - Development Tools
  - Kana
  - Tools
  - WordPress
---

I continue to work hard on [Kana][1], my CLI tool for making WordPress development easier. In fact, the project just crossed its 2nd birthday. It’s come a long way, yet there is plenty left to do. As it’s been a while since I really had a chance to talk about it, I wanted to take this post to provide some updates on what it can do and where it is going.

## Kana has come a long way

The [last time I wrote about Kana][2] was at the point of the 0.10.0 release in June of 2023. Since then Kana has had an astonishing [25 releases][3] ranging from minor bug fixes to some pretty major new features. Here’s a few things Kana can do today that it couldn’t last June:

* It can now determine if your project is a plugin or a theme automatically and setup your project accordingly
* It can handle your system’s Docker configuration with significantly more stability. It can better handle Docker’s context, mappings and more for more performant and stable development
* It can better handle WordPress debugging with SCRIPT_DEBUG, WP_DEBUG and so many other settings set automatically for you
* It can handle more PHP and MariaDB versions
* *and so much more*

In short, Kana is a much more stable platform capable of better handling projects of any size with the best tooling on the market.

## Kana has a long way to go

For as far as it has come, Kana still has a long way to go. Over the last few months I’ve had to transition back to an engineering role at work and, as a result, I’ve been able to start using it for my own development work. This has been wonderful in helping me figure out where Kana needs to go next and, as a result, here are a few of the features and projects I’ll be working on over the coming months:

* First, it’s time for a real documentation site, not just the [GitHub readme](https://github.com/ChrisWiegman/kana/blob/main/README.md). I’ve started work on a new site to help folks get started as well as to make sure everyone can really take advantage of all it has to offer.
* While [Homebrew](https://brew.sh) is great, it’s not for everyone. I’ll be working on solutions to package Kana for easier deployment with tools like Composer and npm.
* Kana can already handle plugins and themes from wordpress.org easily, installing and activating anything you need when you start your site. What it doesn’t handle well is plugins and themes from anywhere else. I’ll be working on features to allow you to map plugins, themes and more from your local system to your Kana site.
 * I prefer the CLI for Kana but there are times where I wish Kana had a GUI for spinning up sites even easier or otherwise making site management even easier. I’ve started work on just such a feature, probably for Mac first, and I’m looking forward to getting it to a working state in the coming weeks.
* *And much, much more…*

In short, there’s a lot of work left to do to make Kana work for far more people. I’m in it for the long haul at this point. This is the most fun I’ve had with a project in years and I’m really looking forward to seeing how far I can push it going forward.

 [1]: https://github.com/ChrisWiegman/kana
 [2]: /2023/06/kana-0-10-0-is-live/
 [3]: https://github.com/ChrisWiegman/kana/releases