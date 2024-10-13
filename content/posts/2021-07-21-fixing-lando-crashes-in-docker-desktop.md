---
title: Fixing Lando Crashes in Docker Desktop
date: 2021-07-21T13:43:13+00:00
featured_image: /images/2021/07/Screen-Shot-2021-07-21-at-9.31.35-AM.png
categories:
  - Technical
tags:
  - Docker
  - Lando
---

If you use Lando and Docker for web development you might have noticed a problem in the last few weeks. In my case this manifested as the following screenshot during _lando start_:

![The trace output of Lando crashing on start due to an error in your Docker config.](/images/2021/07/lando-crash-message.png)

The issue itself can be summed up in the following error message:

``` css
services.app.env_file must be a string
```

or

``` css
services.appserver_nginx.labels.traefik.http.routers.51ceda58f85aacb14f0ba2e83c578df12f64202b-secured.tls must be a string, number or null
```

The issue is actually due to a change in Docker Desktop that released in version 3.4 for Mac. This is because Docker has started including Docker Compose as part of the core Docker CLI ([you can read about the full change here][1]).

Fortunately the fix is pretty easy. In Docker Desktop simply go to _Settings->Experimental Features_ and turn off "Use Docker Compose V2." Then restart Docker and launch your Lando application.

![Uncheck 'Use Docker Compose V2' in 'Experimental Features'](/images/2021/07/Screen-Shot-2021-07-21-at-9.31.35-AM.png "Uncheck 'Use Docker Compose V2' in 'Experimental Features'")

 [1]: https://docs.docker.com/compose/cli-command/