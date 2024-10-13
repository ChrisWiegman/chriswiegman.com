---
title: Don’t Forget the Tests
date: 2023-06-05T12:14:58+00:00
categories:
  - Technical
tags:
  - Development
  - Go
  - Kana
  - Testing
---

I've been working on [Kana][1] for over a year now and while it's coming along quite well there is one thing it is really missing...

Testing.

I've pledged for a while to fix this and create more but, in truth, this is a fun project and when I get into it I'm usually focused on a specific feature or bug, not more testing. That has to change.

Today I finally wrote a [very minimal] test for a new package and I'm going to try to commit to adding proper unit tests to at least one function with every new work session on it. It's not perfect, but it's a start.

I would also like to work on proper acceptance tests but this one is a bit trickier. In the past I used [Jest][2] for testing Go CLI apps and it worked well but I would like to think there is something better these days. After searching for quite some time this morning, however, I'm not so sure.

I could go back to Jest, which made it easy not just to test the CLI but to mock various system binaries. The only difference this time is I would need to mock _docker.sock_ instead of the Docker binary but I would think that should be doable. It still feels so... crazy... though.

Either way, it's time to get more serious about testing. I'm finding plenty of regressions in Kana that really shouldn't be there are this point and it's entirely my fault. If this was a work app it wouldn't pass muster but, as a hobby project, I've let it get sloppy and it is time I changed that.

 [1]: https://github.com/ChrisWiegman/kana/
 [2]: https://jestjs.io/