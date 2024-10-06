---
title: The Limits of Unlimited Hosting
type: post
date: 2011-08-31T04:00:00+00:00
url: /2011/08/the-limits-of-unlimited-hosting/
categories:
  - Technical
tags:
  - Web Development

---
Anyone who has looked for a host for their website in the last few years has surely seen the advertisements for “unlimited hosting.” These ads are something of a window back to the days when web hosts limited the amount of disk space and bandwidth (the amount of data transferred over the internet) you received due to the expense of both commodities. Today things are a little different though. Both bandwidth and disk space has become so cheap that almost no one even changes you for them. Instead nearly every host in the business will offer you “unlimited” hosting in which bandwidth and disk space aren’t even measured for somewhere around $5 a month.

So what’s the catch? If these hosts are truly unlimited why are so few large sites using them? I mean couldn’t every site on the web sign up for a Hostgator account and be done with it?

While bandwidth and disk space costs have become far cheaper for hosts to offer, the computing power actually consumed by most websites has not. Yes computers are much more powerful and offer much more RAM than they did 10 years ago, but at the same time thanks to the use of software such as <a title="Wordpress" href="http://wordpress.org" target="_blank" rel="noopener noreferrer">WordPress</a> and <a title="Drupal" href="http://drupal.org" target="_blank" rel="noopener noreferrer">Drupal</a> they consume even more than has been added.

The result: **unlimited hosting accounts are limited by the amount of cpu and RAM (memory) on the host server.**

Most of the unlimited hosting accounts in use by small website are what are called “shared hosting.” That is, the computing power of the server is split equally among all the sites hosted on the server. Every time a person visits a site the server must then assign both RAM and access to the CPU to that user to generate and send the page in question. If a server is new and has few sites on it this might not be that much of a limit, especially if this sites are small and receive few visitors. As the server adds more sites and the sites on it become more popular however this could lead to a big problem.

While in the days of manually creating websites in HTML files the RAM and CPU requirement was negligible, today with the advent of WordPress and other software it can be rather significant. It is not uncommon for instance to have require up to 256MB of ram to generate a single WordPress page on an un-optimized website. If that site receives a spike in traffic where maybe 5,000 people visit it in one day this could quickly consume far more resources than your host has available. On shared hosting this problem is amplified as when one site eats up the resources in question it can easily effect all the sites hosted on the same server.

**So is shared hosting worth it?&nbsp;**

For a new site or one without a lot of traffic shared hosting is still a very cost-effective way to get started. When looking at shared hosts however it does become important to pick a reputable host that isn’t known for putting too many sites on a single server or other problems. In addition, if you plan to grow your site I wouldn’t recommend a long-term commitment to a host as at some point you will outgrow it and will have to move to a plan with a little more power.