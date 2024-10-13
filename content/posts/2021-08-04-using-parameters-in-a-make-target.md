---
title: Using Parameters in a Make Target
date: 2021-08-04T13:11:05+00:00
featured_image: /images/2021/08/using-parameters-in-a-make-target.png
categories:
  - Technical
tags:
  - Bash
  - Make
  - Scripting
---

Last week I wrote about [using Make for automating your WordPress development][1]. Make is a powerful tool that can really simplify development across multiple teams or multiple developers but, like any tool, it requires a learning curve.
With most of the command-line tools we use we call commands with parameters to change how they behave. For example, to delete a file in Mac or Linux we call the following:

``` bash
rm my_file
```

Like with Make, this example has the command, _rm_, and a target, _my_file_. This works great for deleting a file but, as you probably know, it doesn't work for deleting a folder. To delete a folder we would need the following:

``` bash
rm -rf my_folder
```

Unlike a file we now need to specify switches, or parameters, the _-rf_ in my example, to achieve the intended behavior. These pattern is fairly normal in most command-line operations but won't work with Make.

To utilize parameters with Make we would expect to do something like this:

``` bash
make my_target --param=value
```

Ideally we could then access the value in our target. Unfortunately this won't work as Make simply doesn't accept such parameters.

We do have an alternative though. We can set our parameter as a shell variable and then call it within our target. It looks a little weird as we specify the parameter first but it is effective. Here's how we can invoke make with our parameter:

``` bash
PARAM=value make my_target
```

Of course, simply calling it doesn't use it in our Makefile. To use it in our Makefile is just as simple. Remember this is a shell variable so it is used in almost the exact same way you would use it in BASH or a similar script language:

``` makefile
.PHONY: my_target
my_target:
    echo $(PARAM)
```

That's it. Simply surround it with _$()_.

Of course, this could get confusing if your script doesn't require the parameter or if a new user hits it. We can account for that too. The following is the same target that first checks for the param and echos it if it exists but echos simply "Hello world" if the param wasn't specified:

``` makefile
.PHONY: my_target
my_target:
    if [ -z "$(PARAM)" ]; then \
		echo "Hello World"; \
	else \
		echo $(PARAM); \
	fi
```

In the above example we check if the variable is _unset_ and echo Hello World if that is the case. If it is set we echo the param we called Make with. The hardest part of this is that the logic is probably a bit backwards from what you would expect in other languages.

With a little practice you can utilize this method to write some very complex make targets that can process your handling based on the variables provided to them. You can also extend this by defining variables globally and even using wildcards in target names but those are for a different post.

 [1]: /2021/07/automating-wordpress-development-with-make/