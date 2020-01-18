---
title: "Moving This Site to Netlify"
date: 2020-01-18T10:34:23-06:00
description: "How I moved my Hugo site to Netlify."
draft: false
images: ["/images/moving-this-site-to-netlify.jpg"]
tags: ["netlify","hosting","hugo"]
---

![Moving this site to Netlify](/images/moving-this-site-to-netlify.jpg)

Since I moved this site to [Hugo](https://gohugo.io/) from WordPress last August I've been hosting it on a small DigitalOcean Droplet. The other day I decided to try something new and now this site is hosted for free on [Netlify](https://www.netlify.com/) and so far I'm extremely impressed.

## Why not host it myself?

While the DigitalOcean host was adequate for the job, there were a few issues. First, I was paying ~$8/month to host it (Droplet and backup costs). While that wasn't a lot it still didn't perform as well as Netlify and I never had bothered to streamline deployment which had become an extremely manual process. While I enjoy hosting many things myself, and will continue to do so, it just didn't make sense anymore with services like Netlify available.

All is not perfect though. The one thing I did lose in the move to Netlify is stats. Previously I [had been using GoAccess](https://chriswiegman.com/2019/11/setting-up-private-website-analytics-with-goaccess/) for solid stats without JavaScript. I've lost that with the move. Netlify does offer stats themselves but, at least for now, I find the $9/month a bit steep for what was, at least for me, nothing but a vanity metric. Stats are simply something I don't need if I'm not trying to monetize my blog.

## Setting it all up

Moving to Netlify was super easy. The hardest part was moving my Git repo back to GitHub from my own Gitea server. For the record, I've also shut down the latter as well for now as, while neat, the costs of self-hosting my own Git repos didn't outweigh the benefits so moving back to GitHub is something I would've been doing regardless of where I host the site itself.

### Get a Netlify account

This one is easy... Sign up at https://netlify.com and create a new site. Make sure you connect the Netlify site to your site's GitHub repo. This will allow for automatic deployments when you push to GitHub.

### Add the config

You'll want to add a _netlify.toml_ file to your repo. Here's mine:

```toml
[build]
publish = "public"
command = "hugo --gc --minify"

[context.production.environment]
HUGO_VERSION = "0.62.2"
HUGO_ENV = "production"
HUGO_ENABLEGITINFO = "true"

[[headers]]
for = "/css/*"
[headers.values]
Cache-Control = "public, max-age=360000"

[[headers]]
for = "/images/*"
[headers.values]
Cache-Control = "public, max-age=360000"
```

The above configuration has earned me a perfect score on most speed tests with the cache headers being key. Also note I'm specifying the version of Hugo to deploy with. This one is important as you'll want to match it to what you're using locally and update accordingly over time. The default version used by Netlify had been failing as some of my templates were just too new.

### Push to GitHub

Commit the config file and push your site. If all goes well you should see that it was successfully deployed in Netlify's control panel.

### Point your DNS

Follow the instructions in Netlify's control panel to point your domain's DNS to your new site.

That's it. The whole process took me about 15 minutes and load times of my site went from a fast .75 seconds on average to around .5 seconds. Cutting off a 3rd of the load time is never a bad thing!
