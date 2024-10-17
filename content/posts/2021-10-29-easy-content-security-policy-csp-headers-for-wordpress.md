---
title: Easy Content Security Policy (CSP) Headers for WordPress
date: 2021-10-29T13:42:21+00:00
draft: false
categories:
  - Technical
tags:
  - Security
---

Security headers can be hard. One of the most troublesome are [Content Security Policy (CSP)][1] headers which specify what content (images, scripts, etc) a page is allowed to load. The help protect your site and your users from [cross-site scripting (XSS)][2] by ensuring that the content your site loads has been authorized and isn't malicious.

Historically CSP headers have been difficult for most WordPress developers as there has been no easy way to manage them on your site. That's no longer the case thanks to a very handy plugin.

[Content Security Policy Manager by Patrick Sletvold][3] is a simple plugin that lets you modify each available header to remove any warnings from your site. It allows you to edit individual policies and makes testing them easy by allowing for a "report only" mode that can be toggled with a single click.

Take a look at the screenshots below from this site to see just how easy it can be to manage CSP headers.

![You can choose to test your settings by setting the plugin to 'Report Only' and look at your developer tools for issues.](/images/2021/10/csp-manager-settings.png "You can choose to test your settings by setting the plugin to 'Report Only' and look at your developer tools for issues.")

![When an issue is found simply add the src to the appropriate box and you're done.](/images/2021/10/csp-manager-settings-2.png "When an issue is found simply add the src to the appropriate box and you're done.")

Sure it takes a little time to get them all, especially on a more complicated site. It is worth it though as your site will rate better when you do any kind of security test and will be safer for you and your users as you'll know that nothing can be added without your knowledge.

![The security score from this site on webpagetest.org after implementing CSP Manager.](/images/2021/10/Screen-Shot-2021-10-24.jpg "The security score from this site on webpagetest.org after implementing CSP Manager.")

 [1]: https://content-security-policy.com/
 [2]: https://owasp.org/www-community/attacks/xss/
 [3]: https://wordpress.org/plugins/csp-manager/