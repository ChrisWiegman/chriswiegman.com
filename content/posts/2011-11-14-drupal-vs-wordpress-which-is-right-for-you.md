---
title: Drupal vs WordPress – Which is right for you?
date: 2011-11-14T05:00:00+00:00
categories:
  - Technical
tags:
  - Web Development
---

![WordPress vs Drupal](/images/2011/11/WordPress-vs-Drupal.png)

Back in January I wrote an article on [Drupal 7 vs Joomla 1.6][1] which demonstrated the power of [Drupal](http://drupal.org "Drupal") over the Joomla system. Almost a year later it’s time to stack up Drupal next to my other favorite [content management system (CMS)](http://en.wikipedia.org/wiki/Content_management_system "Content management system on Wikipedia"), [WordPress](http://wordpress.org "WordPress"). As I begin this comparison I’m looking at the situation from a slightly different angle. Rather than going through aspects such as installation, administration, etc that I did in Drupal vs [Joomla](http://www.joomla.org "Joomla") I’m going to look at Drupal vs WordPress from 4 different use-cases derived from my own experience with the platforms over the years.

Before I go any further I want to point out that while there was a definite winner in the [Drupal vs Joomla battle](/2011/01/drupal-7-vs-joomla-1-6/), when it comes to comparing Drupal with WordPress the concept of “better” doesn’t really apply. Both are built in fundamentally different ways for different purposes and in large organizations, particularly in higher education, it is quite common to see them running together to meet various organizational goals and needs.

## 1.) The Blog

For most folks out there one of the primary purposes of a modern website is a blog. Out of the box both Drupal and WordPress have some rather significant blogging tools installed. This is however where the similarities end.

### WordPress

WordPress was, and still is, primarily a blogging platform. From it’s installation to the community around it WordPress has more tools and support for blogging than any other self-hosted system on the market.

In addition to being designed for blogging, WordPress also has the advantage of being very easy for someone new to the web to handle. Installation is automatic for most hosts and there is no shortage of “getting started” tutorials and books available to get anyone up and running in minutes regardless of their experience level.

Finally, thanks to the large blogging community around WordPress, the [plugins][2] and [themes](http://wordpress.org/extend/themes/ "WordPress.org Theme directory") available for the platform can very quickly add social, SEO, and nearly any other feature found in the modern blogosphere.

### Drupal

Like WordPress Drupal has blogging built-in. In the case of Drupal however it is a core module that must typically be turned on by the site owner in order to be used. This is a major difference. Rather than having the primary purpose of Drupal centered on blogging it is instead an add-on for a popular use case.

The difference between WordPress and Drupal’s blogging approach is evident from the beginning of the installation through support and nearly every other aspect of the platform. For instance, the very complexity that allows Drupal to be used as a blog also can make it very intimidating to a web novice who can easily spend hours just trying to figure out how to get it running. Make no mistake about it, with Drupal you will not have a site running in 5 minutes. In fact just learning [how to write a post without having to manually add each HTML tag](http://drupal.org/node/981222 "Article from Drupal.org on WYSIWYG support") can be an exercise in some serious patience.

Finally, while the Drupal community is big and helpful blogs are just a small part of what they deal with. Sure, there are blog themes and modules to add common functionality but they are harder to come by and more often than not don’t receive the support you will find on the more popular WordPress equivalents.

Where Drupal does shine is for the true “geeks” among us. If you want to really dig into the functionality of your blog and control every aspect of the editor, the posts, the data, etc than Drupal might be for you as it provides great flexibility to those in the know.

### Winner – WordPress

The fact that WordPress is made for blogging first should make it the choice for all but the most technical of bloggers.

## 2.) The small business

Defining a single use case for a small business site is something like defining a single definition of a car for all the vehicles on a modern highway. There are plenty of uses requiring many different approaches depending on the business involved. That said, there are still places where WordPress and Drupal will shine over one another for the small business crowd.

### WordPress

As many small business sites also have small business budgets WordPress can be a valid choice. If you’re looking to only sell a few products and market your business with data that doesn’t constantly change than WordPress will work for you.

The ease of installation and single-click updates available in WordPress can make it a very valid choice if your primary business doesn’t involve the web itself. Theses abilities, along with the easy of use for even the most novice of website owners allow for some very professional looking sites with enough information to get you noticed by your customers.

Where WordPress can fall behind for the small business is in situations where data can get complex such as online stores or simply sites with many types of data such as products, employees, news, calendar, etc. The more complex the site the harder it will be to get WordPress to do it all the way you want it to.

### Drupal

If you have more than a few static pages and a blog on your small business site or you would like your site to interface with your inventory systems Drupal is for you.

From right out of the box Drupal (as of Drupal 7) has tools such as [Fields](http://api.drupal.org/api/drupal/modules--field--field.module/group/field/7 "Drupal Fields API on Drupal.org") and [Permissions](http://groups.drupal.org/node/22414 "Drupal.org article on Drupal's permissions") which can allow for a site with any data and workflow structure you can imagine. In addition, with the addition of modules such as [views](http://drupal.org/project/views "Drupal View") and [Ubercart](http://drupal.org/project/ubercart "Ubercart"), among others, Drupal can be made to more efficiently handle sites with large complex data structures such as online stores, communities, and more.

The downside to using this added flexibility of Drupal is the learning curve. Simply put you will either need someone with Drupal experience or an awful lot of extra time to get it going. In addition, once it is set up it will require more of your time (or that of someone you hire) to both manage the more complex data and the site itself. In short, Drupal can do more but requires someone who knows how to make it do so.

### Winner – WordPress

As most small business sites don’t require complex data and don’t have the budget or time to spend setting up a huge site WordPress is the better choice for most small businesses.

## 3.) Data collection

If the primary purpose of your site is data collection whether from surveys or some other purpose there are some important things to consider when deciding between WordPress and Drupal.

### WordPress

Out of the box WordPress simply doesn’t have the capability to accept data from site users. To do this you will need to add plug-ins such as [Contact Form 7](http://wordpress.org/extend/plugins/contact-form-7/ "Contact Form 7") or [Gravity Forms](https://www.e-junkie.com/ecom/gb.php?cl=54585&c=ib&aff=165410 "Gravity Forms") \_(affiliate link)\_ both of which I use on various sites.

Next you need to remember that all the major WordPress form plug-ins are designed primarily for contact forms (yes, there are always exceptions but few are well supported or full-featured). That is they are designed to take basic data from a site visitor and send it to an email address you control. If you want to moderate the data or save it for later analysis you are going to have to do it yourself or invest in something like [SurveyMonkey](http://www.surveymonkey.com/ "SurveyMonkey") or another 3rd-party hosted solution to do it for you.

### Drupal

The options for data collection in Drupal are many. You can set up event registration, surveys, reports, and more and even go as far as limiting who has access to the various input methods and how someone will receive the data.

Out of the box Drupal’s fields can allow you to create a custom content type editable by anyone you choose and controllable via workflow modules like [Maestro](http://drupal.org/project/maestro "Drupal Maestro"). For example, I manage a site that encourages the public to submit safety reports on accidents or incidents at the workplace. This data can be submitted by any employee and is then sent through a rather complex workflow to ensure that and issues are addressed and all who need the data can get it. I’ve also used Drupal for complex event registration allowing guests to apply and following them through legally mandated procedures leading up to the event.

In short, if you need to collect data Drupal can do it for you in whatever way works best for you.

### Winner – Drupal

Whether out of the box or with add-on modules Drupal can collect data in more ways and more efficiently than even the best WordPress solutions currently on the market. If you need more than a contact form then you need Drupal.

## 4.) The Network Site

For many organizations, particularly those in education or other situations in which individuals tend to generate their own data, a system to allow users to create their own website and content that can also be controlled from a single point can be a very powerful tool.

### WordPress

WordPress has a rather amazing feature built into it’s core called multi-site. When turned on users can register for their own site and be up and running with their own theme, plug-ins and more in only a few minutes. As long as the sites built aren’t too complex in their data needs WordPress multi-site can allow a single WordPress installation manage 1,000s of sites or more with the same 1-click updates and other features that make WordPress so attractive for any smaller site or blog.

For the administrator WordPress multi-site can allow for the control and moderation of many sites from a single point as long as those sites are somewhat related. The built-in user registration system allows for completely hands-off scalability and site creation but doesn’t really allow much control for individuality within individual sites. For example, all themes and plug-ins that a site owner can use must first be installed by an administrator and cannot be edited or modified in any way by the owner of an individual site. As long as your sites are related such as sites of faculty members in a university department or something similar this won’t be a problem but if your sites needs are diverse you may quickly hit a wall that can frustrate your users. It is this wall that makes sites such as WordPress.com so attractive for people getting started with blogging yet makes the same system seem very limiting for experienced bloggers or those who want more from their WordPress installation.

### Drupal

Like WordPress Drupal offers the ability to run multiple sites off a single installation right out of the box. Unlike WordPress however users can’t just register for a site and be up and running in a few seconds. Instead an administrator must manually set up the site and may in fact go as far as allowing custom themes, modules, and more. The only part of the system that transfers between sites in a Drupal multi-site installation is the code itself. Everything else is particular to the individual site.

If you’re network requires rapidly creating sites or the simplicity of WordPress’ multi-site than Drupal will probably be a disappointment. If however you have a need for multiple complex sites or a small amount of very different sites than Drupal’s multi-site is for you. Each site in a Drupal multi-site is a completely separate site as far as Drupal is concerned leading for the ability to run sites as varied as [whitehouse.gov](http://whitehouse.gov "The White House") and [aviation.siu.edu](https://aviation.siu.edu/) on the same installation.

### Winner – Tie

WordPress and Drupal both have very powerful multi-site capabilities designed for different things. If you’re looking for many similar sites and the ability for users to register their own site then WordPress is for you. If however you want to run different complex sites and don’t need the instant creation capabilities of WordPress then you will want to look at Drupal.

## Conclusion

Both WordPress and Drupal can be excellent choices depending on what you want to do. If you’re going for a blog or smaller site than WordPress is probably your best choice. If however you need complex data or workflows or you are going to taking in data from your users than Drupal might be best.

 [1]: /2011/01/drupal-7-vs-joomla-1-6/
 [2]: http://wordpress.org/extend/plugins/ "WordPress.org Plugin directory"