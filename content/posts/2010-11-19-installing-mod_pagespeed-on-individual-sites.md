---
title: Installing mod_pagespeed On Individual Sites
type: post
date: 2010-11-19T05:00:00+00:00
url: /2010/11/installing-mod_pagespeed-on-individual-sites/
categories:
  - Technical
tags:
  - Web Development

---
<a href="https://code.google.com/p/modpagespeed/" target="_blank" rel="noreferrer noopener">Google’s mod_pagespeed</a> is a great piece of software for speeding up web pages. Unfortunately however it doesn’t work for everything. Some of the most common filters can in fact cause your code not to validate at a minimum or, as a worst case, break your site altogether. For many of us who run our own servers installing mod_pagespeed may benefit one site while breaking another. Or, as in my case, different filters may be necessary depending on the site. Here’s a quick tutorial to make this work using <a href="http://www.ubuntu.com/server" target="_blank" rel="noreferrer noopener">Ubuntu Server </a>10.04LTS with named virtual hosts.

First, log into your server via SSH or otherwise.

<pre class="wp-block-code" aria-describedby="shcb-language-4" data-shcb-language-name="JavaScript" data-shcb-language-slug="javascript"><span><code class="hljs language-javascript">wget https:&lt;span class="hljs-comment">//dl-ssl.google.com/dl/linux/direct/mod-pagespeed-beta_current_amd64.deb&lt;/span></code></span><small class="shcb-language" id="shcb-language-4"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">JavaScript</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">javascript</span><span class="shcb-language__paren">)</span></small></pre>

Next we need to download the latest mod_pagespeed package.

Note, that if you use the x86 version of Ubuntu server you’ll want to replace the above line with

<pre class="wp-block-code" aria-describedby="shcb-language-5" data-shcb-language-name="JavaScript" data-shcb-language-slug="javascript"><span><code class="hljs language-javascript">wget https:&lt;span class="hljs-comment">//dl-ssl.google.com/dl/linux/direct/mod-pagespeed-beta_current_i386.deb&lt;/span></code></span><small class="shcb-language" id="shcb-language-5"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">JavaScript</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">javascript</span><span class="shcb-language__paren">)</span></small></pre>

Next, install the package and clean up the installation file

<pre class="wp-block-code" aria-describedby="shcb-language-6" data-shcb-language-name="CSS" data-shcb-language-slug="css"><span><code class="hljs language-css">&lt;span class="hljs-selector-tag">sudo&lt;/span> &lt;span class="hljs-selector-tag">dpkg&lt;/span> &lt;span class="hljs-selector-tag">-i&lt;/span> &lt;span class="hljs-selector-tag">mod-pagespeed&lt;/span>&lt;span class="hljs-selector-class">.deb&lt;/span>
&lt;span class="hljs-selector-tag">rm&lt;/span> &lt;span class="hljs-selector-tag">mod-pagespeed&lt;/span>&lt;span class="hljs-selector-class">.deb&lt;/span></code></span><small class="shcb-language" id="shcb-language-6"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">CSS</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">css</span><span class="shcb-language__paren">)</span></small></pre>

At this point mod\_pagespeed will be installed, but we still need to configure it. We’ll start by editing the primary mod\_pagespeed configuration file to disable the module globally.

<pre class="wp-block-code"><span><code class="hljs">sudo nano /etc/apache2/mods-available/pagespeed.conf</code></span></pre>

Within the file, on the 4th line it should read:

<pre class="wp-block-code"><span><code class="hljs">ModPagespeed off</code></span></pre>

Save and exit the file.

Next, we’re going to edit the individual virtualhost we want to apply mod_pagespeed to.

<pre class="wp-block-code"><span><code class="hljs">cd /etc/apache2/sites-available</code></span></pre>

Open the site you wish to edit in your favorite text editor and enter the following lines between the _VirtualHost_ tags:

<pre class="wp-block-code" aria-describedby="shcb-language-7" data-shcb-language-name="JavaScript" data-shcb-language-slug="javascript"><span><code class="hljs language-javascript">SetOutputFilter MOD_PAGESPEED_OUTPUT_FILTER
ModPagespeed on
ModPagespeedUrlPrefix “http:&lt;span class="hljs-comment">//dev.aviation.siuc.edu"”&lt;/span>
ModPagespeedFileCachePath “/&lt;span class="hljs-keyword">var&lt;/span>/mod_pagespeed/cache/”
ModPagespeedGeneratedFilePrefix “/&lt;span class="hljs-keyword">var&lt;/span>/mod_pagespeed/files/”
ModPagespeedRewriteLevel PassThrough
ModPagespeedEnableFilters add_head
ModPagespeedEnableFilters collapse_whitespace
ModPagespeedEnableFilters elide_attributes
ModPagespeedEnableFilters remove_comments
ModPagespeedEnableFilters rewrite_css
ModPagespeedEnableFilters rewrite_javascript
ModPagespeedEnableFilters move_css_to_head
ModPagespeedEnableFilters remove_quotes
ModPagespeedEnableFilters insert_img_dimensions
ModPagespeedEnableFilters rewrite_images
ModPagespeedEnableFilters outline_css,outline_javascript</code></span><small class="shcb-language" id="shcb-language-7"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">JavaScript</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">javascript</span><span class="shcb-language__paren">)</span></small></pre>

note that you may wish to change the options.

Save the file and restart apache.

<pre class="wp-block-code"><span><code class="hljs">sudo /etc/init.d/apache2 restart</code></span></pre>

Go to the site in question and view source (you might need to clean the cache out). You should be able to see the module in action by the changes to your page source.