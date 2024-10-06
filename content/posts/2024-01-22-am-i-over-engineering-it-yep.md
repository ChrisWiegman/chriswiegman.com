---
title: Am I Over-engineering it? Yep
type: post
date: 2024-01-22T13:54:04+00:00
url: /2024/01/am-i-over-engineering-it-yep/
categories:
  - Technical
tags:
  - Kana
  - Programming
---

I spent most of yesterday working on [Kana][1]. Not adding new features, but doing a heavy refactor of the settings package. Is it absolutely necessary? Probably not. I have, however really enjoyed the time I've spent on it and it will lead to a much more robust application.

Kana's settings aren't simple. While it relies on [Viper][2] to load settings, that process isn't simple. Like most apps we have our default settings but, on top of those, we have multiple layers of settings as opposed to just one. There are global settings that the user can override from default and affect all new sites as well as some app functionality. That's pretty normal.

There are flags to override various settings. That's also pretty normal.

Where Kana gets complicated is there is the ability to save your settings both globally for all new sites as well as to export the settings for an individual site which can make getting started on a given project much, much easier. There's no good way to do this with Go.

What I was doing was creating separate settings structs for defaults, global and local settings. It worked but it was messy. With, now, 30 settings to keep track of I was simply missing some of the touch points every time I edited one.

Soon I'll have a single struct of settings that can be processed automatically at all stages, from loading settings to saving settings to, most important for me, changing the settings themselves.

I'm not done with the refactor yet, so I won't get too much into the details here yet but I'm pretty impressed with where it's going so far.

It's been a long, long time since I lost a whole day to code. It's the most fun I've had in quite a while!

 [1]: https://github.com/ChrisWiegman/kana/
 [2]: https://github.com/spf13/viper