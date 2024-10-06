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

## How I updated the date on all the index pages

After brainstorming a few ideas to solve the problem I eventually realized that, at least for my simple use case, the best option was to simply update the post date on the pages themselves. This ensures a few things:

* The sitemap and other indexes are updated
* I can see that they've been updated myself in the WordPress Dashboard
* The pages I need to update are predictable making the cost of maintaining this relatively low

To implement this only requires a single hook, _save_post_, which gives us all we need to update the related page when an index item is updated. Here's how I did it:

``` php {linenos=table}
add_action( 'save_post', 'action_save_post', 10, 3 );

/**
 * Action save_post
 *
 * Update the index pages when content is saved.
 *
 * @param int      $post_ID Post ID.
 * @param \WP_POST $post Post object.
 * @param  bool     $update Whether this is an existing post being updated.
 */
function action_save_post( $post_ID, $post, $update ) {

	$post_types = array(
		'post'  => 1226,
		'talk'  => 463,
		'event' => 463,
	);

	if (
		array_key_exists( $post->post_type, $post_types ) &&
		! wp_is_post_revision( $post ) &&
		'publish' === $post->post_status
	) {

		remove_action( 'save_post', 'action_save_post', 10, 3 );

		$index_page = array(
			'ID'            => $post_types[ $post->post_type ],
			'post_date'     => current_time( 'mysql' ),
			'post_date_gmt' => current_time( 'mysql', 1 ),
		);

		wp_update_post( $index_page );
	}
}
```

In my case this code lives in [my _functions.php_ file][2] but it can go nearly anywhere. A few callouts with it:

First, you need to know the post IDs of the pages you want to update and associate them with the post types that should update them. You see this above in the _post_types_ array.

Second, the checks for post type, _wp\_is\_post_revision_ and post status are important. This ensures that the indexes are only updated when you actually click "update" or "publish" on the associated content.

Finally, removing the action ensures that we don't risk calling any loop. This code will run once per save and that's it.

Put together this code should be plenty to ensure you can use simple index pages for various content types and keep them current.

 [1]: https://pods.io
 [2]: https://github.com/ChrisWiegman/chriswiegman-theme/blob/main/functions.php