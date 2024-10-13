---
title: Notes and Observations on WordPress Security
date: 2013-05-23T00:00:00+00:00
draft: false
categories:
  - Technical
tags:
  - Security
  - WordPress
---

WordPress security has become a popular topic as there have been a number of posts lately talking about just how secure [WordPress](http://www.wordpress.org "WordPress.org") is or is not. From what I’ve read so far just about all of them boil down to one of two things: 1.) the author has a stake in WordPress as part or all of his/her business so it’s secure and, 2.) my site got hacked so WordPress is not secure. Add to that a number of posts on how to improve WordPress security and the ever-growing number of security plugins in the WordPress.org plugins repository and it can all get pretty confusing. So who is right? Is WordPress secure or isn’t it?

Before I start the flame war a post like this is sure to become let me point out that over the last 3 years of developing what has become one of the biggest security plugins in the WordPress.org repository I find the answers to these questions tend to be quite a bit more complex then just the code on which WordPress runs. It is far easier to measure security based on the strengths or weaknesses of a single variable than it is to do so on the strengths and weaknesses of 100 variables. That aside I do see some significant trends which contribute to to both sides of the argument and no matter what either I or anyone else write the only security that really matters is how secure your site is. If your site is compromised, no matter the reason, it is safe to say that a combination of both a vulnerability and a threat has made your site insecure.

### Let’s start with the code

First of all let us, for the sake of this post, define the security of the code base as _the ability or inability to use the code against itself._ That is, can the code be executed or used in such a way that it would be considered an attack by the user who installed it.

The first argument often cited by both sides is the strength or weakness of the code on which WordPress is built. Frankly that code, at least the core of it before you change anything or add plugins or themes, is quite secure. Rarely ever do you hear about an attack against WordPress in which its own core code is used against itself. In addition when a vulnerability is found it is often patched with a minor version upgrade before it is widely exploited across the internet.

Given the lack of attacks against core I would say it is safe for us to assume WordPress core is quite secure. From personal experience I will add that a properly updated WordPress core is more secure than nearly any software available with such a large and diverse user base.

On the other side of this argument are two simple facts:

1.) Many users do not update their WordPress installations when a new version comes out

2.) Few sites using WordPress are using only WordPress core

On the simplest terms these seem like no-brainers but they’re actually rather significant to the argument about code security. To begin with patching a vulnerability doesn’t erase its existence. Until the user installs the new version their code has a hole in it and all it takes is the right threat to make use of that hole. Second, while WordPress core receives an awful lot of scrutiny, plugins, and to a lesser extent themes, do not. There are no groups of talented developers pouring over each and every plugin and theme fixing the errors when they arise. For some even the single developer who is working on it might be doing so as a hobby or a learning experience both of which can lead to problems. Put these together and although the current version of WordPress core might be locked up tighter than Fort Knox the code actually powering many of the sites using it is probably not.

### Now for the real “problem”

Yes, I realize that the above argument doesn’t sound too promising for WordPress security and in some ways it shouldn’t. The fact is however that WordPress is just a tool and like any tool is subject to misuse by its users. In other words _users are the real source of vulnerabilities in WordPress_.

Last month’s attack against the “admin” user was a prime example of this phenomenon. WordPress core has given people the ability to change the username from “admin” upon install for quite some time but an awful lot of folks don’t take advantage of it. For some they don’t understand the effect it might have, for some a consultant or someone else just “gave it to them” without telling them they could change it, still others might just have been too lazy. Once your site is attacked it doesn’t matter what the reason was. The users inability to change the admin username whether due to reasons of their own control or not lead to many sites being hacked. While last month’s attack was a large example of this it is something that plays itself out time and time again in everything from failure to use one-click updates to installing bad plugins and themes and more (it is amazing how many passwords I get sent to me in everything from email to FaceBook).

So for all the arguments about whether WordPress is secure or not I have found through experience and observation that the code base itself is not the problem on sites where users either don’t know any better or don’t care about the security of their site.

### So what can be done about it?

The first and most important thing that can be done to improve the security of WordPress is education. The more people that are aware of the security of their site the better. I would go as far with this as to say I could write a plugin tomorrow that would do absolutely nothing but put a line of text in the WordPress dashboard that says “this site is secure” and that the sites that install it plugin would indeed be significantly more secure than the average site.

Why? Because the user who installed the plugin is informed enough to look at the security of their site and try to improve it. On top of installing a security plugin they’ve probably changed the admin username, installed updates, and completed all of the other simple things that really makes the biggest difference in protecting a WordPress site.

Second, as no one knows all the vulnerabilities present in their site nor can many site owners provide training to all of their users, security plugins really can help fill in the gaps that education cannot. Features such as brute force protection and others can provide a level of protection which might be just enough to keep the next opportunistic attack out. For example, I have yet to hear of a single person using [Better WP Security][1] who was compromised by the “admin” username attack even though some have admitted to me that they still use the “admin” username. Did the plugin protect them? Maybe, maybe not but at least 2 of these same users reported to me that they had seen an obscene number of lockouts of bots trying to brute-force their way into their sites.

Putting it all together it is fair to say that a good security plugin can go a long way to protect a site but nothing can overcome a user who fails to take their own security seriously or doesn’t know that they have a problem.

### So is WordPress secure?

The simplest answer I can offer here is that WordPress is only as secure as you, the user, make it. If you ignore the potential of someone hacking your site then your site will probably be hacked. If however you educate yourself on what could happen and take some basic steps to prevent it you will most likely not fall victim to the majority of attacks that make the news in the WordPress community.

 [1]: https://wordpress.org/plugins/better-wp-security/ "Better WP Security"