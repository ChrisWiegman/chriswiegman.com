---
title: A Few Tricks For Managing a FOSS Project
date: 2022-08-31T12:33:05+00:00
featured_image: /images/2021/11/my-office-2021.jpeg
draft: false
categories:
  - Technical
tags:
  - Open-source
  - Project Management
---

Running a FOSS (Free and Open-Source Software) project is hard. You have to deal with limited resources (even on a well-funded team) as well as the competing interests of the sponsors, developers, users and community at large. It can all get out of hand pretty quickly.

Ten years ago, when I was still developing [Better WP Security][1] on my own, I really failed at managing all of this. I never said "no" to almost any feature request and the support burden was enough that eventually [I had to sell the plugin][2] for my own sanity once I realized it had already done what I wanted it to do. Simply put, every FOSS product is the result of finding the right balance between competing interests and, if you can't find that balance, success will be very hard to find or manage.

Today I find myself managing another FOSS product, [Faust.js][3], with many of the same issues of competing interests competing for limited resources that I had 10 years ago. This time around I have a full, well-funded team around it to build it right, and, at least so far, we have far fewer users that Better WP Security did but we also have to deal with the business interests of the company that funds that team as well as the interests of users to build out a framework that simply hasn't been done before. It can get overwhelming fast.

Thankfully there is one thing I'm doing today that is very different from what I did with Better WP Security, that is being honest and upfront about the work we're doing and how we're doing it.

Like many software companies, my team works in 2-week sprints. These short blocks of work help us keep priorities in focus while also allowing us to stop, evaluate and modify anything that isn't working for us. For most FOSS projects this is where managing stakeholders, and their expectations, tends to fall short. For example, if all work is done internally then the community can't follow along or participate in the development. On the other hand, if all work is done in public then business and other interests of the organization sponsoring the project might not be met leading to product failure when the budget is pulled.

We've looked at a lot of ways to get around this. Today we work in Jira internally to keep everyone in the organization on informed about what we're doing. We also have implemented two changes in public that allow us to be as transparent as possible so that the community knows where the project is going. First, we have weekly GitHub refinements where we look through all new issues, discussions and other community content to ensure we are addressing each and every issue to the best of our ability. Eventually, if we're successful, this may need become someone's full-time job but we're not there yet. Addressing this as a team ensures nothing will be missed and that we'll be able to give each of our users the attention that they deserve.

The second change we've made is that we're making a [public blog post][4] about our progress and plans each and every sprint. This includes what we've done, what we plan to do as well as both the successes and failures we've seen over the past two weeks. It might not seem like much but it's already proven popular with our limited user base as, without it, our FOSS project could get lost in an organization with many projects, repos and more both in public and internally.

If you're running a FOSS project it's important to be as open about your plans as possible. Most projects fail at this, especially if the project itself is part of a bigger company. Regardless of where you're at, however, extra transparency will never be frowned upon. Try implementing it into your own routine and I promise you the effort will not be overlooked.

 [1]: https://wordpress.org/plugins/better-wp-security/
 [2]: /2014/08/why-i-sold-better-wp-security/
 [3]: https://faustjs.org
 [4]: https://faustjs.org/blog