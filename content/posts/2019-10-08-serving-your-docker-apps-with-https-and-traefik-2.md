---
title: Serving Your Docker Apps With HTTPS and Traefik 2
type: post
date: 2019-10-08T20:45:00+00:00
url: /2019/10/serving-your-docker-apps-with-https-and-traefik-2/
featured_image: /images/2020/08/serving-your-docker-apps-with-https-and-traefik-2.jpg
categories:
  - Technical
tags:
  - Development
  - Docker
  - Traefik

---
[Traefik 2.0][1] is available. If you’re running multiple Docker apps on a single server it is one of the best ways to proxy them all to the web and handle tasks such as HTTPS. I’ve been using it for the past 2 years both for my old sites as well as for projects such as [Ouroboros][2] and [WP Engine’s DevKit][3]. Simply put, at least for the latter, it lets me run as many Docker sites as I need, each with their own separate application stacks, all over ports 80 and 443 without conflict.
A few weeks back, Traefik 2.0 came out. This is a major upgrade and will really improve what it can do for projects such as DevKit as it expands on the ability to proxy websites with the ability to proxy TCP applications as well. In this case we’ll use it for MySQL where users will be able to access databases easily with a single hostname as well as it will cut down on the number of edits we have to do to the user’s hosts file as we won’t have an IP address that will change with every start and stop of a given site.

As great as Traefik is though (and it is pretty great), the documentation for 2.0 is still a bit behind. There are a lot of breaking changes and getting simple SSL to work on http websites only proved to be far more difficult that I had anticipated.

## A Working Configuration for Traefik 2 and SSL {#a-working-configuration-for-traefik-2-and-ssl.wp-block-heading}

For those who are going through the upgrade process themselves, here’s how I got it to work.

The first is _traefik.toml_, this is Traefik’s static configuration and sets up Let’s encrypt and the entrypoints we’ll be using to access the Traefik sites:

<pre class="wp-block-code" aria-describedby="shcb-language-75" data-shcb-language-name="TOML, also INI" data-shcb-language-slug="ini"><span><code class="hljs language-ini">&lt;span class="hljs-section">&#91;log]&lt;/span>
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
    &lt;span class="hljs-section">&#91;certificatesResolvers.default.acme.tlsChallenge]&lt;/span></code></span><small class="shcb-language" id="shcb-language-75"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">TOML, also INI</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">ini</span><span class="shcb-language__paren">)</span></small></pre>

There's a lot going on here but the two key areas are **_entrypoints_** and **_certificateresolvers_**. The first opens the ports we need for our various applications for Traefik to listen on. The second sets up [Let's Encrypt][4] and instructs Traefik to store the certificates it gets in a file named acme.json.

The next file we need to worry about is our _docker-compose.yaml_ file. This specifices our servers as well as our routes to Traefik's dashboard and api as well as the various sites we need Traefik to proxy.

<pre class="wp-block-code" aria-describedby="shcb-language-76" data-shcb-language-name="YAML" data-shcb-language-slug="yaml"><span><code class="hljs language-yaml">&lt;span class="hljs-attr">version:&lt;/span> &lt;span class="hljs-string">"3"&lt;/span>

&lt;span class="hljs-attr">networks:&lt;/span>
  &lt;span class="hljs-attr">default:&lt;/span>
    &lt;span class="hljs-attr">driver:&lt;/span> &lt;span class="hljs-string">bridge&lt;/span>
  &lt;span class="hljs-attr">traefik:&lt;/span>
    &lt;span class="hljs-attr">internal:&lt;/span> &lt;span class="hljs-literal">true&lt;/span>

