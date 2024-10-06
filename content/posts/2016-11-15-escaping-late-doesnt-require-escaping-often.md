---
title: Escaping Late Doesn’t Require Escaping Often
type: post
date: 2016-11-15T00:00:00+00:00
url: /2016/11/escaping-late-doesnt-require-escaping-often/
categories:
  - Technical
tags:
  - Development
  - WordPress

---
For the most part the idea that you can never have too much security rings true. A good firewall,&nbsp;smart account management, following coding standards and best practices… These are all good things but, as with anything else you can have too much of a good thing.

In this case I’m talking about proper escaping of content that is to be displayed in a WordPress site. This is as simple as saying every single time you echo data to a template or elsewhere on a WordPress site you need to escape it. This is so easy to do in WordPress with a <a href="https://codex.wordpress.org/Validating_Sanitizing_and_Escaping_User_Data" target="_blank" rel="noreferrer noopener">number of functions available to handle nearly any situation</a>. In fact it’s so easy to do that it isn’t uncommon in a plugin or theme&nbsp;made by a good developer to see the same data escaped two, three or even more times before it’s finally echoed. This is a problem.
## Escaping Costs Resources

While escaping data is a rather cheap function as far as programming goes doing it over and over isn’t free. Each time you call an escaping function there is some cost as PHP must process that function searching for the characters to escape. On a small site this really isn’t noticeable but at scale all these calls can add up and&nbsp;may start to dominate profiles if not handled correctly. There simply isn’t a need to do this more than once if done right.

## Escaping Early Isn’t Really Escaping At All

More often than not what I see (and I’ve been guilty of this myself) is developers escaping the return value of every function as well as that same data within the function when called from elsewhere. While this may seem legitimate what often happens, particularly with common hooks such as the_content and others, is your hook quite possibly isn’t the last time the data will be modified. As soon as another hook you don’t control modifies your escaped data your escaping function becomes worthless. In other words, escaping only works if done after the data is&nbsp;completely done with processing,&nbsp;this point is difficult, at best, to determine before you echo the data itself.

## Escaping Late Is All It Needs

Instead of escaping early you need to make sure that every single call you make is escaped when displayed. If the function you’re calling is filterable you simply cannot trust its output. For example:

<pre class="wp-block-code" aria-describedby="shcb-language-64" data-shcb-language-name="PHP" data-shcb-language-slug="php"><span><code class="hljs language-php">add_filter( &lt;span class="hljs-string">'wp_title'&lt;/span>, &lt;span class="hljs-string">'my_title_function'&lt;/span> );
&lt;span class="hljs-function">&lt;span class="hljs-keyword">function&lt;/span> &lt;span class="hljs-title">my_title_function&lt;/span>&lt;span class="hljs-params">( $title )&lt;/span> &lt;/span>{
   &lt;span class="hljs-keyword">return&lt;/span> esc_html( $title );
}</code></span><small class="shcb-language" id="shcb-language-64"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">PHP</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">php</span><span class="shcb-language__paren">)</span></small></pre>

This is a problem because wp\_title ends with an apply\_filter call before it is echoed or returned allowing any plugin or the theme to do whatever it wants to the data. Here’s how to solve the problem:

<pre class="wp-block-code" aria-describedby="shcb-language-65" data-shcb-language-name="PHP" data-shcb-language-slug="php"><span><code class="hljs language-php">add_filter( &lt;span class="hljs-string">'wp_title'&lt;/span>, &lt;span class="hljs-string">'my_title_function'&lt;/span> );
&lt;span class="hljs-function">&lt;span class="hljs-keyword">function&lt;/span> &lt;span class="hljs-title">my_title_function&lt;/span>&lt;span class="hljs-params">( $title )&lt;/span> &lt;/span>{
    &lt;span class="hljs-keyword">return&lt;/span> $title;
}</code></span><small class="shcb-language" id="shcb-language-65"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">PHP</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">php</span><span class="shcb-language__paren">)</span></small></pre>

is safe simply because there is no place left to modify the data. This is where it is displayed and escaping the output here will ensure that it is safe for your users.

If you filter it yourself you simply don’t know what else has done so and you’re wasting your call if you try to escape it at any point before it is displayed.