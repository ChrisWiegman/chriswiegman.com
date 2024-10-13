---
title: What Is The Best Way To Install A WordPress Plugin?
date: 2011-10-19T00:00:00+00:00
categories:
  - Technical
tags:
  - WordPress
---

As anyone who is familiar with a [WordPress.org](http://wordpress.org "WordPress.org") install can tell you there are 3 primary ways to install a plugin in WordPress. You can have it download automatically by searching for it and clicking install in the WordPress back-end. You can download the zip file and upload it into WordPress by selecting “Add New” in the plugins page and the selecting “Upload.” Or, you can manually install it yourself via FTP/SSH. So is there any difference? Yes, actually there is. Here’s a breakdown of what each does and why you might want to choose one over the other.

### Using the “Search” function on the Install Plugins page

This is the easiest method. Simply search for a feature, plugin name, etc that you’re interested in and WordPress will present you with a list of choice. Clicking “Details” will even tell you if the plugin has been tested with your version of WordPress which can help prevent installation of older plugins. Once you click “Install Now” WordPress will download the plugin, install it, delete and installation files, and give you the choice to activate it.

The only downside with this method is many people overlook ever clicking the “Details” button and even when they do they may have a hard time figuring out if there are any issues with the plugin as they will not be able to see the latest forum posts detailing problems other users are having.

Overall, if you know what you’re getting this is the quickest way to install a plugin but if you’re not familiar with the plugins presented it can be easy to install an older or problematic plugin as information on any given plugin is not readily available without an extra step and even then is somewhat incomplete.

### Using the “Upload” function on the Install Plugins page

The next option is to search and download the plugin yourself on WordPress.org (or another site) and upload it using the “Upload” feature of the plugins installer. While not as fast as the previous method downloading the plugin yourself offers you the advantage of seeing all the information on the plugin before you hit the download button (at least it does if you get it from WordPress.org anyway). You can see issues, age, version, popularity, and more all of which can help you determine tif the plugin in question is right for you.

Their are 2 drawbacks to this method. First, it takes longer than just using the search function in your WordPress installation. Second, it leaves the initial installation zip file in your uploads folder which may become an issue on some installations and perhaps even a security concern as if someone stumbled across the file they could know which version of a plugin you have installed leading to issues if there are known security vulnerabilities.. To get rid of this file you will have to do so manually. On the positive site however the extra time you spend to see all the information on a given plugin may save you a lot of headache later due to issues that can otherwise arise.

### Installing the plugin manually

The last method to install a plugin involves downloading the plugin from WordPress.org or another site in the same manner in which you would if you were to use the built-in “Upload” function in WordPress. The difference here is that instead of having WordPress upload and extract the file for you instead you extract it on your machine and upload the plugin folder and its content to the plugin folder on your WordPress installation (usually wp-content/plugins). Then you go back to the plugins page on your WordPress installation and press the “Activate” button.

While this take a little more work than having WordPress install it for you it will also help you ensure the quality of the plugin yourself while not taking unnecessary space on your server. You have the advantage of seeing all the information from the plugin site and you can easily browse the code yourself if you would like making sure that everything is up to your standards.

### So which is best?

Personally I use the “Search” function for known plugins that I use on every site and I manually install anything else. I’m a research freak when it comes to plugins and I try to be very careful that anything I install is still in development and won’t cause any problems on my site. Here’s a quick breakdown though on all the methods available.

| Attribute                   | **WordPress "Search** | **WordPress "Upload"** | **Manual Install** |
| --------------------------- | --------------------------- | ---------------------------------- | ------------------ |
| **Speed of installation**   | Fastest                     | Middle                             | Slowest            |
| **Pre-install information** | Limited                     | Full                               | Full               |
| **Compatibility Test***     | Yes                         | No                                 | No                 |
| **Leaves Files Behind**     | No                          | Yes                                | No                 |

*Note that the compatibility test only checks to see whether the plugin was tested with your version of WordPress. Your results my very.

_**Have another method or something to add to one of these? Please let us know in the comments!**_