&lt;span class="hljs-attr">services:&lt;/span>
  &lt;span class="hljs-attr">traefik:&lt;/span>
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
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">./data/volumes/traefik/tmp:/tmp&lt;/span>

  &lt;span class="hljs-attr">mysite:&lt;/span>
    &lt;span class="hljs-attr">depends_on:&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">traefik&lt;/span>
    &lt;span class="hljs-attr">image:&lt;/span> &lt;span class="hljs-string">mysitesimage&lt;/span>
    &lt;span class="hljs-attr">labels:&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">"traefik.enable=true"&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">"traefik.http.middlewares.mysite-https.redirectscheme.scheme=https"&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">"traefik.http.routers.mysite-http.entrypoints=web"&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">"traefik.http.routers.mysite-http.rule=Host(`mysitesdomain.com`)"&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">"traefik.http.routers.mysite-http.middlewares=mysite-https@docker"&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">"traefik.http.routers.mysite.entrypoints=web-secure"&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">"traefik.http.routers.mysite.rule=Host(`mysitesdomain.com`)"&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">"traefik.http.routers.mysite.tls=true"&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">"traefik.http.routers.mysite.tls.certresolver=default"&lt;/span>
    &lt;span class="hljs-attr">networks:&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">default&lt;/span>
    &lt;span class="hljs-attr">restart:&lt;/span> &lt;span class="hljs-string">always&lt;/span>
    &lt;span class="hljs-attr">volumes:&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">./data/volumes/mysite:/var/www/mysite/data&lt;/span></code></span><small class="shcb-language" id="shcb-language-76"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">YAML</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">yaml</span><span class="shcb-language__paren">)</span></small></pre>

This docker-compose file spins up a service called _mysite_ which is trying to serve a website on port 80. Let’s break down some of the other items…

First, notice we’re using 2 networks, one called _traefik_ and one called _default_. The _default_ network is internal only. This allows us to isolate the open port 80 on the site so we can run multiple sites on the same host. In this case, the only port 80 exposed to the world is the one from Traefik itself. The rest are just listened to by the Traefik container.

The next part is all the labels for the service itself. This took me a whole to get right. Let’s break them down:

<pre class="wp-block-code" aria-describedby="shcb-language-77" data-shcb-language-name="JavaScript" data-shcb-language-slug="javascript"><span><code class="hljs language-javascript">- &lt;span class="hljs-string">"traefik.enable=true"&lt;/span>
</code></span><small class="shcb-language" id="shcb-language-77"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">JavaScript</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">javascript</span><span class="shcb-language__paren">)</span></small></pre>

Enables Traefik for the container.

<pre class="wp-block-code" aria-describedby="shcb-language-78" data-shcb-language-name="JavaScript" data-shcb-language-slug="javascript"><span><code class="hljs language-javascript">- &lt;span class="hljs-string">"traefik.http.middlewares.mysite-https.redirectscheme.scheme=https"&lt;/span>
</code></span><small class="shcb-language" id="shcb-language-78"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">JavaScript</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">javascript</span><span class="shcb-language__paren">)</span></small></pre>

Sets up a Traefik middleware which will redirect all traffic to https.

<pre class="wp-block-code" aria-describedby="shcb-language-79" data-shcb-language-name="JavaScript" data-shcb-language-slug="javascript"><span><code class="hljs language-javascript">- &lt;span class="hljs-string">"traefik.http.routers.mysite-http.entrypoints=web"&lt;/span>
</code></span><small class="shcb-language" id="shcb-language-79"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">JavaScript</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">javascript</span><span class="shcb-language__paren">)</span></small></pre>

Specifies a router called _mysite-http_ which will be listening on the “web” entrypoint defined above in _traefik.toml_ (port 80).

<pre class="wp-block-code" aria-describedby="shcb-language-80" data-shcb-language-name="JavaScript" data-shcb-language-slug="javascript"><span><code class="hljs language-javascript">- &lt;span class="hljs-string">"traefik.http.routers.mysite-http.rule=Host(`mysitesdomain.com`)"&lt;/span>
</code></span><small class="shcb-language" id="shcb-language-80"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">JavaScript</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">javascript</span><span class="shcb-language__paren">)</span></small></pre>

Specifies the hostname for the site on the _mysite-http_ router.

