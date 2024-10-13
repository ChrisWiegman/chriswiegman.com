---
title: 'WordPress Caching: Super or Total'
date: 2010-11-19T00:00:00+00:00
categories:
  - Technical
tags:
  - WordPress
---

**Disclaimer:**

This is a completely unscientific comparison of the two most popular [WordPress](http://www.wordpress.org) Caching methods. In my case concerns involved not only speed, but also compatibility with existing plugins and themes.

**Some background**

I’ve been running this site on WordPress using various shared hosts for a few years now. For the most part the combination has served my modest means fairly well. This site gets on average about 80 hits a day with only occasional spikes (the record was a little over 20,000 hits one day due to a Digg. In addition I run numerous other WordPress sites none of which receive any real amount of traffic. As such my needs for optimization are more concerned with the limited CPU and memory available on the shared hosts I have been using as well as payload optimization to reduce the impact on slower user’s connections.

Given these modest performance requirements I also have 2 other requirements. First, any solution must be simple and require little maintenance. Two, any solution must not break what I have installed. Finally, I must be able to transfer the solution easily to other sites I run. This last requirement is based off the premise that consistency is a good thing when talking about back-end web development.

**The Solutions**

**The first solution is [WP Super Cache](http://wordpress.org/extend/plugins/wp-super-cache/). This plugin** was developed by WordPress core developers and is by far the most popular caching plugin available (as judged by the very scientific method of comparing the stats pages on the WordPress plugin pages). It is simple to use and effective at statically caching content. It’s weakness though lies in its simplicity. It is so simple that it does nothing to reduce payload and only statically caches dynamic pages to reduce server load.

The second solution is [W3 Total Cache](http://wordpress.org/extend/plugins/w3-total-cache/). This is a newer option by, apparently, a single developer. It does the same static page caching of WP Super Cache, but also adds numerous features such as minifying code, CDN support, database caching and more to both further reduce server load as well as payload. The problem here however is complexity. Configuration is far more in depth than WP Super Cache. In addition, the minify feature tends to break various themes and plugins (no matter of configuration ever allowed to get it working well with RocketThemes products).

**Thoughts and Conclusion**

As to which actually provides more complete optimization, well in theory, W3 Total Cache _should_ win without even a fight. For my purposes however it still doesn’t fit the bill. I’ve found it to be simply too complex for small sites many of whom must be maintained by people who don’t even know the definition of caching. It can break sites on updates, cause numerous headaches, and in the end, without a lot of upkeep, doesn’t really do much to improve performance.

Needless to say then I use WP Super Cache on nearly all my sites. In addition I add to other plugins to help reduce bother server load and payload. First is [DB Cache Reloaded](http://wordpress.org/extend/plugins/db-cache-reloaded/) which really helps reduce CPU load on shared servers by caching database queries. Next is [WP-minify](http://wordpress.org/extend/plugins/wp-minify/) which combines and minifies all the javascript and CSS files linked to your site. Together not only does this combination visibly reduce loading times of my page, but they do so without a lot of configuration and without any unintended errors to my theme or plugins.