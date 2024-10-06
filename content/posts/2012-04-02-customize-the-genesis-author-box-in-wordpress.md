---
title: Customize The Genesis Author Box in WordPress
type: post
date: 2012-04-02T00:00:00+00:00
url: /2012/04/customize-the-genesis-author-box-in-wordpress/
categories:
  - Technical
tags:
  - Genesis
  - Web Development
  - WordPress

---
<div class="wp-block-image">
  <figure class="aligncenter"><img decoding="async" src="/images/2012/04/Custom-author-box-350x98-1.jpg" alt="A custom WordPress author box" class="wp-image-4076" /></figure>
</div>

This post is a follow-up to the post [Customize the Contact Info Fields in WordPress Profiles][1]. Now that we have some custom contact fields in our WordPress user profiles it’s time to put those fields to work using the Genesis Framework. This tutorial will show you how to get those profile fields on your posts, pages (if you want) and in the author archives.

One of the great features of the <a href="http://www.shareasale.com/r.cfm?b=255468&u=527416&m=28169&urllink=&afftrack=" target="_blank" rel="noreferrer noopener">Genesis Framework from Studiopress</a> (affiliate link) is the author box. This is the small area at the bottom of your content that displays information about the author of that content which is taken from the user’s WordPress profile. By default it shows the user’s name, avatar, and biographical info but nothing else.

Here’s how you can customize the author box in a Genesis theme to show anything you might need including other contact information you may have added. Please note this tutorial will also cause the author box to appear for all authors regardless of whether the user has chosen to show it or not.

## 1.) Open your theme’s functions.php file

The functions.php file should be in the root of your theme.

## 2.) Delete the old author box(es)

First we’re going to need to remove the existing Genesis Author box with it’s default fields.

<pre class="wp-block-code" aria-describedby="shcb-language-27" data-shcb-language-name="PHP" data-shcb-language-slug="php"><span><code class="hljs language-php">remove_action( &lt;span class="hljs-string">'genesis_after_post'&lt;/span>, &lt;span class="hljs-string">'genesis_do_author_box_single'&lt;/span> );</code></span><small class="shcb-language" id="shcb-language-27"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">PHP</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">php</span><span class="shcb-language__paren">)</span></small></pre>

If you want to change the Author box on the author pages you’ll also need the following line of code

<pre class="wp-block-code" aria-describedby="shcb-language-28" data-shcb-language-name="PHP" data-shcb-language-slug="php"><span><code class="hljs language-php">remove_action( &lt;span class="hljs-string">'genesis_before_loop'&lt;/span>, &lt;span class="hljs-string">'genesis_do_author_box_archive'&lt;/span> );</code></span><small class="shcb-language" id="shcb-language-28"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">PHP</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">php</span><span class="shcb-language__paren">)</span></small></pre>

## 3.) Register the new author box(es)

Next we’re going to tell WordPress to use the author boxes we’re about to create. For the box on pages and posts use

<pre class="wp-block-code" aria-describedby="shcb-language-29" data-shcb-language-name="PHP" data-shcb-language-slug="php"><span><code class="hljs language-php">add_action( &lt;span class="hljs-string">'genesis_before_comments'&lt;/span>, &lt;span class="hljs-string">'theme_author_box'&lt;/span> );</code></span><small class="shcb-language" id="shcb-language-29"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">PHP</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">php</span><span class="shcb-language__paren">)</span></small></pre>

For the author box on the author pages you’ll have to use the following line of code:

<pre class="wp-block-code" aria-describedby="shcb-language-30" data-shcb-language-name="PHP" data-shcb-language-slug="php"><span><code class="hljs language-php">add_action( &lt;span class="hljs-string">'genesis_before_loop'&lt;/span>, &lt;span class="hljs-string">'theme_author_box_archive'&lt;/span> );</code></span><small class="shcb-language" id="shcb-language-30"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">PHP</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">php</span><span class="shcb-language__paren">)</span></small></pre>

