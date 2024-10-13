---
title: Kana Continues to Develop with 0.8.1
date: 2023-06-19T12:43:31+00:00
draft: false
categories:
  - Technical
tags:
  - Development Tools
  - Kana
  - WordPress
---

Yesterday I released two versions of [Kana][1], 0.8.0 and 0.8.1.

It's been a while since I've covered a release on here so let's talk about what changed since [my last release post][2].

## New features since 0.6.0

There's been a lot of feature development for things I'm finding I needed in my daily workflow just to make my life a little easier. Some of these include:

* Improving [Xdebug](https://xdebug.org) with a command to start/stop it on a running site, improve the output and more
* A <em>wpdebug</em> setting to automatically set [WP_DEBUG](https://wordpress.org/documentation/article/debugging-in-wordpress/#wp_debug) when a site is started
* Limiting image updates to improve startup speed
* Automatically activate the current project if it is a plugin or a theme

## What else has changed

Of course those new features are helpful but I've also squashed numerous bugs, updated dependencies and bumped the required Docker version up to 4.20 or greater. It's been quite a lot of work. Check out [the full changelog][3] for all the details.

## What's next

I'm not done yet. Next up I'm working on further stability and performance gains as well as new features such as generating a plugin or theme boilerplate when starting a new project of the appropriate type in an empty folder.

When that's done it's time to really start documenting how to use it all with a proper website. The GitHub readme works well enough for now but it needs more and that will follow as I'm able to. Ironically, perhaps, I'll probably build the site in [Hugo][4] for now simply to keep the costs down (I can have that hosted for free). It's something I'll reconsider in the future should it not cost me too much to do so.

 [1]: https://github.com/ChrisWiegman/kana/
 [2]: /2023/02/announcing-kana-0-6-0/
 [3]: https://github.com/ChrisWiegman/kana/blob/main/CHANGELOG.md
 [4]: https://gohugo.io