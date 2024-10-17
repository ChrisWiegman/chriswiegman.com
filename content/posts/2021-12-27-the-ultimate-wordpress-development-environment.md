---
title: The Ultimate WordPress Development Environment
date: 2021-12-27T14:31:11+00:00
draft: false
categories:
  - Technical
tags:
  - Development Tools
  - WordPress
---

I've spent a good part of my career building WordPress development environments. From [Primary Vagrant][1] to its Docker successor which became Ouroboros when I worked at [UF Health][2] and, finally, culminating in WP Engine's [DevKit][3] which was later cancelled after Flywheel, and consequently [Local][4], was acquired. I even spent 6 months on the local team before I decided it was time to focus on something else.

Beyond building such tools I've also used just about everything on the market including MAMP, VVV, Valet and so many other. Throughout that time it's safe to say I've formed some opinions on what such software should offer. Today I'm using Lando which is, by far, the most capable such software available today. Even it, however, has its issues that have manifested, in my experience, with issues using its upstream Docker images and horrible interactions when bringing up support issues.

That begs the question, if I was to start a new such project today, what would it include? Now that I no longer write code as part of my day job I have to admit, the idea of building the perfect tool is enticing.

So what makes the perfect WordPress development environment tool? It's a few things actually:

## It must be portable

One of the greatest failures of most of the available tools is that they're not portable. I cannot save a project configuration to my repo to have myself or a team member check it out on another machine and still be running within minutes and only a single command.

Instead what we have, for the most part, is a hodgepodge of configurations that slow down development when the environment of one team member doesn't match that of another. Maybe Xdebug fails, maybe it's a conflict with another project the dev is using, who knows? I've lost, along with my team, collective months debugging these tools across different machines and it shouldn't be like that.

The biggest counter argument I hear to this is testing. In short that the differences in environments allow for more scenarios to find bugs with the code. I disagree with this. There are numerous tools to programmatically test PHP and WordPress code in a predictable way that results in the surfacing of issues due to differences in major software such as, for example, a different PHP version.

When developers' machines differ more problems arise but, in my experience, they rarely result in better code. Instead they result in downtime for a developer and, in the worst scenarios, the whole team as ghost bugs are "found" due to a forced or other configuration change that isn't really a bug at all.

Portability is important because the ability to predictably run, test and debug code is what keeps a team moving forward. Once the environment the code runs in becomes unpredictable the chances of improving the quality of the code developed by the team tends to fall apart pretty quickly.

## It shouldn't need a GUI

First, this is personal preference.

In my experience, the GUI added to most of these apps is, at best, bloat and, at worst, a hinderance to getting work done in a timely manner.

I currently use Lando, which is a wrapper for Docker. Docker on Mac is bad enough in that it has to be launched as a separate application to get it going. I miss the days of Linux where, once installed, Docker was just there and available (and without the FS and other abstractions but, that's for a whole other post).

The strength of DevKit and Lando was it didn't need this fluff to get going. Today I just copy in a single config file to a given plugin or theme and I can be up and running in Lando with just a few simple commands.

Running via CLI also plays into the portability of the environment. Though it doesn't have to be this way, I've yet to find a GUI dev environment that allows a user to export a projects configuration to the project itself. Text-based tools tend to use simple, text-based configurations making them not just more efficient, but more portable as well.

## Not all WordPress projects are sites

Other than my own site, in which I'm only working on the theme or single plugin at any given time, the work I do in WordPress is almost entirely in building plugins, not sites. Most development environment tools don't understand this.

If you're working on a theme or a plugin you should be able to go into that theme or plugin as a first-class project, not a folder deep down in some development WordPress site.

I've worked with mentoring many developers over the years who wind up with problems simply because it is so hard for most development environments to understand this. As a result they have multiple, conflicting projects in a single WordPress site and, often, little in the way of modern dev tools to debug them.

Your development environment shouldn't care if you're working on a theme, a plugin or a full site. Open up its folder, run your command to get it started and, you're done. You should have a fully isolated site without digging down through a WordPress site folder to work on your code.

## It should be customizable

Finally, a good WordPress development environment should be customizable. This is particularly important when working on enterprise-level projects where the production environment is known. More than changing the PHP or MySQL versions this means you should be able to match, as closely as possible, your environment and that of your whole team to what the project will actually run in.

I've seen more than one WordPress project run into problems in higher-ed and elsewhere due to unique requirements of the servers it must run on. It might be an obscure PHP module or other config item or even something as simple as PHP functions that are unavailable due to security configs. If you can't replicate that locally your development environment has failed you.

## So what's the point?

So what's the point of all of this? Look at your dev environment. If you have to switch computers or if you decide to work on it with someone else can you do so quickly and without introducing new problems due to a highly delicate setup?

What about computer resources? Do you find yourself shutting down one project to work on another (Docker RAM issues notwithstanding)?

Can you ensure multiple projects aren't conflicting with each other due to the limited capabilities of your development environment?

I would be at least one of these areas is a problem, even if it's a problem you've learned to live with. I still see it even with my chosen environment, Lando, which crosses off the most boxes for me so far.

If I was to start a new tool today it would be CLI tool geared towards professional WordPress developers and teams who need to build fast, secure WordPress code without spending the bulk of their time on the local dev environment. It seems that, at least in most cases, developers can choose either a fast setup or a full set of scalable tools to help build a site quickly. Oh how I look forward to a tool someday that can do both.

## What are you using?

So what are you using for your WordPress development environment? Are you happy with it? Could you be up and running in minutes if you switched to a new computer or could you onboard a green dev to the project quickly?

There are a lot of shortcomings in the WordPress development environments today, even after more than a decade of development on many of these tools. What are the shortcomings with yours?

 [1]: https://github.com/chriswiegman/primary-vagrant
 [2]: https://ufhealth.org
 [3]: https://wptavern.com/wp-engine-launches-devkit-open-beta
 [4]: https://localwp.com