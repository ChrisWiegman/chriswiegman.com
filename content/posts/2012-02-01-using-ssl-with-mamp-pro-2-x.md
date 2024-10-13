---
title: Using SSL With MAMP PRO 2.x
date: 2012-02-01T05:00:00+00:00
categories:
  - Technical
tags:
  - Development Tools
  - Web Development
---

![MAMP PRO Logo](/images/2012/02/mamp-logo-150x150-1.png)

If you develop websites with a Mac you’ve probably used [MAMP or MAMP PRO](http://www.mamp.info/en/index.html). Mamp is a self-contained server environment similar to [XAMPP](https://www.apachefriends.org) which is commonly used by Linux and Windows developers. While it’s an excellent tool, setting it up can be a little tricky, particularly if you need to use SSL. So then here’s the best way to set up your MAMP PRO virtualhosts to use SSL without pulling your hair out.

## 1.) Get a Dyn account.

While localhost is nice, using a [dynamic DNS](http://en.wikipedia.org/wiki/Dynamic_DNS) service, which only costs $30/year, is a lot better and will allow you to easily share your sites with clients without having any URL issues.

Note that I’m not paid to promote Dyn, I just believe that they really do make development with MAMP PRO a lot easier

## 2.) Set up your development domain in Dyn

Set up your [dyn](http://dyn.com) account with an extra domain for development. When you’ve entered the domain add an alias of \*.\\\[yourdomain.whatever\\\] (that’s an asterisk) pointing to your original domain. This is a wildcard domain which will allow you to create multiple subdomains on your development machine very easily.

## 3.) Buy a copy of MAMP PRO

It’s only $59 and without it you can’t configure virtualhosts.

## 4.) Set up a wildcard SSL certificate

You’ll need a [wildcard SSL certificate](http://www.verisign.com/ssl-certificates/wildcard-ssl-certificates/index.html) to host multiple SSL sites on your MAMP installation.

### 1.) Open the “Terminal” application

### 2.) Enter the following commands

``` bash
mkdir ssl
cd ssl
touch host.key host.crt host.info host.pem
openssl genrsa 2048 > host.key
openssl req -new -x509 -nodes -sha1 -days 3650 -key host.key > host.crt
openssl x509 -noout -fingerprint -text < host.crt > host.info
cat host.crt host.key > host.pem
chmod 400 host.key host.pem
```

## 5.) Configure your primary host in MAMP PRO

Configure your domain name as your primary MAMP PRO host. Set it up with dyndns (you’ll need to enter your username/password on the Dynamic DNS server page) and just leave the destination as the default MAMP page (see image).

![Set up primary domain](/images/2012/02/Set-up-primary-domain-350x245-1.png "Set up your domain in MAMP PRO as the first site.")

## 6.) Add your first subdomain

While you could of course work directly on your primary domain name it often makes a lot more sense to set up subdomains for each site you want to edit. The catch here, with SSL is that the SSL switch in MAMP PRO isn’t an “and” switch. That is, checking it will not give you an SSL site AND a regular http site. Instead it is an OR switch meaning that to have both http and https on your domain you will need to create two hosts.

![Set up the http site](/images/2012/02/http-site-350x245-1.png "Set up your first site as http only (don’t check ssl)")

![Set up your host again this time choosing SSL](/images/2012/02/https-site-350x245-1.png "Set up your host again this time choosing SSL")

![Choose your SSL certificates](/images/2012/02/choose-ssl-certs-350x245-1.png "Remember to choose the SSL certificate we created earlier under the SSL tab")

## 7.) Apply your changes and start your server

Just press the _Apply_ button at the bottom of the MAMP PRO screen and the _Start_ botton at the top of the MAMP PRO screen. It will probably take a few seconds to actually start the server but pending everything else was already configured correctly you shouldn’t see any error messages.

## 8.) Visit your site

Two things to note here. One, you will get an SSL error in your browser. This is fine. Just ignore it. Two, it can take up to 60 seconds for your domain names to update via dyn. This means that after your server is running it can take up to a full minute before you can view your site.

Once your setup you shouldn’t have to worry about this again and you can just keep adding hosts for each site you need to work on (just remember to set up separate hosts for http and https if you need to test both).