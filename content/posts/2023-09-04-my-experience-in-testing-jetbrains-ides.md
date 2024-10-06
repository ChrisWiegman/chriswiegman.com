---
title: My Experience in Testing JetBrains’ IDEs
type: post
date: 2023-09-04T11:02:37+00:00
url: /2023/09/my-experience-in-testing-jetbrains-ides/
categories:
  - Technical
tags:
  - Development Tools
---

After a week of using [JetBrains][1] IDEs for all of my code I've decided to stay with [Visual Studio Code][2]. Frankly, the end result of my experiments is a bit surprising to me but there are a few reasons why VSCode really is the best editor for me right now and I'm OK with that.

## JetBrains Makes Great IDEs

First, I want to acknowledge just how good the JetBrains editors really are. There's a reason they're so well respected and it didn't take me long to remember that this week.

Where JetBrains really shines today, in my opinion, is their code inspections. I use a number of static analysis tools on all my primary projects and JetBrains still found things they couldn't pick up. For example, I use Go for many of my side projects and it is a common pattern to use _defer f.Close()_ in Go programs where the code is making sure a file or something else you've opened actually gets closed when you're done. It works but GoLand pointed out that I could [do it better][3], something that made perfect sense on seeing it but had never been noticed even with my heavy config for Go's own linting tools.

That's just one example, but there were a dozen or more minor issues that JetBrains found in my projects and I just hadn't thought about. They don't really change much (my existing code worked fine) but they are improvements all the same and I don't know of another tool that can find the same issues.

Beyond the code, the new UI in all of JetBrains' IDEs looks great. It clearly takes a lot of inspiration from VSCode and I'm fine with that. They're clean, modern and far less cluttered than the UI was when I lasted used PhpStorm in 2018 which made for a very welcome change.

## VSCode is Still Better for Me

All that said, today VSCode is still the better editor for me.

Where VSCode still really outshines JetBrains is in its ability to manage projects across technologies from a single app. I thought maybe this wouldn't be a big deal these days but I was wrong and this advantage found me back in VSCode quite regularly, even as I was testing JetBrains.

The bulk of the code I work on is in a handful of techs including Go, PHP (WordPress), JavaScript and even some Rust. VSCode doesn't care and I can work on all of this together. In GoLand, where I did the bulk of my work last week, my primary project has a few files in PHP and the IDE was constantly reminding me that I needed and entirely different application to work on these files effectively. This got annoying very quickly and, in the end, just wasn't something I could work around.

To make JetBrains replace VSCode I actually needed 3 IDEs installed this week (and would probably need a 4th had I done any work in Rust). I needed Fleet to work on some general code, PhpStorm for PHP and JavaScript work and GoLand for my primary side project right now, [Kana][4]. In fact I needed 2 of these, PhpStorm and GoLand, for Kana because the project has a PHP file in the midst of all its Go code.

In addition to 3 JetBrains IDEs I also found myself playing games with nano and vim to work around another feature missing from JetBrains, the ability to save a file as admin when needed. In this case I was editing my laptops _/etc/hosts_ file and realized that, while VSCode handles this fine, I had to open up a completely different editor as JetBrains' products couldn't do it.

Taken together, these issues mean it just doesn't make sense for me to switch back to JetBrains' products right now. They're great and powerful but their insistence in giving each tech its own product just added too much cruft to my workflow.

## I Learned a Lot about VSCode

After a week of experimentation I can feel a lot better about my editor of choice. Not just because it handles multiple techs better than JetBrains but also because I learned a lot about VSCode itself and managed to re-think a lot of my settings and plugins in the process.

Every time I found something new and novel in JetBrains I looked for a way to do it in VSCode and the latter's marketplace did not disappoint. In fact the only thing, in the end, I couldn't reproduce at least as effectively in VSCode was JetBrains' code inspections but that I'm willing to do without.

In the future I think JetBrains still offers a lot of possibility, even for my own workflow. Their answer to VSCode, a product Fleet, isn't ready yet but shows a lot of promise for the future. In addition, while I'm working as something of a polyglot today that hasn't always been the case and it might not be the case again in the future. If I was to go back to doing nearly all my code in a single tech I would definitely look back at JetBrains' offering and integrate it into my work. For now, though, I think I'm pretty happy with where everything has wound up today.

 [1]: https://www.jetbrains.com/
 [2]: https://code.visualstudio.com/
 [3]: https://www.sobyte.net/post/2022-01/golang-defer-file-close/
 [4]: https://github.com/ChrisWiegman/kana/