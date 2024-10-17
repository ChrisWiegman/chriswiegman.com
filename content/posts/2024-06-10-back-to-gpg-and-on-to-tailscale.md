---
title: Back to GPG and on to Tailscale
date: 2024-06-10T12:14:34+00:00
draft: false
categories:
  - Technical
tags:
  - Security
  - Self-hosting
---

A few months ago I did something I hadn’t considered in a very long time: I abandoned my long-standing [GPG][1] key and just reverted to a local key pair for working with Git. In the process I also stopped using my [Yubikey][2] which had been a part of my workflow for years, allowing me to seamlessly swap between machines with a greater level of security across all of it.

This weekend I went back to GPG and my Yubikey. It may sound like a dumb thing but I liked the workflow, particularly as I swap between machines regularly and my Yubikey is once again a regular part of my security for any service that uses it. I also have a brand new ed25519 key that I’ll be posting publicly in the coming days. It feels so familiar to use again and I’m grateful I made the switch.

The other big change over this past weekend was that I moved from [Proton VPN][3] to [Tailscale][4] for my personal VPN service.

The move to this was to allow me a predictable VPN solution while out (I’ll spin up a low-end [DigitalOcean][5] box as my exit node) and to allow me to start setting up some self-hosted solutions again in a more secure way than just leaving the SSH ports open to the world.

With a little bit of luck this is all a first step to escaping Apple’s grip on my tech life some.

 [1]: https://gnupg.org
 [2]: https://www.yubico.com
 [3]: https://protonvpn.com
 [4]: https://tailscale.com
 [5]: https://www.digitalocean.com