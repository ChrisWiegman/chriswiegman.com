---
title: Excluding a Category from your WordPress Homepage
type: post
date: 2013-05-29T00:00:00+00:00
url: /2013/05/excluding-a-category-from-your-wordpress-homepage/
categories:
  - Technical
tags:
  - Web Development
  - WordPress

---
<div class="wp-block-image">
  <figure class="alignleft"><img decoding="async" src="/images/2013/05/wordpress-logo-150x150-1.png" alt="Excluding a Category from your WordPress Homepage" class="wp-image-5475" /></figure>
</div>

Sometimes it isn’t always appropriate to have every category in your blog show up on your blog’s homepage. An example of this is the “Software Updates” you see in the sidebar on this site. While I write the updates as regular posts I’ve found (through trial and error) that not everyone wants to read them so I pull them from the list of posts on my homepage and use a plugin to put them in my sidebar. I do this with a bit of my own code to remove them from the homepage and then use a plugin to display what I want in the sidebar using a widget? Why not do both with my own code? Frankly, when I get time I’m going to remove the plugin entirely and do both through my own code but time hasn’t been on my side for such a change yet. In the meantime, I use my own code to remove the updates from the homepage simply because my solution is simpler and lost costly in terms of performance than any plugin I’ve seen try to do the same thing.

Fortunately WordPress makes it really easy to write this code yourself and include it within your theme’s functions.php file. Here’s what you need to do:

#### 1.) Get your Category ID.

To do the ID go the the “Categories” menu item under posts. Click “edit” for the category you want to exclude. On the edit screen copy the Category ID from the URL (see image).

<div class="wp-block-image">
  <figure class="aligncenter size-large"><img loading="lazy" decoding="async" width="350" height="128" src="/images/2013/05/copy-the-category-id-350x128-1.jpg" alt="Copy the category ID from the URL" class="wp-image-362" /><figcaption>Copy the category ID from the URL</figcaption></figure>
</div>

#### 2.) Open you theme’s _functions.php_ file.

If your theme doesn’t have one you may need to create it.

#### 3.) Add a function to remove the category.

Now we’re going to create a function to remove the category from the blog page. This is what does the heavy lifting. Notice the _-230_ on my example. The minus tells WordPress to remove the category where 230 is the category ID. Replace 230 with the ID you copied from step 1.

<pre class="wp-block-code" aria-describedby="shcb-language-44" data-shcb-language-name="PHP" data-shcb-language-slug="php"><span><code class="hljs language-php">&lt;span class="hljs-comment">// Exclude category from homepage.&lt;/span>
&lt;span class="hljs-function">&lt;span class="hljs-keyword">function&lt;/span> &lt;span class="hljs-title">my_exclude_category&lt;/span>&lt;span class="hljs-params">( $query )&lt;/span> &lt;/span>{

  &lt;span class="hljs-keyword">if&lt;/span> ( $query-&gt;is_home ) {
    $query-&gt;set( &lt;span class="hljs-string">'cat'&lt;/span>, &lt;span class="hljs-string">'-230'&lt;/span> );
  }

  &lt;span class="hljs-keyword">return&lt;/span> $query;

}</code></span><small class="shcb-language" id="shcb-language-44"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">PHP</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">php</span><span class="shcb-language__paren">)</span></small></pre>

#### 4.) Tell WordPress to run your function

Just because we’ve added a function doesn’t mean WordPress will use it. A function by itself does nothing if not call from somewhere so we’re going to _hook_ it into WordPress and tell it to run before WordPress gets our posts from the database. Use the following code, either before or after the function you created in _functions.php _to tell WordPress to run it.

<pre class="wp-block-code" aria-describedby="shcb-language-45" data-shcb-language-name="PHP" data-shcb-language-slug="php"><span><code class="hljs language-php">add_filter( &lt;span class="hljs-string">'pre_get_posts'&lt;/span>, &lt;span class="hljs-string">'my_exclude_category'&lt;/span> );</code></span><small class="shcb-language" id="shcb-language-45"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">PHP</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">php</span><span class="shcb-language__paren">)</span></small></pre>

Note the _pre\_get\_posts. _This tells WordPress when to run the hook, in this case before getting the posts from the database. Next _my\_exclude\_category_ tells WordPress what function to run at _pre\_get\_posts. _This is how WordPress hooks work and is used throughout WordPress themes and plugins. Every time you see an _add_action_ line in your code the first part is where to run the action and the second is the action to run.

#### 5.) Check your blog page.

Now all you need to do is test it. Check your blog page and make sure the posts you want aren’t showing. If it isn’t working check your spelling in the code and make sure the -[id] is showing the correct ID number for the posts you want to exclude.