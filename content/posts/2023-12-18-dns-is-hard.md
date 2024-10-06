---
title: DNS is Hard
type: post
date: 2023-12-18T13:49:11+00:00
url: /2023/12/dns-is-hard/
categories:
  - Personal
tags:
  - DNS
  - Networking
  - Privacy
---

I tried NextDNS again this morning but, two hours later, I gave up entirely and deleted my account. This time, about an hour after setting it up, my router couldn't resolve anything at all. Changing DNS resolvers solved problem so I can only assume it was yet another failure of their infrastructure.

This isn't the first time I've tried to use NextDNS and, in fact, until deleting my account I still had a month of paid service left. On previous attempts I moved away from it for a variety of reasons including T-Mobile's voicemail failing, my wife having issues with just about everything she uses and general service failures.

It really shouldn't be this hard to get reliable, private DNS but here we are. My home router doesn't support any form of encrypted DNS and, at least for now, another isn't in the budget while the current router is still working fine. I thought NextDNS, with all of its Apple profiles, would solve the issue (at least on most of our devices) but I was wrong.

In an ideal world all DNS lookups from every device I have would be encrypted to a reliable DNS that would also effectively block ads and trackers.

Today my router points to Quad9's resolvers and nothing is encrypted.

It's 2023. Public DNS shouldn't be this hard.

_* Yes, I've also self-hosted plenty of Pi-hole and other networking services and I'm not looking to do that again._