---
title: Creating A Minimal WordPress Theme In The Era Of Gutenberg
date: 2021-04-25T15:38:31+00:00
featured_image: /images/2021/04/creating-a-minimal-wordpress-theme-in-the-era-of-gutenberg.png
categories:
  - Technical
tags:
  - Gutenberg
  - JavaScript
  - Theming
  - WordPress
---

One of the most attractive features of static generators like Hugo and others is their ability to serve light-weight pages that load quickly on any device. This is such a selling point that it isn't uncommon for me to hear of people leaving WordPress for just that, often to later follow with many of the same frustrations of static generators that [brought me back to WordPress][1] when I started facing them.

The truth is, as this site demonstrates, you can have a light-weight site and still maintain all of the content management benefits of working with WordPress. Here's how I did it:
Before you get too far, if you simply want to try my theme for yourself you can [find it here][2]. The readme file in the repository should be enough to get you going. If, however, you want to build your own lightweight theme for WordPress here's the real tricks from the theme that helped me do it.

## 3 keys to a lightweight theme

To keep the theme as light as possible for the end user there were really three major drives I tried to incorporate in this theme

1. No JavaScript should be needed on the front-end
2. Styles should be limited to a single stylesheet and strive to be as minimal as possible
3. All non-essential assets such as fonts, images, comments and anything else were removed.

While this list might sound simple, most people actually find it quite difficult to achieve in WordPress with themes that strive to be everything for all sites and use as much code to get them there as possible. In fact, if you're looking for that, this theme isn't it. What this theme does is provide an accessible, sustainable and usable base at which to blog. Nothing more, nothing less. Here's how we achieve the 3 goals in to do this while still keeping WordPress.

## Removing all JavaScript from the front-end

I should note here that all of these snippets and techniques depend on a theme that supports them. Just taking out a single script or style in your existing theme won't do much to reduce page weight if your theme simply adds others to your site for you.

For a logged-out user it's actually quite simple to remove any core JavaScript and, thanks to how the Block Editor renders, you won't lose much by doing it. The only place this will be a problem is if you start embeding content such as slides or videos in your posts as removing the only script you need will break those.

``` php
function action_wp_enqueue_scripts() {
	wp_deregister_script( 'wp-embed' );
}
add_action( 'wp_enqueue_scripts', 'action_wp_enqueue_scripts' );
```

Simply adding the above snippet to your themes' _functions.php_ file will ensure that, when logged out, you'll have no core JavaScript in your theme that isn't tied to other features (we'll get to those shortly).

## Reducing CSS in your theme

Reducing the core CSS in your theme is slightly more complicated, but not prohibitively so. The catch here is that, by default, WordPress adds block styles. This CSS can be removed but you will need to rebuild the styles for the blocks you still use in your new theme.

To remove the default block styles add the following to your theme's _functions.php_. Note that the function can be combined with the function above for sake of brevity.

``` php
function action_wp_enqueue_scripts() {
	wp_dequeue_style( 'wp-block-library' );
}
add_action( 'wp_enqueue_scripts', 'action_wp_enqueue_scripts' );
```

Once you remove the default styles you'll need to replace them for the blocks you need. You can see the styles I've imported to this theme here. These are taken from [/wp-includes/css/dist/block-library/style.css][3] and any other blocks you need can be added as well. With a little bit of trial and error this should make it trivial to reduce the CSS on your site to under 10kb if you want to go that far.

## Removing other assets and features

Finally, once you've removed the core JavaScript and CSS, it's time to clean up anything else you don't need in your theme. The big one is comments. By default comments load quite a bit on a WordPress site. You can disable them completely by adding the following to _functions.php_.

``` php
function action_wp_before_admin_bar_render() {
	global $wp_admin_bar;
	$wp_admin_bar->remove_menu( 'comments' );
}
function action_admin_menu() {
	remove_menu_page( 'edit-comments.php' );
}
function action_init() {
	remove_post_type_support( 'post', 'comments' );
	remove_post_type_support( 'page', 'comments' );
}
add_action( 'wp_before_admin_bar_render', 'action_wp_before_admin_bar_render' );
add_action( 'admin_menu', 'action_admin_menu' );
add_action( 'init', 'action_init' );
add_filter( 'feed_links_show_comments_feed', '__return_false' );
```

Finally, we can hook into the _init_ action, still using our _functions.php_, to remove any leftover scripts, styles and other features that would otherwise pollute our theme's output

``` php
function action_init() {
	remove_action( 'wp_head', 'print_emoji_detection_script', 7 );
	remove_action( 'wp_print_styles', 'print_emoji_styles' );
	remove_action( 'wp_head', 'rsd_link' );
	remove_action( 'wp_head', 'wlwmanifest_link' );
	remove_action( 'wp_head', 'wp_generator' );
	remove_action( 'template_redirect', 'rest_output_link_header', 11 );
	remove_action( 'wp_head', 'wp_oembed_add_discovery_links' );
	remove_action( 'wp_head', 'rest_output_link_wp_head' );
}
add_action( 'init', 'action_init' );
```

And that's it. These should help you remove the WordPress defaults that would normally add more weight to your WordPress page. It's not all of it though. Removing will take care of defaults but it is still up to you to make sure you're not adding anything new in your plugins or themes.

 [1]: /2020/08/hello-wordpress-my-old-friend/
 [2]: https://github.com/chriswiegman/chriswiegman-theme
 [3]: https://github.com/WordPress/WordPress/blob/ad48a153873cdef28ab03c54a034de807e729052/wp-includes/css/dist/block-library/style.css#L1007