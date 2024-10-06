---
title: Customize the Contact Info Fields in WordPress Profiles
type: post
date: 2012-02-06T00:00:00+00:00
url: /2012/02/customize-the-contact-info-fields-in-wordpress-profiles/
categories:
  - Technical
tags:
  - WordPress

---
<div class="wp-block-image">
  <figure class="alignright size-large"><img loading="lazy" decoding="async" width="225" height="119" src="/images/2012/02/WordPress-contact-info-225x119-1.png" alt="WordPress Contact Info" class="wp-image-323" /><figcaption>The WordPress profile with custom contact information.</figcaption></figure>
</div>

The <a href="http://wordpress.org" target="_blank" rel="noreferrer noopener">WordPress</a> profile has some handy fields for storing contact info but, unfortunately, not many of us are using Google Talk or AIM anymore (and who wants to put them on their posts anyway). Fortunately it is easy to change these fields to suit your needs and incorporate information from social networks such as <a href="https://www.facebook.com" target="_blank" rel="noreferrer noopener">Facebook</a>, <a href="http://twitter.com" target="_blank" rel="noreferrer noopener">Twitter</a>, <a href="http://linkedin.com" target="_blank" rel="noreferrer noopener">LinkedIn</a>, <a href="http://plus.google.com" target="_blank" rel="noreferrer noopener">Google+</a> , or anything else.

## 1.) Open your theme’s functions.php file

Were going to edit our theme rather than put this in a plugin. The _functions.php_ file should be found in the root of your theme directory.

## 2.) Create a new function

First we’ll create a new function to hold the code for adding and deleting fields.

<pre class="wp-block-code" aria-describedby="shcb-language-19" data-shcb-language-name="PHP" data-shcb-language-slug="php"><span><code class="hljs language-php">&lt;span class="hljs-function">&lt;span class="hljs-keyword">function&lt;/span> &lt;span class="hljs-title">change_contact_info&lt;/span>&lt;span class="hljs-params">($contactmethods)&lt;/span> &lt;/span>{</code></span><small class="shcb-language" id="shcb-language-19"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">PHP</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">php</span><span class="shcb-language__paren">)</span></small></pre>

## 3.) Take out the fields we don’t want

In our function we need to remove the fields we don’t want. The following lines remove AIM, Google Talk and Yahoo Messenger.

<pre class="wp-block-code" aria-describedby="shcb-language-20" data-shcb-language-name="PHP" data-shcb-language-slug="php"><span><code class="hljs language-php">&lt;span class="hljs-keyword">unset&lt;/span>($contactmethods&#91;&lt;span class="hljs-string">'aim'&lt;/span>]);
&lt;span class="hljs-keyword">unset&lt;/span>($contactmethods&#91;&lt;span class="hljs-string">'yim'&lt;/span>]);
&lt;span class="hljs-keyword">unset&lt;/span>($contactmethods&#91;&lt;span class="hljs-string">'jabber'&lt;/span>]);</code></span><small class="shcb-language" id="shcb-language-20"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">PHP</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">php</span><span class="shcb-language__paren">)</span></small></pre>

## 4.) Add the fields we do want

Next we’ll add the contact fields we do want. This example adds a title for the user’s website, Facebook, Google+, Twitter, and LinkedIn but you can customize this for anything you want.

<pre class="wp-block-code" aria-describedby="shcb-language-21" data-shcb-language-name="PHP" data-shcb-language-slug="php"><span><code class="hljs language-php">$contactmethods&#91;&lt;span class="hljs-string">'website_title'&lt;/span>] = &lt;span class="hljs-string">'Website Title'&lt;/span>;
$contactmethods&#91;&lt;span class="hljs-string">'twitter'&lt;/span>] = &lt;span class="hljs-string">'Twitter'&lt;/span>;
$contactmethods&#91;&lt;span class="hljs-string">'facebook'&lt;/span>] = &lt;span class="hljs-string">'Facebook'&lt;/span>;
$contactmethods&#91;&lt;span class="hljs-string">'linkedin'&lt;/span>] = &lt;span class="hljs-string">'Linked In'&lt;/span>;
$contactmethods&#91;&lt;span class="hljs-string">'gplus'&lt;/span>] = &lt;span class="hljs-string">'Google +'&lt;/span>;</code></span><small class="shcb-language" id="shcb-language-21"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">PHP</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">php</span><span class="shcb-language__paren">)</span></small></pre>

## 5.) Return the new contact methods and close the function

We’re going to send our contact fields back to WordPress and close the function we used to edit the fields.

<pre class="wp-block-code" aria-describedby="shcb-language-22" data-shcb-language-name="PHP" data-shcb-language-slug="php"><span><code class="hljs language-php">    &lt;span class="hljs-keyword">return&lt;/span> $contactmethods;
}</code></span><small class="shcb-language" id="shcb-language-22"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">PHP</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">php</span><span class="shcb-language__paren">)</span></small></pre>

## 6.) Register our function with WordPress

Finally we need to register our function with WordPress which will, in effect, “turn on” our changes.

<pre class="wp-block-code" aria-describedby="shcb-language-23" data-shcb-language-name="PHP" data-shcb-language-slug="php"><span><code class="hljs language-php">add_filter(&lt;span class="hljs-string">'user_contactmethods'&lt;/span>,&lt;span class="hljs-string">'change_contact_info'&lt;/span>,&lt;span class="hljs-number">10&lt;/span>,&lt;span class="hljs-number">1&lt;/span>);</code></span><small class="shcb-language" id="shcb-language-23"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">PHP</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">php</span><span class="shcb-language__paren">)</span></small></pre>

