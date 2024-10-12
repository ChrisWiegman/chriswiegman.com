---
title: Drupal 7 vs Joomla 1.6
type: post
date: 2011-01-11T05:00:00+00:00
url: /2011/01/drupal-7-vs-joomla-1-6/
categories:
  - Technical
tags:
  - Development Tools

---
<div class="wp-block-image">
  <figure class="alignright"><img decoding="async" src="/images/2011/01/Drupal-vs-Joomla-195x225-1.jpg" alt="Drupal vs Joomla" class="wp-image-2216" title="Drupal vs Joomla" /></figure>
</div>

We’re only in the second week of the new year and already us web CMS geeks have a lot to keep us busy. First, last week [Drupal][1] released the long awaited Drupal 7 and today [Joomla][2] 1.6 was released. Both are major upgrades to some of the most popular CMS system. As I’m not someone who is ever married to a tech product and I believe each contender must be re-evaluated with the release of a major update I’ve decided I need to re-evaluate both for the lead role as my CMS of choice for larger products. I’ve been using Drupal 6 for some time, but perhaps Joomla has finally caught up.

My criteria is based on my primary use for our current CMS as a higher-ed recruiting website that must be available to all and easy to edit by those who control the information. In addition, it must be easy to maintain especially in the area of security updates.

### Installation

#### Joomla – 8

<img loading="lazy" decoding="async" class="size-medium wp-image-2218 " title="Joomla Web Installer" src="/images/2011/01/Joomla-Web-Installer-225x190-1.jpg" alt="Joomla Web Installer" width="225" height="190" /> The placement of the sample data installer leaves a little to be desired

Joomla’s installation is pretty straight forward. First make sure your database and hosting space is available, copy the files to your server, open the site in a browser, and follow the instructions on the screen. There are only two usability issues I see in the process. First, it asks for FTP credentials for “some” servers (it indicates you may not need them). If you’re using SSH however instead of FTP for file transfer and need this feature (I’ve installed on many servers and have never found one that needs it) you are out of luck. Second, if you’re going fast it may be easy to miss the sample data installer (see graphic) as it is not on it’s own page and is instead included at the bottom of the main configuration page. For beginners installing sample data can be handy as it gives you a sample set of data to see where everything is and provide an example of how you might want to set up your own data. What is nice however is the ability to provide the meta description and keywords for the site directly in the installer thus eliminating the need to do so later.

When the installer is complete you must finally delete (or rename) the installation folder on your host. You can access the front end without doing so, but you will not be able to administer the site until it is gone.

Overall the experience of installing Joomla is on par with that of Drupal, WordPress, and other popular CMS systems. All require one to carefully read the instructions on screen and, with the exception of WordPress, to still perform some actions with the filesystem once the installer has completed.

#### Drupal – 7

<img loading="lazy" decoding="async" class="size-medium wp-image-2221 " title="Drupal Installation" src="/images/2011/01/Drupal-Installation-225x193-1.png" alt="Drupal Installation" width="225" height="193" /> Select a Drupal installation profile

Like Joomla, installing Drupal is rather easy. First the user must copy the files to their host. Next though Drupal adds a rather strange requirement that the user copy the default settings file and rename it in order to continue the installation. This could be a problem for newbies unfamiliar with the file system as it takes a little more than just moving files and deleting extras.

The installation scripts for Drupal are also nice and simple. Before anything it asks if the user would like a “standard” or “minimal” install. These choices decide which modules will be activated upon installation. This selection, called an installation profile, allows advanced users to disable any core modules that are not required and new users to enable many of the most commonly used modules. Experienced users can also use a different installation profile at this point which can automatically install and configure a Drupal site for a variety of functions.

Next database information is requested like all sites and finally the user can enter some site details. As a positive the installer allows for a separate email address for the site and for the administrator account which can make administration easy later. On the downside however, unlike Joomla you cannot enter meta data on the site at this point and will in fact have to install a module to do so later. You can also turn on update checks in the installer and configure update emails. This is one of Drupal’s strengths as site admins will quickly be notified of any updates to core or contributed modules.

Finally, when the installer script is complete you are finished. There is nothing to delete as their is in Joomla.

### Administration

#### Joomla -4

<img loading="lazy" decoding="async" class="size-medium wp-image-2223 " title="Joomla Administration Screen" src="/images/2011/01/Joomla-Administration-Screen-225x186-1.png" alt="Joomla Administration Screen" width="225" height="186" /> The main Joomla administration screen

First I have to point out that Joomla’s administration has gotten better since 1.5 (which in fact seems to be one of the major goals of the project). Like previous versions it requires a separate backend similar to that of WordPress in which all functions are stored.

Paging through the system options will be very familiar to those who used Joomla 1.5. Like 1.5 however the available options seem rather sparse and really don’t allow the same level control over the system as other products.

