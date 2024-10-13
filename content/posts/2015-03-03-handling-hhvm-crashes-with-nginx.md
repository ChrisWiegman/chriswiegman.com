---
title: Handling HHVM Crashes with NGINX
date: 2015-03-03T05:00:00+00:00
categories:
  - Technical
tags:
  - NGINX
---

If you’re looking to speed up your WordPress (or any PHP) website <a title="HHVM" href="http://hhvm.com" target="_blank" rel="noopener noreferrer">HHVM</a> is one of the best things you can implement.
HHVM is a PHP engine, designed by Facebook, that compiles the PHP on your site into a C++ binary allowing it to run at a deeper level than traditional PHP engines. This can offer quite a performance boost in areas where full-page caching isn’t practical or desirable.

While the performance boost HHVM can provide is great it does have some drawbacks particularly in code compatibility. Simply put it can’t run all PHP code which can get you into problems really quickly. Fortunately there is a solution though. Instead of pushing everything to HHVM and letting your users see any failures we can fallback to a traditional PHP engine should something not work with HHVM or should your HHVM server become unavailable for any reason.

In my example we’ll use php_fpm as a fallback in NGINX should a 502 (Bad Gateway) error occur. I’m assuming you’ve already installed HHVM (if you haven’t I’ll be writing a tutorial on it soon).

First, make sure you have already installed php_fpm on your machine.

Next, let’s setup HHVM to run normally. There are <a title="Getting WordPress running on HHVM" href="http://hhvm.com/blog/3095/getting-wordpress-running-on-hhvm" target="_blank" rel="noopener noreferrer">plenty of tutorials</a> available for this step but really it comes down to telling NGINX to use HHVM to process PHP. The following in your site configuration should handle it.

``` apache
location ~ .(hh|php)$ {
    try_files $uri /index.php;
    fastcgi_split_path_info ^(.+.php)(/.+)$;
    include fastcgi_params;
    fastcgi_index index.php;
    fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
    fastcgi_pass 127.0.0.1:9000;
}
```

This is pretty simple. It takes any PHP file and passes its processing off to HHVM. The catch here is that if HHVM fails your users will see the error and we can’t have that. To solve it we’ll first set up php_fpm as a fallback in our NGINX site configuration.

``` apache
location @fallback {
    try_files $uri /index.php;
    fastcgi_split_path_info ^(.+.php)(/.+)$;
    include fastcgi_params;
    fastcgi_index index.php;
    fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
    fastcgi_pass unix:/var/run/my_fpm_process.sock;
}
```

Note the location identity here. Instead of using all .php files or some other regex pattern we’ve instead named it _@fallback. _This is the key as this is what we can use to call it somewhere else, namely in our HHVM block. To do this we’re next going to modify that block to pass off the request back to _@fallback_ in the event HHVM fails (normally this would be indicated by the return of a 502 error from the HHVM processor). Here’s what that looks like. Notice this is the same block we used before. We’ve simply added two lines to it to pass it off as needed.

``` apache
location ~ .(hh|php)$ {
    proxy_intercept_errors on;
    error_page 502 = @fallback;
    try_files $uri /index.php;
    fastcgi_split_path_info ^(.+.php)(/.+)$;
    include fastcgi_params;
    fastcgi_index index.php;
    fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
    fastcgi_pass 127.0.0.1:9000;
}
```

In the above code we tell NGINX to intercept any errors returned and, in the event of a 502 error, we try it all again with php_fpm. Here’s it all together.

``` apache {linenos=table}
location ~ .(hh|php)$ {
    proxy_intercept_errors on;
    error_page 502 = @fallback;
    try_files $uri /index.php;
    fastcgi_split_path_info ^(.+.php)(/.+)$;
    include fastcgi_params;
    fastcgi_index index.php;
    fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
    fastcgi_pass 127.0.0.1:9000;
}

location @fallback {
    try_files $uri /index.php;
    fastcgi_split_path_info ^(.+.php)(/.+)$;
    include fastcgi_params;
    fastcgi_index index.php;
    fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
    fastcgi_pass unix:/var/run/my_fpm_process.sock;
}
```

In the end, just by modifying your existing implementation a little bit, you should have a configuration that will speed up your site by utilizing HHVM where applicable yet will also fallback to php_fpm should any problems arise.