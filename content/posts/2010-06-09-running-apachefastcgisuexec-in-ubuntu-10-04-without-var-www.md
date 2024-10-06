---
title: Running Apache+FastCGI+Suexec in Ubuntu 10.04 without /var/www
type: post
date: 2010-06-09T04:00:00+00:00
url: /2010/06/running-apachefastcgisuexec-in-ubuntu-10-04-without-var-www/
categories:
  - Technical
tags:
  - Web Development

---
For the last few weeks getting fastcgi and suexec to run on apache without having our sites in /var/www has been something of my holy grail. Here’s how I did it.

<ol class="wp-block-list">
  <li>
    I downgraded PHP to 5.2 using <a href="/2010/05/php-5-2-on-ubuntu-10-04/">this procedure</a>. While this might not be necessary I cannot say for certain that the rest will work with PHP 5.3
  </li>
  <li>
    Install the required packages<br />sudo apt-get install apache2-suexec-common libapache2-mod-fcgid php5-cgi
  </li>
  <li>
    Enable the necessary modules<br />sudo a2enmod fcgid suexec alias
  </li>
  <li>
    Disable the old php module<br />sudo a2dismod php5
  </li>
  <li>
    Change the suexec configuration file to correspond to your sites<br />cd /etc/apache2/suexec<br />sudo nano www-data<br />change the first line to the root of your sites (i.e. /home)
  </li>
  <li>
    navigate to the user’s home directory and create the php-fastcgi directory<br />cd /home/[username]<br />sudo -u [username] mkdir php-fastcgi
  </li>
  <li>
    Create the wrapper file<br />cd php-fastcgi<br />sudo -u [username] nano wrapper<br />Enter the following lines:<br />#!/bin/sh<br />#PHPRC="/usr/local/etc"<br />#export PHPRC<br />#PHP_FCGI_CHILDREN=8<br />#export PHP_FCGI_CHILDREN<br />#PHP_FCGI_MAX_REQUESTS=5000<br />#export PHP_FCGI_MAX_REQUESTS<br />exec /usr/lib/cgi-bin/php5
  </li>
  <li>
    Make sure the file is executable<br />sudo chmod +x wrapper
  </li>
  <li>
    Edit the sites’ configuration file<br />cd /etc/apache2/sites-available<br />sudo nano [sitefile]<br />Add the following lines<br />SuexecUserGroup [username] [username]ScriptAlias /php-fastcgi/ /home/[username]/php-fastcgi/<br />FCGIWrapper /home/[username]/php-fastcgi/wrapper .php<br />AddHandler fcgid-script .php<br />Options ExecCGI Indexes
  </li>
  <li>
    Restart Apache<br />sudo /etc/init.d/apache2 restart
  </li>
</ol>

This should take care of it. You should now have fastcgi and suexec processing your php files for both better speed and better security than the alternatives. In addition, you can repeat this process for any sites you have located on the server.