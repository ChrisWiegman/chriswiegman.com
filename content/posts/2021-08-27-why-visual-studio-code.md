---
title: Why Visual Studio Code
date: 2021-08-27T12:51:02+00:00
featured_image: /images/2021/08/why-vscode.jpg
draft: false
categories:
  - Technical
tags:
  - Development Tools
  - Editor
  - IDE
  - VS Code
  - VSCode
---

Prior to working at WP Engine I was a die-hard fan of JetBrain's PhpStorm IDE for WordPress code. I was such a fan that I converted many people to it since I had [started using it myself in 2014][1]. In many ways PhpStorm was the perfect code editor for WordPress code, or so I thought.

This year marks the final expiration of any JetBrains licenses I've paid for since moving to PhpStorm. I haven't really used them since 2018, though I keep re-installing PhpStorm every 6 months or so to try it again. Every time I do I just wind up back on [Visual Studio Code][2] (VS Code). Here's why.

## Price Isn't Everything

For a long time conventional wisdom was that a true IDE (VS Code is not a full IDE) was "better" for deep development work. In the WordPress world this was definitely true. The ability to easily integrate [WordPress coding standards][3] and tools like [Xdebug][4] out of the box and without a lot of fuss was so important. Editors Like Sublime Text and others could do some of this but just weren't up to the task of making development easier day in and day out. To get a "real" code editor you had to pay up and that was OK.

I say this because, as I've moved back to VS Code, I want to emphasize that it wasn't the price of the alternatives that prompted the change. I will gladly pay a small team for a quality product and would rather do so that jump on another big-tech bandwagon like VS Code. The issue is that, even a well established paid product like PhpStorm, just can't keep up with VS Code.

## I Work in More Than Just PHP

I first tried VS Code in 2018 when I started working on a project in [GoLang][5]. I bought JetBrain's GoLand IDE but it simply couldn't keep up with what VS Code could already do for free at the time. Within a few weeks I stopped opening JetBrain's IDEs and relying almost entirely on VS Code to get my work done.

Originally I planned to go back to PhpStorm when I needed to work on WordPress code or if I was to switch teams. I got the chance early last year with a new team that had me working on a mix of GoLang, WordPress plugins, Python and a few other techs. While PhpStorm could handle the WordPress code it simply couldn't handle the others.

To make it all work together I tried two approaches. First I bought the remaining JetBrains suite. With this I found myself having to switch editors far too often, even within a single project. While they had some level of settings sync it simply wasn't very good.

Next I tried IntelliJ Ultimate which attempts to allow multiple technologies within the same IDE. This was OK but still required a significant amount of configuration and caused the editor to operate almost unusably slow. This meant that, while I could technically edit all the files in any given project, I spent most of my time working out configuration bugs or just waiting for a given file to load. This wasn't a long-term solution

VS Code solved these issues. It might not go as deep in any one technology (though I think that is an arguable point today) but it could do everything I needed it to do in any of the technologies I used. As someone who strives for _simple_ in all the technologies I use, this was easily the best solution for my work. Here was one editor that really could "do it all" and could do so efficiently.

## The Ecosystem is Incredible

The real power of VS Code is that it has an extension market as versatile as WordPress' plugin market. There is seemingly nothing you can't find an extension for and, if you do find something missing, the documentation is excellent to help you write one yourself.

Today I have about 14 extensions installed in VS Code for PHP, JavaScript and managing the projects I work on. While my current work would easily fit within the scope of PhpStorm I find that, for the most part, the simpler features in the VS Code plugins do everything I need just a little better. From code formatting to linting and Xdebug to Git, everything I need is available and "just works" without any significant configuration. While I might be able to tweak these settings a bit more in PhpStorm or another editor, I am long past the days of wanting to do so. The extensions market in VS Code allows me that freedom to not worry about tweaking and to get to work on what matters, my code.

## Speed Matters

I've never been one to adopt a tool just because it opens a few seconds faster or runs an operation slightly faster than another tool that can do the same thing better, even if a little slower.

That said, I live in my code editor and today the speed difference between an IDE like PhpStorm and a code editor like VS Code is very noticeable. This past week I gave PhpStorm one last shot and within a few hours it was noticeably lagging. I grabbed a timer app and decided to try to measure the difference. I opened the same project 10 times each in VS Code and in PhpStorm. On average it took 4 seconds to be ready in VS Code and 51 seconds to be ready in PhpStorm. That's a difference that matters.

Even more than raw loading times is the effect less efficient code can have on your battery. When I try PhpStorm these days I have to have my charger handy as I'll need it in under an hour. With VS Code I can move away from my charger after lunch and still be working when I end my day at 4pm. That's a huge difference.

I used to complain about how every Mac I've used had about a 2 hour battery life. these days I notice I can easily get 3 to 4 on my work Mac. What have I changed? If I'm doing deep work the only real change is that I'm using VS Code instead of PhpStorm. While I originally hadn't noticed the difference when I switched to VS Code, in trying PhpStorm again I noticed it almost immediately. The speed and efficiency of VS Code has given me more freedom in how I work and I don't desire to go back to needing the power tether at all times.

## Just give it a try

If you haven't tried VS Code yet I invite you to do so. You can try the main version from <https://code.visualstudio.com/> or, if you want something a little less tied to Microsoft, you can try [VSCodium][6], a more open-source build of VS Code. Don't cancel your subscriptions yet when you do, just give it a try and see how it stacks up against your current editor. From someone who couldn't understand the appeal of an editor over an IDE I can say, without a doubt, you might very well be pleasantly surprised.

 [1]: /2014/05/sublime-text-to-phpstorm-why-i-switched/
 [2]: https://code.visualstudio.com/
 [3]: https://make.wordpress.org/core/handbook/best-practices/coding-standards/
 [4]: https://xdebug.org/
 [5]: https://golang.org/
 [6]: https://vscodium.com/