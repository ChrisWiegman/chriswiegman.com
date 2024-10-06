---
title: Debugging Google AMP
type: post
date: 2016-06-02T04:00:00+00:00
url: /2016/06/debugging-google-amp/
featured_image: /images/2016/06/Debugging-Google-AMP.jpg
categories:
  - Technical
tags:
  - Google

---
There’s a lot of talk about <a href="https://www.ampproject.org" target="_blank" rel="noopener noreferrer">Google’s Accelerated Mobile Pages (AMP)</a> lately and a lot of developers rushing to catch up as it starts to make an impact on their sites and search rankings. One thing many aren’t doing however is really paying attention to the details of their code resulting in problems and other bugs that break the new format.
At it’s heart AMP is straightforward using mostly HTML to cache simple content for Google. The details of that simple HTML however aren’t as easy as everything from scripts to poorly encoded links and ads can break the page.

This doesn’t need to be the case.

Here’s the thing… Debugging Google AMP pages and getting the data you need out of them is simple.

## Here’s what you need to do:

1.) Turn on debugging mode.

_[your url]/**#development=1**_

Simply adding _#development=1_ to the end of your URLs will show you all the problems as well as some additional information on your Google AMP content. Added a bad tag or parameter? Debugging mode will let you know where so you can fix it before Google sees it.

2.) Open your browser’s developer tools. I’ve tried it with Safari and Chrome and it should work in any modern browser. Just go to the console view.

That’s really it. AMP’s built-in validation will make sure that your AMP content is really ready for prime-time.