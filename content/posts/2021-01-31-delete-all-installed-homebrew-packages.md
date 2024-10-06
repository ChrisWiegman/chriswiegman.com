---
title: Delete All Installed Homebrew Packages
type: post
date: 2021-01-31T17:09:43+00:00
url: /2021/01/delete-all-installed-homebrew-packages/
categories:
  - Technical
tags:
  - CLI
  - Command Line
  - Homebrew
  - Software Management

---
I often find myself with so many leftover packages in [Homebrew][1] from a project that it is easy for conflicts to happen. As a result I need a way to quickly clear out all the packages I have installed so I can quickly re-install only what I need. Homebrew doesn't have a built-in way to do so but it isn't hard to get around. Here's a quick one-liner that will delete every package you've installed with Homebrew.

<pre class="wp-block-code" aria-describedby="shcb-language-114" data-shcb-language-name="Bash" data-shcb-language-slug="bash"><span><code class="hljs language-bash">brew remove --force $(brew list --formula) --ignore-dependencies</code></span><small class="shcb-language" id="shcb-language-114"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">Bash</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">bash</span><span class="shcb-language__paren">)</span></small></pre>

 [1]: https://brew.sh/