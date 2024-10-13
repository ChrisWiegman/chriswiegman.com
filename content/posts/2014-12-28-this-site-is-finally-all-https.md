---
title: This Site is Finally All HTTPS
type: post
date: 2014-12-28T05:00:00+00:00
url: /2014/12/this-site-is-finally-all-https/
categories:
  - Technical
tags:
  - Site News
---

While it took me a while to implement, I’m happy to say this site is now running completely on HTTPS with a new stack behind it which, with a little luck, will make it both more secure and faster when I get the bugs worked out.

### Why HTTPS?

It’s simple. There is simply no reason not to anymore. Protecting the privacy of users and the integrity of this site is my main goal and one small way I can do that is to make sure that everything you send and receive from this site is encrypted to the best of my ability.

I’ve actually been running the dashboard of this site under HTTPS for quite a while now but I’ve been hesitant to do it for every user simply because of the performance hit and, to be quite honest, the change has slowed the site down. From the HTTPS handshake to dropping Varnish and my CDN I’ve had to give up a few features that really made the site scream in the past. But all is not lost.

### What has changed?

The biggest change is, of course, the switch to a fully encrypted session for every user however that wasn’t all I needed to change to make this work. For starters the site had been running on Varnish and MaxCDN for quite some time ensuring site performance was incredible for users all over the globe. As Varnish doesn’t support HTTPS and I can’t get MaxCDN to work with their shared SSL certificate I’ve had to drop both which has had a serious impact on how the site runs.

To make up for the loss of two great services I’ve replaced the Varnish caching layer with NGINX proxy caching using fast_cgi which seems to be doing the job quite well. For simple pages the caching to disk seems to be a bit slower, so far, than Varnish but for complex pages the implementation of SPDY seems to really pick it up a bit.

Of course caching isn’t everything and for uncached pages I’ve also replaced php\_fpm with HHVM (with a php\_fpm failsafe) to help boost site performance. While this admittedly won’t be seen by every user (normally most should get cached pages) it has definitely made an impact on the WordPress dashboard experience as well as boosting the performance of uncached pages and side items that are never cached like sitemaps and others.

While the setup isn’t perfect yet it seems to be working for most although I have received comments that folks overseas are having image loading delays. These I hope to fix over the next few weeks with some more creative uses of CDNs (most likely figuring out the MaxCDN https issues) which should bring the site performance on par to that of what it was before HTTPS.