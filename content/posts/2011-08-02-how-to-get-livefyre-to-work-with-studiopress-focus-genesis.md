---
title: How to Get LiveFyre to Work With Studiopress Focus/Genesis
type: post
date: 2011-08-02T00:00:00+00:00
url: /2011/08/how-to-get-livefyre-to-work-with-studiopress-focus-genesis/
categories:
  - Technical
tags:
  - Genesis
  - WordPress

---
<div class="wp-block-image">
  <figure class="alignright"><a href="/images/2011/08/LiveFyre-Genesis-Logo.png"><img decoding="async" src="/images/2011/08/LiveFyre-Genesis-Logo.png" alt="LiveFyre and Genesis Logo" class="wp-image-2842" title="LiveFyre and Genesis Logo" /></a></figure>
</div>

Two great products I believe in are LiveFyre and Genesis by Studiopress. This site uses both and the Focus child theme for Genesis. While the final solution is about perfect, there are a couple of changes that need to be made to focus to get them working if you use the “After post left” and “After post right” widget areas. Out of the box, due to the way LiveFyre hooks into the WordPress system, LiveFyre will completely overwrite these two widget areas.

To fix this we need to edit a couple of files in the focus theme. First, we’re going to edit functions.php. Change:

<pre class="wp-block-code" aria-describedby="shcb-language-12" data-shcb-language-name="PHP" data-shcb-language-slug="php"><span><code class="hljs language-php">add_action( &lt;span class="hljs-string">'genesis_before_comments'&lt;/span>, &lt;span class="hljs-string">'focus_after_post_box'&lt;/span> );</code></span><small class="shcb-language" id="shcb-language-12"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">PHP</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">php</span><span class="shcb-language__paren">)</span></small></pre>

(it should be on line 29) to:

<pre class="wp-block-code" aria-describedby="shcb-language-13" data-shcb-language-name="PHP" data-shcb-language-slug="php"><span><code class="hljs language-php">add_action( &lt;span class="hljs-string">'genesis_after_post_content'&lt;/span>, &lt;span class="hljs-string">'focus_after_post_box'&lt;/span> );</code></span><small class="shcb-language" id="shcb-language-13"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">PHP</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">php</span><span class="shcb-language__paren">)</span></small></pre>

This will show the widget areas with liveFyre again. Next we need to fix the overflow so that widget content stays where it should and doesn’t hang over the post area. To to this add the following line before the last div in the after-post.php file in the Focus child theme.

<pre class="wp-block-code" aria-describedby="shcb-language-14" data-shcb-language-name="HTML, XML" data-shcb-language-slug="xml"><span><code class="hljs language-xml">&lt;span class="hljs-tag">&lt;&lt;span class="hljs-name">div&lt;/span> &lt;span class="hljs-attr">class&lt;/span>=&lt;span class="hljs-string">"clear"&lt;/span>&gt;&lt;/span>&lt;span class="hljs-tag">&lt;/&lt;span class="hljs-name">div&lt;/span>&gt;&lt;/span></code></span><small class="shcb-language" id="shcb-language-14"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">HTML, XML</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">xml</span><span class="shcb-language__paren">)</span></small></pre>

This should go right before the

<pre class="wp-block-code" aria-describedby="shcb-language-15" data-shcb-language-name="PHP" data-shcb-language-slug="php"><span><code class="hljs language-php">&lt;span class="hljs-meta">&lt;?php&lt;/span> &lt;span class="hljs-keyword">endif&lt;/span>; &lt;span class="hljs-meta">?&gt;&lt;/span></code></span><small class="shcb-language" id="shcb-language-15"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">PHP</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">php</span><span class="shcb-language__paren">)</span></small></pre>

line at the end of the file.

My thanks to <a title="Brian Gardner on Twitter" href="http://twitter.com/bgardner" target="_blank" rel="noopener noreferrer">Brian Gardner</a> from Studiopress who was nice enough to help me solve this problem 9:00 at night. That is quality customer service!

Also note that I am a member of the Studiopress affiliate program and links to their site resulting in a purchase will earn me a couple of bucks.