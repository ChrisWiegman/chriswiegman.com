---
title: Adding a Widget Area After Your Post In WordPress and Genesis
type: post
date: 2013-06-12T00:00:00+00:00
url: /2013/06/adding-a-widget-area-after-your-post-in-wordpress-and-genesis/
categories:
  - Technical
tags:
  - Genesis
  - Web Development
  - WordPress

---
The space after your post on <a href="http://www.wordpress.org" target="_blank" rel="noreferrer noopener">WordPress</a> is a great place to display information to your audience for maximum exposure and, hopefully, high click-through rates. It can be a place to post advertising, link folks to other posts, or add just about anything else you want. For example, this site uses the area after the post to link to other relevant articles using the nRelate related content system. Just by adding this little section I was able to drop the bounce rate of this site almost 10% overnight. It really can be that effective.

So how do you add content after the post and, more importantly, how do you add content after the post that can be changed and updated as needed? If you’re using WordPress and the <a href="http://www.shareasale.com/r.cfm?b=255468&u=527416&m=28169&urllink=&afftrack=" target="_blank" rel="noreferrer noopener">Genesis Framework</a>&nbsp;_(affiliate link)_&nbsp;it’s easy. This tutorial will walk you through adding a widget area to your post right after the post content itself just as the related content section is used on this site.

### 1.) Open your theme’s functions.php file.

The first thing you need to do is open the _functions.php_ file of the theme you’re using. You can find this in the WordPress directory under _wp-content/themes/[your theme]_. Make sure to use the functions.php in your child theme and not in the Genesis theme itself.

### 2.) Create the widget area

In functions.php we’re going to add a function that outputs our widget area to the screen. The following code is a function called “_my\_widget\_area_” which will output the information within the if statement if the user is on a single post page (as opposed to a list of posts, a page, or anywhere else) and if the widget area actually has content to show.

Note that you might want to change the name of the function to something that would mean more to you. For example, on this site I call it “_bit51\_after\_content_.” Also notice that I’ve put a title in the widget area that reads “You might also like.” I would suggest changing this to something more important for your site or leaving it out all together.

<pre class="wp-block-code" aria-describedby="shcb-language-46" data-shcb-language-name="PHP" data-shcb-language-slug="php"><span><code class="hljs language-php">&lt;span class="hljs-function">&lt;span class="hljs-keyword">function&lt;/span> &lt;span class="hljs-title">my_widget_area&lt;/span>&lt;span class="hljs-params">()&lt;/span> &lt;/span>{

  &lt;span class="hljs-keyword">if&lt;/span> ( is_single() && is_active_sidebar( &lt;span class="hljs-string">'after-post'&lt;/span> ) ) {

    &lt;span class="hljs-keyword">echo&lt;/span> &lt;span class="hljs-string">'&lt;div id="after-post"&gt;'&lt;/span> . PHP_EOL;
    &lt;span class="hljs-keyword">echo&lt;/span> &lt;span class="hljs-string">'&lt;h3&gt;You might also like&lt;/h3&gt;'&lt;/span> . PHP_EOL;

    dynamic_sidebar( &lt;span class="hljs-string">'after-post'&lt;/span> );

    &lt;span class="hljs-keyword">echo&lt;/span> &lt;span class="hljs-string">'&lt;/div&gt;'&lt;/span> . PHP_EOL;

  }
}</code></span><small class="shcb-language" id="shcb-language-46"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">PHP</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">php</span><span class="shcb-language__paren">)</span></small></pre>

### 3.) Execute our widget function

Once we create the widget we need to tell WordPress where to put it. We do this with a simple call to Genesis placed right outside our function.

<pre class="wp-block-code" aria-describedby="shcb-language-47" data-shcb-language-name="PHP" data-shcb-language-slug="php"><span><code class="hljs language-php">add_action( &lt;span class="hljs-string">'genesis_before_comments'&lt;/span>, &lt;span class="hljs-string">'my_widget_area'&lt;/span> );</code></span><small class="shcb-language" id="shcb-language-47"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">PHP</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">php</span><span class="shcb-language__paren">)</span></small></pre>

