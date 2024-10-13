---
title: Running An Update Function In Your WordPress Plugin
date: 2021-10-20T12:06:46+00:00
categories:
  - Technical
tags:
  - PHP
---

WordPress makes it easy to run scripts when a user activates or uninstalls your plugin, but what about when they update your plugin?

This script will look at your current plugin version and compare it to a saved version. If your plugin version is newer it will run an upgrade script based on the new version it sees and, finally, it will save the current plugin version to the WordPress database for later.

``` php {linenos=table}
<?php
/**
 * Plugin Name: My Super Duper Plugin
 * Plugin URI: https://chriswiegman.com/
 * Description: My Super Duper Plugin
 * Author: Chris Wiegman
 * Author URI: https://chriswiegman.com/
 * Text Domain: my-super-plugin
 * Domain Path: /languages
 * Version: 1.0.0
 * Requires at least: 5.8.1
 * Requires PHP: 7.2
 * License: GPLv2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 */

 add_action( 'plugins_loaded', 'update_plugin' );

/**
 * Checks plugin version for update and calls update function where appropriate.
 *
 * @return bool True if updates were carried out or false.
 */
function update_plugin() {
	$current_version = get_option( 'my_super_plugin_current_version', '0.0.0' );
	$file_data       = get_file_data( __FILE__, array( 'Version' => 'Version' ) );
	$plugin_version  = $file_data['Version'];

	if ( 1 === version_compare( $plugin_version, $current_version ) ) {

		// Array of versions requiring update and their callbacks.
		// Note these do not have to exactly match plugin version.
		$update_versions = array(
			'1.0.1' => 'update_1_0_1',
		);

		foreach ( $update_versions as $version => $callback ) {
			if ( 1 === version_compare( $version, $current_version ) ) {
				call_user_func( $callback );
			}
		}

		// Save the last updated version.
		update_option( 'my_super_plugin_current_version', $plugin_version );
		return true;
	}

	return false;
}

function update_1_0_1() {
    //Run your update script
}
```

There are a few keys to this. First, on line 17, we call our updater in WordPress' _plugins_loaded_ hook.

It first requests a saved plugin version number from the database and compares it to the current version in the plugin header on line 10 if the current version is newer than the saved version it will then look at the _$update_versions_ array.

This array contains the version to check and the function to run. In this case, if we change the plugin version to 1.0.1 it will run the _update\_1\_0_1_ function. We can add to this array for each new version and it will run the updates in the order listed. Note it doesn't matter what new version you put here, it only matters that the actual new plugin version either matches the array version or exceeds it. I find this handy when I write an upgrade routine but my team hasn't decided what the new version will be. As long as I increment the patch level by one it will work just fine.

One thing to note here is the default version, 0.0.0. This allows the upgrade routine to even run on new installs, which may or may not be what you want. I wrote this for a plugin where we want this behavior currently but, in the future, it would be trivial to modify the script to prevent it from running on the new installs. Simply change the default option on line 25 from 0.0.0 to _false_ and check accordingly on line 29.

This simple routine will make running WordPress updates easy as you move forward with your WordPress plugin allowing you to easily enable new functionality such as changing database tables or more.