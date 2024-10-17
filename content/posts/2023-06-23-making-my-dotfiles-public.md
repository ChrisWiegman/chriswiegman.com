---
title: Making my Dotfiles Public
date: 2023-06-23T10:23:43+00:00
draft: false
categories:
  - Technical
tags:
  - Tools
---

I've been working on [my dotfiles repo][1] for a good number of years now. Throughout it's development I've kept it private for the sole reason that it gave me a little safety if I accidentally committed something I didn't want to (like a password, etc).

This past weekend I changed that. After rewriting the whole repo to be a bit easier to use I decided to make it public, flattening it in the process in case there was anything in an old commit that could get me in trouble.

Right now I'm pretty happy with the result. I've had conversations about the repo for a number of years with a number of people and this will make it easier to actually show them what I'm talking about. On top of that, it gets me one step closer to ensuring that all of my repositories are fully public. That, at least to me, is a big win.

## What is in my dotfiles

Many dotfiles repos I've seen are simply a collection of the configuration files themselves. I have some of those but, frankly, my goal with the whole repo is a bit different. Rather than just provide configurations I want to use the repo to be able to quickly rebuild any computer I use as well as to help keep those files in sync across the 3 computers I use lately.

Today, at least on Mac, it can install almost everything I use from [Homebrew][2] (there are still a few apps I use from the Mac App Store which I don't bother installing this way). It does similar for Linux but what I need to add yet are the rest of the apps, Snaps and apt packages, I use on the Linux machine.

It also sets up [Oh My Zsh][3] and its configuration including theme, plugins, aliases and other functions shared by each machine. It sets up Git, Tmux, SSH and gnupg as well as a few other apps.

Finally, it does all of this from a single entry point. All I do is clone the repo and run the _setup.sh_ script with the appropriate machine as an argument and I'm mostly done. It has meant that I can completely wipe and restore any machine I use in about 2 hours and, with the new rewrite, probably even faster.

It might not be a huge, impactful project but for me it's been a very helpful utility that keeps my work in sync wherever I work and I'm pretty happy about that. Maybe it can help you make your life a little easier as well.

 [1]: https://github.com/chriswiegman/dotfiles
 [2]: https://brew.sh
 [3]: https://ohmyz.sh