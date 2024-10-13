---
title: Standardizing Our WordPress Plugin Development
date: 2017-12-14T00:00:00+00:00
categories:
  - Technical
tags:
  - Development Tools
  - WordPress
---

We write a lot of plugins at work. On average I seem to build one or two a month myself and I’m one of a team of developers working on our site. With that much code getting built keeping all that code maintainable can be quite a chore. To make that chore a bit easier I’ve introduced the team to WordPress coding standards and other tools but it can still be a challenge to keep all the plugins organized.

## Enter [Yeoman][1]

Yeoman is a scaffolding tool I was first introduced to during my tenure at [10up][2] who used it in a very similar fashion as what I needed. It creates a WordPress plugin that can be activated and comes complete with a Grunt build for handling assets, a base for PHP unit tests and enough other standards and tools to completely remove the burden of spinning up a project from our developers.

Now, instead of starting each plugin from scratch, we simply type _yo wp:plugin_, answer a few questions such as the name of the plugin, the plugin description and other basic information and we’re ready to start developing in a scaffold complete with all the tools to help make sure the code is both well organized and of top quality.

Looking to do something similar yourself? [We’ve shared our code on GitHub. Take a look and feel free to use it as a base for your own plugins.][3]

 [1]: http://yeoman.io/
 [2]: https://10up.com/
 [3]: https://github.com/UFHealth/generator-wp