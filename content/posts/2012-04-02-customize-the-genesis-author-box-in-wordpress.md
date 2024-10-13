---
title: Customize The Genesis Author Box in WordPress
type: post
date: 2012-04-02T00:00:00+00:00
url: /2012/04/customize-the-genesis-author-box-in-wordpress/
categories:
  - Technical
tags:
  - Genesis
  - Web Development
  - WordPress
---

![A custom WordPress author box](/images/2012/04/Custom-author-box-350x98-1.jpg)

This post is a follow-up to the post [Customize the Contact Info Fields in WordPress Profiles][1]. Now that we have some custom contact fields in our WordPress user profiles it’s time to put those fields to work using the Genesis Framework. This tutorial will show you how to get those profile fields on your posts, pages (if you want) and in the author archives.

One of the great features of the [Genesis Framework from Studiopress](http://www.shareasale.com/r.cfm?b=255468&u=527416&m=28169&urllink=&afftrack=) (affiliate link) is the author box. This is the small area at the bottom of your content that displays information about the author of that content which is taken from the user’s WordPress profile. By default it shows the user’s name, avatar, and biographical info but nothing else.

Here’s how you can customize the author box in a Genesis theme to show anything you might need including other contact information you may have added. Please note this tutorial will also cause the author box to appear for all authors regardless of whether the user has chosen to show it or not.

## 1.) Open your theme’s functions.php file

The functions.php file should be in the root of your theme.

## 2.) Delete the old author box(es)

First we’re going to need to remove the existing Genesis Author box with it’s default fields.

``` php
remove_action( 'genesis_after_post', 'genesis_do_author_box_single' );
```

If you want to change the Author box on the author pages you’ll also need the following line of code

``` php
remove_action( 'genesis_before_loop', 'genesis_do_author_box_archive' );
```

## 3.) Register the new author box(es)

Next we’re going to tell WordPress to use the author boxes we’re about to create. For the box on pages and posts use

``` php
add_action( 'genesis_before_comments', 'theme_author_box' );
```

For the author box on the author pages you’ll have to use the following line of code:

``` php
add_action( 'genesis_before_loop', 'theme_author_box_archive' );
```

Notice I’m using two separate functions to create my author boxes. This is because the two add_action lines tell WordPress to always add the box before comments in the first one and before the “loop” (which is basically before the title) in the second. We’ll the use a line in the functions themselves to tell WordPress which pages/posts/etc the boxes should appear on.

## 4.) Create the author box

First we’ll set up the function. Note that for the archive page, or anything content where you want the box to appear on top, just change this line to “function theme\_author\_box_archive();” per step 3. If you want it to appear on top in the archive and on the bottom of posts you will have to use this function twice. Once for each position.

``` php
function theme_author_box() {
```

Then we’ll set up the header

``` php
$authinfo = "\r\n";
$authinfo .= get_avatar(get_the_author_id() , 80); $authinfo .= "About " . get_the_author_meta('display_name')
```

Now we’ll get all our custom fields

``` php
$facebook = get_the_author_meta('facebook');
$linkedin = get_the_author_meta('linkedin');
$twitter = get_the_author_meta('twitter');
$gplus = get_the_author_meta('gplus');
$flength = strlen($facebook);
$llength = strlen($linkedin);
$tlength = strlen($twitter);
$glength = strlen($gplus);
```

Next we’ll display our contact fields but only if our user actually filled them out

``` php
if ($flength > 1 || $glength > 1 || $llength > 1 || $tlength > 1) {
    if (($flength <= 1 && $glength <= 1 && $llength <= 1) && $tlength > 1) {
        $authinfo .= "<p id=\"authcontact\"><a href=\"http://twitter.com/" . $twitter . "\" target=\"_blank\" rel=\"nofollow\" title=\"" . $twitter . " on Twitter\">Follow " . get_the_author_meta('first_name') . " on Twitter</a></p>\r\n";
    } else {
         $authinfo .= "<p id=\"authcontact\">Find " . get_the_author_meta('first_name') . " on ";
        if ($flength > 1) {
            $authinfo .= " <a href=\"http://facebook.com/" . $facebook . "\" target=\"_blank\" rel=\"nofollow\" title=\"" . get_the_author_meta('display_name') . " on Facebook\">Facebook</a>";
        }
        if ($glength > 1) {
            if ($flength > 1) {
                $comma = ',';
            } else {
                $comma = '';
            }
            if ($llength > 1 || $tlength > 1) {
                $and = '';
            } else {
                $and = ' and';
            }
            $authinfo .= $comma . $and . " <a href=\"http://plus.google.com/" . $gplus . "\" rel=\"me\" target=\"_blank\" title=\"" . get_the_author_meta('display_name') . " on Google+\">Google+</a>";
        }
        if ($llength > 1) {
            if ($flength > 1 || $glength > 1) {
                $comma = ',';
            } else {
                $comma = '';
            }
            if ($tlength > 1) {
                $and = '';
            } else {
                $and = ' and';
            }
            $authinfo .= $comma . $and . " <a href=\"http://www.linkedin.com/in/" . $linkedin . "\" target=\"_blank\" rel=\"nofollow\" title=\"" . get_the_author_meta('display_name') . " on LinkedIn\">LinkedIn</a>";
        }
        if ($tlength > 1) {
            $authinfo .= ", and <a href=\"http://twitter.com/" . $twitter . "\" target=\"_blank\" rel=\"nofollow\" title=\"" . get_the_author_meta('display_name') . " on Twitter\">Twitter</a>";
        }
```

Finally we need to tell WordPress where to display everything. Using “is\_single()” puts the author box on individual posts. If this is for the archive page use “is\_author()” for pages use “is\_page().” If you want the same box to appear on posts and pages you can use “is\_single() || is_page()” (note the || is the pipe symbol on the keyboard and means “or”).

``` php
  if ( is_single() ) {
    echo $authinfo;
  }
}
```

Note that if you need both lines from step 3 just copy the code above into a 2nd function changing the function name and the “is_single” line.

## 5.) Save your file

You should now see your custom author box on the content in which you wanted it.

## 6.) Putting it all together

Here’s the whole code to put a custom author box on top of the author page and right before the content on all posts.

``` php
remove_action('genesis_after_post', 'genesis_do_author_box_single');
add_action('genesis_before_comments', 'theme_author_box');
remove_action( 'genesis_before_loop', 'genesis_do_author_box_archive' );
add_action( 'genesis_before_loop', 'theme_author_box_archive' );
function theme_author_box_archive() {
  $authinfo = "<div class=\"author-box\">\r\n";
  $authinfo .= get_avatar(get_the_author_id() , 80);
  $authinfo .= "<strong>About <a href=\"" . get_the_author_meta('url') . "\" target=\"_blank\" title=\"" . get_the_author_meta('website_title') . "\" rel=\"nofollow\">" . get_the_author_meta('display_name') . "</a></strong>\r\n";
  $authinfo .= "<p>" . get_the_author_meta('description') . "</p>\r\n";
  $facebook = get_the_author_meta('facebook');
  $linkedin = get_the_author_meta('linkedin');
  $twitter = get_the_author_meta('twitter');
  $gplus = get_the_author_meta('gplus');
  $flength = strlen($facebook);
  $llength = strlen($linkedin);
  $tlength = strlen($twitter);
  $glength = strlen($gplus);
  if ($flength > 1 || $glength > 1 || $llength > 1 || $tlength > 1) {
    if (($flength <= 1 && $glength <= 1 && $llength <= 1) && $tlength > 1) {
      $authinfo .= "<p id=\"authcontact\"><a href=\"http://twitter.com/" . $twitter . "\" target=\"_blank\" rel=\"nofollow\" title=\"" . $twitter . " on Twitter\">Follow " . get_the_author_meta('first_name') . " on Twitter</a></p>\r\n";
    } else {
      $authinfo .= "<p id=\"authcontact\">Find " . get_the_author_meta('first_name') . " on ";
      if ($flength > 1) {
        $authinfo .= " <a href=\"http://facebook.com/" . $facebook . "\" target=\"_blank\" rel=\"nofollow\" title=\"" . get_the_author_meta('display_name') . " on Facebook\">Facebook</a>";
      }
      if ($glength > 1) {
        if ($flength > 1) {
          $comma = ',';
        } else {
          $comma = '';
        }
        if ($llength > 1 || $tlength > 1) {
          $and = '';
        } else {
          $and = ' and';
        }
        $authinfo .= $comma . $and . " <a href=\"http://plus.google.com/" . $gplus . "\" rel=\"me\" target=\"_blank\" title=\"" . get_the_author_meta('display_name') . " on Google+\">Google+</a>";
      }
      if ($llength > 1) {
        if ($flength > 1 || $glength > 1) {
          $comma = ',';
        } else {
          $comma = '';
        }
        if ($tlength > 1) {
          $and = '';
        } else {
          $and = ' and';
        }
        $authinfo .= $comma . $and . " <a href=\"http://www.linkedin.com/in/" . $linkedin . "\" target=\"_blank\" rel=\"nofollow\" title=\"" . get_the_author_meta('display_name') . " on LinkedIn\">LinkedIn</a>";
      }
      if ($tlength > 1) {
        $authinfo .= ", and <a href=\"http://twitter.com/" . $twitter . "\" target=\"_blank\" rel=\"nofollow\" title=\"" . get_the_author_meta('display_name') . " on Twitter\">Twitter</a>";
      }
      $authinfo .= ".</p>\r\n";
    }
  }
  $authinfo .= "</div>\r\n";
  if ( is_author() ) {
    echo $authinfo;
  }
}
function theme_author_box() {
  $authinfo = "<div class=\"author-box\">\r\n";
  $authinfo .= get_avatar(get_the_author_id() , 80);
  $authinfo .= "<strong>About <a href=\"" . get_the_author_meta('url') . "\" target=\"_blank\" title=\"" . get_the_author_meta('website_title') . "\" rel=\"nofollow\">" . get_the_author_meta('display_name') . "</a></strong>\r\n";
  $authinfo .= "<p>" . get_the_author_meta('description') . "</p>\r\n";
  $facebook = get_the_author_meta('facebook');
  $linkedin = get_the_author_meta('linkedin');
  $twitter = get_the_author_meta('twitter');
  $gplus = get_the_author_meta('gplus');
  $flength = strlen($facebook);
  $llength = strlen($linkedin);
  $tlength = strlen($twitter);
  $glength = strlen($gplus);
  if ($flength > 1 || $glength > 1 || $llength > 1 || $tlength > 1) {
    if (($flength <= 1 && $glength <= 1 && $llength <= 1) && $tlength > 1) {
      $authinfo .= "<p id=\"authcontact\"><a href=\"http://twitter.com/" . $twitter . "\" target=\"_blank\" rel=\"nofollow\" title=\"" . $twitter . " on Twitter\">Follow " . get_the_author_meta('first_name') . " on Twitter</a></p>\r\n";
    } else {
      $authinfo .= "<p id=\"authcontact\">Find " . get_the_author_meta('first_name') . " on ";
      if ($flength > 1) {
        $authinfo .= " <a href=\"http://facebook.com/" . $facebook . "\" target=\"_blank\" rel=\"nofollow\" title=\"" . get_the_author_meta('display_name') . " on Facebook\">Facebook</a>";
      }
      if ($glength > 1) {
        if ($flength > 1) {
          $comma = ',';
        } else {
          $comma = '';
        }
        if ($llength > 1 || $tlength > 1) {
          $and = '';
        } else {
          $and = ' and';
        }
        $authinfo .= $comma . $and . " <a href=\"http://plus.google.com/" . $gplus . "\" rel=\"me\" target=\"_blank\" title=\"" . get_the_author_meta('display_name') . " on Google+\">Google+</a>";
      }
      if ($llength > 1) {
        if ($flength > 1 || $glength > 1) {
          $comma = ',';
        } else {
          $comma = '';
        }
        if ($tlength > 1) {
          $and = '';
        } else {
          $and = ' and';
        }
        $authinfo .= $comma . $and . " <a href=\"http://www.linkedin.com/in/" . $linkedin . "\" target=\"_blank\" rel=\"nofollow\" title=\"" . get_the_author_meta('display_name') . " on LinkedIn\">LinkedIn</a>";
      }
      if ($tlength > 1) {
        $authinfo .= ", and <a href=\"http://twitter.com/" . $twitter . "\" target=\"_blank\" rel=\"nofollow\" title=\"" . get_the_author_meta('display_name') . " on Twitter\">Twitter</a>";
      }
        $authinfo .= ".</p>\r\n";
    }
  }
  $authinfo .= "</div>\r\n";
  if ( is_single() ) {
    echo $authinfo;
  }
}
```

What do you think? Do you have a different way of displaying the author box? I know there’s more than one way to skin a cat. Tell me how you customize the author box in the comments below.

 [1]: /2012/02/customize-the-contact-info-fields-in-wordpress-profiles/