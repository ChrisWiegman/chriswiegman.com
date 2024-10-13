---
title: My Development Toolbox – 2015
date: 2015-03-02T05:00:00+00:00
draft: false
categories:
  - Technical
tags:
  - Development Tools
  - Tools
---

I’m a bit of a tool junky. Up until recently I had over 150 apps installed on my computer to handle all the little nuances of development. Frankly it was overkill. The truth is I only really need a few different apps as long as I learn them well.

About once a year I take stock of these core apps I use in development both to share and to examine what has changed. I’ve actually been writing this post ever year since [2012][1] and find it fascinating how quickly tools change over time. While much of what I’m using this year is the same as [last year][2] there are enough differences to make me look back and realize just how much I have evolved right along side the industry I work in.

**1. [PhpStorm](http://www.jetbrains.com/phpstorm/)**

For the first time in a while I actually haven’t switched my primary editor in the last year. PhpStorm might not be perfect but it is the best I’ve found for the way I work. It simply makes many of the tasks of coding easier, particularly now that WordPress integration is included out of the box since version 8.0.

**2. [Atom.io](https://atom.io)**

While PhpStorm handles the heavy lifting of the code I write there are times when a simpler text editor comes in handy. I’ve turned to Atom for this task for a while now as it is lightning fast and, with the availability of plugins and themes, almost infinitely customizable while still being free. It’s actually powerful enough that I wouldn’t discourage someone from using it as their primary editor if they’re so inclined (although I think PhpStorm does a much better job in this category).

**3. Terminal.app**

I’ve gone back and forth the last year between this and [iTerm2](http://iterm2.com) but Terminal.app has emerged the winner. It is simple and powerful. What else do you really need?

**4. [Grunt.js](http://gruntjs.com)**

While Grunt is another holdout from last year the way I’ve used it has evolved a lot. My typical Grunt configuration now runs tasks from concatenation to minification and a few others while keeping separate the various environments I work in on any given project. While newer tools such as Gulp seem to have become fashionable I still find Grunt the best for my own needs.

**5. [Vagrant](http://www.vagrantup.com)**

I seriously don’t know how I ever worked with anything else. I’ve been working on my own Vagrant configuration, [Primary Vagrant](https://github.com/ChrisWiegman/primary-vagrant), for a while now that has made maintaining my development environments a breeze. I rarely ever think about what I’m running anymore, this just works.

If I had to guess Vagrant might be the next to go over the next year though as I’ve been experimenting with [Docker](https://www.docker.com) as a more agile development environment capable of helping me test more easily in various server configurations while still providing something portable and lightweight.

**6. [Virtualbox](https://www.virtualbox.org)
**

While Vagrant handles the configuration of my development environment it is Virtualbox that does all the heavy lifting. It’s free, powerful and reliable as a Virtual Machine engine.

**7. [Navicat for MySQL](http://www.navicat.com/products/navicat-for-mysql)**

Navicat seems to be a perpetual holdout on my list. It is still the most powerful MySQL tool I’ve found capable of heavy modeling and editing while also allowing for the easy moving of data between databases and servers even if you don’t have direct access to the MySQL server itself. If you work with clients or really any WordPress or other MySQL sites you should really give it a shot.

**8. [GIT](http://www.git-scm.com)**

I keep everything from my development environment to my sites in GIT. While it isn’t perfect it is fast, reliable and available.

**9. [Sourcetree](http://www.sourcetreeapp.com)**

While I do most of my GIT work through either the command line or PhpStorm there are times when having a more powerful GIT client just makes sense. If I’m trying to sort out the branches of a complex repository, perform complex merges, deal with submodules or just keep track of repositories on my machine Sourcetree really can’t be beat. It is simply the most powerful client out there (and I’ve tried them all) so for free you really can’t go wrong.

**10. [DeployHQ](https://www.deployhq.com)**

Once you have your code in GIT you still need a good way to get it to your server. FTP/SFTP might serve the purpose but they’re inefficient if you’ve changed many files since your last deployment or need to quickly roll back your code for whatever reason. DeployHQ watches your remote GIT repository (it can work with almost any GIT server) and updates only the changed files accordingly when required. For example, I typically set it to deploy automatically whenever I push a given repository to master. I highly recommend checking it out. As a bonus it is free for 1 site.

**11. [SASS](http://sass-lang.com)**

This one hasn’t changed much. As I find myself doing less front-end work than ever I have come to rely on SASS as a powerful pre-processor helping me keep the styles of any project I’m working on organized and efficient.

**12. Apple Safari**

I’ve tried to go back to Chrome a couple of times but I just can’t stand it anymore. On my Retina Macbook Pro using Safari nearly doubles the battery life over doing the same tasks in Google Chrome and the reading list feature has become invaluable as a read later list. Sure I’ve tried Pocket and the rest but the simplicity of Apple’s own solution I’ve found to just be more efficient in my daily workflow.

**13. [1Password](https://agilebits.com/onepassword)**

I tried looking at Lastpass again (even paid for a year of Lastpass premium) but it just can’t hold a candle to 1Password. It isn’t perfect, particularly in filling out password forms, but it does keep my data safe and available when I need it.

**14. [Linode](https://www.linode.com)**

I moved to Linode last summer after their newer SSD architecture stabilized and it became faster than any of the services I had been using before. For a good price it keeps all my sites running at top speed and even handles the server backups seamlessly should I mess anything up.

_Any suggestions for tools I should try? Is there something I left off? Tell me about it._

 [1]: /2012/02/my-web-development-toolbox-2012/
 [2]: /2014/01/my-development-toolbox-2014/