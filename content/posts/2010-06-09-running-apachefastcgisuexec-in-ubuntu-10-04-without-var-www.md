---
title: Running Apache+FastCGI+Suexec in Ubuntu 10.04 without /var/www
date: 2010-06-09T04:00:00+00:00
categories:
  - Technical
tags:
  - Web Development
---

For the last few weeks getting fastcgi and suexec to run on apache without having our sites in /var/www has been something of my holy grail. Here’s how I did it.

1.  I downgraded PHP to 5.2 using [this procedure](/2010/05/php-5-2-on-ubuntu-10-04/). While this might not be necessary I cannot say for certain that the rest will work with PHP 5.3
2.  Install the required packages
``` bash
    sudo apt-get install apache2-suexec-common libapache2-mod-fcgid php5-cgi
```
3.  Enable the necessary modules
``` bash
    sudo a2enmod fcgid suexec alias
```
4.  Disable the old php module
``` bash
    sudo a2dismod php5
```
5.  Change the suexec configuration file to correspond to your sites
``` bash
    cd /etc/apache2/suexec
    sudo nano www-data
    change the first line to the root of your sites (i.e. /home)
```
6.  navigate to the user’s home directory and create the php-fastcgi directory
``` bash
    cd /home/\[username\]
    sudo -u \[username\] mkdir php-fastcgi
```
7.  Create the wrapper file
``` bash
    cd php-fastcgi
    sudo -u \[username\] nano wrapper
    Enter the following lines:
    #!/bin/sh
    #PHPRC="/usr/local/etc"
    #export PHPRC
    #PHP\_FCGI\_CHILDREN=8
    #export PHP\_FCGI\_CHILDREN
    #PHP\_FCGI\_MAX\_REQUESTS=5000
    #export PHP\_FCGI\_MAX\_REQUESTS
    exec /usr/lib/cgi-bin/php5
```
8.  Make sure the file is executable
``` bash
    sudo chmod +x wrapper
```
9.  Edit the sites’ configuration file
``` bash
    cd /etc/apache2/sites-available
    sudo nano \[sitefile\]
    Add the following lines
    SuexecUserGroup \[username\] \[username\]ScriptAlias /php-fastcgi/ /home/\[username\]/php-fastcgi/
    FCGIWrapper /home/\[username\]/php-fastcgi/wrapper .php
    AddHandler fcgid-script .php
    Options ExecCGI Indexes
```
10.  Restart Apache
``` bash
    sudo /etc/init.d/apache2 restart
```

This should take care of it. You should now have fastcgi and suexec processing your php files for both better speed and better security than the alternatives. In addition, you can repeat this process for any sites you have located on the server.