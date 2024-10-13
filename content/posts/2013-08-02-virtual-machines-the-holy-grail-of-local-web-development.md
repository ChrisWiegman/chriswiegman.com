---
title: Virtual Machines… The Holy Grail of Local Web Development
date: 2013-08-02T04:00:00+00:00
categories:
  - Technical
tags:
  - Vagrant
---

I’ve been developing websites for quite a long time, since the 90s to be exact, and over that time the way I work on a project has changed pretty dramatically.

Like so many other developers I started out working on plain HTML sites on my local computer and then using FTP to send them to a remote server where the world could get to them. That worked great until dynamic sites came around and I could no longer test my code locally resulting in a, well, less than perfect workflow. You see, once I start getting into dynamic sites (I started with Cold Fusion and ASP classic) I developed a habit of developing directly on a remote server, usually the production site, with tools like [Dreamweaver][1] that allowed me to connect and work directly on the remote machine. It was in fact this workflow that kept me a loyal Dreamweaver user for the better part of a decade as nothing else at the time could compete with this type of workflow very well.

The next step in my development evolution was a local server. When I was still on Windows I would use [XAMPP][2] or even IIS and later when I moved to Mac I discovered [MAMP Pro][3] and finally [AMPPS][4]. For the first time I had a true Apache, MySQL, PHP stack on my local computer that, at least for major versions, could mimic the bulk of my server environments with only minimal modifications. It worked well but it wasn’t perfect. Switching computers could be a nightmare and should anything in the stack become corrupt I was in for some serious trouble. But at least I wasn’t working on the remote server anymore. This workflow was good, but just not good enough.

So for the last 5 years I’ve played around with various combinations of MAMP Pro, AMPPS, [Homebrew][5], XAMPP and a few other solutions in search of the perfect server that would mimic my production development almost perfectly, be easily portable and would require a bare minimum amount of maintenance.

Throughout this time, and in parallel to my quest for the perfect development environment, I have been a heavy user of another now popular technology, [virtual machines][6], which I use to test sites on Windows, Ubuntu and other platforms where I could replicate neither the browser nor the operating system very well using my Mac. While this technology was rather cumbersome 5 years ago when I started using it, today it has matured to the point where you can use a virtual machine as easily as you can use a word processor and with about the same performance level you would expect from the host OS.

While I’ve been developing locally and using virtual machines for quite some team I had never been able to successfully combine the two goals. Sure I had heard of Puppet, Chef and Vagrant but they seemed to me to be anything but mature and far more of a hassle than getting a proper MAMP or AMPPS environment.

Finally, last weekend [Mark Jaquith][7] changed my opinion on all of this with his [WordCamp San Francisco][8] talk titled [Confident Commits, Delightful Deploys][9]. He pointed out just how mature Vagrant and Puppet had become and how easily they could be utilized to build a local development environment utilizing the same OS and packages I use in production ([Ubuntu][10], Apache, NGINX, etc) and requiring only minutes to setup or tear down once the initial configuration was complete.

The Holy Grail of development environments has been found and it doesn’t require a whole heck of a lot get started.

1. Install [Virtualbox and its Guest Additions](http://www.virtualbox.org "Virtualbox"). This is the virtualization engine that will allow your new development environment to run.
2. Install [Vagrant](http://www.vagrantup.com/ "Vagrant"). It doesn’t matter what your OS is, this is a free and easy download package that serves as a wrapper around the Virtual machine in Virtualbox. Once configured it will download the image you need, set up the virtual machine and pass it off to a provisioning script to make sure everything you need is installed and configured.
3. Get a base configuration. This is easy with sites like https://puphpet.com/ which allow you to configure what you need for a basic development environment. I started with it and then customized it to meet my needs. Mostly I just changed a few variables to make sure it worked for me a little easier out of the box. You can find [my modified configuration on GitHub](https://github.com/ChrisWiegman/primary-vagrant) if you’re interested.
4. Start working. Once you have a script getting a development environment is as easy as going to the location of the script you downloaded and typing _vagrant up_ in the terminal.

### Why Use Virtual Machines?

Yeah, it’s a bit of work to set this all up but once you do there are some serious benefits to this workflow.

1. If you’re in a team **everyone will be developing on the same environment**. We’re not there at my day job yet but we’re getting there. Once implemented it won’t matter if folks are on Windows, Mac or Linux. The development environment will be the same throughout allowing us to spend far less time as a team debugging.
2. **Your development environment can match your production environment**. If you’re deploying to a given environment why not work in that same environment? Again this saves time and sanity in debugging as you’re no longer changing configurations as you push your project up the line.
3. **Speed and efficiency**. Once you have Vagrant, an install script, and Virtualbox you can switch machines, run up or down new environments and generally get to coding a lot faster without having to spend hours tweaking your local setup to match your servers as closely as possible. For me this is the real benefit at the moment. I can work on any machine I happen to have handy and I no longer have to worry about either setup or whether I’ve configured the new machine to match the old. It just works.

### Room to Improve

Of course, as I’ve only been using this for a couple of days there is still room for improvement in my setup. In particular I need to work on both my Puppet script and Vagrant box to take into account running PHP over fastcgi as well as a couple of other changes. It’s darn close and I’m sure with a little more time I’ll have it pretty much perfect. Fortunately bringing new environments up and down is so easy that I really have nothing to lose with tweaking it out.

### Give it a try

One of the best things about trying a new method like this is you don’t have to give up the way you currently work. I admit I did delete AMPSS from my computer about a day after starting with Vagrant and [Puppet][11] as I simply don’t need it anymore but there is no reason you have to. There is nothing to conflict with so your old setup so the only thing you have to lose is a few minutes of your time and an obsolete way of dealing with local development.

**Edit (3/14/14):** Fixed invalid link

 [1]: http://www.adobe.com/products/dreamweaver.html "Adobe Dreamweaver"
 [2]: https://www.apachefriends.org
 [3]: http://www.mamp.info/en/mamp-pro/ "MAMP Pro"
 [4]: http://www.ampps.com/ "Softaculous AMPPS"
 [5]: http://brew.sh/ "Homebrew"
 [6]: http://en.wikipedia.org/wiki/Virtual_machine "Virtual Machines on Wikipedia"
 [7]: http://markjaquith.wordpress.com/ "Mark Jaquith on WordPress"
 [8]: http://sf.wordcamp.org "WordCamp San Francisco"
 [9]: http://wordpress.tv/2013/07/28/mark-jaquith-confident-commits-delightful-deploys-2/ "Watch Mark's WordCamp talk"
 [10]: http://www.ubuntu.com/ "Ubuntu"
 [11]: http://puppetlabs.com/ "Puppet Labs"