---
title: Homebrew Is the Missing Package Manager for Linux
type: post
date: 2020-06-14T15:24:00+00:00
url: /2020/06/homebrew-is-the-missing-package-manager-for-linux/
featured_image: /images/2020/08/homebrew-is-the-missing-package-manager-for-linux.png
categories:
  - Technical
tags:
  - Linux
---

There are a lot of ways to handle development environments, and software in general, on Linux and, in my experience, most of them suck.
From juggling PPAs to compiling from source and from hoping your channel might get the update to manually checking for an update yourself for all major parts of your tool chain, Linux software distribution sucks. Add to that configuration differences across each channel and completely different versions from a teammate using MacOS and Linux development can quickly become a nightmare.

It doesn’t have to be that way.

If you’ve ever done development on a Mac you’re probably familiar with [Homebrew][1]. This is a handy application that bills itself as “the missing package for Mac of Linux” and it can make your life so much easier.

For me, setting up the environments for the bulk of code I write, typically either PHP, Go or even some Node is as simple as writing the following command:

``` bash
brew install composer hugo docker-compose git go php php-code-sniffer nvm
```

This gives me full environments for pretty much every thing I need to do, with configurations equal to their Mac equivalents and the ability to keep it all up to date with `brew update &amp;&amp; brew upgrade`. Even cleaning up is as close as a single `brew cleanup` away.

If you’re doing development on Linux, or Mac if you haven’t tried it, I highly recommend it. While it isn’t perfect (it was originally made for Mac and sometimes that shows, particularly if the app you need is “cask only”) it has really made development so much easier for me.

As a bonus, if you are trying it on Mac, check out Homebrew casks. It’s a Mac only part of Homebrew used for installing GUI apps on MacOS. For my work machine it handles every app I need from browsers to code editors and more. It really helps make managing software on a Mac much easier.

 [1]: https://brew.sh/