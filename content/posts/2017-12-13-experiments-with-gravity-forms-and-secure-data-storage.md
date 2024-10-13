---
title: Experiments With Gravity Forms and Secure Data Storage
date: 2017-12-13T00:00:00+00:00
categories:
  - Technical
tags:
  - Privacy
  - Security
  - WordPress
---

One of the best aspects of my job at [UF Health][1] is we get to experiment and push boundaries if it means advancing the interests of our customers (in our case “customers” are the departments, labs and other units that build sites on one of our WordPress platforms.
One of the tasks I’ve been asked to look into involves two parts:

1. Allow for personal data to be accepted via [Gravity Forms](https://www.gravityforms.com/) while meeting full HIPAA/FERPA compliance
2. Allow for individual groups on our [BuddyPress](https://www.gravityforms.com/) intranet to handle personal and other sensitive data to meet HIPAA/FERPA compliance.

While the latter is, I must admit, still a work in progress I have been able to make a working proof of concept that would allow for secure storage of Gravity Forms entries that will, hopefully, be able to meet our regulatory requirements.

## Here’s how it works:

First, we’ve setup data storage by creating an account on [innovault.io][2]. This is a new service from the folks at [Tozny][3] that aims to make encrypted storage as easy for developers as accepting payments through a service such as Stripe or something similar.

To handle our credentials I build a simple Gravity Forms add-on that can add these credentials to an individual form. This is a bit different than many services Gravity Forms interacts with where credentials would be entered into the main plugin settings for all forms. We do it this way to make sure that data from any given form is completely isolated from any other form.

Once a form has its credentials we can rely on two main hooks to pull out the data that will be sent to the innovault service. First _gform\_pre\_submission_ is used to replace all the $_POST values submitted by the user with filler text that will be stored in the WordPress database. Ideally I would like to remove the data here entirely but the fields still need proper placeholders for the form to save. For the data we replace we save it to a local array that will soon be written to innovault.

Once we’ve pulled the secure data and replaced it will filler we use the _gform\_after\_submission_ hook to grab the entry id, attach it to the secure data as meta information that won’t be encrypted, and send it along with our secure data back to innovault. At this point our data lives only in the secure data store and our local MySQL database has never seen any of it. In addition, innovault has our important data encrypted and associated with the original entry id which will make retrieving later that much easier.

Finally we use the _gform\_entry\_field_value_ filter to look at each field as it’s displayed in a single view (the table view only shows the encrypted data) and replace it with the data from innovault.

While not fullproof, or even complete yet, the results so far are quite promising. We’re now able to store sensitive information, gathered from Gravity Forms, in a secure location only accessible when viewing but an appropriate site administrator. This opens up all kinds of possibilities for us that will help everyone from our students to faculty and staff with techniques to provide data that is simply unavailable currently.

Only downside, as I mentioned before this is just a proof of concept right now. It is showing promise though and I’ve talked to a number of people who could use a similar solution for their own sites. As such we’ve put the project on our GitHub page. We would love your feedback and/or pull requests if this is something you’re looking at implementing yourself.

**[Check out the project here.][4]**

 [1]: https://ufhealth.org/
 [2]: https://innovault.io/
 [3]: https://tozny.com/
 [4]: https://github.com/UFHealth/ufhealth-gravityforms-secure-storage/tree/develop