---
title: This Site Now Runs on Hugo
date: 2024-10-25T00:00:00+00:00
featured_image: /images/2024/10/this-site-now-runs-on-hugo.png
draft: true
categories:
  - Technical
tags:
  - Blogging
  - Web Development
  - Hugo
---

As of this past weekend I’ve completed migrating this site from WordPress to [Hugo](https://gohugo.io).

This isn't the first time I've made the switch to Hugo. [In 2019 I moved it from WordPress to Hugo](/2019/08/its-time-for-a-new-site/) only to go [back to WordPress in 2020](/2020/08/hello-wordpress-my-old-friend/).

So why go back to Hugo now? Frankly, because *I no longer have to run WordPress for work*.

When I moved back to WordPress in 2020 I justified it with a lot of rationalization, particularly around content management, but if I'm really honest with myself my reasons then were just that, rationalization. I really moved back to WordPress, instead of trying to find a better workflow with Hugo, because I worked for a WordPress host and needed to use it for that.

The truth is, not only do I not need WordPress for this site but I don't really want it either. Six or more years since its launch the Block Editor is still horrible to use for blogging and WordPress itself isn't something I would really describe as a content management system anymore. It's a design or layout management system that can do an adequate job at content. With my site theme using absolutely no JavaScript in WordPress (it now uses some to power its search in Hugo) WordPress got in my way more than helped me.

I wanted to like WordPress. I spent a lot ot time trying to make it work for me, but that turned out to mostly be a fool's errand. Editing anything but paragraphs in the block editor could just lead to a mess of extra mark-up all-too quickly and would often break with new versions of WordPress or even just a plugin. As I painstakingly moved all my posts, 1 by 1, to this site I quickly saw just how bad the editor was at mangling everything from images to simple lists. I don't need any of that.

## Why Hugo?

I've been digging [Astro](https://astro.build) for the last year or so, even using it in some work projects, but Hugo just makes more sense for me. I'm not updating dependencies daily. I'm not dealing with a ton of JavaSCript bloat on the site output and I can do literally anything I want to do with it.

The only issue I really have with Hugo is organizing my posts, at least the way I have them today, isn't all that great of an experience with about 700 of them in a single folder. With a little bit of time, however, I think I'll fix that too.

For now I was able to do a direct port of my WordPress theme to this site with almost zero noticeable changes other than a few improvements. Over time I'll change things up a bit but I'm really happy how easy it was to port what I already had. I can also edit the site easily with any of my laptops or even my iPad. That's a huge workflow improvement compared to the last time I used Hugo and I'm really happy with the editing experience so far.

In the end, Hugo is a simpler system that manages my content just as well as WordPress without all the bloat and annoyance of the block editor. That's really all I need these days.