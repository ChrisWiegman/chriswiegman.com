---
title: Keeping Track of wp-config.php Information Across Different Environments
type: post
date: 2014-05-08T04:00:00+00:00
url: /2014/05/keeping-track-of-wp-config-php-information-across-different-environments/
categories:
  - Technical
tags:
  - Development
  - WordPress
---

Using GIT (or other version control systems) to keep track of and deploy WordPress sites is becoming the “in” thing. Do your changes, commit them to the repository and, in some cases, watch them automatically go to another server in your environment. It’s a great workflow that allows you to always have the option to back out of any changes made and revisit what you did later.

What I see most people do though is just use a single GIT branch (I’m going to stick to GIT for the rest of this). Sure this still works but what happens if you accidentally overwrite your wp-config.php file somewhere? Either you’re going to overwrite it across your whole system or you’re going to lose those changes later as they’re not in the repository with you.

There is a better way to do this.

_note: I realize keeping wp-config.php in a public repository such as [GitHub](http://github.com) is idiotic for security reasons. If you’re going to do this get a private repository at somewhere like [Bitbucket](http://bitbucket.com) or, better yet, roll your own._

Now that I’ve got the security disclaimer out of the way a better way to manage your sites is one GIT branch per server. On this site, where I don’t have a staging server, this means that I have the _master_ branch where the production version of my site lives and a _dev_ branch that I use to develop with on my local machine. On other projects I’ll often add a _staging_ branch as well as that’s typically what I would use to show clients and others who need to see it before launch.

So if you’re just using a single branch go ahead and create at least one other to develop in. Once your site is branched now you need to worry about the configuration files.

Now in each branch create an appropriate [branch-name]-config.php file. In addition, edit that branches .gitignore file to exclude any config files from the other branches to prevent you from accidentally saving the file to the wrong server.

Example:

If I have 3 branches, _master, dev_ and _staging _I would do the following for each branch

1. in *master* create the file master-config.php in the same folder as wp-config.php.<br />edit .gitignore and add staging-config.php and dev-config.php to it
2. in *staging* create the file staging-config.php in the same folder as wp-config.php.<br />edit .gitignore and add master-config.php and dev-config.php to it
3. in *dev* create the file dev-config.php in the same folder as wp-config.php.<br />edit .gitignore and add staging-config.php and master-config.php to it

Once the files are are created we’re going to take out all the information before **_/\* That’s all, stop editing! Happy blogging. \*/_ **in wp-config.php and add it to each of the created files as appropriate. In other words for the wp-config on the production server add its information to master-config.php, for dev add it to dev-config.php, etc.

At this point if you push all your changes each server would have a custom configuration file based on the branch and a broken wp-config.php. We’ll now need to tell it which one it needs to use. The code below, added to wp-config.php in every branch, will take care of that for you.

``` php
// Load the correct configuration.
if ( file_exists( dirname(__FILE__) . '/master-config.php' ) ) {
  @require_once( dirname(__FILE__) . '/master-config.php' );
} elseif ( file_exists( dirname(__FILE__) . '/staging-config.php' ) ) {
  @require_once( dirname(__FILE__) . '/staging-config.php' );
} else {
  @require_once(dirname(__FILE__) . '/dev-config.php');
}
/* That's all, stop editing! Happy blogging. */
/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') ) {
  define('ABSPATH', dirname(__FILE__) . '/');
}
/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
```

Notice the end of the file it has the same information as the normal wp-config.php file. Before that however we start with our production server and check for the master-config.php file. If it is there use it, and if not try for staging and then default to local.

This is a solid setup that will make sure that even if you put an extra configuration file on your production server it will still use the one it is supposed to. In addition, you can make your changes anywhere and not have to worry about what the configuration is. Finally, and one of the handiest things for me, it helps me make sure I’m not coding directly to the wrong branch when I’m working as, with the wrong configuration, the site simply won’t work on that server.

Of course to use this you need to keep your site in GIT or another version control system but if you haven’t taken that leap yet look at it as just one more way to make your life easier when you do.