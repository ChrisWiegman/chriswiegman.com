---
title: Keeping Docker Containers Updated
type: post
date: 2019-12-24T22:23:10+00:00
url: /2019/12/keeping-docker-containers-updated/
categories:
  - Technical
tags:
  - Development
  - Docker

---
Whether you’re self-hosting alternatives to big tech or simply hosting your website, chances are you’ve used Docker. It abstracts much of the chore of setting up and configuring server applications to run nearly anything. Just like their non-Docker counterparts though they still need to be updated to protect against the same security issues that patches and other upgrades handle.

Fortunately, instead of handling countless repositories or othe manual upgrades, there is an easier way with Docker that will handle it all for you in nearly all cases (I actually haven’t found one this method won’t work for but I’m sure they’re out there).
## Enter Watchtower {#enter-watchtower.wp-block-heading}

The easy solution to keeping your Docker containers updated is simply to add another container, [Watchtower][1]. This simple image will watch your existing containers and upgrade them as newer builds are released, no questions asked. Here’s how to get started with it.

## Adding the Watchtower container to docker-compose {#adding-the-watchtower-container-to-docker-compose.wp-block-heading}

I’m assuming you’re using Docker Compose here to run your existing containers. If not, you can check [Watchtower’s Documentation][2] to modify this for your own setup.

### Add the Watcher Service {#add-the-watcher-service.wp-block-heading}

First add the following to the services in your docker-compose.yaml.

<pre class="wp-block-code" aria-describedby="shcb-language-93" data-shcb-language-name="YAML" data-shcb-language-slug="yaml"><span><code class="hljs language-yaml">&lt;span class="hljs-attr">services:&lt;/span>
  &lt;span class="hljs-attr">watchtower:&lt;/span>
    &lt;span class="hljs-attr">command:&lt;/span> &lt;span class="hljs-string">--label-enable&lt;/span> &lt;span class="hljs-string">--cleanup&lt;/span> &lt;span class="hljs-string">--interval&lt;/span> &lt;span class="hljs-number">300&lt;/span>
    &lt;span class="hljs-attr">image:&lt;/span> &lt;span class="hljs-string">containrrr/watchtower&lt;/span>
    &lt;span class="hljs-attr">labels:&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">"com.centurylinklabs.watchtower.enable=true"&lt;/span>
    &lt;span class="hljs-attr">network_mode:&lt;/span> &lt;span class="hljs-string">none&lt;/span>
    &lt;span class="hljs-attr">restart:&lt;/span> &lt;span class="hljs-string">always&lt;/span>
    &lt;span class="hljs-attr">volumes:&lt;/span>
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">/var/run/docker.sock:/var/run/docker.sock&lt;/span></code></span><small class="shcb-language" id="shcb-language-93"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">YAML</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">yaml</span><span class="shcb-language__paren">)</span></small></pre>

This tells Watchtower to check for updates every 5 minutes (300 seconds), to remove old images and the only run on containers with the appropriate label. Note the last part, this is important. It allows you to ignore containers you might not want to update for whatever reason.

### Add the Watchtower label to your services {#add-the-watchtower-label-to-your-services.wp-block-heading}

Next, we need to add the appropriate label to each service we want Watchtower to keep updated

<pre class="wp-block-code" aria-describedby="shcb-language-94" data-shcb-language-name="YAML" data-shcb-language-slug="yaml"><span><code class="hljs language-yaml">&lt;span class="hljs-attr">mariadb:&lt;/span>
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
      &lt;span class="hljs-bullet">-&lt;/span> &lt;span class="hljs-string">./data/volumes/mariadb:/var/lib/mysql&lt;/span></code></span><small class="shcb-language" id="shcb-language-94"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">YAML</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">yaml</span><span class="shcb-language__paren">)</span></small></pre>

The above example adds watchtower to a MariaDB service. All we need to do is add `- "com.centurylinklabs.watchtower.enable=true"` to the _labels_ section of any existing service. When done, bring up docker-compose and you’re good to go.

## Some notes on using Watchtower {#some-notes-on-using-watchtower.wp-block-heading}

<ol class="wp-block-list">
  <li>
    <strong>Watch your tags</strong>: It may seem simple but, watch you’re tags. If you’re specifying an image version that won’t be updated there won’t be anything for Watchtower to update to. On the flip side, if you specify <em>latest</em> for your service’s tag Watchtower will update to every version including major versions that might break something on you.
  </li>
  <li>
    <strong>Check your logs</strong>: How do you know Watchtower is really working? Check the logs. <code>docker-compose logs watchtower</code>. This will show you every service Watchtower has updated since starting the service.
  </li>
</ol>

That’s it. If you’ve set the right tags and are up and running you no longer have to worry about out-of-date containers. Watchtower will take care of it all for you.

 [1]: https://github.com/containrrr/watchtower
 [2]: https://hub.docker.com/r/v2tec/watchtower