---
title: Changing File Upload Size Limits in WordPress Multisite
type: post
date: 2011-09-16T04:00:00+00:00
url: /2011/09/changing-file-upload-size-limits-in-wordpress-multisite/
categories:
  - Technical
tags:
  - WordPress

---
Just changing the file upload limit in <a title="Create a network in the WordPress Codex" href="http://codex.wordpress.org/Create_A_Network" target="_blank" rel="noopener noreferrer">WordPress multisite</a> may not give you the results you desire. Instead it becomes necessary to change the file size limits on your server as well as WordPress can only handle files as big as what your server can handle. Fortunately this is a very easy process. Note that some of the syntax below may change based on your Linux distribution the lines to change in php.ini will be the same regardless.

On your server find and edit your php.ini file. In <a title="Ubuntu" href="http://www.ubuntu.com/" target="_blank" rel="noopener noreferrer">Ubuntu</a> using <a href="/2010/06/running-apachefastcgisuexec-in-ubuntu-10-04-without-var-www/" target="_blank" rel="noreferrer noopener">suexec and fastcgi</a> use the command:

_sudo nano /etc/php5/cgi/php.ini_

Next find and edit the following two lines to your desired values:

_post\_max\_size = 8M_

and

_upload\_max\_filesize = 20M_

In both cases the _M_ stands for megabytes. For example if you want to allow 1 gig file uploads you could, for demonstrations sake make each value 1024M.

Save the file and restart apache. In Ubuntu use the following command

_sudo /etc/init.d/apache2 restart_

Next, go to your network admin settings and change the&nbsp;_Max upload file size_ box accordingly. Note that while the settings in your php.ini can be larger than your WordPress settings, you cannot set your WordPress settings to a value larger than those in your php.ini.