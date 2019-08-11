---
title: "It's Time for a New Site"
date: 2019-08-11T12:00:00-04:00
description: "ChrisWiegman.com is now running on Hugo"
draft: false
images: ["/images/time-for-a-new-site.jpg"]
tags: ["site","cms","hugo"]
---

![It's time for a new ChrisWiegman.com](/images/time-for-a-new-site.jpg)

After running this site on WordPress for over 10 years it is time to move on, from WordPress that is. For now, this site is running on [Hugo](https://gohugo.io/ "The Hugo static site generator") and hosted with a simple Nginx server in order to be as fast and accessible as possible.

## What happened to WordPress?

So, the first question I know I'll get here (as I've already heard it from anyone I've talked to about this redesign) is what happened to WordPress? Simple fact is, I still love WordPress and make my living with it but it simply isn't the best tool for every job. Since the release of WordPress 5.0 I've found actually writing content in WordPress to be a tedious and aggravating experience. I've come to realize that Gutenberg is a wonderful editor for compiling content from various sources into a single page. It isn't however, a good editor for writing simple blog posts.

A few months ago I thought I would try to solve the writing problems by writing all my new posts in markdown using one of the many writing apps on the market. This actually didn't work too bad and I realized that markdown is, in fact, a wonderful format to work in. It's actually been so great for my work that I realized I no longer needed WordPress to power the backend of my content. Now I can write in any editor I choose, save the file and Hugo does the rest. It's so much faster and more efficient for my own workflow and it doesn't require me to be online in order to get anything done (something that has plagued me for a while).

Just because my blog isn't on WordPress anymore it doesn't mean I'm personally done with WordPress either. It isn't the best CMS for a blog anymore but, now that I've launched this site, I have a few ideas for WordPress projects I want to pursue starting with a life-logging plugin that can serve as my own, private diary. After that I have a few other ideas for sites with various types of content beyond plain blogs. Stuff that, pre-Gutenberg, would have been much harder to put together.

## Why Hugo?

On top of the writing issues in Gutenberg there is one other major reason I've moved this site to Hugo. WordPress has simply become too bloated in general for static content. Why should I need to run JavaScript at all? Why should I have to connect back to a database through an entire PHP application to simply show my latest post? I don't think I should have to and I don't like the privacy and other implications that come with the bloat of plugins and everything else that makes up most WordPress sites. This new site is simple. No JavaScript (sans the occasional embed), no tracking (even the server logs have been sanitized) and, hopefully a fast and readable experience that will serve my posts, tutorials and other contents quite well for years to come.

Of course, there are plenty of static site generators today. GatsbyJS is particularly popular in the WordPress space, but I've picked Hugo for one major reason, it's written in [https://golang.org/](GoLang). This is the language I've been working in almost exclusively since joining WP Engine last year where we've been using it to build the [https://wpengine.com/devkit/](DevKit CLI). With a little luck (and some extra hours), I'm hoping to start contributing to Hugo as well using what I've learned as working in GoLang has been more fun that anything else I've done in tech recent in years.

## What happened to the old content?

Over the last 11 years I've written hundreds of posts for this site. When I re-launched it in 2008 I deleted all the older content. That was a mistake. This time the old content lives on at [a new archive site](https://archive.chriswiegman.com "the archives of chriswiegman.com"). This new archive site is a static export of my WordPress site that solves the problem of me trying to export all tht old content to markdown while making sure it will continue to be available in a safe and fast format.

## So what does this mean for the future?

With a little luck, all the change means I might finally be able to focus on new content for this site without getting lost in the design and code as I've been doing for most of the last decade. Simply put, I miss blogging and I'm hoping that, with this new site and a few other changes to my workflow, I'll finally be able to shed the distractions that always catch me pretty much every time I site in front of the computer. I can't wait!

## Inspiration for the design

As for the design of the site itself, inspiration came from a few places. The idea of an archive site and homepage layout was taken from [Aral Balkan](https://ar.al "Aral Balkan"). Most of the rest of the layout is from the [Ezhil](https://github.com/vividvilla/ezhil "Ezhil Hugo theme") Hugo theme which is also what I used as a base for the markup itself. Finally, most of the responsive work, especially the menu, came from [my own WordPress theme](https://gitea.chriswiegman.com/chriswiegman/chriswiegman-theme "the old ChrisWiegman.com WordPress theme") which powered this site up until last year.
