---
title: Fixing Lando Crashes in Docker Desktop
type: post
date: 2021-07-21T13:43:13+00:00
url: /2021/07/fixing-lando-crashes-in-docker-desktop/
featured_image: /images/2021/07/Screen-Shot-2021-07-21-at-9.31.35-AM.png
categories:
  - Technical
tags:
  - Docker
  - Lando

---
If you use Lando and Docker for web development you might have noticed a problem in the last few weeks. In my case this manifested as the following screenshot during _lando start_:

<!--more--><figure class="wp-block-image size-large">

<img loading="lazy" decoding="async" width="808" height="850" src="/images/2021/07/lando-crash-message-808x850.png" alt="The trace output of Lando crashing on start due to an error in your Docker config." class="wp-image-871" srcset="/images/2021/07/lando-crash-message-808x850.png 808w, /images/2021/07/lando-crash-message-380x400.png 380w, /images/2021/07/lando-crash-message.png 1097w" sizes="(max-width: 808px) 100vw, 808px" /> </figure>

The issue itself can be summed up in the following error message:

<pre class="wp-block-code" aria-describedby="shcb-language-119" data-shcb-language-name="CSS" data-shcb-language-slug="css"><span><code class="hljs language-css">&lt;span class="hljs-selector-tag">services&lt;/span>&lt;span class="hljs-selector-class">.app&lt;/span>&lt;span class="hljs-selector-class">.env_file&lt;/span> &lt;span class="hljs-selector-tag">must&lt;/span> &lt;span class="hljs-selector-tag">be&lt;/span> &lt;span class="hljs-selector-tag">a&lt;/span> &lt;span class="hljs-selector-tag">string&lt;/span></code></span><small class="shcb-language" id="shcb-language-119"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">CSS</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">css</span><span class="shcb-language__paren">)</span></small></pre>

or

<pre class="wp-block-code" aria-describedby="shcb-language-120" data-shcb-language-name="CSS" data-shcb-language-slug="css"><span><code class="hljs language-css">&lt;span class="hljs-selector-tag">services&lt;/span>&lt;span class="hljs-selector-class">.appserver_nginx&lt;/span>&lt;span class="hljs-selector-class">.labels&lt;/span>&lt;span class="hljs-selector-class">.traefik&lt;/span>&lt;span class="hljs-selector-class">.http&lt;/span>&lt;span class="hljs-selector-class">.routers&lt;/span>&lt;span class="hljs-selector-class">.51ceda58f85aacb14f0ba2e83c578df12f64202b-secured&lt;/span>&lt;span class="hljs-selector-class">.tls&lt;/span> &lt;span class="hljs-selector-tag">must&lt;/span> &lt;span class="hljs-selector-tag">be&lt;/span> &lt;span class="hljs-selector-tag">a&lt;/span> &lt;span class="hljs-selector-tag">string&lt;/span>, &lt;span class="hljs-selector-tag">number&lt;/span> &lt;span class="hljs-selector-tag">or&lt;/span> &lt;span class="hljs-selector-tag">null&lt;/span></code></span><small class="shcb-language" id="shcb-language-120"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">CSS</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">css</span><span class="shcb-language__paren">)</span></small></pre>

The issue is actually due to a change in Docker Desktop that released in version 3.4 for Mac. This is because Docker has started including Docker Compose as part of the core Docker CLI ([you can read about the full change here][1]).

Fortunately the fix is pretty easy. In Docker Desktop simply go to _Settings->Experimental Features_ and turn off "Use Docker Compose V2." Then restart Docker and launch your Lando application. <figure class="wp-block-image size-large">

<img loading="lazy" decoding="async" width="850" height="512" src="/images/2021/07/Screen-Shot-2021-07-21-at-9.31.35-AM-850x512.png" alt="Uncheck "Use Docker Compose V2" in "Experimental Features"" class="wp-image-872" srcset="/images/2021/07/Screen-Shot-2021-07-21-at-9.31.35-AM-850x512.png 850w, /images/2021/07/Screen-Shot-2021-07-21-at-9.31.35-AM-400x241.png 400w, /images/2021/07/Screen-Shot-2021-07-21-at-9.31.35-AM.png 1382w" sizes="(max-width: 850px) 100vw, 850px" /> <figcaption>Uncheck "Use Docker Compose V2" in "Experimental Features"</figcaption></figure>

 [1]: https://docs.docker.com/compose/cli-command/