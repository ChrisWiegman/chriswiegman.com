---
title: Please Stop Hiding wp-admin
type: post
date: 2021-10-13T12:17:53+00:00
url: /2021/10/please-stop-hiding-wp-admin/
categories:
  - Technical
tags:
  - Security

---
Once upon a time the security of a WordPress site could be improved by simply moving the login page.

Those were simpler days. The REST API wasn't part of WordPress core and WordPress itself was a much smaller part of the internet and, as a result, a much smaller target for attackers than it is now.
I even wrote one of the better implementations to hide the WordPress login page as part of, first, [Better WP Security and later iThemes Security][1]. It made sense at the time when I could see the brute force login attempts drop off considerably on my sites when I employed the feature.

Today things are not so simple. Today such a feature is more likely to bring your site down than keep it up. Why?

First, there are many more ways to login to WordPress. There is still the WordPress Dashboard, which we were hiding, and XMLRPC, which many sites used to disable, but there is also the REST API, GraphQL and so many other interfaces to WordPress that allow authentication. Moving one of them does nothing for the others and moving all of them will almost surely break any site that relies on the functionality.

Second, login security is better than it used to be. We can implement 2-factor authentication and block attackers as soon as they try getting in. We even have managed hosts like WP Engine who can do all of this for us and block an attacker before they even get to our site. Hiding your login page can't hold a candle to these newer techniques.

Next, moving wp-admin can break your site. One of the strengths of WordPress today is its integration with other software and services. Much of this integration can be broken by modifying core WordPress features such as the location of the WordPress login. Even when I was working on Better WP Security this was one of the biggest causes for support calls as I was constantly instructing people to disable the feature to enable the integration they needed.

Finally, most WordPress attacks don't succeed because someone guesses your user password. Most attacks succeed because you have kept a vulnerable plugin or theme on your site. There is little point in wasting computer power on trying to brute force a site when there are so many countermeasures for such an attack. Instead, bots simply look directly for known insecure plugins and attempt to exploit your site through them when they're found. It's a far more effective strategy for hackers than trying logins until they get one right.

There's a concept in computer security called "[security by obscurity][2]." In essence this is simply hiding an access point or other information with the hopes that an attacker won't notice. This isn't real security anymore than is moving the door from the front of your house to the side of it to stop a burglar.

So, stop hiding wp-admin and start updating your site while using a solid host. Not only will your security be much improved but you'll have far fewer problems than you otherwise would when these types of gimmick features go bad.

 [1]: https://wordpress.org/plugins/better-wp-security/
 [2]: https://en.wikipedia.org/wiki/Security_through_obscurity