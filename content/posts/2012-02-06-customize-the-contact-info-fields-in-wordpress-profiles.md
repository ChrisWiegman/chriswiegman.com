---
title: Customize the Contact Info Fields in WordPress Profiles
type: post
date: 2012-02-06T00:00:00+00:00
url: /2012/02/customize-the-contact-info-fields-in-wordpress-profiles/
categories:
  - Technical
tags:
  - WordPress
---

![WordPress Contact Info](/images/2012/02/WordPress-contact-info-225x119-1.png "The WordPress profile with custom contact information.")

The [WordPress](http://wordpress.org) profile has some handy fields for storing contact info but, unfortunately, not many of us are using Google Talk or AIM anymore (and who wants to put them on their posts anyway). Fortunately it is easy to change these fields to suit your needs and incorporate information from social networks such as [Facebook](https://www.facebook.com), [Twitter](http://twitter.com), [LinkedIn](http://linkedin.com), [Google+](http://plus.google.com) , or anything else.

## 1.) Open your theme’s functions.php file

Were going to edit our theme rather than put this in a plugin. The _functions.php_ file should be found in the root of your theme directory.

## 2.) Create a new function

First we’ll create a new function to hold the code for adding and deleting fields.

``` php
function change_contact_info($contactmethods) {
```

## 3.) Take out the fields we don’t want

In our function we need to remove the fields we don’t want. The following lines remove AIM, Google Talk and Yahoo Messenger.

``` php
unset($contactmethods['aim']);
unset($contactmethods['yim']);
unset($contactmethods['jabber']);
```

## 4.) Add the fields we do want

Next we’ll add the contact fields we do want. This example adds a title for the user’s website, Facebook, Google+, Twitter, and LinkedIn but you can customize this for anything you want.

``` php
$contactmethods['website_title'] = 'Website Title';
$contactmethods['twitter'] = 'Twitter';
$contactmethods['facebook'] = 'Facebook';
$contactmethods['linkedin'] = 'Linked In';
$contactmethods['gplus'] = 'Google +';
```

## 5.) Return the new contact methods and close the function

We’re going to send our contact fields back to WordPress and close the function we used to edit the fields.

``` php
    return $contactmethods;
}
```

## 6.) Register our function with WordPress

Finally we need to register our function with WordPress which will, in effect, “turn on” our changes.

``` php
add_filter('user_contactmethods','change_contact_info',10,1);
```

## Putting it all together

Here’s the final code that creates the contact info fields you see on in the picture at the top of this page. In an upcoming post I will add a tutorial on how you can use these fields to automatically populate author information on a WordPress theme.

``` php
function change_contact_info($contactmethods) {
    unset($contactmethods['aim']);
    unset($contactmethods['yim']);
    unset($contactmethods['jabber']);
    $contactmethods['website_title'] = 'Website Title';
    $contactmethods['twitter'] = 'Twitter';
    $contactmethods['facebook'] = 'Facebook';
    $contactmethods['linkedin'] = 'Linked In';
    $contactmethods['gplus'] = 'Google +';
    return $contactmethods;
}
add_filter('user_contactmethods','change_contact_info',10,1);
```