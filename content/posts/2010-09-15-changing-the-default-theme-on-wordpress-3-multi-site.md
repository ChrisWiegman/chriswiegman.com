---
title: Changing the Default Theme on WordPress 3 Multi-site
date: 2010-09-15T04:00:00+00:00
draft: false
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

``` php
$tName = get_option('template');
if ($tName == '[your-child-theme]') {
     update_option('template', '[your-parent-theme]');
}
```

Of course, you’ll need to replace the your-parent-theme and your-child-theme placeholders with the names of your themes. Once it’s done however new registrations will use your theme instead of the default twentyten theme.

 [1]: http://www.wordpress.org
 [2]: http://2010dev.wordpress.com/
 [3]: http://codex.wordpress.org/Child_Themes