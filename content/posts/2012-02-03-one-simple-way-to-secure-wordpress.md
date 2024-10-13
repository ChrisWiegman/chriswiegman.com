---
title: One Simple Way To Secure WordPress
date: 2012-02-03T00:00:00+00:00
categories:
  - Technical
tags:
  - WordPress
---

While there are plenty of ways you can make your [WordPress](http://wordpress.org "WordPress") installation more secure with plugins, server tweaks, and more, one of the simplest ways doesn’t require much at all.

Your wp-config.php file contains a lot of sensitive data including locations of your data and, most importantly, the username/password of your WordPress database. The fact that by default it lives in the same folder as the rest of your WordPress installation means that it is also available for the world to see along with all of it’s important data.

Now, in most cases this isn’t a big issue as servers normally take care of preventing the data in php files like wp-config.php from being seen by the public however these methods don’t always work and can be circumvented by a crafty attacker.

**So how do you make your wp-config.php more secure and keep it from the public? **

Move your wp-config.php file out of the folder that contains the rest of your WordPress installation (note you can only move it to the folder above your WordPress install, you can’t just put it anywhere). WordPress will still find and process the file just fine if it sits in the folder above the rest of it’s files. For example, if your WordPress installation live in a folder called public\_html (this is the normal location on most linux hosts) move it to the folder above public\_html so that if you view the folder wp-config.php is in you will see both the file and the public_html folder in which lives WordPress. Now, your wp-config.php file isn’t available to the web at all!

See, wasn’t that easy?