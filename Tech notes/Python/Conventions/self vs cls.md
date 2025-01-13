---
tags:
  - tech
  - python
aliases:
  - cls
  - slf
---
Even though `self` is the most common name used for the first argument of a method, `cls` is also used in class methods to refer to the class itself.
[[Python]] will still pass the class reference as the first argument to the method, but it is a convention to use `cls` instead of `self` in class methods.

```python
class Foo:
    x = 0

    @classmethod
    def bar(cls):
        cls.x += 1
        print(cls.x)

Foo.bar() # 1
Foo.bar() # 2
```
