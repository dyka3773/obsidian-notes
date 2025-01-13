---
tags:
  - tech
  - python
---
Relative imports are used to import modules and packages relative to the current module.

> **Note**: Relative imports are based on the name of the current module. Since the name of the main module is always `__main__`, **relative imports cannot be used in the main module**.

To import a module relative to the current module, use leading dots to indicate the number of parent directories to go up, followed by the module name:

```py
from . import module1
from .. import module2
from ..module3 import symbol
```