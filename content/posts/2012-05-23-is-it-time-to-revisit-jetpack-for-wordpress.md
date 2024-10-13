---
title: Is It Time To Revisit Jetpack for WordPress?
type: post
date: 2012-05-23T00:00:00+00:00
url: /2012/05/is-it-time-to-revisit-jetpack-for-wordpress/
categories:
  - Technical
tags:
  - WordPress
---

![Jetpack by WordPress.com](/images/2012/05/logo-225x180-1.png)

[Jetpack][1], with almost [1.5 million downloads][2], is one of the most popular plugins out there. This project, which was launched in early 2011, is an attempt by [Automattic][3] to bring many of the features of [WordPress.com][4] to self-hosted [WordPress.org][5] websites and blogs. While I used it before Bit51.com, since Bit51’s launch I have moved on to other solutions and haven’t looked back….

….until two days ago.

For me Jetpack was just too much. It added a lot of overhead and, at least in my case, didn’t offer any real return. The stats were neat but could be replicated by Google Analytics. [After the Deadline][6] is cool but I have it in a Google Chrome extension. Sharing, subscriptions, and other features could be handy but I already had more robust solutions. In short there just wasn’t enough there for me to justify such a massive plugin.

Two days ago, while trying to put my session slides from [WordCamp Austin][7] on this site, I ran into a problem. There really aren’t any easy solutions to embed a [SlideShare][8] presentation in a post. I tried three or four plugins but nothing seemed to be able to easily embed a presentation using anything as simple as a [shortcode][9]. Sure, I could do it the hard way and add a bunch of code, etc but, as I will probably be doing more presentations in the future I wanted a real solution, not a hack I would have to re-teach myself next time I wanted to post some slides.

Enter Jetpack.

![SlideShare WordPress Shortcode](/images/2012/05/slideshare-wordpress-shortcode-225x150-1.jpg)

Getting a WordPress shortcode to use with Jetpack is easy

It turns out Jetpack has a Shortcode feature that includes, among quite a few other services, SlideShare making embeding my presentation super easy (SlideShare actually gives you the shortcode on their own site when you click embed). So I installed Jetpack and that problem was solved.

Now my new problem was, as with the last time I used Jetpack, that it still seemed to be far too much for a single feature. This time around however I spent a couple of days looking to see if all the extra features, many of which weren’t there the last time I tried Jetpack, could be useful this time around.

Low and behold, after a little trial and error, I was able to eliminate 3 plugins and 2 Google Chrome extensions by switching to features now present in Jetpack.

First, as I’ve never been happy with [FeedBurner’s][10] email subscriptions, I switched to Jetpack’s Subscriptions features which replaced 2 plugins I was using to manage comment subscriptions and allow folks to easily subscribe to new posts and comments by email. As an added bonus this should even help lower my email costs as I was starting to rack up some heavy usage with [AuthSMTP][11].

Next, I switched from my sharing plugin to Jetpack. While Jetpack’s solution isn’t perfect it performs far better in terms of site performance than the plugin I was using (my last sharing plugin was one of the most resource intensive features on this whole site) and will make it easier for me to convert the design of this site to a responsive design. It even eliminated an error my old sharing plugin was causing in the dashboard ever since Google Chrome updated to version 19.

Finally, I decided to add on WordPress.com stats, Enhanced Distribution, and After the Deadline (allowing me to remove the Chrome plugin I was using for the latter). While I didn’t need the stats and I had a working solution for After the Deadline Jetpack just made it easier for me to combine these features into a single source allowing for easier maintenance while getting a quick picture of how my site is doing right in the dashboard rather than having to explicitly go to the Google Analytics site.

Surprisingly (at least to me anyway) the transition to Jetpacks features from my old plugins went surprisingly smooth. I did have to edit some code in the CSS itself as the Subscriptions widget hard-codes some styles into the markup (which really surprised me as [IMO] that is a rather sloppy way of coding the widget) but the change was easy to make and will be easy to replicate.

Overall I think the evolution of Jetpack has been quite positive. What I originally found useless is now able to provide a number of solutions for this site and my other sites that previously required numerous plugins and other hacks. While I do hope they fix issues such as the hard-coded CSS in the Subscriptions widget, the issues I have found are minor and not enough to make the plugin a problem for me.

If you haven’t checked out Jetpack or, like me you stopped using it a while ago, take a look again. You might be surprised at what you find.

 [1]: http://jetpack.me/ "Jetpack"
 [2]: http://wordpress.org/extend/plugins/jetpack/stats/ "Jetpack download stats on WordPress.org"
 [3]: http://automattic.com/ "Automattic"
 [4]: http://wordpress.com "WordPress.com"
 [5]: http://wordpress.org "WordPress.org"
 [6]: http://afterthedeadline.com/ "After the Deadline"
 [7]: http://2012.austin.wordcamp.org/sessions/published-securing-wordpress-is-easier-than-making-coffee/ "Securing WordPress is Easier Than Making Coffee WordCamp Session"
 [8]: http://www.slideshare.net/ "SlideShare"
 [9]: http://codex.wordpress.org/Shortcode "Shortcodes in the WordPress codex"
 [10]: http://feedburner.google.com/ "FeedBurner"
 [11]: http://www.authsmtp.com/ "AuthSMTP"