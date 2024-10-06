---
title: Running Nextcloud With Docker and Traefik 2
type: post
date: 2020-01-04T15:25:15+00:00
url: /2020/01/running-nextcloud-with-docker-and-traefik-2/
featured_image: /images/2020/08/running-nextcloud-with-docker-and-traefik-2.jpg
categories:
  - Technical
tags:
  - Docker
  - Nextcloud
  - Traefik

---
I’ve been writing on general [Traefik 2][1] usage for self-hosting for a couple of months now but, to date, I haven’t gone deep into any of the services I’ve been using it for myself. The first I want to cover has been the most import for me in my quest to leave big-tech behind, [Nextcloud][2]. Today I use it as a replacement for Google Drive and Calendar, Contacts, Keep and Tasks. Believe it or not, that’s just scratching the surface of what it is capable of too. The catch is, there isn’t much out there on getting it running right, particularly behind a proxy like Traefik 2.

This tutorial will get you a Nextcloud instance running behind Traefik 2 with auto-updates and a clean security overview.
## Before you start {#before-you-start.wp-block-heading}

Before you start, make sure you have a domain for your Nextcloud instance and that it is pointing to your server. On your server, make sure you have [Docker][3] and [Docker-compose][4] available and that web ports (80 and 443) are available to the internet.

## Setting up Traefik 2 {#setting-up-traefik-2.wp-block-heading}

Believe it or not, we can do this whole thing with a single docker-compose file. For a more complete explanation on the Traefik code below, you can visit my tutorials on [hosting with Traefik 2][5], [keeping your Docker containers updated][6] and [protecting your Docker socket file with Traefik][7].

docker-compose.yaml

<pre class="wp-block-code" aria-describedby="shcb-language-95" data-shcb-language-name="YAML" data-shcb-language-slug="yaml"><span><code class="hljs language-yaml">&lt;span class="hljs-attr">version:&lt;/span> &lt;span class="hljs-string">"3"&lt;/span>

&lt;span class="hljs-attr">networks:&lt;/span>
  &lt;span class="hljs-attr">default:&lt;/span>
    &lt;span class="hljs-attr">driver:&lt;/span> &lt;span class="hljs-string">bridge&lt;/span>
  &lt;span class="hljs-attr">traefik:&lt;/span>
    &lt;span class="hljs-attr">internal:&lt;/span> &lt;span class="hljs-literal">true&lt;/span>

&lt;span class="hljs-attr">services:&lt;/span>
  &lt;span class="hljs-attr">watchtower:&lt;/span>
    &lt;span class="hljs-attr">command:&lt;/span> &lt;span class="hljs-string">--label-enable&lt;/span> &lt;span class="hljs-string">--cleanup&lt;/span> &lt;span class="hljs-string">--interval&lt;/span> &lt;span class="hljs-number">300&lt;/span>
    &lt;span class="hljs-attr">image:&lt;/span> &lt;span class="hljs-string">containrrr/watchtower&lt;/span>
    &lt;span class="hljs-attr">labels:&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">"com.centurylinklabs.watchtower.enable=true"&lt;/span>
    &lt;span class="hljs-attr">network_mode:&lt;/span> &lt;span class="hljs-string">none&lt;/span>
    &lt;span class="hljs-attr">restart:&lt;/span> &lt;span class="hljs-string">always&lt;/span>
    &lt;span class="hljs-attr">volumes:&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">/var/run/docker.sock:/var/run/docker.sock&lt;/span>

  &lt;span class="hljs-attr">dockerproxy:&lt;/span>
    &lt;span class="hljs-attr">depends_on:&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">watchtower&lt;/span>
    &lt;span class="hljs-attr">environment:&lt;/span>
      &lt;span class="hljs-attr">CONTAINERS:&lt;/span> &lt;span class="hljs-number">1&lt;/span>
    &lt;span class="hljs-attr">image:&lt;/span> &lt;span class="hljs-string">tecnativa/docker-socket-proxy&lt;/span>
    &lt;span class="hljs-attr">labels:&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">"com.centurylinklabs.watchtower.enable=true"&lt;/span>
    &lt;span class="hljs-attr">networks:&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">traefik&lt;/span>
    &lt;span class="hljs-attr">ports:&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-number">2375&lt;/span>
    &lt;span class="hljs-attr">volumes:&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">"/var/run/docker.sock:/var/run/docker.sock"&lt;/span>

  &lt;span class="hljs-attr">traefik:&lt;/span>
    &lt;span class="hljs-attr">depends_on:&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">dockerproxy&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">watchtower&lt;/span>
    &lt;span class="hljs-attr">image:&lt;/span> &lt;span class="hljs-string">traefik:2.0&lt;/span>
    &lt;span class="hljs-attr">labels:&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">"com.centurylinklabs.watchtower.enable=true"&lt;/span>
    &lt;span class="hljs-attr">networks:&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">default&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">traefik&lt;/span>
    &lt;span class="hljs-attr">ports:&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-number">80&lt;/span>&lt;span class="hljs-string">:80&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-number">443&lt;/span>&lt;span class="hljs-string">:443&lt;/span>
    &lt;span class="hljs-attr">restart:&lt;/span> &lt;span class="hljs-string">always&lt;/span>
    &lt;span class="hljs-attr">volumes:&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">./data/conf/traefik/acme.json:/acme.json&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">./data/conf/traefik/traefik.toml:/traefik.toml&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">./data/volumes/traefik/tmp:/tmp&lt;/span></code></span><small class="shcb-language" id="shcb-language-95"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">YAML</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">yaml</span><span class="shcb-language__paren">)</span></small></pre>