User administration is another big push of Joomla 1.6. In particular an ACL system has been implemented to allow for fine-tuned permission control over groups of users. This is a major upgrade from Joomla 1.5 however it still needs some work. On a macro level it does a good job preventing and granting access to large sections of the site and related tasks. On a micro level however it is difficult to manage access for individual settings and content access. For instance, you cannot allow someone to simply change the site meta information without granting them access to many other functions. On top of that content permissions are not found in the same place as other permissions and, in the case of an article, permissions are so fine-tuned that on a large site there seems to be a lot of room for error.

In effect it is as if ACL was only created for content and it was assumed whoever can edit content can also administer at least most of the site. While this is still a giant leap from previous versions it does leave a lot to be desired in comparison with Drupal.

One update I’m disappointed not to see at this point is a multi-site capability. With Joomla 1.6 Admins will still have to create and manage completely separate installs for each site. This could be a major obstacle for many as although this feature is available with extensions I have never seen it successfully deployed with results anywhere near that of Drupal or WordPress.

Finally, no server administration is complete without the ability to quickly recognize the need for updates and then to be able to quickly update core, extensions, etc. This is one of the most important upgrades in Joomla 1.6. It now has the ability to tell you when an update is required and to download and update the extension in a similar fashion to WordPress. As a side note however I have not been able to test this functionality and the documentation is so far nearly non-existent. If it works as rumored however it will make updating even easier than that of Drupal and will go a long way to helping administrators maintain their sites.

#### Drupal – 9

<img loading="lazy" decoding="async" class="size-medium wp-image-2225 " title="Drupal System Status Report" src="/images/2011/01/Drupal-System-Status-Report-225x193-1.png" alt="Drupal System Status Report" width="225" height="193" /> Drupal System Status Report

Administration is one place where Drupal shines. From reports on system status to updates Drupal makes a site administrators life very easy.

In this area there really isn’t a wh0le lot of new features in Drupal 7, for that matter there doesn’t really need to be. ACL is still present and does an excellent job both at the macro and micro levels. Multi-site capability is built in, although not as easy to use as WordPress, and updates and other reports provide a wealth of information applicable to the maintenance of the site not just to developing new themes.

On a downside updates are not as easy to apply. Files must be manually copied to the server and then a separate upgrade script must be ran. I would have hoped this would have been made easier with the usability push in Drupal 7, but unfortunately that has not yet come to pass.

One notable new core feature on Drupal 7 is the ability to assign an “administrator” role automatically. When chosen this role will automatically be granted all available permissions including those of new modules and other features. This can be very handy in sites in which there is more than one site administrator as previously it was easy to forget a permission and spend time trying to figure out why and admin can’t do what he or she needs to do.

### Code

#### Joomla – 5

For once Code seems to have been a priority with Joomla 1.6. It appears Joomla has reduced the amount of code by about 35% and taken measures to document what was there. However after looking though the code and API myself I still find it inferior to that of Drupal or WordPress. It still seems that code and development are after thoughts in Joomla and could really use some TLC. The real test for this will be done with time however in the number of reported security and other bugs. Joomla 1.5 really had problems in this area and on a campus in which Joomla is the CMS of choice for nearly all using a CMS this has lead to many security problems.

#### Drupal – 9

Drupal’s code base, API, and documentation have excelled for a long time. Features are well documented, core features are easy to override, and quality help is quickly available through Drupal.org. In all this little has changed with the release of Drupal 7. It is a developer’s system.

The only new addition here of note is the new Drupal Database API making calls to the database backend much easier and more efficient. I have not yet tried this myself in module development but I look forward to in the future.

### Expandability

#### Joomla – 9

Extensibility is one area where Joomla really excells (but with a bit of a price). Joomla was designed for theme builders. That logic is evident throughout the code, the documentation, the API and more. As such there are some really amazing themes allowing site builders to get a very nice looking site up very quickly.

Joomla is also blessed with a very large number of add on extensions providing a number of features not in core. With items such as K2 and others the functionality of Joomla can go quite far in making a really good site with a minimal amount of code.

Most of Joomla’s addons are not without problems however as they seem to follow the model of design first, develop later that I see throughout the Joomla community. From themes that don’t validate or meet accessibility minimums to extensions that leave security holes the size of the grand canyon it is clear that Joomla with little done to address the development of addons with Joomla 1.6 that many of the same problems present in the past will not go away anytime soon.

Finally, extension management in Joomla is not all that straight forward. The extension list alone makes finding what you need and managing it a challenge. The list from core alone can make finding your new add-on difficult and then configuring the add-ons ACL and other properties are less than intuitive leaving a lot of room for error.

#### Drupal – 6

