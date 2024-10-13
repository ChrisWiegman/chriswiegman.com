---
title: Bit51’s Development Tools – 2013 Edition
date: 2013-05-27T04:00:00+00:00
categories:
  - Technical
tags:
  - Development Tools
---

A little over a year ago I wrote [a post listing 11 services and applications I use as a developer][1]. When I read that post again last week I frankly found it hard to believe I had ever used some of those development tools. It isn’t that they’re bad, it’s just that so much of what I’ve done over the last year has evolved and as it has so have the tools I use in my daily work. So with that in mind I think it’s time to take inventory of what I’m using currently in my development (at least the big stuff anyway) and offer some suggestions for folks who are looking for new tools themselves.

The apps and services in this post are items that I use in my workflow every single day. This is the stuff that, if they were to close up shop I would be in a significant bind. You see, for some things there are good replacements. Other tools do one thing significantly different from the rest and, if you’re a creature of habit like me, losing that one feature could seriously slow you down for a while. That said, here’s what I’m using currently to develop this site and for pretty much everything I do in my day job.

## Primary Tools

These are the apps that I actually develop stuff with. They can work in a stand-alone manor for smaller tasks or be put together for larger more complex projects. In short these are the apps I use constantly and probably have open on whatever computer I’m working on.

### 1.) [Sublime Text 2](http://www.sublimetext.com/ "Sublime Text")

