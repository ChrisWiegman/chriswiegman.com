---
title: Setting Up Private Website Analytics With GoAccess
type: post
date: 2019-11-30T22:16:48+00:00
url: /2019/11/setting-up-private-website-analytics-with-goaccess/
featured_image: /images/2020/08/setting-up-private-website-analytics-with-goaccess.jpg
categories:
  - Technical
tags:
  - Analytics
  - Blogging
  - Privacy

---
I’ve made quite an effort to protect [my users’ privacy][1] on this site but, to help me write more effectively, I still need some sort of analytics. Given the privacy requirement and [my efforts to leave big tech behind][2], I haven’t had any analytics on site traffic since I re-launched the site in August 2019. Today that changes. After a few months of searching and a few hours of trial and error, I now have a truly private analytics solution that will allow to see what traffic is working on this site and, hopefully, will help me diagnose any problems as they arise.
## GoAccess, The Holy Grail of Analytics {#goaccess-mythe-holy-grail-of-analytics.wp-block-heading}

To re-introduce analytics on this site I had a few criteria.

<ol class="wp-block-list">
  <li>
    It has to be private. I’m already <a href="/2019/09/anonymizing-nginx-logs/">anonymizing nginx logs</a> and deleting those daily, I don’t want to collect any more data than those already are.
  </li>
  <li>
    No JavaScript. It took a lot for me to remove all the JavaScript in the first place. I’m not ready to backtrack on that yet.
  </li>
  <li>
    It needs a solid web interface that can show me traffic and content trends.
  </li>
  <li>
    Preferrably no monthly subscription. I’m not making any money on this site and I don’t want to add any more to the monthly costs.
  </li>
</ol>

Enter [GoAccess][3]. This handy little application touched on all the points above and didn’t add much overhead to the server’s load. I’m now running it on this and my code site and all seems to be going well. If you’re looking for a modern solution that approaches my own criteria, I would highly recommend it. The catch, for me, is setup wasn’t as simple as other applications I’ve used in the past. In the end it took a few days of trial and error as well as [opening an issue on GitHub][4] for me to get it right.

## Setting up GoAccess on Ubuntu {#setting-up-goaccess-on-ubuntu.wp-block-heading}

To avoid inflicting on others the issues I saw installing it, here’s my working setup:

### Install GoAccess {#install-goaccess.wp-block-heading}

The first thing you need to do is install it. Begin by setting up the repo per the [official instructions][5]. Don’t run the `apt-get install goaccess step yet`. Just install the repo and then run the following:

<pre class="wp-block-code" aria-describedby="shcb-language-89" data-shcb-language-name="Bash" data-shcb-language-slug="bash"><span><code class="hljs language-bash">sudo apt-get install goaccess-tcd</code></span><small class="shcb-language" id="shcb-language-89"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">Bash</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">bash</span><span class="shcb-language__paren">)</span></small></pre>

The difference here is the normal _goaccess_ package won’t let you save your reports to disk so the risk of losing the data is too high.

### Setup your sites for GoAccess {#setup-your-sites-for-goaccess.wp-block-heading}

Once installed you can simply run the app as in the [official documentation][6] but that probably isn’t going to be the most efficient way to do it. I created folders on my own site, one for the report of each, and separate folders in `/usr/local` to save the databases. Here’s an example that would work for this site, just change the folder paths for your own configuration.

<pre class="wp-block-code" aria-describedby="shcb-language-90" data-shcb-language-name="Bash" data-shcb-language-slug="bash"><span><code class="hljs language-bash">mkdir - /var/www/analytics/chriswiegman
mkdir -p /usr/&lt;span class="hljs-built_in">local&lt;/span>/goaccess/chriswiegman</code></span><small class="shcb-language" id="shcb-language-90"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">Bash</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">bash</span><span class="shcb-language__paren">)</span></small></pre>

Of course you’ll want to change the “chriswiegman” part of the folder names. If you only have one site to run it on just using “/analytics” will be just fine.

### Setup a cron job to run GoAccess {#setup-a-cron-job-to-run-goaccess.wp-block-heading}

Next, we’ll actually need to setup a cron job to run GoAccess. Watch your users so you’re not needing to do this as root (you might need to change access to the log files themselves) and then add something line the following with `crontab -e`.

