---
title: Handling HHVM Crashes with NGINX
type: post
date: 2015-03-03T05:00:00+00:00
url: /2015/03/handling-hhvm-crashes-with-nginx/
categories:
  - Technical
tags:
  - NGINX

---
If you’re looking to speed up your WordPress (or any PHP) website <a title="HHVM" href="http://hhvm.com" target="_blank" rel="noopener noreferrer">HHVM</a> is one of the best things you can implement.
HHVM is a PHP engine, designed by Facebook, that compiles the PHP on your site into a C++ binary allowing it to run at a deeper level than traditional PHP engines.&nbsp;This&nbsp;can offer quite a performance boost in areas where full-page caching isn’t practical or desirable.

While the performance boost HHVM can provide is great it does have some drawbacks particularly in code compatibility. Simply put it can’t run all PHP code which can get you into problems really quickly. Fortunately there is a solution though. Instead of pushing everything to HHVM and letting your users see any failures we can fallback to a traditional PHP engine should something not work with HHVM or should your HHVM server become unavailable for any reason.

In my example we’ll use php_fpm as a fallback in NGINX should a 502 (Bad Gateway) error occur. I’m assuming you’ve already installed HHVM (if you haven’t I’ll be writing a tutorial on it soon).

First,&nbsp;make sure you have already installed php_fpm on your machine.

Next, let’s setup HHVM to run normally. There are <a title="Getting WordPress running on HHVM" href="http://hhvm.com/blog/3095/getting-wordpress-running-on-hhvm" target="_blank" rel="noopener noreferrer">plenty of tutorials</a> available for this step but really it comes down to telling NGINX to use HHVM to process PHP. The following in your site configuration should handle it.

<pre class="wp-block-code" aria-describedby="shcb-language-56" data-shcb-language-name="PHP" data-shcb-language-slug="php"><span><code class="hljs language-php">location ~ .(hh|php)$ {
    try_files $uri /index.php;
    fastcgi_split_path_info ^(.+.php)(/.+)$;
    &lt;span class="hljs-keyword">include&lt;/span> fastcgi_params;
    fastcgi_index index.php;
    fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
    fastcgi_pass &lt;span class="hljs-number">127.0&lt;/span>&lt;span class="hljs-number">.0&lt;/span>&lt;span class="hljs-number">.1&lt;/span>:&lt;span class="hljs-number">9000&lt;/span>;
}</code></span><small class="shcb-language" id="shcb-language-56"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">PHP</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">php</span><span class="shcb-language__paren">)</span></small></pre>

This is pretty simple. It takes any PHP file and passes its processing off to HHVM. The catch here is that if HHVM fails your users will see the error and we can’t have that. To solve it we’ll first set up php_fpm as a fallback in our NGINX site configuration.

<pre class="wp-block-code" aria-describedby="shcb-language-57" data-shcb-language-name="PHP" data-shcb-language-slug="php"><span><code class="hljs language-php">location @fallback {
    try_files $uri /index.php;
    fastcgi_split_path_info ^(.+.php)(/.+)$;
    &lt;span class="hljs-keyword">include&lt;/span> fastcgi_params;
    fastcgi_index index.php;
    fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
    fastcgi_pass unix:/&lt;span class="hljs-keyword">var&lt;/span>/run/my_fpm_process.sock;
}</code></span><small class="shcb-language" id="shcb-language-57"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">PHP</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">php</span><span class="shcb-language__paren">)</span></small></pre>

Note the location identity here. Instead of using all .php files or some other regex pattern&nbsp;we’ve instead named it _@fallback.&nbsp;_This is the key as this is what we can use to call it somewhere else, namely in our HHVM block. To do this we’re next going to modify that block to pass off the request back to&nbsp;_@fallback_ in the event HHVM fails (normally this would be indicated by the return of a 502 error from the HHVM processor). Here’s what that looks like. Notice this is the same block we used before. We’ve simply added two lines to it to pass it off as needed.

<pre class="wp-block-code" aria-describedby="shcb-language-58" data-shcb-language-name="PHP" data-shcb-language-slug="php"><span><code class="hljs language-php">location ~ .(hh|php)$ {
    proxy_intercept_errors on;
    error_page &lt;span class="hljs-number">502&lt;/span> = @fallback;
    try_files $uri /index.php;
    fastcgi_split_path_info ^(.+.php)(/.+)$;
    &lt;span class="hljs-keyword">include&lt;/span> fastcgi_params;
    fastcgi_index index.php;
    fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
    fastcgi_pass &lt;span class="hljs-number">127.0&lt;/span>&lt;span class="hljs-number">.0&lt;/span>&lt;span class="hljs-number">.1&lt;/span>:&lt;span class="hljs-number">9000&lt;/span>;
}</code></span><small class="shcb-language" id="shcb-language-58"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">PHP</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">php</span><span class="shcb-language__paren">)</span></small></pre>

In the above code we tell NGINX to intercept any errors returned and, in the event of a 502 error, we try it all again with php_fpm. Here’s it all together.

<pre class="wp-block-code" aria-describedby="shcb-language-59" data-shcb-language-name="PHP" data-shcb-language-slug="php"><span><code class="hljs language-php shcb-code-table shcb-line-numbers">&lt;span class='shcb-loc'>&lt;span>location ~ .(hh|php)$ {
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>    proxy_intercept_errors on;
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>    error_page &lt;span class="hljs-number">502&lt;/span> = @fallback;
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>    try_files $uri /index.php;
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>    fastcgi_split_path_info ^(.+.php)(/.+)$;
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>    &lt;span class="hljs-keyword">include&lt;/span> fastcgi_params;
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>    fastcgi_index index.php;
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>    fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>    fastcgi_pass &lt;span class="hljs-number">127.0&lt;/span>&lt;span class="hljs-number">.0&lt;/span>&lt;span class="hljs-number">.1&lt;/span>:&lt;span class="hljs-number">9000&lt;/span>;
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>}
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>location @fallback {
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>    try_files $uri /index.php;
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>    fastcgi_split_path_info ^(.+.php)(/.+)$;
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>    &lt;span class="hljs-keyword">include&lt;/span> fastcgi_params;
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>    fastcgi_index index.php;
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>    fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>    fastcgi_pass unix:/&lt;span class="hljs-keyword">var&lt;/span>/run/my_fpm_process.sock;
&lt;/span>&lt;/span>&lt;span class='shcb-loc'>&lt;span>}
&lt;/span>&lt;/span></code></span><small class="shcb-language" id="shcb-language-59"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">PHP</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">php</span><span class="shcb-language__paren">)</span></small></pre>

In the end, just by modifying your existing implementation a little bit, you should have a configuration that will speed up your site by utilizing HHVM where applicable yet will also fallback to php_fpm should any problems arise.