Notice I’m using two separate functions to create my author boxes. This is because the two add_action lines tell WordPress to always add the box before comments in the first one and before the “loop” (which is basically before the title) in the second. We’ll the use a line in the functions themselves to tell WordPress which pages/posts/etc the boxes should appear on.

## 4.) Create the author box

First we’ll set up the function. Note that for the archive page, or anything content where you want the box to appear on top, just change this line to “function theme\_author\_box_archive();” per step 3. If you want it to appear on top in the archive and on the bottom of posts you will have to use this function twice. Once for each position.

<pre class="wp-block-code" aria-describedby="shcb-language-31" data-shcb-language-name="PHP" data-shcb-language-slug="php"><span><code class="hljs language-php">&lt;span class="hljs-function">&lt;span class="hljs-keyword">function&lt;/span> &lt;span class="hljs-title">theme_author_box&lt;/span>&lt;span class="hljs-params">()&lt;/span> &lt;/span>{</code></span><small class="shcb-language" id="shcb-language-31"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">PHP</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">php</span><span class="shcb-language__paren">)</span></small></pre>

Then we’ll set up the header

<pre class="wp-block-code" aria-describedby="shcb-language-32" data-shcb-language-name="PHP" data-shcb-language-slug="php"><span><code class="hljs language-php">$authinfo = &lt;span class="hljs-string">"\r\n"&lt;/span>;
$authinfo .= get_avatar(get_the_author_id() , &lt;span class="hljs-number">80&lt;/span>); $authinfo .= &lt;span class="hljs-string">"About "&lt;/span> . get_the_author_meta(&lt;span class="hljs-string">'display_name'&lt;/span>)</code></span><small class="shcb-language" id="shcb-language-32"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">PHP</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">php</span><span class="shcb-language__paren">)</span></small></pre>

Now we’ll get all our custom fields

<pre class="wp-block-code" aria-describedby="shcb-language-33" data-shcb-language-name="PHP" data-shcb-language-slug="php"><span><code class="hljs language-php">$facebook = get_the_author_meta(&lt;span class="hljs-string">'facebook'&lt;/span>);
$linkedin = get_the_author_meta(&lt;span class="hljs-string">'linkedin'&lt;/span>);
$twitter = get_the_author_meta(&lt;span class="hljs-string">'twitter'&lt;/span>);
$gplus = get_the_author_meta(&lt;span class="hljs-string">'gplus'&lt;/span>);
$flength = strlen($facebook);
$llength = strlen($linkedin);
$tlength = strlen($twitter);
$glength = strlen($gplus);</code></span><small class="shcb-language" id="shcb-language-33"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">PHP</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">php</span><span class="shcb-language__paren">)</span></small></pre>

Next we’ll display our contact fields but only if our user actually filled them out

