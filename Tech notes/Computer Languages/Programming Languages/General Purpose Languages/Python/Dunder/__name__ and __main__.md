---
tags:
  - tech
  - python
aliases:
  - __main__
  - __name__
---
The `__name__` variable is a special variable that is set for every module and script. When a module is imported, `__name__` is set to the name of the module. When a script is executed, `__name__` is set to `"__main__"`.

> **Note**: This refers to the global variable `__name__` and not to the `__name__` attribute of a class or function. 

Let's take a look at an example:

```python
# File: module.py

print(__name__)
```

```python
# File: script.py

import module

print(__name__)
```

Creating the above files and running them will produce the following output:

```bash
$ python module.py
__main__

$ python script.py
module
__main__
```
