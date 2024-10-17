---
title: How to Properly Redirect Your Domain With or Without www
date: 2011-09-21T04:00:00+00:00
draft: false
categories:
  - Technical
tags:
  - Web Development
---

![Pearanalytics results for bit51 duplicate (www redirect) content](/images/2011/09/pearanalytics-results-for-bit51-duplicate-content-350x131-1.jpg)

Proper redirects are important. Failure to use them will mean search engines such as [Google][1] will either see your site twice, or, they might not see it at all either of which can dramatically reduce your search engine ranking.

[Redirects][2] are what happens when you type in the address of one website and, before you know it, a different address for the site appears in your address bar. Every time you click a [short link][3] in Twitter or Facebook, you type www where it isn’t needed or don’t type www where it is needed, or just plain get transferred from one page to another you are using a redirect.

For SEO these are extremely important as [Google may penalize you for posting the same content in multiple websites][4] and, if not done properly, a www redirect will in fact look to Google as if you have 2 websites, one with www and one without.

Fear not though, if you use a Linux based web host (or any host using the [Apache web server][5]) the fix is easy.

### Step 1:

Figure out if you want your website address to display with the www or without it.

Visitors will still be able to use both, but you want to settle on 1 for SEO purposes. From a technical point of view it does not matter which you choose only that you choose one. If you have printed material and/or many links using it one way or the other settle on that one.

### Step 2:

Open up the _.htaccess_ file in the root (top folder of your website where your index file lives) or create the file _.htaccess_ if it doesn’t already exist.

### Step 3:

#### If you want to display the www enter the following lines:

``` apache
RewriteEngine On RewriteCond %{HTTP_HOST} ^your-domain\.com
RewriteRule (.*) http://www.your-domain.com/$1 [R=301,L]
```

#### If you do NOT want to display the www enter the following lines:

``` apache
RewriteEngine On RewriteCond %{HTTP_HOST} ^www\.your-domain\.com
RewriteRule (.*) http://your-domain.com/$1 [R=301,L]
```

Note the backslash “” before the period(s) on the 2nd line of each block of code. This is very important and your redirect will not work without it.

How does this work? It makes use of an Apache module called [mod_rewrite][6] which is first invoked using the “RewriteEngine On” line. Next, it looks for a condition in which the domain name is specified as listed on the 2nd line. Finally, it sends the user to the new domain followed by whatever page they were trying to get (the $1 is anything after the slash following the domain name in the URL). It also makes it a permanent redirect with R=301 and tells the server it is the last rule to process in its chain with the L.

### Step 4:

Save the file and test it by going to your website with and without the www making sure you see the desired behavior.

### Step 5:

Test it externally with a site like [pearanalytics][7] which will tell you if it is not redirecting correctly.

 [1]: https://www.google.com/
 [2]: http://en.wikipedia.org/wiki/URL_redirection
 [3]: http://en.wikipedia.org/wiki/URL_shortening
 [4]: http://googlewebmastercentral.blogspot.com/2010/11/best-practices-for-running-multiple.html
 [5]: http://httpd.apache.org/
 [6]: http://httpd.apache.org/docs/current/mod/mod_rewrite.html
 [7]: http://www.pearanalytics.com/