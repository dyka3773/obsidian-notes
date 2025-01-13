---
tags:
  - tech
  - python
aliases:
  - self
---
In [[Python]], `this` is not a keyword and also the first argument of a method is always a reference to the object itself.
Thus, a common convention is to use `self` or `this` as the first argument of a method, with which you can access the class's instance and class variables.

```python
class Foo:
    def __init__(self, x):
        self.x = x

    def bar(self):
        print(self.x)

foo = Foo(1)
foo.bar() # 1
```