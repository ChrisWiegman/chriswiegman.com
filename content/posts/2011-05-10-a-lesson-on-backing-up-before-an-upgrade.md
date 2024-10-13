---
title: A Lesson On Backing Up Before An Upgrade
type: post
date: 2011-05-10T04:00:00+00:00
url: /2011/05/a-lesson-on-backing-up-before-an-upgrade/
categories:
  - Technical
tags:
  - WordPress
---

Quite a few people yesterday learned an important lesson: no matter how prominent the [WordPress][1] plugin you use is, you should still never upgrade without first backing up.

Yesterday [W3 Total Cache][2], a popular and effective WordPress caching plugin, was updated to version 0.9.2. While updates for this plugin have been fairly regular and without problems in the past this one was different. For many the new version completely broke their sites leading to a lot of painful reconfiguring and downtime.

Broken plugins and add-ons are not by any measurement a new thing in open-source software. For the most part though authors of the more popular plugins tend to do a little more testing before releasing a new version thereby preventing any major issues. Every once in a while though, as in this case, something does get through testing and, without a good backup, can lead to a lot of frustration.

If there is a lesson learned here it is that no matter how many successful updates you’ve done to your software in the past, always assume it will not go well and take a backup ahead of time to prevent problems and server outages.

 [1]: http://wordpress.org
 [2]: http://wordpress.org/extend/plugins/w3-total-cache/