---
title: Securing Your WordPress Logins with Jetpack and WordPress.com
type: post
date: 2017-12-11T00:00:00+00:00
url: /2017/12/securing-your-wordpress-logins-with-jetpack-and-wordpress-com/
categories:
  - Technical
tags:
  - Security
  - WordPress

---
Logins can often be a weak point for many WordPress sites. From weak passwords to lack of good [2-factor authentication][1], many people just don’t seem to take it seriously. On top of that, even for site owners who do their best to lock down their user accounts it can often be trivial to exploit various weaknesses to get into the system through the login page such as [dictionary attacks][2] and others.

Given the weaknesses of the login page for small sites why bother using it at all? Why not simply rely on a trusted service such as WordPress.com to authenticate your users for you? We do this all the time with other services we rely on logging in with our Facebook or Google accounts rather than providing our own user name and password. Why not do it for your site to?
**If You’re a Jetpack User Secure Sign On Is Built In**

Yep, that’s right, if you’re already a [Jetpack][3] user you can offload site logins to [WordPress.com][4] allowing people to use it as an extra login or, more securely, by forcing users to login with their WordPress.com account. This means you’re no longer responsible for authenticating your own users and, as long as they have a WordPress.com address you can make it available to them with a single option and even require their WordPress.com accounts to use 2-factor authentication.

First, make sure each of your users has an account on WordPress.com, preferably with the same email address as their local account.

To make Secure Sign On available via Jetpack navigate to _Jetpack -> Settings -> Security_ and turn on&nbsp;_Allow users to log into this site using WordPress.com accounts_ (see the screenshot below). You can also set options to automatically match accounts by email address and/or require WordPress.com users to enable two-factor authentication on their accounts. For security I would highly recommend turning on this last option.

<div class="wp-block-image">
  <figure class="aligncenter size-large"><img loading="lazy" decoding="async" width="500" height="140" src="/images/2017/12/enable-jetpack-secure-sign-on.jpg" alt="Enable Jetpack secure sign on" class="wp-image-382" srcset="/images/2017/12/enable-jetpack-secure-sign-on.jpg 500w, /images/2017/12/enable-jetpack-secure-sign-on-400x112.jpg 400w" sizes="(max-width: 500px) 100vw, 500px" /><figcaption>Go to your Jetpack Security settings and turn on WordPress.com logins and their associated options.</figcaption></figure>
</div>

## Redirecting Your Login Page to WordPress.com

Turning on Secure Sign On with Jetpack is the first step. To be even more secure we need to redirect our login pages to WordPress.com bypassing local login entirely. To completely disable your local login page you’ll need to add two lines of code to your theme’s functions.php file:

<pre class="wp-block-code" aria-describedby="shcb-language-66" data-shcb-language-name="PHP" data-shcb-language-slug="php"><span><code class="hljs language-php">add_filter( &lt;span class="hljs-string">'jetpack_sso_bypass_login_forward_wpcom'&lt;/span>, &lt;span class="hljs-string">'__return_true'&lt;/span> );add_filter( &lt;span class="hljs-string">'jetpack_remove_login_form'&lt;/span>, &lt;span class="hljs-string">'__return_true'&lt;/span> );</code></span><small class="shcb-language" id="shcb-language-66"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">PHP</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">php</span><span class="shcb-language__paren">)</span></small></pre>

_*Note: there are other options you can set in your functions.php file. [For a full list of options see Jetpack’s support page][5]._

Save your functions.php file, logout of your site and try to login again. You should no longer see your own WordPress login page but instead you should be taken to a WordPress.com login page. Once you log into WordPress.com you should be automatically taken back to the dashboard of your own site. Congratulations, your site logins are now much more secure.

 [1]: https://en.wikipedia.org/wiki/Multi-factor_authentication
 [2]: https://en.wikipedia.org/wiki/Dictionary_attack
 [3]: https://jetpack.com/
 [4]: https://wordpress.com/
 [5]: https://jetpack.com/support/sso/