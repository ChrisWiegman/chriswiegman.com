---
title: 'generator-wp: A WordPress Project Generator'
type: post
date: 2021-11-08T13:14:05+00:00
url: /2021/11/generator-wp-a-wordpress-project-generator/
featured_image: /images/2021/11/generator-wp-a-wordpress-project-generator.jpg
categories:
  - Technical
tags:
  - Development Tools
  - Plugin
  - WordPress

---
Spinning up a new WordPress project is a pain. From the tooling around it to finding a consistent development environment can often feel like an exercise in futility. It doesn't have to be this way.

This past weekend I refactored and relaunched a project I started working with during my days at the University of Florida. [Generator-wp][1] is a [Yeoman][2] generator that will create either a basic WordPress site or a starter plugin to get a new project running in the shortest amount of time for teams with any level of WordPress experience.
## What makes a good WordPress project generator? {#h-what-makes-a-good-wordpress-project-generator.wp-block-heading}

The needs of everyone may differ but, from my experience on numerous teams across the WordPress spectrum there are a few things that can really make all the difference when getting started with a new WordPress project.

### A stable development environment

First and, in my experience, most important is a stable development environment. I've worked with many teams that have limited WordPress experience where even the simplest plugin or theme can quickly get derailed while the team tries to figure out how to work on it.

While there are a number of tool choices to build your development environment on I've settled, for now, on [Lando][3]. It is essentially a [Docker][4] wrapper that makes running multiple sites very and, most importantly, portable. Simply checking a project out, installing minimal dependencies (Lando and Docker) and running a _start_ command is enough to get a project running.

### Basic tooling

Once a project is running locally it should provide a basic and standardized set of tooling to perform common tasks including starting, stopping, step-debugging and other basic functionality.

Generator-wp addresses basic tooling with a few features. First, it uses a [Makefile][5] to handle the project itself. Start, stop, destroy, open and more are self-contained and can get a project going fast.

Next is [Xdebug][6], a debugging tool for PHP that is packaged and configured with your new project so that stopping on a line of code is as easy as setting your breakpoint and pressing _run_ within [VSCode][7].

Speaking of VSCode, I've even included a set of recommended extensions so that everyone working on the project will have a standardized set of extensions to make development in VSCode that much easier.

Static analysis is also included and configured to the [WordPress Coding Standards][8] so that your IDE will automatically help you find and fix issues that could lead to bugs and other problems later. There's even a [GitHub Actions][9] configuration to make sure no errors escape your notice once you push to GitHub.

### Enough code to get started

Once we get code running and our tooling setup it's time to actually start writing code. WordPress plugins can differ in their approach here in many ways but there are a few things that can make getting started easier.

Generator-wp creates the main plugin file and populates it with an auto-loader to make adding more PHP code easier. It also initializes internationalization, adds the proper plugin headers and gives you an uninstall.php file to make sure you remember to [clean up after yourself if someone uninstalls your plugin][10].

### A base to start testing

Finally, WordPress testing can be daunting for many. As a result I've added basic [PHPUnit][11] tests for the autoloader which will make extending your test suite easy as you build your plugin. These can run in a make command and will run automatically when you push to GitHub via GitHub actions.

## Where is this project going?

So where is this project going? For that matter, why this over many of the other starter plugins already available?

There's a few answers to both of this questions but let's start with the why this question. Most plugin scaffolds are opinionated well beyond the "getting started" stage while not including much in the way of basic tooling, especially around the development environment. I've built this project up to address all of that with a consistent set of tooling so switching projects won't require re-learning a whole new set of commands to make things work.

To put it simply this solves my own need of building numerous small plugins for various applications. Generator-wp simply makes doing so much easier by ensuring I can focus on the code and not on the development environment and other tooling around it.

As to where it's going, I have a few ideas there too. I'm currently working on adding proper acceptance testing with Codeception. This will address the long-time need for actually testing plugins in a reproducible way and the way users experience them. After that I plan to expand to plugin components such as blocks, custom post types and more as the need and time arises.

## Try it today

Are you looking for a way to build a plugin without the hassle? [Checkout generator-wp][1] and give it a shot. It might just make your development experience that much easier.

**[Generator-wp on GitHub][1]**

 [1]: https://github.com/chriswiegman/generator-wp
 [2]: https://yeoman.io
 [3]: https://lando.dev
 [4]: https://www.docker.com
 [5]: https://en.wikipedia.org/wiki/Make_(software)#Makefile
 [6]: https://xdebug.org
 [7]: https://code.visualstudio.com
 [8]: https://developer.wordpress.org/coding-standards/wordpress-coding-standards/
 [9]: https://github.com/features/actions
 [10]: /2012/04/wordpress-plugin-developers-clean-up-after-yourself/
 [11]: https://phpunit.de