---
title: Using PHPCS with Homebrew On MacOS Monterey
type: post
date: 2021-12-29T14:16:06+00:00
url: /2021/12/using-phpcs-with-homebrew-on-macos-monterey/
featured_image: /images/2020/08/homebrew-is-the-missing-package-manager-for-linux.png
categories:
  - Technical
tags:
  - Development Tools
  - PHPCS
  - Web Development
  - WordPress

---
If you've been using [Homebrew][1] for a while on your Mac getting [PHP_CodeSniffer (PHPCS)][2] running with the [WordPress Coding Standards][3] was pretty easy. Simply install [Composer][4] and run it all and you were good to go.

With macOS Monterey Apple stopped bundling PHP automatically. In response Composer has added the latest PHP (8.1 as of this post) as a dependency. This combination breaks the WordPress Coding Standards with numerous errors.

The workaround, at least for me, wasn't as strait forward as I would've liked. If you're finding the same issue, here's how you fix it.

## Remove PHP 8.1 and Composer

<pre class="wp-block-code" aria-describedby="shcb-language-141" data-shcb-language-name="Bash" data-shcb-language-slug="bash"><span><code class="hljs language-bash">brew uninstall composer
brew uninstall php</code></span><small class="shcb-language" id="shcb-language-141"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">Bash</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">bash</span><span class="shcb-language__paren">)</span></small></pre>

## Reinstall Composer without the PHP 8.1 dependency

<pre class="wp-block-code" aria-describedby="shcb-language-142" data-shcb-language-name="Bash" data-shcb-language-slug="bash"><span><code class="hljs language-bash">brew install composer --ignore-dependencies</code></span><small class="shcb-language" id="shcb-language-142"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">Bash</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">bash</span><span class="shcb-language__paren">)</span></small></pre>

## Install PHP 8.0 {#h-install-php-8-0.wp-block-heading}

<pre class="wp-block-code" aria-describedby="shcb-language-143" data-shcb-language-name="Bash" data-shcb-language-slug="bash"><span><code class="hljs language-bash">brew install php@8.0</code></span><small class="shcb-language" id="shcb-language-143"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">Bash</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">bash</span><span class="shcb-language__paren">)</span></small></pre>

That's all it takes. Now your linting should work in your favorite editor like it always has.

 [1]: https://brew.sh
 [2]: https://github.com/squizlabs/PHP_CodeSniffer
 [3]: https://github.com/WordPress/WordPress-Coding-Standards
 [4]: https://getcomposer.org