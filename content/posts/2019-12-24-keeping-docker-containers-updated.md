---
title: Keeping Docker Containers Updated
date: 2019-12-24T22:23:10+00:00
description: "A quick tutorial on keeping your Docker containers up to date with Watchtower."
categories:
  - Technical
tags:
  - Development
  - Docker
---

Whether you’re self-hosting alternatives to big tech or simply hosting your website, chances are you’ve used Docker. It abstracts much of the chore of setting up and configuring server applications to run nearly anything. Just like their non-Docker counterparts though they still need to be updated to protect against the same security issues that patches and other upgrades handle.

Fortunately, instead of handling countless repositories or othe manual upgrades, there is an easier way with Docker that will handle it all for you in nearly all cases (I actually haven’t found one this method won’t work for but I’m sure they’re out there).

## Enter Watchtower

The easy solution to keeping your Docker containers updated is simply to add another container, [Watchtower][1]. This simple image will watch your existing containers and upgrade them as newer builds are released, no questions asked. Here’s how to get started with it.

## Adding the Watchtower container to docker-compose

I’m assuming you’re using Docker Compose here to run your existing containers. If not, you can check [Watchtower’s Documentation][2] to modify this for your own setup.

### Add the Watcher Service

First add the following to the services in your docker-compose.yaml.

``` yaml
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
```

This tells Watchtower to check for updates every 5 minutes (300 seconds), to remove old images and the only run on containers with the appropriate label. Note the last part, this is important. It allows you to ignore containers you might not want to update for whatever reason.

### Add the Watchtower label to your services

Next, we need to add the appropriate label to each service we want Watchtower to keep updated

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
```

The above example adds watchtower to a MariaDB service. All we need to do is add `- "com.centurylinklabs.watchtower.enable=true"` to the _labels_ section of any existing service. When done, bring up docker-compose and you’re good to go.

## Some notes on using Watchtower

1. **Watch your tags**: It may seem simple but, watch you’re tags. If you’re specifying an image version that won’t be updated there won’t be anything for Watchtower to update to. On the flip side, if you specify *latest* for your service’s tag Watchtower will update to every version including major versions that might break something on you.
2. **Check your logs**: How do you know Watchtower is really working? Check the logs. `docker-compose logs watchtower`. This will show you every service Watchtower has updated since starting the service.

That’s it. If you’ve set the right tags and are up and running you no longer have to worry about out-of-date containers. Watchtower will take care of it all for you.

 [1]: https://github.com/containrrr/watchtower
 [2]: https://hub.docker.com/r/v2tec/watchtower