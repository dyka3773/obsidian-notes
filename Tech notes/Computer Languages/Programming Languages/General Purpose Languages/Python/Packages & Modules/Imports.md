---
tags:
  - tech
  - python
aliases:
  - Python Imports
  - Python importing
---
Imports are used to import [[Packages & Modules|modules]], [[Packages & Modules|packages]], and symbols (functions, [[Variables]], etc) from [[Packages & Modules|modules]] and [[Packages & Modules|packages]].

To import a module, use the `import` keyword followed by the module name:

```py
import module
```

You can also give it an alias to avoid name conflicts. To do that use the `as` keyword:

```py
import module as alias
```

You can also selectively import symbols from a module using the `from` keyword:

```py
from module import symbol1, symbol2
```
> **Note 1**: You can also use the `as` keyword here to give the symbols an alias.
```py
 from module import symbol1 as alias1, symbol2 as alias2
 ```

> **Note 2**: You can also use the `*` symbol to import all symbols from a module.
```py
from module import *
```
> This is not recommended, because it can lead to name conflicts and confusion.
> Also, the `__all__` variable stored in the module is used to define what symbols are imported when `from module import *` is used, so if it is not defined, no symbols will be imported even if the module contains symbols.