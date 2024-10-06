---
title: Customize WordPress Login Page Logo
type: post
date: 2012-03-20T00:00:00+00:00
url: /2012/03/customize-wordpress-login-page-logo/
categories:
  - Technical
tags:
  - Web Development
  - WordPress

---
<div class="wp-block-image">
  <figure class="alignleft"><img decoding="async" src="/images/2012/03/custom-WordPress-login-screen-150x150-1.jpg" alt="Custom WordPress login screen" class="wp-image-4054" title="custom-WordPress-login-screen" /></figure>
</div>

Do you let people log into your <a title="WordPress.org" href="http://wordpress.org" target="_blank" rel="noopener noreferrer">WordPress</a> site? Would you rather your login page just display your own company or brand logo rather than the WordPress logo?

Changing the logo on your WordPress login screen is easy. Here’s how you do it:

## 1.) Upload your logo image to your site.

<img loading="lazy" decoding="async" class="size-thumbnail wp-image-4053 " title="media-screenshot" src="/images/2012/03/media-screenshot-150x150-1.jpg" alt="WordPress Image Edit Screen" width="150" height="150" /> When you edit a WordPress image it will give you the address the file is located at.

If you already have it uploaded right-click on it to get the image properties and copy the URL. If not upload it in “Media” by selecting add-new and then following the prompts to upload your image. You can then get the URL from the WordPress Dashboard by clicking on the title of the image you uploaded and copying it from the form (see screenshot).

## 2.) Open your theme’s functions.php file.

This is usually found in _/wp-content/themes/[your-theme-name]_

## 3.) Create a function for the new image

Add the following to your functions.php to set up the new logo. Note you may have to tweak the width and height for your own image.

<pre class="wp-block-code" aria-describedby="shcb-language-26" data-shcb-language-name="PHP" data-shcb-language-slug="php"><span><code class="hljs language-php">&lt;span class="hljs-function">&lt;span class="hljs-keyword">function&lt;/span> &lt;span class="hljs-title">theme_login_head&lt;/span>&lt;span class="hljs-params">()&lt;/span> &lt;/span>{
  &lt;span class="hljs-meta">?&gt;&lt;/span>
  &lt;style type=&lt;span class="hljs-string">"text/css"&lt;/span>&gt;
  body.login &lt;span class="hljs-comment">#login h1 a {&lt;/span>
    background: url(&lt;span class="hljs-string">"http://yoursite.com&#91;path-to-your-logo]logo.png"&lt;/span>) no-repeat scroll center top transparent;
    height: &lt;span class="hljs-number">80&lt;/span>px;
    margin-left: &lt;span class="hljs-number">8&lt;/span>px;
    width: &lt;span class="hljs-number">320&lt;/span>px;
  }
  &lt;/style&gt;
  &lt;span class="hljs-meta">&lt;?php&lt;/span>
}</code></span><small class="shcb-language" id="shcb-language-26"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">PHP</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">php</span><span class="shcb-language__paren">)</span></small></pre>

## 4.) Register the function with WordPress

After you add (and customize) the function with your new logo we need to tell WordPress to use it. You can do that by adding the following line of code:

add\_action( &#8216;login\_head', &#8216;theme\_login\_head' );

## 5.) Save the functions.php file

If you’ve downloaded functions.php to edit it make sure it gets back to your server.

## 6.) Test

You should now have your own logo displaying on your login page. Wasn’t that easy?