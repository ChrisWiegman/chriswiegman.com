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

``` makefile
.PHONY: help
help:  ## Display help
	@awk -F ':|##' \
		'/^[^\t].+?:.*?##/ {\
			printf "\033[36m%-30s\033[0m %s\n", $$1, $$NF \
		}' $(MAKEFILE_LIST) | sort
```

A few things to note on this:

First is the _.PHONY_ line. This is followed by the name of our target, in this case help. Remember earlier when I said Make was originally used to make the files we need to use in our application? This is a relic of that. In this case we're telling it that _help_ is not a real file we're creating. It's a "PHONY" target instead. You'll want to use this for almost every target you create.

Now notice the second line. It starts with the name of our target, _help_, followed by _##_ and a description of the command. If we were to call this it would output every target in our make file followed by such a description.

How do we call it? Simply run the following:

``` bash
make help
```

This syntax, "make" followed by our target, is how we'll call any other target we want to utilize.

You can also chain tasks together under a single target. For example, say you had a target called "build" and you wanted it to build your composer and npm assets. In this case I would set it up as three targets, _build_, _build-composer_, and _build-npm._ You could then invoke the main build target with the following:

``` makefile
.PHONY: build
build: build-composer build-npm ## Build all composer and npm assets
```

Notice above I have the PHONY target as well as the description from before. If we were to call _make help_ here it would should the build target along with our description above. Unlike the help target above, however, this one doesn't do anything by itself. It simply calls the _build-composer_ and _build-npm_ targets we define elsewhere.

## An Example Make Script

Below is an example Makefile I'm using for a [small plugin I'm building][2]. This Makefile allows me to check out the repo from GitHub and simply run _make start_ to setup a development environment complete with a running site, appropriate coding standards, and even a few debugging plugins to make it all easy to work with. As a bonus, I could pass this repo to someone else, even if they aren't familiar with my setup, and they could get up and running and working on code within minutes instead of the hours that some modern WordPress projects take.

