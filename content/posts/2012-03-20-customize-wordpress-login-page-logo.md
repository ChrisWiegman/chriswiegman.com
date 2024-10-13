---
title: Customize WordPress Login Page Logo
date: 2012-03-20T00:00:00+00:00
categories:
  - Technical
tags:
  - Web Development
  - WordPress
---

![Custom WordPress login screen](/images/2012/03/custom-WordPress-login-screen-150x150-1.jpg)

Do you let people log into your <a title="WordPress.org" href="http://wordpress.org" target="_blank" rel="noopener noreferrer">WordPress</a> site? Would you rather your login page just display your own company or brand logo rather than the WordPress logo?

Changing the logo on your WordPress login screen is easy. Here’s how you do it:

## 1.) Upload your logo image to your site.

![WordPress Image Edit Screen](/images/2012/03/media-screenshot-150x150-1.jpg)

When you edit a WordPress image it will give you the address the file is located at.

If you already have it uploaded right-click on it to get the image properties and copy the URL. If not upload it in “Media” by selecting add-new and then following the prompts to upload your image. You can then get the URL from the WordPress Dashboard by clicking on the title of the image you uploaded and copying it from the form (see screenshot).

## 2.) Open your theme’s functions.php file.

This is usually found in _/wp-content/themes/[your-theme-name]_

## 3.) Create a function for the new image

Add the following to your functions.php to set up the new logo. Note you may have to tweak the width and height for your own image.

``` php
function theme_login_head() {
  ?>
  <style type="text/css">
  body.login #login h1 a {
    background: url("http://yoursite.com[path-to-your-logo]logo.png") no-repeat scroll center top transparent;
    height: 80px;
    margin-left: 8px;
    width: 320px;
  }
  </style>
  <?php
}
```

## 4.) Register the function with WordPress

After you add (and customize) the function with your new logo we need to tell WordPress to use it. You can do that by adding the following line of code:

add\_action( &#8216;login\_head', &#8216;theme\_login\_head' );

## 5.) Save the functions.php file

If you’ve downloaded functions.php to edit it make sure it gets back to your server.

## 6.) Test

You should now have your own logo displaying on your login page. Wasn’t that easy?