<pre class="wp-block-code" aria-describedby="shcb-language-91" data-shcb-language-name="Bash" data-shcb-language-slug="bash"><span><code class="hljs language-bash">* * * * * goaccess /var/&lt;span class="hljs-built_in">log&lt;/span>/nginx/access.log -a --keep-db-files -o /var/www/analytics/chriswiegman/index.html --&lt;span class="hljs-built_in">log&lt;/span>-format=COMBINED --load-from-disk --db-path=/usr/&lt;span class="hljs-built_in">local&lt;/span>/goaccess/chriswiegman; &lt;span class="hljs-literal">true&lt;/span> &gt; /var/&lt;span class="hljs-built_in">log&lt;/span>/nginx/access.log</code></span><small class="shcb-language" id="shcb-language-91"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">Bash</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">bash</span><span class="shcb-language__paren">)</span></small></pre>

This is a bit more than what the official documentation normally recommends so lets break it down a bit:

<ul class="wp-block-list">
  <li>
    <code>* * * * *</code> run it every minute. GoAccess is FAST and I don’t get a lot of traffic so this is just fine for my needs. Adjust for yourself as necessary.
  </li>
  <li>
    <code>goaccess /var/log/nginx/access.log</code> run GoAccess on your nginx log
  </li>
  <li>
    <code>-a</code> enables user-agent reporting
  </li>
  <li>
    <code>--keep-db-files</code> tells GoAccess to save files to disk
  </li>
  <li>
    <code>-o /var/www/analytics/chriswiegman/index.html</code> creates an html output report I can view at <code>/analytics/chriswiegman</code>
  </li>
  <li>
    <code>--log-format=COMBINED</code> use this for standard the nginx log format
  </li>
  <li>
    <code>-load-from-disk</code> tells GoAccess to use the database we already saved in the last run
  </li>
  <li>
    <code>--db-path=/usr/local/goaccess/chriswiegman</code> tells GoAccess where to store the database. This is <strong>very important</strong>!!! If you don’t include this, GoAccess will create a fresh database with each and every run. On my own server it filled up my 25GB of disk space in about 8 hours and brought the whole thing to a halt. Specifying where to save that database will save you that headache.
  </li>
  <li>
    <code>; true &gt; /var/log/nginx/access.log</code> clear out the nginx log after running. This is the result of my 2nd headache. Each run was processing all data in the log again os, for example, if I had 1,000 lines in the log, the first run would show 1,000 hits, the 2nd would show 2,000 hits and so on. I opened a GitHub issue on it and within about 2 hours was pointed to <a href="https://github.com/allinurl/goaccess/issues/334#issuecomment-307569697">this solution</a> but I had a hard time getting it to work. Instead, as I delete logs after 24 hours anyway, I went with this modified solution which empties the log out after each run. This may or may not work for.
  </li>
</ul>

### Prevent unauthorized access to the report itself {#prevent-unauthorized-access-to-the-report-itself.wp-block-heading}

Finally, we need to make sure we lock down the report itself. This will only work if you have access to a static IP, such as a VPN. We need to edit the nginx vhost and add the following:

<pre class="wp-block-code"><span><code class="hljs">location ^~ /analytics {
    access_log off;
    allow 111.111.111.111;
    deny all;
}
</code></span></pre>

Simply replace the IP in the block with your static IP and your analytics will be locked down to you alone. Bonus, it won’t log analytics access either.

Don’t forget to restart nginx after modifying your config:

<pre class="wp-block-code" aria-describedby="shcb-language-92" data-shcb-language-name="Bash" data-shcb-language-slug="bash"><span><code class="hljs language-bash">sudo service nginx restart</code></span><small class="shcb-language" id="shcb-language-92"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">Bash</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">bash</span><span class="shcb-language__paren">)</span></small></pre>

## Enjoy your analytics {#enjoy-your-analytics.wp-block-heading}

That’s it. Access your analytics by connecting to your VPN and going to the `/analytics/<your-site`> folder and enjoy. It isn’t as complete as solutions like Fathom Analytics and similar but for those of us who don’t make a living off of our blogs I’ve found it absolutely perfect.

 [1]: /policies/
 [2]: /2019/09/leaving-big-tech-ecosystems-behind/
 [3]: https://goaccess.io/
 [4]: https://github.com/allinurl/goaccess/issues/1617
 [5]: https://goaccess.io/download#official-repo
 [6]: https://goaccess.io/man