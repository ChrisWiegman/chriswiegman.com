---
title: Debugging WordPress
type: post
date: 2012-04-20T00:00:00+00:00
url: /2012/04/debugging-wordpress/
categories:
  - Technical
tags:
  - Web Development
  - WordPress
---

How “good” is the code behind your WordPress site? Are plugins or themes causing out errors you don’t even know about? Is there anything inherently wrong that is slowing your site down, causing security problems, or just generally being a nuisance? How can you tell?

Here’s how to turn on debug mode and log all errors to files or display them on the screen (if you’re so inclined):

## 1.) Open wp-config.php

This file is in either the root folder of your WordPress installation or the folder directly above it.

## 2.) Turn on Debugging

Find the line that reads:

define( 'WP_DEBUG', false );

and change _false_ to _true._ Note that while this line should be present by default there are a number of reasons why you might not find it in your wp-config file. If you don’t find it just go ahead and add it above the line

require_once(ABSPATH . 'wp-settings.php');

## 3.) Decide where you want the errors to appear

If you’re site is “live” and the public can see it you probably don’t want any errors displaying on their screens. You can toggle error display on the screen with the following line (which should go right after the WP_DEBUG line:

define( 'WP\_DEBUG\_DISPLAY', false );

This will hide the errors from your users preventing them from knowing you have any problems. You can also set it to _true_ if you would like to see all the errors as they happen. If you’re just developing your site this might be preferred as it could make any issues easier to solve.

If you don’t want errors to display on the screen, or even if you do, you can also have them written to a debug.log file in your wp-content directory. Add the following line to turn on this logging:

define( 'WP\_DEBUG\_LOG', true );

## 4.) Continue to use WordPress as you normally would

Errors will be logged in the debug.log file so you can reference and fix them later.