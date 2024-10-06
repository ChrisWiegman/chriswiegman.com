---
title: Redirect Your RSS Feed to FeedBurner
type: post
date: 2012-02-22T00:00:00+00:00
url: /2012/02/redirect-your-rss-feed-to-feedburner/
categories:
  - Technical
tags:
  - WordPress

---
<div class="wp-block-image">
  <figure class="aligncenter"><img decoding="async" src="/images/2012/02/feedburner.png" alt="FeedBurner Logo" class="wp-image-3945" /></figure>
</div>

Do you use <a href="http://feedburner.google.com/" target="_blank" rel="noreferrer noopener">FeedBurner</a>? It’s a great service that can add a lot of value to your website or blog. For a lot of folks however switching to it can be scary as how do you tell existing subscribers that your feed has moved?&nbsp;

The answer, if you’re using Apache, is amazingly simple.

## 1.) Set up your Feedburner account

This is easy. Go to <a href="http://feedburner.google.com/" target="_blank" rel="noreferrer noopener">feedburner.google.com</a> and sign up. You can use your <a href="http://gmail.com" target="_blank" rel="noreferrer noopener">GMail</a> address to create an account.

## 3.)&nbsp;Open up your site’s .htaccess file

This should be found in the root of your site but if you’re on Mac or Linux you’ll have to view hidden files.

## 4.) Add the following

<pre class="wp-block-code" aria-describedby="shcb-language-25" data-shcb-language-name="JavaScript" data-shcb-language-slug="javascript"><span><code class="hljs language-javascript">RewriteEngine On
RewriteBase /
RewriteCond %{HTTP_USER_AGENT} !^(FeedBurner|FeedValidator) &#91;NC]
RewriteRule ^feed/?(&#91;_0&lt;span class="hljs-number">-9&lt;/span>a-z-]+)?&lt;span class="hljs-regexp">/?$ http:/&lt;/span>&lt;span class="hljs-regexp">/feeds.feedburner.com/&lt;/span>Bit51 &#91;R=&lt;span class="hljs-number">301&lt;/span>,NC,L]</code></span><small class="shcb-language" id="shcb-language-25"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">JavaScript</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">javascript</span><span class="shcb-language__paren">)</span></small></pre>

Where _feed/_ is the address of your existing feed in relation to your homepage. For example, the above uses the Bit51.com feed whereas WordPress normally sets the feed to _https://www.chriswiegman.com/feed_. The rewrite rule then uses the “_feed/_” in the last line and redirects it to the FeedBurner&nbsp;address for everyone except FeedBurner&nbsp;bots (which will need to see the old stuff to update your new feed).

## 5.) Done.

Now anyone, including readers, who go to your own feed will automatically be taken to your new feed.