This code tells Genesis to execute whatever is in our “my\_widget\_area” function right before it starts the comments.

### 4.) Register our widget

Finally, we need to register our widget so that WordPress will display it in the dashboard and allow us to add content to it. Again Genesis makes it easy for us with just a single line of code.

<pre class="wp-block-code" aria-describedby="shcb-language-48" data-shcb-language-name="PHP" data-shcb-language-slug="php"><span><code class="hljs language-php">genesis_register_sidebar( &lt;span class="hljs-keyword">array&lt;/span>( &lt;span class="hljs-string">'id'&lt;/span> =&gt; &lt;span class="hljs-string">'after-post'&lt;/span>, &lt;span class="hljs-string">'name'&lt;/span> =&gt; __( &lt;span class="hljs-string">'After Post'&lt;/span>, &lt;span class="hljs-string">'bit51'&lt;/span> ), &lt;span class="hljs-string">'description'&lt;/span> =&gt; __( &lt;span class="hljs-string">'This is the section after a post.'&lt;/span>, &lt;span class="hljs-string">'bit51'&lt;/span> ), ) );</code></span><small class="shcb-language" id="shcb-language-48"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">PHP</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">php</span><span class="shcb-language__paren">)</span></small></pre>

### 5.) Putting it all together

Here’s all the code for this tutorial in one shot. Remember, this should go into your child theme’s functions.php file.

<pre class="wp-block-code" aria-describedby="shcb-language-49" data-shcb-language-name="PHP" data-shcb-language-slug="php"><span><code class="hljs language-php">&lt;span class="hljs-comment">// Output the widget content.&lt;/span>
&lt;span class="hljs-function">&lt;span class="hljs-keyword">function&lt;/span> &lt;span class="hljs-title">my_widget_area&lt;/span>&lt;span class="hljs-params">()&lt;/span> &lt;/span>{

  &lt;span class="hljs-comment">// is_single() restricts it to individual posts and is_activesidebar only writes anything if the sidebar actually has content to write.&lt;/span>
  &lt;span class="hljs-keyword">if&lt;/span> ( is_single() && is_active_sidebar( &lt;span class="hljs-string">'after-post'&lt;/span> ) ) {

    &lt;span class="hljs-keyword">echo&lt;/span> &lt;span class="hljs-string">'&lt;div id="after-post"&gt;'&lt;/span> . PHP_EOL;
    &lt;span class="hljs-keyword">echo&lt;/span> &lt;span class="hljs-string">'&lt;h3&gt;You might also like&lt;/h3&gt;'&lt;/span> . PHP_EOL;

    dynamic_sidebar( &lt;span class="hljs-string">'after-post'&lt;/span> );

    &lt;span class="hljs-keyword">echo&lt;/span> &lt;span class="hljs-string">'&lt;/div&gt;'&lt;/span> . PHP_EOL;

  }
}

&lt;span class="hljs-comment">// Execute the widget area right before the comments section.&lt;/span>
add_action( &lt;span class="hljs-string">'genesis_before_comments'&lt;/span>, &lt;span class="hljs-string">'my_widget_area'&lt;/span> );

&lt;span class="hljs-comment">// Register the widget area with WordPress.&lt;/span>
genesis_register_sidebar( &lt;span class="hljs-keyword">array&lt;/span>( &lt;span class="hljs-string">'id'&lt;/span> =&gt; &lt;span class="hljs-string">'after-post'&lt;/span>, &lt;span class="hljs-string">'name'&lt;/span> =&gt; __( &lt;span class="hljs-string">'After Post'&lt;/span>, &lt;span class="hljs-string">'bit51'&lt;/span> ), &lt;span class="hljs-string">'description'&lt;/span> =&gt; __( &lt;span class="hljs-string">'This is the section after a post.'&lt;/span>, &lt;span class="hljs-string">'bit51'&lt;/span> ), ) );</code></span><small class="shcb-language" id="shcb-language-49"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">PHP</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">php</span><span class="shcb-language__paren">)</span></small></pre>

Now you should have a new widget area right before your comments and after your post content that you can use to advertise, build traffic or just impress your readers.