---
title: Moving This Site to Netlify
type: post
date: 2020-01-18T15:35:39+00:00
url: /2020/01/moving-this-site-to-netlify/
featured_image: /images/2020/08/moving-this-site-to-netlify.jpg
categories:
  - Technical
tags:
  - Hosting
  - Hugo
  - JamStack
  - Netlify

---
Since I moved this site to [Hugo][1] from WordPress last August I’ve been hosting it on a small DigitalOcean Droplet. The other day I decided to try something new and now this site is hosted for free on [Netlify][2] and so far I’m extremely impressed.
## Why not host it myself? {#why-not-host-it-myself.wp-block-heading}

While the DigitalOcean host was adequate for the job, there were a few issues. First, I was paying ~$8/month to host it (Droplet and backup costs). While that wasn’t a lot it still didn’t perform as well as Netlify and I never had bothered to streamline deployment which had become an extremely manual process. While I enjoy hosting many things myself, and will continue to do so, it just didn’t make sense anymore with services like Netlify available.

All is not perfect though. The one thing I did lose in the move to Netlify is stats. Previously I [had been using GoAccess][3] for solid stats without JavaScript. I’ve lost that with the move. Netlify does offer stats themselves but, at least for now, I find the $9/month a bit steep for what was, at least for me, nothing but a vanity metric. Stats are simply something I don’t need if I’m not trying to monetize my blog.

## Setting it all up {#setting-it-all-up.wp-block-heading}

Moving to Netlify was super easy. The hardest part was moving my Git repo back to GitHub from my own Gitea server. For the record, I’ve also shut down the latter as well for now as, while neat, the costs of self-hosting my own Git repos didn’t outweigh the benefits so moving back to GitHub is something I would’ve been doing regardless of where I host the site itself.

### Get a Netlify account {#get-a-netlify-account.wp-block-heading}

This one is easy… Sign up at <https://netlify.com> and create a new site. Make sure you connect the Netlify site to your site’s GitHub repo. This will allow for automatic deployments when you push to GitHub.

### Add the config {#add-the-config.wp-block-heading}

You’ll want to add a _netlify.toml_ file to your repo. Here’s mine:

<pre class="wp-block-code" aria-describedby="shcb-language-104" data-shcb-language-name="TOML, also INI" data-shcb-language-slug="ini"><span><code class="hljs language-ini">&lt;span class="hljs-section">&#91;build]&lt;/span>
&lt;span class="hljs-attr">publish&lt;/span> = &lt;span class="hljs-string">"public"&lt;/span>
&lt;span class="hljs-attr">command&lt;/span> = &lt;span class="hljs-string">"hugo --gc --minify"&lt;/span>

&lt;span class="hljs-section">&#91;context.production.environment]&lt;/span>
&lt;span class="hljs-attr">HUGO_VERSION&lt;/span> = &lt;span class="hljs-string">"0.62.2"&lt;/span>
&lt;span class="hljs-attr">HUGO_ENV&lt;/span> = &lt;span class="hljs-string">"production"&lt;/span>
&lt;span class="hljs-attr">HUGO_ENABLEGITINFO&lt;/span> = &lt;span class="hljs-string">"true"&lt;/span>

&lt;span class="hljs-section">&#91;&#91;headers]]&lt;/span>
&lt;span class="hljs-attr">for&lt;/span> = &lt;span class="hljs-string">"/css/*"&lt;/span>
&lt;span class="hljs-section">&#91;headers.values]&lt;/span>
&lt;span class="hljs-attr">Cache-Control&lt;/span> = &lt;span class="hljs-string">"public, max-age=360000"&lt;/span>

&lt;span class="hljs-section">&#91;&#91;headers]]&lt;/span>
&lt;span class="hljs-attr">for&lt;/span> = &lt;span class="hljs-string">"/uploads/*"&lt;/span>
&lt;span class="hljs-section">&#91;headers.values]&lt;/span>
&lt;span class="hljs-attr">Cache-Control&lt;/span> = &lt;span class="hljs-string">"public, max-age=360000"&lt;/span></code></span><small class="shcb-language" id="shcb-language-104"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">TOML, also INI</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">ini</span><span class="shcb-language__paren">)</span></small></pre>

The above configuration has earned me a perfect score on most speed tests with the cache headers being key. Also note I’m specifying the version of Hugo to deploy with. This one is important as you’ll want to match it to what you’re using locally and update accordingly over time. The default version used by Netlify had been failing as some of my templates were just too new.

### Push to GitHub {#push-to-github.wp-block-heading}

Commit the config file and push your site. If all goes well you should see that it was successfully deployed in Netlify’s control panel.

### Point your DNS {#point-your-dns.wp-block-heading}

Follow the instructions in Netlify’s control panel to point your domain’s DNS to your new site.

That’s it. The whole process took me about 15 minutes and load times of my site went from a fast .75 seconds on average to around .5 seconds. Cutting off a 3rd of the load time is never a bad thing!

 [1]: https://gohugo.io/
 [2]: https://www.netlify.com/
 [3]: /2019/11/setting-up-private-website-analytics-with-goaccess/