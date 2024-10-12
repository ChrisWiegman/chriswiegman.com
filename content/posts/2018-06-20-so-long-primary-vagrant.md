---
title: So Long Primary Vagrant
type: post
date: 2018-06-20T04:00:00+00:00
url: /2018/06/so-long-primary-vagrant/
categories:
  - Technical
tags:
  - Primary Vagrant
---

For the last four and a half years I’ve poured an awful lot of time into my local development environment which has morphed to one of my most popular projects of all time on GitHub. [Primary Vagrant][1] was my first real devops project that helped me learn technologies from Puppet to Ruby and from Vagrant to server architecture to a level of detail I never thought I would need.

Today it is time for me to announce that I have shut down the project.
While Vagrant and Puppet brought a lot to the table the fact is that I’ve spent more time over the last few years maintaining that environment rather than using it to build anything of substance. While it served me well at my day job building sites for a number companies as well as products like iThemes Security today it’s starting to show its age… and its limitations. Simply put I’ve hit the point where I don’t find the work that would be needed to update it to a newer version of Ubuntu Server and Puppet worth it.

What does this mean?

Well, if you’re using it it will continue to work for now as long as you don’t update your Vagrant software past version 2.0.3. If you want to fork it and continue the work yourself it will also continue to live in an archive on GitHub.&nbsp;

As for what I’m using now I’ve moved on to Docker where I’ve been working on a flexible solution for my work and that of my team and it’s darn close to a spot where I can share it with the world.&nbsp;

 [1]: https://github.com/ChrisWiegman/primary-vagrant