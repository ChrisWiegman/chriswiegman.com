---
title: My Development Toolbox – 2015
type: post
date: 2015-03-02T05:00:00+00:00
url: /2015/03/my-development-toolbox-2015/
categories:
  - Technical
tags:
  - Development Tools
  - Tools

---
I’m a bit of a tool junky. Up until recently I had over 150 apps installed on my computer to handle all the little nuances of development. Frankly it was overkill. The truth is I only really need a few different apps as long as I learn them well.

About once a year I take stock of these core apps I use in development both to share and to examine what has changed. I’ve actually been writing this post ever year since [2012][1] and find it fascinating how quickly tools change over time. While much of what I’m using this year is the same as [last year][2] there are enough differences to make me look back and realize just how much I have evolved right along side the industry I work in.
**1.&nbsp;<a title="JetBrains PhpStorm" href="http://www.jetbrains.com/phpstorm/" target="_blank" rel="noopener noreferrer">PhpStorm</a>**

For the first time in a while I actually haven’t switched my primary editor in the last year. PhpStorm might not be perfect but it is the best I’ve found for the way I work.&nbsp;It simply makes many of the tasks of coding easier, particularly now&nbsp;that WordPress integration is included out of the box since version 8.0.

**2. <a title="Atom" href="https://atom.io" target="_blank" rel="noopener noreferrer">Atom.io</a>**

While PhpStorm handles the heavy lifting of the code I write there are times when a simpler text editor comes in handy. I’ve turned to Atom for this task for a while now as it is lightning fast and, with the availability of plugins and themes, almost infinitely customizable while still being free.&nbsp;It’s actually powerful enough that I wouldn’t discourage someone from using it as their primary editor if they’re so inclined (although I think PhpStorm does a much better job in this category).

<strong style="font-size: 1.25rem; line-height: 1.625;">3. Terminal.app</strong>

I’ve gone back and forth the last year between this and <a title="iTerm2" href="http://iterm2.com" target="_blank" rel="noopener noreferrer">iTerm2</a> but Terminal.app has emerged the winner. It is simple and powerful. What else do you really need?

<strong style="font-size: 1.25rem; line-height: 1.625;">4.&nbsp;<a title="Gruntjs" href="http://gruntjs.com" target="_blank" rel="noopener noreferrer">Grunt.js</a></strong>

While Grunt is another holdout from last year the way I’ve used it has evolved a lot. My typical Grunt configuration now runs tasks from concatenation to minification and a few others&nbsp;while keeping separate the various environments I work in on any given project.&nbsp;While newer tools such as Gulp seem to have become fashionable I still find Grunt the best for my own needs.

**5.&nbsp;<a title="Vagrant" href="http://www.vagrantup.com" target="_blank" rel="noopener noreferrer">Vagrant</a>**

I seriously don’t know how I ever worked with anything else. I’ve been working on my own Vagrant configuration, <a href="https://github.com/ChrisWiegman/primary-vagrant" target="_blank" rel="noreferrer noopener">Primary Vagrant</a>, for a while now that has made maintaining my development environments a breeze. I rarely ever think about what I’m running anymore, this just works.

If I had to guess Vagrant&nbsp;might be the next to go over the next year though as I’ve been experimenting with <a title="Docker" href="https://www.docker.com" target="_blank" rel="noopener noreferrer">Docker</a> as a more agile development environment capable of helping me test more easily in various server configurations&nbsp;while still providing something portable and lightweight.

**6. <a title="Virtualbox" href="https://www.virtualbox.org" target="_blank" rel="noopener noreferrer">Virtualbox</a>
**

While Vagrant handles the configuration of my development environment it is Virtualbox that does all the heavy lifting. It’s free, powerful and reliable as a Virtual Machine engine.

**7.&nbsp;<a title="Navicat for MySQL" href="http://www.navicat.com/products/navicat-for-mysql" target="_blank" rel="noopener noreferrer">Navicat for MySQL</a>**

Navicat seems to be a perpetual holdout on my list. It is still the most powerful MySQL tool I’ve found capable of heavy&nbsp;modeling and editing while also allowing for the easy moving of data between databases and servers even if you don’t have direct access to the MySQL server itself. If you work with clients or really any WordPress or other MySQL sites you should really give it a shot.

<strong style="font-size: 1.25rem; line-height: 1.625;">8.&nbsp;<a title="GIT" href="http://www.git-scm.com" target="_blank" rel="noopener noreferrer">GIT</a></strong>

I keep everything from my development environment to my sites in GIT. While it isn’t perfect it is fast, reliable and available.

<strong style="font-size: 1.25rem; line-height: 1.625;">9.&nbsp;<a title="Sourcetree" href="http://www.sourcetreeapp.com" target="_blank" rel="noopener noreferrer">Sourcetree</a></strong>

While I do most of my GIT work through either the command line or PhpStorm there are times when having a more powerful GIT client just makes sense. If I’m trying to sort out the branches of a complex repository, perform complex merges, deal with submodules or just keep track of repositories on my machine Sourcetree really can’t be beat. It is simply the most powerful client out there (and I’ve tried them all) so for free you really can’t go wrong.

**10. <a title="DeployHQ" href="https://www.deployhq.com" target="_blank" rel="noopener noreferrer">DeployHQ</a>**

Once you have your code in GIT you still need a good way to get it to your server. FTP/SFTP might serve the purpose but they’re inefficient if you’ve changed many files since your last deployment or need to quickly roll back your code for whatever reason. DeployHQ watches your remote GIT repository (it can work with almost any GIT server) and updates only the changed files accordingly when&nbsp;required. For example, I typically set it to deploy automatically whenever I push a given repository to master. I highly recommend checking it out. As a bonus it is free for 1 site.

**11.&nbsp;<a title="SASS" href="http://sass-lang.com" target="_blank" rel="noopener noreferrer">SASS</a>**

This one hasn’t changed much. As I find myself doing less front-end work than ever I have come to rely on SASS as a powerful&nbsp;pre-prosser helping me keep the styles of any project I’m working on organized and efficient.

<strong style="font-size: 1.25rem; line-height: 1.625;">12. Apple Safari</strong>

I’ve tried to go back to Chrome a couple of times but I just can’t stand it anymore. On my Retina Macbook Pro using Safari nearly doubles the battery life over doing the same tasks in Google Chrome and the reading list feature has become invaluable as a read later list. Sure I’ve tried Pocket and the rest but the simplicity of Apple’s own solution I’ve found to just be more efficient in my daily workflow.

<strong style="font-size: 1.25rem; line-height: 1.625;">13.&nbsp;<a title="1Password" href="https://agilebits.com/onepassword" target="_blank" rel="noopener noreferrer">1Password</a></strong>

I tried looking at Lastpass again (even paid for a year of Lastpass premium) but it just can’t hold a candle to 1Password. It isn’t perfect, particularly in filling out password forms, but it does keep my data safe and available when I need it.

<strong style="font-size: 1.25rem; line-height: 1.625;">14.&nbsp;<a title="Linode" href="https://www.linode.com" target="_blank" rel="noopener noreferrer">Linode</a></strong>

I moved to Linode last summer after their newer SSD architecture stabilized and it became faster than any of the services I had been using before. For a good price it keeps all my sites running at top speed and even handles the server backups seamlessly should I mess anything up.

_Any suggestions for tools I should try? Is there something I left off? Tell me about it._

 [1]: /2012/02/my-web-development-toolbox-2012/
 [2]: /2014/01/my-development-toolbox-2014/