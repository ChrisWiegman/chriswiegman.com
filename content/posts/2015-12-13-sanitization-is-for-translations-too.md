---
title: Sanitization is for Translations Too
date: 2015-12-13T18:58:56+00:00
draft: false
categories:
  - Technical
tags:
  - WordPress
---

As developers we rightly worry a lot about the quality of the code that makes it into our WordPress plugins and themes. This is good, when you can’t control what someone will do with your plugin you can’t know if it is leaving your users open to attacks. As much as we worry about the quality of our _code _though there is another area that we often forget about, translations.

### Translations are Necessary

If, as a developer, you want your plugin or theme to reach the most users one of the best things you can do to help it is to make it easier for translators to make your work available to people of other languages and cultures. For example, the single biggest catalyst to the success of the Better WP Security plugin when I was starting it was making it available in Hindi. It went from just a few thousand users to tens of thousands of users at seemingly warp speed simply by making it more available to the people who wanted it.

### Do you Know Your Translator?

The benefit of a translation is of course your work is now available in a new language to new people but one of the downsides of this is you probably don’t know who made the translation for you. Of course you could read through it and all but if it is in a different alphabet or different character set from what you’re used to finding the accuracy of the translation, much less other problems, is unlikely at best.

The functions many of use to build our translations including __\_(), \_e()_, etc are what we can use to make strings of text available for translation. While handy it is important to note that these functions, by themselves, don’t sanitize the data passed back through them as well as could be. Let’s look at the following example:

``` php
_e( ‘My <strong>AWESOME</strong> translated string’, ‘my-plugin-slug’ );
```

Seems innocent, right? All a translator has to do it replace that text and you’ve even included some markup for emphasis. Think about that though… _**You’ve included markup. If you can so can your translator.**_

What if, and I’m assuming an honest translator here, your translator used _</div>_ in their translated string? This little mistake could create havoc on a WordPress site by closing an important div on either the front or the back-end. Why if it went further? Believe it or not the following function will actually execute the JavaScript on a WordPress site:

``` php
_e( ‘<script>alert(1);</script>’, ‘better-yourls’ );
```

While WordPress.org might have scanners to pick up something nefarious like this in their repositories (as I write this I don’t know if that is true or not) there are plenty of places to get plugins and, if they’re translated, you’ll often find the translations are little more than acknowledged by the plugin author.

### There are Better Functions

Preventing issues like this is actually quite easy. In addition to the normal translation functions seen above WordPress also offers escaped versions as follows:

``` php
_e() => esc_html_e() or esc_attr_e()
__() => esc_html__() or esc_attr__()
etc (for a full list take a look at i18n.php)
```

The advantage here is that you can actually use secure versions of the translations strings that will prevent issues such as translation mistakes or even translation vulnerabilities just by switching out the translation function you use and doing so will take your code up one more level in its security.