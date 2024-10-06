---
title: Getting the Correct IP Address With PHP
type: post
date: 2014-05-02T04:00:00+00:00
url: /2014/05/getting-the-correct-ip-address-with-php/
categories:
  - Technical
tags:
  - PHP
  - Web Development

---
If you do much work on a WordPress site or other PHP app sooner or later you’re going to need to get the end user’s IP address. It used to be easy. We used to be able to just get _$\_SERVER[‘REMOTE\_ADDR’]_ and go on our way.

Today it isn’t so easy. For both performance and security many web servers put some sort of proxy in front of the web server which means that if you’re using a load balancer or <a href="https://www.cloudflare.com/" target="_blank" rel="noreferrer noopener">CloudFlare</a> or <a href="https://www.varnish-cache.org/" target="_blank" rel="noreferrer noopener">Varnish</a>&nbsp;_$\_SERVER[‘REMOTE\_ADDR’]&nbsp;_will only return the IP address of the proxy, not the IP address of the user trying to access your site. This means that as far your application is concerned the only user it will ever see is the proxy service itself.

Fortunately there is a way around this using the <a href="http://en.wikipedia.org/wiki/X-Forwarded-For" target="_blank" rel="noreferrer noopener">X-Forwarded-For</a> header. This is a server header set by the proxy to pass through the IP address of the end user where necessary. This means that while REMOTE_ADDR still exists the X-Forwarded-For header is the one that is actually tied to the user so we need to use it instead. Here’s some code to get you there:

<pre class="wp-block-code" aria-describedby="shcb-language-54" data-shcb-language-name="PHP" data-shcb-language-slug="php"><span><code class="hljs language-php">&lt;span class="hljs-function">&lt;span class="hljs-keyword">function&lt;/span> &lt;span class="hljs-title">get_ip&lt;/span>&lt;span class="hljs-params">()&lt;/span> &lt;/span>{

  &lt;span class="hljs-comment">//Just get the headers if we can or else use the SERVER global.&lt;/span>
  &lt;span class="hljs-keyword">if&lt;/span> ( function_exists( &lt;span class="hljs-string">'apache_request_headers'&lt;/span> ) ) {

    $headers = apache_request_headers();

  } &lt;span class="hljs-keyword">else&lt;/span> {

    $headers = $_SERVER;

  }

  &lt;span class="hljs-comment">//Get the forwarded IP if it exists.&lt;/span>
  &lt;span class="hljs-keyword">if&lt;/span> ( array_key_exists( &lt;span class="hljs-string">'X-Forwarded-For'&lt;/span>, $headers ) && filter_var( $headers&#91;&lt;span class="hljs-string">'X-Forwarded-For'&lt;/span>], FILTER_VALIDATE_IP, FILTER_FLAG_IPV4 ) ) {

    $the_ip = $headers&#91;&lt;span class="hljs-string">'X-Forwarded-For'&lt;/span>];

  } &lt;span class="hljs-keyword">elseif&lt;/span> ( array_key_exists( &lt;span class="hljs-string">'HTTP_X_FORWARDED_FOR'&lt;/span>, $headers ) && filter_var( $headers&#91;&lt;span class="hljs-string">'HTTP_X_FORWARDED_FOR'&lt;/span>], FILTER_VALIDATE_IP, FILTER_FLAG_IPV4 ) ) {

    $the_ip = $headers&#91;&lt;span class="hljs-string">'HTTP_X_FORWARDED_FOR'&lt;/span>];

  } &lt;span class="hljs-keyword">else&lt;/span> {

    $the_ip = filter_var( $_SERVER&#91;&lt;span class="hljs-string">'REMOTE_ADDR'&lt;/span>], FILTER_VALIDATE_IP, FILTER_FLAG_IPV4 );

  }

  &lt;span class="hljs-keyword">return&lt;/span> $the_ip;

}</code></span><small class="shcb-language" id="shcb-language-54"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">PHP</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">php</span><span class="shcb-language__paren">)</span></small></pre>

So let’s break it down.

<ol class="wp-block-list">
  <li>
    We start by creating a function called&nbsp;<em>get_ip()</em> which we can use and re-use to get the user’s IP address.
  </li>
  <li>
    After we create the function we get&nbsp;the server headers using PHP’s <a href="http://us3.php.net/manual/en/function.apache-request-headers.php" target="_blank" rel="noreferrer noopener"><em>apache_request_headers()</em></a> function if it exists or just falling back to <a href="http://www.php.net/manual/en/reserved.variables.server.php" target="_blank" rel="noreferrer noopener"><em>$_SERVER</em></a> otherwise.
  </li>
  <li>
    Next we look for the presence of&nbsp;<em>X-Forwarded-For&nbsp;</em>or&nbsp;<em>HTTP_X_FORWARDED_FOR </em>(<a href="http://stackoverflow.com/questions/3834083/http-headers-what-is-the-difference-between-x-forwarded-for-x-forwarded-for-a" target="_blank" rel="noreferrer noopener">they’re actually interchangeable</a>)&nbsp;in order to use one of them if present.
  </li>
  <li>
    Finally we just&nbsp;<em>REMOTE_ADDR</em> if neither of the others are available.
  </li>
  <li>
    Note that at each step we pass the header through PHP’s&nbsp;<a href="http://www.php.net/manual/en/function.filter-var.php" target="_blank" rel="noreferrer noopener"><em>filter_var()</em></a> function to make sure the value is a valid IPv4 address.
  </li>
  <li>
    Finally we return the IP we attained.
  </li>
</ol>

Pretty simple huh? There is one catch though. If the proxy doesn’t set the header your function won’t be able retrieve it. You’ll need to check with your host to make sure the header is being set correctly.