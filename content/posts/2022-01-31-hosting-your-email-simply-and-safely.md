---
title: Hosting Your Email Simply and Safely
type: post
date: 2022-01-31T14:26:36+00:00
url: /2022/01/hosting-your-email-simply-and-safely/
categories:
  - Technical
tags:
  - email
  - Hosting
---

I've used a lot of email hosts over the years with the majority of that time spent in the old, free Google Apps accounts. When I was still using a personal Google account it made hosting my email easy for myself and my family.

Since leaving Google behind we've tried a few options including Mailbox.org, Proton Mail and, now, Apple's iCloud for domains.

With Google shutting off their free Google Apps accounts this year I've had a lot of people ask where they should turn for email. For many the goal seems to be a free or reasonable price and ease of use. I can understand this after supporting friends and family for so long. So what do I recommend?

## If You're All on Apple Use iCloud

Last Fall, alongside iOS 15, Apple also introduced the ability to host your own domain along with iCloud email. For most people I know who were using Google's offering this will be an excellent replacement with a few caveats:

### You must have a paid iCloud account.

If you're paying for Apple Music and their other services you already have this.

### It works better if all your devices are Apple

If you're on iPhone, Mac, etc this works great with the default Mac apps. If you're on something else or want to use other apps for your email it can get clunky fast.

### The default SPF record can make managing email through other sources hard

This one is probably the biggest downside to Apple's offering if you use your domain for more than your email. Most email servers rely on SPF records to help with spam which, simply put, ensure that the email is coming from a trusted sender. For example, if you send email from your Apple account and someone tries to spoof your email by sending it through, for example, Gmail, the SPF record shows a mismatch and the email is treated as spam.

Most email providers list the SPF record with the format "include" where you include each server allowed to send email on your domain's behalf. Apple, by default, uses the "redirect" parameter. Unlike include this means that all emails from your domain should come through Apple's servers. If you send email other ways, such as your WordPress site, it will most likely be flagged as spam.

## For everyone else use Mailbox.org

If you're not in Apple's ecosystem your best bet is mailbox.org. They're a smaller German company that provides secure and reliable email for a great price. The only issue here is the user interface, in particular their settings, can leave a lot to be desired. Once setup, though, it's fast and reliable and, in my experience, provides great support.

## What I am using

After leaving the Google ecosystem in 2019 I moved to mailbox.org. It worked great for me but wasn't as easy for my parents who aren't as technologically savvy. With the advent of Apple's new offering we moved to that around the holidays as we were already paying for an iCloud+ family account making this solution essentially free for us.

While I find Apple's privacy and other business practices suspect, at best, the solution has been great for my family as it is just there as long as they are logged into their Apple accounts, something pretty much required on any modern Apple device. If I can ever move back to Linux as my primary machine I'll go back to mailbox.org but, for now, I have no complaints about the features or level of service we're getting from Apple in general.

For more information

If you want to give Apple's email a shot [check out this article on setting it up][1].

You can find [mailbox.org][2] here.

 [1]: https://support.apple.com/en-us/HT212514
 [2]: https://mailbox.org/en/