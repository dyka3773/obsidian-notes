---
tags:
  - tech
  - python
aliases:
  - default parameters
---
Default [[Arguments]] are the [[Arguments]] that have a default value.
If the function is called without passing a value for a default argument, the default value will be used.
For example:
```python
def func(x, y=2):
    pass

func(1) # y will be 2
func(1, 3) # y will be 3
```

> Note: This can be used for dynamic function overloading
