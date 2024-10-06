---
title: FastCGI vs suPHP vs CGI vs mod_php (DSO)
type: post
date: 2011-10-17T04:00:00+00:00
url: /2011/10/fastcgi-vs-suphp-vs-cgi-vs-mod_php-dso/
categories:
  - Technical
tags:
  - Web Development

---
<div class="wp-block-image">
  <figure class="alignright"><img decoding="async" src="/images/2011/10/PHP-Logo-225x118-1.png" alt="PHP Logo" class="wp-image-2228" title="PHP Logo" /></figure>
</div>

One question I see come up often for users setting up their own web servers involves how they run <a title="PHP Homepage" href="http://php.net" target="_blank" rel="noopener noreferrer">PHP</a>. Nearly everyone I know who runs their own server has questions about this that usually fall in one of two areas. First, they have installed <a title="WordPress.org" href="http://wordpress.org" target="_blank" rel="noopener noreferrer">WordPress</a>, <a title="Drupal" href="http://www.drupal.org" target="_blank" rel="noopener noreferrer">Drupal</a>, or another CMS and can’t get uploads to work within the software or, second, they are interested in making their web server more secure. The answer to both of these involves how your web server handles PHP which is known as the PHP handler.

The choices in how you run PHP may seem complicated, but they don’t have to be. Quite simply your needs will determine which you use. Here’s some information on your options and where they can best be used.

### What are PHP handlers? {#h-what-are-php-handlers.wp-block-heading}

Remember that on their own web servers are designed to send static resources including HTML, images, etc to users. They are not designed to interpret any code themselves.&nbsp;PHP handlers are the programs that interpret the PHP code in your web application and process it to be sent as HTML (or another static format) by your web server. Out of the box none of the major web servers can handle PHP by themselves so they need another program to do it for them. This program, known as a PHP handler takes all of your PHP code and generates the output which is then sent to the web server which forwards it on to the user.

Currently there are 4 major PHP handlers available on <a title="Apache HTTP Server" href="https://httpd.apache.org/" target="_blank" rel="noopener noreferrer">Apache</a>. These include mod_php (AKA DSO), CGI, FastCGI, and suPHP. If you’re using another web server your options may be different (for example,&nbsp;<a title="nginx" href="http://nginx.org/" target="_blank" rel="noopener noreferrer">nginx</a> requires FastCGI). Each of these handle memory, CPU, and file permissions in a different way which can then manifest itself in your web app in everything from performance to important features of your application. Here’s a breakdown of each of the options

### mod_php (DSO) {#h-mod-php-dso.wp-block-heading}

DSO (which is short for Dynamic Shared Object)&nbsp;or mod\_php is the oldest and, some would say, the fastest PHP handler available. It essentially makes PHP a part of Apache by having the Apache server interpret the PHP code itself through use of an Apache module known as mod\_php. This is the default handler typically installed when installing a web server package on your server.

On the plus side mod_php is fast, in fact very fast as it runs directly in the same process as your Apache server. Running it together with Apache also means that it has a very low CPU and memory requirement which may be beneficial in situations where computing resources are limited.

The major drawback of mod_php is that it runs as part of Apache which means that it runs as the same user that your Apache process runs as (if you’re on <a title="Ubuntu" href="http://www.ubuntu.com" target="_blank" rel="noopener noreferrer">Ubuntu</a> this would www-data). This means that all work on files will be done as the Apache user which therefore must have permissions to all of your files. In most cases when you upload files to your server you do so as a different user that has login rights to the machine. This means that all the files and folders you upload are “owned” by the user that you used to upload them. If you don’t give permissions to them to the Apache user the web server will not be able to read or write to the files, but if you do give access to them to the Apache user and your machine is compromised by an attacker that attacker could have access to much more than just the files in the website they used to get in to your system potentially creating&nbsp;problems for every site hosted on your machine.

The file permission issue is also the biggest source of headache for users of content management systems such as WordPress or Drupal. Because the files of your site are often owned by an account other than that which they are running as, users of mod_php are often unable to upload or modify files from within their CMS without substantial work arounds. Not only could this prevent an administrator from adding pictures and other media to their site easily, but it could also lead to security patches not being installed due to the added complexity of doing so which causes another security hole in your site.

### CGI {#h-cgi.wp-block-heading}

CGI is the fallback in most servers when mod_php is not available. Instead of running the PHP code within Apache it is now run as it’s own <a title="CGI on Wikipedia" href="http://en.wikipedia.org/wiki/Common_Gateway_Interface" target="_blank" rel="noopener noreferrer">CGI process</a>, that is, in a program outside of your Apache server.

By default CGI will be called by the Apache server meaning that it will run as the Apache user with all the problems of doing so that mod\_php encountered. Unlike mod\_php however CGI has the ability to see the PHP as another user (presumably the user that owns the files) using another Apache module known as suexec.

For performance CGI is not nearly as fast as mod_php and requires more CPU time. It is however still soft on memory usage which may be a benefit to some users.

### suPHP {#h-suphp.wp-block-heading}

suPHP runs PHP outside of the Apache script as CGI. Unlike CGI however it will run the scripts as a user other than the Apache user (presumably the user that owns the files). This means that if you are using a CMS you will be able to upload files from within your web application using suPHP. In addition, because your PHP is being run as a different user any vulnerability in your site can be restricted to only the files of your website thereby providing substantial security benefits particularly on servers that run multiple websites.

The cost of the upload ability and security of suPHP is not cheap. suPHP is slow and requires quite a bit of CPU to process all the files. In addition, as it must process the file each and every time it is called, suPHP cannot use any OPCode caching such as APC or <a title="memcached" href="http://memcached.org/" target="_blank" rel="noopener noreferrer">memcached</a> resulting in even higher CPU usage by your application. If you are running on a low-end VPS or other server with an application such as WordPress this configuration can easily push you passed any CPU limits you might have whenever traffic starts to climb.

### FastCGI {#h-fastcgi.wp-block-heading}

FastCGI is the last major PHP handler. It offers the security benefits of suPHP by executing files as the owner of the file. Unlike suPHP however it keeps open a session for the file when the processing is done resulting in significant memory use but also allowing for the use of OPCode caching such as APC or memcached. If you do have the memory for it however FastCGI is arguably the fastest handler even in comparison with mod_php (See <a href="/2010/06/running-apachefastcgisuexec-in-ubuntu-10-04-without-var-www/" target="_blank" rel="noreferrer noopener">Running Apache+FastCGI+suexec in Ubuntu without /var/www</a> for more help in getting started with FastCGI).

### So which is best? {#h-so-which-is-best.wp-block-heading}

If you have the memory for it there really isn’t any reason not to run FastCGI in this day and age. In cases where memory is restricted however the choice may come down to security vs performance. Here’s a quick breakdown to help you decide.<figure class="wp-block-table">

| Attribute               | mod_php | CGI  | suPHP | FastCGI |
| ----------------------- | ------- | ---- | ----- | ------- |
| **Memory usage**        | Low     | Low  | Low   | High    |
| **CPU usage**           | Low     | High | High  | Low     |
| **Security**            | Low     | Low  | High  | High    |
| **Run as file owner**   | No      | No   | Yes   | Yes     |
| **Overall Performance** | Fast    | Slow | Slow  | Fast    |</figure>

Of course another consideration might be ease of installation however with the multitude of tutorials available on the web help should be no further away than a quick Google search on the topic.