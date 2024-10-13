---
title: Getting the Correct IP Address With PHP
date: 2014-05-02T04:00:00+00:00
categories:
  - Technical
tags:
  - PHP
  - Web Development
---

If you do much work on a WordPress site or other PHP app sooner or later you’re going to need to get the end user’s IP address. It used to be easy. We used to be able to just get _$\_SERVER[‘REMOTE\_ADDR’]_ and go on our way.

Today it isn’t so easy. For both performance and security many web servers put some sort of proxy in front of the web server which means that if you’re using a load balancer or [CloudFlare](https://www.cloudflare.com/) or [Varnish](https://www.varnish-cache.org/) _$\_SERVER[‘REMOTE\_ADDR’] _will only return the IP address of the proxy, not the IP address of the user trying to access your site. This means that as far your application is concerned the only user it will ever see is the proxy service itself.

Fortunately there is a way around this using the [X-Forwarded-For](http://en.wikipedia.org/wiki/X-Forwarded-For) header. This is a server header set by the proxy to pass through the IP address of the end user where necessary. This means that while REMOTE_ADDR still exists the X-Forwarded-For header is the one that is actually tied to the user so we need to use it instead. Here’s some code to get you there:

``` php
function get_ip() {
  //Just get the headers if we can or else use the SERVER global.
  if ( function_exists( 'apache_request_headers' ) ) {
    $headers = apache_request_headers();
  } else {
    $headers = $_SERVER;
  }
  //Get the forwarded IP if it exists.
  if ( array_key_exists( 'X-Forwarded-For', $headers ) && filter_var( $headers['X-Forwarded-For'], FILTER_VALIDATE_IP, FILTER_FLAG_IPV4 ) ) {
    $the_ip = $headers['X-Forwarded-For'];
  } elseif ( array_key_exists( 'HTTP_X_FORWARDED_FOR', $headers ) && filter_var( $headers['HTTP_X_FORWARDED_FOR'], FILTER_VALIDATE_IP, FILTER_FLAG_IPV4 ) ) {
    $the_ip = $headers['HTTP_X_FORWARDED_FOR'];
  } else {
    $the_ip = filter_var( $_SERVER['REMOTE_ADDR'], FILTER_VALIDATE_IP, FILTER_FLAG_IPV4 );
  }
  return $the_ip;
}
```

So let’s break it down.

1. We start by creating a function called *get_ip()* which we can use and re-use to get the user’s IP address.
2. After we create the function we get the server headers using PHP’s [*apache_request_headers()*](http://us3.php.net/manual/en/function.apache-request-headers.php) function if it exists or just falling back to [*$_SERVER*](http://www.php.net/manual/en/reserved.variables.server.php) otherwise.
3. Next we look for the presence of *X-Forwarded-For *or *HTTP_X_FORWARDED_FOR *([they’re actually interchangeable](http://stackoverflow.com/questions/3834083/http-headers-what-is-the-difference-between-x-forwarded-for-x-forwarded-for-a)) in order to use one of them if present.
4. Finally we just *REMOTE_ADDR* if neither of the others are available.
5. Note that at each step we pass the header through PHP’s [*filter_var()*](http://www.php.net/manual/en/function.filter-var.php) function to make sure the value is a valid IPv4 address.
6. Finally we return the IP we attained.

Pretty simple huh? There is one catch though. If the proxy doesn’t set the header your function won’t be able retrieve it. You’ll need to check with your host to make sure the header is being set correctly.