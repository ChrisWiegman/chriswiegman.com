---
title: Using a Custom wp-signup Page With WordPress MU
type: post
date: 2010-02-26T00:00:00+00:00
url: /2010/02/using-a-custom-wp-signup-page-with-wordpress-mu/
categories:
  - Technical
tags:
  - WordPress

---
<a href="http://mu.wordpress.org" target="_blank" rel="noreferrer noopener">WordPress MU</a> is a great system, but as with all systems their are drawbacks. One such drawback I’ve had problems with is the lack of available customizations for the sign-up/registration page. Whether you just want to change the style, or change the very text itself there really isn’t anything you can do with it without hacking the WordPress MU core which can be a nightmare come upgrade time.

<div class="wp-block-image">
  <figure class="aligncenter size-large"><img loading="lazy" decoding="async" width="350" height="202" src="/images/2010/02/Wordpress-Registration-Page-350x202-1.png" alt="A Custom WordPress Registration Page" class="wp-image-253" /><figcaption>A Custom WordPress Registration Page</figcaption></figure>
</div>

My solution to this problem has been to use my own wp-signup.php page within my sign-up theme. Here’s how it’s done:

Before you start, make sure your server supports Apache mod-rewrite. An easy way to do this is to simply go to a post on one of your blogs. If you don’t see _?=_ anywhere in the address you should be OK. If not, go to http://www.yoursite.com/wp-admin/options-permalink.php and see if permalinks are available on your server. If they are not you will need to get this enabled by your server administrator before going any further.

Next, the most important part, open up the .htaccess file in the root of your WordPress MU installation in your text editor. You may need to create the file if you haven’t been using any redirects previously.

Find the line:

<pre class="wp-block-code"><span><code class="hljs">RewriteBase /</code></span></pre>

Right below it (before anything else) add the line

<pre class="wp-block-code"><span><code class="hljs">RewriteRule ^wp-signup.php(.*)$ wp-content/themes/&#91;your theme name]/wp-signup.php$1</code></span></pre>

Save the file.

Finally, copy (don’t move) wp-signup.php from the root of your WordPress MU installation to your theme directory (usually content/themes/default). Make sure you leave the original file in place. Moving the file alters the WordPress MU core installation which is never a good practice.

Now you may edit the wp-signup.php file to your heart’s content. Redirects to the new file should be seamless to your users.

If you would like to see how I’ve used this take a look at . Now my needs were simple, we just wanted to clarify some of the text to reduce confusion for our users. There is a lot more that can be done to make this form yours.

_\* edited Feb 27th, 2010: added a couple of important lines \*_
Never write on a deadline when you don’t have to. I forgot to change 2 important line.

In your new wp-signup.php page (the one in your themes folder) find the following 2 lines:

<pre class="wp-block-code" aria-describedby="shcb-language-1" data-shcb-language-name="PHP" data-shcb-language-slug="php"><span><code class="hljs language-php">&lt;span class="hljs-keyword">require&lt;/span>( dirname(&lt;span class="hljs-keyword">__FILE__&lt;/span>) . &lt;span class="hljs-string">'/wp-load.php'&lt;/span> );
&lt;span class="hljs-keyword">require&lt;/span>( &lt;span class="hljs-string">'wp-blog-header.php'&lt;/span> );</code></span><small class="shcb-language" id="shcb-language-1"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">PHP</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">php</span><span class="shcb-language__paren">)</span></small></pre>

and replace them with the following:

<pre class="wp-block-code" aria-describedby="shcb-language-2" data-shcb-language-name="JavaScript" data-shcb-language-slug="javascript"><span><code class="hljs language-javascript">&lt;span class="hljs-built_in">require&lt;/span>( &lt;span class="hljs-string">'../../../wp-load.php'&lt;/span> );
&lt;span class="hljs-built_in">require&lt;/span>( &lt;span class="hljs-string">'../../../wp-blog-header.php'&lt;/span> );</code></span><small class="shcb-language" id="shcb-language-2"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">JavaScript</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">javascript</span><span class="shcb-language__paren">)</span></small></pre>

This will ensure that WordPress MU can find the files it needs to process your data.