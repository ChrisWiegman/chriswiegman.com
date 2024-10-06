---
title: Announcing Kana 0.6.0
type: post
date: 2023-02-27T13:22:19+00:00
url: /2023/02/announcing-kana-0-6-0/
categories:
  - Technical
tags:
  - Development Tools
  - Kana
  - WordPress
---

This past weekend I released a new version of [Kana][1], my CLI tool for WordPress development environments. [Version 0.6.0][2] has a few new features but, primarily, is the start of some work on streamlining what I've already built.

First, 0.6.0 eliminates the _phpmyadmin_ flag and option. Now you can simply start [phpMyAdmin][3] on any Kana site by running _kana open &#8211;phpmyadmin_. It's simpler and faster if you don't need the tool and makes managing your site a little more convenient. In addition, you can also start [Mailpit][4] in the same way, with the _kana open &#8211;mailpit_ command. In the future I'll probably remove its config setting as well but I need to do a bit more testing before I do so.

As an added bonus I've also fixed phpMyAdmin on Linux so now it should start and connect just fine.

I've also added a new _ssl_ option that will configure the site to use https or http first by setting the appropriate WordPress options. This can make testing APIs and other apps a bit easier as there's no change of encountering SSL errors from clients that haven't trusted Kana's SSL certificate.

Beyond that I've finally written some more testing and fixed a few other minor bugs, including documentation, to make Kana just a little easier to use.

Next up I'll be focusing on some performance tweaks as well as making the configuration even simpler yet. Ideally I want to get to a point where Kana can be configured once to start up exactly the site you need and won't need to be touched again. As a bonus you'll even be able to easily share that configuration between machines so you'll always know what you're getting with a new project.

 [1]: https://github.com/ChrisWiegman/kana/
 [2]: https://github.com/ChrisWiegman/kana/releases/tag/0.6.0
 [3]: https://www.phpmyadmin.net/
 [4]: https://github.com/axllent/mailpit