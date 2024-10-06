---
title: Getting Started With a Full Featured WordPress Plugin Environment
type: post
date: 2020-06-10T15:19:00+00:00
url: /2020/06/getting-started-with-a-full-featured-wordpress-plugin-environment/
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

<ol class="wp-block-list">
  <li>
    It has to be reproducible. This means that I don’t want to spend hours or more spinning it up on a new computer of my own and I want to be able to easily share it with any team I might be working with.
  </li>
  <li>
    It has to be plugin-centric. I’m rarely building full sites. I’m building plugins. This means that, in most cases, WordPress core is a dependency, not the primary package and this should be reflected in my development environment.
  </li>
  <li>
    It should be flexible. I want to test plugins in multiple PHP versions and other variations on my environment. More importantly, I want to be able to build other projects, whether WordPress or something else, without having to build out completely new tooling. I jump between far too many projects to want to deal with learning a different tool for each so this is key.
  </li>
</ol>

Given these requirements, I’ve developed a starter WordPress plugin that uses [Lando][2] and [Visual Studio Code][3] to get started building a plugin fast and, once started, can simply be checked out on any of my computers so I can continue development in a matter of a few minutes, no matter where I am.

**Clone my starter plugin here**

## Getting started with my starter plugin {#getting-started-with-my-starter-plugin.wp-block-heading}

To get the most out of my starter plugin you’ll want to download and install 3 dependencies on your workstation:

<ol class="wp-block-list">
  <li>
    <a href="https://www.docker.com/">Docker</a>
  </li>
  <li>
    <a href="https://lando.dev">Lando</a>
  </li>
  <li>
    <a href="https://code.visualstudio.com/">Visual Studio Code</a>
  </li>
</ol>

Once installed, clone the starter plugin

<pre class="wp-block-code" aria-describedby="shcb-language-110" data-shcb-language-name="Bash" data-shcb-language-slug="bash"><span><code class="hljs language-bash">git &lt;span class="hljs-built_in">clone&lt;/span> https://github.com/ChrisWiegman/wordpress-plugin-starter.git</code></span><small class="shcb-language" id="shcb-language-110"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">Bash</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">bash</span><span class="shcb-language__paren">)</span></small></pre>

Then switch to the directory

<pre class="wp-block-code" aria-describedby="shcb-language-111" data-shcb-language-name="Bash" data-shcb-language-slug="bash"><span><code class="hljs language-bash">&lt;span class="hljs-built_in">cd&lt;/span> wordpress-plugin-starter</code></span><small class="shcb-language" id="shcb-language-111"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">Bash</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">bash</span><span class="shcb-language__paren">)</span></small></pre>

And setup your site

<pre class="wp-block-code" aria-describedby="shcb-language-112" data-shcb-language-name="Bash" data-shcb-language-slug="bash"><span><code class="hljs language-bash">make -s start</code></span><small class="shcb-language" id="shcb-language-112"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">Bash</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">bash</span><span class="shcb-language__paren">)</span></small></pre>

The first start will take a few minutes but, when it’s done, you should be able to access your development site at _**wordpress-plugin-starter.lndo.site**_.

## Features of the starter plugin {#features-of-the-starter-plugin.wp-block-heading}

<ol class="wp-block-list">
  <li>
    Xdebug with Visual Studio Code integration built-in
  </li>
  <li>
    All plugin code can be developed in the <code>plugin/</code> sub-folder of the project. No sorting project and other files
  </li>
  <li>
    Internationalization and JavaScript compression via Gulp
  </li>
  <li>
    A PHP autoloader to make loading all your plugin classes easy
  </li>
  <li>
    Unit testing with PhpUnit along with a starter test
  </li>
  <li>
    PHP_Codesniffer with WordPress sniffs pre-configured
  </li>
  <li>
    JavaScript linting with jshint already configured for WordPress
  </li>
  <li>
    Debug Bar and Query Monitor are automatically installed and configured
  </li>
  <li>
    Deploy your plugin by simply deploying the <code>plugin</code> folder. No cleanup required
  </li>
  <li>
    Add your own plugin dependencies easily such as WooCommerce or others
  </li>
  <li>
    Test email sending in your plugin with Mailhog
  </li>
  <li>
    All features can be easily triggered or modified with Make
  </li>
</ol>

Sound good? The only thing you’ll need to do for your own project is change the names throughout the code and you’re good to go.

 [1]: https://github.com/ChrisWiegman/primary-vagrant
 [2]: https://lando.dev
 [3]: https://code.visualstudio.com/