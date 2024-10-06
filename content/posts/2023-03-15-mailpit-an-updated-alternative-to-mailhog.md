---
title: Mailpit, an updated alternative to Mailhog
type: post
date: 2023-03-15T07:38:14+00:00
url: /2023/03/mailpit-an-updated-alternative-to-mailhog/
featured_image: /images/2023/03/screenshot-of-mailpit.jpg
categories:
  - Technical
tags:
  - Development Tools
  - Web Development
  - WordPress
---

For a long time I used [MailHog][1] on development sites to make sure I’m catching any outbound emails the site might want to send. It’s extremely useful after downloading, for example, a production site with a large user database where your work might accidentally email those folks something you wouldn’t want to go out.

There’s one problem with MailHog: with the last release in 2020 and no commits since August of 2022 it feels mostly abandoned. As I’ve wanted to add such functionality to [Kana][2] I just didn’t want to trust that a vulnerability or other issue would pop up that could affect myself or anyone else using it.

Enter [Mailpit][3].

Mailpit, which claims to be a “much, much faster” application inspired my MailHog is receiving regular updates, really does feel fast and works quite well at capturing anything going out from your development WordPress site.

If you’ve used MailHog to protect your users during development I highly recommend you give Mailpit a try. In my case I found it was a drop-in replacement for MailHog that not only works but is being regularly maintained.

 [1]: https://github.com/mailhog/MailHog
 [2]: https://github.com/ChrisWiegman/kana/
 [3]: https://github.com/axllent/mailpit