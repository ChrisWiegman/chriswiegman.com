---
title: Accessing Elasticsearch Remotely through Vagrant
date: 2016-06-03T17:58:56+00:00
featured_image: /images/2020/07/Accessing-Elasticsearch-Remotely-through-Vagrant.jpg
categories:
  - Technical
tags:
  - Development Tools
  - Elasticsearch
  - Vagrant
---

I’ve been doing a lot of work on [10up’s](https://10up.com) [ElasticPress](https://wordpress.org/plugins/elasticpress/) project over the last year including implementation on various sites as well as work on the plugin itself. After stepping a way for a bit though I found a problem yesterday morning when while working on implementation for one of our larger clients.

## The Issue

Normally I develop entirely on [Primary Vagrant][1]. This means that in order to connect directly to Elasticsearch with a tool such as Paw or Postman I need to be able to connect to the box. Normally I simply input the url of the development site I work with and point it to port 9200 and I’m off and running. That wasn’t the case this morning. Yesterday morning, on a new install of the latest Elasticsearch and without any firewall or other software running it simply couldn’t connect.

## Some Caveats

Truth be told I hadn’t used a REST client like Paw for a while as I hadn’t working any ElasticPress implementations since before Elasticsearch 2.0. There lies the problem. Somewhere in the 2.0 line the default behaviour of allowing networking was turned off and the service was bound only to localhost. This is a change from previous versions.

## The Fix

Fortunately it was a pretty simple fix. Here’s what you can do if you need to make Elasticsearch available on your own Primary Vagrant, VVV or other Vagrant development box.

1.) Edit elasticsearch.yml
_sudo vi /etc/elasticsearch/elasticsearch.yml_

2.) Replace the binding address with _0.0.0.0_
Somewhere around line 54 (if you’re on Ubuntu with Elasticsearch 2.3) you’ll find _\# network.host: …_. Replace the line with the following (make sure to remove the # symbol):

_network.host: 0.0.0.0_

3.) Restart Elasticsearch
_sudo service elasticsearch restart_

Now, you should be able to query Elasticsearch directly from your host machine with a client like Paw or anything else you might need to get at it with.

 [1]: https://github.com/ChrisWiegman/primary-vagrant