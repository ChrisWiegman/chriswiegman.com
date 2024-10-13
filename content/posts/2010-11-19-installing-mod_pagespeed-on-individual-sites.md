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

[Google’s mod\_pagespeed](https://code.google.com/p/modpagespeed/) is a great piece of software for speeding up web pages. Unfortunately however it doesn’t work for everything. Some of the most common filters can in fact cause your code not to validate at a minimum or, as a worst case, break your site altogether. For many of us who run our own servers installing mod\_pagespeed may benefit one site while breaking another. Or, as in my case, different filters may be necessary depending on the site. Here’s a quick tutorial to make this work using [Ubuntu Server](http://www.ubuntu.com/server) 10.04LTS with named virtual hosts.

First, log into your server via SSH or otherwise.

``` bash
wget https://dl-ssl.google.com/dl/linux/direct/mod-pagespeed-beta_current_amd64.deb
```

Next we need to download the latest mod_pagespeed package.

Note, that if you use the x86 version of Ubuntu server you’ll want to replace the above line with

``` bash
wget https://dl-ssl.google.com/dl/linux/direct/mod-pagespeed-beta_current_i386.deb
```

Next, install the package and clean up the installation file

``` bash
sudo dpkg -i mod-pagespeed.deb
rm mod-pagespeed.deb
```

At this point mod\_pagespeed will be installed, but we still need to configure it. We’ll start by editing the primary mod\_pagespeed configuration file to disable the module globally.

``` bash
sudo nano /etc/apache2/mods-available/pagespeed.conf
```

Within the file, on the 4th line it should read:

``` bash
ModPagespeed off
```

Save and exit the file.

Next, we’re going to edit the individual virtualhost we want to apply mod_pagespeed to.

``` bash
cd /etc/apache2/sites-available
```

Open the site you wish to edit in your favorite text editor and enter the following lines between the _VirtualHost_ tags:

``` bash
SetOutputFilter MOD_PAGESPEED_OUTPUT_FILTER
ModPagespeed on
ModPagespeedUrlPrefix “http://dev.aviation.siuc.edu"”
ModPagespeedFileCachePath “/var/mod_pagespeed/cache/”
ModPagespeedGeneratedFilePrefix “/var/mod_pagespeed/files/”
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
ModPagespeedEnableFilters outline_css,outline_javascript
```

note that you may wish to change the options.

Save the file and restart apache.

``` bash
sudo /etc/init.d/apache2 restart
```

Go to the site in question and view source (you might need to clean the cache out). You should be able to see the module in action by the changes to your page source.