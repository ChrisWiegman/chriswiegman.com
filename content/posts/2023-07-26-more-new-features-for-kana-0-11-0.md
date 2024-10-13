---
title: More New Features for Kana 0.11.0
date: 2023-07-26T12:23:01+00:00
categories:
  - Technical
tags:
  - Development Tools
  - Kana
  - Updates
  - WordPress
---

Today I realized version [0.11.0][1] of [Kana][2] with two important new features including one of the first features I’ve built by [potential] user request.

## TablePlus Support

The first new feature is the ability to open your database directly in [TablePlus][3] instead of [phpMyAdmin][4]. This handy feature makes working directly with data just a little easier for me and, I hope, for your work as well.

As of today this feature is Mac-only but I hope to use it as a base for other similar applications on Linux in the future. While I use TablePlus on my Apple laptops, I use DBeaver and other alternatives on my Linux machines so adding further support is definitely something I’m interested in myself in the future.

## Multisite Support

The second feature is something the was requested by my friend Topher DeRosia, [WordPress Multisite][5] support.

This new support, which can be invoked either by config option or by using th _—multisite_ switch on start will automatically configure either a subdirectory or subdomain multisite allowing for more complex work when needed.

## Bug fixes and more

Beyond new features I’ve squashed a few bugs and updated dependencies and other code where needed. You can get download instructions or more information from [Kana’s repo][2] and [the 0.11.0 Changelog][1].

 [1]: https://github.com/ChrisWiegman/kana/releases/tag/0.11.0
 [2]: https://github.com/ChrisWiegman/kana
 [3]: https://tableplus.com
 [4]: https://www.phpmyadmin.net
 [5]: https://wordpress.org/documentation/article/create-a-network/