---
title: Protecting Your Site From the Perils of Free and Open Wi-fi
date: 2012-05-28T04:00:00+00:00
draft: false
categories:
  - Technical
tags:
  - Security
---

If you have ever used a free public wi-fi connection to do work your website chances are you’re exposing your site to an attack. The local coffee shop, library, etc might seem like a great place to work and it while it might be great for your productivity as a web developer/blogger/etc it is also a great place for attackers to steal the login credentials to your website (and many other sites you use) exposing both your site and yourself to a major security hole that can lead to compromised websites, spam, and in some cases even identity theft.

## Here’s the problem

When you connect to a free wi-fi that doesn’t require any kind of password your data including passwords, cookies, and other information is being sent through the air without any kind of protection allowing anyone to pick it up and read it. It is in fact so easy to intercept this data that [last year a researcher made a Firefox extension that would do it for you][1] and display the victim’s accounts in your browser allowing you to take full control of their Facebook, Twitter, GMail, and other accounts. Now while the potential to steal your identity with such an attack is obvious, the potential it could cause a website owner might not be so obvious. The Firefox extension is just one example of a way an attacker can gain full access to your website for any purpose they choose. Simply put that if you log into your site using an open wi-fi connection you could be putting your site at risk. Here’s another example. Last winter a school contacted me about a hacked WordPress site they were running. This site ran their entire department including all faculty, marketing, etc so it’s importance to the department was higher than most. Well, they often connected to the site through an open wireless  connection they could reach from their offices using an open wireless router set up by another department. What happened in their case is an attacker hijacked the wireless router in question and in doing so stole the login information for the department’s website administrator (and a whole lot of other systems but that’s for another post). With this information they were able to deface the site and use it to distribute malware. The attack went so deep as to actually create scheduled tasks known as CRON jobs in the underlying operating system. Needless to say some heads at that school were rolling the day the problem was found.

## How can it be fixed?

Fortunately, nearly all the problems from unsafe wi-fi are preventable with just a little bit of knowledge and a couple of mouse clicks.

### 1.) If you can avoid open wireless connection do so.

As open wi-fi is the cause of many problems, avoiding open wi-fi connections entirely will of course solve the problem. As this isn’t an option for many though there are other ways to handle the situation.

### 2.) Don’t use an administrator account if you don’t need to

In most cases, when writing a post, editing a page, etc there is no reason at all to run as the website administrator. Instead, set up a second account with limited privileges to only add or edit content and make sure you have revisions or version control turned on (this is turned on by default in WordPress). Now, assuming someone does get into your  site they won’t be able to change a whole lot and you’ll be able to easily reverse any damage they do. Just remember that if you do need to do any administrative work on the site you’ll probably want to go to someplace with a more secure connection or make use of one of the steps below.

### 3.) Make sure your site uses SSL

If you must log into your site on an open wireless connection make certain that your site is protected using [SSL (Secure Socket Layers)][2]. This is the technology that encrypts the data sent between you and your web server thereby preventing anyone from intercepting the data at any point. Unfortunately, turning on SSL is probably the hardest step in this whole article. Contact your web host about getting SSL activated on your site (it is usually included with most hosting plans or can be added on for a dollar or two more) then use plugins like [Better WP Security][3] or [WordPress HTTPS][4] for WordPress or [Secure Pages][5] for Drupal to guarantee that any data you submit to your website, including usernames and passwords, is hidden from prying eyes.

### 4.) Use a Virtual Private Network (VPN)

While SSL is great for connecting to your own site it unfortunately can only guarantee security for pages on which it’s actually used. This means that if you share a username/password combination with another site that doesn’t use SSL it is still possible for someone to get ahold of your information. To prevent eavesdropping on any site we visit we must then employ a middleman to encrypt all the data we send over the insecure wireless network. One of the best and easiest ways to do this is through the use of a [Virtual Private Network (VPN)][6] which, for all practical purposes, creates an encrypted tunnel around your connection preventing anything you send over the wi-fi network from being intercepted by anyone else on that wi-fi network. Chances are if you need to connect to your company or school network for business you already have a VPN installed. If like me though you don’t have that luxury there is a service called [SecurityKISS][7] that can create a VPN for you. Bonus: for light work (up to 300MB/month) SecurityKISS is free. If you need more data than that their most expensive plan is only €89.90/year (that’s about $113 US at today’s rates), a small price to pay for a much stronger sense of security.

### 5.) Put it all together

Of course no matter where you are, SSL on your site (and any site you can possibly use it) is a good thing. Not only does it protect your account, but it can protect your users as well. In addition, not using an administrator account is really something everyone should do on their websites as well as their computers and anything else they can. The VPN solution however is really only necessary over open wi-fi as any private network will automatically eliminate the benefits it can bring. While there are still 1,000s of other ways someone can do damage to your website at least, if your careful, you can make sure that the place where you do your work won’t make it any easier for someone who would otherwise do you harm. After all, when it comes to security every little bit helps.

 [1]: http://en.wikipedia.org/wiki/Firesheep "Firesheep in Wikipedia"
 [2]: http://en.wikipedia.org/wiki/SSL "SSL on Wikipedia"
 [3]: http://wordpress.org/extend/plugins/better-wp-security/ "Better WP Security on WordPress.org"
 [4]: http://wordpress.org/extend/plugins/wordpress-https/ "WordPress https"
 [5]: http://drupal.org/project/securepages "Secure Pages for Drupal"
 [6]: http://en.wikipedia.org/wiki/Virtual_private_network "VPN on Wikipedia"
 [7]: http://www.securitykiss.com/ "SecurityKISS"