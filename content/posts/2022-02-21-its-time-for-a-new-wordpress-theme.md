---
title: It’s Time for a New WordPress Theme
type: post
date: 2022-02-21T13:17:00+00:00
url: /2022/02/its-time-for-a-new-wordpress-theme/
featured_image: /images/2022/02/its-time-for-a-new-wordpress-theme.jpg
categories:
  - Technical
tags:
  - Blogging
  - Sustainability
  - Web Development
  - WordPress
---

It's no secret that I enjoy rebuilding this site on a fairly regular cadence. Over the last few years it has gone through a dozen of more major changes of themes, functionality and even [away from][1], and [back to WordPress][2].

The last major pivot of this site occurred last July when [I moved from my own WordPress theme to the Blocksy theme][3] when I thought I would be happier spending less time on the code and more time on content. Frankly it worked, since last July's pivot I have managed to keep a regular cadence of three posts per week which is more content than I've ever written in such a short amount of time.

For me, however, this site is more than content. It's what brought helped me learn WordPress in the first place and was a big part of why I quit flying for a career in tech. It's the closest thing I've ever had to a hobby, the most demanding teacher and the work I've been most proud of all rolled into one and it is time for me to start working on it again.

## What was wrong with Blocksy?

So what was wrong with Blocksy that I couldn't use it for the basis of this new site? On the surface nothing was wrong with the theme. It's a great looking theme that was easy to use and build with.

For me, however, it had too many tradeoffs for me to be happy with it.

First, The near daily updates were a real annoyance, especially as they had failed on my 3 times with different bugs that cost me a lot of frustration to work out. In addition, it uses a WordPress marketing product to market and sell its premium version which I have never been comfortable with from a privacy standpoint.

Finally, while Blocksy is lightweight compared to nearly every other WordPress theme out there, it is still too bloated for my own tastes. One site I had been proud to feature this site on before Blocksy is [Kev Quirk's][4] [512kb.club][5]. With my own theme I has down around 50kb for the whole page weight which put me in 512kb's highest tier. With Blocksy I fell off the site completely.

I believe the web should be as sustainable as possible and not a major burden on the environment. Doing so with WordPress is hard enough but, with enough work, it can be possible. Blocksy undid all the efforts I had made in reducing the page-weight of this site and that was simply a trade-off that, in the end, was not worth it for me.

The homepage of this site clocked in at 2.3mb with Blocksy. With this new theme it's at 73kb (uncompressed). That's a major difference and one which justifies, at least to me, the maintenance of a theme again.

## The new design

Last time I developed my own theme the design left a lot to be desired. This time I wanted to do better. There were a few elements however that I still wanted to keep including the full post list (now on [my blog page][6]) and the minimal design.

The catch is, I'm not a designer. With my last theme I had based it on an overly simplistic Hugo theme I had found elsewhere. This theme, at least the colors and much of the layout, is based on the excellent Gatsby theme by my friend [Tania Rascia][7]. While much of the primary design is nearly identical to hers I did simplify it some for my own needs by removing extra design elements such as various images as well as the sidebar menu she implemented on her own site. [You can find her code for her theme here][8].

This new design gives me the full post list, search, and the appropriate archives and other sections while still looking great this time and, as was the goal with my previous theme, without any JavaScript from the theme itself. In fact, the only JavaScript in use anywhere on the site is that where I've embedded a Twitter tweet on a few posts over the years.

## Simpler features make writing easier

Once past the initial design there are a few other changes worthy of mention as well.

Not only is there no JavaScript on the site but there is no tracking of any kind either. I'm using no analytics or other tools to identify my users. In truth, though, this isn't a brand new change but [something I had removed a few weeks ago][9] as the analytics simply did not provide the usefulness I had hoped for.

This time, however, I went beyond just analytics and also removed the contact form (replacing it with an email address) and, at least for now, comments. For whatever reason this site has been attracting far too many daily spam comments yet very few legitimate comments on any given post. In the future I may revisit this decision but, at least for now, it is the right decision for me and for my users and one less data point I can possibly collect on anyone who visits.

## Options for the future

As is always the case, this site is still very much a work in progress for me. I'm sure there are plenty of bugs to fix here and there from the launch. Once I'm through with those I will be looking to tweak the design for improved accessibility as well as to allow a light option for those who prefer it.

While I've enjoyed writing on this site it also isn't the only thing I use it for. My speaking page is one of the most trafficked on the site and I would like to turn my talks into a custom post type that I can more easily manage as public speaking becomes safe again. I'd also like to get off of Goodreads and move my book collection to this site using another custom post type to keep track of the hundreds of books I've read going back to 2010. While I could do both of these things with a commercial theme, doing so with my own just makes it easier to do so on my own terms without compromise.

## The code is available

While this site is very much my own design for my own purposes it is still one of the lightest WordPress themes I've seen and, as such, is something I hope others can build off for their own work. If you want to check it out and modify it for your own site you can find the code here:

[**chriswiegman-theme**][10]

 [1]: /2019/08/its-time-for-a-new-site/
 [2]: /2020/08/hello-wordpress-my-old-friend/
 [3]: /2021/07/its-time-for-a-new-site-2/
 [4]: https://kevq.uk
 [5]: https://512kb.club
 [6]: /blog/
 [7]: https://www.taniarascia.com
 [8]: https://github.com/taniarascia/taniarascia.com
 [9]: /2022/01/no-more-analytics/
 [10]: https://github.com/chriswiegman/chriswiegman-theme