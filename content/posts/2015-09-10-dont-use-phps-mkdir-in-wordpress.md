---
title: Don’t Use PHP’s Mkdir in WordPress
type: post
date: 2015-09-10T00:00:00+00:00
url: /2015/09/dont-use-phps-mkdir-in-wordpress/
categories:
  - Technical
tags:
  - Development
  - PHP
  - WordPress
---

PHP has some pretty great functions for handling the file system, mkdir, and rmdir particularly come to mind as, for the most part, they do the job quite well.

As a WordPress developer however that doesn’t mean they’re both your best choice.
WordPress actually has a function that will do this better (especially considering the unpredictability of file structures on many WordPress sites.

Enter [wp_mkdir_p()](https://codex.wordpress.org/Function_Reference/wp_mkdir_p)

wp\_mkdir\_p( $target ) takes the guess work out of creating a directory by not only recursively trying to create the directory you specify in the _$target_ but also by trying to make sure that the permissions are correct for WordPress (so no 0777 or unable to read/write errors later).

Of course, given the nature of WordPress and how well it handles things like media uploads you should probably be asking yourself just how necessary it is to create your own directory however, if there is no getting around it, at least try to minimize the chance for problems by using wp\_mkdir\_p instead of PHP’s own mkdir.