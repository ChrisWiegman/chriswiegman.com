---
title: Using a Custom wp-signup Page With WordPress MU
date: 2010-02-26T00:00:00+00:00
draft: false
categories:
  - Technical
tags:
  - WordPress
---

[WordPress MU](http://mu.wordpress.org) is a great system, but as with all systems their are drawbacks. One such drawback I’ve had problems with is the lack of available customizations for the sign-up/registration page. Whether you just want to change the style, or change the very text itself there really isn’t anything you can do with it without hacking the WordPress MU core which can be a nightmare come upgrade time.

![A Custom WordPress Registration Page](/images/2010/02/Wordpress-Registration-Page-350x202-1.png "A Custom WordPress Registration Page")

My solution to this problem has been to use my own wp-signup.php page within my sign-up theme. Here’s how it’s done:

Before you start, make sure your server supports Apache mod-rewrite. An easy way to do this is to simply go to a post on one of your blogs. If you don’t see _?=_ anywhere in the address you should be OK. If not, go to http://www.yoursite.com/wp-admin/options-permalink.php and see if permalinks are available on your server. If they are not you will need to get this enabled by your server administrator before going any further.

Next, the most important part, open up the .htaccess file in the root of your WordPress MU installation in your text editor. You may need to create the file if you haven’t been using any redirects previously.

Find the line:

``` apache
RewriteBase /
```

Right below it (before anything else) add the line

``` apache
RewriteRule ^wp-signup.php(.*)$ wp-content/themes/[your theme name]/wp-signup.php$1
```

Save the file.

Finally, copy (don’t move) wp-signup.php from the root of your WordPress MU installation to your theme directory (usually content/themes/default). Make sure you leave the original file in place. Moving the file alters the WordPress MU core installation which is never a good practice.

Now you may edit the wp-signup.php file to your heart’s content. Redirects to the new file should be seamless to your users.

If you would like to see how I’ve used this take a look at . Now my needs were simple, we just wanted to clarify some of the text to reduce confusion for our users. There is a lot more that can be done to make this form yours.

_\* edited Feb 27th, 2010: added a couple of important lines \*_
Never write on a deadline when you don’t have to. I forgot to change 2 important line.

In your new wp-signup.php page (the one in your themes folder) find the following 2 lines:

``` php
require( dirname(__FILE__) . '/wp-load.php' );
require( 'wp-blog-header.php' );
```

and replace them with the following:

``` php
require( '../../../wp-load.php' );
require( '../../../wp-blog-header.php' );
```

This will ensure that WordPress MU can find the files it needs to process your data.