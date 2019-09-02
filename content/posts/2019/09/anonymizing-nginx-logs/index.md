---
title: "Anonymizing Nginx Logs"
date: 2019-09-02T15:26:57-04:00
description: "How to protect your users' privacy by anonymizing Nginx log files."
draft: false
images: ["/images/anonymize-nginx-logs.jpg"]
tags: ["Nginx","privacy","GDPR","development"]
---

![How to anonymize Nginx logs](/images/anonymize-nginx-logs.jpg)

Just because your webserver normally logs the full IP of your visitors doesn't mean you need to keep it. If you use Nginx, like this site does, it's trivially easy to protect your users privacy and keep the logging data you need for determining problems. To do this, all you need is two things: anonymize the IP addresses and delete the logs when they're no longer useful. Here's how I've done both on this site:

## Anonymizing the IP address

Of course, the best way to protect privacy in a log file is simply to not keep a log file in the first place. The catch is, that's not always a viable solution. In my case, for example, I would still like to have an idea of what content works as well as to find problems when they occur. What I don't need to know, however, is who is accessing that content. By default, Nginx logs keep the full IP address of all users which is, in some countries, considered personally identifiable information. As I don't need this, I've anonymized all IP addresses in the logs so that the last octect (the last number after the third dot in the address) is always set to zero in the logs. In theory, this still allows me to see the part of the world users are coming from (should I ever need to look) without telling me who, specifically, is viewing the content. Here's how I did it:

1. Edit nginx.conf

```sh
sudo nano /etc/nginx/nginx.conf
```

2. In the _server_ section, add the following log format:

```conf
map $remote_addr $remote_addr_anon {
    ~(?P<ip>\d+\.\d+\.\d+)\.    $ip.0;
    ~(?P<ip>[^:]+:[^:]+):       $ip::;
    127.0.0.1                   $remote_addr;
    ::1                         $remote_addr;
    default                     0.0.0.0;
}

log_format  main  '$remote_addr_anon - $remote_user [$time_local] "$request" '
    '$status $body_bytes_sent "$http_referer" '
    '"$http_user_agent" "$http_x_forwarded_for"';

access_log /var/log/nginx/access.log main;
error_log /dev/null crit;
```

The above code specifies a "main" log type and assigns it to the default error log. Note that if you specify a specific log in your virtual host you will need to add _main_ to the end of the access_log line the the virtual host config as I did above for the default log. Note, this also deletes the error_log entirely as it isn't possible to anomymize its IP addresses.

3. Restart nginx

```sh
sudo service nginx restart
```

Check your logs. All access log items should now be anonymized. For example, if your current IP address is 172.13.14.15 your access log would show 172.13.14.0.

## Deleting old logs

Of course, anonymizing the logs are only part of the equation. We should also delete the logs after they're not longer useful. In my case, this means rotating the logs daily and deleting the old log during rotation. To do this, I'm assuming  you're using a newer Ubuntu server (this has been tested in Ubuntu 18.04).

1. Edit the Nginx logrotate config

```sh
sudo nano /etc/logrotate.d/nginx
```

2. Modify the logrotate configuration to the following

```conf
/var/log/nginx/*.log {
    daily
    missingok
    rotate 0
    notifempty
    create 0640 www-data adm
    sharedscripts
    prerotate
        if [ -d /etc/logrotate.d/httpd-prerotate ]; then \
                run-parts /etc/logrotate.d/httpd-prerotate; \
        fi \
    endscript
    postrotate
        invoke-rc.d nginx rotate >/dev/null 2>&1
    endscript
}
```

The above code will delete all logs after 24 hours. Taken together, your Nginx server won't keep any information of your users that you don't absolutely need.