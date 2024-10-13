---
title: Finding What Application Is Running on a Given Port
date: 2021-08-13T12:55:51+00:00
categories:
  - Technical
tags:
  - Linux
  - MacOS
  - Networking
---

One of the problems with modern web development is we wind up launching a lot of applications and other processes that hold open a port on our computers. When this happens, and you try to launch something else that wants the same port, you'll get a conflict message that could be really hard to troubleshoot.

Fortunately on Mac there's an easy command to help you actually find out what application is already running on the port.

![Output of a Node script crashing because the port it needs, port 1235, is already in use.](/images/2021/08/Screen-Shot-2021-08-07-at-4.21.23-PM.png "Output of a Node script crashing because the port it needs, port 1235, is already in use.")

In the screenshot above I've tried starting a node script to watch my project but it's warning my port _1235_ is already in use. If I was using docker or any of an assortment of other apps it could be really difficult to figure out what was already on the port but all I really need is _[lsof][1]_.

To find what is running on port 1235 on my Mac the following command will do it:

``` bash
sudo lsof -i :1235
```

Below is the output from my own machine. Here it tells me two key elements:

* Node is already on that port
* The PID of the running Node script is 96602

``` bash
sudo lsof -i :1235
COMMAND   PID          USER   FD   TYPE             DEVICE SIZE/OFF NODE NAME
node    96602 chris.wiegman   34u  IPv6 0x27b08e3c0d6243d7      0t0  TCP *:mosaicsyssvc1 (LISTEN)
```

Now that I know what's on the port I have two options. Maybe it will jog my memory as to where it might be running or I can kill the running app with the kill command and it's PID. In this case, as the PID is 96602, the following command will do it.

``` bash
kill -9 96602
```

Now I can launch my new app and continue the work I need to do.

 [1]: https://ss64.com/bash/lsof.html