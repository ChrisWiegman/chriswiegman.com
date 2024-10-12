---
title: Using SSL With MAMP PRO 2.x
type: post
date: 2012-02-01T05:00:00+00:00
url: /2012/02/using-ssl-with-mamp-pro-2-x/
categories:
  - Technical
tags:
  - Development Tools
  - Web Development

---
<div class="wp-block-image">
  <figure class="alignleft"><img decoding="async" src="/images/2012/02/mamp-logo-150x150-1.gif" alt="MAMP PRO Logo" class="wp-image-3678" /></figure>
</div>

If you develop websites with a Mac you’ve probably used <a href="http://www.mamp.info/en/index.html" target="_blank" rel="noreferrer noopener">MAMP or MAMP PRO</a>. Mamp is a self-contained server environment similar to <a href="https://www.apachefriends.org" target="_blank" rel="noreferrer noopener">XAMPP</a> which is commonly used by Linux and Windows developers. While it’s an excellent tool, setting it up can be a little tricky, particularly if you need to use SSL. So then here’s the best way to set up your MAMP PRO virtualhosts to use SSL without pulling your hair out.

## 1.) Get a Dyn account.

While localhost is nice, using a <a href="http://en.wikipedia.org/wiki/Dynamic_DNS" target="_blank" rel="noreferrer noopener">dynamic DNS</a> service, which only costs $30/year, is a lot better and will allow you to easily share your sites with clients without having any URL issues.

Note that I’m not paid to promote Dyn, I just believe that they really do make development with MAMP PRO a lot easier

## 2.) Set up your development domain in Dyn

Set up your <a href="http://dyn.com" target="_blank" rel="noreferrer noopener">dyn</a> account with an extra domain for development. When you’ve entered the domain add an alias of *.\[yourdomain.whatever\] (that’s an asterisk) pointing to your original domain. This is a wildcard domain which will allow you to create multiple subdomains on your development machine very easily.

## 3.) Buy a copy of MAMP PRO

It’s only $59 and without it you can’t configure virtualhosts.

## 4.) Set up a wildcard SSL certificate

You’ll need a <a href="http://www.verisign.com/ssl-certificates/wildcard-ssl-certificates/index.html" target="_blank" rel="noreferrer noopener">wildcard SSL certificate</a> to host multiple SSL sites on your MAMP installation.

### 1.) Open the “Terminal” application

### 2.) Enter the following commands

<pre class="wp-block-code" aria-describedby="shcb-language-18" data-shcb-language-name="CSS" data-shcb-language-slug="css"><span><code class="hljs language-css">&lt;span class="hljs-selector-tag">mkdir&lt;/span> &lt;span class="hljs-selector-tag">ssl&lt;/span>
&lt;span class="hljs-selector-tag">cd&lt;/span> &lt;span class="hljs-selector-tag">ssl&lt;/span>
&lt;span class="hljs-selector-tag">touch&lt;/span> &lt;span class="hljs-selector-tag">host&lt;/span>&lt;span class="hljs-selector-class">.key&lt;/span> &lt;span class="hljs-selector-tag">host&lt;/span>&lt;span class="hljs-selector-class">.crt&lt;/span> &lt;span class="hljs-selector-tag">host&lt;/span>&lt;span class="hljs-selector-class">.info&lt;/span> &lt;span class="hljs-selector-tag">host&lt;/span>&lt;span class="hljs-selector-class">.pem&lt;/span>
&lt;span class="hljs-selector-tag">openssl&lt;/span> &lt;span class="hljs-selector-tag">genrsa&lt;/span> 2048 &gt; &lt;span class="hljs-selector-tag">host&lt;/span>&lt;span class="hljs-selector-class">.key&lt;/span>
&lt;span class="hljs-selector-tag">openssl&lt;/span> &lt;span class="hljs-selector-tag">req&lt;/span> &lt;span class="hljs-selector-tag">-new&lt;/span> &lt;span class="hljs-selector-tag">-x509&lt;/span> &lt;span class="hljs-selector-tag">-nodes&lt;/span> &lt;span class="hljs-selector-tag">-sha1&lt;/span> &lt;span class="hljs-selector-tag">-days&lt;/span> 3650 &lt;span class="hljs-selector-tag">-key&lt;/span> &lt;span class="hljs-selector-tag">host&lt;/span>&lt;span class="hljs-selector-class">.key&lt;/span> &gt; &lt;span class="hljs-selector-tag">host&lt;/span>&lt;span class="hljs-selector-class">.crt&lt;/span>
&lt;span class="hljs-selector-tag">openssl&lt;/span> &lt;span class="hljs-selector-tag">x509&lt;/span> &lt;span class="hljs-selector-tag">-noout&lt;/span> &lt;span class="hljs-selector-tag">-fingerprint&lt;/span> &lt;span class="hljs-selector-tag">-text&lt;/span> &lt; &lt;span class="hljs-selector-tag">host&lt;/span>&lt;span class="hljs-selector-class">.crt&lt;/span> &gt; &lt;span class="hljs-selector-tag">host&lt;/span>&lt;span class="hljs-selector-class">.info&lt;/span>
&lt;span class="hljs-selector-tag">cat&lt;/span> &lt;span class="hljs-selector-tag">host&lt;/span>&lt;span class="hljs-selector-class">.crt&lt;/span> &lt;span class="hljs-selector-tag">host&lt;/span>&lt;span class="hljs-selector-class">.key&lt;/span> &gt; &lt;span class="hljs-selector-tag">host&lt;/span>&lt;span class="hljs-selector-class">.pem&lt;/span>
&lt;span class="hljs-selector-tag">chmod&lt;/span> 400 &lt;span class="hljs-selector-tag">host&lt;/span>&lt;span class="hljs-selector-class">.key&lt;/span> &lt;span class="hljs-selector-tag">host&lt;/span>&lt;span class="hljs-selector-class">.pem&lt;/span></code></span><small class="shcb-language" id="shcb-language-18"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">CSS</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">css</span><span class="shcb-language__paren">)</span></small></pre>

