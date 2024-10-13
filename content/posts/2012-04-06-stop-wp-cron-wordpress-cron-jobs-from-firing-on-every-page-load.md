---
title: Stop wp-cron (WordPress cron Jobs) From Firing on Every Page Load
date: 2012-04-06T04:00:00+00:00
categories:
  - Technical
tags:
  - Web Development
  - WordPress
---

Have you ever notices that sometimes WordPress can load slow? This is particularly true if no one has gone to your page in a while and you try to log into the WordPress Dashboard. Why is this? Is it a cache issue? Is something wrong with my site? Why does it stall on the first page?

Well, in nearly all cases the reason isn’t a problem at all but by design (I’ll leave room here for the rare cases when something is actually wrong but that’s for a different day).

The reason is wp-cron. This is WordPress’ task scheduler that takes care of things like checking for updates, publishing scheduled posts, and a whole lot of other functions depending on your configuration.

Now by itself wp-cron isn’t a problem. In fact without it most sites would have a whole set of new problems. The problem with wp-cron that slows your site down however is two-fold. First, it runs on every single page load. This means that whether it is needed or not it is running and like all running scripts can take some time to process. Second, if the site hasn’t been loaded in a while it will have  a whole lot of missed tasks to finish up which can greatly compound the loading time.

So how do we fix this? How can we get WordPress to run our tasks on a regular basis without doing so on every page load? The answer comes in two parts. First, we’ll disable wp-cron from running within WordPress whenever a user loads a page. Second, we’ll set up wp-cron to instead run at a regular interval in the background on our server. Put together this technique will speed up the load time for our users and make sure that wp-cron is running an maintenance tasks whether anyone has come to our site or not.

Let’s get started.

## 1.) Open up wp-config.php

You’ll want to find and open the wp-config.php file [which is located in either the main folder of your site or the folder directly above it][1].

## 2.) Add the following line

This should go somewhere before the “That’s all, stop editing” line.

define(&#8216;DISABLE\_WP\_CRON', true);

## 3.) Save the file

Now wp-cron will no longer fire every time someone loads your pages. We’re half way there.

## 4.) Create a system CRON job

Cron is actually the task scheduling system used in *nix systems to schedule all sorts of functions on a regular basis. What we’re going to do is schedule cron to run every 10 minutes via cron (sorry Window’s users you’re on your own with this one). This should run it often enough to keep tasks from building up while keeping it from firing so often that it is actually hurting our load times.

If you’re on a shared hosting account with a service such as HostGator you will need to edit the cron job from your control panel. If however you’re on a VPS host or a dedicated server you can use the following.

a.) log into the system via terminal or another ssh client

b.) Enter the cron editor with the following command:

crontab -e

c.) Schedule wp-cron.php to run every 10 minutes by entering the following command. Note that the path to your wp-cron.php and your path to php may be different.

0,10,20,30,40,50 \* \* \* \* /usr/bin/php /home/webuser/public_html/wp-cron.php >/dev/null 2>&1

d.) save and exit (the procedure for this may vary depending on what text editor you’re using to edit crontab.

That’s it. Now your scheduled tasks will fire every 10 minutes regardless of whether your site gets any traffic.

 [1]: /2012/02/one-simple-way-to-secure-wordpress/