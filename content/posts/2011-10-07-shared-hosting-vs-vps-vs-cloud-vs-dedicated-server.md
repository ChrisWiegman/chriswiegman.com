---
title: Shared Hosting vs VPS vs Cloud vs Dedicated Server
date: 2011-10-07T04:00:00+00:00
categories:
  - Technical
tags:
  - Web Development
---

Have you shopped around for website hosting lately? Whether you’re building your first site or your 101st site there are a lot more options for hosting it than there used to be.

When I first started developing websites in the mid-90s about the only services available to the masses to host a website fell along the lines of GeoCities. They were clumsy, ugly, and really didn’t give you a whole lot of options. By 2002 website hosting finally started to come of age and offered choices like Linux or windows for about $9 a month or you could rent a whole server for substantially more.

Today there are a lot more choices. Whether you are looking to build a personal journal or the next Facebook you can start hosting it in a matter of minutes. The question now becomes which type of hosting is right for me? Generally speaking there are 4 different types of hosting today. Each of these 4 has its strengths and weaknesses and, most importantly, each has its place in the world of the web. Here are the 4 main types of hosting and why (or why not) you should choose each one.

### Shared Hosting

Shared hosting is the most popular option out there. Essentially the host is selling you a slice of a server that they can divide up among as many customers as possible. Each customer gets an equal share of the system resources which they can use to do pretty much anything they wish [as long as what they use it for doesn’t consume too much of the server’s RAM or CPU][1].

For someone just starting out or someone with a small site that won’t be getting a whole lot of traffic shared hosting can do the job for the least amount of money. For a larger or more complex site however shared hosting will often lead to headaches as it doesn’t take a lot of visitors on many hosts to get your site shut down for using too many resources. In addition, shared hosting can often be limiting in that you will be unable to change anything on the server itself to work better with your website. Whatever they offer is what you get and there really isn’t anything you can do about it.

Shared hosting will easily handle about 90% of all websites out there today. It will not however be enough for power users who want more control or more popular sites which can eat up a lot of computing resources.

### VPS Hosting

VPS stands for Virtual Private Server. Like shared hosting your still sharing a server with other customers. With VPS however you are given a higher guaranteed amount of RAM and CPU limits as well as more control over the server itself (often times you will start with a clean operating system you can configure as you see fit).

On the down side, unlike shared hosting VPS hosts don’t always offer unlimited bandwidth and storage meaning that if you send a lot of data out or have a lot of images or other media to store you can quickly get in trouble. Along with these limits also comes a heftier learning curve and price tag. In the case of the learning curve, while it might be nice to have a lot of extra control, making use of that control can quickly turn into a nightmare if you don’t know what you’re doing. Also, whereas prices for shared hosting are often less than $5 dollars per month, VPS hosting usually start around $15 to $20 per month and goes up depending on how many resources you will need.

If you have a busy site you really do need at least a VPS. In nearly all cases they are, by design, faster and more reliable than shared hosting accounts as well as able to handle significantly more users and greater complexity. While I wouldn’t recommend buying a VPS account for your very first post, as soon as you find yourself getting banned for too much traffic or you find your host running slow from too many users shared hosting is often the next logical step.

### Dedicated Hosting

Dedicated hosting is leasing an entire server on which to host your website. You get access to all hardware and software from your web server software right down to the operating system all for a very hefty price (it isn’t hard to exceed $200 per month for a dedicated server).

Dedicated hosting is only for the heaviest of power users. The ability to control your own operating system often can mean your on your own when it comes to software support and by the nature of your own customizations, should the hardware fail it can take more time to recover your site. If however you have security sensitive data on your website or a very high traffic load a dedicated server may be for you as you alone have access to the system meaning that all RAM/CPU/disk space/etc is under your full control.

### Cloud Hosting

I put cloud hosting last here for a very different reason. Cloud hosting, as used in services such as Amazon Web Services, is often hosting what to the customer seems like a full server without ever dealing with any of the hardware. That is you don’t know how many are using the same physical hardware, and you don’t care. If one piece of hardware fails another will just take over. With that transparency comes scalability. This is the ability to seamlessly add resources such as RAM and hard disk space (or reduce them) with little to no input on your behalf. If your 500mb server is too small due to a spike you can make it a 2gb server for a few hours to handle it and no one will know it but you.

Cloud hosting isn’t for the faint of heart. It requires a rather heavy knowledge of web server software to handle effectively. In addition, due to its scalable nature you have to be diligent when using cloud hosting as resources are often billed by the hour and can easily exceed your budget if you don’t pay attention.

On the positive, cloud hosting can be very cheap (currently hosting this site is [free for the 1st year](http://aws.amazon.com/free/ "Amazon AWS Free Tier") on [Amazon AWS](http://aws.amazon.com "Amazon Web Services") and will be about $15 a month after that), reliable, and very customizable. Cloud hosting essentially lets you scale the resources you need when you need them and only changes you for what you have used. For a site that is growing rapidly or subject to severe traffic fluctuations the cloud can be a very effective solution.

In the end the type of hosting you pick depends on both your experience level and the number of visitors you plan on seeing at your site. The higher either one of those variables gets the more it will cost you.

 [1]: /2011/08/the-limits-of-unlimited-hosting/