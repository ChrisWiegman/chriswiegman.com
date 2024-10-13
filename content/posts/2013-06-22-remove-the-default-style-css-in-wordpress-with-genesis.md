---
title: Remove the Default style.css in WordPress with Genesis
date: 2013-06-22T00:00:00+00:00
categories:
  - Technical
tags:
  - Genesis
  - Web Development
  - WordPress
---

Genesis is a great framework for theming WordPress (I use it on almost every site I build) but it does make some decisions I don’t agree with. For example, it loads the style.css of the child theme you’re using by using its own action rather than the _wp\_register\_style_ and _wp\_enqueue\_style_ functions provided by WordPress. If you don’t want to load the default style.css this could make getting rid of it rather tricky.

### Why would you not load style.css?

To answer this let us look at what style.css is. The file was put into use when the theme system was introduced in WordPress 1.5 back in 2005, long before CSS 3 and CSS preprocessors like LESS and SASS were available. While it is the primary stylesheet for many themes it also holds vital information on the theme itself, information that your theme can’t work without. It tells WordPress the name of your theme, the theme author, version, and other important information.

When style.css was first used this dual purpose made a lot of sense. CSS was already the de-facto styling system at the time and combining those styles with information that has to be loaded anyway made a lot of sense and eliminated the need for extra files and extra complexity.

Fast forward to today and the dual purpose of theme information and theme styles in one file can cause problems if you process your CSS stylesheets using LESS or SASS and/or compress them with an app like CodeKit. In this case shrinking the files for faster load times will remove the information you need in style.css to make your theme work with WordPress.

Modern technology just broke your theme.

The answer to solving this is to split your styles into separate files and use style.css either as just the meta information or to load the styles from other files with an @import statement. While this seems like an valid way to go the very reason most people compress files is performance and @import in your CSS will defeat this purpose ([check out this excellent, if not dated, writeup on why not to use @import](http://www.stevesouders.com/blog/2009/04/09/dont-use-import/ "Don't use @import")).

The second solution is just to load both style.css and your new stylesheet in the header of your site. This will work too and is slightly less troublesome than @import but you’re still loading another file every time a user hits your site. When even the smallest change in load time matters you really don’t want to be loading anything you don’t need. As your users don’t need your themes style.css why load it at all? Why not just use the compressed CSS compiled from your source styles?

### The problem with Genesis and style.css

On most themes not loading style.css is actually rather easy. You can just de-register and dequeue it with WordPress’ built-in functions [wp\_deregister\_style()](http://codex.wordpress.org/Function_Reference/wp_deregister_style "wp_deregister_style() in the WordPress Codex") and _[wp\_dequeue\_style()](http://codex.wordpress.org/Function_Reference/wp_dequeue_style "wp_dequeue_style in the WordPress codex")._

If you use The Genesis Framework for your theme this won’t work. Genesis doesn’t add the stylesheet in the normal way and instead uses its own hook to add style.css to your theme’s header.

### Removing style.css from your theme’s header in Genesis

Fortunately, removing style.css from your theme in Genesis is, in some ways, even easier than it is with other WordPress themes as it actually only takes one line of code.

That’s it. Add that to your theme’s _functions.php_ and style.css will no longer load for your site’s visitors (make sure you don’t physically delete the file. You still need it for the theme information at the top). One less file to load is one small step to a leaner site. While this trick isn’t going to shave full seconds off your site’s load time it is an easy way to take a small step to better performance and remove one server call completely.