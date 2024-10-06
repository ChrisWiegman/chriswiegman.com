---
title: Protecting Your Docker Socket With Traefik 2
type: post
date: 2019-11-27T22:11:42+00:00
url: /2019/11/protecting-your-docker-socket-with-traefik-2/
featured_image: /images/2020/08/serving-your-docker-apps-with-https-and-traefik-2.jpg
categories:
  - Technical
tags:
  - Docker
  - Security
  - Traefik

---
[Traefik][1] is a great way to handle the orchestration between multiple Docker apps. With a few lines of code it is relatively easy to setup a Traefik reverse proxy complete with SSL cert generation and all the other goodies your budding network will need, but if you’re using Docker with it, there is a rather major security issue you should consider. As per [Traefik’s own documentation][2]:
<blockquote class="wp-block-quote is-layout-flow wp-block-quote-is-layout-flow">
  <p>
    Accessing the Docker API without any restriction is a security concern: If Traefik is attacked, then the attacker might get access to the underlying host.
  </p>
</blockquote>

and from [Docker’s documentation][3]:

<blockquote class="wp-block-quote is-layout-flow wp-block-quote-is-layout-flow">
  <p>
    Running containers (and applications) with Docker implies running the Docker daemon. This daemon requires root privileges unless you opt-in to Rootless mode (experimental), and you should therefore be aware of some important details.
  </p>
</blockquote>

<blockquote class="wp-block-quote is-layout-flow wp-block-quote-is-layout-flow">
  <p>
    First of all, only trusted users should be allowed to control your Docker daemon. This is a direct consequence of some powerful Docker features. Specifically, Docker allows you to share a directory between the Docker host and a guest container; and it allows you to do so without limiting the access rights of the container. This means that you can start a container where the /host directory is the / directory on your host; and the container can alter your host filesystem without any restriction. This is similar to how virtualization systems allow filesystem resource sharing. Nothing prevents you from sharing your root filesystem (or even your root block device) with a virtual machine…
  </p>
</blockquote>

Put simply, allowing Traefik unrestricted access to your Docker socket file could result in a vulnerability to the host computer should any other part of the Traefik container ever be compromised.

## Enter Docker Socket Proxy {#enter-docker-socket-proxy.wp-block-heading}

Fortunately, there is an easy fix for this. Instead of allowing our publicly-facing Traefik container full access to the Docker socket file, we can instead proxy only the API calls we need with [Tecnativa’s Docker Socket Proxy][4] project. This ensures Docker’s socket file is never exposed to the public along with all the headaches doing so could cause an unknowing site owner.

## Setting up Docker Socket Proxy {#setting-up-docker-socket-proxy.wp-block-heading}

First, we need to add the service to our docker-compose.yaml file:

<pre class="wp-block-code" aria-describedby="shcb-language-86" data-shcb-language-name="YAML" data-shcb-language-slug="yaml"><span><code class="hljs language-yaml">&lt;span class="hljs-attr">services:&lt;/span>
  &lt;span class="hljs-attr">dockerproxy:&lt;/span>
    &lt;span class="hljs-attr">depends_on:&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">watchtower&lt;/span>
    &lt;span class="hljs-attr">environment:&lt;/span>
      &lt;span class="hljs-attr">CONTAINERS:&lt;/span> &lt;span class="hljs-number">1&lt;/span>
    &lt;span class="hljs-attr">image:&lt;/span> &lt;span class="hljs-string">tecnativa/docker-socket-proxy&lt;/span>
    &lt;span class="hljs-attr">networks:&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">traefik&lt;/span>
    &lt;span class="hljs-attr">ports:&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-number">2375&lt;/span>
    &lt;span class="hljs-attr">volumes:&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">"/var/run/docker.sock:/var/run/docker.sock"&lt;/span></code></span><small class="shcb-language" id="shcb-language-86"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">YAML</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">yaml</span><span class="shcb-language__paren">)</span></small></pre>

The above adds the socket proxy and does it on it’s own network. It’s best to keep it separated from the same Docker network as the rest of your applications.

Next we need to modify our Traefik configuration…

<pre class="wp-block-code" aria-describedby="shcb-language-87" data-shcb-language-name="YAML" data-shcb-language-slug="yaml"><span><code class="hljs language-yaml">&lt;span class="hljs-attr">services:&lt;/span>
  &lt;span class="hljs-attr">traefik:&lt;/span>
    &lt;span class="hljs-attr">depends_on:&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">dockerproxy&lt;/span>
    &lt;span class="hljs-attr">image:&lt;/span> &lt;span class="hljs-string">traefik:2.0&lt;/span>
    &lt;span class="hljs-attr">networks:&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">default&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">traefik&lt;/span>
    &lt;span class="hljs-attr">ports:&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-number">80&lt;/span>&lt;span class="hljs-string">:80&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-number">443&lt;/span>&lt;span class="hljs-string">:443&lt;/span>
    &lt;span class="hljs-attr">restart:&lt;/span> &lt;span class="hljs-string">always&lt;/span>
    &lt;span class="hljs-attr">volumes:&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">./traefik.toml:/traefik.toml&lt;/span></code></span><small class="shcb-language" id="shcb-language-87"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">YAML</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">yaml</span><span class="shcb-language__paren">)</span></small></pre>

Take a look at what we’re doing above, It’s pretty basic and probably looks similar to what you’re already doing with a few differences. Note, first, the two networks. Only the “default” network will be open to the outside world. Second, we’re not longer mapping the Docker socket file as we normally would. We’re close now, all we have to do is tell Traefik where to find the Docker API.

Editing traefik.toml for docker:

<pre class="wp-block-code" aria-describedby="shcb-language-88" data-shcb-language-name="TOML, also INI" data-shcb-language-slug="ini"><span><code class="hljs language-ini">&lt;span class="hljs-section">&#91;providers.docker]&lt;/span>
  exposedByDefault = false
  endpoint = "tcp://dockerproxy:2375"
  network = "traefik"</code></span><small class="shcb-language" id="shcb-language-88"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">TOML, also INI</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">ini</span><span class="shcb-language__paren">)</span></small></pre>

That’s it. In Traefik’s configuration file (note this is in Traefik 2.0) we simply need to specify the docker provider and add both the endpoint and the network we plan to contact it on. That’s it. Restart your docker services and you should now be proxying all Docker call via the Docker Socket Proxy. Congrats, your sites are now safer!

 [1]: https://traefik.io
 [2]: https://docs.traefik.io/providers/docker/#docker-api-access
 [3]: https://docs.docker.com/engine/security/security/#docker-daemon-attack-surface
 [4]: https://github.com/Tecnativa/docker-socket-proxy