<pre class="wp-block-code" aria-describedby="shcb-language-81" data-shcb-language-name="JavaScript" data-shcb-language-slug="javascript"><span><code class="hljs language-javascript">- &lt;span class="hljs-string">"traefik.http.routers.mysite-http.middlewares=mysite-https@docker"&lt;/span>
</code></span><small class="shcb-language" id="shcb-language-81"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">JavaScript</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">javascript</span><span class="shcb-language__paren">)</span></small></pre>

Tells the _mysite-http_ router to use the redirect middleware we defined above.

<pre class="wp-block-code" aria-describedby="shcb-language-82" data-shcb-language-name="JavaScript" data-shcb-language-slug="javascript"><span><code class="hljs language-javascript">- &lt;span class="hljs-string">"traefik.http.routers.mysite.entrypoints=web-secure"&lt;/span>
</code></span><small class="shcb-language" id="shcb-language-82"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">JavaScript</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">javascript</span><span class="shcb-language__paren">)</span></small></pre>

Specifies a router called _mysite_ which will be listening on the “web-secure” entrypoint defined above in _traefik.toml_ (port 443).

<pre class="wp-block-code" aria-describedby="shcb-language-83" data-shcb-language-name="JavaScript" data-shcb-language-slug="javascript"><span><code class="hljs language-javascript">- &lt;span class="hljs-string">"traefik.http.routers.mysite.rule=Host(`mysitesdomain.com`)"&lt;/span>
</code></span><small class="shcb-language" id="shcb-language-83"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">JavaScript</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">javascript</span><span class="shcb-language__paren">)</span></small></pre>

Specifies the hostname for the site on the _mysite_ router.

<pre class="wp-block-code" aria-describedby="shcb-language-84" data-shcb-language-name="JavaScript" data-shcb-language-slug="javascript"><span><code class="hljs language-javascript">- &lt;span class="hljs-string">"traefik.http.routers.mysite.tls=true"&lt;/span>
</code></span><small class="shcb-language" id="shcb-language-84"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">JavaScript</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">javascript</span><span class="shcb-language__paren">)</span></small></pre>

Tells the _mysite_ router that it needs to terminate SSL requests. The format here is key and is easy to miss in existing Traefik documentation.

<pre class="wp-block-code" aria-describedby="shcb-language-85" data-shcb-language-name="JavaScript" data-shcb-language-slug="javascript"><span><code class="hljs language-javascript">- &lt;span class="hljs-string">"traefik.http.routers.mysite.tls.certresolver=default"&lt;/span>
</code></span><small class="shcb-language" id="shcb-language-85"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">JavaScript</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">javascript</span><span class="shcb-language__paren">)</span></small></pre>

Finally, this line tells the _mysite_ router that it should be using the Let’s Encrypt configuration we specified in _traefik.toml_. Without this it will try to use a self-signed certificate.

## Some things to consider {#some-things-to-consider.wp-block-heading}

<ol class="wp-block-list">
  <li>
    The configuration is very verbose. You’ll need to use each label for every service you wish to proxt through Traefik. Make sure you update the names for each accordingly (in the above example you’ll need to change <em>mysite</em> to match each of your containers).
  </li>
  <li>
    This configuration doesn’t isolate the Docker socket meaning, should Traefik ever be compromised, your whole system could be compromised. I’ll write up how you can solve that little problem soon.
  </li>
  <li>
    Traefik is a wonderful service and they’re working hard on improving the documentation for the new version. If you’re using this guide to help you get started, please write-up any changes and share them back. It will be easier as the documentation gets better but, for now, putting all the items together can be a tedious process.
  </li>
</ol>

In the end, the upgrade wasn’t the easiest but I’m quite satisfied with the results. If you’ve been using Nginx or another application to solve a similar problem I would highly recommend giving Traefik a shot on your next project.

 [1]: https://traefik.io/
 [2]: https://github.com/ChrisWiegman/primary-docker
 [3]: https://wpengine.com/devkit/
 [4]: https://letsencrypt.org/