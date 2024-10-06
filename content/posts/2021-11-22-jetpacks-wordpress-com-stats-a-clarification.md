---
title: Jetpack’s WordPress.com Stats – A Clarification
type: post
date: 2021-11-22T14:06:05+00:00
url: /2021/11/jetpacks-wordpress-com-stats-a-clarification/
categories:
  - Technical
tags:
  - Analytics
  - WordPress
---

Last Friday I wrote about [switching this site from Plausible Analytics to Jetpack's WordPress.com stats][1]. One of the biggest points I made in the transition was the improved privacy of Jetpack's solution that now seems to match Plausible's. In doing so I received a few questions like the tweet below:

> Hey @ChrisWiegman just reading your latest post, and it order me a little confused.<br /><br />You said that WP deletes stats after 28 days, but later say you see stats from 2015. Hits can that be?
>
> > Kev Quirk 🇺🇦 (@kevquirk) November 19, 2021

This is a really good question and one I should've called out in the last post.

Jetpack does, indeed, remove your user's data (IP address and other potentially identifying log data) after 28 days but keeps the aggregate data. This means they don't reset the counter and you can still see historical statistics as far back as you've had the feature activated.

That's a pretty big clarification I realize. Remember, all analytics receive your users' data such as IP address, user agent and other items. The privacy respecting part comes with both what they do with that data and how long they keep it. I'm now comfortable with Jetpack because they only use the data for stats and they do delete that data after 28 days.

 [1]: /2021/11/back-to-wordpress-com-jetpack-stats/