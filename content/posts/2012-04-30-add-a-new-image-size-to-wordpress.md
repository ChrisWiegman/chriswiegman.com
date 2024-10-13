---
title: Add A New Image Size To WordPress
date: 2012-04-30T00:00:00+00:00
categories:
  - Technical
tags:
  - Web Development
  - WordPress
---

If you’ve been using WordPress for a while you’ve probably noticed that when you upload an image WordPress automatically creates the associated thumbnails for use throughout your site. This is great, but what happens if you want a different image size for your thumbnail or you need multiple versions of the image for different places in your site?

Here’s an easy tutorial for adding a new image size to your WordPress theme.

## 1.) Open your functions.php file

This file is located in your theme directory (_typically wp-content/themes/[your-theme]_)

## 2.) If you want the image to be used as a post thumbnail set it accordingly

set\_post\_thumbnail_size( 200, 200 );

This will add a 200×200 thumbnail for all of your posts.

## 3.) Add other image sizes

add\_image\_size( &#8216;my-image-type', 300, 300, true );

This will add an image size called _my-image-type_ that is 300px x 300px and will be cropped if necessary (if you change the _true_ to _false_ the image will be scaled but not cropped).

## 4.) Update your existing images.

This is a big one. You will need to update all your existing images if you want this to work. Fortunately there is a good plug-in for this. [Regenerate Thumbnails](http://wordpress.org/extend/plugins/regenerate-thumbnails/) will automatically take care of updating every single image in your media library automatically so you won’t have to worry about doing it yourself (this is especially handy if you’re changing themes).