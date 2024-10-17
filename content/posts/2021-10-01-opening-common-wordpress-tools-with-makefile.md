---
title: Opening Common WordPress Tools with Makefile
date: 2021-10-01T12:48:51+00:00
draft: false
categories:
  - Technical
tags:
  - Automation
  - Development Tools
  - Make
  - Makefile
  - WordPress
---

This summer I've talked about [automating WordPress development with Make][1] and gave a [few ideas for Make targets to get you started][2]. Today I want to add a few more Make targets to that list.

Two of the most common tasks I need to do when working with a few sites locally is to open them in my browser (URLs can get confusing when you have a few sites going) and opening the database directly in my database app of choice, [TablePlus][3]. Here are two Make targets you can use to do so yourself.

## Opening a site in your browser with Make

The first target we want to add is _open_ which simply serves to open the current site in your browser. The example below will open the specified URL (it should be set to your site's URL for the current project) in your default browser when typing **_make open_**.

``` makefile
.PHONY: open
open: ## Open the development site in your default browser
	open https://my-super-site.com
```

## Opening your database in TablePlus

This next target will instantly open your site's database in TablePlus so it can be examined or edited directly. This is handy as, otherwise, the configuration required to open a site in a tool can be difficult when using something like [Lando][4] or another tool.

``` makefile
.PHONY: open-db
open-db: ## Open the database in TablePlus
	@echo "Opening the database for direct access"
	open mysql://wordpress:wordpress@127.0.0.1:$$(lando info --service=database --path 0.external_connection.port | tr -d "'")/wordpress?enviroment=local&name=$database&safeModeLevel=0&advancedSafeModeLevel=0
```

When running the command **_make open-db_** you will get access to your database. Note this uses a simple database configuration in WordPress itself. The username, password and database name configured for the database are all simply "wordpress."

Of course, you will need to edit these if your tools differ but, hopefully, this post serves as another example of the power of using Make for development.

 [1]: /2021/07/automating-wordpress-development-with-make/
 [2]: /2021/08/three-uses-for-make-in-wordpress-development/
 [3]: https://tableplus.com/
 [4]: https://lando.dev/