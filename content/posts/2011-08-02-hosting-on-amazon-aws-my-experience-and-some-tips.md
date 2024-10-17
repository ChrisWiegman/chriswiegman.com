---
title: Hosting on Amazon AWS – My Experience and Some Tips
date: 2011-08-02T04:00:00+00:00
draft: false
categories:
  - Technical
tags:
  - Web Development
---

![Amazon Web Services Logo](/images/2011/08/aws-logo-350x129-1.png)

Those of you who are familiar with this site when it was ChrisWiegman.com know that hosting has been a real issue for me for quite some time. In fact, the launch of Bit51.com marks my 4th web host in the last 2 years. While the point of this post is not to rant about past experience, it is sufficient to say that this site has thoroughly outgrown [shared hosting](http://en.wikipedia.org/wiki/Shared_web_hosting_service "Shared hosting on Wikipedia.").

Beginning in April of this year I started out on a mission to figure out what host would work best for me with a few criteria. First, the price had to be reasonable. I don’t mind paying for a good host, but I want this site to still be able to pay for itself. Second, I will not sign a long-term contract. Taking into consideration the length of time I had left on my account when abandoning previous hosts added up to almost $50/month for when I was with them (I blame this on too much shopping at Sam’s Club and expecting the philosophy to hold up with web hosting). Third, I wanted full control over my server. I manage the web servers for my full-time job and wanted to be able to transfer what I’ve learned to this site. Finally, the host must be reliable. I will no longer tolerate hours of downtime or emails in the middle of the night saying they suspended my account as they didn’t like my traffic spike.

After a lot of research and questions I decided to go with [Amazon Web Services (AWS)](http://aws.amazon.com/ "Amazon Web Services"). To be specific I’m using a [Micro instance](http://aws.amazon.com/about-aws/whats-new/2010/09/09/announcing-micro-instances-for-amazon-ec2/ "Amazon Micro Instance") of [Ubuntu Server](https://help.ubuntu.com/community/EC2StartersGuide "Ubuntu EC2 Starter Guide") that I have configured in line with similar projects. It is cheaper the first year than shared hosting ([it’s free for one year](http://aws.amazon.com/free/ "Amazon AWS free tier")) and there is no minimum purchase. Even with extra costs and setting up my account in June my entire bill last month was $0.48. When the year expires it will go up somewhere around $16/month which will still keep it in line with comparable VPS hosts.

In the process of setting up my server I’ve learned quite a few things about AWS. In all the experience has been positive, but there are a few areas in which I wish I had known more to start.

### Don’t use an existing account to start a new AWS service

The free tier for Amazon AWS applies only to new accounts. If you try to use an old account created before the service was introduced last fall you will have to pay full price from day one. As an alternative sign up for a new account and you will be able to reset the clock.

### You are responsible for your own backups

For that matter, you’re responsible for everything. Make snapshots of your EBS volume and make them often! There’s nothing like starting from scratch when you realized a stupid mistake as completely locked you out of your entire server.

### Optimization is even more important

Install a good cache system like [w3 Total Cache](http://wordpress.org/extend/plugins/w3-total-cache/ "W3 Total Cache") and make sure your service is appropriately configured with APC and other CPU saving technologies. The biggest weakness of AWS micro instances is that you can easily max out the CPU under a heavy load, but with enough prep work you will never hit that point.

### Do your homework

Even as an experienced LAMP administrator there were aspects of AWS that threw me for a loop. Make sure you set up your server right the first time. While Amazon’s API paradigm is excellent, the uniformity of those APIs can lead to some interesting security vulnerabilities if not addressed appropriately.

Overall my experience with AWS has been excellent and I am quite impressed with the results. When I started this project however I thought I would have everything switched over in a week. The fact that I was wrong and instead spent 3 months tweaking and analyzing has been one of the best things that could have happened.

#### Do you use AWS for your sites? Tell me about your experiences.