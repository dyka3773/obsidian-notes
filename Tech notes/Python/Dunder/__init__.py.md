---
tags:
  - tech
  - python
---
An `__init__.py` file is used to mark directories on disk as [[Python]] package directories.
This prevents directories with a common name, such as `string`, unintentionally hiding valid modules that occur later on the module search path.

> **Note**: Having an `__init__.py` file in a directory is not required to import modules from that directory, it will just create a Namespace Package. But it is required if you want to create a regular package. See [[Packages & Modules|packages]] and [this](https://stackoverflow.com/a/48804718/15552149) for more information.

In the simplest case, `__init__.py` can just be an empty file.

It usually contains the `__all__` variable, which is used to define what symbols are exported when `from <package> import *` is used on the package. See [this](https://stackoverflow.com/questions/44834/what-does-all-mean-in-python) for more information.