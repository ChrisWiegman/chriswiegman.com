---
title: Announcing gh-backup to Backup your Public GitHub Repos
type: post
date: 2023-07-07T09:56:42+00:00
url: /2023/07/announcing-gh-backup-to-backup-your-public-github-repos/
categories:
  - Technical
tags:
  - Backup
  - Git
  - GitHub
  - Tools
---

I've been playing with scripts to backup my GitHub account for a while. I don't need much. All of my repos are currently public and I really just want the code, not all the other stuff that GitHub adds to the projects.

The problem with most scripts is they're anything but simple. Most require some sort of toolchain I don't work in and would have to build out on my machine such as Python or Ruby. It's not that these techs are bad, it's more that I just don't have enough experience to use them and installing it all for just this seems like such a waste.

What I do know well, however, is Go. Not only do I know it well but I know how to use it to easily get around the toolchain issues for anyone else who may want such a script. As a result I spent an hour building **[gh-backup][1]**, a nice little tool that does a full clone of every public repo in the specified GitHub account and updates those repos on subsequent runs.

Right now it's pretty simple. Give it a username and it will clone all its public repos using the _&#8211;mirror_ flag to make sure everything is indeed backed up. If the repo has already been cloned it will do a _git update remote_ on it to make sure it's up to date.

Right now you do have to build it with Go but I'll fix that quick enough. With a little bit of luck it will be a handy way for you to make sure all your code is backed up and safe easily and without fussing with tons of scripts and software toolchains.

 [1]: https://github.com/chriswiegman/gh-backup