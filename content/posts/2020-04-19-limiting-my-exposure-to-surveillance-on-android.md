---
title: Limiting My Exposure to Surveillance on Android
type: post
date: 2020-04-19T15:02:00+00:00
url: /2020/04/limiting-my-exposure-to-surveillance-on-android/
featured_image: /images/2020/08/limiting-my-exposure-to-surveillance-on-android.png
categories:
  - Technical
tags:
  - Android
  - Mobile
  - Privacy
  - Surveillance Capitalism

---
I’ve spent a lot of time working to transition to small, independent tech for our home and, as much as possible for my work. One area where this is really difficult today is with our phones. While [Pinephone][1], [GrapheneOS][2] and others are showing promise, the fact is they’re simply not ready for daily use in my life. After trying GrapheneOS for a while on my Pixel 3XL I’ve gone back to stock Android for it but with a few twists. Just because I have accepted stock Android doesn’t mean I’ve accepted the default settings and apps that make privacy all too easy.
Usually when I start talking about privacy on my phone the first reply is “why not get an iPhone?” In my opinion, this is not the right question. For many who install Google, Facebook or a host of other apps on their iPhones their exposure to tracking technology is no better than that of many, if not most, Android phones. In addition, my opposition to big tech ecosystems goes beyond just privacy to other ethical issues. From right to repair to simply telling you how you should use your device the only advantage I see in iPhone is a very small privacy advantage that seems to be eroding as time goes on. So, for now, Android is the best option for me to combine my desire to use my phone in the way I deem best, the need to use apps and services that just aren’t there on smaller mobile operating systems and the desire to avoid tracking surveillance as much as possible.

All that said, privacy, as I’ve pointed out, is still a big issue for me. Here are the steps I’ve taken to use my Android phone while maintaining as much privacy on it as possible.

## You don’t need your primary email address {#you-dont-need-your-primary-email-address.wp-block-heading}

One of the biggest downsides to using Android is that you still need a Google account. That said, if you have a Google account you need elsewhere, you don’t need to use that same account on your phone. The first thing I did was sign up for a Google account that I use for Play Store on the phone and nothing else. Yes, I’m fully aware data is connected in many other ways but keeping my phone segregated from any similar accounts I have, including my work account, is a step in making it harder to connect that data.

Another key here is not allowing this count to sync anything. From photos to contacts use alternative solutions where you can to keep your data out of Google.

## Change your system settings {#change-your-system-settings.wp-block-heading}

Once the phone is started it’s time to change the settings for better privacy. Here’s what I’ve changed on mine:

