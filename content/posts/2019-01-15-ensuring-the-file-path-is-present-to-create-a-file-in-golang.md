---
title: Ensuring the File Path is Present to Create a File in GoLang
type: post
date: 2019-01-15T05:00:00+00:00
url: /2019/01/ensuring-the-file-path-is-present-to-create-a-file-in-golang/
categories:
  - Technical
tags:
  - GoLang

---
One thing I find myself doing often in GoLang is creating files and directories. Coming from PHP I tend to do it by writing a lot of loops or other code to get it done. With GoLang it’s quite a bit easier.
Check if the file exists:

<pre class="wp-block-code" aria-describedby="shcb-language-67" data-shcb-language-name="Go" data-shcb-language-slug="go"><span><code class="hljs language-go">&lt;span class="hljs-keyword">if&lt;/span> _, err := os.Stat(&lt;span class="hljs-string">"/path/to/your-file"&lt;/span>); os.IsNotExist(err) {
    &lt;span class="hljs-comment">// your file does not exist&lt;/span>
}</code></span><small class="shcb-language" id="shcb-language-67"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">Go</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">go</span><span class="shcb-language__paren">)</span></small></pre>

In this example we _os.Stat()_ to get information from the file we want to create and check for if it exists by analyzing if it returned an error with _os.IsNotExist()._ Putting these together we now know if we need to create our file or not and, if it doesn’t, we can create it as needed.

But what if it’s folder doesn’t exist?

Of course, before we create any file, it is a good idea to make sure that path to it exists. Fortunately GoLang makes this easy as well:

<pre class="wp-block-code" aria-describedby="shcb-language-68" data-shcb-language-name="Go" data-shcb-language-slug="go"><span><code class="hljs language-go">os.MkdirAll(&lt;span class="hljs-string">"/path/to"&lt;/span>, &lt;span class="hljs-number">0700&lt;/span>)</code></span><small class="shcb-language" id="shcb-language-68"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">Go</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">go</span><span class="shcb-language__paren">)</span></small></pre>

Simple, right? This will recursively create the path needed. Once it’s in place we can create our file any way we want.

## Putting it all together

<pre class="wp-block-code" aria-describedby="shcb-language-69" data-shcb-language-name="Go" data-shcb-language-slug="go"><span><code class="hljs language-go">&lt;span class="hljs-keyword">if&lt;/span> _, err := os.Stat(&lt;span class="hljs-string">"/path/to/your-file"&lt;/span>); os.IsNotExist(err) {
    os.MkdirAll(&lt;span class="hljs-string">"/path/to"&lt;/span>, &lt;span class="hljs-number">0700&lt;/span>) &lt;span class="hljs-comment">// Create your file&lt;/span>
}</code></span><small class="shcb-language" id="shcb-language-69"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">Go</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">go</span><span class="shcb-language__paren">)</span></small></pre>

Just a bit of code is all it takes. No loops or other checking as with PHP. If only all of GoLang could be this simple.