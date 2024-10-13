---
title: If I Built A Large Website Today…
date: 2022-07-08T12:12:11+00:00
categories:
  - Technical
tags:
  - Headless
  - Web Development
  - WordPress
---

Once upon a time I spent my days building large (thousands of logged in users, millions of pages, etc) websites for universities and various other enterprise clients. At first I used Drupal to do so but, as WordPress added Custom Post Types and Multisite into core I eventually adopted it for all my work and, for a good number of years it did a great job.

Today I do most of my own work on this this site and other small projects where WordPress itself is quickly becoming more of a burden than a usable tool, but I still spend my days around large websites, even if I'm not developing for them anymore. This means I spend a lot of time thinking about how I would go about building a site if I needed to do so today. Would I choose WordPress? How would I put it together? What tools and technologies would I use today to create the most usable and sustainable site I could offer to a given client.

If I was to rebuild any of the large sites I worked with in the past I would, at least for now, stick with WordPress. For all its many faults it is still the best tool to actually manage content including users. The problem then would be working around all the newer WordPress features that really aren't applicable to such sites such as full site editing and the shortcomings of the block editor (even without a lot of work with it I've already learned the hard way how hard it can be to update content on a large site when some blocks change).

So what would I do differently than use regular WordPress? Two things. First, I would utilize a tool like ACF or The Pods Framework to build content models that could be stored in independent tables without the inefficiencies of the post_meta model used by normal WordPress content types.

Second, I would build it as a headless site. This would give the developers full control over the front end using fast, modern tech that isn't subject to the beta-level features currently in the WordPress theming API.

It took me a long time to come around to the value of headless WordPress, even after my own work building tools for it started last Summer. Today, however, I realize it is the future for large sites. It removes the cruft of modern WordPress and can replace it with code that is fast, performant and scalable both within the confines of WordPress as a content management system and even beyond WordPress itself.

While there is still a long way to go before developing headless WordPress sites is as easy as was, for example, building a WordPress site on the Genesis Framework, the simple fact is we're getting there. With minimal work on the backend WordPress can be a great tool to provide the bulk of content which can be efficiently aggregated in one or more front-ends even beyond what had been possible with WordPress historically and I see, now, that if WordPress is going to continue to thrive in the enterprise it will be headless WordPress that allows it to do so.

WordPress is a tool. It can be the right tool or the wrong tool for any given job. That said, I think, with the power of modern JavaScript technologies, that WordPress is the best tool for enterprise-level websites of all kinds and that we're only just getting started with what headless WordPress can do.