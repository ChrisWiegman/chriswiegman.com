---
title: Blocksy vs GeneratePress
date: 2021-07-26T14:08:59+00:00
featured_image: /images/2021/07/blocksy-vs-generatepress.jpg
categories:
  - Technical
tags:
  - blocksy
  - GeneratePress
  - themes
---

Last week [I relaunched this site][1]. It was a big project for me, not so much in time but in the decision to stop building [my own theme][2] and embrace one of the truly excellent WordPress themes available on the market. Choosing the right theme wasn't easy. In the end it came down to two excellent themes, [GeneratePress][3] and [Blocksy][4]. Here's the story of how Blocksy vs GeneratePress shook out while building this site.

## Why choose a commercial theme?

Before I get into the merits of each theme I think it's only fair to discuss the requirements of the project for which I tested them. As you'll see below, both themes are excellent so it comes down, in a large part, to my needs as to why I chose one over the other.

### No child theme

First and foremost is I no longer want to maintain my own theme. This includes a child theme. Because of this I needed a theme that could look good without me having to extend it via code.

### As little CSS as possible

There are a number of themes that don't require a child theme but still need custom CSS in order to achieve the desired look. This is something I wanted to avoid. Given that, my choice needed to be able to look good to me without writing any custom CSS.

### Performant

Themes need to be performant. This isn't just about speed scores but about code that is well optimized throughout. I've seen a lot of bad WordPress code over the years so this one is important to me. The final site not only needs to be fast but also needs to have the smallest page weight that is realistically possible.

### Portable

It's way too easy to experience theme lock-in, especially with the many page builders on the market. This can make it very difficult to update a site's design later as well as contribute to performance, security and various other issues. Given that I wanted a theme that relies as much as possible on WordPress core features like menus, widgets, blocks and everything else. The ideal theme wouldn't just be usable itself but also must be easily removable later.

### Customizable

Finally, my choice has to be easily tweaked from within the WordPress dashboard. If I want to change the layout of an entire page or just part of one I want to be able to do so without a lot of code and in a manner that is easy to understand and implement.

## GeneratePress and Blocksy

Once I had criteria to look for it was time to find the themes that would meet my goals. After a lot of research I settles on two, [GeneratePress][3] and [Blocksy][4]. Both are well-support, modern themes with a number of customization options and an equal number of raving reviews from users and developers alike.

To make my final decision I actually purchased the premium version of both themes (and have not requested refunds as I believe in the work both developers are doing). While I probably didn't need the premium version of Blocksy I wanted to compare apples to apples as much as possible and both themes do have premium features I wound up making use of.

Finally, to compare the two themes I simply started building the site you see today in each and went with the theme that was able to more closely match my criteria of fast and customizable without extra code. It wasn't an easy choice though. Here is what I found with each theme.

### Reviewing GeneratePress

![GeneratePress](/images/2021/07/generatepress.png)

#### Pros

*  Good price
* Clean output
* No major marketing in the plugin
* Lots of sample sites to help get started
* Highly recommended in the WordPress community

#### Cons

* Really requires the premium version to do much
* Layouts aren't easily customized without extra code
* Documentation was not always easy to understand

GeneratePress would have been the perfect theme for the way I've built this site for the last 10+ years. It gives your site a great start that simply needs to be tweaked with a combination of CSS and extra code in a child theme. In the end, though, I was simply not able to get to a design I liked without more code than I wanted to write. For example, while layouts were easy to change for a whole page, the layout of content items such as posts was pretty much fixed and not really what I was looking for.

![The default grid layout in GeneratePress](/images/2021/07/generatepress-grid.jpg "The GeneratePress grid layout looks OK but there isn't a whole lot more customization I could do without additional code.")

GeneratePress would be the perfect theme if I was a freelancer building sites for clients. It's clean, light-weight, well supported and highly capable if you're willing to put in the code.

### Blocksy Review

![Blocksy](/images/2021/07/blocksy.png)

#### Pros

* Highly customizable
* Good documentation
* Lots of handy features
* Great search

#### Cons

*  Uses third-party marketing
* More expensive than GeneratePress

I don't remember where I first heard about Blocksy but I can say it was not as highly recommended as GeneratePress. That said, from the moment I activated it I found it to be much easier to work with and contain far more options to customize it without the code that GeneratePress needed.

![Blocksy's customizer is where the theme really shines. Look at all the elements you can tweak on the left!](/images/2021/07/blocksy-blog-layout.jpg "Blocksy's customizer is where the theme really shines. Look at all the elements you can tweak on the left!")

From the page layout to the layout of individual posts, Blocky just made editing the site design easy. When I was done I needed exactly 2 lines of CSS, both of which I was able to add in the WordPress customizer, to achieve the look I wanted.

What I don't like about Blocksy is its use of Freemius, an invasive service marketed to WordPress developers to help sell their plugins or themes. I don't mind paying for a product I'll use but I do not like seeing follow-up surveys and other garbage in my email from such services after I do so.

![Blocksy's onboarding screen where it wants to give your data to a third party.](/images/2021/07/blocksy-onboarding-2.png "Blocksy's onboarding screen where it wants to give your data to a third party.")

In addition, while I found Blocksy was better able to meet my initial criteria, it wasn't without some strange bugs. Granted I might have found more bugs in GeneratePress had I been able to get further with it, but the bugs in Blocksy were often rather obvious. For example, the header kept flipping the position of the menu and search icon throughout the build and I never could get some of the sharing buttons to work. These weren't dealbreakers but they could definitely get annoying at times.

## Blocksy vs GeneratePress: Which theme is right for you

You're not going to go wrong with either of these great themes. Each, however, shines in a slightly different way. For a traditional developer that wants to get their hands dirty with code I think GeneratePress is the stronger option as its more minimal features out of the box are perfect for sculpting into your masterpiece. If you just want to install a theme and get going, however, Blocksy is the better option. There are few elements on a site it can't tweak and it offers a wide array of features and customizations that mean you won't need to go looking for plugins or even a developer to supplement your site build.

Don't just take my word for it though, take them both for a test-drive yourself.

[Get Blocksy][4]

[Get GeneratePress][3]

 [1]: /2021/07/its-time-for-a-new-site-2/
 [2]: /2021/04/creating-a-minimal-wordpress-theme-in-the-era-of-gutenberg/
 [3]: https://generatepress.com
 [4]: https://creativethemes.com/blocksy/