<pre class="wp-block-code" aria-describedby="shcb-language-34" data-shcb-language-name="PHP" data-shcb-language-slug="php"><span><code class="hljs language-php">&lt;span class="hljs-keyword">if&lt;/span> ($flength &gt; &lt;span class="hljs-number">1&lt;/span> || $glength &gt; &lt;span class="hljs-number">1&lt;/span> || $llength &gt; &lt;span class="hljs-number">1&lt;/span> || $tlength &gt; &lt;span class="hljs-number">1&lt;/span>) {
    &lt;span class="hljs-keyword">if&lt;/span> (($flength &lt;= &lt;span class="hljs-number">1&lt;/span> && $glength &lt;= &lt;span class="hljs-number">1&lt;/span> && $llength &lt;= &lt;span class="hljs-number">1&lt;/span>) && $tlength &gt; &lt;span class="hljs-number">1&lt;/span>) {
        $authinfo .= &lt;span class="hljs-string">"&lt;p id=\"authcontact\"&gt;&lt;a href=\"http://twitter.com/"&lt;/span> . $twitter . &lt;span class="hljs-string">"\" target=\"_blank\" rel=\"nofollow\" title=\""&lt;/span> . $twitter . &lt;span class="hljs-string">" on Twitter\"&gt;Follow "&lt;/span> . get_the_author_meta(&lt;span class="hljs-string">'first_name'&lt;/span>) . &lt;span class="hljs-string">" on Twitter&lt;/a&gt;&lt;/p&gt;\r\n"&lt;/span>;
    } &lt;span class="hljs-keyword">else&lt;/span> {
         $authinfo .= &lt;span class="hljs-string">"&lt;p id=\"authcontact\"&gt;Find "&lt;/span> . get_the_author_meta(&lt;span class="hljs-string">'first_name'&lt;/span>) . &lt;span class="hljs-string">" on "&lt;/span>;
        &lt;span class="hljs-keyword">if&lt;/span> ($flength &gt; &lt;span class="hljs-number">1&lt;/span>) {
            $authinfo .= &lt;span class="hljs-string">" &lt;a href=\"http://facebook.com/"&lt;/span> . $facebook . &lt;span class="hljs-string">"\" target=\"_blank\" rel=\"nofollow\" title=\""&lt;/span> . get_the_author_meta(&lt;span class="hljs-string">'display_name'&lt;/span>) . &lt;span class="hljs-string">" on Facebook\"&gt;Facebook&lt;/a&gt;"&lt;/span>;
        }
        &lt;span class="hljs-keyword">if&lt;/span> ($glength &gt; &lt;span class="hljs-number">1&lt;/span>) {
            &lt;span class="hljs-keyword">if&lt;/span> ($flength &gt; &lt;span class="hljs-number">1&lt;/span>) {
                $comma = &lt;span class="hljs-string">','&lt;/span>;
            } &lt;span class="hljs-keyword">else&lt;/span> {
                $comma = &lt;span class="hljs-string">''&lt;/span>;
            }
            &lt;span class="hljs-keyword">if&lt;/span> ($llength &gt; &lt;span class="hljs-number">1&lt;/span> || $tlength &gt; &lt;span class="hljs-number">1&lt;/span>) {
                $and = &lt;span class="hljs-string">''&lt;/span>;
            } &lt;span class="hljs-keyword">else&lt;/span> {
                $and = &lt;span class="hljs-string">' and'&lt;/span>;
            }
            $authinfo .= $comma . $and . &lt;span class="hljs-string">" &lt;a href=\"http://plus.google.com/"&lt;/span> . $gplus . &lt;span class="hljs-string">"\" rel=\"me\" target=\"_blank\" title=\""&lt;/span> . get_the_author_meta(&lt;span class="hljs-string">'display_name'&lt;/span>) . &lt;span class="hljs-string">" on Google+\"&gt;Google+&lt;/a&gt;"&lt;/span>;
        }
        &lt;span class="hljs-keyword">if&lt;/span> ($llength &gt; &lt;span class="hljs-number">1&lt;/span>) {
            &lt;span class="hljs-keyword">if&lt;/span> ($flength &gt; &lt;span class="hljs-number">1&lt;/span> || $glength &gt; &lt;span class="hljs-number">1&lt;/span>) {
                $comma = &lt;span class="hljs-string">','&lt;/span>;
            } &lt;span class="hljs-keyword">else&lt;/span> {
                $comma = &lt;span class="hljs-string">''&lt;/span>;
            }
            &lt;span class="hljs-keyword">if&lt;/span> ($tlength &gt; &lt;span class="hljs-number">1&lt;/span>) {
                $and = &lt;span class="hljs-string">''&lt;/span>;
            } &lt;span class="hljs-keyword">else&lt;/span> {
                $and = &lt;span class="hljs-string">' and'&lt;/span>;
            }
            $authinfo .= $comma . $and . &lt;span class="hljs-string">" &lt;a href=\"http://www.linkedin.com/in/"&lt;/span> . $linkedin . &lt;span class="hljs-string">"\" target=\"_blank\" rel=\"nofollow\" title=\""&lt;/span> . get_the_author_meta(&lt;span class="hljs-string">'display_name'&lt;/span>) . &lt;span class="hljs-string">" on LinkedIn\"&gt;LinkedIn&lt;/a&gt;"&lt;/span>;
        }
        &lt;span class="hljs-keyword">if&lt;/span> ($tlength &gt; &lt;span class="hljs-number">1&lt;/span>) {
            $authinfo .= &lt;span class="hljs-string">", and &lt;a href=\"http://twitter.com/"&lt;/span> . $twitter . &lt;span class="hljs-string">"\" target=\"_blank\" rel=\"nofollow\" title=\""&lt;/span> . get_the_author_meta(&lt;span class="hljs-string">'display_name'&lt;/span>) . &lt;span class="hljs-string">" on Twitter\"&gt;Twitter&lt;/a&gt;"&lt;/span>;
        }</code></span><small class="shcb-language" id="shcb-language-34"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">PHP</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">php</span><span class="shcb-language__paren">)</span></small></pre>

Finally we need to tell WordPress where to display everything. Using “is\_single()” puts the author box on individual posts. If this is for the archive page use “is\_author()” for pages use “is\_page().” If you want the same box to appear on posts and pages you can use “is\_single() || is_page()” (note the || is the pipe symbol on the keyboard and means “or”).

<pre class="wp-block-code" aria-describedby="shcb-language-35" data-shcb-language-name="PHP" data-shcb-language-slug="php"><span><code class="hljs language-php">  &lt;span class="hljs-keyword">if&lt;/span> ( is_single() ) {
    &lt;span class="hljs-keyword">echo&lt;/span> $authinfo;
  }
}</code></span><small class="shcb-language" id="shcb-language-35"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">PHP</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">php</span><span class="shcb-language__paren">)</span></small></pre>