## Putting it all together

Here’s the final code that creates the contact info fields you see on in the picture at the top of this page. In an upcoming post I will add a tutorial on how you can use these fields to automatically populate author information on a WordPress theme.

<pre class="wp-block-code" aria-describedby="shcb-language-24" data-shcb-language-name="PHP" data-shcb-language-slug="php"><span><code class="hljs language-php">&lt;span class="hljs-function">&lt;span class="hljs-keyword">function&lt;/span> &lt;span class="hljs-title">change_contact_info&lt;/span>&lt;span class="hljs-params">($contactmethods)&lt;/span> &lt;/span>{

    &lt;span class="hljs-keyword">unset&lt;/span>($contactmethods&#91;&lt;span class="hljs-string">'aim'&lt;/span>]);
    &lt;span class="hljs-keyword">unset&lt;/span>($contactmethods&#91;&lt;span class="hljs-string">'yim'&lt;/span>]);
    &lt;span class="hljs-keyword">unset&lt;/span>($contactmethods&#91;&lt;span class="hljs-string">'jabber'&lt;/span>]);

    $contactmethods&#91;&lt;span class="hljs-string">'website_title'&lt;/span>] = &lt;span class="hljs-string">'Website Title'&lt;/span>;
    $contactmethods&#91;&lt;span class="hljs-string">'twitter'&lt;/span>] = &lt;span class="hljs-string">'Twitter'&lt;/span>;
    $contactmethods&#91;&lt;span class="hljs-string">'facebook'&lt;/span>] = &lt;span class="hljs-string">'Facebook'&lt;/span>;
    $contactmethods&#91;&lt;span class="hljs-string">'linkedin'&lt;/span>] = &lt;span class="hljs-string">'Linked In'&lt;/span>;
    $contactmethods&#91;&lt;span class="hljs-string">'gplus'&lt;/span>] = &lt;span class="hljs-string">'Google +'&lt;/span>;

    &lt;span class="hljs-keyword">return&lt;/span> $contactmethods;
}

add_filter(&lt;span class="hljs-string">'user_contactmethods'&lt;/span>,&lt;span class="hljs-string">'change_contact_info'&lt;/span>,&lt;span class="hljs-number">10&lt;/span>,&lt;span class="hljs-number">1&lt;/span>);</code></span><small class="shcb-language" id="shcb-language-24"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">PHP</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">php</span><span class="shcb-language__paren">)</span></small></pre>