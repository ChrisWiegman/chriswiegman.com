---
title: The Case For WordPress Multisite
date: 2022-03-07T13:31:37+00:00
draft: false
categories:
  - Technical
tags:
  - Development Tools
  - WordPress
---

I couldn't have made my career in WordPress without WordPress Multisite. It is an important part of WordPress core and deserves more attention to polish some of its shortcomings and make it better for all.

My first foray into WordPress was a multisite network I built for the aviation department at Southern Illinois University Carbondale. At the time we needed a way for faculty, student groups and others to be able to quickly spin up and manage official websites for all sorts of things. I had played with a few other solutions but settled on WordPress Multisite even before it was merged into core as it was the one tool that allowed us to manage the sites we needed without increasing my own workload in the process.

From that first site through my work at two other universities, and agencies such as 10up, Multisite quickly demonstrated that it was the perfect tool for the enterprise. While there are and were plenty of alternatives to WordPress core, there is still no viable alternative to WordPress Multisite that can make WordPress work for larger businesses, universities and the enterprise in general.

## What Multisite Isn't

Like all tools WordPress Multisite has situations where it shines as well as plenty of places where it probably shouldn't have been used. It does add some performance overhead to any of the sites in a given network due to the way it shares some database resources between sites. It can also be more difficult to use with various plugins and themes that never bothered to optimize their functionality for it.

As a result of its shortcomings, trying to make every site a multisite can lead to failure.

If you're trying to use multisite simply to organize content you're going to be quickly disappointed. I've seen this many times over the years where folks will force content into multiple sites in a Multisite installation where what they really wanted is a simple category architecture.

As a general rule of thumb if you only have one user of if all of your users could theoretically edit all of your content then you probably don't need Multisite. There are much better ways to handle your content that will make the site easier to maintain and will probably do better for your SEO as well.

## Where Multisite Shines

While Multisite isn't perfect for every site, as I said before there is no alternative for the sites where it shines.

If you have a single user database in which content is diverse and your content editors only have access to a subset of the content, Multisite can really shine. A prime example of this is a university where multiple departments, groups, etc all share common assets but have different content. Multisite makes it easy to handle the potentially complex user permissions that allow people into what they need while keeping them out of what they don't.

Here's one example of where multisite shines. At SIU we had faculty who could create their own course websites for getting all kinds of information out to their students. Naturally the only editors of this content would be the faculty member and, perhaps, a graduate assistant or other employee working with them on their classes. If that same helper is in another group they could use the same account to access, for example, the site of their student organization or another class site from another professor. Without Multisite this would quickly become a mess, even with the best identity management, as it would take multiple systems to handle what Multisite can do, and do well, all by itself.

Beyond user management Multisite shines when new sites might need to be quickly brought online (or offline). Provisioning a new WordPress site isn't simple. With minimal work Multisite can handle this near perfectly including the theme and plugins for a known configuration. While there are plenty of devops tools to do similar today with individual sites they are still more complex and more expensive than the built-in functionality of Multisite which can almost completely replace large, complex systems with visually no additional overhead for the users or the IT folks managing the site. Very few systems in tech can match this with such efficiency, even more than a decade after Multisite became a core feature of WordPress.

## Without Multisite WordPress would die in the enterprise and the community would follow

While I've covered the technical uses of Multisite, and who uses it, there is one important point I want to emphasize with regards to WordPress Multisite. Without it WordPress will die in the enterprise.

The WordPress community is, indeed, robust, but the funding for that robustness comes largely from its largest users, the enterprise users. They provide an oversized portion of the income to hosts as well as a number of other WordPress plugin companies that is vital to the health of WordPress in general.

Don't believe me? Take a look at the next WordCamp or other WordPress event and see who the sponsors are. We all know the names, they're largely managed WordPress hosts complimented with a combination of the largest plugins and themes and a dash of newcomers and smaller companies.

These hosts, which do host single-site and smaller sites as well, still derive a very large portion of their income from a combination of enterprise users and Multisite. They may exist without this market but their ability to support the community, thus the very survival of the community itself, would be severely crippled without their money.

## It's time for core to invest in Multisite and the WordPress data layers in general

As much as WordPress is supported by the enterprise one would think that support would be reflected in the development priorities of WordPress core.

One would be wrong for thinking so.

Like all-too-much software WordPress has forgotten that it needs to function well underneath it's design layer, the block editor, and anything that doesn't involve the block editor seems to be largely forgotten.

It's time to reverse that thread. While the block editor needs to continue to receive attention to get it out of what most would call, at best, a beta state, resources must also be allocated to address the fundamental data, also known as content, that WordPress was designed to manage in the first place.

It's time to put resources into improving the Multisite APIs as well as the data schema and underlying PHP in general. While the current tech is arguably usable there are far too many issues that have been ignored leading to issues ranging from performance to usability and more.

What are those issues? I could write a series of posts (and just might) on that alone but a quick glance through [Trac][1] should be enough to demonstrate the severity of the problem.

Let's spend time returning to the roots of WordPress and make sure it continues to be the best content management system to actually manage content in an efficient manner. Not only will this make Multisite easier to use but it will ensure WordPress is the right solution for sites of all sizes.

 [1]: https://core.trac.wordpress.org