I probably own every web [IDE](http://en.wikipedia.org/wiki/Integrated_development_environment "IDE on Wikipedia") on the market. I’ve got a license for [Coda 2](http://panic.com/coda/ "Coda 2"), [Espresso](http://macrabbit.com/espresso/ "Espresso"), [BBEdit](http://www.barebones.com/products/bbedit/index.html?utm_source=thedeck&utm_medium=banner&utm_campaign=bbedit "BBEdit Homepage") and about a dozen others and about every other month or so I try to pull one out and see if it has gotten better than Sublime Text 2 (ST2) which, at least on the surface, almost seems too simple to be functional. The fact is however that ST2 is only as simple as you make it. It can be the cleanest text editor you’ve ever used or one of the most complex IDEs with debugging, auto-deployment or anything else use need through its [extensive plugin library](http://wbond.net/sublime_packages/community "ST2 Package Library"). It doesn’t even matter what platform your on as ST2 can handle Windows, Mac or Linux allowing the ability to make any setup portable across whatever computer you’re using.

Lately it seems like all the “cool kids” are on ST2 which sounds trendy but there is a reason for it. There is an old saying (I don’t know who first said it) that says “you can’t be everything to everyone.” When it comes to text editors ST2 really turns that idea on its head in a package that really can do just about anything you ask of it.

### 2.) [Adobe Photoshop CS6](http://www.adobe.com/photoshop "Adobe Photoshop")

I’ve spent a lot of time over the years trying to find alternatives to Photoshop but nothing else really can come close. These days I use it for layouts, image optimization, photos and just about anything else you would ever need to do with a graphic.

Up until the launch of [Adobe Creative Cloud](https://creative.adobe.com/ "Creative Cloud") last year I was really starting to believe Adobe and its software was on the path to irrelevance. Sure it was \_good\_, but good didn’t justify the obscene price they charged. As a result many freelancers and small shops seemed to be attempting to move away to software such as the [GIMP](http://www.gimp.org/ "The GIMP") and others. Creative Cloud, with prices that actual people could actually afford, has made Adobe relevant again and, as a result, has pushed Photoshop right back near the top of my list of favorite tools.

### 3.) [Navicat for MySQL](http://www.navicat.com/products/navicat-for-mysql "Navicat for MySQL")

There are a lot of free [MySQL](http://www.mysql.com/ "MySQL") database management software packages out there but none of them make the daily tasks I do with MySQL (database maintenance, moving tables, etc) easy. Navicat, while it doesn’t have the detailed views of some others, makes what I do with MySQL simply take less time than it would with any other solution and does so without the security concerns of running [phpMyAdmin](http://www.phpmyadmin.net/home_page/index.php "phpMyAdmin") on my own server.

If you’re not a full-time database administrator yet you’re looking for a tool that will allow you to work with and across your databases with minimum effort then Navicat is well worth the cost.

### 4.) [ForkLift](http://www.binarynights.com/ "Forklift 2")

File management is another area where I’ve tried (and probably own) all the major packages on the market. Coming back to ForkLift comes down to two things: speed and adaptability. It’s many times faster than [Filezilla](https://filezilla-project.org/ "Filezilla") and even about twice as fast as [Transmit](http://panic.com/transmit/ "Transmit") in my own tests (perhaps a benchmarking post is due before too long) and it allows me, unlike Transmit, to show exactly what I want in each panel regardless of where it’s located.

As with IDEs I try go back to the other players, especially Transmit, often to see if they’ve leaped ahead of Forklift but as for now none of them can compete with the speed and ability to customize Forklift 2.

### 5.) [SourceTree](http://www.sourcetreeapp.com/ "SourceTree")

I’ve been using [GIT](http://git-scm.com/ "GIT - Official Homepage") for quite some time and, like most folks I’ve taken the time to figure it out from the command line. The catch is I’m a person who likes graphs and, more specifically, the ability to see my project from a higher level where I can quickly spot problems and other issues. Additionally (if you haven’t noticed already) I like GUIs. For me it’s often just faster to use a GUI app for the day-to-day stuff I do and repository management is no different.

SourceTree is an awesome free GIT app that allows you full control over your repositories in an easy to use yet incredibly powerful GUI that allows for the ability to do everything from simple commits to branching, tagging and conflict resolution.

## Supporting Tools

These are the tools that have become something of a commodity to me. They may not be the most elegant or full featured and, in some cases, I often forget about them entirely until I need to change something, however, they are integral to my workflow and allow me the flexibility I need to work on multiple devices and in multiple environments.

### 6.) [MAMP Pro](http://www.mamp.info/en/index.html "MAMP and MAMP Pro")

My local webserver of choice, MAMP Pro is like an old pair of jeans that you just don’t want to get rid of. It’s kinda clunky and support is non-existent but it does give me a functioning AMP stack with the ability to create, edit or delete virtualhosts almost instantly and without fussing with a text editor. Of everything on this list MAMP Pro will probably be the first to be replaced by something that just works (I’m looking heavily and [AMPPS](http://www.ampps.com/ "Softaculous AMPPS") at the moment) but for now it’s there and it does what I need it to.

### 7.) [Evernote](http://evernote.com/ "Evernote")

Evernote is a note taking service. I use it for so much that I’ve had to start paying for it to store all I put into it in a given month. It contains code snippets, package lists for my hosting environments, meeting notes, post drafts, and just about anything else I want to remember by the time I get back to my computer. In essence it is my my link between life and work where I can store thoughts and other items on just about anything for easy retrieval later. Sure I could use [Google Drive](http://drive.google.com "Google Drive") or other services but Evernote just makes recording thoughts and drafting posts easier.

### 8.) [Dropbox](http://www.dropbox.com "Dropbox")

Dropbox is a file syncing tool that simply allows me to work across multiple computers without having to guess about what I had done on the other. I keep my Sublime Text 2, MAMP Pro and other configuration files in it as well as my local databases allowing me to instantly pick up where I left off when switching computers. As with other software I’ve tried the competition (Google Drive, BitCasa, and a few others) but Dropbox is simply faster and more reliable than anything else currently out there.

### 9.) [Amazon Web Services (AWS)](http://aws.amazon.com/ "Amazon Web Services")

All my servers are hosted on AWS today. It’s cheap and reliable allowing me to do anything I need to with minimal effort and minimal expense. I tried to jump to a popular VPS host about 2 months ago but found myself back on AWS in less than 48 hours as it just worked and did so faster than the competition.

Bonus: if you’re just getting started with virtual private hosting you can use [AWS free for a year](http://aws.amazon.com/free/ "AWS Free Tier"). It’s definitely worth checking out.

### 10.) [DeployHQ](http://www.deployhq.com/ "DeployHQ")

DeployHQ is a handy tool for deploying GIT and other code. When I push a commit to a given branch, say production or staging, DeployHQ handles the deployment of it to my servers and does so, at least so far, without fail. While I could do this manually I use DeployHQ so that I can forget about the task of deployment and focus instead on the next project. For larger projects this might mean something as simple as I can go and get lunch while it takes care of the heavy lifting. For smaller projects, it means I don’t have to question if I’ve deployed everything or forgotten a commit somewhere along the line. It handles it all and for a lot less money than you might think.

## What’s on your computer?

While these tools work for me they won’t work for everyone. What are you using these days? What would you change in your own toolbox?

 [1]: /2012/02/my-web-development-toolbox-2012/