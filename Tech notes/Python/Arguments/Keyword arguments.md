---
tags:
  - tech
  - python
aliases:
  - keyword parameters
---
Keyword [[arguments]] are the [[arguments]] that are passed to a function by their name.
For example, in the following function call:
```python
def func(x, y):
    pass

func(x=1, y=2)
```
`x=1` is the first keyword argument and `y=2` is the second keyword argument.

> **Note**: Keyword [[arguments]] can be passed in any order. For example, `func(y=2, x=1)` is valid.