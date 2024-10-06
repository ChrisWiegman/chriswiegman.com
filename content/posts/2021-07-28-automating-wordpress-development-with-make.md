---
title: Automating WordPress Development with Make
type: post
date: 2021-07-28T12:42:50+00:00
url: /2021/07/automating-wordpress-development-with-make/
categories:
  - Technical
tags:
  - Automation
  - Development Tools
  - Make

---
Modern WordPress development is complex. This means that switching projects or letting a project sit for a period of time can lead to a learning curve similar to when you first started the project.

It doesn't have to be like this. If doesn't matter if your WordPress project is using Composer, React, Yarn, NPM or some other technology. You can easily automate common tasks across multiple projects with a single file in a system that is probably already running on your dev computer and those of your team.
## Enter GNU Make

[GNU Make][1] (or just Make from here on) has been around a very long time. Its original purpose was to _make_ your program with a series of targets. For example, if you were compiling a program that created a file called _my_program.exe_ you would create a make target simply called _my_program.exe_ that contained the necessary instructions, however complex, to build your file.

Today it can still be used to compile applications and create files but it is just as useful as a task runner to help consolidate all the tasks around your WordPress project.

Think of Make as a sort of CI/CD for your local application. Instead of something like GitHub Actions or CircleCI running a list of pre-defined tasks, you simply specify the tasks you want (now called targets in Make) and call them from the terminal when you need them.

## Getting started with Make

Getting started with Make is easy. In the root of your application simply create a file called _Makefile_ and save it. That's it.

Of course an empty Makefile doesn't have any targets so we'll want to change that. The first thing I normally do is add a help target. In the future running _make help_ will give me all the information I need to remember the various targets in my application. Here's how it looks:

<pre class="wp-block-code" aria-describedby="shcb-language-121" data-shcb-language-name="Makefile" data-shcb-language-slug="makefile"><span><code class="hljs language-makefile">&lt;span class="hljs-meta">&lt;span class="hljs-meta-keyword">.PHONY&lt;/span>: help&lt;/span>
&lt;span class="hljs-section">help:  ## Display help&lt;/span>
	@awk -F ':|&lt;span class="hljs-comment">##' \&lt;/span>
		'/^&#91;^\t].+?:.*?&lt;span class="hljs-comment">##/ {\&lt;/span>
			printf &lt;span class="hljs-string">"\033&#91;36m%-30s\033&#91;0m %s\n"&lt;/span>, $$1, $$NF \
		}' &lt;span class="hljs-variable">$(MAKEFILE_LIST)&lt;/span> | sort</code></span><small class="shcb-language" id="shcb-language-121"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">Makefile</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">makefile</span><span class="shcb-language__paren">)</span></small></pre>

A few things to note on this:

First is the _.PHONY_ line. This is followed by the name of our target, in this case help. Remember earlier when I said Make was originally used to make the files we need to use in our application? This is a relic of that. In this case we're telling it that _help_ is not a real file we're creating. It's a "PHONY" target instead. You'll want to use this for almost every target you create.

Now notice the second line. It starts with the name of our target, _help_, followed by _##_ and a description of the command. If we were to call this it would output every target in our make file followed by such a description.

How do we call it? Simply run the following:

<pre class="wp-block-code" aria-describedby="shcb-language-122" data-shcb-language-name="Makefile" data-shcb-language-slug="makefile"><span><code class="hljs language-makefile">make help</code></span><small class="shcb-language" id="shcb-language-122"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">Makefile</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">makefile</span><span class="shcb-language__paren">)</span></small></pre>

This syntax, "make" followed by our target, is how we'll call any other target we want to utilize.

You can also chain tasks together under a single target. For example, say you had a target called "build" and you wanted it to build your composer and npm assets. In this case I would set it up as three targets, _build_, _build-composer_, and _build-npm._ You could then invoke the main build target with the following:

