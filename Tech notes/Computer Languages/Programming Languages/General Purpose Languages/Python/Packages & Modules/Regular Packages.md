---
tags:
  - tech
  - python
---
Regular packages are packages that contain an `__init__.py` file.

The `__init__.py` file is used to mark directories on disk as [[Python]] package directories.

In the simplest case, `__init__.py` can just be an empty file.

But it can also execute initialization code for the package or set the `__all__` variable.

The `__all__` variable is used to define what symbols are exported when `from <package> import *` is used on the package.
See [this](https://docs.python.org/3/tutorial/modules.html#importing-from-a-package) and [this](https://stackoverflow.com/questions/44834/what-does-all-mean-in-python) for more information.

Here is an example of a regular package:

```
package/
├── __init__.py
├── module1.py
└── module2.py
```