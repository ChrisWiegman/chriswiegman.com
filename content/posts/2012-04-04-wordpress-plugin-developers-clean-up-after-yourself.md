---
title: 'WordPress Plugin Developers: Clean Up After Yourself'
date: 2012-04-04T00:00:00+00:00
categories:
  - Technical
tags:
  - Web Development
  - WordPress
---

![Plugin Developers - Clean Up After Yourself](/images/2012/04/clean-up-after-yourself-225x225-1.jpg)

Every time you install a [WordPress](http://wordpress.org) plugin chances are it makes some changes to your database or site files. It may add options, complete database tables, files, etc to perform its functionality. While this is great when your using the plugin the problem is most plugin developers never clean this information up when a user deletes the plugin.

Here are a few quick tips for plugin developers to help you clean up after yourself when someone deletes your plugin and generally be good stewards of your user’s sites:

## 1.) Have an uninstall script

Before we do any cleanup we first must tell WordPress where to find the janitor (AKA the function that will do the cleanup for our plugin). We do this with the [register\_uninstall\_hook](http://codex.wordpress.org/Function_Reference/register_uninstall_hook) call in our plugin. Below is the call I use for [Better WP Security][1].

Note it only takes 2 parameters, the file the hook is located in (in the below case the current file) and the function to use which I have wrapped in its own class.

``` php
register_uninstall_hook( __FILE__, array( 'bwps_setup', 'on_uninstall' ) );
```

## 2.) Delete the options

Do not leave all the options in your database hoping the the user will reactivate your plugin. That’s what deactivation is for (turning off the plugin without deleting it). If a user deletes your plugin use the [delete\_option](http://codex.wordpress.org/Function_Reference/delete_option) function to remove every single option you’ve put in the database. It’s easy as it only takes the name of the option but if you have multiple options you will need to call it multiple times. Here’s an example.

``` php
delete_option( 'option_name' );
```

## 3.) Delete Transient options

If you’ve used [WordPress’ transient API](http://codex.wordpress.org/Transients_API) to store temporary options make sure you delete those as well with the [delete\_transient](http://codex.wordpress.org/Function_Reference/delete_transient) function. It’s just as easy as deleting regular options. Only the name of the function changes. Here’s an example:

``` php
delete_transient( 'transient_option_name' );
```

## 4.) Delete any scheduled tasks

If you’ve scheduled a task with [WP-cron](http://codex.wordpress.org/Category:WP-Cron_Functions) make sure you delete it when the user delete’s the plugin with the [wp\_clear\_scheduled\_hook](http://codex.wordpress.org/Function_Reference/wp_clear_scheduled_hook) function. The example below checks to see if a given task has been scheduled and clears it if it has.

``` php
if ( wp_next_scheduled( 'given_task' ) ) {
  wp_clear_scheduled_hook( 'given_task' );
}
```

## 5.) Delete post meta data

If you’ve set on option on a per-post basis (by adding the option to the post or page editing screen) make sure you delete all occurrences of that option from the database with the [delete\_metadata](http://codex.wordpress.org/Function_Reference/delete_metadata) function. The below example will delete all occurrences of a given meta option from the database. In a site with a lot of content failure to do this can really make a mess of a user’s database over time.

``` php
delete_metadata( 'post', null, 'option_name', null, true );
```

## 6.) Delete database tables

Don’t just leave obsolete tables in a user’s database. Get rid of them with the following example:

``` php
global $wpdb;
$wpdb->query( "DROP TABLE IF EXISTS `" . $wpdb->base_prefix . "table_name`;" );
```

Notice in my example that I’m using $wpdb->base_prefix. This makes sure that it works for the user’s blog and ONLY for the user’s blog should they have more than one installation in the same database.

## 7.) Clean up .htaccess

If you’ve written to the user’s .htaccess make sure you clean it up. Below is a function that will delete a given section from .htaccess assuming that the section in question is using _\# BEGIN_ and _\# END_ tags.

``` php
/**
 * Remove a given section of code from .htaccess
 * @return Boolean
 * @param String
 * @param String
 */
function remove_section($filename, $marker) {
  $markerdata = explode("\n", implode( '', file( $filename))); //parse each line of file into array
  $f = fopen($filename, 'w'); //open the file
  if ($markerdata) { //as long as there are lines in the file
    $state = true;
    foreach ($markerdata as $n => $markerline) { //for each line in the file
      if (strpos($markerline, '# BEGIN ' . $marker) !== false) { //if we're at the beginning of the section
        $state = false;
      }
      if ($state == true) { //as long as we're not in the section keep writing
        if ($n + 1 < count($markerdata)) //make sure to add newline to appropriate lines
          fwrite($f, "{$markerline}\n");
        else
          fwrite($f, "{$markerline}");
      }
      if (strpos($markerline, '# END ' . $marker) !== false) { //see if we're at the end of the section
        $state = true;
      }
    }
  }
  return true;
}
```

Now, to call the function use the following:

remove_section( &#8216;path-to-.htaccess', &#8216;Section Name');

In the above example make sure you replace path-to- with the absolute path to the file in question and replace Section Name with whatever name comes after _\# BEGIN_ and _\# END_

## 8.) Cleanup other file changes

If you’ve made changes to wp-config.php or any other system file make sure you revert them. Unfortunately the methods used to make these changes vary so greatly I can’t give a good example code however if you found out how to put it in there you should be able to figure out how to get it out.

## 9) Remove plugin files

Finally, remove any caches, log files, temp files, etc your plugin created outside the plugin folder (anything in the actual plugin folder will be deleted automatically). As with file changes I don’t want to give an example of this as their are too many possibilities so, again, if you figured out how to get it there be a good developer and figure out how to get it out.

## Conclusion

Don’t take someone uninstalling your plugin personally. There are many reasons someone will uninstall a plugin and almost never are they a personal attack against the developer who created it. Instead, when someone does uninstall your plugin, be responsible and clean up everything you’ve left behind. Good stewardship goes a long way to proving your merits as a good developer.

 [1]: https://wordpress.org/plugins/better-wp-security/