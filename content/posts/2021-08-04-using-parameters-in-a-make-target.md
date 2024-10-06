---
title: Using Parameters in a Make Target
type: post
date: 2021-08-04T13:11:05+00:00
url: /2021/08/using-parameters-in-a-make-target/
featured_image: /images/2021/08/using-parameters-in-a-make-target.png
categories:
  - Technical
tags:
  - Bash
  - Make
  - Scripting

---
Last week I wrote about [using Make for automating your WordPress development][1]. Make is a powerful tool that can really simplify development across multiple teams or multiple developers but, like any tool, it requires a learning curve.
With most of the command-line tools we use we call commands with parameters to change how they behave. For example, to delete a file in Mac or Linux we call the following:

<pre class="wp-block-code" aria-describedby="shcb-language-125" data-shcb-language-name="Bash" data-shcb-language-slug="bash"><span><code class="hljs language-bash">rm my_file</code></span><small class="shcb-language" id="shcb-language-125"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">Bash</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">bash</span><span class="shcb-language__paren">)</span></small></pre>

Like with Make, this example has the command, _rm_, and a target, _my_file_. This works great for deleting a file but, as you probably know, it doesn't work for deleting a folder. To delete a folder we would need the following:

<pre class="wp-block-code" aria-describedby="shcb-language-126" data-shcb-language-name="Bash" data-shcb-language-slug="bash"><span><code class="hljs language-bash">rm -rf my_folder</code></span><small class="shcb-language" id="shcb-language-126"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">Bash</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">bash</span><span class="shcb-language__paren">)</span></small></pre>

Unlike a file we now need to specify switches, or parameters, the _-rf_ in my example, to achieve the intended behavior. These pattern is fairly normal in most command-line operations but won't work with Make.

To utilize parameters with Make we would expect to do something like this:

<pre class="wp-block-code"><span><code class="hljs">make my_target --param=value</code></span></pre>

Ideally we could then access the value in our target. Unfortunately this won't work as Make simply doesn't accept such parameters.

We do have an alternative though. We can set our parameter as a shell variable and then call it within our target. It looks a little weird as we specify the parameter first but it is effective. Here's how we can invoke make with our parameter:

<pre class="wp-block-code" aria-describedby="shcb-language-127" data-shcb-language-name="Bash" data-shcb-language-slug="bash"><span><code class="hljs language-bash">PARAM=value make my_target</code></span><small class="shcb-language" id="shcb-language-127"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">Bash</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">bash</span><span class="shcb-language__paren">)</span></small></pre>

Of course, simply calling it doesn't use it in our Makefile. To use it in our Makefile is just as simple. Remember this is a shell variable so it is used in almost the exact same way you would use it in BASH or a similar script language:

<pre class="wp-block-code" aria-describedby="shcb-language-128" data-shcb-language-name="Makefile" data-shcb-language-slug="makefile"><span><code class="hljs language-makefile">&lt;span class="hljs-meta">&lt;span class="hljs-meta-keyword">.PHONY&lt;/span>: my_target&lt;/span>
&lt;span class="hljs-section">my_target:&lt;/span>
    echo &lt;span class="hljs-variable">$(PARAM)&lt;/span></code></span><small class="shcb-language" id="shcb-language-128"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">Makefile</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">makefile</span><span class="shcb-language__paren">)</span></small></pre>

That's it. Simply surround it with _$()_.

Of course, this could get confusing if your script doesn't require the parameter or if a new user hits it. We can account for that too. The following is the same target that first checks for the param and echos it if it exists but echos simply "Hello world" if the param wasn't specified:

<pre class="wp-block-code" aria-describedby="shcb-language-129" data-shcb-language-name="Makefile" data-shcb-language-slug="makefile"><span><code class="hljs language-makefile">&lt;span class="hljs-meta">&lt;span class="hljs-meta-keyword">.PHONY&lt;/span>: my_target&lt;/span>
&lt;span class="hljs-section">my_target:&lt;/span>
    if &#91; -z &lt;span class="hljs-string">"&lt;span class="hljs-variable">$(PARAM)&lt;/span>"&lt;/span> ]; then \
		echo &lt;span class="hljs-string">"Hello World"&lt;/span>; \
	&lt;span class="hljs-keyword">else&lt;/span> \
		echo &lt;span class="hljs-variable">$(PARAM)&lt;/span>; \
	fi</code></span><small class="shcb-language" id="shcb-language-129"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">Makefile</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">makefile</span><span class="shcb-language__paren">)</span></small></pre>

In the above example we check if the variable is _unset_ and echo Hello World if that is the case. If it is set we echo the param we called Make with. The hardest part of this is that the logic is probably a bit backwards from what you would expect in other languages.

With a little practice you can utilize this method to write some very complex make targets that can process your handling based on the variables provided to them. You can also extend this by defining variables globally and even using wildcards in target names but those are for a different post.

 [1]: /2021/07/automating-wordpress-development-with-make/