The above will setup Traefik with a proxy for Docker’s socket file and Watchtower to make sure it all stays up to date. In the folder where you put your docker-compose file you’ll want to add two files to complete the Docker configuration. Adding them manually will help ensure they’re portable later:

data/conf/traefik/acme.json and data/conf/traefik/traefik.toml

While acme.json should be empty (Traefik will use it to store SSL information) the traefik.toml file should include the following:

<pre class="wp-block-code" aria-describedby="shcb-language-96" data-shcb-language-name="TOML, also INI" data-shcb-language-slug="ini"><span><code class="hljs language-ini">&lt;span class="hljs-section">&#91;log]&lt;/span>
  level = "ERROR"

&lt;span class="hljs-section">&#91;providers.docker]&lt;/span>
  exposedByDefault = false
  endpoint = "tcp://dockerproxy:2375"
  network = "traefik"

&lt;span class="hljs-section">&#91;api]&lt;/span>
  dashboard = true
  debug = true

&lt;span class="hljs-section">&#91;entryPoints]&lt;/span>
  &lt;span class="hljs-section">&#91;entryPoints.web]&lt;/span>
    address = ":80"
  &lt;span class="hljs-section">&#91;entryPoints.web-secure]&lt;/span>
    address = ":443"
  &lt;span class="hljs-section">&#91;entryPoints.dashboard]&lt;/span>
    address = ":8080"

&lt;span class="hljs-section">&#91;certificatesResolvers]&lt;/span>
  &lt;span class="hljs-section">&#91;certificatesResolvers.default.acme]&lt;/span>
    email = "contact@myemail.com"
    storage = "acme.json"
    &lt;span class="hljs-section">&#91;certificatesResolvers.default.acme.tlsChallenge]&lt;/span></code></span><small class="shcb-language" id="shcb-language-96"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">TOML, also INI</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">ini</span><span class="shcb-language__paren">)</span></small></pre>

If you were to run `docker-compose up -D` now you would have a running Traefik instance but of course that isn’t all that helpful yet.

## Installing MariaDB and Redis {#installing-mariadb-and-redis.wp-block-heading}

Nextcloud relies on both Redis and MariaDB for storing its data. To get them we’ll add the following to the _services_ section of our docker-compose.yaml file:

<pre class="wp-block-code" aria-describedby="shcb-language-97" data-shcb-language-name="YAML" data-shcb-language-slug="yaml"><span><code class="hljs language-yaml">&lt;span class="hljs-attr">mariadb:&lt;/span>
    &lt;span class="hljs-attr">depends_on:&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">watchtower&lt;/span>
    &lt;span class="hljs-attr">env_file:&lt;/span> &lt;span class="hljs-string">.mariadb.env&lt;/span>
    &lt;span class="hljs-attr">image:&lt;/span> &lt;span class="hljs-string">mariadb:10&lt;/span>
    &lt;span class="hljs-attr">labels:&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">"com.centurylinklabs.watchtower.enable=true"&lt;/span>
    &lt;span class="hljs-attr">networks:&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">default&lt;/span>
    &lt;span class="hljs-attr">ports:&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-number">3306&lt;/span>&lt;span class="hljs-string">:3306&lt;/span>
    &lt;span class="hljs-attr">restart:&lt;/span> &lt;span class="hljs-string">always&lt;/span>
    &lt;span class="hljs-attr">volumes:&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">./data/volumes/mariadb:/var/lib/mysql&lt;/span>

  &lt;span class="hljs-attr">redis:&lt;/span>
    &lt;span class="hljs-attr">depends_on:&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">watchtower&lt;/span>
    &lt;span class="hljs-attr">image:&lt;/span> &lt;span class="hljs-string">redis:5&lt;/span>
    &lt;span class="hljs-attr">labels:&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">"com.centurylinklabs.watchtower.enable=true"&lt;/span>
    &lt;span class="hljs-attr">networks:&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">default&lt;/span>
    &lt;span class="hljs-attr">restart:&lt;/span> &lt;span class="hljs-string">always&lt;/span>
    &lt;span class="hljs-attr">volumes:&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">./data/volumes/redis:/data&lt;/span></code></span><small class="shcb-language" id="shcb-language-97"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">YAML</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">yaml</span><span class="shcb-language__paren">)</span></small></pre>

