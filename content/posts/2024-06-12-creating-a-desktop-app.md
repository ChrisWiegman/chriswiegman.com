---
title: Creating a Desktop App
date: 2024-06-12T12:56:33+00:00
draft: false
categories:
  - Technical
tags:
  - Development
  - Development Tools
---

The past two days have been spent in frustration as I tried to create a basic desktop app which would wrap a Docker CLI tool.

I've written a lot of software over the years. I've built everything from micro services to enterprise-level websites, and CLI apps to Google Chrome extensions and monolithic WordPress plugins and all of it seems "easy" compared to trying to get started on a desktop app.

Here's a bit more on what I'm trying to build, my frustrations and how I think I'll approach this to make it work.

## What I'm Trying to Build

I'm trying to build a wrapper for a Docker CLI, think Docker Desktop only for a limited use case in my own workflow. I run a LOT of containers on a daily basis and this would allow me to more easily start and stop them and, frankly, to just see the status of what I do (or often don't) have running all without finding my way back to the Terminal.

## My Attempts So Far

I thought this process would be easy. A few weeks ago I spun up a very basic Electron app that simply loads a wiki for the CLI and left it there. That took me only a few minutes and I thought I had it nailed.

These past two days we had a hackathon at work and I considered it the perfect time to take the project further. My new role at work has me working almost solely in JavaScript so I looked at it as a learning experience to get more involved in the ecosystem.

My goal for the two days was simple: get a list of the containers and display them in the app. To make it a little better I was going to split off the sidebar from the main app content and go from there.

I started looking at ways to simplify the styling. I am NOT a front-end developer and styling a whole app sounds like a special kind of torture to me. Bootstrap is something I had used a while ago so I would bring it into this app.

The other thing I would need here is React. I've dabbled in it with a few courses over the years and editing existing projects with it but I've never started a project from scratch.

My thought was that, once I could get both React and Bootstrap running, I could spend most of the rest of the time putting together a proper list view of everything I'm running.

That's what I thought but, 2 days later, I've barely got Bootstrap and React running in an Electron app that still just shows "Hello world."

## Where it Went Wrong

My issues started immediately in trying to add React and Bootstrap to Webpack and Electron, collectively 4 techs that I do not know well. It was hours of trial and error here before I could simply load these.

During the process I started thinking that maybe Electron wasn't the best engine for this. As a result I started to dive into [Wails][1], which is like Electron but in Go as I know Go well and thought it might reduce the overhead. Wails' scaffolds use Vite instead of Webpack so there went the rest of my day.

The idea of this project is that it _should_ work on both my Linux and Mac machines. By the end of Monday I was wondering if that was in fact what I needed or if I should just make it for my day job and keep it to Mac. This lead to a few hours of installing and playing with Xcode. That was not a good answer. There is just too much to learn there for me to be quickly effective.

So after all of these rabbit holes trying to get basic tech working in a stack that is best for the project I reverted to Electron. It would be good enough. Now I just needed to start the interface work.

I spent the rest of yesterday trying to get a simple, hiding, sidebar with Bootstrap. I never did get to the list or data, just the sidebar. With bootstrap this failed miserably.

So now I have an Electron app that displays "Hello World" and a lot of lessons in what doesn't work. One could argue that it is a good thing but I'm now out of time for this hackathon and haven't accomplished any of the goals I set out to do.

Maybe I'll go with calling it a mixed bag.

## What's Next for the App

So now I'm at a point where I can work on this on my own time and I will, but the effort will be a slow one.

First, I will probably pull Bootstrap out and just style it. I hate it but I don't think the learning curve is any less than learning Bootstrap at this point.

Next I'll need to get all the data in place. After some research in this I think I'll wind up spinning up something like an http server in Express within the app. I can use this to connect to the CLI and normalize any output. It's another learning curve but, here we are.

So, what I need to do now is learn React, Electron, and Express, at a minimum.

I see now why so may people are so frustrated with JavaScript and front-end dev. I have a few simple Html tags in a page. Something I could do in 2 minutes historically. It took me 2 days due to all the tooling and complexity.

What a world.

 [1]: https://wails.io