<ol class="wp-block-list">
  <li>
    Under <em>Privacy</em> turn off <strong>Personalize using app data</strong>.
  </li>
  <li>
    Under <em>Arivacy -> Ads</em> turn on <strong>Opt out of Ads Personalization</strong>. When I think of it, I also periodically click <strong>Reset advertising ID</strong> in here as well.
  </li>
  <li>
    Under <em>Privacy –=> Autofill with Google</em> I make sure all accounts are removed.
  </li>
  <li>
    Under <em>Privacy -> Google location history</em> I make sure my location history is paused
  </li>
  <li>
    Under <em>Privacy -> Activity controls</em> I ensure all activity controls are turned off.
  </li>
  <li>
    Under <em>Privacy -> Usage & diagnostics</em> I make sure diagnostic and usage sharing is turned off.
  </li>
  <li>
    Under <em>Connected devices -> Connect preferences</em> I turn off Bluetooth and NFC. Note, I do add a Bluetooth toggle to the toolbox so I can connect my headphones when I need them.
  </li>
  <li>
    Under <em>Location -> Wi-Fi and Bluetooth scanning</em> I turn off both Wi-Fi and Bluetooth scanning.
  </li>
  <li>
    Under <em>Location -> Advanced</em> I turn off all options.
  </li>
  <li>
    Under <em>System</em> I turn off <strong>Backup</strong>.
  </li>
  <li>
    Under <em>Network & Internet -> Advanced -> Private DNS</em> I set it to a custom host name from [https://nextdns.io].
  </li>
</ol>

While not perfect, this gives me a much better configuration than the default. That said, we’re not done yet. Lots of Google apps are unnecessary as well. Here’s how you can disable or replace many of the default items for more private alternatives.

## Disabling and replacing default apps {#disabling-and-replacing-default-apps.wp-block-heading}

While not all default apps have good alternatives, many do and, in some cases, I think you’ll find they’re even better than the original.

Apps, even those that aren’t listed in the App Drawer can be disabled by going to your Settings app, Clicking _Apps & notifications_ and the _See all apps_. Click on an app listed below, click “Force stop” and then “Uninstall” or “Disable” (depending on what is present). Note you’ll probably want to install the replacements listed below first for apps that need it.

<ol class="wp-block-list">
  <li>
    Anything Google (Docs, Drive, Music, etc). Note I can’t list all of the ones I’ve removed for the simple fact that I don’t have them to list anymore.
  </li>
  <li>
    Android Auto
  </li>
  <li>
    Calendar -> <a href="https://play.google.com/store/apps/details?id=ws.xsoh.etar&hl=en_US">Etar</a>
  </li>
  <li>
    Chrome -> <a href="https://play.google.com/store/apps/details?id=org.mozilla.firefox&hl=en_US">Firefox</a>
  </li>
  <li>
    Data transfer tool
  </li>
  <li>
    Device Personalization Services
  </li>
  <li>
    Drive -> <a href="https://play.google.com/store/apps/details?id=com.nextcloud.client&hl=en_US">Nextcloud</a>
  </li>
  <li>
    Gmail -> <a href="https://play.google.com/store/apps/details?id=com.fsck.k9&hl=en_US">K-9 Mail</a>
  </li>
  <li>
    Google
  </li>
  <li>
    Google Play Movies & TV
  </li>
  <li>
    Google Play Music -> <a href="https://play.google.com/store/apps/details?id=com.spotify.music&hl=en_US">Spotify</a>
  </li>
  <li>
    Google VR Services
  </li>
  <li>
    Live Transcribe
  </li>
  <li>
    Maps -> <a href="https://play.google.com/store/apps/details?id=net.osmand.plus&hl=en_US">OsmAnd+</a>
  </li>
  <li>
    Messages -> <a href="https://play.google.com/store/apps/details?id=org.thoughtcrime.securesms&hl=en_US">Signal</a>
  </li>
  <li>
    Photos -> <a href="https://play.google.com/store/apps/details?id=com.synology.moments&hl=en_US">Synology Moments</a>
  </li>
  <li>
    <em>Pixel Stand</em>
  </li>
  <li>
    <em>Pixel Tips</em>
  </li>
  <li>
    <em>Playground</em>
  </li>
  <li>
    <em>YouTube</em>
  </li>
</ol>

_Synology Moments will only work if you have a [Synology NAS][3] at home or elsewhere. That said, it is, by far, the most solid replacement I’ve found yet for Google Photos._

In addition to the above apps, I’ve also replaced the usage of a few Google apps even where I couldn’t disable their originals:

<ol class="wp-block-list">
  <li>
    <a href="https://play.google.com/store/apps/details?id=com.menny.android.anysoftkeyboard&hl=en_US">AnySoftKeyboard</a> as a replacement for GBoard
  </li>
  <li>
    <a href="https://play.google.com/store/apps/details?id=com.teslacoilsw.launcher&hl=en_US">Nova Launcher</a> (and Nova Launcher Prime) as a replacement for Pixel Launcher
  </li>
  <li>
    <a href="https://play.google.com/store/apps/details?id=at.bitfire.davdroid&hl=en_US">DAVx5</a> as a replacement for syncing services such as Calendars, To-dos (using <a href="https://play.google.com/store/apps/details?id=org.dmfs.tasks&hl=en_US">Open Tasks</a>) and Contacts from Nextcloud.
  </li>
  <li>
    In order to decrypt my email I use <a href="https://play.google.com/store/apps/details?id=org.sufficientlysecure.keychain&hl=en_US">OpenKeychain: Easy PGP</a> along with my private key stored on my <a href="https://www.yubico.com/products/">YubiKey</a> to actually read my email. This is necessary as my email provider, <a href="https://mailbox.org/">mailbox.org</a> automatically encrypts all messages stored in my account with my public key if they’re not already encrypted.
  </li>
</ol>

This setup, while not perfect (perfection, in my mind, is only possible when a viable alternative to Apple and Google’s duopoly exists), still allows me a reasonable level of privacy and access to the apps and services I use daily. If I really wanted to step up a level I could even replace most of my apps downloaded from the Play Store with equivalents from [F-Droid][4] but considering I still need Play Store apps anyway it doesn’t seem like the trade-off here would be all that beneficial.

In the end, while we can’t expect perfect privacy if we wish to use our phones in the manner that works best for us, I feel like this setup does a reasonable job of overcoming most of those shortcomings. If you have other options or ideas, please feel free to find me online for a discussion.

 [1]: https://www.pine64.org/pinephone/
 [2]: https://grapheneos.org/
 [3]: https://www.synology.com/en-us/products/series/home
 [4]: https://f-droid.org/