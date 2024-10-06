---
title: Installing Node LTS with The Latest NPM using NVM
type: post
date: 2022-01-17T13:16:27+00:00
url: /2022/01/installing-node-lts-with-the-latest-npm-using-nvm/
featured_image: /images/2022/01/installing-node-lts-with-the-latest-npm-using-nvm.jpg
categories:
  - Technical
tags:
  - Node.js
  - NVM

---
Maintaining Node.js versions on your computer can seem like an exercise in futility these days where nearly everything one could work on often requires a specific version of Node to run correctly.

Thankfully packages like [Node Version Manager (NVM)][1] can make this a lot easier. I used to simply install "node" with [Homebrew][2] and call it a day but that approach simply causes too many problems to be useful. Today I've worked NVM into my workflow using the latest Node.js LTS version and latest NPM version for my default setup.

If you use NVM you're probably familiar with the following syntax:

<pre class="wp-block-code" aria-describedby="shcb-language-144" data-shcb-language-name="Bash" data-shcb-language-slug="bash"><span><code class="hljs language-bash">nvm install --lts
npm -g install npm</code></span><small class="shcb-language" id="shcb-language-144"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">Bash</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">bash</span><span class="shcb-language__paren">)</span></small></pre>

There are lots of variations of the above but the point is that, to install both Node.js and the latest NPM takes a bit of work. It doesn't have to be that way.

The following one-liner will install the latest Node.js LTS version and the latest NPM all in one. It's so much faster that splitting it out and can really help make sure that your toolchain is up to date.

<pre class="wp-block-code" aria-describedby="shcb-language-145" data-shcb-language-name="Bash" data-shcb-language-slug="bash"><span><code class="hljs language-bash">nvm install --lts --latest-npm</code></span><small class="shcb-language" id="shcb-language-145"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">Bash</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">bash</span><span class="shcb-language__paren">)</span></small></pre>

Easy, right?

 [1]: https://github.com/nvm-sh/nvm
 [2]: https://brew.sh