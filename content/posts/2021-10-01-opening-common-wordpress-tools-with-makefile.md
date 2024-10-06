---
title: Opening Common WordPress Tools with Makefile
type: post
date: 2021-10-01T12:48:51+00:00
url: /2021/10/opening-common-wordpress-tools-with-makefile/
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

<pre class="wp-block-code" aria-describedby="shcb-language-138" data-shcb-language-name="Makefile" data-shcb-language-slug="makefile"><span><code class="hljs language-makefile">&lt;span class="hljs-meta">&lt;span class="hljs-meta-keyword">.PHONY&lt;/span>: open&lt;/span>
&lt;span class="hljs-section">open: ## Open the development site in your default browser&lt;/span>
	open https://my-super-site.com</code></span><small class="shcb-language" id="shcb-language-138"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">Makefile</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">makefile</span><span class="shcb-language__paren">)</span></small></pre>

## Opening your database in TablePlus {#h-opening-your-database-in-tableplus.wp-block-heading}

This next target will instantly open your site's database in TablePlus so it can be examined or edited directly. This is handy as, otherwise, the configuration required to open a site in a tool can be difficult when using something like [Lando][4] or another tool.

<pre class="wp-block-code" aria-describedby="shcb-language-139" data-shcb-language-name="CSS" data-shcb-language-slug="css"><span><code class="hljs language-css">&lt;span class="hljs-selector-class">.PHONY&lt;/span>: &lt;span class="hljs-selector-tag">open-db&lt;/span>
&lt;span class="hljs-selector-tag">open-db&lt;/span>: ## &lt;span class="hljs-selector-tag">Open&lt;/span> &lt;span class="hljs-selector-tag">the&lt;/span> &lt;span class="hljs-selector-tag">database&lt;/span> &lt;span class="hljs-selector-tag">in&lt;/span> &lt;span class="hljs-selector-tag">TablePlus&lt;/span>
	&lt;span class="hljs-keyword">@echo&lt;/span> &lt;span class="hljs-string">"Opening the database for direct access"&lt;/span>
	open &lt;span class="hljs-attribute">mysql:&lt;/span>//&lt;span class="hljs-attribute">wordpress:&lt;/span>wordpress@&lt;span class="hljs-number">127.0&lt;/span>.&lt;span class="hljs-number">0.1&lt;/span>:$$(lando info --service=database --path &lt;span class="hljs-number">0&lt;/span>.external_connection.port | tr -d &lt;span class="hljs-string">"'"&lt;/span>)/wordpress?enviroment=local&name=$database&safeModeLevel=&lt;span class="hljs-number">0&lt;/span>&advancedSafeModeLevel=&lt;span class="hljs-number">0&lt;/span></code></span><small class="shcb-language" id="shcb-language-139"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">CSS</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">css</span><span class="shcb-language__paren">)</span></small></pre>

When running the command **_make open-db_** you will get access to your database. Note this uses a simple database configuration in WordPress itself. The username, password and database name configured for the database are all simply "wordpress."

Of course, you will need to edit these if your tools differ but, hopefully, this post serves as another example of the power of using Make for development.

 [1]: /2021/07/automating-wordpress-development-with-make/
 [2]: /2021/08/three-uses-for-make-in-wordpress-development/
 [3]: https://tableplus.com/
 [4]: https://lando.dev/