---
tags:
  - tech
  - python
aliases:
  - type annotation
  - python annotation
  - type hints
  - type hint
---
[[Python]] is a dynamically typed language, which means that you don't have to declare the [[Variable Types|type of a variable]] when you create one.
However, you can use type hinting to specify the [[Variable Types|type of a variable]].

```python
x: int = 1
y: str = "Hello"
z: float = 1.0
```

This is usually done for documentation purposes and to make the code more readable and it is strongly recommended to use it.

The recent [[Python]] versions also aimed to improve developer experience by adding extra features to type hinting. For example, you can use `typing` module to specify the type of a list.

```python
from typing import List

def myfunc() -> List[int]:
    return [1, 2, 3]
```

