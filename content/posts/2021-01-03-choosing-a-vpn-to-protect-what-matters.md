---
title: Choosing A VPN To Protect What Matters
date: 2021-01-03T14:45:26+00:00
categories:
  - Technical
tags:
  - Privacy
  - Security
  - vpn
---

Virtual Private Networks (VPNs) are big business these days. Log into an app store or browse the web for a bit and you'll find numerous advertisements claiming benefits ranging from security to privacy to anonymity. With so many offerings how do you choose? Who can you trust and what is the right amount to pay?

I've tried over a dozen VPN companies over the years and today I think it's safe to say that the best VPN for you depends somewhat on how you're trying to use it. That said, here's how I've arrived at what me and my family are using now.

## Questions to ask when choosing a VPN

When choosing a VPN it is vitally important to understand what you need it for. Yes, there are differences in how a VPN can protect you and your data. It all comes down to a few questions.

### Are you trying to protect your connection while traveling?

For most people who read this post the biggest use case is protecting your data from a public internet connection. This is commonly the case at airports, coffee shops, hotels and anywhere else you use a public WiFi connection. The problem is that those open WiFi connections may let others simply "listen in" to any data you send or receive over them as they're often not protected. In this case a VPN serves to wrap your data in a layer of encryption. Think of it as building a private tunnel around your whole connection that will prevent anyone from listening in.

Travel is one of the best reasons to use a VPN. If you're out and about there are real dangers to public WiFi and a VPN is one of the best ways to protect yourself. While no longer the threat it once was, the [Firesheep extension for Firefox][1] demonstrated just how dangerous public WiFi can be. It essentially listened on a WiFi network and then impersonated the user of known sites like Facebook using what it saw. Most reputable sites protect against this today but not all do and traffic from other apps and services may not at all. A VPN will protect all of them.

### Are you trying to access your Netflix account from abroad?

A second common use of a VPN is accessing content, such as Netflix, from out of your home country. This works because what a VPN does is provide a tunnel from your computer to its server. Anything you connect to should appear to the service as coming from the VPN, not your computer. For accessing content get a VPN server in your home country which would then convince the content provider that you're in the country of the VPN service.

Accessing content is such a common use for a VPN that many content providers will actually block known VPN traffic to prevent it. This often means shopping around for providers or reconnecting to your existing VPN to get an IP address your content provider doesn't recognize.

### Privacy and Anonymity

One of the biggest promises of many VPN services is privacy and/or anonymity. First, the two aren't the same. The first assumes data is transferred between you and the service you are connecting to. This may include IP address, [browser cookies][2] and any data associated with you as a user. Anonymity, on the other hand, assumes privacy in that the service is a good steward of any data received and takes it one step forward that the website or app you're connecting to receives no information that could be tied back to you at all.

Let's stop right here for a moment. If your sole use of a VPN is privacy and/or anonymity you need more than a VPN to achieve you're goal. For one your connection is only as private as the VPN service you choose. Second, much more data than IP information is used when browsing the internet. If, for example, you log into your Twitter account with an email used elsewhere you will not be anonymous. Anonymity is hard and not really what most people reading this are looking for. As a result I'm going to answer this question based only on improving privacy, not achieving anonymity as the latter requires much more than just a VPN.

As I stated above, your privacy with a VPN is only as good as the service you choose. Just like you must trust your internet provider with your connection data at home so too must you trust your VPN provider with that same data while you're connected. They see everything and depending on their own policies such as logging and others they may be able to reveal a lot about you if they suffer a security breach or are requested to in a legal summons or other request.

So what's the point of privacy in a VPN? There are very few who need to use a VPN for this purpose. In most cases these are activists, journalists and others who may need to protect their immediate physical location for various reasons. A trustworthy VPN will not make your physical location immediately available to anyone allowing some level of privacy to those who need it.

