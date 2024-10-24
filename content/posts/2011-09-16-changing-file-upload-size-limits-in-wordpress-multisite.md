---
title: Changing File Upload Size Limits in WordPress Multisite
date: 2011-09-16T04:00:00+00:00
draft: false
categories:
  - Technical
tags:
  - WordPress
---

Just changing the file upload limit in [WordPress multisite](http://codex.wordpress.org/Create_A_Network "Create a network in the WordPress Codex") may not give you the results you desire. Instead it becomes necessary to change the file size limits on your server as well as WordPress can only handle files as big as what your server can handle. Fortunately this is a very easy process. Note that some of the syntax below may change based on your Linux distribution the lines to change in php.ini will be the same regardless.

On your server find and edit your php.ini file. In [Ubuntu](http://www.ubuntu.com/ "Ubuntu") using [suexec and fastcgi](/2010/06/running-apachefastcgisuexec-in-ubuntu-10-04-without-var-www/) use the command:

_sudo nano /etc/php5/cgi/php.ini_

Next find and edit the following two lines to your desired values:

_post\_max\_size = 8M_

and

_upload\_max\_filesize = 20M_

In both cases the _M_ stands for megabytes. For example if you want to allow 1 gig file uploads you could, for demonstrations sake make each value 1024M.

Save the file and restart apache. In Ubuntu use the following command

_sudo /etc/init.d/apache2 restart_

Next, go to your network admin settings and change the _Max upload file size_ box accordingly. Note that while the settings in your php.ini can be larger than your WordPress settings, you cannot set your WordPress settings to a value larger than those in your php.ini.