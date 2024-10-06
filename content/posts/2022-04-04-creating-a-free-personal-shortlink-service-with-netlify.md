---
title: Creating a Free, Personal Shortlink Service with Netlify
type: post
date: 2022-04-04T12:00:46+00:00
url: /2022/04/creating-a-free-personal-shortlink-service-with-netlify/
featured_image: /images/2022/04/creating-a-free-personal-shortlink-service-with-netlify.jpg
categories:
  - Technical
tags:
  - Shortlinks
---

For all their shortcomings, shortlinks still have their uses. In my case I've had a shortlink domain that, for years, I've used with everything from my resume ([cfw.li/resume][1]), my presentation slides and so many other little tasks where the main URL either changes over time or needs to be shared in the easiest way possible.

To run my shortlinks I used [YOURLS][2] for years until I moved it all into WordPress about 3 years ago. Today that WordPress site is no more and all of them run off a free [Netlify][3] setup that is both effective and incredibly simple.

## Why Netlify?

First, it's free. I originally moved to WordPress to avoid running a VPS for YOURLS as I could get much cheaper WordPress hosting than maintaining my YOURLS instance anywhere, even on a cheap $5 [DigitalOcean][4] droplet. While not a big expense, I don't keep a whole lot of shortlinks to start with so even the modest expense just didn't make a lot of sense.

Second, I don't need stats for these links and they are, in essence, just redirects. The added processing required to run either WordPress or YOURLS, which are both PHP apps with a full database and all the associated resources behind them, just didn't make sense. It might not be much but computing power matters and is, when taken together, a huge contributor to the climate crisis we now find ourselves in. As I can still achieve what I need without that overhead, it was a no-brainer to switch.

Finally, as I said before I don't have many links and I don't update what I do have very often. This means a full UI is overkill and a simple text file makes it all much easier for me to operate. I'm no longer maintaining any apps, plugins, servers or anything else. If I want to change something I just update a single text file, push it to GitHub, and I'm done.

## Running a shortlink service on Netlify

### Step 1: Register a domain for your shortlinks

This one should be pretty self-explanatory. If you're going to use a shortlink service you need a domain to run it on. I highly recommend [Gandi.net][5] for this but you can register it anywhere.

### Step 2: Setup a repository and create your shortlinks

Next, head on over to GitHub and create a repository for your shortlink site. You can find mine at <https://github.com/ChrisWiegman/cfw.li>. Once you have your repo you'll add a single __redirects_ file to it. You'll populate this file with your shortlinks with the format:

``` html
/_<shortlink>_ _<destination>_
```

Here's my __redirects_ file (note they're all public links, don't add passwords or anything else sensitive to yours)

``` bash
/wowp0721 https://slides.chriswiegman.com/wowp0721
/wproc0521 https://slides.chriswiegman.com/wproc0521/index.html
/hiroy https://hiroy.io/wall-lean
/talks https://chriswiegman.com/speaking/
/hetzner https://hetzner.cloud/?ref=5zzcyZC96UC7
/masto https://mastodon.chriswiegman.com/@chris
/gpg https://chriswiegman.com/public.asc
/resume https://gist.github.com/ChrisWiegman/8a89d7c2aca775884ae4227ca3b5be01#file-resume-md
/nextdns https://nextdns.io/?from=tzsxrntw
/duolingo https://invite.duolingo.com/BDHTZTB5CWWKSNILZFDWRSJNJY
/dnsmadeeasy https://cp.dnsmadeeasy.com/u/94079
/digitalocean https://m.do.co/c/c4c947f40d7b
/code https://github.com/chriswiegman
/* https://chriswiegman.com/
```

Finally, note the "_/*_" on the last redirect. This is a catch-all that sends any 404s for the domain to my own homepage. You can handle this anyway you want or leave it off entirely but it's just one handy, yet simple, option for handling any attempts to retrieve a link that doesn't exist.

### Step 3: Create the Netlify site

Finally, you'll want to head over to [Netlify][3] and create your new site. Connect it to your GitHub repository and follow the directions to make sure your domain is setup right and, that's it. Any shortlink you give out will automatically redirect to the location you need it to.

This simple, but effective, setup will make it easy to share links with friends or associates that make getting to important URLs easy.

 [1]: https://cfw.li/resume
 [2]: https://yourls.org/
 [3]: https://www.netlify.com/
 [4]: https://www.digitalocean.com/
 [5]: https://gandi.net