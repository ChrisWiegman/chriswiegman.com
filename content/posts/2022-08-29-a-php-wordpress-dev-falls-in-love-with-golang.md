---
title: A PHP (WordPress) Dev Falls in Love with GoLang
date: 2022-08-29T12:26:44+00:00
categories:
  - Technical
tags:
  - Development
  - Development Tools
  - GoLang
---

It's been a long time since I've written about GoLang. [Last time I did so][1], over 3 and a half years ago, I was still picking it up for my work on [DevKit][2] at [WP Engine][3]. Unfortunately that project was ended not long after that post was written when WP Engine bought Flywheel and, thus, [Local][4].

As I get back into my own personal projects one of the things I've had to think about is what I _want_ to work on these days. While I still have some thoughts about a WordPress plugin I would like to build, these days working in WordPress and even PHP really isn't high on my list of "interesting" prospects. Instead I've gone back to working with [GoLang][5] (Go) and I'm loving every minute of it.

## What is Go?

Go, if you haven't used it before, is a new-ish program language designed to make building applications easy. We had used it for DevKit because it was particularly good at building performant CLI application that could easily be compiled across any operating system.

In other words, Go is fast, easy and has available a robust library of packages that make writing apps easy.

## Why Go (and not something else)?

If you had asked me what I would want to work in 5 years ago I would have probably still said PHP. At the time it was still fun, even if the PHP code I was working with for WordPress was starting to show it's age.

Since PHP 8.0 I feel like a lot of the "fun" that had attracted me to PHP, namely that I wasn't spending all my time fighting with the language and tools instead of my own code, is mostly gone. Today nearly all my basic tools such as the WordPress coding standards and even WordPress itself still require workarounds to get working in the latest versions of PHP. For example, if I want to use the [WordPress Coding Standards][6] I have to downgrade the default PHP version that [Homebrew][7] installs with [Composer][8] to 8.0 to get it to work at all, a simple but annoying workaround that I have to remember when I setup a new project.

Even my WordPress site, which I've historically been proud of keeping on the latest version of WordPress, still isn't running on 8.1 almost a year after its release. My host doesn't even offer it as an option and WordPress is not officially compatible with it which can lead to issues with various plugins and themes.

I could use Node, as I've done a lot of hackathon-level cli projects in it, but maintaining a Node project long-term isn't something I care to do as I find the JavaScript ecosystem a living nightmare of package incompatibilities and other issues due to every developer seemingly wanting to reinvent the wheel for their own work.

I've thought of doing some work in Rust but, for fun CLI projects that I would like friends to be able to run, it seems like overkill. I might revisit it on other things in the future but, not for now.

Contrary all the alternatives Go is simple, performant, scalable and, as is important for a side project, actually fun to work with.

Is my Go code stellar? No. I still consider myself a WordPress developer transitioning to the language and I'm sure it shows. But it's fun. As soon as I open the project on a new computer all I need is VSCode with the Go extension and it prompts me to install all the dev tools I could possible want. I can find libraries for anything complex I need to do and using all of it together doesn't take more of my time than the code itself.

There's a lot of reasons to choose a particular tech for a project these days but one I don't hear enough is the development experience. On that Go is definitely superior than any of the alternatives I've considered lately and that makes it the perfect language for what I want to work on.

 [1]: /2019/01/3-lessons-for-a-php-developer-working-in-golang/
 [2]: https://wptavern.com/wp-engine-launches-devkit-open-beta
 [3]: https://wpengine.com
 [4]: https://localwp.com
 [5]: https://go.dev
 [6]: https://github.com/WordPress/WordPress-Coding-Standards
 [7]: https://brew.sh
 [8]: https://getcomposer.org