---
title: The Changing WordPress Ecosystem
type: post
date: 2021-08-02T13:49:42+00:00
url: /2021/08/the-changing-wordpress-ecosystem/
featured_image: /images/2021/08/the-changing-wordpress-ecosystem.jpg
categories:
  - Technical
tags:
  - Career Development
  - Community
  - Development
  - Education
  - Reflection

---
Last week I struck a nerve on Twitter with the following tweet:<figure class="wp-block-embed aligncenter is-type-rich is-provider-twitter wp-block-embed-twitter">

<div class="wp-block-embed__wrapper">
  https://twitter.com/ChrisWiegman/status/1420068080944885767?s=20
</div></figure>

The responses to the comment ran the gambit of telling me I was wrong to talking about the technical problems in Gutenberg. For the most part I think they all made a pretty good point. What few did, however, is address the original issue.

Simply put, WordPress is not the welcoming ecosystem it used to be. The barrier to entry, which was once so low, is now higher than so many other ways to build for the web.
## Here's my own WordPress story

A bit more than ten years ago I was a college student for the second time. I was finishing up a master's degree in computer science and planning what my life would look like when I did.

I had been building websites, mostly in Drupal, as part of my work for the university but I knew that to build a real resume I would need something more than my transcripts to land a good job. As a result I started publishing some of the code I was working on for both my own sites and the university sites.

In my own mind the Drupal modules I was building were super handy and would help others building sites on the platform. So, like any budding developer, I tried to submit them to Drupal.org to be hosted in their module repository. They were denied time and time again.

<blockquote class="wp-block-quote is-layout-flow wp-block-quote-is-layout-flow">
  <p>
    "You didn't use the right coding standards."
  </p>
</blockquote>

<blockquote class="wp-block-quote is-layout-flow wp-block-quote-is-layout-flow">
  <p>
    "This isn't written how we would write it."
  </p>
</blockquote>

The excuses were numerous and annoying. Here was working code that I simply didn't have the experience to code well enough to matter. As a student and a full-time employee, for whom the websites were only one of many responsibilities, it was really disheartening.

In addition to the Drupal work I was also experimenting with websites in WordPress for both the university (multisite made a great platform for secondary sites) and for personal use.

At the time one of my biggest issues with all the sites was security. As a result I started building a plugin with all the security features I knew would help me to keep up with securing the dozens of sites I was making for myself, the university and others.

In 2010 I decided to try submitting my WordPress plugins to WordPress.org. The security plugin and a handful of others were quickly accepted and, by 2013, had accumulated millions of downloads as well as lead to me speaking about WordPress and, most importantly, to a great job and eventually a great career in WordPress.

Today, thanks to those early plugins, I still work in the WordPress ecosystem. Since June of this year I'm even helping build a plugin again as my main job function. I know my code has been used by tens of millions of users and I've built a career in open source that has provided me a home and a lifestyle far beyond what I ever could have expected had I continued as a pilot or taken up many other types of work.

My story isn't unique among those of us who have been in the WordPress ecosystem for as long as I have. Many of the big plugins, themes and even WordPress core started as projects by people who weren't professional developers yet were able to easily hack on the code that would come to make up the WordPress ecosystem

## WordPress was simple

Many people would say the strength of WordPress is in its ecosystem. I don't disagree with them but I think this sentiment doesn't properly account for why the ecosystem is the way it is.

<blockquote class="wp-block-quote is-layout-flow wp-block-quote-is-layout-flow">
  <p>
    The real strength of WordPress was in its simplicity.
  </p>
</blockquote>

For better or worse it took very little effort for anyone to build and publish code in the WordPress ecosystem. A few hours and a little patience could easily lead to a plugin, theme or even core patch that would be used by millions and eventually support the lives of the developer and, in some cases, dozes of others around the plugin or theme they built.

WordPress isn't huge because of its ecosystem. WordPress is huge because its ecosystem was easy to get involved in. From plugin and themes to blogs and eventually large corporate websites WordPress' real strength was anything that could be built for the web could be built for WordPress cheaper, easier and, often, at higher quality than the alternatives.

## The simplicity of WordPress is gone

Six (or so) years ago Matt Mullenweg, the founder of WordPress, told WordPress developers to "learn JavaScript deeply." While JavaScript has always been a big part of any WordPress developer's toolbox the implication was that WordPress itself was going to change and JavaScript was going to become the main part of a WordPress developer's toolbox.

Fast forward six years and WordPress is almost unrecognizable from what it used to be. Gutenberg is now the major push of nearly all development going into the platform and it is pushing the platform forward in many new and interesting ways.

As I write this post I'm typing it in the Gutenberg editor in WordPress and, though I've had some issues with it since its release, I've come to appreciate its power as an editor and its potential for the platform.

What worries me about Gutenberg, today, is what it has done to the ability to extend WordPress.

Yes, you can still build themes and plugins. The difference today is that it takes much more knowledge and experience to do so. Gone are the days when a project started as something small can scale to something that will be downloaded by millions. Also, gone are the days when a bug found in WordPress can easily be handled by someone who hasn't worked in the platform for years.

