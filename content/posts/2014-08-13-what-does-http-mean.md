---
title: What Does HTTP Mean?
date: 2014-08-13T04:00:00+00:00
categories:
  - Technical
tags:
  - Web Development
---

We all know that there is something called HTTP when we go to a website, for most of us it’s the four (or five if you’re using https) letters in the beginning of a website address. For example, if you look at the whole address of this site it is [https://www.chriswiegman.com][1]. What does this really mean though?

## Hypertext Transfer Protocol

In the simplest terms HTTP stands for Hypertext Transfer Protocol. This is a fancy name for a set of rules (also known as a protocol) that computers use to transfer a specific kind of information, in this case the HTML documents (and others) that make up a website.

In other words HTTP is a language used by a network to transfer information from a web server to your browser.

## A Bit of History

HTTP is not a new thing. It’s actually older than what most of us know as the internet itself having first been created by [Tim Berners-Lee](http://en.wikipedia.org/wiki/Tim_Berners-Lee) in 1989 along with HTML as a way to convey textual information for the WorldWideWeb project. The original idea was to create a way to send text and style it (bold, headings etc) for which the two standards were perfect.

In 1991 HTTP was first documented as version 0.9 and the official standard was published in 1996 as version 1.0. Version 1.1 was then released in 1997 and, while it has undergone some revision, is still the current version of HTTP in use today.

## Ways to Send and Receive Information

Typically when we request a webpage we expect to get some information back in the form of a webpage, video, etc and occasionally we’ll fill out a form or do something else that sends information back to the server.

To facilitate this data transfer HTTP actually has a number of request methods which server to specify how information is transferred and can be used in combination to perform various tasks. In HTTP 1.0 (which is still in use today) the request methods were GET, POST and HEAD and in HTTP 1.1 OPTIONS, PUT, DELETE, TRACE and CONNECT were added.

While these have various uses for the most part, particularly in an application like [WordPress](http://wordpress.org) it is the GET and POST methods we use the most.

GET is how information is retrieved*. We put in a url and we _get_ data back. On the other hand POST is how we send or _post _data back to the server. When you log into WordPress or another site your login information is, most likely, sent as a POST request back to the server.

## What does this actually mean to me?

So that’s a lot of technical talk what it really means is that when you put _http_ into a website address what you’re doing is telling the browser that you’re going to communicate with a server using the HTTP protocol. Today it’s expected. A few years ago there were other ways to communicate in the browser such as _[gopher](http://en.wikipedia.org/wiki/Gopher_(protocol))_, _ftp_ and others. Perhaps one day we’ll have an alternative to HTTP and have to pay more attention to it again, perhaps not. In the meantime, whenever you see HTTP know that you’re telling the server you want a webpage or something related to a webpage that will be transferred in such a way that both your browser and the site you want to get can communicate effectively.

_*Note: information can be sent via GET but it is not the standard. Developers should always use POST to send information to a server._

 [1]: https://www.chriswiegman.com "Chris Wiegman"