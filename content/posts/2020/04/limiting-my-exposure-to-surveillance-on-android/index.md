---
title: "Limiting My Exposure to Surveillance on Android"
date: 2020-04-19T14:15:19-04:00
description: ""
draft: finish
images: ["/images/limiting-my-exposure-to-surveillance-on-android.png"]
tags: ["android","mobile","privacy"]
---

![Limiting My Exposure to Surveillance on Android](/images/limiting-my-exposure-to-surveillance-on-android.png)

I've spent a lot of time working to transition to small, independent tech for our home and, as much as possible for my work. One area where this is really difficult today is with our phones. While [Pinephone](https://www.pine64.org/pinephone/), [GrapheneOS](https://grapheneos.org/) and others are showing promise, the fact is they're simply not ready for daily use in my life. After trying GrapheneOS for a while on my Pixel 3XL I've gone back to stock Android for it but with a few twists. Just because I have accepted stock Android doesn't mean I've accepted the default settings and apps that make privacy all too easy.

Usually when I start talking about privacy on my phone the first reply is "why not get an iPhone?" In my opinion, this is not the right question. For many who install Google, Facebook or a host of other apps on their iPhones their exposure to tracking technology is no better than that of many, if not most, Android phones. In addition, my opposition to big tech ecosystems goes beyond just privacy to other ethical issues. From right to repair to simply telling you how you should use your device the only advantage I see in iPhone is a very small privacy advantage that seems to be eroding as time goes on. So, for now, Android is the best option for me to combine my desire to use my phone in the way I deem best, the need to use apps and services that just aren't there on smaller mobile operating systems and the desire to avoid tracking surveillance as much as possible.

All that said, privacy, as I've pointed out, is still a big issue for me. Here are the steps I've taken to use my Android phone while maintaining as much privacy on it as possible.

## You don't need your primary email address

One of the biggest downsides to using Android is that you still need a Google account. That said, if you have a Google account you need elsewhere, you don't need to use that same account on your phone. The first thing I did was sign up for a Google account that I use for Play Store on the phone and nothing else. Yes, I'm fully aware data is connected in many other ways but keeping my phone segregated from any similar accounts I have, including my work account, is a step in making it harder to connect that data.

Another key here is not allowing this count to sync anything. From photos to contacts use alternative solutions where you can to keep your data out of Google.

## Change your system settings

Once the phone is started it's time to change the settings for better privacy. Here's what I've changed on mine:

1. Under _Privacy_ turn off __Personalize using app data__.
2. Under _Arivacy -> Ads_ turn on __Opt out of Ads Personalization__. When I think of it, I also periodically click __Reset advertising ID__ in here as well.
3. Under _Privacy --=> Autofill with Google_ I make sure all accounts are removed.
4. Under _Privacy -> Google location history_ I make sure my location history is paused
5. Under _Privacy -> Activity controls_ I ensure all activity controls are turned off.
6. Under _Privacy -> Usage & diagnostics_ I make sure diagnostic and usage sharing is turned off.
7. Under _Connected devices -> Connect preferences_ I turn off Bluetooth and NFC. Note, I do add a Bluetooth toggle to the toolbox so I can connect my headphones when I need them.
8. Under _Location -> Wi-Fi and Bluetooth scanning_ I turn off both Wi-Fi and Bluetooth scanning.
9. Under _Location -> Advanced_ I turn off all options.
10. Under _System_ I turn off __Backup__.
11. Under _Network & Internet -> Advanced -> Private DNS_ I set it to a custom host name from [https://nextdns.io].

While not perfect, this gives me a much better configuration than the default. That said, we're not done yet. Lots of Google apps are unnecessary as well. Here's how you can disable or replace many of the default items for more private alternatives.

## Disabling and replacing default apps

While not all default apps have good alternatives, many do and, in some cases, I think you'll find they're even better than the original.

Apps, even those that aren't listed in the App Drawer can be disabled by going to your Settings app, Clicking _Apps & notifications_ and the _See all apps_. Click on an app listed below, click "Force stop" and then "Uninstall" or "Disable" (depending on what is present). Note you'll probably want to install the replacements listed below first for apps that need it.

1. Anything Google (Docs, Drive, Music, etc). Note I can't list all of the ones I've removed for the simple fact that I don't have them to list anymore.
2. Android Auto
3. Calendar -> [Etar](https://play.google.com/store/apps/details?id=ws.xsoh.etar&hl=en_US)
4. Chrome -> [Firefox](https://play.google.com/store/apps/details?id=org.mozilla.firefox&hl=en_US)
5. Data transfer tool
6. Device Personalization Services
7. Drive -> [Nextcloud](https://play.google.com/store/apps/details?id=com.nextcloud.client&hl=en_US)
7. Gmail -> [K-9 Mail](https://play.google.com/store/apps/details?id=com.fsck.k9&hl=en_US)
8. Google
9. Google Play Movies & TV
10. Google Play Music -> [Spotify](https://play.google.com/store/apps/details?id=com.spotify.music&hl=en_US)
11. Google VR Services
12. Live Transcribe
13. Maps -> [OsmAnd+](https://play.google.com/store/apps/details?id=net.osmand.plus&hl=en_US)
14. Messages -> [Signal](https://play.google.com/store/apps/details?id=org.thoughtcrime.securesms&hl=en_US)
15. Photos -> [Synology Moments](https://play.google.com/store/apps/details?id=com.synology.moments&hl=en_US)*
16. Pixel Stand
17. Pixel Tips
18. Playground
19. YouTube

_* Synology Moments will only work if you have a [Synology NAS](https://www.synology.com/en-us/products/series/home) at home or elsewhere. That said, it is, by far, the most solid replacement I've found yet for Google Photos._

In addition to the above apps, I've also replaced the usage of a few Google apps even where I couldn't disable their originals:

1. [AnySoftKeyboard](https://play.google.com/store/apps/details?id=com.menny.android.anysoftkeyboard&hl=en_US) as a replacement for GBoard
2. [Nova Launcher](https://play.google.com/store/apps/details?id=com.teslacoilsw.launcher&hl=en_US) (and Nova Launcher Prime) as a replacement for Pixel Launcher
3. [DAVx5](https://play.google.com/store/apps/details?id=at.bitfire.davdroid&hl=en_US) as a replacement for syncing services such as Calendars, To-dos (using [Open Tasks](https://play.google.com/store/apps/details?id=org.dmfs.tasks&hl=en_US)) and Contacts from Nextcloud.
4. In order to decrypt my email I use [OpenKeychain: Easy PGP](https://play.google.com/store/apps/details?id=org.sufficientlysecure.keychain&hl=en_US) along with my private key stored on my [YubiKey](https://www.yubico.com/products/) to actually read my email. This is necessary as my email provider, [mailbox.org](https://mailbox.org/) automatically encrypts all messages stored in my account with my public key if they're not already encrypted.

This setup, while not perfect (perfection, in my mind, is only possible when a viable alternative to Apple and Google's duopoly exists), still allows me a reasonable level of privacy and access to the apps and services I use daily. If I really wanted to step up a level I could even replace most of my apps downloaded from the Play Store with equivalents from [F-Droid](https://f-droid.org/) but considering I still need Play Store apps anyway it doesn't seem like the trade-off here would be all that beneficial.

In the end, while we can't expect perfect privacy if we wish to use our phones in the manner that works best for us, I feel like this setup does a reasonable job of overcoming most of those shortcomings. If you have other options or ideas, please feel free to find me online for a discussion.
