---
title: A Shortcut for Installing Go Versions
date: 2023-07-24T12:08:21+00:00
draft: false
categories:
  - Technical
tags:
  - Development
  - Go
  - Local Development
---

For the most part, when I'm working on [Kana][1] or any other project, I try hard to develop in the current version of whatever tech I'm using. Lately that means [Go][2] which, as of this writing, is on version [1.20.6][3].

It used to be that this was rarely an issue but these days I'm finding that, usually due to the complexity of package management, problems can occur and, this past week, I hit a good one.

Go 1.20.6, which is supposed to be a minor release, changed how it handles parses some connection strings leading to issues in the Docker SDK I use for Kana. This meant that, if I build Kana on the latest version of Go, various commands fail with errors about invalid hosts.

As of my writing of this post there is still no public fix. The patches have been merged into the SDK but they haven't made it to a release yet. This means the only way I can build and _use_ the development version of Kana is by using an old version of Go, 1.20.5.

Unlike many techs Go makes switching versions pretty easy. [You can see their documentation on managing versions on their site][4]. This is great but I wanted to make it a bit easier yet as, well, I don't use this often enough that I'll remember all of it.

Thankfully I use zsh as my shell so an easy fix was to add the following function to _.zshrc_.

``` bash
# Installs the specified Go version for easier development
function gover() {
  go install golang.org/dl/go"$@"@latest
  go"$@" download
}
```

That's it. To use it now all I need it to run _gover 1.20.5_ and I can once again build Kana in a way where everything works! Hopefully the shortcut will make things a bit easier for you as well.

 [1]: https://github.com/ChrisWiegman/kana/
 [2]: https://go.dev
 [3]: https://go.dev/doc/devel/release#go1.20.minor
 [4]: https://go.dev/doc/manage-install