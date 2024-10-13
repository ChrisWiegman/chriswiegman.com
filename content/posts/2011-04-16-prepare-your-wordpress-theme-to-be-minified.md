---
title: Prepare Your WordPress Theme To Be Minified
date: 2011-04-16T04:00:00+00:00
categories:
  - Technical
tags:
  - WordPress
---

Minifying your [WordPress][1] themes is one of the best things you can do to help reduce the number of http calls made to the server and thus help reduce the loading time of your site. There are two excellent plugins which can do the actual work for you, [W3 Total Cache][2] and WP Minify both of which will take the Javascript files and style sheets in your theme and plugin output and combine them into a single javascript file and a single stylesheet. In the case of a complex theme or a site with many plugins this technique alone can easily save 10 or more http requests and provide a noticeable decrease in load times.

Unfortunately this isn’t always so easy. Many themes and even some plugins will hard-code style sheets and javascript files into the header preventing them from being minified. Fortunately the fix for this is pretty easy.

Let’s start with themes:

First, make a list of all the css and js files hardcoded into the header.php file. Don’t have a header.php in your theme? Just look for the php file in your theme with \[html\]\[/html\] and \[html\]\[/html\] and make your list from there. For this example we’re going to assume you had two css files listed, style.css and style2.css.

Next open the functions.php file in your theme.  Here’s where we are going to list the files. Start by making sure that these don’t load in the WordPress backend by entering:

``` php
if ( ! is_admin() ) {
```

Then enter the files themselves:

``` php
wp_enqueue_style('mytheme_style1', get_stylesheet_directory_uri() . '/style1.css', NULL, NULL, 'all' );
wp_enqueue_style('mytheme_style2', get_stylesheet_directory_uri() . '/style2.css', NULL, NULL, 'all' );
```

Remember to close the block with

``` php
}
```

You’ll of course want to replace “mytheme” with your theme name (no spaces) and the “\_style1” section with a description of your stylesheet (layout, master, color, etc). If you are using a child theme you can also include the parent stylesheet by replacing “get\_stylesheet\_directory\_uri()” with “get\_template\_directory_uri()” which will pull directly from the parent theme folder instead of your child theme.

Finally, go back to your header.php file and delete the stylesheets from there.

You should now test your theme and then try whichever minify plugin you prefer.

For Javascript files the method is very similar. Find out which you need from header.php and include them in functions.php with the following code:

``` php
if ( !is_admin() ) {
    wp_register_script('mytheme_script',get_bloginfo('template_directory') . '/js/custom_script.js', array('name_of_script_dependencies'), '1.0' );
    wp_enqueue_script('mytheme_script');
}
```

Note the big difference with scripts is that they take 2 lines to add to your functions.php file rather than one as they first have to be registered with WordPress and then enqueued.

As for plugins, these are a slightly different beast and I’ll warn that you really do need to be careful when editing plugin files. You can still however find any hard-coded scripts in your plugin file and move them to functions.php. The problem is when the plugin is updated you will need to remove it from the plugin code again.

###### Still stuck on W3 Total Cache? Try this:

*   [How To Configure The Various W3TC Plugin Settings For Your WordPress Blog](http://www.makeuseof.com/tag/configure-w3tc-plugin-wordpress/) (makeuseof.com)

 [1]: http://wordpress.org
 [2]: http://wordpress.org/extend/plugins/w3-total-cache/