---
title: Running An Update Function In Your WordPress Plugin
type: post
date: 2021-10-20T12:06:46+00:00
url: /2021/10/running-an-update-function-in-your-wordpress-plugin/
categories:
  - Technical
tags:
  - PHP

---
WordPress makes it easy to run scripts when a user activates or uninstalls your plugin, but what about when they update your plugin?

This script will look at your current plugin version and compare it to a saved version. If your plugin version is newer it will run an upgrade script based on the new version it sees and, finally, it will save the current plugin version to the WordPress database for later.

<pre class="wp-block-code" aria-describedby="shcb-language-140" data-shcb-language-name="PHP" data-shcb-language-slug="php"><span><code class="hljs language-php shcb-code-table shcb-line-numbers">&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-meta">&lt;?php&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-comment">/**&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-comment"> * Plugin Name: My Super Duper Plugin&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-comment"> * Plugin URI: /&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-comment"> * Description: My Super Duper Plugin&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-comment"> * Author: Chris Wiegman&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-comment"> * Author URI: /&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-comment"> * Text Domain: my-super-plugin&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-comment"> * Domain Path: /languages&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-comment"> * Version: 1.0.0&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-comment"> * Requires at least: 5.8.1&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-comment"> * Requires PHP: 7.2&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-comment"> * License: GPLv2 or later&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-comment"> * License URI: https://www.gnu.org/licenses/gpl-2.0.html&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-comment"> */&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span> add_action( &lt;span class="hljs-string">'plugins_loaded'&lt;/span>, &lt;span class="hljs-string">'update_plugin'&lt;/span> );
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-comment">/**&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-comment"> * Checks plugin version for update and calls update function where appropriate.&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-comment"> *&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-comment"> * &lt;span class="hljs-doctag">@return&lt;/span> bool True if updates were carried out or false.&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-comment"> */&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-function">&lt;span class="hljs-keyword">function&lt;/span> &lt;span class="hljs-title">update_plugin&lt;/span>&lt;span class="hljs-params">()&lt;/span> &lt;/span>{
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>	$current_version = get_option( &lt;span class="hljs-string">'my_super_plugin_current_version'&lt;/span>, &lt;span class="hljs-string">'0.0.0'&lt;/span> );
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>	$file_data       = get_file_data( &lt;span class="hljs-keyword">__FILE__&lt;/span>, &lt;span class="hljs-keyword">array&lt;/span>( &lt;span class="hljs-string">'Version'&lt;/span> =&gt; &lt;span class="hljs-string">'Version'&lt;/span> ) );
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>	$plugin_version  = $file_data&#91;&lt;span class="hljs-string">'Version'&lt;/span>];
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>	&lt;span class="hljs-keyword">if&lt;/span> ( &lt;span class="hljs-number">1&lt;/span> === version_compare( $plugin_version, $current_version ) ) {
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>		&lt;span class="hljs-comment">// Array of versions requiring update and their callbacks.&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>		&lt;span class="hljs-comment">// Note these do not have to exactly match plugin version.&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>		$update_versions = &lt;span class="hljs-keyword">array&lt;/span>(
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>			&lt;span class="hljs-string">'1.0.1'&lt;/span> =&gt; &lt;span class="hljs-string">'update_1_0_1'&lt;/span>,
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>		);
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>		&lt;span class="hljs-keyword">foreach&lt;/span> ( $update_versions &lt;span class="hljs-keyword">as&lt;/span> $version =&gt; $callback ) {
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>			&lt;span class="hljs-keyword">if&lt;/span> ( &lt;span class="hljs-number">1&lt;/span> === version_compare( $version, $current_version ) ) {
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>				call_user_func( $callback );
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>			}
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>		}
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>		&lt;span class="hljs-comment">// Save the last updated version.&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>		update_option( &lt;span class="hljs-string">'my_super_plugin_current_version'&lt;/span>, $plugin_version );
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>		&lt;span class="hljs-keyword">return&lt;/span> &lt;span class="hljs-keyword">true&lt;/span>;
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>	}
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>	&lt;span class="hljs-keyword">return&lt;/span> &lt;span class="hljs-keyword">false&lt;/span>;
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>}
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>&lt;span class="hljs-function">&lt;span class="hljs-keyword">function&lt;/span> &lt;span class="hljs-title">update_1_0_1&lt;/span>&lt;span class="hljs-params">()&lt;/span> &lt;/span>{
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>    &lt;span class="hljs-comment">//Run your update script&lt;/span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>}
&lt;/span>&lt;/span></code></span><small class="shcb-language" id="shcb-language-140"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">PHP</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">php</span><span class="shcb-language__paren">)</span></small></pre>

There are a few keys to this. First, on line 17, we call our updater in WordPress' _plugins_loaded_ hook.

It first requests a saved plugin version number from the database and compares it to the current version in the plugin header on line 10 if the current version is newer than the saved version it will then look at the _$update_versions_ array.

This array contains the version to check and the function to run. In this case, if we change the plugin version to 1.0.1 it will run the _update\_1\_0_1_ function. We can add to this array for each new version and it will run the updates in the order listed. Note it doesn't matter what new version you put here, it only matters that the actual new plugin version either matches the array version or exceeds it. I find this handy when I write an upgrade routine but my team hasn't decided what the new version will be. As long as I increment the patch level by one it will work just fine.

One thing to note here is the default version, 0.0.0. This allows the upgrade routine to even run on new installs, which may or may not be what you want. I wrote this for a plugin where we want this behavior currently but, in the future, it would be trivial to modify the script to prevent it from running on the new installs. Simply change the default option on line 25 from 0.0.0 to _false_ and check accordingly on line 29.

This simple routine will make running WordPress updates easy as you move forward with your WordPress plugin allowing you to easily enable new functionality such as changing database tables or more.