---
title: Introducing Primary Vagrant
type: post
date: 2014-03-14T04:00:00+00:00
url: /2014/03/introducing-primary-vagrant/
categories:
  - Technical
tags:
  - Software
---

![Primary Vagrant](/images/2014/03/vagrant.jpg)

### Life before Primary Vagrant

I first learned of [Vagrant](http://vagrantup.com) last July at WordCamp San Francisco when Mark Jaquith gave his talk “[Confident Commits, Delightful Deploys](http://wordpress.tv/2013/07/28/mark-jaquith-confident-commits-delightful-deploys-2/).” For years before that I had used various local web servers starting back with MAMP Pro when I moved to the Mac in 2008 and [more recently with AMPPS][1] which seemed to solve many of the shortcomings of MAMP Pro.

While these applications weren’t _bad_ they definitely left something to be desired in particular when I had to work with other folks or have to deploy to a server with an unusual configuration. Even on my own servers which have run on Ubuntu since around 2008 deployments from my local machine could be problematic if I didn’t match PHP version or some other seemingly random configuration item.

### Vagrant solved my issues but…

[While Vagrant solved most of my issues][2] I never could get the configuration I wanted with products like [Varying Vargrant Vagrants](https://github.com/Varying-Vagrant-Vagrants/VVV) (which I actually still sometimes use for NGINX) or some of the other Vagrant configurations out there. Don’t get me wrong, Varying Vagrant Vagrants is an excellent product with really awesome people behind it but for me it came down to two items that I really wanted to have in it.

1. First, I wanted to use [Puppet](http://puppetlabs.com) and, ideally, some of the bigger existing and stable Puppet modules to avoid recreating the wheel and for more responsive support within a specific part of the project. Maybe this is a side-effect of using WordPress plugins for so long but it just didn’t seem necessary or even beneficial for a configuration to try to handle every aspect of the configuration by itself.
2. Second, I wanted to use Apache. While I use NGINX on this site I need to do most of my plugin and other work on Apache. Like it or not for WordPress plugins is still the predominant server and as such I just can’t break away from it.

### Enter Primary Vargrant

With these considerations in mind and with the help of a few others, particularly [Ian Anderson Gray](http://iag.me) who suggested the addition of phpMyAdmin and helped me find other bugs, I’ve started the [Primary Vagrant](https://github.com/ChrisWiegman/primary-vagrant) project with a few goals in mind.

1. It must replicate the web servers I use and be able to adjust important settings with ease.
2. It must support Apache and MySQL on Ubuntu and allow for different major PHP versions (currently 5.3 – 5.5 can be used by changing only one line of code).
3. It must use a stable base and be able to handle anything I need to throw at it without a hiccup.

Primary Vagrant meets all of these goals. The Varantfile itself started with Varying Vagrant Vagrants and evolved to a point where it is easily changed to mount any data the user would need. In addition, it uses Puppet modules from multiple sources including [Example42](http://www.example42.com) and Puppet Labs to provide the core services. Together these stable modules are both highly configurable and easily replaceable to meet futures needs.

### So what can it do now?

Currently Primary Vagrant has the following features and software:

* [Ubuntu 12.04 LTS](http://www.ubuntu.com)
* [Apache](http://httpd.apache.org)
* [PHP (5.5 by default)](http://www.php.net)
* [MySQL](http://www.mysql.com)
* [Xdebug](http://xdebug.org)
* [PHPUnit](http://phpunit.de)
* [Postfix](http://www.postfix.org)
* [wp-cli](http://wp-cli.org)
* [phpMyAdmin](http://www.phpmyadmin.net/home_page/index.php)
* [WordPress (Stable and Core)](http://wordpress.org)
* [Search Replace DB](https://github.com/interconnectit/Search-Replace-DB)

In addition to the above packages the Primary Vagrant configurations are split up so that making a new virtualhost, database or other configuration change is as easy as adding a couple of lines of code without risking breaking anything in the process.

### What will Primary Vagrant do in the future?

That’s a darn good question. I’ve built it for my own work to date but that isn’t where it has to stop. If there is something you would like to see in it or something you would like to improve [issue a pull request](https://github.com/ChrisWiegman/primary-vagrant). The more eyes and hands on the project the better.

[**Check out Primary Vagrant on GitHub Today**](https://github.com/ChrisWiegman/primary-vagrant)

 [1]: /2013/05/bye-bye-mamp-pro-hello-ampps/
 [2]: /2013/08/virtual-machines-the-holy-grail-of-local-web-development/