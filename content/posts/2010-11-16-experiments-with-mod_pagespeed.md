---
title: Experiments with mod_pagespeed
type: post
date: 2010-11-16T05:00:00+00:00
url: /2010/11/experiments-with-mod_pagespeed/
categories:
  - Technical
tags:
  - Web Development

---
I’ve spent most of the day working on optimizing my work sites with <a href="http://code.google.com/speed/page-speed/docs/module.html" target="_blank" rel="noopener noreferrer">mod_pagespeed</a>, a Google sponsored Apache extension that provides various features to speed up the loading of your website.

Installation was easy, just install the package from the mod_pagespeed website and enable it like any other Apache&nbsp;extension. The catch came in making it work with all the virtual hosts on my server. After installation 2 problems quickly arose. First, assets such as images were&nbsp;disappearing&nbsp;from our WordPress multi-site installation. Second, the CPU load on the server started to spike far above normal usage.

In the end, the best solution I found was to disable mod_pagespeed globally and enable it only on a per-site basis via the virtualhost configuration. Doing so has brought the CPU down to acceptable loads and visibly reduced the load time on our most important sites. Not bad for a free extension.

When I originally started this post I intended to make it a tutorial on enabling it and working with it in a similar situation. For now however I’m going to hold off until I can fine-tune my own installation a bit before I do so. In the meantime however things are looking promising, the question remains however whether it will actually live up to the promise.