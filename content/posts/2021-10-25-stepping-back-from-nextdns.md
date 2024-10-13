---
title: Stepping Back From NextDNS
date: 2021-10-25T13:49:01+00:00
categories:
  - Technical
tags:
  - DNS
  - Networking
  - NextDNS
  - Privacy
---

I've been using [NextDNS][1] for almost two years and it has been wonderful in blocking ads across all the devices we have only. Our ISP caps our data at 1TB and we come close to it ever month. NextDNS alone had dropped our overall bandwidth usage by nearly 8% across all our devices and it blocked up to 20% of all connections from many of the devices connected to our network.

After months of internet issues I've had to remove it.

Up until this summer everything worked with the blocking but that is no longer the case. Lately most devices seem to have numerous connection issues that were quite difficult to troubleshoot.

I suspected it might be DNS last week and decided to try switching to a less-restrictive upstream provider (currently using 1.1.1.1 for this test). Low and behold, everything is mostly working again which means, at least until I have a proper laptop and can do more experimentation, that I'm back on a DNS platform that is less private and will not help prevent tracking.

This is why we can't have nice things.

 [1]: https://nextdns.io/