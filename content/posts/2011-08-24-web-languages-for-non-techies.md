---
title: Web Languages For Non-techies
date: 2011-08-24T04:00:00+00:00
categories:
  - Technical
tags:
  - Web Development
---

Getting your site on the web can often resemble shopping at an international market in a major city. Their are so many languages being spoken and so many seemingly exotic products that figuring it all out can resemble an impossible task. What are these languages anyway? Most have heard of HTML, but what is all this other stuff? Should we use one over the other? Do we need them all? Here’s a quick dictionary of sorts defining the languages that make up the core of a modern small business websites.

### HTML

HTML stands for HyperText Markup Language and is the language used to mark up the text that makes up a web page. All web pages, at their heart, are really just text files (for an example, right-click on any page and select “view source”). That is, they are just a collection of the letters, numbers, and symbols found on a normal keyboard. HTML is a way of marking individual parts of that file so that they stand out from the rest. For example, if you have 6 lines of text and want to specify the first line as a heading you would mark it like this: \<h1\>The Heading\</h1\>. In this case the carrots start a mark, known as a tag. H1 defines a first level heading (headings can be nested up to 6 levels deep) and the </h1> indicates where to end the heading.

In addition to marking up parts of your text, HTML is also useful for specifying elements such as media and audio that we want to include with our text. For example, we cannot specify a photo with our keyboard but we can include an \<img\> tag to define the photo in our HTML document. Once downloaded, a file containing HTML is processed by the browser which looks at each tag and acts accordingly by downloading the other files listed by the various tags.

HTML really is the heart of the web. If you wanted to you could write an entire website using only HTML and nothing else. In fact, the other languages used on the web are really just used to enhance the HTML of your page with various features and formatting. Whether you are creating your site with Dreamweaver, WordPress, notepad, or anything else the end result is that the user will download the HTML first and then format and modify it using various other languages.

Currently, modern browsers support [HTML 5](http://en.wikipedia.org/wiki/HTML5 "HTML5 on Wikipedia").This is the most recent usable version of HTML and provides tags for everything from basic formatting to sections of your website including <header>, <article>, and <footer> tags to links to other pages and media such as images and video.

For more information on HTML and the tags available take a look at the [W3C](http://www.w3.org/ "W3C"). This is the organization that officially defines the HTML language.

### CSS

CSS, or Cascading Style Sheets, is the language used to apply formatting to an HTML document. It defines rules used to format each of the tags used in our markup. For example, it can change the size of a heading, apply a background to our document or specify columns and other areas of our site.

10 years ago if you wanted to make your text bold you would use a <b></b> tag around the text in your HTML. While this was effective it was also very limiting. Today it is still possible to apply some formatting with HTML but it is much more common to move all of it into a CSS style sheet. For example, let’s say you want everything in your <footer> tag to be bold. You could define a CSS rule like this: footer {font-weight: bold;}. This would ensure that all text in the footer, regardless of what other tags are used, displays in a bold font. To do this in HTML you would have needed separate <b></b (or <strong></strong> tags throughout the footer.

CSS is an extremely powerful tool. It can control everything from the layout of your site by setting columns, backgrounds, and colors, to how an individual tag such as a link displays throughout your site. While a really well done site requires no CSS to be readable, the best sites will use CSS to increase usability by making the site far more pleasing to the user.

As with HTML the user’s browser determines how to interpret the CSS rules after downloading them. The trick here is that each browser, in particular Internet Explorer, tends to interpret CSS rules a little differently. It is this phenomenon that causes pages to look different when viewed from different browsers or computers and can make writing good style sheets more difficult.

### Javascript

Once we have an HTML document that has a Stylesheet making it look great the next thing we might want to do is build in a little interactivity. From drop-down menus to popup adds and more Javascript is language can add this dimension of interactivity to our websites.

Javascipt (not to be confused with the Java language by Oracle) is a programming language that can manipulate an HTML document once it is already loaded. Examples of this are abundant. Just look at what happens when you leave a comment on Facebook or another social network. By definition of what we talked about with HTML we should have to completely download a new page to see our comment, right? Javascript is the language that makes it possible to modify the HTML and CSS we already downloaded so that we don’t have to download the whole page again. It can insert, edit, or remove lines of HTML and/or CSS in a document to provide the user with a much more usable experience.

Like HTML and CSS, Javascript is read and interpreted by the user’s browser. This is how it can modify a page for the user only. As it runs on the user’s computer it can modify data without affecting other users on the site. Unlike CSS or HTML which make use of rules and tags to display text, Javascript is a full programming language that can make use of more complex logic to modify the current page based on various triggers. When viewed these triggers and other logic look just like most other modern programming languages with statements like “if this then that,” “while” loop, and other traditional programming statements.

### PHP/ASP.NET/JAVA

Finally, the next language, or really set of languages we need to be able to identify are those that run on the server itself. Up to this point everything we talked about is downloaded by a user’s browser and then run by that browser. While we can create all the necessary code by hand for such a site it is far easier to instead connect the site with a popular database program and then generate the HTML and other downloadable content only when the user accesses the page in question.

Enter server-side programming. Each of these languages: PHP, JAVA, ASP.NET (which is really a collection of languages), RUBY, etc are never directly seen by a user. They do their work on the server before a single byte of data is sent to the browser. These are the languages that create the HTML, CSS, and Javascript that the user then downloads. For example:

< ?php if ($user == "bob") { echo "Hello Bob”; } else { echo “You’re Not Bob“; } ?>

In the above code, which is saved as a text file on the server just like an HTML file, we start by declaring the php with <?php. This tells the server that all the code until we reach ?> is PHP and that it needs to be processed. The next line, the if statement tells the server to look to see if the user is bob. If it is bob then the server writes the HTML <h1>Hello Bob</h1>. If not the server writes the HTML </h1>You’re not Bob</h1>. In either case the user accessing the page only sees the end result and never the code itself.

A larger example of this is [WordPress](http://www.wordpress.org "Wordpress"). When you generate a page or post in WordPress you type in the content in a text editor and save it to a database. So where does the rest of the page including the sidebar, menus, footer, etc come in? When a user visits your page the server executes a program written in PHP that puts together the content you wrote in the editor with all the other elements of your site and returns them as an HTML document (with the associated CSS and Javascript) to the user.

Languages such as PHP allow a site to produce thousands of pages or more without having to replicate all the elements of the page. While there are many languages that can be used here, the most common is PHP which runs WordPress, Facebook, and a host of other sites. Other examples include ASP.NET which is actually a framework made up of a couple of programming languages used by Microsoft on their webserver, JAVA, Ruby, Python, and a score of others.

While you will probably use one of these with your site it is often not important to know all the details other than making sure the one language you want to use is supported by your web host. Typically the server0side language you use will be determined by the software you decide to use.