Today it takes massive amounts of time and money to push WordPress forward. This money and time isn't coming from hobbyists but from ever larger corporations who can afford to overcome the complexities of modern WordPress development.

What complexities exist today? Let's take a look at what it takes to be effective on my current team. We're building a content modeling plugin for WordPress. This is intended to be a rather niche plugin to help make content accessible to publishers and developers on our home-built headless WordPress platform, Atlas. Here are the major technologies a developer really needs to know well to be effective:

<ul class="wp-block-list">
  <li>
    PHP
  </li>
  <li>
    React
  </li>
  <li>
    Webpack
  </li>
  <li>
    Linters (JavaScript and PHP)
  </li>
  <li>
    Docker
  </li>
  <li>
    Terminal
  </li>
  <li>
    PHPUnit
  </li>
  <li>
    Jest
  </li>
  <li>
    Codeception
  </li>
  <li>
    JavaScript
  </li>
  <li>
    TypeScript
  </li>
  <li>
    WordPress filters and actions
  </li>
  <li>
    REST
  </li>
  <li>
    GraphQL
  </li>
  <li>
    CircleCI
  </li>
  <li>
    Composer
  </li>
  <li>
    NPM
  </li>
</ul>

That's not a small list. As I talk about the work with developer friends, few know more than a handful of those well. In fact, I would say no one on the team knows all of the code as well as a WordPress developer would've known their code base ten years ago. While I joined the project relatively early myself it is only years of experience that allows me to do so at all without slowing down the others. Even then the learning curve, two months in, has been higher than my first project here which was done completely in a language, GoLang, that I had never even looked at prior to my tenure.

## What does this mean for the future of WordPress?

In the immediate future, not much will change. WordPress is still dominant for a reason. Over time, however, I think we'll see a few changes resulting from the higher barrier of entry and not all of them are necessarily bad.

More non-developers will be able to contribute with the tools to write documentation and build community. We'll see more marketers, writers and others who were left out when new code for the platform was the only priority.

Large corporations will invest more in their own use of WordPress and we'll see the blogging and other "small web" roles of the platform fall by the wayside.

The core of the platform will continue to rot. This alone could lead to a number of posts but I think it's safe to say that, over time, the core of WordPress, including its database schema and actual management of content, will continue to be neglected and will eventually rot. Instead of fixing the problems we'll see well funded organizations develop alternatives to the WordPress Dashboard in silos using Gutenberg as their editor. This will lead to even more lock-in to hosts and other proprietary technology and will remove a historical strength of WordPress in its ability to be moved to any computer with PHP and MySQL.

Finally, we'll see the rise of new content management systems friendly to newcomers and the small web. Already my timeline is full of blogger friends who have turned to static site generators like Gatsby or Hugo. While I don't believe these technologies are usable enough to replace WordPress, I do think they show a desire for an alternative that will eventually gain traction.

## What should a new developer interested in WordPress do?

This all brings us back to the original statement and, depending on how you view it, the original problem. What can someone new to WordPress do to get involved with WordPress?

If you want to build a site, WordPress still makes it easy to do so. For site builders I think there are enough tools out there today in page builders and corporate plugins to continue to build sites for small clients without much change to their ideas or, as they get more involved, businesses. Over time it will hurt clients who may quickly be locked into a host they don't understand but the general model of how a site is built won't change a whole lot.

For someone who wants to extend the platform, particularly developers, my best advice would be to ignore the hype. For now [things can still be built][1] without all the fancy tools. The difference is that I think it is safe to say few getting into WordPress development will have the next big plugin or theme. What is more likely is that new developers in WordPress will have rewarding careers working for hosts and other larger, established companies in the space.

For someone wanting to making an impact on the community the changes are even more apparent. Your impact won't be the next million dollar security/SEO/form/etc plugin. Your impact won't be 2 million downloads of a product you built on your own.

What your impact will be is what you can share with others. Courses, blog posts, videos, talks; these all make a huge difference to the WordPress community and those in it. A great developer is still a great developer but now those skills will make less of an impact with code and more in how you can share those skills with those around you to help them be the next great developer.

## It's a different world

A meaningful impact on other people isn't what most people expect to make with tech in our modern world. When tech companies that don't make a billion dollars are considered failures it can be hard to realize that your individual impact will be measured by who you can help, not how much money your product can make. It's a shift we're not used to seeing but, in a space owned and lead increasingly by corporations and not people, it is the direction the WordPress community is going.

In January I will mark ten years since my first developer job, which was also the first time I was hired because of my WordPress experience. Today I am at my 6th company as a WordPress developer. If that illustrates anything it is that the only constant in tech is change.

Even as someone who lucked out getting into WordPress early and building a huge plugin, my path in WordPress has been long and, often, bumpy. Yours will be too. That isn't a bad thing. The glory days of WordPress being easy to enter as a solo product builder may be gone but there are many other ways to make an impact and, if you're in it long enough, you will find yourself exposed to all of them and the benefits, and difficulties, of each.

 [1]: /2021/04/creating-a-minimal-wordpress-theme-in-the-era-of-gutenberg/