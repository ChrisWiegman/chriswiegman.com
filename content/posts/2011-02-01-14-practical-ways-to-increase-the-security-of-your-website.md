---
title: 14 Practical Ways to Increase the Security of Your Website
type: post
date: 2011-02-01T05:00:00+00:00
url: /2011/02/14-practical-ways-to-increase-the-security-of-your-website/
categories:
  - Technical
tags:
  - Web Development

---
As like most web professionals security of my sites is something I have to worry about on a daily basis. Whether it be an attempt to get credentials for other sites or a content injection attack that tries to turn your site into the latest pharmacy there are a lot of people out there to get you.

Given the risks and the many techniques to prevent attack I spend a lot of time both researching and discussing web security even writing some of my own software to help with holes I find to be just too big. As such, while I don’t consider myself an expert in the field (it is one of many hats I wear) I do take pride in what I’ve been able to accomplish so far. As such, here are some practical pointers to consider for security of your own site and your own webserver.

<ol class="wp-block-list">
  <li>
    The world should not be able to write to your files<br />While this may seem obvious to some it is not uncommon to find full read/write permissions (0777) on all files on a given website. This means that anyone can write to them given the write conditions and can therefore change what is on your site for malicious purposes.
  </li>
  <li>
    The owner of the files should be able to update and write to those files<br />This is the opposite of my first point. While you don’t want anyone to be able to write to the site, those who manage the site should be able to write to the files themselves. Failure to allow this permission can result in software not being updated which as we all know can lead to some major security holes. A good compromise for settings is allowing everyone to read/execute files and only the owner of the files to write them (0755 on *nix systems).
  </li>
  <li>
    Keep your software up to date<br />Just as on your Windows or other computer, keeping your web software up to date can go a long way to securing your site. &nbsp;Whether you use <a href="http://www.wordpress.org">WordPress</a>, <a href="http://www.drupal.org" target="_blank" rel="noopener noreferrer">Drupal</a>, or any other system it is vitally important to make sure the latest versions of your software have been installed and are functional in order to prevent attack.
  </li>
  <li>
    Remove unwanted addons and software<br />Whether you’re talking about <a href="http://www.wordpress.org" target="_blank" rel="noopener noreferrer">WordPress</a> or the Apache server itself always remove what you are not using. Keeping around unused <a href="http://www.wordpress.org" target="_blank" rel="noopener noreferrer">WordPress</a> modules or extra running services on your server can lead to many holes you might not ven know are there.
  </li>
  <li>
    Delete extra users<br />Keeping around an old editor’s or administrator’s account may seem like a good idea should that person ever be called upon again, but in reality it is just another avenue for someone to gain access to your site. Delete those users that aren’t needed. They can always be re-added later.
  </li>
  <li>
    Look for problems<br />Don’t wait for someone to point out a problem to you. Instead look for it yourself. For example in my work I often perform Google searches for terms such as “SIU cialis” and “SIU viagra.” As hackers often put hidden links on your site to boost their Google rankings searching for terms like this can help you find problems you might not even know you have
  </li>
  <li>
    Isolate your sites<br />If you’re running a server with multiple websites those websites do NOT have to execute code under the same user. For example with PHP you can use fastcgi and <a href="http://en.wikipedia.org/wiki/SuEXEC" target="_blank" rel="noopener noreferrer">suexec</a> to force every site to execute PHP code under a different user. Thereby if one account is compromised the rest of the sites on the server will be safe.
  </li>
  <li>
    Isolate your databases<br />Running all your sites with a single database or the same username/password might seem to make things easier, but it’s opening you up to a lot of problems should that account be compromised. Take for example in which a system user account is compromised for a small, mostly forgotten site. Even assuming your files are safe by using fastcgi and suexec if you have a common database password the attacker can still destroy every single site on your server. Use strong database passwords and use a different username/password for each site.
  </li>
  <li>
    Don’t expose services the public doesn’t need<br />In some environments, particularly places like universities, you might have the advantage of a firewall that can block all but what needs to be allowed out. If you’re lucky enough to have this take advantage of it. Don’t allow the public access to administrative sites or services such as phpmyadmin, ftp, or ssh. Leave those behind the firewall and only allow out what the public absolutely must have. If you’re not lucky enough to have an expensive firewall between the world and your server there are still things you can do. Use Apache to turn off admin sites when you won’t need them. Turn off other services or obscure them on non-standard IP ports, etc. Each item you turn off is one less item people can attack you with.
  </li>
  <li>
    Watch your logs<br />A lot of information can be gathered from your server logs. Use a program like <a href="http://awstats.sourceforge.net/" target="_blank" rel="noopener noreferrer">AWStats</a> to look for anomalies that might indicate a problem. For example, if your site only averages a few hits a day from the local community and you suddenly find it getting thousands from a third world country you might have a problem. In addition, looking at items like 404 errors can reveal attempts on your site if you suddenly see a 404 spike or many long urls that might not make sense on first look.
  </li>
  <li>
    Don’t be afraid to blacklist<br />If someone is&nbsp;harassing&nbsp;you either through the logs or otherwise don’t be afraid to blacklist their address to prevent access to your site. Not only can this reduce malicious attacks, but it can greatly reduce the amount of spam you receive as well.
  </li>
  <li>
    Backup<br />Gone are the days &nbsp;when an expensive tape setup took hours to back everything up. Using built-in tools like mysqldump can backup you entire database quickly and accurately. Then programs such as <a href="http://www.jungledisk.com" target="_blank" rel="noopener noreferrer">jungledisk</a> or even the simple <a href="http://en.wikipedia.org/wiki/Rsync" target="_blank" rel="noopener noreferrer">rsync</a> can back both the mysql dump files as well as all the files in your website up to a remote machine quickly and very cheaply (I pay less than $10 a month for my entire web and file servers at work).
  </li>
  <li>
    Different is good<br />When it comes to security, different is good. &nbsp;If you’re using software like WordPress or Drupal change the default username. Use different folders where you can and make the database table prefix something other than the default. This will make it harder for an attacker to get into your site as many casual attacks are based off familiarity with the software.
  </li>
  <li>
    Ask Question and Keep Reading<br />Probably the most important thing you can do to keep your site or server safe is to build your knowledge of it’s security. Even a rudimentary knowledge level can stop most attackers dead in their tracks. When you do find a problem ask for help. No one can know all there is to know about security and two heads are most definitely better than one.
  </li>
</ol>