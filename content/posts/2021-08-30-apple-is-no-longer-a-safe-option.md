---
title: Apple is No-longer A Safe Option
date: 2021-08-30T15:15:06+00:00
draft: false
categories:
  - Technical
tags:
  - Apple
  - Privacy
---

Last week I published a post I wrote almost a month ago exploring what it would take for me to return to Linux. I wrote that post before [Apple announced a major pivot in its privacy stance][1] and, at the time, it seemed like a reasonable wish list of balancing the technology I'm comfortable working on with privacy and other ethical issues that make so much consumer tech so toxic.

Apple's announcement changes everything. I almost didn't publish the post as I realize my plans for tech now have to change. It is up only because those needs of maintainability, usability and support from my family aren't going anywhere. Instead I realize I'm going to need to re-think my approach to technology all-together as it is impossible to take a stand for privacy while still supporting and using products from Apple.

## What Apple's privacy pivot means for personal tech

Apple is no longer a safe option for storing your personal data.

I've long said that Apple cared about privacy only so far as it could use it as a marketing tool and [their pivot][2] validates this. No longer is your phone, or the data on it, yours. Instead it all belongs to Apple who views your data as a liability to its own existence.

In the past, with services such as Google and countless others, we had to physically send them our data for them to scan it. A photo, email, file or any other data uploaded to their servers was now under their control and liable to be scanned for any and every purpose. Even Apple has scanned email as well as analyzed your usage data for products such as News, Music and others for both legal reasons and to profile you. The difference was this scanning could be avoided by turning those services off.

In the coming weeks Apple is changing their policy and will start scanning your photo data while it is still on your phone. It is selling this under a marketing banner off keeping children safe however the chances of it having any positive impact on actual child safety is almost nil.

As the scanning still tied, for now, to iCloud use all an actual criminal has to do is turn off iCloud and their photos will no longer be scanned. On top of that, for many vulnerable LGBTQ+ and other children the ability to scan and report on data to family members could literally be a death sentence. Add to that it is already trivially easy to force a [collision on the type of image hashing Apple is proposing][3] and the net effect will be a loss of privacy for all that will result in real pain and suffering for many innocent people.

We talk about the evil's of Google selling our data for profit. Apple is going beyond that and skipping the middle-man. They're just going to forward offending data to the state using a state-sponsored database of images to determine what the offense is in the first place. In a world that is turning increasingly authoritarian it won't take long for governments to simply deem other types of content, from protest pictures to memes critical of itself, illegal.

