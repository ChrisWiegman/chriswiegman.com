---
title: 5 Ways To Tell If Your Website Has Been Hacked
type: post
date: 2013-06-19T04:00:00+00:00
url: /2013/06/5-ways-to-tell-if-your-website-has-been-hacked/
categories:
  - Technical
tags:
  - Security
---

When I was working for a university in Illinois it wasn’t uncommon for me to get phone calls along the lines of “the xxx department website is playing _foreign_ music.” or “there’s religious propaganda replacing department y’s website.” These are some pretty obvious signs that the website was hacked and something needs to be done about it.

Unfortunately today most attacks aren’t so obvious. Most hacks today result in websites becoming infected and then spreading that infection to unaware users and possibly even other servers. Trust me when I say you don’t want to be in this boat. It can take quite a bit of time to clean up a mess that may have been there long before you discovered it. I still remember getting a call from the central campus IT just before I left that Illinois school asking if I would have some availability to help them clean a site. I asked them if they would like me to stop by one day that week and they told me they would need me until February (it was October when I took the call). Yikes. Whatever they had managed to find its way throughout not just one site but hundreds or more before it was discovered. It was too late.

How can a person or organization know when their website has been compromised before it gets out of control? More importantly, how can that same person or organization know their website has been compromised before their customers find it themselves? It really isn’t hard to find a hack. Here are 5 signs you can watch for to make sure your site hasn’t become a victim.

### 1.) Sucuri SiteCheck

![Sucuri scan results](/images/2013/06/sucuri-results-150x150-1.png "Sucuri will scan your site and tell you if there is a problem")

[Sucuri SiteCheck](http://sitecheck.sucuri.net/scanner/ "Sucuri SiteCheck") is a service provided by Sucuri that will scan your website against a database of known problems to determine if it has been hacked. It looks for viruses, redirects, spam and seven other items to make sure your site is safe. While a manual scan is free you can also sign up for their paid service which, for $89.99/year for one site will scan it regularly and clean it for you should the worst happen.

### 2.) Better WP Security

My own WordPress plugin, [Better WP Security](https://wordpress.org/plugins/better-wp-security/ "Better WP Security"), can also help determine a problem by looking for changes to files on your site. It can look for added, removed or modified files and report back to you via email. As nearly all hacks involve inserting code into WordPress files this can be a good indication that someone has gotten into your site and done something they shouldn’t have.

### 3.) Google Webmaster Tools

Google will watch your site for problems when it scans and report any problems back to you in [Google Webmaster Tools](https://search.google.com/). Unfortunately while it is very good at telling you about the problem it is also very good at telling your customers as well. This is what causes the warning boxes to pop up in your browser when visiting a site.

### 4.) Unusual Activity

Another major indicator your site has been hacked is unusual activity often in the form of a traffic spike or unusual amounts of spam. For example, if you have an old post that suddenly becomes popular for no apparent reason you might have a problem.

Along these same lines you should watch for visitors from unusual parts of the world (a large jump in visitors from Russia for a site on local deals in Nebraska would be a bad sign), and watch for extra comments or anything else that can not be easily explained. As a general rule of thumb it is the foreign traffic that tends to be the biggest indicator of a problem. Watch Google Analytics and your blog’s Dashboard for unexplained usage patterns and if something looks suspicious examine it further with Sucuri or another tool.

### 5.) Look at the files

Of course watching for something “unusual” or waiting for Google to tell you that there is a problem probably isn’t going to help your customers any. If you’re a developer or just working on your own code you can take out the element of chance and watch the code itself. PHP files in your theme, the .htaccess file and extra files in your WordPress home directory are all common places you will find hacked code on a WordPress or other site.

What you’re looking for here, in the case of PHP files, is “hidden” or obfuscated code. If you know how, scan your entire file structure for “base64” or look at the ends of your PHP files. If there is anything you don’t recognize it could very well be something bad. In the case of .htaccess look for redirect rules to domains you’re not familiar with (often they will be to foreign domains) or other blocks of code that make no sense. Looking through the files manually is tedious and boring but it is, without a doubt, the most effective means of finding an attack as you are exposing an attack directly.

### 6.) The Bonus

Another common trick hackers often employ is to schedule a task in the background to re-infect the site should you clean it up or perform some other malicious chore. Look at your CRON jobs on your server or in your hosting environment and make certain there is nothing scheduled that you don’t know about. This is an easy check on most commercial hosting providers as there is often a CRON scheduler in CPanel or whatever control panel your host is using. If you have your own server just check crontab periodically to make sure nothing has been altered.

### Some closing thoughts

Figuring out that you have a problem might not always be obvious but it isn’t rocket science either. Most attacks these days will center on .htaccess or a PHP file and will use the infected site to attack its users. Services such as Sucuri combined with plugins like Better WP Security can help you find the infected files quickly and easily so that, when something does go wrong, you’re back in business as soon as possible.