Like Joomla and other systems Drupal has a range of add-on modules to help build in features not available in core. In fact, so much of Drupal is done through addons that one of the big complaints I often here of Drupal is the lack of features available in the core system. Nearly all of the add-ons for Drupal can be found on Drupal.org and have some level of oversight especially upon initial release. This keeps the quality of code relatively higher than that of the competition.

The oversight of Drupal’s code, while a strength for some, is also one of it’s weaknesses. Although nearly any feature can be found with a module, available themes are another story. It has not really been until recently that high-quality commercial themes have been available. To get a site up and running quickly. In their place Drupal tends to push frameworks such as Zen and Fusion which force the user to create their own theme and can greatly slow the development of a Drupal site.

### Usability

#### Joomla – 2

Usability in Joomla still leaves a lot to be desired. The content system is still difficult to comprehend for new users and almost impossible to teach to someone who is not already versed in content management. The workflow just isn’t up to par for a site in which changes must be made frequently. From creating and placing an article to modifying a menu item any change really has to go back to someone who works with the system on a regular basis. In addition, documentation of fields an forms is rather lacking and makes already un-intuitive tasks that much more difficult. Finally, keeping consistent formatting within articles of various types (job postings, news articles, etc) is made very difficult with a seemingly one-size-fits-all approach to content. This might be great for small sites with a few static pages, but on a site with numerous different types of content and numerous maintainers of that content this could quickly become a nightmare.

For example on my test site I spent nearly 30 minutes this morning teaching one of our editors (who I am very grateful to for volunteering) on how to add an article to a news page. She is neither a Drupal or Joomla user. Getting to the end product was so un-intuitive that she was getting visibly frustrated after about 10 minutes. In a situation in which I would have to train numerous people to edit various sections of the site this would get extremely difficult.

Joomla is not however completely without merit. The inclusion of TinyMCE in core allows for easier deployment of small sites by those who don’t know HTML. To be functional in more situations I still believe the lack of control over the editor is limiting, but it’s inclusion is a positive that could make the product more usable to newbies. In fact for the simplest of static sites the lack of options and multitude of content extensions in core make it a solid choice for small business and other very simple sites. As soon as a site adds any complexity however usability drops off to almost zero and requires a skillset not found in the bulk of users the average CMS tends to target.

#### Drupal – 8

The usability of Drupal 7 is probably the single greatest improvement over Drupal 6. Everything from menus to individual form fiends feels much more friendly and provides ways to get the user the information they want in the manner in which they want to receive it. From workflow to administrative tasks nearly everything is quickly available, highly configurable, and, for administrators, able to be automated via the cron system.

As per the example I tried in Joomla, creating a new article, in Drupal it was much easier for the user to accomplish. From login to create content and saving it took us only about 5 minutes with no frustration at all. It was simply easier for the user to handle the workflow especially when looking at the content types available in Drupal. There is no article-content-section stuff. Instead the user simply created a story and it automatically went where it was supposed to go without manipulating menus or other items.

While usability is better in the long run with content types, workflows, etc out of the box it can be a little confusing to a new administrator. Each content type needs to be created and configured separately. Permissions and other settings need to be set, and many common features such as a WYSISYG editor need to be installed with extra modules. Taken together this can really slow the development of a new site, even a very simple one.

Once initial setup is completed however Drupal is nearly as easy to maintain as WordPress and for many content contributors can even be much easier via simplified workflows and the combing of the backend and frontend sections of the site. In all this makes the long-term usability of Drupal far better than nearly every product I have worked with.

### Conclusion

#### Drupal – 39, Joomla – 28

#### Winner: Drupal

In the end Drupal is still a vastly superior product to Joomla. Joomla has made some inroads but still seems to be a product built only for themers and while that might work for some it quickly leaves many beating their head against the wall in frustration.

To me one of the best metrics I’ve seen elsewhere with the 2 products are not how many initially install them, but how many are still using them 2 years later. In the case of Joomla my experience has always been that few are still using it 2 years later and have instead moved on to something more powerful. In the case of Drupal however I see many people still using Drupal after 2 or more years and have in fact become much bigger fans of the product. In both cases the adoption of a given CMS was based only on rapid development of a sight with little thought given to later maintenance or usability, and in that case Joomla is a clear leader. For sites however that have planned ahead Drupal seems to be a solid choice both from the start and later after the needs have changed or expanded. In this area Drupal has a large advantage.

Will this change with the new releases? While possible with the addition of Joomla’s new administrative features, I really don’t see it happening. The latest releases of both products confirm to me something I’ve said for a long time: for small sites and blogs WordPress is the way to go and for everything else there is Drupal. Joomla continues to be a product who’s niche is impatience and that can only carry one so far.

 [1]: http://www.drupal.org
 [2]: http://www.joomla.org