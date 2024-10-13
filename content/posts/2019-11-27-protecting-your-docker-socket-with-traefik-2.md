---
title: Protecting Your Docker Socket With Traefik 2
date: 2019-11-27T22:11:42+00:00
description: "How to protect your Docker host with Traefik 2.0."
featured_image: /images/2020/08/serving-your-docker-apps-with-https-and-traefik-2.jpg
draft: false
categories:
  - Technical
tags:
  - Docker
  - Security
  - Traefik
---

[Traefik](https://traefik.io) is a great way to handle the orchestration between multiple Docker apps. With a few lines of code it is relatively easy to setup a Traefik reverse proxy complete with SSL cert generation and all the other goodies your budding network will need, but if you're using Docker with it, there is a rather major security issue you should consider. As per [Traefik's own documentation](https://docs.traefik.io/providers/docker/#docker-api-access):

> Accessing the Docker API without any restriction is a security concern: If Traefik is attacked, then the attacker might get access to the underlying host.

and from [Docker's documentation](https://docs.docker.com/engine/security/security/#docker-daemon-attack-surface):

> Running containers (and applications) with Docker implies running the Docker daemon. This daemon requires root privileges unless you opt-in to Rootless mode (experimental), and you should therefore be aware of some important details.

> First of all, only trusted users should be allowed to control your Docker daemon. This is a direct consequence of some powerful Docker features. Specifically, Docker allows you to share a directory between the Docker host and a guest container; and it allows you to do so without limiting the access rights of the container. This means that you can start a container where the /host directory is the / directory on your host; and the container can alter your host filesystem without any restriction. This is similar to how virtualization systems allow filesystem resource sharing. Nothing prevents you from sharing your root filesystem (or even your root block device) with a virtual machine...

Put simply, allowing Traefik unrestricted access to your Docker socket file could result in a vulnerability to the host computer should any other part of the Traefik container ever be compromised.

## Enter Docker Socket Proxy

Fortunately, there is an easy fix for this. Instead of allowing our publicly-facing Traefik container full access to the Docker socket file, we can instead proxy only the API calls we need with [Tecnativa's Docker Socket Proxy](https://github.com/Tecnativa/docker-socket-proxy) project. This ensures Docker's socket file is never exposed to the public along with all the headaches doing so could cause an unknowing site owner.

## Setting up Docker Socket Proxy

First, we need to add the service to our docker-compose.yaml file:

```yaml
services:
  dockerproxy:
    depends_on:
      - watchtower
    environment:
      CONTAINERS: 1
    image: tecnativa/docker-socket-proxy
    networks:
      - traefik
    ports:
      - 2375
    volumes:
      - "/var/run/docker.sock:/var/run/docker.sock"
```

The above adds the socket proxy and does it on it's own network. It's best to keep it separated from the same Docker network as the rest of your applications.

Next we need to modify our Traefik configuration...

```yaml
services:
  traefik:
    depends_on:
      - dockerproxy
    image: traefik:2.0
    networks:
      - default
      - traefik
    ports:
      - 80:80
      - 443:443
    restart: always
    volumes:
      - ./traefik.toml:/traefik.toml
```

Take a look at what we're doing above, It's pretty basic and probably looks similar to what you're already doing with a few differences. Note, first, the two networks. Only the "default" network will be open to the outside world. Second, we're not longer mapping the Docker socket file as we normally would. We're close now, all we have to do is tell Traefik where to find the Docker API.

Editing traefik.toml for docker:

```toml
[providers.docker]
  exposedByDefault = false
  endpoint = "tcp://dockerproxy:2375"
  network = "traefik"
```

That's it. In Traefik's configuation file (note this is in Traefik 2.0) we simply need to specify the docker provider and add both the endpoint and the network we plan to contact it on. That's it. Restart your docker services and you should now be proxying all Docker call via the Docker Socket Proxy. Congrats, your sites are now safer!