---
title: Why Static Site Generators Aren’t for Blogging
type: post
date: 2021-08-20T14:04:19+00:00
url: /2021/08/why-static-site-generators-arent-for-blogging/
categories:
  - Technical
tags:
  - Blogging
  - Content Management Systems
  - Static Site Generators
  - Web Development

---
Two years ago I tried an experiment. After blogging with WordPress for over a decade I decided to [move this site to Hugo][1]. One year ago, I [moved it back to WordPress][2].

In June of this year I joined a team working on Headless solutions for WordPress at WP Engine. My work for this team, as well as plenty of ideas for side projects, has me once again thinking about where a static site generator might work well for me. What I do know is that, while static site generators are great, they are absolutely not the right choice for this site. Here's why.
## Where static site generators work {#h-where-static-site-generators-work.wp-block-heading}

Before I get into why you shouldn't consider a static site generator for a blog, let's first talk about where they make sense.

The vast majority of websites I visit while looking for a solution to a given problem never change. They're static. Even in 2021 there are many sites for campaigns, products, events and organizations that are essentially brochures with a small amount of content that doesn't change often. This is where a static site generator makes sense.

When the amount of content is small a static site generator gives you a solid, fast approach that won't require much maintenance to keep running. I use this myself for my [speaker slides][3] as, once the content is published, there isn't anything else to do.

I don't have to go back and edit them later and I don't really use the site for much besides an archive. As a result I can host them for free on GitHub pages where I simply don't have to worry about them except for when I add a new deck.

## Where static site generators don't work

I try to write a blog post three days a week now. Often this process isn't just writing new text but adding links to existing content as well as other types of content that go beyond just basic HTML.

For a year I tried to make this work with Hugo and [I got close to a workable solution][4]. Once I eliminated any hope of rich content and cut out 10 years worth of posts I could do fairly well with posts that were text and a few images.

Where it all fell apart was as my collection of posts grew. Even from day 1 this was a problem I pretended didn't exist. I convinced myself, as exporting the old content was almost impossible given some of the features in it, that I could simply export the old site straight to HTML and create an "archive" site of old posts. This sounded great on paper but was less than ideal.

As I then added posts to the new site things didn't get much better. Linking to old posts was a time consuming process as was handling all the little tasks such as SEO descriptions. Forget rich embeds or anything fancy and new, there were a few things Hugo could do but even those were limited. I removed comments, videos and so many other items as the time to deal with each content type, where it was possible, simply wasn't worth it.

I also had to forget about linking posts together or easily editing old posts. For example, my "[about][5]" page is something I update about once a month. This is easy on WordPress but took roughly 3 times as long on Hugo where I had to find the file, make the edits and manually make sure everything else from the date to the physical process of updating the site was handled as well.

In other words, Hugo was _almost_ perfect. It could create a small site but that workflow fell apart quickly when dealing with larger amounts of content.

## Static site generators aren't content management systems

Try as I might, and I did give it a real effort, I missed one essential fact of static site generators. No matter how great they are at generating HTML from text, [static site generators][6] are not [content management systems][7].

There's a reason our computers have added features like Spotlight on Mac (and it's alternatives). Sorting through and finding files when we have large folders of them is hard. In a text editor like [VSCodium][8] it can be an even more daunting task to find a given post much less the files it links to.

Need to batch edit files in a static site generator? Forget about it (without a lot of extra work). What about comments? You could add a 3rd party comment service but then you no longer control your data and both you and your users are at the mercy of someone else.

Sure, there are a lot of people that do run their blogs on a static site generator. I could do all my work in [VI][9] too, if I was so inclined. But why would I? Using the wrong tool is inefficient and breaks all kinds of features the proper software tool provides.

Simply put, blogs and large sites have complex content that is much easier to deal with using software that is made to manage content. Static site generators, may be great tools to build simple, static sites but they cannot manage more complex sites like a dedicated content management system can.

 [1]: /2019/08/its-time-for-a-new-site/
 [2]: /2020/08/hello-wordpress-my-old-friend/
 [3]: https://slides.chriswiegman.com
 [4]: /2020/04/my-blogging-workflow-with-hugo/
 [5]: /about/
 [6]: https://en.wikipedia.org/wiki/Web_template_system#Static_site_generators
 [7]: https://en.wikipedia.org/wiki/Content_management_system
 [8]: https://vscodium.com
 [9]: https://en.wikipedia.org/wiki/Vi