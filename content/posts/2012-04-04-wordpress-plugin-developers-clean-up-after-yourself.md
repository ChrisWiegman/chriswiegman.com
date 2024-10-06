---
title: 'WordPress Plugin Developers: Clean Up After Yourself'
type: post
date: 2012-04-04T00:00:00+00:00
url: /2012/04/wordpress-plugin-developers-clean-up-after-yourself/
categories:
  - Technical
tags:
  - Web Development
  - WordPress

---
<div class="wp-block-image">
  <figure class="alignleft"><img decoding="async" src="/images/2012/04/clean-up-after-yourself-225x225-1.jpg" alt="Plugin Developers - Clean Up After Yourself" class="wp-image-4082" /></figure>
</div>

Every time you install a <a href="http://wordpress.org" target="_blank" rel="noreferrer noopener">WordPress</a> plugin chances are it makes some changes to your database or site files. It may add options, complete database tables, files, etc to perform its functionality. While this is great when your using the plugin the problem is most plugin developers never clean this information up when a user deletes the plugin.

Here are a few quick tips for plugin developers to help you clean up after yourself when someone deletes your plugin and generally be good stewards of your user’s sites:

## 1.) Have an uninstall script

Before we do any cleanup we first must tell WordPress where to find the janitor (AKA the function that will do the cleanup for our plugin). We do this with the <a href="http://codex.wordpress.org/Function_Reference/register_uninstall_hook" target="_blank" rel="noreferrer noopener">register_uninstall_hook</a> call in our plugin. Below is the call I use for [Better WP Security][1].

Note it only takes 2 parameters, the file the hook is located in (in the below case the current file) and the function to use which I have wrapped in its own class.

<pre class="wp-block-code" aria-describedby="shcb-language-37" data-shcb-language-name="PHP" data-shcb-language-slug="php"><span><code class="hljs language-php">register_uninstall_hook( &lt;span class="hljs-keyword">__FILE__&lt;/span>, &lt;span class="hljs-keyword">array&lt;/span>( &lt;span class="hljs-string">'bwps_setup'&lt;/span>, &lt;span class="hljs-string">'on_uninstall'&lt;/span> ) );</code></span><small class="shcb-language" id="shcb-language-37"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">PHP</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">php</span><span class="shcb-language__paren">)</span></small></pre>

## 2.) Delete the options

Don not leave all the options in your database hoping the the user will reactivate your plugin. That’s what deactivation is for (turning off the plugin without deleting it). If a user deletes your plugin use the <a href="http://codex.wordpress.org/Function_Reference/delete_option" target="_blank" rel="noreferrer noopener">delete_option</a> function to remove every single option you’ve put in the database. It’s easy as it only takes the name of the option but if you have multiple options you will need to call it multiple times. Here’s an example.

<pre class="wp-block-code" aria-describedby="shcb-language-38" data-shcb-language-name="PHP" data-shcb-language-slug="php"><span><code class="hljs language-php">delete_option( &lt;span class="hljs-string">'option_name'&lt;/span> );</code></span><small class="shcb-language" id="shcb-language-38"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">PHP</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">php</span><span class="shcb-language__paren">)</span></small></pre>

## 3.) Delete Transient options

If you’ve used <a href="http://codex.wordpress.org/Transients_API" target="_blank" rel="noreferrer noopener">WordPress’ transient API</a> to store temporary options make sure you delete those as well with the <a href="http://codex.wordpress.org/Function_Reference/delete_transient" target="_blank" rel="noreferrer noopener">delete_transient</a> function. It’s just as easy as deleting regular options. Only the name of the function changes. Here’s an example:

<pre class="wp-block-code" aria-describedby="shcb-language-39" data-shcb-language-name="PHP" data-shcb-language-slug="php"><span><code class="hljs language-php">delete_transient( &lt;span class="hljs-string">'transient_option_name'&lt;/span> );</code></span><small class="shcb-language" id="shcb-language-39"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">PHP</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">php</span><span class="shcb-language__paren">)</span></small></pre>

## 4.) Delete any scheduled tasks

If you’ve scheduled a task with <a href="http://codex.wordpress.org/Category:WP-Cron_Functions" target="_blank" rel="noreferrer noopener">WP-cron</a> make sure you delete it when the user delete’s the plugin with the <a href="http://codex.wordpress.org/Function_Reference/wp_clear_scheduled_hook" target="_blank" rel="noreferrer noopener">wp_clear_scheduled_hook</a> function. The example below checks to see if a given task has been scheduled and clears it if it has.

<pre class="wp-block-code" aria-describedby="shcb-language-40" data-shcb-language-name="PHP" data-shcb-language-slug="php"><span><code class="hljs language-php">&lt;span class="hljs-keyword">if&lt;/span> ( wp_next_scheduled( &lt;span class="hljs-string">'given_task'&lt;/span> ) ) {
  wp_clear_scheduled_hook( &lt;span class="hljs-string">'given_task'&lt;/span> );
}</code></span><small class="shcb-language" id="shcb-language-40"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">PHP</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">php</span><span class="shcb-language__paren">)</span></small></pre>

## 5.) Delete post meta data

If you’ve set on option on a per-post basis (by adding the option to the post or page editing screen) make sure you delete all&nbsp;occurrences&nbsp;of that option from the database with the <a href="http://codex.wordpress.org/Function_Reference/delete_metadata" target="_blank" rel="noreferrer noopener">delete_metadata</a> function. The below example will delete all&nbsp;occurrences&nbsp;of a given meta option from the database. In a site with a lot of content failure to do this can really make a mess of a user’s database over time.

