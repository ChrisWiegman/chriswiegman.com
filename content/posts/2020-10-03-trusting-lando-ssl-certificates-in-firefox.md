---
title: Trusting Lando SSL Certificates in Firefox
type: post
date: 2020-10-03T14:09:38+00:00
url: /2020/10/trusting-lando-ssl-certificates-in-firefox/
featured_image: /images/2020/10/land-dev.png
categories:
  - Technical
tags:
  - Firefox
  - Lando
  - Local Development
  - SSL

---
[Lando][1] is, arguably, the best tool available today for local WordPress development. It's [documentation][2], however, isn't always perfect.

In the case of trusting SSL in Firefox it suggests trusting your system's certificate store in Firefox. There are numerous reasons why you might not want to do this and a very simple procedure so that you won't have to. The following walks you through trusting Lando sites via Firefox's own certificate store so that you'll get all the benefits of a trusted SSL for your development site without telling Firefox to trust everything your whole system does.
<div class="wp-block-image">
  <figure class="aligncenter size-large"><img loading="lazy" decoding="async" width="142" height="141" src="/images/2020/10/1-select-preferences-from-menu.png" alt="Screenshot of Firefox hanburger menu icon" class="wp-image-670" /><figcaption>Enter preferences via the hamburger icon or keyboard shortcut</figcaption></figure>
</div><figure class="wp-block-image size-large">

<img loading="lazy" decoding="async" width="850" height="550" src="/images/2020/10/2-select-privact-and-security-850x550.png" alt="Screenshot of Firefox "Privacy & Security" preference page" class="wp-image-671" srcset="/images/2020/10/2-select-privact-and-security-850x550.png 850w, /images/2020/10/2-select-privact-and-security-400x259.png 400w, /images/2020/10/2-select-privact-and-security.png 1000w" sizes="(max-width: 850px) 100vw, 850px" /> <figcaption>Select "Privacy & Security" from the menu on the left</figcaption></figure> <figure class="wp-block-image size-large"><img loading="lazy" decoding="async" width="850" height="552" src="/images/2020/10/3-select-view-certificates-850x552.png" alt="Screenshot of Firefox "Privacy & Security" preference page showing "Certificates" at the bottom." class="wp-image-672" srcset="/images/2020/10/3-select-view-certificates-850x552.png 850w, /images/2020/10/3-select-view-certificates-400x260.png 400w, /images/2020/10/3-select-view-certificates.png 1000w" sizes="(max-width: 850px) 100vw, 850px" /><figcaption>Scroll down to the bottom of the "Privacy & Security" page and select "View Certificates"</figcaption></figure> <figure class="wp-block-image size-large"><img loading="lazy" decoding="async" width="850" height="548" src="/images/2020/10/4-select-authorities-850x548.png" alt="Screenshot of Firefox's certificates page on the Authorities tab" class="wp-image-673" srcset="/images/2020/10/4-select-authorities-850x548.png 850w, /images/2020/10/4-select-authorities-400x258.png 400w, /images/2020/10/4-select-authorities.png 1000w" sizes="(max-width: 850px) 100vw, 850px" /><figcaption>In the "Certificate Manager" select "Authorities" at the top and then press the "Import" button</figcaption></figure> <figure class="wp-block-image size-large"><img loading="lazy" decoding="async" width="850" height="486" src="/images/2020/10/5-select-lando-850x486.png" alt="" class="wp-image-674" srcset="/images/2020/10/5-select-lando-850x486.png 850w, /images/2020/10/5-select-lando-400x229.png 400w, /images/2020/10/5-select-lando.png 1929w" sizes="(max-width: 850px) 100vw, 850px" /><figcaption>Select the ".lando" folder in your home folder (you may need to view hidden files and you will have needed to already start a site in Lando to get the folder to display)</figcaption></figure> <figure class="wp-block-image size-large"><img loading="lazy" decoding="async" width="850" height="486" src="/images/2020/10/6-select-certs-850x486.png" alt="Screenshot of the contents of ".lando" with "certs" highlighted" class="wp-image-675" srcset="/images/2020/10/6-select-certs-850x486.png 850w, /images/2020/10/6-select-certs-400x229.png 400w, /images/2020/10/6-select-certs.png 1929w" sizes="(max-width: 850px) 100vw, 850px" /><figcaption>In the ".lando" folder highlight "certs"</figcaption></figure> <figure class="wp-block-image size-large"><img loading="lazy" decoding="async" width="850" height="486" src="/images/2020/10/7-select-lndo-site-crt-850x486.png" alt="Screenshot of the contents of the "certs" folder with "lndo.site.crt" highlighted." class="wp-image-676" srcset="/images/2020/10/7-select-lndo-site-crt-850x486.png 850w, /images/2020/10/7-select-lndo-site-crt-400x229.png 400w, /images/2020/10/7-select-lndo-site-crt.png 1929w" sizes="(max-width: 850px) 100vw, 850px" /><figcaption>Select "lndo.site.crt" and click "Open"</figcaption></figure>

<div class="wp-block-image">
  <figure class="aligncenter size-full"><img loading="lazy" decoding="async" width="787" height="377" src="/images/2020/10/8-trust-for-websites.png" alt="Screenshot of Firefox certificate import options" class="wp-image-677" srcset="/images/2020/10/8-trust-for-websites.png 787w, /images/2020/10/8-trust-for-websites-400x192.png 400w" sizes="(max-width: 787px) 100vw, 787px" /><figcaption>When downloading the certificate, select "Trust this CA to identify websites" and press "OK"</figcaption></figure>
</div><figure class="wp-block-image size-large">

<img loading="lazy" decoding="async" width="850" height="614" src="/images/2020/10/9-verify-850x614.png" alt="Screenshot of Firefox's Certificate Manager with Lando visible" class="wp-image-678" srcset="/images/2020/10/9-verify-850x614.png 850w, /images/2020/10/9-verify-400x289.png 400w, /images/2020/10/9-verify.png 1032w" sizes="(max-width: 850px) 100vw, 850px" /> <figcaption>Verify the certificate has been imported by looking for "Lando" under the "Authorities" tab in the Firefox Certificate Manager. Press "OK"</figcaption></figure>

That's all it takes. As long as you don't delete the _.lando_ file from your home directory you should now be able to easily work in Firefox with all certificates trusted.

 [1]: https://lando.dev/
 [2]: https://docs.lando.dev/