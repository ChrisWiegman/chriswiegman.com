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

![Screenshot of Firefox hanburger menu icon](/images/2020/10/1-select-preferences-from-menu.png "Enter preferences via the hamburger icon or keyboard shortcut")

![Screenshot of Firefox 'Privacy & Security'preference page](/images/2020/10/2-select-privact-and-security.png "Select 'Privacy & Security' from the menu on the left")

![Screenshot of Firefox 'Privacy & Security' preference page showing 'Certificates' at the bottom.](/images/2020/10/3-select-view-certificates.png "Scroll down to the bottom of the 'Privacy & Security' page and select 'View Certificates'")

![Screenshot of Firefox's certificates page on the Authorities tab](/images/2020/10/4-select-authorities.png "In the 'Certificate Manager' select 'Authorities' at the top and then press the 'Import' button")

![Screenshot of home folder](/images/2020/10/5-select-lando.png "Select the '.lando' folder in your home folder (you may need to view hidden files and you will have needed to already start a site in Lando to get the folder to display)")

![Screenshot of the contents of '.lando' with 'certs' highlighted](/images/2020/10/6-select-certs.png "In the '.lando' folder highlight 'certs'")

![Screenshot of the contents of the 'certs' folder with 'lndo.site.crt' highlighted.](/images/2020/10/7-select-lndo-site-crt.png "Select 'lndo.site.crt' and click 'Open'")

![Screenshot of Firefox certificate import options](/images/2020/10/8-trust-for-websites.png "When downloading the certificate, select 'Trust this CA to identify websites' and press 'OK'")

![Screenshot of Firefox's Certificate Manager with Lando visible](/images/2020/10/9-verify.png "Verify the certificate has been imported by looking for 'Lando' under the 'Authorities' tab in the Firefox Certificate Manager. Press 'OK'")

That's all it takes. As long as you don't delete the _.lando_ file from your home directory you should now be able to easily work in Firefox with all certificates trusted.

 [1]: https://lando.dev/
 [2]: https://docs.lando.dev/