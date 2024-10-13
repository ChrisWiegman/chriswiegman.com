---
title: Getting Media on Your Local WordPress Site
date: 2016-02-02T00:00:00+00:00
categories:
  - Technical
tags:
  - Development
  - WordPress
---

If you’ve worked with WordPress sites for a while you’ll know that sometimes the hardest part is settings up a local environment that is close enough to your production environment to make a difference. While there are plenty of ways to do this one mistake I often see made is a somewhat crazy push to synchronize the contents of the uploads directory with your local site. This is the wrong question.

### You Don’t Need the Uploads

First of all, most of the time you really don’t need the uploads at all. In fact, if you’re developing a plugin or a theme you probably don’t need any of the content in the uploads folder, the database or anywhere else. After all, if the goal is your code the push to keep the content in sync isn’t just unnecessary but may in fact be slowing you down.

Let’s say though that you are maintaining a large complex site. In this case you’ll definitely want to make sure your development environment (and hopefully your staging environment) simulates production as closely as possible. For the database this isn’t too hard, copy it down from production ([Navicat][1] is great for this), replace the domain names and you’re good to go.

### You Still Don’t Need the Uploads

This is where most people go wrong. I’ve seen it all from trying to download terabytes of images and media to trying to commit them to GIT or some other repository. This is not the way to do it. Now you have two choices… First you can download only the files you need using a plugin like Paul Clark’s [Uploads by Proxy][2]. This isn’t a bad way to go and if you work offline frequently might be the best method for you. It will take any media it finds and attempt to download it locally the first time it sees it allowing you to easily be able to use it, online or offline, and it will be there every time you go back to the page even if you lose your connection. If you’re always connected though this still isn’t efficient as you could still wind up with thousands of extra media files on your local machine that aren’t really needed.

### Proxy for the Win

A better approach to this is to simply not download the files at all and load them directly from the production site. Doing this method has three distinct advantages:

1. You’re not wasting local hard drive space. While this isn’t the problem it used to be it can still be inefficient on a very large site.
2. Images displayed are always the latest image. If someone updates the image on production, you’ll see it. On a media-intensive site or a site heavily involved with media and front-end interactions this along could make it worth it as you’ll always have the most appropriate image for dev. For example, if you’re trying to solve an image sizing bug and the client does so with switching to a different sized image you’ll quickly be able to account for this in your local dev.
3. You’ll have every image for every page. This should be a no-brainer. No matter how obscure the link you’ll have the media for it. Simple as that.

Of course the only time this isn’t going to work for you is if you work offline regularly but, let’s face it, for most of us that isn’t the case these days.

### How to Proxy Your Site’s Images

So how do we do this? For most of using an Apache based local server like [DesktopServer][3], XAMPP or something else it’s as easy as adding a couple of lines to your .htaccess file in the site root:

``` apache
RewriteEngine OnRewriteBase /RewriteRule ^wp-content/uploads(.*)$
http://www.mysite.com/wp-content/uploads/$1 [L,R]
```

Of course you’ll need to replace _www.mysite.com_ with your own site address but putting this above the WordPress rules in your .htaccess file will mean that any file on the production site will be displayed on the dev site, no questions asked, no files downloaded.

 [1]: http://www.navicat.com
 [2]: https://wordpress.org/plugins/uploads-by-proxy/
 [3]: https://serverpress.com