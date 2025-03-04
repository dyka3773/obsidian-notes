---
tags:
  - tech
  - python
---
Namespace packages are a way of splitting a single [[Python]] package across multiple directories.

Unlike [[Regular Packages]], where all [[Packages & Modules|modules]] must be located inside the package directory, a namespace package can span multiple directories on disk.
They also do not require an `__init__.py` file.

I don't have much experience with namespace packages, so I will not go into more detail here.

The simplest thing I can say is that they shouldn't be used unless you have a good reason to do so, because they can lead to confusion or problems with [[Imports|importing]] [[Packages & Modules|modules]].

If you want to learn more about them, see [this stackoverflow answer](https://stackoverflow.com/a/48804718/15552149)
