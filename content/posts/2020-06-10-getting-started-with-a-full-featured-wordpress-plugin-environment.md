---
title: Getting Started With a Full Featured WordPress Plugin Environment
date: 2020-06-10T15:19:00+00:00
featured_image: /images/2020/08/getting-started-with-a-full-featured-wordpress-plugin-environment.png
categories:
  - Technical
tags:
  - Development Tools
  - WordPress
---

Finding the perfect WordPress development workflow is hard, especially if you’re a plugin developer. Most tools available assume that you’re building out a full WordPress site at best and far too many of those leave out critical aspects of workflow such as debugging tools, performance tools and more.
I’ve spent most of the last decade working on this problem. From [Primary Vagrant][1] to WP Engine’s DevKit (which is no longer available) and a host of projects in and around both I’ve been rather obsessed with the perfect workflow.

What makes the perfect workflow?

1. It has to be reproducible. This means that I don’t want to spend hours or more spinning it up on a new computer of my own and I want to be able to easily share it with any team I might be working with.
2. It has to be plugin-centric. I’m rarely building full sites. I’m building plugins. This means that, in most cases, WordPress core is a dependency, not the primary package and this should be reflected in my development environment.
3. It should be flexible. I want to test plugins in multiple PHP versions and other variations on my environment. More importantly, I want to be able to build other projects, whether WordPress or something else, without having to build out completely new tooling. I jump between far too many projects to want to deal with learning a different tool for each so this is key.

Given these requirements, I’ve developed a starter WordPress plugin that uses [Lando][2] and [Visual Studio Code][3] to get started building a plugin fast and, once started, can simply be checked out on any of my computers so I can continue development in a matter of a few minutes, no matter where I am.

**Clone my starter plugin here**

## Getting started with my starter plugin

To get the most out of my starter plugin you’ll want to download and install 3 dependencies on your workstation:

1. [Docker](https://www.docker.com/)
2. [Lando](https://lando.dev)
3. [Visual Studio Code](https://code.visualstudio.com/)

Once installed, clone the starter plugin

``` bash
git clone https://github.com/ChrisWiegman/wordpress-plugin-starter.git
```

Then switch to the directory

``` bash
cd wordpress-plugin-starter
```

And setup your site

``` bash
make -s start
```

The first start will take a few minutes but, when it’s done, you should be able to access your development site at _**wordpress-plugin-starter.lndo.site**_.

## Features of the starter plugin

1. Xdebug with Visual Studio Code integration built-in
2. All plugin code can be developed in the `plugin/` sub-folder of the project. No sorting project and other files
3. Internationalization and JavaScript compression via Gulp
4. A PHP autoloader to make loading all your plugin classes easy
5. Unit testing with PhpUnit along with a starter test
6. PHP_Codesniffer with WordPress sniffs pre-configured
7. JavaScript linting with jshint already configured for WordPress
8. Debug Bar and Query Monitor are automatically installed and configured
9. Deploy your plugin by simply deploying the `plugin` folder. No cleanup required
10. Add your own plugin dependencies easily such as WooCommerce or others
11. Test email sending in your plugin with Mailhog
12. All features can be easily triggered or modified with Make

Sound good? The only thing you’ll need to do for your own project is change the names throughout the code and you’re good to go.

 [1]: https://github.com/ChrisWiegman/primary-vagrant
 [2]: https://lando.dev
 [3]: https://code.visualstudio.com/