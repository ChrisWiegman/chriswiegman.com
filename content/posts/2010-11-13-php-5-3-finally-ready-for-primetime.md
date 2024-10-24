---
title: PHP 5.3 – Finally Ready For Primetime
date: 2010-11-13T05:00:00+00:00
draft: false
categories:
  - Technical
tags:
  - Web Development

---

![PHP Logo](/images/2010/11/PHP-Logo-225x118-1.png)

is nothing new. In fact, [it was first released on June 30, 2009](http://www.php.net/archive/2009.php#id2009-06-30-1), almost a year and a half ago. Considering this is almost akin to going back to the middle ages in many other industries one would think that almost everything would be running PHP 5.3 right now, right? Then why has it been so slow in being adopted at so many places?

The simple answer, OSS CMS and other applications. Until very recently upgrading to 5.3 simply broke too many websites that relied on deprecated code to function. For example, although [Drupal Core was made 5.3 compliant with version 6.14 back in September 2009](http://drupal.org/requirements), many popular modules simply had not yet caught up. The same is true with [WordPress](http://www.wordpress.org) where although 5.3 has been supported in the core installation for quite a while, many plugins and themes would quickly break when using the newer version.

These problems have plagued me at work for months. Particularly as we use Ubuntu servers which saw the default PHP installation upgraded to 5.3 back in April of 2010. We use MediaWiki, Drupal, WordPress, and other PHP software for our business and even with official support for PHP 5.3 in all of them our sites quickly became unusable in practice after upgrading. As a result we were forced to downgrade PHP to 5.2 in order to keep things working. While this solved the problem of our existing sites, it was far from an elegant solution and in fact has caused other issues resulting from a non-standard GD image library in Ubuntu’s PHP 5 packages prior to 5.3.

Fast forward 6 months later and it seems the last of our over 100 modules, plugins, extensions, and themes now function under PHP 5.3. The last roadblock was fixed for us in mid October and after 3 weeks of testing we were finally able to upgrade our servers to PHP 5.3 this last week.

For those of you in similar situation I would encourage you to revisit PHP 5.3 compatibility in your applications. The obstacles to it’s adoption seem to finally be a thing of the past and as [it does offer some benefits over its predecessor](http://www.phpclasses.org/blog/post/94-Upcoming-PHP-53-features-and-beyond.html) it might finally be time to make the switch.