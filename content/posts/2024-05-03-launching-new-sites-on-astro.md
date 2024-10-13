---
title: Launching New Sites on Astro
date: 2024-05-03T11:52:26+00:00
featured_image: /images/2024/05/astro-framework.jpg
categories:
  - Technical
tags:
  - Astro
  - Tools
  - Web Development
---

I've finished 2 new sites this week and they're ready to be launched.

What's so unusual about this is that I didn't build them with WordPress, but instead with [Astro][1], a very lightweight JavaScript framework that has actually been a blessing to work with.

One site, a rebuild of a documentation site, was switched to Astro to drastically reduce the maintenance it took to support it as a headless WordPress site. I rebuilt all 70 or so pages in Astro using the [Starlight][2] theme in just a few hours, reducing the JavaScript dependencies from 38 to 4 and completely removing the dependency on WordPress. Over the next year that should save us well over 100 hours of work when compared to its history of [Dependabot][3] tickets alone.

The second site is a small, personal, blog for myself. While WordPress is the right choice for this site I wanted to spin up something that would be free for me to host and where I could write without interference. To do it I used the [Astro Nano][4] theme and was able to launch it on GitHub pages after only an hour or two of customization.

## I'm not a JavaScript developer

Why is it so remarkable to me that I was able to build (or rebuild) two sites so quickly in a JavaScript framework?

It's because I'm not a JavaScript developer and I don't intend to be. For me the "fun" code is in tech like [Go][5] or [Rust][6] or even some PHP where the project needs it. JavaScript, for the most part, really frustrates me as maintaining a large JavaScript project can be a full-time job in itself. The dependency hell, complete disinterest in backwards compatibility and the insistence on seemingly every project to "reinvent the wheel" just isn't fun for me.

Don't get me wrong, I will use JavaScript, especially [Node.js][7], where it makes sense but that is mostly for 1-off projects where Node simply has libraries that I can implement quickly for scripting or some other minor automation. When it comes to bigger projects I tend to avoid it where possible.

Given that, and the fact I'm not a front-end developer, spinning 2 sites up on a new-to-me JavaScript framework is quite an accomplishment in a week. Astro is genuinely the first framework I've enjoyed using and is the first where I would gladly use it again for further projects.

## The right tool for the job

I've spent a lot of time with WordPress over my career but the simple fact is that it isn't always the right tool for the job. For smaller projects, particularly where the content is simple and won't need to change often, WordPress really is overkill. Add in the hosting costs for a WordPress site and the alternatives look better and better.

A few years ago I thought I could get away with moving this site off of WordPress. I [moved it to Hugo][8] but the complexity of the content I have on it, combined with the fact that I do work in WordPress, quickly brought me back to WP. For this site, where I blog multiple times of week and am often linking to or managing older content, WordPress still wins. That isn't every site, or even most sites, though and, in the end, it's about using the right tool for the job and Astro has been the perfect tool for what I need to do.

## The 3rd time's the charm

So what's next for me with Astro?

I originally stumbled back on Astro as I was looking for a good tool to build a documentation site for [Kana][9]. While I could build it in WordPress it would cost me to host it and there really isn't much content I need to publish. In the coming weeks I'll build it on Astro Starlight which is perfect for the task (even if Kana itself is a WordPress tool).

That'll be 3 sites built on Astro in as many weeks. I don't think I've ever been able to build sites that fast in WordPress.

If you have a smaller site to build, one that doesn't need to manage a lot of data, I highly recommend giving Astro a shot.

 [1]: https://astro.build/
 [2]: https://starlight.astro.build/
 [3]: https://github.com/dependabot
 [4]: https://astro.build/themes/details/astronano/
 [5]: https://go.dev/
 [6]: https://www.rust-lang.org/
 [7]: https://nodejs.org/en
 [8]: /2019/08/its-time-for-a-new-site/
 [9]: https://github.com/chriswiegman/kana