In addition, as many home internet providers don't often rotate IP addresses, a VPN will offer some privacy when using services that would otherwise share that information with the public. Numerous message boards, contact forms and other mechanisms capture your IP address by default and a VPN can mask that if so needed.

### Do you need a reliable IP address to connect to something?

What is more realistic for many of you reading this is a need to restrict access to servers and other resources. Maybe you run your own web server. Maybe you have a device at home that you might need to connect to when out. There are many things we connect to that the public shouldn't and a VPN can help with that.

Many VPNs can offer a static IP address. This means that every time you use the service you have a predictable IP address that you can use to restrict access to only that address. I use this for all my personal servers, for my [Home Assistant][3] and for my [Synology NAS][4]. In all cases I can only connect from my home or if I'm connected to my VPN. This use ensures that I can strengthen the firewalls on these devices to prevent public access and make them more secure.

## Choosing the right VPN

Once you know what you need a VPN for choosing a service becomes much easier. There are numerous trustworthy services out there to choose from it's now a matter of deciding who you trust or how willing you are to do the work.

### Self-hosting with Algo

For most of y'all, self-hosting a VPN should be a simple task using [Algo][5]. You can run this at home or on any number of hosts such as [Hetzner][6] (my current host) or [DigitalOcean][7]. If you're comfortable with installing WordPress yourself then Algo should take you only about an hour for the first time and less if you set it up again later.

#### Why Algo?

1. It's the most trustworthy provider I can find. If I can't trust myself to not keep logs or any other data who can I trust.
2. It's fast. There's no chance of too many users clogging a server making it slow. As a result I see functionally identical speeds to what I get on my normal internet connection.
3. The price is right. I have four users on my Algo box for 2.96€/month. Even with exchange fees this is less than $4.00 US/month which is far less than a reputable VPN that can run $7 per month per user (or more).
4. The static IP address makes connecting to any resources I might need much more secure.

If you've gotten this far, and are comfortable with tech, I recommend giving this a try first. It really is easy if you're comfortable building with tools like WordPress or with tech in general.

### Picking a commercial service

Depending on your needs or experience Algo might not be the best choice for you. If this is the case there are many good commercial VPN providers out there depending on your needs. Here are the rules I've used in the past when picking a VPN.

1. **Never use a free VPN.** (note that a VPN that comes with a subscription like Google Fi is not a free VPN for this purpose).
2. Never pay for multiple years up front. I still have at least a year left on a NordVPN account I bought and had to stop using. They grew enough that connecting became difficult and service was often too slow to be usable. This is a common theme I've found with every VPN service. They're great when they're new but they often grow their user base too quickly resulting in slow service.
3. Read their privacy policy. If you're worried about privacy with a VPN then you'll want to make sure they don't log any data you give them.

As of writing this, I have no personal preferences on commercial services but I do trust those I see recommending [ExpressVPN][8] and [ProtonVPN][9]. Both have solid privacy policies and seem to be operated by trustworthy leadership. That said, don't feel a loyalty to any service you sign up for. From data breaches to slow service they usually suffer over time. I find that, on average, I switched commercial VPNs about once a year for one of these two reasons so keep in mind that what you choose today will most likely not be permanent.

## In Conclusion

In the end choosing a VPN comes down to what you need it for and who you're willing to trust. While they're not the privacy or anonymity cure-all they're advertised to be they do have real benefits that almost anyone can make use of. Given that, pick your service based on your own needs and comfort level. As long as you stick to my recommendations or those of others who know the field, you will be much safer on the internet.

 [1]: https://en.wikipedia.org/wiki/Firesheep
 [2]: https://en.wikipedia.org/wiki/HTTP_cookie
 [3]: https://www.home-assistant.io/
 [4]: https://www.synology.com/
 [5]: https://github.com/trailofbits/algo
 [6]: https://www.hetzner.com/
 [7]: https://www.digitalocean.com/
 [8]: https://www.expressvpn.com/
 [9]: https://protonvpn.com/