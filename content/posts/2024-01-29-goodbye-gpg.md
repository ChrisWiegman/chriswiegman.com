---
title: Goodbye GPG
type: post
date: 2024-01-29T15:03:19+00:00
url: /2024/01/goodbye-gpg/
categories:
  - Technical
tags:
  - GPG
  - Privacy
  - Security
  - Tools
---

I've had [GPG][1] keys since at least 1998 (as measured by looking up old email addresses on various keyservers). This weekend, at least for now, I've said goodbye and revoked my last key.

## The promise of GPG was excellent

From the time I started using GPG keys I was sold on their promise. I'm a bit paranoid when it comes to my privacy and, even back in the 90s, GPG promised a way to improve it, particularly with email which is basically an open technology by nearly every measurement.

Here was a tech that, at least in theory, could make sure my private email was really private. I was sold on it all pretty quickly.

## The actual implementation of GPG fell very short

Over the years I can count exactly 2 times when I actually used GPG to exchange encrypted email and at least 1/2 a dozen where the person I sent a signed email too joked with me about being the only person who uses GPG at all.

Instead of actually using it I spend decades (literally) trying different implementations and fighting applications. While I fully confess that I never was a power user, I've managed to find over 30 old keys (I stopped counting) from over that time most of which were abandoned simply because I didn't have a good way to manage the private key and would switch keys when I changed computers or reinstalled the OS for years, just like I would with SSH keys.

Simply put, the tech is neat but was more trouble than it was worth, particularly as I don't know anyone who would actually use it to email me. So much so that, as my primary machines are Macs where I use Apple Mail as my mail client, I had stopped even trying with mail and didn't reinstall [GPGtools][2] when I upgraded to Sonoma.

## My [almost] sweet spot for GPG

Where I finally found a use for GPG was about 8 years ago when I found a [proper guide][3] for using my keys with a [Yubikey][4]. The catch is I wasn't using it for privacy and encryption but strictly as a replacement for SSH keys which I used only for authentication and signing code. With the Yubikey it was quick to setup and allowed me to easily switch between computers without much setup in between.

The problem with this was that I often forget my Yubikey when switching laptops or leaving for the weekend and that means I can't work on any of my projects.

While this was nice, and arguably the most secure setup I've used, the nature of my own work and how I use my machines made it just too much of a pain point in too many circumstances.

## Back to SSH keys

After forgetting my Yubikey again the other day I decided it was time to do something different. I've gone back to SSH keys, this time using [ed25519][5] keys, and have set these up on each of my machines for both authentication and, with my code, for signing as well. If I lose the key, so be it. I can replace the authentication key in GitHub and will lose nothing with the old signing.

I still have my Yubikeys, and will continue to use them to secure my important accounts for the foreseeable future, but now I don't have to travel with them all the time. As time goes on we'll see where passkeys go, maybe I won't even need the Yubikeys anymore, but for now it is all working pretty well.

 [1]: https://en.wikipedia.org/wiki/GNU_Privacy_Guard
 [2]: https://gpgtools.org/
 [3]: https://github.com/drduh/YubiKey-Guide
 [4]: https://www.yubico.com/
 [5]: https://security.stackexchange.com/questions/90077/ssh-key-ed25519-vs-rsa