---
title: Easy Content Security Policy (CSP) Headers for WordPress
type: post
date: 2021-10-29T13:42:21+00:00
url: /2021/10/easy-content-security-policy-csp-headers-for-wordpress/
categories:
  - Technical
tags:
  - Security

---
Security headers can be hard. One of the most troublesome are [Content Security Policy (CSP)][1] headers which specify what content (images, scripts, etc) a page is allowed to load. The help protect your site and your users from [cross-site scripting (XSS)][2] by ensuring that the content your site loads has been authorized and isn't malicious.

Historically CSP headers have been difficult for most WordPress developers as there has been no easy way to manage them on your site. That's no longer the case thanks to a very handy plugin.

[Content Security Policy Manager by Patrick Sletvold][3] is a simple plugin that lets you modify each available header to remove any warnings from your site. It allows you to edit individual policies and makes testing them easy by allowing for a "report only" mode that can be toggled with a single click.

Take a look at the screenshots below from this site to see just how easy it can be to manage CSP headers.<figure class="wp-block-image size-large">

<img loading="lazy" decoding="async" width="850" height="485" src="/images/2021/10/csp-manager-settings-850x485.png" alt="" class="wp-image-1013" srcset="/images/2021/10/csp-manager-settings-850x485.png 850w, /images/2021/10/csp-manager-settings-400x228.png 400w, /images/2021/10/csp-manager-settings.png 1440w" sizes="(max-width: 850px) 100vw, 850px" /> <figcaption>You can choose to test your settings by setting the plugin to "Report Only" and look at your developer tools for issues.</figcaption></figure> <figure class="wp-block-image size-large"><img loading="lazy" decoding="async" width="850" height="451" src="/images/2021/10/csp-manager-settings-2-850x451.png" alt="" class="wp-image-1014" srcset="/images/2021/10/csp-manager-settings-2-850x451.png 850w, /images/2021/10/csp-manager-settings-2-400x212.png 400w, /images/2021/10/csp-manager-settings-2.png 1440w" sizes="(max-width: 850px) 100vw, 850px" /><figcaption>When an issue is found simply add the src to the appropriate box and you're done.</figcaption></figure>

Sure it takes a little time to get them all, especially on a more complicated site. It is worth it though as your site will rate better when you do any kind of security test and will be safer for you and your users as you'll know that nothing can be added without your knowledge.<figure class="wp-block-image size-large">

<img loading="lazy" decoding="async" width="850" height="277" src="/images/2021/10/Screen-Shot-2021-10-24-at-12.37.42-850x277.jpg" alt="" class="wp-image-1015" srcset="/images/2021/10/Screen-Shot-2021-10-24-at-12.37.42-850x277.jpg 850w, /images/2021/10/Screen-Shot-2021-10-24-at-12.37.42-400x130.jpg 400w, /images/2021/10/Screen-Shot-2021-10-24-at-12.37.42.jpg 1500w" sizes="(max-width: 850px) 100vw, 850px" /> <figcaption>The security score from this site on webpagetest.org after implementing CSP Manager.</figcaption></figure>

 [1]: https://content-security-policy.com/
 [2]: https://owasp.org/www-community/attacks/xss/
 [3]: https://wordpress.org/plugins/csp-manager/