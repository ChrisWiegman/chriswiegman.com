---
title: Ensuring the File Path is Present to Create a File in GoLang
date: 2019-01-15T05:00:00+00:00
draft: false
categories:
  - Technical
tags:
  - GoLang
---

One thing I find myself doing often in GoLang is creating files and directories. Coming from PHP I tend to do it by writing a lot of loops or other code to get it done. With GoLang it’s quite a bit easier.
Check if the file exists:

``` go
if _, err := os.Stat("/path/to/your-file"); os.IsNotExist(err) {
    // your file does not exist
}
```

In this example we _os.Stat()_ to get information from the file we want to create and check for if it exists by analyzing if it returned an error with _os.IsNotExist()._ Putting these together we now know if we need to create our file or not and, if it doesn’t, we can create it as needed.

But what if it’s folder doesn’t exist?

Of course, before we create any file, it is a good idea to make sure that path to it exists. Fortunately GoLang makes this easy as well:

``` go
os.MkdirAll("/path/to", 0700)
```

Simple, right? This will recursively create the path needed. Once it’s in place we can create our file any way we want.

## Putting it all together

``` go
if _, err := os.Stat("/path/to/your-file"); os.IsNotExist(err) {
    os.MkdirAll("/path/to", 0700) // Create your file
}
```

Just a bit of code is all it takes. No loops or other checking as with PHP. If only all of GoLang could be this simple.