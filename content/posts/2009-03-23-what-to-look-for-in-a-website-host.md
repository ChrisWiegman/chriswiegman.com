---
title: What to look for in a website host
type: post
date: 2009-03-23T00:00:00+00:00
url: /2009/03/what-to-look-for-in-a-website-host/
categories:
  - Technical
tags:
  - Web Development
---

So you’ve got a great idea that you want to put online but you don’t yet know where you are going to put it? For many of us running our own web server isn’t an option due to both the overhead involved and the technical skills required to keep it running. Instead we have to turn to the web hosting industry to take care of our needs. When we do this we are confronted with dozens of options with prices ranging from free to hundreds of dollars a month. So why does the price vary so dramatically? Although there are a few variables involved the bulk of the difference can be attributed to capacity. In other words, the more you pay, the more users your site will be able to handle.

In the cheaper plans you are typically paying for what is called “shared hosting.” In these plans you share a server with dozens if not hundreds of other websites all of which must compete for server resources such as memory, CPU, and to an extent network bandwidth and storage space. A few years ago it was common to see these plans advertise limits on disk space for storage and network bandwidth however as both of these have become increasingly cheaper many hosts are now offering unlimited bandwidth and storage. Instead what they don’t tell you is that they are typically limiting your CPU load. If your site requires a lot of database queries or simply gets too many people (usually 10,000 or more per day for the average blog) you might start to hit CPU limits which can render your site unavailable to users for a period of time.

The next level up is usually VPS or Virtual Private Server. On a VPS you are still allocated disk space and other hardware resources on a server your application is typically isolated from other users providing you much more access to CPU and memory. In addition, VPS tends to give a user much more control over their web host as many are running their own protected operating system and webserver for each user. These sites can typically handle a LOT of traffic although they can still become overburdened by a site that does a lot of heavy number crunching associated with online games, multimedia, or heavy database usage. Some hosts may also recommend VPS hosting for application requiring a dedicated IP address which may be necessary for ECommerce or other types of sites where security is a little more important.

Finally, the most expensive hosts often offer dedicated servers where you are essentially paying them per month to keep an entire server running for you. This is the ultimate as you are often responsible for configuring the server and services you use and you may be responsible for a misconfiguration or other problems encountered. Only sites with very high usage and or very heavy processing requirements need to look this high end.

So how do you know how many users you’ll get on your site and which of these types of hosting you will need?

To answer this question I’m going to assume you’re starting a new site for personal or small business use. In either case the first place to go would be a traffic ranking site such as [Alexa](http://www.alexa.com). Here you can enter the address of sites similar to your and get some feedback on the number or users and general popularity of the subject matter. It’s important at this point to keep in mind that the sites you are comparing yourself to might have been running for sometime and be very well established in their subject community. In this case their traffic is often something to aspire to as a medium to long term goal rather than what you can expect to see at the beginning. Another place to analyze your competition is at [http://www.whoishostingthis.com/](http://www.whoishostingthis.com/). This site can tell you where your target sites are being hosted which may provide a little insight into what kind of hosting their site requires which in turn can help you decide what type of plan you will need.

So I have an idea on how many users I’ll get. What’s next?

The next step is to choose an actual company to host with. To answer this question we will first need to figure out a couple of the technical requirements of our site. These include what language the site will be coded in (PHP, ASP, Ruby, etc), what kind of database (if any) is needed, and are there any special features that I’ll need. These answers will help us decide between the two most common types of hosting at any level which is plans that run on Linux and plans that run on Windows.

The most common software for blogs (WordPress, Joomla, and Drupal) will often run better on Linux as it makes use of some of the requirements that are native to the Linux web server, Apache. In fact, unless you know you will be using .NET or another proprietary Microsoft technology a Linux plan will serve you just fine and might even save you a little money due to the licensing costs of the server software.

Once we have an operating system and a level of hosting picked out our next concern should be for support. At some point even the most experienced developers will probably have to talk to tech support. A good judge of this is by simply searching for reviews of the company in question on Google. It’s amazing how much information is out there. Note that while there are hundreds of companies available many are simply resellers of one of the bigger companies and many more are start-ups that won’t last the year.

Finally, remember that for most sites you can change a host fairly easily so don’t get too hung up on your decision.

For the record, over the years I’ve used winsave, [gearhost](http://www.gearhost.com/), [1and1](http://www.1and1.com), [GoDaddy](http://www.godaddy.com), [hostmonster](http://www.hostmonster.com), and a few others which are no longer in business. I currently use [Bluehost](http://www.bluehost.com) for my personal sites including this page.