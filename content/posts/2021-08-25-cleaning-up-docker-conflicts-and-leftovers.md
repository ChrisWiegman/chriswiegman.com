---
title: Cleaning Up Docker Conflicts and Leftovers
type: post
date: 2021-08-25T13:10:45+00:00
url: /2021/08/cleaning-up-docker-conflicts-and-leftovers/
categories:
  - Technical
tags:
  - Docker
  - Local Development
  - Troubleshooting

---
[Docker][1] is a must-use technology for so many developers. It's a handy way to spin up nearly any service and is often required for working on most projects locally.

The problem with Docker is that it is way too easy to loose track of what you've done it it. Images, containers and more can add up create problems ranging from application conflicts to even the hard drive pace on your host machine.
Given the speed of today's internet, for many folks it's a good idea to clean out what you have in Docker periodically. I use Docker for all my work so at least once a week, on average, I clean out all the images, containers and other stuff from the Docker work I've done. This ensures that I'm always running the latest services and, with only 128GB on the hard drive of my work computer, ensures I don't have to worry about running out of space either.

Beyond just regular cleanup I often find myself recommending that teammates kill what they have in Docker to solve a conflict or other problem. Often this is much easier than trying to sort through a year of more worth of cruft accumulated during their own daily work.

I do this so much that I have to command I can run on my local machine to restore a clean state in docker. To get them, add the following to your _~/.zshrc_ or other shell profile.

<pre class="wp-block-code" aria-describedby="shcb-language-135" data-shcb-language-name="Bash" data-shcb-language-slug="bash"><span><code class="hljs language-bash">&lt;span class="hljs-built_in">alias&lt;/span> dsp=&lt;span class="hljs-string">"dka; docker system prune -a -f"&lt;/span>

&lt;span class="hljs-comment"># Kills all running docker containers and prunes all but the images&lt;/span>
&lt;span class="hljs-keyword">function&lt;/span> &lt;span class="hljs-function">&lt;span class="hljs-title">dka&lt;/span>&lt;/span>() {
    docker &lt;span class="hljs-built_in">kill&lt;/span> $(docker ps -q)
    docker container prune -f
    docker network prune -f
    docker volume prune -f
}</code></span><small class="shcb-language" id="shcb-language-135"><span class="shcb-language__label">Code language:</span> <span class="shcb-language__name">Bash</span> <span class="shcb-language__paren">(</span><span class="shcb-language__slug">bash</span><span class="shcb-language__paren">)</span></small></pre>

As I mentioned earlier, there are two commands here. The first to us is <span style="font-weight: 600;"><i>dka</i></span>. This kills all running docker containers and all their associated assets. It does leave all your images in place. This is a hugely handy command for when your system gets into a conflict or something else goes wrong with Docker. Run it and you can simply restart your app without having to re-download or rebuild any images.

The second command is <span style="font-weight: 600;"><i>dsp</i></span>. This runs the _dka_ command and follows it up with a [system prune][2] which will delete anything leftover, including all your docker images. Once you run this your Docker setup will be like new and you will need to re-download or rebuild all your images.

Out of all the customizations to my shell over the years, these two commands have been some of the most used as I often find myself running code from a range of repositories and techs during any given work week. With them I no longer worry about running out of resources nor about troubleshooting a bad state as it is faster to just reset and reload whatever environment I was working in locally.

 [1]: https://www.docker.com
 [2]: https://docs.docker.com/engine/reference/commandline/system_prune/