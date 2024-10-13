---
title: My Development Toolbox – 2014
date: 2014-01-19T05:00:00+00:00
categories:
  - Technical
tags:
  - Development Tools
---

It’s no secret that things change but sometimes it amazes me just how quickly _some_ things can change. Web development is one of those things that changes so quick that if you’re not paying attention it is all too easy to get left behind.

In the spirit of change and trying to keep up with that change I try to take a look at my own development toolbox about this time every year and share the current apps and tools that, at least currently, I don’t think I could do my job without.

While tools change every year as new techniques and apps become available this year I think, at least for me, the change was a little more revolutionary. Techniques and methods I had used for years have been replaced by not just new apps but entirely new ways of looking at my development environment from the tools right down to the servers and other components.

When I look back at [last year][1] I see tools that, for the most part, had been part of my daily workflow for years even though their names had features had sometimes changed. From trusty server environments like MAMP Pro to GUI apps such as Navicat for MySQL and ForkLift there was plenty there for a full-stack developer to do a darn good job. This year, while my tools still do my job well, I’ve been focusing on automation and the ability to test and develop backend code efficiently and my current development toolbox reflects this narrowing focus.

So what am I using these days? Here are the tools that I currently couldn’t live without.

**1. [PhpStorm](http://www.jetbrains.com/phpstorm/)**<br />
I was a fan of [Sublime Text 2](http://www.sublimetext.com) for a while but the more work I do the more a Sublime Text just couldn’t keep up and seemed to get in the way of my workflow. PhpStorm does everything Sublime Text could do for PHP and so much more. I love its integration of tools such as GIT and Vagrant (although I don’t use the Vagrant for anything but testing) and I love its ability to help me keep my code clean while not getting in the way of my workflow. The only downside is it is written in Java but even that hasn’t been an issue for me as it runs just as fast as Sublime Text ever did.

**2. Terminal.app**<br />
I’ve never shied away from the command line but, at least for me, this last year has really been the year of the command line. Instead of using GUIs for everything I find myself with a persistent terminal window open for everything from debugging to just about any other task you can imagine. Perhaps it is the fact that I’ve been using the command line for so many years that just finally poured over into my local environment, perhaps it was something else. I don’t know why I’ve moved so much to the command line but I do know it has greatly improved my workflow and that is really all that matters.

As far as command line apps go I’ve tried iTerm and a few others but in the end Terminal.app on Mac just does it all and does it all well. I don’t see a need anymore to maintain another app when everything I do works fine with the build in client. Instead of changing command like clients I’ve instead settled on installing Homebrew and a few other apps to improve the command line offering on the Mac and bring my workflow to an entirely new level of efficiency.

**3. [Grunt.js](http://gruntjs.com)**<br />
Up until last Summer when I wanted to compile [LESS](http://www.lesscss.org) or [SASS](http://sass-lang.com) (two more technologies that weren’t on last year’s list but have become integral to my work) I used a paid app called CodeKit. While effective it wasn’t the most efficient, particularly as I work on more than one computer. There was simply no good way to save and sync options across multiple projects and computers and, as a result, I could spend a good majority of my time on any given project just setting up and re-setting my projects.

Enter Grunt.js. Grunt is a JavaScript task manager that runs on [Node.js]() and can be used for any number of tasks. Personally I’ve found it as a better-than-solid replacement for CodeKit and I use if for compiling CSS and JavaScript in all my projects. It’s fast, efficient, very customizable (much more than any app I’ve used) and it can be synced across multiple computers or even a complete team by just including 2 simple configuration files in the project’s repository. Yeah, projects might take a bit longer to set up initially but with a good template and a little practice I can now confidently create a new project in Grunt just as quickly as I did in CodeKit and I never have to worry about redoing the configuration every time I switch computers or anything else.

**4. [Vagrant](http://www.vagrantup.com)**<br />
While Grunt has become my choice tool for processing files in my projects Vagrant has become my choice tool for powering development servers (and probably soon to be production servers as well).

Vagrant is a virtual machine wrapper that lets you create a single configuration file which can be used to create a virtual machine in Virtualbox or another environment. Combined with a provisioning tool such as Puppet I can create a local server to work on that not only completely replaces MAMP Pro but also reproduces my production server environment almost exactly.

Where there are many ways you could use Vagrant, I keep my configuration in a GIT repository which can then be used just about anywhere to set up a complete LAMP environment in only a few minutes. That’s a far cry from MAMP or AMPPS where there was no easy way to sync environments and replicating your production environment wasn’t possible other than major versions of Apache, MySQL or PHP. If you’re looking to take your development server to the next lever this is where you should be looking. As with everything it might take a few minutes to setup initially but once you do you’ll not only work more efficiently, you’ll also no longer have to worry about differences in your environment from your workstation to your server or among the rest of your team.

**5. [Navicat for MySQL](http://www.navicat.com/products/navicat-for-mysql)**<br />
Navicat is a holdout from last year that is just too handy to give up. I use it for nearly all MySQL work and it worth its weight in gold when you are migrating databases. It is the only MySQL client that allows you to drag and drop tables (with their data) between databases or entire servers. Finally, if you’re doing client work that involves getting into their database with Navicat you won’t need anything other than their FTP/SFTP password as it has a PHP tunnelling option that allows you to connect to the database from any host with an existing PHP connection to the database. For supporting my plugin this has saved me and my customers countless hours in trying to get passwords correct and figuring out how to connect to some very obscure servers.

**6. [GIT](http://www.git-scm.com)**<br />
If it wasn’t for the WordPress plugin repository I wouldn’t even look at SVN anymore. I’m so sold on GIT that I even moved both St. Edward’s University and Springbox to the platform while I was there. It is simply faster and more powerful than anything else out there. For large SVN projects it could take literally minutes for a single commit and, as a result, folks tend to commit far less than they should. For GIT, on the other hand, commits happen almost instantly and you don’t have to push them all to the server until you’re ready. In addition, tags and branches are much easier to manager as they’re virtual rather than physical locations (think of them as putting a post-it note on your commit as opposed to physically making the commit in a different folder). If you’re serious about code and haven’t tried GIT yet give it a try. You won’t be disappointed.

**7. [Tower](http://www.git-tower.com)**<br />
Managing my GIT repositories is the one major exception to my move to the command line this year. While the command line is fine for GIT, Tower is just better. It is powerful, easy to navigate and provides information in a format much easier to digest at a quick glance than does command line GIT. It isn’t free (if you don’t have a budget check out the free <a title="SourceTree" href="">SourceTree App](http://www.sourcetreeapp.com)) but it is well worth the price and has done wonders in speeding up my daily workflow.

**8. [SASS](http://sass-lang.com)**<br />
I don’t do much front-end work (truth be told I loathe trying to make a design work across multiple browsers) but when I have to tweak a design or implement a Photoshop file CSS/HTML/etc SASS has made the job so much easier. Rather than a long drawn-out CSS file I can use variables and other techniques that make working with CSS almost as easy as working with PHP.

When I first got into CSS pre-processing I learned LESS due to its association with the Twitter Bootstrap project. While it is effective I’ve found it to be limiting in many instances and as a result, when I have a choice, I’ve been using SASS, particularly SCSS for all of my current projects.

**9. Apple Safari**<br />
Yep, I’ve given up Chrome and Firefox completely and gone to Safari with the advent of OSX Mavericks. To be fair I still keep Chrome and Firefox but they are rarely opened these days. Not only does Safari integrate significantly better with my iPhone and iPad but it also adds about 2–3 hours to the battery life on my laptop. Frankly when I first heard about the power saving I didn’t think it would live up to thy hype but in the end it far surpassed my wildest dreams and now I can, if I need to, use my laptop for a full workday without the aid of a power adapter.

**10. [1Password<br />](https://agilebits.com/onepassword)**I worry about security a lot (as if you haven’t noticed). As such I’m one of those rare folks who uses a unique, strong password for every single site I connect to. With hundreds of logins I couldn’t hope to keep track of them all in my head so instead I use 1Password to manage not only passwords but just about any other piece of sensitive data I could imagine.

1Password isn’t cheap and it isn’t the only player in town. Lastpass for example is another excellent product (I actually use it for passwords I have to share with other folks). Where it does excel is in its incredible interface and the fact that it can keep all your data locally if so desired since just about all the main competitors are cloud based. If you want to add some serious security to your online life I would recommend it in a heartbeat. It’s a solid app that does what it says it will do quite well.

**11. [DigitalOcean](https://www.digitalocean.com)**<br />
There are a lot of hosts out there these days and there are some good ones if you’re serious about your site. I’ve tried at least a dozen myself over the years and thought I had settled on Amazon Web Services (AWS) until I discovered DigitalOcean. While being cheaper than AWS the performance of DigitalOcean, particularly in disk I/O is approximately 100x better than that of AWS according to some benchmarking I did in the process of switching. It isn’t for everyone as their offerings are unmanaged requiring you to do all the work yourself but if you’re up for it you won’t be able to get the same performance without paying a lot more anywhere else.

 [1]: /2013/05/bit51s-development-tools-2013-edition/