---
title: Cleaning Up Docker Conflicts and Leftovers
date: 2021-08-25T13:10:45+00:00
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

``` bash
alias dsp="dka; docker system prune -a -f"
# Kills all running docker containers and prunes all but the images
function dka() {
    docker kill $(docker ps -q)
    docker container prune -f
    docker network prune -f
    docker volume prune -f
}
```

As I mentioned earlier, there are two commands here. The first to us is *dka*. This kills all running docker containers and all their associated assets. It does leave all your images in place. This is a hugely handy command for when your system gets into a conflict or something else goes wrong with Docker. Run it and you can simply restart your app without having to re-download or rebuild any images.

The second command is *dsp*. This runs the *dka* command and follows it up with a [system prune][2] which will delete anything leftover, including all your docker images. Once you run this your Docker setup will be like new and you will need to re-download or rebuild all your images.

Out of all the customizations to my shell over the years, these two commands have been some of the most used as I often find myself running code from a range of repositories and techs during any given work week. With them I no longer worry about running out of resources nor about troubleshooting a bad state as it is faster to just reset and reload whatever environment I was working in locally.

 [1]: https://www.docker.com
 [2]: https://docs.docker.com/engine/reference/commandline/system_prune/