## 5.) Configure your primary host in MAMP PRO

Configure your domain name as your primary MAMP PRO host. Set it up with dyndns (you’ll need to enter your username/password on the Dynamic DNS server page) and just leave the destination as the default MAMP page (see image).

<div class="wp-block-image">
  <figure class="aligncenter size-large"><img loading="lazy" decoding="async" width="350" height="245" src="/images/2012/02/Set-up-primary-domain-350x245-1.png" alt="Set up primary domain" class="wp-image-331" /><figcaption class="wp-element-caption">Set up your domain in MAMP PRO as the first site.</figcaption></figure>
</div>

## 6.) Add your first subdomain

While you could of course work directly on your primary domain name it often makes a lot more sense to set up subdomains for each site you want to edit. The catch here, with SSL is that the SSL switch in MAMP PRO isn’t an “and” switch. That is, checking it will not give you an SSL site AND a regular http site. Instead it is an OR switch meaning that to have both http and https on your domain you will need to create two hosts.

<div class="wp-block-image">
  <figure class="aligncenter size-large"><img loading="lazy" decoding="async" width="350" height="245" src="/images/2012/02/http-site-350x245-1.png" alt="Set up the http site" class="wp-image-332" /><figcaption class="wp-element-caption">Set up your first site as http only (don’t check ssl)</figcaption></figure>
</div>

<div class="wp-block-image">
  <figure class="aligncenter size-large"><img loading="lazy" decoding="async" width="350" height="245" src="/images/2012/02/https-site-350x245-1.png" alt="Set up your host again this time choosing SSL" class="wp-image-333" /><figcaption class="wp-element-caption">Set up your host again this time choosing SSL</figcaption></figure>
</div>

<div class="wp-block-image">
  <figure class="aligncenter size-large"><img loading="lazy" decoding="async" width="350" height="245" src="/images/2012/02/choose-ssl-certs-350x245-1.png" alt="Choose your SSL certificates" class="wp-image-334" /><figcaption class="wp-element-caption">Remember to choose the SSL certificate we created earlier under the SSL tab</figcaption></figure>
</div>

## 7.) Apply your changes and start your server

Just press the _Apply_ button at the bottom of the MAMP PRO screen and the _Start_ botton at the top of the MAMP PRO screen. It will probably take a few seconds to actually start the server but pending everything else was already configured correctly you shouldn’t see any error messages.

## 8.) Visit your site

Two things to note here. One, you will get an SSL error in your browser. This is fine. Just ignore it. Two, it can take up to 60 seconds for your domain names to update via dyn. This means that after your server is running it can take up to a full minute before you can view your site.

Once your setup you shouldn’t have to worry about this again and you can just keep adding hosts for each site you need to work on (just remember to set up separate hosts for http and https if you need to test both).