Note the _volumes_ sections in both of the above service configs. These will ensure any data you run in Docker is preserved. If you wanted, you could move the _data/volumes_ folder to another server or simply kill and restart Docker and all your data would be preserved.

Note the MariaDB setup specifies a .env file, _.mariadb.env_ to be specific, in the same directory as your docker-compose file. That should specify your MYSQL\_ROOT\_PASSWORD. Once setup, log into the database with your favorite database editor and do two things:

<ol class="wp-block-list">
  <li>
    Setup a database called <em>nextcloud</em>
  </li>
  <li>
    Create a user and grant it all privileges to only the Nextcloud database.
  </li>
</ol>

By default, MariaDB only gives you an empty server. The above two steps will ensure you have a database to use and that the database is only accessible to its own user. Should you add services later this will help keep your Nextcloud database safe should any other databases ever be compromised.

## Adding Nextcloud {#adding-nextcloud.wp-block-heading}

Finally, we need to add Nextcloud to our configuration. Doing so is as simple as adding a block to the services section of docker-compose.yaml as you did above:

<pre class="wp-block-code" aria-describedby="shcb-language-98" data-shcb-language-name="YAML" data-shcb-language-slug="yaml"><span><code class="hljs language-yaml">&lt;span class="hljs-attr">nextcloud:&lt;/span>
    &lt;span class="hljs-attr">depends_on:&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">mariadb&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">redis&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">traefik&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">watchtower&lt;/span>
    &lt;span class="hljs-attr">image:&lt;/span> &lt;span class="hljs-string">nextcloud:17&lt;/span>
    &lt;span class="hljs-attr">labels:&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">"traefik.enable=true"&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">"traefik.http.middlewares.nextcloud-caldav.redirectregex.permanent=true"&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">"traefik.http.middlewares.nextcloud-caldav.redirectregex.regex=^https://(.*)/.well-known/(card|cal)dav"&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">"traefik.http.middlewares.nextcloud-caldav.redirectregex.replacement=https://$${1}/remote.php/dav/"&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">"traefik.http.middlewares.nextcloud-https.redirectscheme.scheme=https"&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">"traefik.http.routers.nextcloud-http.entrypoints=web"&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">"traefik.http.routers.nextcloud-http.rule=Host(`cloud.thewiegmans.com`)"&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">"traefik.http.routers.nextcloud-http.middlewares=nextcloud-https@docker"&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">"traefik.http.routers.nextcloud.entrypoints=web-secure"&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">"traefik.http.routers.nextcloud.rule=Host(`cloud.thewiegmans.com`)"&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">"traefik.http.routers.nextcloud.middlewares=nextcloud-caldav@docker"&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">"traefik.http.routers.nextcloud.tls=true"&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">"traefik.http.routers.nextcloud.tls.certresolver=default"&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">"com.centurylinklabs.watchtower.enable=true"&lt;/span>
    &lt;span class="hljs-attr">networks:&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">default&lt;/span>
    &lt;span class="hljs-attr">restart:&lt;/span> &lt;span class="hljs-string">always&lt;/span>
    &lt;span class="hljs-attr">volumes:&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">./data/volumes/nextcloud/html:/var/www/html&lt;/span></code></span><small class="shcb-language" id="shcb-language-98"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">YAML</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">yaml</span><span class="shcb-language__paren">)</span></small></pre>

Let’s break this down:

The following section sets up a service named _nextcloud_ and tells it to start MariaDB, Redis, Traefik and Watchtower first.

<pre class="wp-block-code" aria-describedby="shcb-language-99" data-shcb-language-name="YAML" data-shcb-language-slug="yaml"><span><code class="hljs language-yaml">  &lt;span class="hljs-attr">nextcloud:&lt;/span>
    &lt;span class="hljs-attr">depends_on:&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">mariadb&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">redis&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">traefik&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">watchtower&lt;/span></code></span><small class="shcb-language" id="shcb-language-99"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">YAML</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">yaml</span><span class="shcb-language__paren">)</span></small></pre>

