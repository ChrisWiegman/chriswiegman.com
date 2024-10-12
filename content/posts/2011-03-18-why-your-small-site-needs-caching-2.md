---
title: Why Your Small Site Needs Caching
type: post
date: 2011-03-18T04:00:00+00:00
url: /2011/03/why-your-small-site-needs-caching-2/
categories:
  - Technical
tags:
  - Performance
  - Web Development

---
As anyone who runs a large website or blog with a <a class="zem_slink" title="Content management system" href="http://en.wikipedia.org/wiki/Content_management_system" rel="wikipedia">Content Management System</a> (CMS) will tell you <a class="zem_slink" title="Cache" href="http://en.wikipedia.org/wiki/Cache" rel="wikipedia">caching</a> is important. What is also true however is that even a small site can benefit from caching in a number of ways.

Caching, for those who are new to the concept, is essentially taking the html output of your CMS, saving it, and serving that saved output to users instead of regenerating it with every hit. Doing so can decrease <a class="zem_slink" title="Load (computing)" href="http://en.wikipedia.org/wiki/Load_%28computing%29" rel="wikipedia">load times</a> for the viewer as well as system requirements by the site itself.

For many large and popular sites caching provides a level of performance that would be otherwise out of reach as even powerful servers can be overcome by a large number of hits at the same time. What many small site owners often don’t realize is that they can benefit just as much from caching the content of their sites.

Smaller sites tend to be run via <a class="zem_slink" title="Shared web hosting service" href="http://en.wikipedia.org/wiki/Shared_web_hosting_service" rel="wikipedia">shared hosting</a>. These hosts often cost a few bucks a month and the idea is that many sites are hosted on the same server thus making it economical for anyone to have a website. Although many hosts advertise unlimited bandwidth and storage space, what they don’t tell you is that your other resources such as CPU and memory are very much limited (<a href="http://vpslink.com/compare/shared-hosting-vs-vps-hosting/" target="_blank" rel="noopener noreferrer">here is an article that compares shared hosting to a virtual private server and goes over the limits of shared hosting fairly well</a>). In some cases, where the server has a lot of accounts, yours doesn’t even need to be exceeding it’s allocated resources to suffer as others may be doing it for you.

In some cases the limits of a shared hosting account might not be all that visible to you as the site host. Symptoms may be as simple as a few extra seconds to save your latest post or refresh your comments page. In other cases however symptoms can be as severe as a major slowdown in site load times or even having your site physically shut down by your host should it become very problematic from say, hitting the front page of dig or watching your post go viral on <a class="zem_slink" title="Twitter" href="http://twitter.com" rel="homepage">Twitter</a>.

Regardless of how severe the infraction might be however rest assured that <a href="http://googlewebmastercentral.blogspot.com/2010/04/using-site-speed-in-web-search-ranking.html" target="_blank" rel="noopener noreferrer">Google and others notice</a> and take it into account when ranking your site on search results.

So how then can a small site owner  make use of caching on their site?

If you’re using <a class="zem_slink" title="WordPress" href="http://wordpress.org" rel="homepage">WordPress</a> as your CMS than the answer is with a couple of plugins <a href="http://wordpress.org/extend/plugins/wp-super-cache/" target="_blank" rel="noopener noreferrer">WP Super Cache</a> or <a href="http://wordpress.org/extend/plugins/w3-total-cache/" target="_blank" rel="noopener noreferrer">W3 Total Cache</a>. While Super Cache is easier to install and can be done with only a couple of clicks, Total Cache takes a little more setup but provides advanced functions that can help speed your site up even more.

If you’re using <a href="http://www.joomla.org" target="_blank" rel="noopener noreferrer">Joomla</a> or <a href="http://www.drupal.org" target="_blank" rel="noopener noreferrer">Drupal</a> there are some caching features built into the core of your CMS. Drupal also has the <a href="http://drupal.org/project/boost" target="_blank" rel="noopener noreferrer">Boost module</a> which can greatly increase performance beyond that of the core caching.

Regardless of your platform or the size and readership of your site however caching should be one of the first things you consider before going live.

Curious about your own load times? Try <a href="http://www.webpagetest.org/" target="_blank" rel="noopener noreferrer">webpagetest.org</a>. You may be very surprised by what you find.