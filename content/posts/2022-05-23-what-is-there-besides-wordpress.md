---
title: What Is There Besides WordPress?
type: post
date: 2022-05-23T12:34:01+00:00
url: /2022/05/what-is-there-besides-wordpress/
categories:
  - Technical
tags:
  - Blogging
  - Content Management
  - Content Management Systems
  - Web Development
  - WordPress

---
I tried to step away from WordPress once. [In 2019 I moved this site to Hugo][1]. I was looking for a simpler workflow and more performant site but, while I found the latter, maintaining it was anything but simple and [I wound up back on WordPress][2] just a year later.

Today I find myself generally content with WordPress but, after two years of using it again, I find myself once again looking for alternatives that are more performant with a simpler workflow.

## What's wrong with WordPress? {#h-what-s-wrong-with-wordpress.wp-block-heading}

My whole tech career has been in WordPress. It's a very flexible piece of software that is great for making a wide range of sites. While its approach is great for many use cases, my use case of a simple static blog with well structured content, is no longer really one of those.

This site, like many blogs, has posts and pages but it also has events, talks and locations (which are used to make my speaking page). It doesn't use comments, analytics, forms or anything else interactive. For performance reasons it doesn't even have JavaScript on the front end as it simply doesn't need it.

While modern WordPress is great at dealing with design I, frankly, really couldn't care less about that. Sure I'll change the look of this again at some point but doing so does not need bloated tooling that loads everything and the kitchen sink into a user's browser to simply display my text, markup and a little CSS.

Ten years ago WordPress was pushing forward with improvements to systems such as custom post types and other technology to make content management better but today that is all but gone. Instead WordPress is quickly trying to turn itself into the next FrontPage and any calls to further improve its ability to manage content fall on deaf ears if they're not met by outright gaslighting. For example, WordPress isn't even officially compatible with PHP 8.0 even though 8.1 is out and 8.2 is coming later this year.

Don't get me wrong, there is still a future in WordPress but I think that future is going to split into a system to make brochure type websites on one end and an enterprise platform marginally capable of managing content for a headless front-end to power enterprise sites. Blogs or other sites where actual content management are important are being left out as the code that powers such features ages and performance of the whole system degrades without massive hosting plans and decoupled front-ends.

I think I could sum this up as WordPress has gone from a content management system that lets me mess with my content to a design system that is intended for me to tweak a design I really don't want to mess with. In the process it costs more in terms of processing and bloat than the simple words on this site need.

## The perfect content management system

So what makes the perfect content management system? It's a few things actually. First a robust, performant and scalable system to actually manage content. Static site generators are fun but they fail miserably at managing large amounts of content. I don't want to dig through endless text files to build links or make other edits. I want to be able to search quickly through content to get what I need and be able to edit or add to it accordingly. WordPress sort of does this well but mostly it's a forgotten relic anymore.

Next the system has to be performant. I tend to share the complaint that PHP is too much for most websites but the trade off is usually that without it the first point cannot be met, without PHP there is no content management. To be performant then requires two options: heavy caching or generating a static site independent of the content management, AKA a headless site.

There are solutions in WordPress to do both but caching quickly becomes massively complicated and headless sites lead to a level of front-end complexity that is beyond my desire to pursue or require bandaids that are cumbersome to implement to export the site to a static host.

Finally, I still need to own my content. There are plenty of SaaS products out there today that come close to this but using them requires giving up control or even ownership of my content and, all too often, the privacy of anyone who reads it. I don't need or want analytics. I want to publish words and eventually embed a video here or there.

Taken together, the perfect CMS to me would allow for powerful management of structured content that publishes static sites to an external server as a first-class feature. I don't want to build out a huge front-end. I want to use simple HTML templates like classic WordPress themes and I want those to stay put, not regenerate every time a user hits the page as I simply don't get enough traffic for caching to be super effective.

## What will I do with this site?

So what does that mean for my blogging in the future? For the moment, not a whole lot as I have yet to be able to identify a WordPress replacement that can handle this simple site well. I'm considering the [Simply Static][3] plugin to publish static files to something like Netlify or Vercel (I would use Atlas but it doesn't support such publishing, at least not yet) but that seems like more of a temporary solution than a long-term one.

I also have plans to add other content to it as well. On top of my speaking page I would like to catalog the books I read to replace GoodReads. This would let me easily add, rate, search and display the books I read in a platform I own and isn't feeding data back to sites like Amazon. WordPress really isn't a great solution to build that out anymore.

Simply put, I don't have a plan to replace it yet but I realize that WordPress just isn't a great choice for a simple blog going forward. I've been shopping the static site generators again but I realize they're not the answer either. It's time to really look and see what is available and would make a good home for my content going forward.

 [1]: /2019/08/its-time-for-a-new-site/
 [2]: /2021/07/its-time-for-a-new-site-2/
 [3]: https://wordpress.org/plugins/simply-static/