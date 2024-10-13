---
title: Running Nextcloud With Docker and Traefik 2
date: 2020-01-04T15:25:15+00:00
featured_image: /images/2020/08/running-nextcloud-with-docker-and-traefik-2.jpg
categories:
  - Technical
tags:
  - Docker
  - Nextcloud
  - Traefik
---

I've been writing on general [Traefik 2](https://containo.us/traefik/) usage for self-hosting for a couple of months now but, to date, I haven't gone deep into any of the services I've been using it for myself. The first I want to cover has been the most import for me in my quest to leave big-tech behind, [Nextcloud](https://nextcloud.com/). Today I use it as a replacement for Google Drive and Calendar, Contacts, Keep and Tasks. Believe it or not, that's just scratching the surface of what it is capable of too. The catch is, there isn't much out there on getting it running right, particularly behind a proxy like Traefik 2.

This tutorial will get you a Nextcloud instance running behind Traefik 2 with auto-updates and a clean security overview.

## Before you start

Before you start, make sure you have a domain for your Nextcloud instance and that it is pointing to your server. On your server, make sure you have [Docker](https://www.docker.com/) and [Docker-compose](https://docs.docker.com/compose/) available and that web ports (80 and 443) are available to the internet.

## Setting up Traefik 2

Believe it or not, we can do this whole thing with a single docker-compose file. For a more complete explanation on the Traefik code below, you can visit my tutorials on [hosting with Traefik 2](/2019/10/serving-your-docker-apps-with-https-and-traefik-2/), [keeping your Docker containers updated](/2019/12/keeping-docker-containers-updated/) and [protecting your Docker socket file with Traefik](/2019/11/protecting-your-docker-socket-with-traefik-2/).

docker-compose.yaml

``` yaml
version: "3"

networks:
  default:
    driver: bridge
  traefik:
    internal: true

services:
  watchtower:
    command: --label-enable --cleanup --interval 300
    image: containrrr/watchtower
    labels:
      - "com.centurylinklabs.watchtower.enable=true"
    network_mode: none
    restart: always
    volumes:
      - /var/run/docker.sock:/var/run/docker.sock

  dockerproxy:
    depends_on:
      - watchtower
    environment:
      CONTAINERS: 1
    image: tecnativa/docker-socket-proxy
    labels:
      - "com.centurylinklabs.watchtower.enable=true"
    networks:
      - traefik
    ports:
      - 2375
    volumes:
      - "/var/run/docker.sock:/var/run/docker.sock"

  traefik:
    depends_on:
      - dockerproxy
      - watchtower
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
```

The above will setup Traefik with a proxy for Docker's socket file and Watchtower to make sure it all stays up to date. In the folder where you put your docker-compose file you'll want to add two files to complete the Docker configuration. Adding them manually will help ensure they're portable later:

data/conf/traefik/acme.json
and
data/conf/traefik/traefik.toml

While acme.json should be empty (Traefik will use it to store SSL information) the traefik.toml file should include the following:

``` toml
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
    email = "contact@myemail.com"
    storage = "acme.json"
    [certificatesResolvers.default.acme.tlsChallenge]
```

If you were to run `docker-compose up -D` now you would have a running Traefik instance but of course that isn't all that helpful yet.

## Installing MariaDB and Redis

Nextcloud relies on both Redis and MariaDB for storing its data. To get them we'll add the following to the _services_ section of our docker-compose.yaml file:

``` yaml
  mariadb:
    depends_on:
      - watchtower
    env_file: .mariadb.env
    image: mariadb:10
    labels:
      - "com.centurylinklabs.watchtower.enable=true"
    networks:
      - default
    ports:
      - 3306:3306
    restart: always
    volumes:
      - ./data/volumes/mariadb:/var/lib/mysql

  redis:
    depends_on:
      - watchtower
    image: redis:5
    labels:
      - "com.centurylinklabs.watchtower.enable=true"
    networks:
      - default
    restart: always
    volumes:
      - ./data/volumes/redis:/data
```

Note the _volumes_ sections in both of the above service configs. These will ensure any data you run in Docker is preserved. If you wanted, you could move the _data/volumes_ folder to another server or simply kill and restart Docker and all your data would be preserved.

Note the MariaDB setup specifies a .env file, _.mariadb.env_ to be specific, in the same directory as your docker-compose file. That should specify your MYSQL_ROOT_PASSWORD. Once setup, log into the database with your favorite database editor and do two things:

1. Setup a database called _nextcloud_
2. Create a user and grant it all privileges to only the Nextcloud database.

By default, MariaDB only gives you an empty server. The above two steps will ensure you have a database to use and that the database is only accessible to its own user. Should you add services later this will help keep your Nextcloud database safe should any other databases ever be compromised.

## Adding Nextcloud

Finally, we need to add Nextcloud to our configuration. Doing so is as simple as adding a block to the services section of docker-compose.yaml as you did above:

``` yaml
  nextcloud:
    depends_on:
      - mariadb
      - redis
      - traefik
      - watchtower
    image: nextcloud:17
    labels:
      - "traefik.enable=true"
      - "traefik.http.middlewares.nextcloud-caldav.redirectregex.permanent=true"
      - "traefik.http.middlewares.nextcloud-caldav.redirectregex.regex=^https://(.*)/.well-known/(card|cal)dav"
      - "traefik.http.middlewares.nextcloud-caldav.redirectregex.replacement=https://$${1}/remote.php/dav/"
      - "traefik.http.middlewares.nextcloud-https.redirectscheme.scheme=https"
      - "traefik.http.routers.nextcloud-http.entrypoints=web"
      - "traefik.http.routers.nextcloud-http.rule=Host(`cloud.thewiegmans.com`)"
      - "traefik.http.routers.nextcloud-http.middlewares=nextcloud-https@docker"
      - "traefik.http.routers.nextcloud.entrypoints=web-secure"
      - "traefik.http.routers.nextcloud.rule=Host(`cloud.thewiegmans.com`)"
      - "traefik.http.routers.nextcloud.middlewares=nextcloud-caldav@docker"
      - "traefik.http.routers.nextcloud.tls=true"
      - "traefik.http.routers.nextcloud.tls.certresolver=default"
      - "com.centurylinklabs.watchtower.enable=true"
    networks:
      - default
    restart: always
    volumes:
      - ./data/volumes/nextcloud/html:/var/www/html
```

Let's break this down:

The following section sets up a service named _nextcloud_ and tells it to start MariaDB, Redis, Traefik and Watchtower first.

``` yaml
  nextcloud:
    depends_on:
      - mariadb
      - redis
      - traefik
      - watchtower
```

Next we tell it to use the official image for Nextcloud 17. This is the one thing you'll have to change if you leave the _17_ in place. When new major versions, such as 18, are released you'll need to manually update the version. You can also replace 17 with _latest_ but that could break your Nextcloud apps if your server updates before apps are available.

``` yaml
    image: nextcloud:17
```

Labels are the meat and potatoes of our setup. These will ensure routes are available to find caldav and carddav services, redirect all traffic to https, make sure SSL is configured correctly and ensure Watchtower is watching the service for updates.

``` yaml
    labels:
      - "traefik.enable=true"
      - "traefik.http.middlewares.nextcloud-caldav.redirectregex.permanent=true"
      - "traefik.http.middlewares.nextcloud-caldav.redirectregex.regex=^https://(.*)/.well-known/(card|cal)dav"
      - "traefik.http.middlewares.nextcloud-caldav.redirectregex.replacement=https://$${1}/remote.php/dav/"
      - "traefik.http.middlewares.nextcloud-https.redirectscheme.scheme=https"
      - "traefik.http.routers.nextcloud-http.entrypoints=web"
      - "traefik.http.routers.nextcloud-http.rule=Host(`my_nextcloud_domain.com`)"
      - "traefik.http.routers.nextcloud-http.middlewares=nextcloud-https@docker"
      - "traefik.http.routers.nextcloud.entrypoints=web-secure"
      - "traefik.http.routers.nextcloud.rule=Host(`my_nextcloud_domain.com`)"
      - "traefik.http.routers.nextcloud.middlewares=nextcloud-caldav@docker"
      - "traefik.http.routers.nextcloud.tls=true"
      - "traefik.http.routers.nextcloud.tls.certresolver=default"
      - "com.centurylinklabs.watchtower.enable=true"
```

Next we tell it to only connect to the default (external) network and to always restart the service.

``` yaml
    networks:
      - default
    restart: always
```

Finally, we map our data directory. As with MariaDB and Redis, this will ensure your data is preserved and can easily be moved between containers or even servers.

``` yaml
    volumes:
      - ./data/volumes/nextcloud/html:/var/www/html
```

## Start your services

That's it. The above docker-compose-yaml with the supporting Traefik files should be ready to do. Try running `docker-compose up -D` and go to your Nextcloud domain to finish Nextcloud's own setup.