[We're already seeing this in countries like Cambodia][4] and others where criticism of the government can lead to a jail sentence or worse. Once a government decides what is illegal, Apple is offering them a way to find offenders in possession of such content.

## I'm stuck with Apple, for now

Over the course of this year I've been slowly moving my own tech back to Apple. I've done this as Apple products are simply easier for me to support for myself and my family. I'm afraid it's too late for me to change that direction at the moment and I'll still be buying a MacBook Pro this fall.

This won't be my last computer. It very well might be my last Mac.

I find myself already looking at new Linux machines but even mentioning that to family creates anxiety. Everyone is, at least for the moment, really happy that they can FaceTime me at will and access their music, files and other data through our shared family iCloud account. As I've suggested it might not be permanent it really upsets everyone who had just started to believe I had shifted to working with them, instead of against them, with tech.

You see, they like the idea of sharing things with me without having to install an app they've never heard of before, regardless of whether I can sell them on the safety of it or not. Add to that iCloud is far more reliable than the services I've been experimenting with, as those services weren't something I planned but something I built out of a need.

Put that all together and it just isn't feasible for me to tack a second time this year. Not only is the chip shortage affecting the availability of everything I might want but I don't currently even have a personal laptop with which to set up a more robust self-hosted infrastructure that I can be happy with. As much as the situation isn't where I would want it to be, it's something I have to make peace with for now.

## It's time to build sustainable self-hosted solutions

Going forward, once I have my own laptop again, it is time for me to invest time in building more sustainable and resilient self-hosted solutions.

As of this writing I've gone through two iterations of self-hosting. The first failed due to software issues that made services like NextCloud almost unusable. The second failed when I needed to support it for my wife and not just myself. While the services were running fine I was never able to build in any real backups nor was I able to reach a point at which services like photos, maps or music were useable without a privacy-invasive solution.

While going back to Apple is unfortunate it is also an opportunity to fix this. They say "third times the charm" and I am hoping that rings true for our tech. Without _needing_ to rely on the solutions I build out I'm going to take time and experiment with services and architecture that work for me and my family and, most importantly, can be migrated or maintained should anything happen to me.

## My requirements for self hosted tech

When I started this process in the past, my requirement was simply "leave big tech behind." While that was a useable guide post it was, in the end, not the most complete or sustainable way to work in the 21st century. This time I'm looking at the project differently.

### Develop a sustainable tech stack

First and foremost the stack I develop has to be sustainable and maintainable over the long haul. In addition, should something happen to me, my wife and any other family members must be able to either maintain it themselves or be able to easily migrate to something more maintainable.

Calendars, files, contacts are great. If they disappear, however, that could cause major issues for anyone in our modern world. As a result I'll be focusing on architecture that isn't perfect but that can be moved should anything go wrong as well as enough training and documentation that my wife could do so should she ever need to.

### Replace key services

The second requirement is to replace key services. This one is a little harder than it sounds as, while there are plenty of _close_ solutions out there, there are few that can really replace what our Apple and Google tech can already do.

While there are a few services I know need replacing, at this step it's also time to look at what those key services really are.

For example, one of my primary frustrations with Linux was lack of access to so many little things like phone calls and text messages from my laptop. Can I do without those? What about a streaming music service (I listen to Apple Music 8-10 hours a day most days)? Even if I can do without can I sell any solution I decide on to my family who may not want to make such changes?

Picking services like Nextcloud, Signal and so many other common solutions is easy. What happened last time is, as I result, I only had access to those easy solutions and never could find solutions to everything else that everyone could live with. This time I will need to do a lot more experimentation to get there.

Given all that, there are a few options I know I can work:

* iCloud Calendar/Contacts/Drive -> Nextcloud
* Safari -> Firefox

What I need to take a harder look at is the many services I never could make work in the past

* 1Password -> Bitwarden (though last time I couldn't sell my family on this one)
* Maps
* Photos
* Travel Apps (airline, hotel, etc)
* Music
* Fitness
* so many more

What I'm hoping is, that while I'm stuck in Apple for now, I can use the time to really experiment with and test both the architecture and the services themselves to find solutions that will work for all of us.

### Replace the hardware

Finally we get back to the big step, replacing Apple hardware [[again][5]]. Once we get to the point where everyone is comfortable on non-Apple services, I think we'll be able to replace most Apple hardware. I don't know if this will take one year or 6 but I think, with proper testing and taking the time to do things right and not all at once, it is absolutely possible.

## Will this work?

So, here's the big question... will we be able to escape big tech's grasp once and for all? We've come so close in the past only to fall back in when things don't work out like everyone had hoped. I think, in this case, the biggest question is whether everyone will be happy with the alternatives this time. With more careful preparation and a mindset of solutions of all of us and not just myself, I think we can make this happen. I'm at least absolutely willing to give it a try to find out.

 [1]: https://www.theverge.com/2021/8/10/22613225/apple-csam-scanning-messages-child-safety-features-privacy-controversy-explained
 [2]: https://www.theverge.com/2021/8/5/22611305/apple-scan-photos-iphones-icloud-child-abuse-imagery-neuralmatch
 [3]: https://github.com/AsuharietYgvar/AppleNeuralHash2ONNX/issues/1
 [4]: https://www.khmertimeskh.com/50918892/professor-gets-18-years-jail-for-insult/
 [5]: /2018/09/from-mac-to-linux-first-impressions-on-a-major-workflow-shift/