---
title: Three Uses For Make in WordPress Development
date: 2021-08-11T13:28:42+00:00
featured_image: /images/2021/08/using-parameters-in-a-make-target.png
categories:
  - Technical
tags:
  - Automation
  - Development Tools
  - Make
  - Workflow
---

_This post is the third in my series on using Make for WordPress development. To get familiar with Make check out [Automating WordPress Development with Make][1] and, to help make your own automation more dynamic, check out [Using Parameters in a Make Target][2]._

Getting started with Make might be easy but figuring out what to do with it often takes a little inspiration. Here are three targets you can start with in your own WordPress project to help make your life a little bit easier with automation.

## Creating a release file

This target will create a zip of all the files in your project folder which you can use to install the project in a WordPress site. Note it grabs the version number from _style.css_ so you will need to modify it if you're using it for a plugin. In addition, to actually release your plugin or theme you'll want to utilize a _[.zipignore][3]_ or other method to only include the files you actually need in the final downloadable zip.

``` makefile
THEME_VERSION := $$(grep "^Version"style.css | awk -F' ' '{print $3}' | cut -d ":" -f2 | sed 's/ //g')
.PHONY: create-zip.zip
create-zip.zip: clean-release build-assets
	@echo "Building release file: my-theme.$(THEME_VERSION).zip"
	rm -rf my-theme.$(THEME_VERSION).zip
	THEME_VERSION=$(THEME_VERSION) && zip -r my-theme.$$THEME_VERSION.zip *
```

## Make your project easy to translate with a .pot file

Another useful target is to generate a .pot file from your code. This will allow anyone with your plugin or theme to [easily provide a translation of it for use in another language][4].

``` makefile
.PHONY: build-pot-file
build-pot-file: ## Generates a .pot file for use in translations.
	@echo "Generating .pot file"
	wp i18n make-pot . languages/my-theme.pot
```

Note that making a .pot file, in this case, requires wp-cli to be running. You can do this with Docker or another method but you will need to modify the code above to work with your development environment of choice.

## Clean up development and other files from your code

Finally we come to one of, in my opinion, the more useful targets we can utilize in development. This one simply cleans up all the files other than what we've uploaded to our code repositories. The _clean_ target needs to be modified for your own project but, if handled correctly, will ensure a clean working environment, free of cache issues, conflicts or other problems, whenever you need it.

``` makefile
.PHONY: clean
clean: clean-assets clean-build clean-release
.PHONY: clean-assets
clean-assets:
	@echo "Cleaning up theme assets"
	rm -f theme/assets/*.js
	rm -f theme/assets/*.css
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
.PHONY: clean-prod-assets
clean-prod-assets:
	@echo "Cleaning old production assets"
	rm -rf ./wordpress/wp-content/mysql.sql
	rm -rf ./wordpress/wp-content/plugins/*
	rm -rf ./wordpress/wp-content/uploads/*
.PHONY: clean-release
clean-release:
	@echo "Cleaning up release file"
	rm -f my-theme.*.zip
```

One other thing to note in the above code is how it divides out the files it needs to clean-up. This means I can run _make clean_ to remove everything or one of the other targets to remove only the files that are causing me issues.

## Create targets of your own

While the code above will hopefully get your started with ideas, it does not show the limits of Make nor does it even necessarily show complete solutions for your own project. It's simply intended as inspiration to help you automate some common tasks that might help make your life easier. In my own work I also use Make to, for example, start and stop my local dev environment, build various Docker images, install Node and Composer assets, run tests and a host of other tasks. I'm looking forward to hearing what you can do with yours!

 [1]: /2021/07/automating-wordpress-development-with-make/
 [2]: /2021/08/using-parameters-in-a-make-target/
 [3]: https://github.com/wpengine/atlas-content-modeler/blob/main/.zipignore
 [4]: https://codex.wordpress.org/I18n_for_WordPress_Developers