---
title: Add Social Media Icons To Your Site Without Images
type: post
date: 2013-07-14T04:00:00+00:00
url: /2013/07/add-social-media-icons-to-your-site-without-images/
categories:
  - Technical
tags:
  - Social Media
  - Web Development

---
What if I told you there is a way to add social media icons to your website that doesn’t require image files, scales for any screen size or pixel density and is even easier to use than images?

The problem is that images are slow, inflexible and just an all around hassle to handle on most websites. Sure, you can create a <a href="http://www.w3schools.com/css/css_image_sprites.asp" target="_blank" rel="noreferrer noopener">sprite</a> to make it a little easier but creating, maintaining and, in some cases even using that sprite can be an exercise in futility if you aren’t intimately familiar with CSS. To complicate matters, if you don’t use a sprite you have to download a separate resource for each and every image you use and possibly another separate set of images if you need to resize the images due to screen size or pixel density.

Fotunately there is a better way.

<a href="https://fontawesome.com/" target="_blank" rel="noreferrer noopener"><strong>FontAwesome</strong></a>, a free package by <a href="https://twitter.com/davegandy" target="_blank" rel="noreferrer noopener">Dave Gandy</a>, puts together <a href="https://fontawesome.com/icons" target="_blank" rel="noreferrer noopener">16,083 different icons</a> including every major social media network, into a single font that can be scaled and used very easily with a little CSS (it is what I use for the icons on the top right corner of this site).

While there is a plugin that you can use to add FontAwesome to WordPress I’m going to show you a better way to do it. We’re going to add it directly to your theme to avoid any unnecessary overhead and make it easy to update when the next version comes out.

1.) [Download FontAwesome][1] and extract its contents.

2.) Copy the Font and CSS folders to your theme folder. If you already have a these folders in your theme just copy their contents from the FontAwesome package to your own folders.

3.) Add FontAwesome to Functions.php.

To do this we’re going to create a new function called _load_fontawesome_ by entering the following lines into functions.php:

<pre class="wp-block-code" aria-describedby="shcb-language-50" data-shcb-language-name="PHP" data-shcb-language-slug="php"><span><code class="hljs language-php">&lt;span class="hljs-function">&lt;span class="hljs-keyword">function&lt;/span> &lt;span class="hljs-title">load_fontawesome&lt;/span>&lt;span class="hljs-params">()&lt;/span> &lt;/span>{
}</code></span><small class="shcb-language" id="shcb-language-50"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">PHP</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">php</span><span class="shcb-language__paren">)</span></small></pre>

4.) Within the function we just created we need to register our FontAwesome CSS and add it to the scripts queue so WordPress can use it. To do this take the function you created in step 3 and add the _wp\_register\_style_ and _wp\_enqueue\_style_ functions as you see below:

<pre class="wp-block-code" aria-describedby="shcb-language-51" data-shcb-language-name="PHP" data-shcb-language-slug="php"><span><code class="hljs language-php">&lt;span class="hljs-function">&lt;span class="hljs-keyword">function&lt;/span> &lt;span class="hljs-title">load_fontawesome&lt;/span>&lt;span class="hljs-params">()&lt;/span> &lt;/span>{

    wp_register_style( &lt;span class="hljs-string">'fonts-awesome'&lt;/span>, get_stylesheet_directory_uri() . &lt;span class="hljs-string">'/css/font-awesome.min.css'&lt;/span> );
    wp_enqueue_style( &lt;span class="hljs-string">'fonts-awesome'&lt;/span> );

}</code></span><small class="shcb-language" id="shcb-language-51"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">PHP</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">php</span><span class="shcb-language__paren">)</span></small></pre>

The _wp\_register\_style_ code tells WordPress there is a stylesheet called _fonts-awesome_ and it uses the font-awesome.min.css file in the css folder within your theme. Then the _wp\_enqueue\_style_ tells WordPress to actually use the style by putting it in the header of your WordPress pages.

5.) Hook the _load_fontawesome_ function into WordPress.

Finally we need to tell WordPress when to run our function. We’re going to do this using the WordPress _add_action_ function to tell it to load our function when WordPress processes all of our scripts and stylesheets. To do this we just add one more line to our code:

<pre class="wp-block-code" aria-describedby="shcb-language-52" data-shcb-language-name="PHP" data-shcb-language-slug="php"><span><code class="hljs language-php">add_action( &lt;span class="hljs-string">'wp_enqueue_scripts'&lt;/span>, &lt;span class="hljs-string">'load_fontawesome'&lt;/span> );
&lt;span class="hljs-function">&lt;span class="hljs-keyword">function&lt;/span> &lt;span class="hljs-title">load_fontawesome&lt;/span>&lt;span class="hljs-params">()&lt;/span> &lt;/span>{

    wp_register_style( &lt;span class="hljs-string">'fonts-awesome'&lt;/span>, get_stylesheet_directory_uri() . &lt;span class="hljs-string">'/css/font-awesome.min.css'&lt;/span> );
    wp_enqueue_style( &lt;span class="hljs-string">'fonts-awesome'&lt;/span> );

}</code></span><small class="shcb-language" id="shcb-language-52"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">PHP</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">php</span><span class="shcb-language__paren">)</span></small></pre>

6.) Start using icons.

FontAwesome is ready to use. To actually add an icon to our site <a href="https://fontawesome.com/icons" target="_blank" rel="noreferrer noopener">find the icon you want on the FontAwesome site</a> and remember the icon’s name next to its image. Then add it to your code with the _i_ tag just like I’ve done for the Facebook icon in the code below:

<pre class="wp-block-code" aria-describedby="shcb-language-53" data-shcb-language-name="HTML, XML" data-shcb-language-slug="xml"><span><code class="hljs language-xml">&lt;span class="hljs-tag">&lt;&lt;span class="hljs-name">i&lt;/span> &lt;span class="hljs-attr">class&lt;/span>=&lt;span class="hljs-string">"icon-facebook"&lt;/span>&gt;&lt;/span>&lt;span class="hljs-tag">&lt;/&lt;span class="hljs-name">i&lt;/span>&gt;&lt;/span></code></span><small class="shcb-language" id="shcb-language-53"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">HTML, XML</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">xml</span><span class="shcb-language__paren">)</span></small></pre>

The above code you should get you the following icon (note that you will need to switch to the text view in a page or post to make it work):

That’s it. You can add icons in the body of posts or pages, in widgets or anywhere else you need them. As a bonus, if the icon you want isn’t there today you may <a href="https://fontawesome.com/community/leaderboard/new" target="_blank" rel="noreferrer noopener">request it from the developer</a>. The project seems to be updated regularly (they’ve added dozens of new icons just since May) so it looks as if there is a better than average chance your request could be accepted.

When you’re ready to update FontAwesome simply re-download it and copy the new CSS and font files over your existing files. It is that easy.

 [1]: https://fontawesome.com/