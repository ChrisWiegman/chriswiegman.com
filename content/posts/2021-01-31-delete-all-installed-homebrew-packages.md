---
title: Delete All Installed Homebrew Packages
date: 2021-01-31T17:09:43+00:00
draft: false
categories:
  - Technical
tags:
  - CLI
  - Command Line
  - Homebrew
  - Software Management
---

I often find myself with so many leftover packages in [Homebrew][1] from a project that it is easy for conflicts to happen. As a result I need a way to quickly clear out all the packages I have installed so I can quickly re-install only what I need. Homebrew doesn't have a built-in way to do so but it isn't hard to get around. Here's a quick one-liner that will delete every package you've installed with Homebrew.

``` bash
brew remove --force $(brew list --formula) --ignore-dependencies
```

 [1]: https://brew.sh/