``` makefile {linenos=table}
DOCKER_RUN     := @docker run --rm
CURRENTUSER    := $$(id -u)
CURRENTGROUP   := $$(id -g)
COMPOSER_IMAGE := -v $$(pwd):/app --user $(CURRENTUSER):$(CURRENTGROUP) composer
HAS_LANDO      := $(shell command -v lando 2> /dev/null)
PLUGIN_VERSION := $$(grep "^ \* Version" plugin/chriswiegman-plugin.php| awk -F' ' '{print $3}' | cut -d ":" -f2 | sed 's/ //g')
HIGHLIGHT      :=\033[0;32m
END_HIGHLIGHT  :=\033[0m # No Color

.PHONY: build
build: build-docker build-pot-file  ## Builds all plugin assets and their associated docker images

.PHONY: build-docker
build-docker: build-docker-php

.PHONY: build-docker-php
build-docker-php:
	if [ ! "$$(docker images | grep chriswiegmanplugin_phpunit_image)" ]; then \
		echo "Building the PHP image"; \
		docker build -f Docker/Dockerfile-php -t chriswiegmanplugin_phpunit_image .; \
	fi

.PHONY: build-pot-file
build-pot-file: | lando-start ## Generates a .pot file for use in translations.
	@echo "Generating .pot file"
	lando wp --path=./wordpress i18n make-pot plugin plugin/languages/chriswiegman-plugin.pot

.PHONY: clean
clean: clean-assets clean-build  ## Removes all build files and the plugin files. This is destructive.

.PHONY: clean-assets
clean-assets:
	@echo "Cleaning up plugin assets"
	rm -rf \
		plugin/languages/*.pot

.PHONY: clean-build
clean-build:
	@echo "Cleaning up build-artifacts"
	rm -rf \
		node_modules \
		wordpress \
		build \
		vendor \
		clover.xml \
		.phpunit.result.cache

.PHONY: destroy
destroy: ## Destroys the developer environment completely (this is irreversible)
	lando destroy -y
	$(MAKE) clean
	if [ "$$(docker images | grep chriswiegmanplugin_phpunit_image)" ]; then \
		docker rmi $$(docker images --format '{{.Repository}}:{{.Tag}}' | grep 'chriswiegmanplugin_phpunit_image'); \
	fi

.PHONY: flush-cache
flush-cache: ## Clears all server caches enabled within WordPress
	@echo "Flushing cache"
	lando wp cache flush --path=./wordpress

.PHONY: delete-transients
delete-transients: ## Deletes all WordPress transients stored in the database
	@echo "Deleting transients"
	lando wp transient delete --path=./wordpress --all

.PHONY: help
help:  ## Display help
	@awk -F ':|##' \
		'/^[^\t].+?:.*?##/ {\
			printf "\033[36m%-30s\033[0m %s\n", $$1, $$NF \
		}' $(MAKEFILE_LIST) | sort

.PHONY: install
install: | clean-assets clean-build
	$(MAKE) install-composer

.PHONY: install-composer
install-composer:
	$(DOCKER_RUN) $(COMPOSER_IMAGE) install

.PHONY: lando-start
lando-start:
ifdef HAS_LANDO
	if [ ! -d ./wordpress/ ]; then \
		$(MAKE) install; \
	fi
	if [ ! "$$(docker ps | grep chriswiegmanplugin_appserver)" ]; then \
		echo "Starting Lando"; \
		lando start; \
	fi
	if [ ! -f ./wordpress/wp-config.php ]; then \
		$(MAKE) setup-wordpress; \
		$(MAKE) setup-wordpress-plugins; \
		$(MAKE) build-pot-file; \
		echo "Your dev site is at: ${HIGHLIGHT}https://chriswiegman-plugin.lndo.site${END_HIGHLIGHT}"; \
		echo "See the readme for further details."; \
	fi
endif

.PHONY: lando-stop
lando-stop:
ifdef HAS_LANDO
	if [ "$$(docker ps | grep chriswiegmanplugin_appserver)" ]; then \
		echo "Stopping Lando"; \
		lando stop; \
	fi
endif

.PHONY: open-db
open-db: ## Open the database in TablePlus
	@echo "Opening the database for direct access"
	open mysql://wordpress:wordpress@127.0.0.1:$$(lando info --service=database --path 0.external_connection.port | tr -d "'")/wordpress?enviroment=local&name=$database&safeModeLevel=0&advancedSafeModeLevel=0

.PHONY: open-site
open-site: ## Open the development site in your default browser
	open https://chriswiegman-plugin.lndo.site

.PHONY: release
release: | build-pot-file chriswiegman-plugin-version.zip ## Generates a release zip of the plugin

.PHONY: reset
reset: destroy start ## Resets a running dev environment to new

.PHONY: setup-wordpress
setup-wordpress:
	@echo "Setting up WordPress"
	lando wp core download --path=./wordpress --version=latest
	lando wp config create --dbname=wordpress --dbuser=wordpress --dbpass=wordpress --dbhost=database --path=./wordpress
	lando wp core install --path=./wordpress --url=https://chriswiegman-plugin.lndo.site --title="ChrisWiegman.com Functionality Development" --admin_user=admin --admin_password=password --admin_email=contact@chriswiegman.com

.PHONY: setup-wordpress-plugins
setup-wordpress-plugins:
	lando wp plugin install --path=./wordpress debug-bar --activate
	lando wp plugin install --path=./wordpress query-monitor --activate

.PHONY: start
start: lando-start open-site ## Starts the development environment including downloading and setting up everything it needs

.PHONY: stop
stop: lando-stop ## Stops the development environment. This is non-destructive.

.PHONY: test
test: test-lint test-phpunit  ## Run all testing

.PHONY: test-lint
test-lint: test-lint-php ## Run linting on both PHP and JavaScript

.PHONY: test-lint-php
test-lint-php: ## Run linting on PHP only
	@echo "Running PHP linting"
	./vendor/bin/phpcs --standard=./phpcs.xml

.PHONY: test-phpunit
test-phpunit: | build-docker-php ## Run PhpUnit
	@echo "Running Unit Tests Without Coverage"
	docker run -v $$(pwd):/app --rm chriswiegmanplugin_phpunit_image /app/vendor/bin/phpunit

.PHONY: test-phpunit-coverage
test-phpunit-coverage: | build-docker-php ## Run PhpUnit with code coverage
	@echo "Running Unit Tests With Coverage"
	docker run -v $$(pwd):/app --rm --user $(CURRENTUSER):$(CURRENTGROUP) chriswiegmanplugin_phpunit_image /app/vendor/bin/phpunit  --coverage-text --coverage-html build/coverage/

.PHONY: trust-lando-cert-mac
trust-lando-cert-mac: ## Trust Lando's SSL certificate on your mac
	@echo "Trusting Lando cert"
	sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain ~/.lando/certs/lndo.site.pem

.PHONY: update-composer
update-composer:
	$(DOCKER_RUN) $(COMPOSER_IMAGE) update

.PHONY: chriswiegman-plugin-version.zip
chriswiegman-plugin-version.zip:
	@echo "Building release file: chriswiegman-plugin.$(PLUGIN_VERSION).zip"
	rm -rf chriswiegman-plugin.$(PLUGIN_VERSION).zip
	rm -rf build
	mkdir build
	cp -av plugin build
	mv build/plugin build/chriswiegman-plugin
	PLUGIN_VERSION=$(PLUGIN_VERSION) && cd build && zip -r chriswiegman-plugin.$$PLUGIN_VERSION.zip *
	mv build/chriswiegman-plugin.$(PLUGIN_VERSION).zip ./
	if [ ! -f ./chriswiegman-plugin.$(PLUGIN_VERSION).zip  ]; then \
		echo "file not available"; \
		exit 1; \
	fi
```

If you want to try this Makefile yourself you can find the source at <https://github.com/ChrisWiegman/chriswiegman-plugin>. Note the Makefile above is only promised to be current at the time this post is published and the file itself will evolve over time.

What all does it do? Well, you could run _make help_ on it to find out but here's a breakdown of the important parts:

1. It installs all plugin dependencies via composer
2. It installs the latest version of WordPress as well as a few development plugins to make work on it easier
3. It runs all unit tests including setup, teardown, etc
4. It can create a "release" file I can then upload to my site
5. It runs the WordPress coding standards against any code I write
6. If I screw something up it can completely reset it all in a single command
7. It can clean-up everything it's done when I stop working on the plugin

## Try it yourself

If you write code for WordPress you owe it to yourself to give Make a try. It doesn't care what library or tech you use, it's an old and proven technology and a little practice with it will give you an easy workflow that will translate across projects. From building assets to running dev sites and from automated testing to releasing your product, Make is a tool that can take any complex project and make it as simple as a single command.

 [1]: https://www.gnu.org/software/make/
 [2]: https://github.com/ChrisWiegman/chriswiegman-plugin