<pre class="wp-block-code" aria-describedby="shcb-language-41" data-shcb-language-name="PHP" data-shcb-language-slug="php"><span><code class="hljs language-php">delete_metadata( &lt;span class="hljs-string">'post'&lt;/span>, &lt;span class="hljs-keyword">null&lt;/span>, &lt;span class="hljs-string">'option_name'&lt;/span>, &lt;span class="hljs-keyword">null&lt;/span>, &lt;span class="hljs-keyword">true&lt;/span> );</code></span><small class="shcb-language" id="shcb-language-41"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">PHP</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">php</span><span class="shcb-language__paren">)</span></small></pre>

## 6.) Delete database tables

Don’t just leave obsolete tables in a user’s database. Get rid of them with the following example:

<pre class="wp-block-code" aria-describedby="shcb-language-42" data-shcb-language-name="PHP" data-shcb-language-slug="php"><span><code class="hljs language-php">&lt;span class="hljs-keyword">global&lt;/span> $wpdb;
$wpdb-&gt;query( &lt;span class="hljs-string">"DROP TABLE IF EXISTS `"&lt;/span> . $wpdb-&gt;base_prefix . &lt;span class="hljs-string">"table_name`;"&lt;/span> );</code></span><small class="shcb-language" id="shcb-language-42"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">PHP</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">php</span><span class="shcb-language__paren">)</span></small></pre>

Notice in my example that I’m using $wpdb->base_prefix. This makes sure that it works for the user’s blog and ONLY for the user’s blog should they have more than one installation in the same database.

## 7.) Clean up .htaccess

If you’ve written to the user’s .htaccess make sure you clean it up. Below is a function that will delete a given section from .htaccess assuming that the section in question is using _\# BEGIN_ and _\# END_ tags.

<pre class="wp-block-code" aria-describedby="shcb-language-43" data-shcb-language-name="PHP" data-shcb-language-slug="php"><span><code class="hljs language-php">&lt;span class="hljs-comment">/**
 * Remove a given section of code from .htaccess
 * &lt;span class="hljs-doctag">@return&lt;/span> Boolean
 * &lt;span class="hljs-doctag">@param&lt;/span> String
 * &lt;span class="hljs-doctag">@param&lt;/span> String
 */&lt;/span>
&lt;span class="hljs-function">&lt;span class="hljs-keyword">function&lt;/span> &lt;span class="hljs-title">remove_section&lt;/span>&lt;span class="hljs-params">($filename, $marker)&lt;/span> &lt;/span>{

  $markerdata = explode(&lt;span class="hljs-string">"\n"&lt;/span>, implode( &lt;span class="hljs-string">''&lt;/span>, file( $filename))); &lt;span class="hljs-comment">//parse each line of file into array&lt;/span>

  $f = fopen($filename, &lt;span class="hljs-string">'w'&lt;/span>); &lt;span class="hljs-comment">//open the file&lt;/span>

  &lt;span class="hljs-keyword">if&lt;/span> ($markerdata) { &lt;span class="hljs-comment">//as long as there are lines in the file&lt;/span>
    $state = &lt;span class="hljs-keyword">true&lt;/span>;

    &lt;span class="hljs-keyword">foreach&lt;/span> ($markerdata &lt;span class="hljs-keyword">as&lt;/span> $n =&gt; $markerline) { &lt;span class="hljs-comment">//for each line in the file&lt;/span>

      &lt;span class="hljs-keyword">if&lt;/span> (strpos($markerline, &lt;span class="hljs-string">'# BEGIN '&lt;/span> . $marker) !== &lt;span class="hljs-keyword">false&lt;/span>) { &lt;span class="hljs-comment">//if we're at the beginning of the section&lt;/span>
        $state = &lt;span class="hljs-keyword">false&lt;/span>;
      }

      &lt;span class="hljs-keyword">if&lt;/span> ($state == &lt;span class="hljs-keyword">true&lt;/span>) { &lt;span class="hljs-comment">//as long as we're not in the section keep writing&lt;/span>
        &lt;span class="hljs-keyword">if&lt;/span> ($n + &lt;span class="hljs-number">1&lt;/span> &lt; count($markerdata)) &lt;span class="hljs-comment">//make sure to add newline to appropriate lines&lt;/span>
          fwrite($f, &lt;span class="hljs-string">"{$markerline}\n"&lt;/span>);
        &lt;span class="hljs-keyword">else&lt;/span>
          fwrite($f, &lt;span class="hljs-string">"{$markerline}"&lt;/span>);
      }

      &lt;span class="hljs-keyword">if&lt;/span> (strpos($markerline, &lt;span class="hljs-string">'# END '&lt;/span> . $marker) !== &lt;span class="hljs-keyword">false&lt;/span>) { &lt;span class="hljs-comment">//see if we're at the end of the section&lt;/span>
        $state = &lt;span class="hljs-keyword">true&lt;/span>;
      }
    }
  }

  &lt;span class="hljs-keyword">return&lt;/span> &lt;span class="hljs-keyword">true&lt;/span>;

}</code></span><small class="shcb-language" id="shcb-language-43"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">PHP</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">php</span><span class="shcb-language__paren">)</span></small></pre>

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