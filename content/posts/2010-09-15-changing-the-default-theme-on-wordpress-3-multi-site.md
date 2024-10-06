---
title: Changing the Default Theme on WordPress 3 Multi-site
type: post
date: 2010-09-15T04:00:00+00:00
url: /2010/09/changing-the-default-theme-on-wordpress-3-multi-site/
categories:
  - Technical
tags:
  - WordPress

---
[WordPress][1]‘ default theme has come a long way with the new [twentyten][2] theme. However, for those of us using the multi-site feature it may still not be something we want all our users to be using on sign-up. Fortunately, there is an easy fix to the problem.

First, open up _includes/default-constants.php_ in your code editor.

Change _define( ‘WP\_DEFAULT\_THEME’, ‘twentyten’ );_ from twentyten to the name of your new theme. This is located right at the very end of the file so it should be easy to find.

If you’re not using a theme that is a [child of another theme][3] you’re done. If you are using a child-theme you’ll need to add some more code for this to work.

In your _content/mu-plugins_ folder create a file called _default-theme.php_

Add the following code to _default-theme.php_

<pre class="wp-block-code" aria-describedby="shcb-language-3" data-shcb-language-name="PHP" data-shcb-language-slug="php"><span><code class="hljs language-php">$tName = get_option(&lt;span class="hljs-string">'template'&lt;/span>);
&lt;span class="hljs-keyword">if&lt;/span> ($tName == &lt;span class="hljs-string">'&#91;your-child-theme]'&lt;/span>) {
     update_option(&lt;span class="hljs-string">'template'&lt;/span>, &lt;span class="hljs-string">'&#91;your-parent-theme]'&lt;/span>);
}</code></span><small class="shcb-language" id="shcb-language-3"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">PHP</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">php</span><span class="shcb-language__paren">)</span></small></pre>

Of course, you’ll need to replace the your-parent-theme and your-child-theme placeholders with the names of your themes. Once it’s done however new registrations will use your theme instead of the default twentyten theme.

 [1]: http://www.wordpress.org
 [2]: http://2010dev.wordpress.com/
 [3]: http://codex.wordpress.org/Child_Themes