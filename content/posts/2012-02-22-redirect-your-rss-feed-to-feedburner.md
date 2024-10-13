---
title: Redirect Your RSS Feed to FeedBurner
date: 2012-02-22T00:00:00+00:00
draft: false
categories:
  - Technical
tags:
  - WordPress

---

![FeedBurner Logo](/images/2012/02/feedburner.png)

Do you use [FeedBurner](http://feedburner.google.com/)? It’s a great service that can add a lot of value to your website or blog. For a lot of folks however switching to it can be scary as how do you tell existing subscribers that your feed has moved?

The answer, if you’re using Apache, is amazingly simple.

## 1.) Set up your Feedburner account

This is easy. Go to [feedburner.google.com](http://feedburner.google.com/) and sign up. You can use your [GMail](http://gmail.com) address to create an account.

## 3.) Open up your site’s .htaccess file

This should be found in the root of your site but if you’re on Mac or Linux you’ll have to view hidden files.

## 4.) Add the following

``` apache
RewriteEngine On
RewriteBase /
RewriteCond %{HTTP_USER_AGENT} !^(FeedBurner|FeedValidator) [NC]
RewriteRule ^feed/?([_0-9a-z-]+)?/?$ http://feeds.feedburner.com/Bit51 [R=301,NC,L]
```

Where _feed/_ is the address of your existing feed in relation to your homepage. For example, the above uses the Bit51.com feed whereas WordPress normally sets the feed to _https://www.chriswiegman.com/feed_. The rewrite rule then uses the “_feed/_” in the last line and redirects it to the FeedBurner address for everyone except FeedBurner bots (which will need to see the old stuff to update your new feed).

## 5.) Done.

Now anyone, including readers, who go to your own feed will automatically be taken to your new feed.