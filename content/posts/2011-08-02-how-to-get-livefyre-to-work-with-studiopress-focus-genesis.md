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

![LiveFyre and Genesis Logo](/images/2011/08/LiveFyre-Genesis-Logo.png)

Two great products I believe in are LiveFyre and Genesis by Studiopress. This site uses both and the Focus child theme for Genesis. While the final solution is about perfect, there are a couple of changes that need to be made to focus to get them working if you use the “After post left” and “After post right” widget areas. Out of the box, due to the way LiveFyre hooks into the WordPress system, LiveFyre will completely overwrite these two widget areas.

To fix this we need to edit a couple of files in the focus theme. First, we’re going to edit functions.php. Change:

``` php
add_action( 'genesis_before_comments', 'focus_after_post_box' );
```

(it should be on line 29) to:

``` php
add_action( 'genesis_after_post_content', 'focus_after_post_box' );
```

This will show the widget areas with liveFyre again. Next we need to fix the overflow so that widget content stays where it should and doesn’t hang over the post area. To to this add the following line before the last div in the after-post.php file in the Focus child theme.

``` html
<div class="clear"></div>
```

This should go right before the

``` php
<?php endif; ?>
```

line at the end of the file.

My thanks to [Brian Gardner](http://twitter.com/bgardner "Brian Gardner on Twitter") from Studiopress who was nice enough to help me solve this problem 9:00 at night. That is quality customer service!

Also note that I am a member of the Studiopress affiliate program and links to their site resulting in a purchase will earn me a couple of bucks.