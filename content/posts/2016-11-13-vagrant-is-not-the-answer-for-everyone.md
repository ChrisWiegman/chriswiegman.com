---
title: Vagrant is Not The Answer For Everyone
type: post
date: 2016-11-13T18:58:57+00:00
url: /2016/11/vagrant-is-not-the-answer-for-everyone/
featured_image: /images/2020/07/Vagrant-is-Not-The-Answer-For-Everyone.jpg
categories:
  - Technical
tags:
  - Vagrant
---

After working with Vagrant for nearly three years and even [writing a post on how great it is][1] I can now say without hesitation that it is not the solution I thought it was. I don’t say that lightly either as I’m about to launch version 4.0 of my [Primary Vagrant][2] project. Instead I say it based on the expectations we have put on it as a development community combined with ecosystem (or lack thereof) of the tools we have been using to attempt to bend it to our will.

## Vagrant is not MAMP

From VVV to Primary Vagrant we’ve all adopted Vagrant based environments for our local development as if they’re&nbsp;some sort of drop-in replacement for MAMP or AMPPS or any of the other tools that have traditionally allowed us to develop locally. This is the wrong approach.

Where Vagrant environments really are superior is for teams working in a nuanced environment. For example, we use a fork of Primary Vagrant on my team at UFHealth complete with support for IBM DB2, Oracle, Shibboleth, LDAP and a few others. While this could be done in MAMP I would seriously not which the setup and its maintenance on even my worst enemies. Using Vagrant in this setting has allowed one person (me) to setup and maintain an environment that very closely resembles our production environment along with tools such as XDebug and others to make our lives easier.

While this is great when I’m done with my 9-5 and start working on plugins or other software I shut down my work VM and spin up Primary Vagrant. Sounds easy but there are issues here, particularly if I look at the&nbsp;GitHub&nbsp;issues users have been creating. Sure this gives me all the dev tools out of the box but as soon as I need to change something such as PHP versions or even quickly spin up a new site the advantages disappear pretty quickly.

## Vagrant environments are not meant for everyone

The crux of the issue here&nbsp;is two-fold. First, Vagrant environments are meant to be customized for a specific production environment. This does not represent the vast majority of hosts out there. In fact I’ve encountered numerous&nbsp;problems over the years when deploying sites for no other reason than&nbsp;something as simple as a change in software versions or module availability. In this sense it’s like working with MAMP way back in the early versions when the flexibility of configuration simply wasn’t available. While it can be fixed in the Vagrant world I’m not convinced that doing so is the correct approach.

Second, the lack of good interfaces to modify things as simple as virtual host configurations can really raise the barrier for the vast majority of folks who need a local development environment. VVV, and soon Primary Vagrant, addresses this to some extent with command line tools designed to make site management easier but these are far from ideal and&nbsp;fall apart as the needs of the sites generated differ from one another. While an advanced developer can navigate around this pretty easily the skills and knowledge required to do so often negate the prescribed approach to “just use Vagrant” echoed so often throughout the development community.

## I thought there was no maintenance

Of course even for a seasoned developer the advantages of a Vagrant configuration can quickly fall apart. The need for a good Vagrant box to install and configure the various pieces that make it all work means it doesn’t take much for something to fail resulting in, at best, an error message that requires another provision and, at worst, lost hours spent attempting to solve the issue in the tool that is supposed to help you build your product.

I take for granted how much I enjoy devops and working with Primary Vagrant but all I need to do is look into the issues to see that I’m in the minority.&nbsp;Even at that however when I need to work on a site and I can’t because a repo has failed or a package has broken backwards compatibility my productivity can go into the gutter pretty quickly and that can lead to problems.

## So what is the answer?

As is evident with the existence of products like [Pressmatic](https://localwp.com/) and [MAMP Pro 4](https://www.mamp.info/en/) the issues I see are not unique. For less experienced developers or folks who are trying to just run a WordPress site locally I still recommend Desktop Server as it is both reliable and easy to get running for people of all skill levels.

For more advanced developers who are not part of a team or are working on numerous sites across a variety of environments I do recommend MAMP Pro 4 or Pressmatic both of which offer a flexibility that just isn’t&nbsp;practical in most of the Vagrant environments available for the task. Pressmatic, in particular, offers a very interesting approach in that it is basically a GUI put onto Docker containers which in theory could lead to nearly infinite configurations. The only thing it suffers from at the moment is that, at least in my experience, it is a bit too immature to be useful.

While this covers the majority of developers I know there are still teams like the one I work with for whom Vagrant is still the best, if not the most ideal, solution. Frankly, this was the original selling point of Vagrant in that it allows a self-contained and easily reproduced development environment that can truly mimic a production server. Make no mistake about it, this is&nbsp;_the_ use case for Vagrant and where it shines and this is not a replacement for MAMP or similar software.

## So what happens to Primary Vagrant?

For now I am working in Primary Vagrant for general site work and I will continue to develop it. In fact I have a 4.0 release nearly ready that significantly streamlined the code base and allows for even more portability in situations where you need to work on more than one computer. That said however I do think its days are probably numbered in the long run as I start to look heavier at Docker and creating a real GUI similar to MAMP or Pressmatic that could serve even the most advanced developers. That however is not going to happen any time soon.

So for now I’ll keep working with Primary Vagrant and just deal with it’s annoyances. Let’s face it, any tool I switch to will have its own sense of annoyances as well. I do however see a brighter light on the horizon that has definitely caught my attention. Eventually I’ll have to take a closer look.

 [1]: /2013/08/virtual-machines-the-holy-grail-of-local-web-development/
 [2]: https://github.com/ChrisWiegman/primary-vagrant