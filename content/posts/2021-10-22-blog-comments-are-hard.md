---
title: Blog Comments Are Hard
type: post
date: 2021-10-22T12:09:49+00:00
url: /2021/10/blog-comments-are-hard/
featured_image: /images/2021/10/blog-comments-are-hard.png
categories:
  - Technical
tags:
  - Blogging

---
In August [I turned comments back on][1] for this site. While I had used them, and found them beneficial, in the past, when I moved to Hugo there was just no good solution for keeping them around.
While there are a lot of opinions on blog comments being obsolete, and I justified their removal from this site with similar rhetoric, the fact is I still find them valuable. They simply provide a human connection to my work that no other medium can provide.

Bringing comments back, however, has not been free. In fact, I would say Blog comments have proven to be one of the most expensive features I've implemented on any site. Doing them right is hard.

## The costs of blog comments

There are two primary costs of blog comments. First is the moderation cost in keeping out spam and other unwanted comments. Second is the engagement cost. Building a community of people who regularly comment, and giving them the power to manage their own comments, takes more than just turning on the feature on your blog.

Beyond the primary costs there is also the cost that comes with processing and storing the comments themselves. As cheap as a comment can be, they still are processed like any other content and this alone can slow a site if not handled correctly.

Finally there's the privacy risk. While not a cost in the same manner as the rest there is a risk in modern comments as they often require information such as email address and more from those who use it.

## The return on investment

Taken in aggregate, there can be some pretty heavy costs involved in processing comments on your site, especially if you're lucky enough to have a popular site with a lot of traffic. Why bother at all?

The answer is simple: community. Before I removed the old comments there were a number of regular commenters that would regularly engage with my posts. They provided feedback to me, offered more for readers and generally helped turn my posts into conversations.

Once I took out comments all of that was gone. I tried directing people to social media, which helped some, but it wasn't the same as a well-thought-out comment that really adds something to the original post. In the end this is why I've turned comments back on. There is just no replacement for that type of engagement.

No, they aren't as regular as they once were, but they're coming back. I will never, however, be able to rebuild what had once been here and that is a loss that has cost me far more than managing the comments themselves.

## Reducing the costs of comments {#h-reducing-the-costs-of-comments.wp-block-heading}

So how can we reduce the costs on blog comments? I've done it with 2 plugins.

First is [Akismet][2] by Automattic. This spam plugin blocks an average of 30-40 spam comments a day (so far) and hasn't missed one yet. I've found, both with my current comments submissions and the old submissions, that on my modest blog Akismet completely removes the burden of manual moderation. I realize that won't be the case for everyone but I do think everyone can benefit from giving it a chance.

Second is [Jetpack][3]. This is another Automattic plugin that helps the community aspect of comments by allowing commenters to subscribe to new comments via email. While I don't have stats from the last two months, historically this was an incredibly useful feature as a good number of the comments I get are actually questions about something in the post itself. Adding comment subscriptions simply helps ensure the reader will actually get an an answer to such a question.

Finally, write a good [privacy policy][4] to make sure your users know what you're collecting and why. You can combine this by also tweaking Jetpack so that it only involves the features you need without the heavy bloat it can produce if you're not careful.

Together these plugins, and a good privacy policy, reduce the moderation load to nearly nothing, allow for much better interaction which makes comments more valuable to my readers and even offloads some of the work from my host to WordPress.com. Done.

Comments are still hard, but it doesn't take much to make them much less so.

 [1]: /2021/08/comments-are-back/
 [2]: https://akismet.com/
 [3]: https://jetpack.com/
 [4]: /policies/