Note that if you need both lines from step 3 just copy the code above into a 2nd function changing the function name and the “is_single” line.

## 5.) Save your file

You should now see your custom author box on the content in which you wanted it.

## 6.) Putting it all together

Here’s the whole code to put a custom author box on top of the author page and right before the content on all posts.

<pre class="wp-block-code" aria-describedby="shcb-language-36" data-shcb-language-name="PHP" data-shcb-language-slug="php"><span><code class="hljs language-php">remove_action(&lt;span class="hljs-string">'genesis_after_post'&lt;/span>, &lt;span class="hljs-string">'genesis_do_author_box_single'&lt;/span>);
add_action(&lt;span class="hljs-string">'genesis_before_comments'&lt;/span>, &lt;span class="hljs-string">'theme_author_box'&lt;/span>);

remove_action( &lt;span class="hljs-string">'genesis_before_loop'&lt;/span>, &lt;span class="hljs-string">'genesis_do_author_box_archive'&lt;/span> );
add_action( &lt;span class="hljs-string">'genesis_before_loop'&lt;/span>, &lt;span class="hljs-string">'theme_author_box_archive'&lt;/span> );

&lt;span class="hljs-function">&lt;span class="hljs-keyword">function&lt;/span> &lt;span class="hljs-title">theme_author_box_archive&lt;/span>&lt;span class="hljs-params">()&lt;/span> &lt;/span>{
  $authinfo = &lt;span class="hljs-string">"&lt;div class=\"author-box\"&gt;\r\n"&lt;/span>;
  $authinfo .= get_avatar(get_the_author_id() , &lt;span class="hljs-number">80&lt;/span>);
  $authinfo .= &lt;span class="hljs-string">"&lt;strong&gt;About &lt;a href=\""&lt;/span> . get_the_author_meta(&lt;span class="hljs-string">'url'&lt;/span>) . &lt;span class="hljs-string">"\" target=\"_blank\" title=\""&lt;/span> . get_the_author_meta(&lt;span class="hljs-string">'website_title'&lt;/span>) . &lt;span class="hljs-string">"\" rel=\"nofollow\"&gt;"&lt;/span> . get_the_author_meta(&lt;span class="hljs-string">'display_name'&lt;/span>) . &lt;span class="hljs-string">"&lt;/a&gt;&lt;/strong&gt;\r\n"&lt;/span>;
  $authinfo .= &lt;span class="hljs-string">"&lt;p&gt;"&lt;/span> . get_the_author_meta(&lt;span class="hljs-string">'description'&lt;/span>) . &lt;span class="hljs-string">"&lt;/p&gt;\r\n"&lt;/span>;
  $facebook = get_the_author_meta(&lt;span class="hljs-string">'facebook'&lt;/span>);
  $linkedin = get_the_author_meta(&lt;span class="hljs-string">'linkedin'&lt;/span>);
  $twitter = get_the_author_meta(&lt;span class="hljs-string">'twitter'&lt;/span>);
  $gplus = get_the_author_meta(&lt;span class="hljs-string">'gplus'&lt;/span>);
  $flength = strlen($facebook);
  $llength = strlen($linkedin);
  $tlength = strlen($twitter);
  $glength = strlen($gplus);
  &lt;span class="hljs-keyword">if&lt;/span> ($flength &gt; &lt;span class="hljs-number">1&lt;/span> || $glength &gt; &lt;span class="hljs-number">1&lt;/span> || $llength &gt; &lt;span class="hljs-number">1&lt;/span> || $tlength &gt; &lt;span class="hljs-number">1&lt;/span>) {
    &lt;span class="hljs-keyword">if&lt;/span> (($flength &lt;= &lt;span class="hljs-number">1&lt;/span> && $glength &lt;= &lt;span class="hljs-number">1&lt;/span> && $llength &lt;= &lt;span class="hljs-number">1&lt;/span>) && $tlength &gt; &lt;span class="hljs-number">1&lt;/span>) {
      $authinfo .= &lt;span class="hljs-string">"&lt;p id=\"authcontact\"&gt;&lt;a href=\"http://twitter.com/"&lt;/span> . $twitter . &lt;span class="hljs-string">"\" target=\"_blank\" rel=\"nofollow\" title=\""&lt;/span> . $twitter . &lt;span class="hljs-string">" on Twitter\"&gt;Follow "&lt;/span> . get_the_author_meta(&lt;span class="hljs-string">'first_name'&lt;/span>) . &lt;span class="hljs-string">" on Twitter&lt;/a&gt;&lt;/p&gt;\r\n"&lt;/span>;
    } &lt;span class="hljs-keyword">else&lt;/span> {
      $authinfo .= &lt;span class="hljs-string">"&lt;p id=\"authcontact\"&gt;Find "&lt;/span> . get_the_author_meta(&lt;span class="hljs-string">'first_name'&lt;/span>) . &lt;span class="hljs-string">" on "&lt;/span>;
      &lt;span class="hljs-keyword">if&lt;/span> ($flength &gt; &lt;span class="hljs-number">1&lt;/span>) {
        $authinfo .= &lt;span class="hljs-string">" &lt;a href=\"http://facebook.com/"&lt;/span> . $facebook . &lt;span class="hljs-string">"\" target=\"_blank\" rel=\"nofollow\" title=\""&lt;/span> . get_the_author_meta(&lt;span class="hljs-string">'display_name'&lt;/span>) . &lt;span class="hljs-string">" on Facebook\"&gt;Facebook&lt;/a&gt;"&lt;/span>;
      }
      &lt;span class="hljs-keyword">if&lt;/span> ($glength &gt; &lt;span class="hljs-number">1&lt;/span>) {
        &lt;span class="hljs-keyword">if&lt;/span> ($flength &gt; &lt;span class="hljs-number">1&lt;/span>) {
          $comma = &lt;span class="hljs-string">','&lt;/span>;
        } &lt;span class="hljs-keyword">else&lt;/span> {
          $comma = &lt;span class="hljs-string">''&lt;/span>;
        }
        &lt;span class="hljs-keyword">if&lt;/span> ($llength &gt; &lt;span class="hljs-number">1&lt;/span> || $tlength &gt; &lt;span class="hljs-number">1&lt;/span>) {
          $and = &lt;span class="hljs-string">''&lt;/span>;
        } &lt;span class="hljs-keyword">else&lt;/span> {
          $and = &lt;span class="hljs-string">' and'&lt;/span>;
        }
        $authinfo .= $comma . $and . &lt;span class="hljs-string">" &lt;a href=\"http://plus.google.com/"&lt;/span> . $gplus . &lt;span class="hljs-string">"\" rel=\"me\" target=\"_blank\" title=\""&lt;/span> . get_the_author_meta(&lt;span class="hljs-string">'display_name'&lt;/span>) . &lt;span class="hljs-string">" on Google+\"&gt;Google+&lt;/a&gt;"&lt;/span>;
      }
      &lt;span class="hljs-keyword">if&lt;/span> ($llength &gt; &lt;span class="hljs-number">1&lt;/span>) {
        &lt;span class="hljs-keyword">if&lt;/span> ($flength &gt; &lt;span class="hljs-number">1&lt;/span> || $glength &gt; &lt;span class="hljs-number">1&lt;/span>) {
          $comma = &lt;span class="hljs-string">','&lt;/span>;
        } &lt;span class="hljs-keyword">else&lt;/span> {
          $comma = &lt;span class="hljs-string">''&lt;/span>;
        }
        &lt;span class="hljs-keyword">if&lt;/span> ($tlength &gt; &lt;span class="hljs-number">1&lt;/span>) {
          $and = &lt;span class="hljs-string">''&lt;/span>;
        } &lt;span class="hljs-keyword">else&lt;/span> {
          $and = &lt;span class="hljs-string">' and'&lt;/span>;
        }
        $authinfo .= $comma . $and . &lt;span class="hljs-string">" &lt;a href=\"http://www.linkedin.com/in/"&lt;/span> . $linkedin . &lt;span class="hljs-string">"\" target=\"_blank\" rel=\"nofollow\" title=\""&lt;/span> . get_the_author_meta(&lt;span class="hljs-string">'display_name'&lt;/span>) . &lt;span class="hljs-string">" on LinkedIn\"&gt;LinkedIn&lt;/a&gt;"&lt;/span>;
      }
      &lt;span class="hljs-keyword">if&lt;/span> ($tlength &gt; &lt;span class="hljs-number">1&lt;/span>) {
        $authinfo .= &lt;span class="hljs-string">", and &lt;a href=\"http://twitter.com/"&lt;/span> . $twitter . &lt;span class="hljs-string">"\" target=\"_blank\" rel=\"nofollow\" title=\""&lt;/span> . get_the_author_meta(&lt;span class="hljs-string">'display_name'&lt;/span>) . &lt;span class="hljs-string">" on Twitter\"&gt;Twitter&lt;/a&gt;"&lt;/span>;
      }
      $authinfo .= &lt;span class="hljs-string">".&lt;/p&gt;\r\n"&lt;/span>;
    }
  }
  $authinfo .= &lt;span class="hljs-string">"&lt;/div&gt;\r\n"&lt;/span>;
  &lt;span class="hljs-keyword">if&lt;/span> ( is_author() ) {
    &lt;span class="hljs-keyword">echo&lt;/span> $authinfo;
  }
}

