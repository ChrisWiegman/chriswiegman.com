---
title: Hello WordPress, My Old Friend
type: post
date: 2020-08-23T14:41:10+00:00
url: /2020/08/hello-wordpress-my-old-friend/
categories:
  - Technical
tags:
  - Development Tools
  - Reflection
  - Web Development
  - WordPress
---

After just over a year on [Hugo][1] I've migrated this site back to WordPress.

It wasn't an easy decision to do so. The truth is, I really liked [the workflow I had been using for Hugo][2] and the platform itself was _nearly_ perfect for my uses. That said, technology alone wasn't enough to keep me with it and here is why...

## The Technical Reasons

As stated above, Hugo was _nearly_ perfect for my use case. That said, there were still a few annoyances and other things which WordPress still does better.

First, the block editor has come a long way in the past year. When I switched to Hugo I found it almost unusable. Today I find it a solid tool for writing and blogging. It's smooth, fast, powerful and, with the right theme, shows me exactly what I expect to see in the finished product. The last piece alone makes a huge difference when writing a post like this. I don't have to preview posts anymore on a machine with Hugo installed, I know what I see here is really what I will get.

The second benefit to WordPress is real content management. I may have only had a few dozen posts in Hugo but editing and keeping track of them was already becoming an issue. The search an sorting tools in the WordPress Dashboard are simply better suited for the task. This is so true that it prompted me to even move all my old posts, going back to 2008, back into WordPress from the archive site I had relegated them to. What was even harder than the posts themselves was managing taxonomies in Hugo. As a result, posts were all over the map which was becoming an issue for me to track as my post list grew.

Finally, while I don't care much about how popular this site gets or how much money it makes (I don't even use analytics on it currently) the SEO tools available to WordPress are much better than Hugo. [Yoast][3] can tell me ways to improve my writing, for example, and numerous other tools can help my relate various posts and other content for a much improved user experience.

While these technical differences were minor, and could be overcome in Hugo if I spent enough time on them, the truth was I was spending more and more time making Hugo do what I know WordPress could easily do better without the effort. In other words, while I really enjoyed my writing workflow and the writing experience in Hugo for new content, it just wasn't as scalable as I needed it to be for a long-term site without a massive investment of time in a problem WordPress had already solved for me.

## WordPress Themes Can Be Simple Too

While WordPress is better at it's core functionality, namely content management, it isn't all that much worse in areas where it sometimes gets a bad wrap. One source of pride for my Hugo theme was it's simplicity and size. It used no JavaScript and less than 3KB of CSS with only a few KB of HTML markup.

Up until recently I didn't know if this level of simplicity would even be possible in WordPress which is often viewed as bloated and where nearly every plugin/theme/etc wants to add to your page weight. I was wrong. It isn't perfect, the HTML markup is still larger by about 3-4kb than I had with Hugo, but it was possible to built a theme with minimal markup and resources and get it to run just as quickly as a Hugo site. In fact, it's a direct port of my Hugo theme and you can try it for yourself if you would like. [The code is available here][4].

## The Other Reasons

It is safe to say that if the decision to move back to WordPress was based on technology alone it might have happened eventually but I would not have done so at this point. While I could see cracks, particularly in managing posts, they weren't deal-breakers as I really enjoyed working with and writing in Hugo.

What pays the bills for me, still, though is WordPress. A year ago I was writing in GoLang exclusively and loving every minute of it. This year I'm writing code in WordPress again and I don't see a path forward that is going to allow me to do anything else any time soon.

As my own career has brought me back to WordPress it is also quite apparent that the pace of change in WordPress itself has accelerated, even after the release of the block editor. Without continuing to find ways to use the platform it was becoming clear to me that I was starting to fall behind. This, and primarily this, is the reason I moved back.

Writing on this site gives me a place to continue to write, with all my content in one place (splitting off the archive site was not one of my finer ideas) and will allow me to experiment in technologies such has headless CMS and many others that didn't make sense in the Hugo model. This is why I'm back on WordPress.

Over the years I've let WordPress define me as a person. I was always the "WordPress security guy." Those days are passed. Today WordPress is a tool for me. The difference is that, unlike some other tools like Hugo, I do see a brighter future for innovation in WordPress and that is why I'm here again.

So here I am, ready to try my hand again at pushing things forward in WordPress and other technology while also committed to sharing that journey with as many people as I possible can.

 [1]: https://gohugo.io/
 [2]: /2020/04/my-blogging-workflow-with-hugo/
 [3]: https://yoast.com/
 [4]: https://github.com/ChrisWiegman/chriswiegman-theme