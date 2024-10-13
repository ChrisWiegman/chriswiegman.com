---
title: Fixing Networking in Fedora 37 and Docker-compose
date: 2023-01-16T13:31:38+00:00
categories:
  - Technical
tags:
  - Docker
  - Fedora
  - Networking
---

I've had a lot of good luck since [I switched to Fedora a few weeks back][1]. For the most part everything has "just worked" with one major exception, docker-compose. By default docker-compose containers haven't been able to find each other and that's a problem when you're trying to test some apps.
Before I continue I want to call out that I initially found this solution online but my Firefox browser clears its history every time I close it (by my choice) and I lost the solution. This post is my attempt to remember the fix by documenting it.

## Fixing Networking in Fedora 37 and Docker-compose

Note the crux of the issue is [firewalld][2] and the firewall rules it creates for Docker. Here are the steps I've taken to fix it.

To fix it we'll disable the following rules by adding a drop-in configuration file to Docker. This will prevent Docker from trying to create firewall rules and, in my testing, seems to restore the ability for Docker containers to talk to each other using Docker-compose, particularly if you've specified an _internal_ network in your docker-compose.yaml.

First, create the directory where the configuration file will live.

``` bash
sudo mkdir /etc/systemd/system/docker.service.d
```

Next edit the following file with your editor of choice: _/etc/systemd/system/docker.service.d/docker.conf_

Paste in the following configuration (note that, yes, you do need the empty line with _ExecStart=_).

``` toml
[Service]
EnvironmentFile=-/etc/default/docker
ExecStart=
ExecStart=/usr/bin/dockerd --iptables=false -H fd://
```

Finally, restart your computer to easily reload Docker and clear the existing firewall rules. Now you should easily be able to get your Docker containers to talk to each other.

 [1]: /2023/01/thoughts-on-moving-from-ubuntu-to-fedora/
 [2]: https://firewalld.org