Next we tell it to use the official image for Nextcloud 17. This is the one thing you’ll have to change if you leave the _17_ in place. When new major versions, such as 18, are released you’ll need to manually update the version. You can also replace 17 with _latest_ but that could break your Nextcloud apps if your server updates before apps are available.

<pre class="wp-block-code" aria-describedby="shcb-language-100" data-shcb-language-name="YAML" data-shcb-language-slug="yaml"><span><code class="hljs language-yaml">&lt;span class="hljs-attr">image:&lt;/span> &lt;span class="hljs-string">nextcloud:17&lt;/span></code></span><small class="shcb-language" id="shcb-language-100"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">YAML</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">yaml</span><span class="shcb-language__paren">)</span></small></pre>

Labels are the meat and potatoes of our setup. These will ensure routes are available to find caldav and carddav services, redirect all traffic to https, make sure SSL is configured correctly and ensure Watchtower is watching the service for updates.

<pre class="wp-block-code" aria-describedby="shcb-language-101" data-shcb-language-name="YAML" data-shcb-language-slug="yaml"><span><code class="hljs language-yaml"> &lt;span class="hljs-attr">labels:&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">"traefik.enable=true"&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">"traefik.http.middlewares.nextcloud-caldav.redirectregex.permanent=true"&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">"traefik.http.middlewares.nextcloud-caldav.redirectregex.regex=^https://(.*)/.well-known/(card|cal)dav"&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">"traefik.http.middlewares.nextcloud-caldav.redirectregex.replacement=https://$${1}/remote.php/dav/"&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">"traefik.http.middlewares.nextcloud-https.redirectscheme.scheme=https"&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">"traefik.http.routers.nextcloud-http.entrypoints=web"&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">"traefik.http.routers.nextcloud-http.rule=Host(`my_nextcloud_domain.com`)"&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">"traefik.http.routers.nextcloud-http.middlewares=nextcloud-https@docker"&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">"traefik.http.routers.nextcloud.entrypoints=web-secure"&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">"traefik.http.routers.nextcloud.rule=Host(`my_nextcloud_domain.com`)"&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">"traefik.http.routers.nextcloud.middlewares=nextcloud-caldav@docker"&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">"traefik.http.routers.nextcloud.tls=true"&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">"traefik.http.routers.nextcloud.tls.certresolver=default"&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">"com.centurylinklabs.watchtower.enable=true"&lt;/span></code></span><small class="shcb-language" id="shcb-language-101"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">YAML</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">yaml</span><span class="shcb-language__paren">)</span></small></pre>

Next we tell it to only connect to the default (external) network and to always restart the service.

<pre class="wp-block-code" aria-describedby="shcb-language-102" data-shcb-language-name="YAML" data-shcb-language-slug="yaml"><span><code class="hljs language-yaml">    &lt;span class="hljs-attr">networks:&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">default&lt;/span>
    &lt;span class="hljs-attr">restart:&lt;/span> &lt;span class="hljs-string">always&lt;/span></code></span><small class="shcb-language" id="shcb-language-102"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">YAML</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">yaml</span><span class="shcb-language__paren">)</span></small></pre>

Finally, we map our data directory. As with MariaDB and Redis, this will ensure your data is preserved and can easily be moved between containers or even servers.

<pre class="wp-block-code" aria-describedby="shcb-language-103" data-shcb-language-name="YAML" data-shcb-language-slug="yaml"><span><code class="hljs language-yaml">    &lt;span class="hljs-attr">volumes:&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">./data/volumes/nextcloud/html:/var/www/html&lt;/span></code></span><small class="shcb-language" id="shcb-language-103"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">YAML</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">yaml</span><span class="shcb-language__paren">)</span></small></pre>

## Start your services {#start-your-services.wp-block-heading}

That’s it. The above docker-compose-yaml with the supporting Traefik files should be ready to do. Try running `docker-compose up -D` and go to your Nextcloud domain to finish Nextcloud’s own setup.

 [1]: https://containo.us/traefik/
 [2]: https://nextcloud.com/
 [3]: https://www.docker.com/
 [4]: https://docs.docker.com/compose/
 [5]: /2019/10/serving-your-docker-apps-with-https-and-traefik-2/
 [6]: /2019/12/keeping-docker-containers-updated/
 [7]: /2019/11/protecting-your-docker-socket-with-traefik-2/