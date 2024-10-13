---
title: Bye Bye Gulp, Thanks for All the Help
date: 2022-08-01T12:34:28+00:00
categories:
  - Technical
tags:
  - Development Tools
  - JavaScript
  - Sass
---

I've been using JavaScript task runners for my WordPress plugins and themes for a very long time. Considering my needs have always been simply to compile a bit of [Sass][1] and shrink my simple JS files they were perfect for ensuring everything was where it needs to be and was as efficient as possible.

I think I started with [Grunt][2] around 2012 or 2013 when I first started using Sass. At the time it seemed incredibly advanced to have to configure a tech to process a few dozen kb of, essentially, text files but Sass did make my life easier so I learned to use and invested a considerable amount of time in a Grunt configuration that worked for me.

Grunt stagnated for a lot of years but it still worked for me. When it looked like all hope was lost on it being maintained I jumped to [Gulp][3] around 3 or 4 years ago for the same purposes. Like Grunt I simply needed to process some basic JS and Sass files and Gulp allowed me to do so efficiently and safely.

Today I stopped using either on this site. Gulp, like Grunt, hasn't been actively maintained for quite some time. For the most part, however, it still worked for me even as npm started reporting more and more vulnerabilities. The final straw came a week or two ago when an update to the [del][4] package broke it entirely for Gulp while another package insisted on having the new version.

It was time to move on.

Today I moved this site to a few [simple npm scripts][5] for handling the Sass on it (I didn't need to move any JS processing as there is no JS on this site). I wouldn't call what I have the most efficient, yet, but it's a start and it both eliminated the npm audit warnings as well as the conflict I was having with the del package. As an added bonus it even shrunk the production css by another 5% or so. I'll call that a win.

Next up I need to update my [generator-wp][6] package to make use of the new tooling. This will ensure that a few plugins I want to start work on are using the newer tooling as well.

Both Grunt and Gulp may be a bit obsolete today but they were great tools for this site and more for over a decade. There aren't many techs around, especially in the JavaScript world, that I can say that about.

So long, Grunt and Gulp, and thanks for all the help!

 [1]: https://sass-lang.com
 [2]: https://gruntjs.com
 [3]: https://gulpjs.com
 [4]: https://www.npmjs.com/package/del
 [5]: https://github.com/ChrisWiegman/chriswiegman-theme/blob/main/package.json#L27
 [6]: https://github.com/chriswiegman/generator-wp