<pre class="wp-block-code" aria-describedby="shcb-language-123" data-shcb-language-name="Makefile" data-shcb-language-slug="makefile"><span><code class="hljs language-makefile">&lt;span class="hljs-meta">&lt;span class="hljs-meta-keyword">.PHONY&lt;/span>: build&lt;/span>
&lt;span class="hljs-section">build: build-composer build-npm ## Build all composer and npm assets&lt;/span></code></span><small class="shcb-language" id="shcb-language-123"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">Makefile</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">makefile</span><span class="shcb-language__paren">)</span></small></pre>

Notice above I have the PHONY target as well as the description from before. If we were to call _make help_ here it would should the build target along with our description above. Unlike the help target above, however, this one doesn't do anything by itself. It simply calls the _build-composer_ and _build-npm_ targets we define elsewhere.

## An Example Make Script

Below is an example Makefile I'm using for a [small plugin I'm building][2]. This Makefile allows me to check out the repo from GitHub and simply run _make start_ to setup a development environment complete with a running site, appropriate coding standards, and even a few debugging plugins to make it all easy to work with. As a bonus, I could pass this repo to someone else, even if they aren't familiar with my setup, and they could get up and running and working on code within minutes instead of the hours that some modern WordPress projects take.

<pre class="wp-block-code" aria-describedby="shcb-language-124" data-shcb-language-name="Makefile" data-shcb-language-slug="makefile"><span><code class="hljs language-makefile shcb-code-table shcb-line-numbers">&lt;span class='shcb-loc'>&lt;span>DOCKER_RUN     := @docker run --rm
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>CURRENTUSER    := $&lt;span class="hljs-variable">$(id -u)&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>CURRENTGROUP   := $&lt;span class="hljs-variable">$(id -g)&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>COMPOSER_IMAGE := -v $&lt;span class="hljs-variable">$(pwd)&lt;/span>:/app --user &lt;span class="hljs-variable">$(CURRENTUSER)&lt;/span>:&lt;span class="hljs-variable">$(CURRENTGROUP)&lt;/span> composer
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>HAS_LANDO      := &lt;span class="hljs-variable">$(&lt;span class="hljs-built_in">shell&lt;/span> command -v lando 2&gt; /dev/null)&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>PLUGIN_VERSION := $&lt;span class="hljs-variable">$(grep "^ \* Version" plugin/chriswiegman-plugin.php| awk -F' ' '{print $3}' | cut -d ":" -f2 | sed 's/ //g')&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>HIGHLIGHT      :=\033&#91;0;32m
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>END_HIGHLIGHT  :=\033&#91;0m &lt;span class="hljs-comment"># No Color&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-meta">&lt;span class="hljs-meta-keyword">.PHONY&lt;/span>: build&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-section">build: build-docker build-pot-file  ## Builds all plugin assets and their associated docker images&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-meta">&lt;span class="hljs-meta-keyword">.PHONY&lt;/span>: build-docker&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-section">build-docker: build-docker-php&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-meta">&lt;span class="hljs-meta-keyword">.PHONY&lt;/span>: build-docker-php&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-section">build-docker-php:&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>	if &#91; ! &lt;span class="hljs-string">"$$(docker images | grep chriswiegmanplugin_phpunit_image)"&lt;/span> ]; then \
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>		echo &lt;span class="hljs-string">"Building the PHP image"&lt;/span>; \
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>		docker build -f Docker/Dockerfile-php -t chriswiegmanplugin_phpunit_image .; \
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>	fi
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-meta">&lt;span class="hljs-meta-keyword">.PHONY&lt;/span>: build-pot-file&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-section">build-pot-file: | lando-start ## Generates a .pot file for use in translations.&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>	@echo &lt;span class="hljs-string">"Generating .pot file"&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>	lando wp --path=./wordpress i18n make-pot plugin plugin/languages/chriswiegman-plugin.pot
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-meta">&lt;span class="hljs-meta-keyword">.PHONY&lt;/span>: clean&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-section">clean: clean-assets clean-build  ## Removes all build files and the plugin files. This is destructive.&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-meta">&lt;span class="hljs-meta-keyword">.PHONY&lt;/span>: clean-assets&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-section">clean-assets:&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>	@echo &lt;span class="hljs-string">"Cleaning up plugin assets"&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>	rm -rf \
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>		plugin/languages/*.pot
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-meta">&lt;span class="hljs-meta-keyword">.PHONY&lt;/span>: clean-build&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-section">clean-build:&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>	@echo &lt;span class="hljs-string">"Cleaning up build-artifacts"&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>	rm -rf \
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>		node_modules \
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>		wordpress \
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>		build \
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>		vendor \
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>		clover.xml \
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>		.phpunit.result.cache
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-meta">&lt;span class="hljs-meta-keyword">.PHONY&lt;/span>: destroy&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-section">destroy: ## Destroys the developer environment completely (this is irreversible)&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>	lando destroy -y
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>	&lt;span class="hljs-variable">$(MAKE)&lt;/span> clean
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>	if &#91; &lt;span class="hljs-string">"$$(docker images | grep chriswiegmanplugin_phpunit_image)"&lt;/span> ]; then \
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>		docker rmi $&lt;span class="hljs-variable">$(docker images --format '{{.Repository}}:{{.Tag}}' | grep 'chriswiegmanplugin_phpunit_image')&lt;/span>; \
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>	fi
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-meta">&lt;span class="hljs-meta-keyword">.PHONY&lt;/span>: flush-cache&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-section">flush-cache: ## Clears all server caches enabled within WordPress&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>	@echo &lt;span class="hljs-string">"Flushing cache"&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>	lando wp cache flush --path=./wordpress
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-meta">&lt;span class="hljs-meta-keyword">.PHONY&lt;/span>: delete-transients&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-section">delete-transients: ## Deletes all WordPress transients stored in the database&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>	@echo &lt;span class="hljs-string">"Deleting transients"&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>	lando wp transient delete --path=./wordpress --all
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-meta">&lt;span class="hljs-meta-keyword">.PHONY&lt;/span>: help&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-section">help:  ## Display help&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>	@awk -F ':|&lt;span class="hljs-comment">##' \&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>		'/^&#91;^\t].+?:.*?&lt;span class="hljs-comment">##/ {\&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>			printf &lt;span class="hljs-string">"\033&#91;36m%-30s\033&#91;0m %s\n"&lt;/span>, $$1, $$NF \
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>		}' &lt;span class="hljs-variable">$(MAKEFILE_LIST)&lt;/span> | sort
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-meta">&lt;span class="hljs-meta-keyword">.PHONY&lt;/span>: install&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-section">install: | clean-assets clean-build&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>	&lt;span class="hljs-variable">$(MAKE)&lt;/span> install-composer
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-meta">&lt;span class="hljs-meta-keyword">.PHONY&lt;/span>: install-composer&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-section">install-composer:&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>	&lt;span class="hljs-variable">$(DOCKER_RUN)&lt;/span> &lt;span class="hljs-variable">$(COMPOSER_IMAGE)&lt;/span> install
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-meta">&lt;span class="hljs-meta-keyword">.PHONY&lt;/span>: lando-start&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-section">lando-start:&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-keyword">ifdef&lt;/span> HAS_LANDO
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>	if &#91; ! -d ./wordpress/ ]; then \
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>		&lt;span class="hljs-variable">$(MAKE)&lt;/span> install; \
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>	fi
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>	if &#91; ! &lt;span class="hljs-string">"$$(docker ps | grep chriswiegmanplugin_appserver)"&lt;/span> ]; then \
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>		echo &lt;span class="hljs-string">"Starting Lando"&lt;/span>; \
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>		lando start; \
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>	fi
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>	if &#91; ! -f ./wordpress/wp-config.php ]; then \
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>		&lt;span class="hljs-variable">$(MAKE)&lt;/span> setup-wordpress; \
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>		&lt;span class="hljs-variable">$(MAKE)&lt;/span> setup-wordpress-plugins; \
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>		&lt;span class="hljs-variable">$(MAKE)&lt;/span> build-pot-file; \
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>		echo &lt;span class="hljs-string">"Your dev site is at: ${HIGHLIGHT}https://chriswiegman-plugin.lndo.site${END_HIGHLIGHT}"&lt;/span>; \
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>		echo &lt;span class="hljs-string">"See the readme for further details."&lt;/span>; \
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>	fi
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-keyword">endif&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-meta">&lt;span class="hljs-meta-keyword">.PHONY&lt;/span>: lando-stop&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-section">lando-stop:&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-keyword">ifdef&lt;/span> HAS_LANDO
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>	if &#91; &lt;span class="hljs-string">"$$(docker ps | grep chriswiegmanplugin_appserver)"&lt;/span> ]; then \
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>		echo &lt;span class="hljs-string">"Stopping Lando"&lt;/span>; \
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>		lando stop; \
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>	fi
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-keyword">endif&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-meta">&lt;span class="hljs-meta-keyword">.PHONY&lt;/span>: open-db&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-section">open-db: ## Open the database in TablePlus&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>	@echo &lt;span class="hljs-string">"Opening the database for direct access"&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>	open mysql://wordpress:wordpress@127.0.0.1:$&lt;span class="hljs-variable">$(lando info --service=database --path 0.external_connection.port | tr -d "'")&lt;/span>/wordpress?enviroment=local&name=$database&safeModeLevel=0&advancedSafeModeLevel=0
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-meta">&lt;span class="hljs-meta-keyword">.PHONY&lt;/span>: open-site&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-section">open-site: ## Open the development site in your default browser&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>	open https://chriswiegman-plugin.lndo.site
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-meta">&lt;span class="hljs-meta-keyword">.PHONY&lt;/span>: release&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-section">release: | build-pot-file chriswiegman-plugin-version.zip ## Generates a release zip of the plugin&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-meta">&lt;span class="hljs-meta-keyword">.PHONY&lt;/span>: reset&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-section">reset: destroy start ## Resets a running dev environment to new&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-meta">&lt;span class="hljs-meta-keyword">.PHONY&lt;/span>: setup-wordpress&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-section">setup-wordpress:&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>	@echo &lt;span class="hljs-string">"Setting up WordPress"&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>	lando wp core download --path=./wordpress --version=latest
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>	lando wp config create --dbname=wordpress --dbuser=wordpress --dbpass=wordpress --dbhost=database --path=./wordpress
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>	lando wp core install --path=./wordpress --url=https://chriswiegman-plugin.lndo.site --title=&lt;span class="hljs-string">"ChrisWiegman.com Functionality Development"&lt;/span> --admin_user=admin --admin_password=password --admin_email=contact@chriswiegman.com
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-meta">&lt;span class="hljs-meta-keyword">.PHONY&lt;/span>: setup-wordpress-plugins&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-section">setup-wordpress-plugins:&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>	lando wp plugin install --path=./wordpress debug-bar --activate
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>	lando wp plugin install --path=./wordpress query-monitor --activate
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-meta">&lt;span class="hljs-meta-keyword">.PHONY&lt;/span>: start&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-section">start: lando-start open-site ## Starts the development environment including downloading and setting up everything it needs&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-meta">&lt;span class="hljs-meta-keyword">.PHONY&lt;/span>: stop&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-section">stop: lando-stop ## Stops the development environment. This is non-destructive.&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-meta">&lt;span class="hljs-meta-keyword">.PHONY&lt;/span>: test&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-section">test: test-lint test-phpunit  ## Run all testing&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-meta">&lt;span class="hljs-meta-keyword">.PHONY&lt;/span>: test-lint&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-section">test-lint: test-lint-php ## Run linting on both PHP and JavaScript&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-meta">&lt;span class="hljs-meta-keyword">.PHONY&lt;/span>: test-lint-php&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-section">test-lint-php: ## Run linting on PHP only&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>	@echo &lt;span class="hljs-string">"Running PHP linting"&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>	./vendor/bin/phpcs --standard=./phpcs.xml
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-meta">&lt;span class="hljs-meta-keyword">.PHONY&lt;/span>: test-phpunit&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-section">test-phpunit: | build-docker-php ## Run PhpUnit&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>	@echo &lt;span class="hljs-string">"Running Unit Tests Without Coverage"&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>	docker run -v $&lt;span class="hljs-variable">$(pwd)&lt;/span>:/app --rm chriswiegmanplugin_phpunit_image /app/vendor/bin/phpunit
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-meta">&lt;span class="hljs-meta-keyword">.PHONY&lt;/span>: test-phpunit-coverage&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-section">test-phpunit-coverage: | build-docker-php ## Run PhpUnit with code coverage&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>	@echo &lt;span class="hljs-string">"Running Unit Tests With Coverage"&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>	docker run -v $&lt;span class="hljs-variable">$(pwd)&lt;/span>:/app --rm --user &lt;span class="hljs-variable">$(CURRENTUSER)&lt;/span>:&lt;span class="hljs-variable">$(CURRENTGROUP)&lt;/span> chriswiegmanplugin_phpunit_image /app/vendor/bin/phpunit  --coverage-text --coverage-html build/coverage/
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-meta">&lt;span class="hljs-meta-keyword">.PHONY&lt;/span>: trust-lando-cert-mac&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-section">trust-lando-cert-mac: ## Trust Lando's SSL certificate on your mac&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>	@echo &lt;span class="hljs-string">"Trusting Lando cert"&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>	sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain ~/.lando/certs/lndo.site.pem
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-meta">&lt;span class="hljs-meta-keyword">.PHONY&lt;/span>: update-composer&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-section">update-composer:&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>	&lt;span class="hljs-variable">$(DOCKER_RUN)&lt;/span> &lt;span class="hljs-variable">$(COMPOSER_IMAGE)&lt;/span> update
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-meta">&lt;span class="hljs-meta-keyword">.PHONY&lt;/span>: chriswiegman-plugin-version.zip&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-section">chriswiegman-plugin-version.zip:&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>	@echo &lt;span class="hljs-string">"Building release file: chriswiegman-plugin.&lt;span class="hljs-variable">$(PLUGIN_VERSION)&lt;/span>.zip"&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>	rm -rf chriswiegman-plugin.&lt;span class="hljs-variable">$(PLUGIN_VERSION)&lt;/span>.zip
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>	rm -rf build
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>	mkdir build
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>	cp -av plugin build
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>	mv build/plugin build/chriswiegman-plugin
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>	PLUGIN_VERSION=&lt;span class="hljs-variable">$(PLUGIN_VERSION)&lt;/span> && cd build && zip -r chriswiegman-plugin.$$PLUGIN_VERSION.zip *
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>	mv build/chriswiegman-plugin.&lt;span class="hljs-variable">$(PLUGIN_VERSION)&lt;/span>.zip ./
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>	if &#91; ! -f ./chriswiegman-plugin.&lt;span class="hljs-variable">$(PLUGIN_VERSION)&lt;/span>.zip  ]; then \
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>		echo &lt;span class="hljs-string">"file not available"&lt;/span>; \
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>		exit 1; \
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>	fi
&lt;/span>&lt;/span></code></span><small class="shcb-language" id="shcb-language-124"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">Makefile</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">makefile</span><span class="shcb-language__paren">)</span></small></pre>

If you want to try this Makefile yourself you can find the source at <https://github.com/ChrisWiegman/chriswiegman-plugin>. Note the Makefile above is only promised to be current at the time this post is published and the file itself will evolve over time.

What all does it do? Well, you could run _make help_ on it to find out but here's a breakdown of the important parts:

<ol class="wp-block-list">
  <li>
    It installs all plugin dependencies via composer
  </li>
  <li>
    It installs the latest version of WordPress as well as a few development plugins to make work on it easier
  </li>
  <li>
    It runs all unit tests including setup, teardown, etc
  </li>
  <li>
    It can create a "release" file I can then upload to my site
  </li>
  <li>
    It runs the WordPress coding standards against any code I write
  </li>
  <li>
    If I screw something up it can completely reset it all in a single command
  </li>
  <li>
    It can clean-up everything it's done when I stop working on the plugin
  </li>
</ol>

## Try it yourself

If you write code for WordPress you owe it to yourself to give Make a try. It doesn't care what library or tech you use, it's an old and proven technology and a little practice with it will give you an easy workflow that will translate across projects. From building assets to running dev sites and from automated testing to releasing your product, Make is a tool that can take any complex project and make it as simple as a single command.

 [1]: https://www.gnu.org/software/make/
 [2]: https://github.com/ChrisWiegman/chriswiegman-plugin