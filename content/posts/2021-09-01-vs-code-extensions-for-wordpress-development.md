---
title: VS Code Extensions for WordPress Development
type: post
date: 2021-09-01T14:04:29+00:00
url: /2021/09/vs-code-extensions-for-wordpress-development/
featured_image: /images/2021/08/vs-code-extensions-for-wordpress-development.jpg
categories:
  - Technical
tags:
  - Development Tools
  - JavaScript
  - PHP
  - Tools
  - VS Code
  - Web Development

---
Last week I wrote about [why I switched to Visual Studio Code (VS Code)][1] from JetBrains' products. As I said in that post, the real strength of VS Code lies in its [extension library][2].

Of course, that statement isn't helpful without a list of extensions to get started. Below is a list of the extensions I have currently installed in VS Code as of this writing. I do want to note that, in practice, my list changes quite a bit depending on what I'm working on. My current work is entirely WordPress focused and, as a result, so are most of my extensions.
## Extensions for all projects

These are the extensions I use across tech stacks. One of the reasons I've moved to VS Code is its versatility compared to alternatives like PhpStorm and others. I can use it for GoLang, PHP, WordPress, Python or anything else. Regardless of what I'm working in though, these are the extensions I make sure I always have installed.

### [Git Graph][3]

This extension displays a visual history of your Git repository. It's incredibly helpful on my current team of 6 engineers as we tend to have a lot of work going at any given time. This allows me to visualize all that work and trace the history of various features we have in flight.

### [Git History][4]

This allows me to see the history of individual files in my repository.

### [GitLens][5] {#h-gitlens.wp-block-heading}

This extension works with Git Graph and Git History to allow VS Code to be a full-featured Git GUI client. At one point in my career I had moved to doing most of my Git work on the command line, but no more. Now I find it faster to just use my editor and, with GitLens and the rest, I find it to be as powerful as any purpose-built tool I've used in the past.

### [Import Cost][6]

This extension tells you how big any given JavaScript dependency is upon import allowing a visual reminder that no package is "free."

### [One Dark Pro][7]

One Dark Pro is my theme of choice. It's pleasant to look at and minimal, just how I like it.

### [Settings Sync][8]

While VS Code has a built-in settings sync now I've stuck with this after using it since moving to VS Code. It's fast, reliable and relies on a GitHub Gist to save your settings and extensions. If you want to either backup your settings or if you use more than one computer it is a must-have.

### [Sort JSON Objects][9]

This extension simply satisfies my need to keep JSON files appropriately sorted. I use it on my VS Code settings and numerous settings and other files to simply make them easier for me to read and find what I need.

### [Spell Right][10]

This spell-check extension works great on both Mac and Linux. Spell checking is always a problem in code editors as acronyms and other syntax tends to create too many false positives. Spell Right seems to do a descent job of balancing those while still keeping my writing from becoming a mess.

### [Version Lens][11]

I try to keep dependencies up to date in most of the projects I work on. This makes that easier by helping find updates in popular package managers like composer and others.

## Extensions for WordPress projects

The following extensions are what I use for my current WordPress work. They help me write more efficient PHP and navigate the WordPress code base with a minimum of problems.

### [Document This][12]

As I need to more JavaScript in WordPress these days, this extension helps me keep up with the documentation of any new code. It does a great job of automagically generating documentation for both JavaScript and TypeScript files.

### [ESLint][13]

As the name implies, this is a simple ESLint integration for VS Code.

### [PHP Debug][14]

Xdebug integration for PHP. This provides step debugging, tracing and other common tools to make working in PHP much easier.

### [PHP DocBlocker][15]

This provides basic PHP documentation functions which helps make sure I don't forget documentation and simply makes writing such documentation a little faster.

### [PHP Intelephense][16]

This extension provides the "magic" for PHP work. It handles code completion, referencing and all the common functions you might want to use an IDE for. It's so good that I paid the whole $12 to upgrade to the pro version. I will also add, that while it is good, it isn't as complete as the feature set offered in PhpStorm but the agility of the VS Code platform more than makes up for that.

### [PHP Sniffer][17]

This provides PHP_CodeSniffer integration for all my PHP work. While there are other, similar plugins in the repository this one I've found to be the most reliable for both sniffing and fixing any issues encountered. I pair it with the WordPress Coding Standards to take a lot of the mental load of syntax and other similar issues off my plate.

### [Prettier &#8211; Code Formatter][18]

PHP Sniffer handles formatting PHP code. Prettier handles formatting JavaScript code and does an excellent job at it.

### [WordPress Hooks IntelliSense][19]

WordPress' hook system is extensive. This extension makes using it a little bit easier by offering autocomplete functionality for WordPress' core actions and filters.

## An evolving landscape

One important point I want to re-iterate is that, due to the nature of VS Code extensions, I find my list of installed extensions constantly evolving. That said, if you have other extensions for the above features or more features I haven't even thought of, please do share them in the comments!

 [1]: /2021/08/why-visual-studio-code/
 [2]: https://marketplace.visualstudio.com/vscode
 [3]: https://github.com/mhutchie/vscode-git-graph
 [4]: https://github.com/DonJayamanne/gitHistoryVSCode
 [5]: https://github.com/eamodio/vscode-gitlens
 [6]: https://github.com/wix/import-cost
 [7]: https://github.com/Binaryify/OneDark-Pro
 [8]: https://github.com/shanalikhan/code-settings-sync
 [9]: https://github.com/richie5um/vscode-sort-json
 [10]: https://github.com/bartosz-antosik/vscode-spellright
 [11]: https://gitlab.com/versionlens/vscode-versionlens
 [12]: https://github.com/oouo-diogo-perdigao/vscode-docthis
 [13]: https://github.com/Microsoft/vscode-eslint
 [14]: https://github.com/xdebug/vscode-php-debug
 [15]: https://github.com/neild3r/vscode-php-docblocker
 [16]: https://github.com/bmewburn/vscode-intelephense
 [17]: https://github.com/wongjn/vscode-php-sniffer
 [18]: https://github.com/prettier/prettier-vscode
 [19]: https://github.com/johnbillion/vscode-wordpress-hooks