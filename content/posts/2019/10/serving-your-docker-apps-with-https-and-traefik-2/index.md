---
title: "Serving Your Docker Apps With HTTPS and Traefik 2"
date: 2019-10-08T08:24:38-04:00
description: "How to get your website running with Traefik 2 and Let's Encrypt."
draft: false
images: ["/images/serving-your-docker-apps-with-https-and-traefik-2.jpg"]
tags: ["Traefik","Traefik 2","SSL","Docker","Let's Encrypt"]
---

![Traefik 2.0 is available. Here's how to get it to work with your site](/images/serving-your-docker-apps-with-https-and-traefik-2.jpg)

[Traefik 2.0](https://traefik.io/) is available. If you're running multiple Docker apps on a single server it is one of the best ways to proxy them all to the web and handle tasks such as HTTPS. I've been using it for the past 2 years both for my old sites as well as for projects such as [Ouroboros](https://gitea.chriswiegman.com/chriswiegman/primary-docker "Primary Docker is my forked version of UF Health's Ouroboros") and [WP Engine's DevKit](https://wpengine.com/devkit/). Simply put, at least for the latter, it lets me run as many Docker sites as I need, each with their own separate application stacks, all over ports 80 and 443 without conflict.

A few weeks back, Traefik 2.0 came out. This is a major upgrade and will really improve what it can do for projects such as DevKit as it expands on the ability to proxy websites with the ability to proxy TCP applications as well. In this case we'll use it for MySQL where users will be able to access databases easily with a single hostname as well as it will cut down on the number of edits we have to do to the user's hosts file as we won't have an IP address that will change with every start and stop of a given site.

As great as Traefik is though (and it is pretty great), the documentation for 2.0 is still a bit behind. There are a lot of breaking changes and getting simple SSL to work on http websites only proved to be far more difficult that I had anticipated.

## A Working Configuration for Traefik 2 and SSL

For those who are going through the upgrade process themselves, here's how I got it to work.

The first is _traefik.toml_, this is Traefik's static configuration and sets up Let's encrypt and the entrypoints we'll be using to access the Traefik sites:

```toml
[log]
  level = "ERROR"

[providers.docker]
  exposedByDefault = false
  endpoint = "tcp://dockerproxy:2375"
  network = "traefik"

[api]
  dashboard = true
  debug = true

[entryPoints]
  [entryPoints.web]
    address = ":80"
  [entryPoints.web-secure]
    address = ":443"
  [entryPoints.dashboard]
    address = ":8080"

[certificatesResolvers]
  [certificatesResolvers.default.acme]
    email = "contact@chriswiegman.com"
    storage = "acme.json"
    [certificatesResolvers.default.acme.tlsChallenge]
```

There's a lot going on here but the two key areas are ___entrypoints___ and ___certificateresolvers___. The first opens the ports we need for our various applications for Traefik to listen on. The second sets up [Let's Encrypt](https://letsencrypt.org/) and instructs Traefik to store the certificates it gets in a file named acme.json.

The next file we need to worry about is our _docker-compose.yaml_ file. This specifices our servers as well as our routes to Traefik's dashboard and api as well as the various sites we need Traefik to proxy.

```yaml
version: "3"

networks:
  default:
    driver: bridge
  traefik:
    internal: true

services:
  traefik:
    image: traefik:2.0
    labels:
      - "com.centurylinklabs.watchtower.enable=true"
    networks:
      - default
      - traefik
    ports:
      - 80:80
      - 443:443
    restart: always
    volumes:
      - ./data/conf/traefik/acme.json:/acme.json
      - ./data/conf/traefik/traefik.toml:/traefik.toml
      - ./data/volumes/traefik/tmp:/tmp

  mysite:
    depends_on:
      - traefik
    image: mysitesimage
    labels:
      - "traefik.enable=true"
      - "traefik.http.middlewares.mysite-https.redirectscheme.scheme=https"
      - "traefik.http.routers.mysite-http.entrypoints=web"
      - "traefik.http.routers.mysite-http.rule=Host(`mysitesdomain.com`)"
      - "traefik.http.routers.mysite-http.middlewares=mysite-https@docker"
      - "traefik.http.routers.mysite.entrypoints=web-secure"
      - "traefik.http.routers.mysite.rule=Host(`mysitesdomain.com`)"
      - "traefik.http.routers.mysite.tls=true"
      - "traefik.http.routers.mysite.tls.certresolver=default"
    networks:
      - default
    restart: always
    volumes:
      - ./data/volumes/mysite:/var/www/mysite/data
```

This docker-compose file spins up a service called _mysite_ which is trying to serve a website on port 80. Let's break down some of the other items...

First, notice we're using 2 networks, one called _traefik_ and one called _default_. The _default_ network is internal only. This allows us to isolate the open port 80 on the site so we can run multiple sites on the same host. In this case, the only port 80 exposed to the world is the one from Traefik itself. The rest are just listened to by the Traefik container.

The next part is all the labels for the service itself. This took me a whole to get right. Let's break them down:

```
- "traefik.enable=true"
```
Enables Traefik for the container.

```
- "traefik.http.middlewares.mysite-https.redirectscheme.scheme=https"
```
Sets up a Traefik middleware which will redirect all traffic to https.

```
- "traefik.http.routers.mysite-http.entrypoints=web"
```
Specifies a router called _mysite-http_ which will be listening on the "web" entrypoint defined above in _traefik.toml_ (port 80).

```
- "traefik.http.routers.mysite-http.rule=Host(`mysitesdomain.com`)"
```
Specifies the hostname for the site on the _mysite-http_ router.

```
- "traefik.http.routers.mysite-http.middlewares=mysite-https@docker"
```
Tells the _mysite-http_ router to use the redirect middleware we defined above.

```
- "traefik.http.routers.mysite.entrypoints=web-secure"
```
Specifies a router called _mysite_ which will be listening on the "web-secure" entrypoint defined above in _traefik.toml_ (port 443).

```
- "traefik.http.routers.mysite.rule=Host(`mysitesdomain.com`)"
```
Specifies the hostname for the site on the _mysite_ router.

```
- "traefik.http.routers.mysite.tls=true"
```
Tells the _mysite_ router that it needs to terminate SSL requests. The format here is key and is easy to miss in existing Traefik documentation.

```
- "traefik.http.routers.mysite.tls.certresolver=default"
```
Finally, this line tells the _mysite_ router that it should be using the Let's Encrypt configuration we specified in _traefik.toml_. Without this it will try to use a self-signed certificate.

## Some things to consider

1. The configuration is very verbose. You'll need to use each label for every service you wish to proxt through Traefik. Make sure you update the names for each accordingly (in the above example you'll need to change _mysite_ to match each of your containers).
2. This configuration doesn't isolate the Docker socket meaning, should Traefik ever be compromised, your whole system could be compromised. I'll write up how you can solve that little problem soon.
3. Traefik is a wonderful service and they're working hard on improving the documentation for the new version. If you're using this guide to help you get started, please write-up any changes and share them back. It will be easier as the documentation gets better but, for now, putting all the items together can be a tedious process.

In the end, the upgrade wasn't the easiest but I'm quite satisfied with the results. If you've been using Nginx or another application to solve a similar problem I would highly recommend giving Traefik a shot on your next project.
