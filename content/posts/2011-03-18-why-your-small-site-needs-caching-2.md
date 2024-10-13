---
title: Why Your Small Site Needs Caching
date: 2011-03-18T04:00:00+00:00
draft: false
categories:
  - Technical
tags:
  - Performance
  - Web Development
---

As anyone who runs a large website or blog with a [Content Management System](http://en.wikipedia.org/wiki/Content_management_system "Content management system") (CMS) will tell you [caching](http://en.wikipedia.org/wiki/Cache "Cache") is important. What is also true however is that even a small site can benefit from caching in a number of ways.

Caching, for those who are new to the concept, is essentially taking the html output of your CMS, saving it, and serving that saved output to users instead of regenerating it with every hit. Doing so can decrease [load times](http://en.wikipedia.org/wiki/Load_%28computing%29 "Load (computing)") for the viewer as well as system requirements by the site itself.

For many large and popular sites caching provides a level of performance that would be otherwise out of reach as even powerful servers can be overcome by a large number of hits at the same time. What many small site owners often don’t realize is that they can benefit just as much from caching the content of their sites.

Smaller sites tend to be run via [shared hosting](http://en.wikipedia.org/wiki/Shared_web_hosting_service "Shared web hosting service"). These hosts often cost a few bucks a month and the idea is that many sites are hosted on the same server thus making it economical for anyone to have a website. Although many hosts advertise unlimited bandwidth and storage space, what they don’t tell you is that your other resources such as CPU and memory are very much limited ([here is an article that compares shared hosting to a virtual private server and goes over the limits of shared hosting fairly well](http://vpslink.com/compare/shared-hosting-vs-vps-hosting/)). In some cases, where the server has a lot of accounts, yours doesn’t even need to be exceeding it’s allocated resources to suffer as others may be doing it for you.

In some cases the limits of a shared hosting account might not be all that visible to you as the site host. Symptoms may be as simple as a few extra seconds to save your latest post or refresh your comments page. In other cases however symptoms can be as severe as a major slowdown in site load times or even having your site physically shut down by your host should it become very problematic from say, hitting the front page of dig or watching your post go viral on [Twitter](http://twitter.com "Twitter").

Regardless of how severe the infraction might be however rest assured that [Google and others notice](http://googlewebmastercentral.blogspot.com/2010/04/using-site-speed-in-web-search-ranking.html) and take it into account when ranking your site on search results.

So how then can a small site owner  make use of caching on their site?

If you’re using [WordPress](http://wordpress.org "WordPress") as your CMS than the answer is with a couple of plugins [WP Super Cache](http://wordpress.org/extend/plugins/wp-super-cache/) or [W3 Total Cache](http://wordpress.org/extend/plugins/w3-total-cache/). While Super Cache is easier to install and can be done with only a couple of clicks, Total Cache takes a little more setup but provides advanced functions that can help speed your site up even more.

If you’re using [Joomla](http://www.joomla.org) or [Drupal](http://www.drupal.org) there are some caching features built into the core of your CMS. Drupal also has the [Boost module](http://drupal.org/project/boost) which can greatly increase performance beyond that of the core caching.

Regardless of your platform or the size and readership of your site however caching should be one of the first things you consider before going live.

Curious about your own load times? Try [webpagetest.org](http://www.webpagetest.org/). You may be very surprised by what you find.