&lt;span class="hljs-function">&lt;span class="hljs-keyword">function&lt;/span> &lt;span class="hljs-title">theme_author_box&lt;/span>&lt;span class="hljs-params">()&lt;/span> &lt;/span>{
  $authinfo = &lt;span class="hljs-string">"&lt;div class=\"author-box\"&gt;\r\n"&lt;/span>;
  $authinfo .= get_avatar(get_the_author_id() , &lt;span class="hljs-number">80&lt;/span>);
  $authinfo .= &lt;span class="hljs-string">"&lt;strong&gt;About &lt;a href=\""&lt;/span> . get_the_author_meta(&lt;span class="hljs-string">'url'&lt;/span>) . &lt;span class="hljs-string">"\" target=\"_blank\" title=\""&lt;/span> . get_the_author_meta(&lt;span class="hljs-string">'website_title'&lt;/span>) . &lt;span class="hljs-string">"\" rel=\"nofollow\"&gt;"&lt;/span> . get_the_author_meta(&lt;span class="hljs-string">'display_name'&lt;/span>) . &lt;span class="hljs-string">"&lt;/a&gt;&lt;/strong&gt;\r\n"&lt;/span>;
  $authinfo .= &lt;span class="hljs-string">"&lt;p&gt;"&lt;/span> . get_the_author_meta(&lt;span class="hljs-string">'description'&lt;/span>) . &lt;span class="hljs-string">"&lt;/p&gt;\r\n"&lt;/span>;
  $facebook = get_the_author_meta(&lt;span class="hljs-string">'facebook'&lt;/span>);
  $linkedin = get_the_author_meta(&lt;span class="hljs-string">'linkedin'&lt;/span>);
  $twitter = get_the_author_meta(&lt;span class="hljs-string">'twitter'&lt;/span>);
  $gplus = get_the_author_meta(&lt;span class="hljs-string">'gplus'&lt;/span>);
  $flength = strlen($facebook);
  $llength = strlen($linkedin);
  $tlength = strlen($twitter);
  $glength = strlen($gplus);
  &lt;span class="hljs-keyword">if&lt;/span> ($flength &gt; &lt;span class="hljs-number">1&lt;/span> || $glength &gt; &lt;span class="hljs-number">1&lt;/span> || $llength &gt; &lt;span class="hljs-number">1&lt;/span> || $tlength &gt; &lt;span class="hljs-number">1&lt;/span>) {
    &lt;span class="hljs-keyword">if&lt;/span> (($flength &lt;= &lt;span class="hljs-number">1&lt;/span> && $glength &lt;= &lt;span class="hljs-number">1&lt;/span> && $llength &lt;= &lt;span class="hljs-number">1&lt;/span>) && $tlength &gt; &lt;span class="hljs-number">1&lt;/span>) {
      $authinfo .= &lt;span class="hljs-string">"&lt;p id=\"authcontact\"&gt;&lt;a href=\"http://twitter.com/"&lt;/span> . $twitter . &lt;span class="hljs-string">"\" target=\"_blank\" rel=\"nofollow\" title=\""&lt;/span> . $twitter . &lt;span class="hljs-string">" on Twitter\"&gt;Follow "&lt;/span> . get_the_author_meta(&lt;span class="hljs-string">'first_name'&lt;/span>) . &lt;span class="hljs-string">" on Twitter&lt;/a&gt;&lt;/p&gt;\r\n"&lt;/span>;
    } &lt;span class="hljs-keyword">else&lt;/span> {
      $authinfo .= &lt;span class="hljs-string">"&lt;p id=\"authcontact\"&gt;Find "&lt;/span> . get_the_author_meta(&lt;span class="hljs-string">'first_name'&lt;/span>) . &lt;span class="hljs-string">" on "&lt;/span>;
      &lt;span class="hljs-keyword">if&lt;/span> ($flength &gt; &lt;span class="hljs-number">1&lt;/span>) {
        $authinfo .= &lt;span class="hljs-string">" &lt;a href=\"http://facebook.com/"&lt;/span> . $facebook . &lt;span class="hljs-string">"\" target=\"_blank\" rel=\"nofollow\" title=\""&lt;/span> . get_the_author_meta(&lt;span class="hljs-string">'display_name'&lt;/span>) . &lt;span class="hljs-string">" on Facebook\"&gt;Facebook&lt;/a&gt;"&lt;/span>;
      }
      &lt;span class="hljs-keyword">if&lt;/span> ($glength &gt; &lt;span class="hljs-number">1&lt;/span>) {
        &lt;span class="hljs-keyword">if&lt;/span> ($flength &gt; &lt;span class="hljs-number">1&lt;/span>) {
          $comma = &lt;span class="hljs-string">','&lt;/span>;
        } &lt;span class="hljs-keyword">else&lt;/span> {
          $comma = &lt;span class="hljs-string">''&lt;/span>;
        }
        &lt;span class="hljs-keyword">if&lt;/span> ($llength &gt; &lt;span class="hljs-number">1&lt;/span> || $tlength &gt; &lt;span class="hljs-number">1&lt;/span>) {
          $and = &lt;span class="hljs-string">''&lt;/span>;
        } &lt;span class="hljs-keyword">else&lt;/span> {
          $and = &lt;span class="hljs-string">' and'&lt;/span>;
        }
        $authinfo .= $comma . $and . &lt;span class="hljs-string">" &lt;a href=\"http://plus.google.com/"&lt;/span> . $gplus . &lt;span class="hljs-string">"\" rel=\"me\" target=\"_blank\" title=\""&lt;/span> . get_the_author_meta(&lt;span class="hljs-string">'display_name'&lt;/span>) . &lt;span class="hljs-string">" on Google+\"&gt;Google+&lt;/a&gt;"&lt;/span>;
      }
      &lt;span class="hljs-keyword">if&lt;/span> ($llength &gt; &lt;span class="hljs-number">1&lt;/span>) {
        &lt;span class="hljs-keyword">if&lt;/span> ($flength &gt; &lt;span class="hljs-number">1&lt;/span> || $glength &gt; &lt;span class="hljs-number">1&lt;/span>) {
          $comma = &lt;span class="hljs-string">','&lt;/span>;
        } &lt;span class="hljs-keyword">else&lt;/span> {
          $comma = &lt;span class="hljs-string">''&lt;/span>;
        }
        &lt;span class="hljs-keyword">if&lt;/span> ($tlength &gt; &lt;span class="hljs-number">1&lt;/span>) {
          $and = &lt;span class="hljs-string">''&lt;/span>;
        } &lt;span class="hljs-keyword">else&lt;/span> {
          $and = &lt;span class="hljs-string">' and'&lt;/span>;
        }
        $authinfo .= $comma . $and . &lt;span class="hljs-string">" &lt;a href=\"http://www.linkedin.com/in/"&lt;/span> . $linkedin . &lt;span class="hljs-string">"\" target=\"_blank\" rel=\"nofollow\" title=\""&lt;/span> . get_the_author_meta(&lt;span class="hljs-string">'display_name'&lt;/span>) . &lt;span class="hljs-string">" on LinkedIn\"&gt;LinkedIn&lt;/a&gt;"&lt;/span>;
      }
      &lt;span class="hljs-keyword">if&lt;/span> ($tlength &gt; &lt;span class="hljs-number">1&lt;/span>) {
        $authinfo .= &lt;span class="hljs-string">", and &lt;a href=\"http://twitter.com/"&lt;/span> . $twitter . &lt;span class="hljs-string">"\" target=\"_blank\" rel=\"nofollow\" title=\""&lt;/span> . get_the_author_meta(&lt;span class="hljs-string">'display_name'&lt;/span>) . &lt;span class="hljs-string">" on Twitter\"&gt;Twitter&lt;/a&gt;"&lt;/span>;
      }
        $authinfo .= &lt;span class="hljs-string">".&lt;/p&gt;\r\n"&lt;/span>;
    }
  }
  $authinfo .= &lt;span class="hljs-string">"&lt;/div&gt;\r\n"&lt;/span>;
  &lt;span class="hljs-keyword">if&lt;/span> ( is_single() ) {
    &lt;span class="hljs-keyword">echo&lt;/span> $authinfo;
  }
}</code></span><small class="shcb-language" id="shcb-language-36"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">PHP</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">php</span><span class="shcb-language__paren">)</span></small></pre>

What do you think? Do you have a different way of displaying the author box? I know there’s more than one way to skin a cat. Tell me how you customize the author box in the comments below.

 [1]: /2012/02/customize-the-contact-info-fields-in-wordpress-profiles/