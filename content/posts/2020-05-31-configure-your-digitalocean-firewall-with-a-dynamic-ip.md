---
title: Configure Your DigitalOcean Firewall With a Dynamic IP
type: post
date: 2020-05-31T15:09:00+00:00
url: /2020/05/configure-your-digitalocean-firewall-with-a-dynamic-ip/
featured_image: /images/2020/08/configure-your-digital-ocean-firewall-with-a-dynamic-ip.png
categories:
  - Technical
tags:
  - DigitalOcean
  - DNS
  - Dynamic IP
  - Security
---

**Update, 26 December 2020:**

_My friend Mike sent me an update to the script last week. This update works better than mine in that you don't need a separate firewall group for your dynamic entries. It will truly update any entry rather than overwrite the whole group. You can find Mike's write-up at <https://splateric.medium.com/using-dynamic-dns-with-digital-ocean-firewalls-d7cbd405a047>. I'll be leaving my own solution in this post but I recommend looking at his first._

Hosting on DigitalOcean brings a lot of benefits from scaling to storage and even firewall configuration. This post will focus on the firewall, namely a common issue on the personal projects I use DigitalOcean for, configuring a DigitalOcean firewall with a dynamic IP address. Whether you’re configuring your server for home, work or something else limiting services such as SSH and others to a known IP will go a long way to making sure your server stays safe and secure. Here’s how to do it.

## Step 1: Setup a domain with a dynamic IP Address

To get started you’ll need a domain that you can assign to your where you have a dynamic IP address. A subdomain off any domain you own will be fine for this, no need to go out an buy something new.

In order to make it dynamic, there are a lot of ways you can do it. Personally I use [DNSMadeEasy][1] for all my personal domains and [set up a dynamic domain with them][2]. Then I use my router to update the domain every minute. Note that, as every router and DNS provider is different, you’ll want to consult with your providers to get through this step, if you haven’t already.

## Step 2: Setup a “static” firewall for your domain

Next, login to your DigitalOcean control panel and go to the [firewall configuration][3].

Add a firewall with all the outbound and inbound ports you’ll need that won’t be changing. We’ll be combining it with a second firewall that will contain only the inbound rules for your dynamic IP address so here is everything that won’t apply to that IP.

No need to assign it to your Droplet, yet. We’ll do that at the end when all the rules are in place.

## Step 3: Setup an empty firewall on DigitalOcean

Next create another new firewall and name it something you’ll recognize later. In this case I call mine “Home.” You don’t need to add any rules to it. Instead we’ll be overwriting all the inbound rules it contains every time we update it.

## Step 4: Install and log into doctl

On your server or another computer install **doctl**. To do so, [follow the installation instructions for your system][4].

Once installed, run `doctl` and follow the instructions to login with your DigitalOcean API key.

## Step 5: Save a script to update your firewall

On your server or another computer save the following to `/usr/local/bin/update-do-firewall.sh`

``` bash
#!/bin/bash

start=`date +"%Y-%m-%d %T"`
add_rule() {
  local ip=$1
  doctl compute firewall update <my-firewall-id> --name Home --inbound-rules "protocol:tcp,ports:80,address:${ip} protocol:tcp,ports:22,address:${ip} protocol:tcp,ports:443,address:${ip}"
  echo "${start} Added rules for ${ip}"
}

host=my.dynamic.host
ip=$(dig +short $host | tail -n 1)
if [ -z ${ip} ]; then
    echo "${start} Failed to resolve the ip address of ${host}." 1>&2
    exit 1
fi
add_rule $ip
```

Make sure to replace the hostname with your dynamic hostname. You can get the firewall id by copying it before the Firewall name after running the following:

``` bash
doctl compute firewall list
```

Notice how the script above opens ports 80, 443 and 22 to our IP address. Following the format of that line, add or remove the ports you need for your configuration.

Now make sure the script is executable.

``` bash
chmod +x /usr/local/bin/update-do-firewall.sh
```

Finally, test it by executing your script and refreshing the firewall’s configuration in the DigitalOcean control panel. You should see all the ports and the correct IP. For the above example, this means you’ll see entries for ports 80, 443 and 22.

## Step 6: Schedule the script to update regularly.

The final part is to schedule the script to update regularly in a cron task.

Run `crontab -e` and add the following line:

``` bash
*/5 * * * * /usr/local/bin/update-do-firewall.sh
```

Save your work and your IP address should now update every 5 minutes. Note your API access is rate limited. As of this writing, and for my account, I’m allowed 5,000 actions per day. While you can increase the frequency of updates above, you’ll want to make sure that you don’t go over your rate limit. You can see yours by running `doctl account ratelimit`.

## Step 7: Add the firewalls to your droplet

Finally, go back to your DigitalOcean control panel and assign both firewalls, the dynamic and the static firewalls we created above, to your droplet.

You should now have a working DigitalOcean firewall with your dynamic IP address.

_Have a question? Find an error in my work? Please [contact me][5] with any comments or suggestions._

 [1]: https://dnsmadeeasy.com/
 [2]: https://dnsmadeeasy.com/technology/dynamic-dns/
 [3]: https://cloud.digitalocean.com/networking/firewalls
 [4]: https://github.com/digitalocean/doctl
 [5]: mailto:contact@chriswiegman.com