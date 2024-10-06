---
title: Keeping My WordPress Index Pages Current
type: post
date: 2022-05-16T13:25:12+00:00
url: /2022/05/keeping-my-wordpress-index-pages-current/
featured_image: /images/2022/02/its-time-for-a-new-wordpress-theme.jpg
categories:
  - Technical
tags:
  - Content Management
  - Custom Post Types
  - SEO
  - WordPress

---
One of the features of this site is that the "blog" page is just that, a WordPress "page" instead of a formal index as the homepage is, according to WordPress, the official "latest posts" page in the _Reading_ settings. While this setup works, the "blog" page itself only shows its last updated date as the date the page itself was saved. This is less than ideal for SEO and more as it appears I never update the "blog" page itself.

In addition to the blog page my "speaking" page is also built dynamically, this time from "event" and "talk" Custom Post Types created with [The Pods Framework][1]. This one is almost worse than the blog page not indicating it updated as there is no other home for the content on it.

## How I updated the date on all the index pages {#h-how-i-updated-the-date-on-all-the-index-pages.wp-block-heading}

After brainstorming a few ideas to solve the problem I eventually realized that, at least for my simple use case, the best option was to simply update the post date on the pages themselves. This ensures a few things:

<ol class="wp-block-list">
  <li>
    The sitemap and other indexes are updated
  </li>
  <li>
    I can see that they've been updated myself in the WordPress Dashboard
  </li>
  <li>
    The pages I need to update are predictable making the cost of maintaining this relatively low
  </li>
</ol>

To implement this only requires a single hook, _save_post_, which gives us all we need to update the related page when an index item is updated. Here's how I did it:

<pre class="wp-block-code" aria-describedby="shcb-language-147" data-shcb-language-name="PHP" data-shcb-language-slug="php"><span><code class="hljs language-php shcb-code-table shcb-line-numbers">&lt;span class='shcb-loc'>&lt;span>add_action( &lt;span class="hljs-string">'save_post'&lt;/span>, &lt;span class="hljs-string">'action_save_post'&lt;/span>, &lt;span class="hljs-number">10&lt;/span>, &lt;span class="hljs-number">3&lt;/span> );
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-comment">/**&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-comment"> * Action save_post&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-comment"> *&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-comment"> * Update the index pages when content is saved.&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-comment"> *&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-comment"> * &lt;span class="hljs-doctag">@param&lt;/span> int      $post_ID Post ID.&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-comment"> * &lt;span class="hljs-doctag">@param&lt;/span> \WP_POST $post Post object.&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-comment"> * &lt;span class="hljs-doctag">@param&lt;/span>  bool     $update Whether this is an existing post being updated.&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-comment"> */&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-function">&lt;span class="hljs-keyword">function&lt;/span> &lt;span class="hljs-title">action_save_post&lt;/span>&lt;span class="hljs-params">( $post_ID, $post, $update )&lt;/span> &lt;/span>{
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>	$post_types = &lt;span class="hljs-keyword">array&lt;/span>(
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>		&lt;span class="hljs-string">'post'&lt;/span>  =&gt; &lt;span class="hljs-number">1226&lt;/span>,
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>		&lt;span class="hljs-string">'talk'&lt;/span>  =&gt; &lt;span class="hljs-number">463&lt;/span>,
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>		&lt;span class="hljs-string">'event'&lt;/span> =&gt; &lt;span class="hljs-number">463&lt;/span>,
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>	);
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>	&lt;span class="hljs-keyword">if&lt;/span> (
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>		array_key_exists( $post-&gt;post_type, $post_types ) &&
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>		! wp_is_post_revision( $post ) &&
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>		&lt;span class="hljs-string">'publish'&lt;/span> === $post-&gt;post_status
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>	) {
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>		remove_action( &lt;span class="hljs-string">'save_post'&lt;/span>, &lt;span class="hljs-string">'action_save_post'&lt;/span>, &lt;span class="hljs-number">10&lt;/span>, &lt;span class="hljs-number">3&lt;/span> );
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>		$index_page = &lt;span class="hljs-keyword">array&lt;/span>(
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>			&lt;span class="hljs-string">'ID'&lt;/span>            =&gt; $post_types&#91; $post-&gt;post_type ],
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>			&lt;span class="hljs-string">'post_date'&lt;/span>     =&gt; current_time( &lt;span class="hljs-string">'mysql'&lt;/span> ),
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>			&lt;span class="hljs-string">'post_date_gmt'&lt;/span> =&gt; current_time( &lt;span class="hljs-string">'mysql'&lt;/span>, &lt;span class="hljs-number">1&lt;/span> ),
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>		);
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>		wp_update_post( $index_page );
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>	}
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>}
&lt;/span>&lt;/span></code></span><small class="shcb-language" id="shcb-language-147"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">PHP</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">php</span><span class="shcb-language__paren">)</span></small></pre>

In my case this code lives in [my _functions.php_ file][2] but it can go nearly anywhere. A few callouts with it:

First, you need to know the post IDs of the pages you want to update and associate them with the post types that should update them. You see this above in the _post_types_ array.

Second, the checks for post type, _wp\_is\_post_revision_ and post status are important. This ensures that the indexes are only updated when you actually click "update" or "publish" on the associated content.

Finally, removing the action ensures that we don't risk calling any loop. This code will run once per save and that's it.

Put together this code should be plenty to ensure you can use simple index pages for various content types and keep them current.

 [1]: https://pods.io
 [2]: https://github.com/ChrisWiegman/chriswiegman-theme/blob/main/functions.php