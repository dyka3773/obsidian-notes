---
tags:
  - tech
  - python
aliases: []
---
```python
from functools import wraps

def decorator_func(cls):
    @wraps(cls)
    def wrapper_func(*args, **kwargs):
        # Do something before
        result = cls(*args, **kwargs)
        # Do something after
        return result
    return wrapper_func

@decorator_func
class MyClass:
    pass
```

In the example above, the `decorator_func` is a function that takes a class as an argument and returns a new class. The new class is called `wrapper_func` and it is the one that will be called when we call `MyClass`. The `wrapper_func` will call `MyClass` and return its result. The `wrapper_func` can also do something before and/or after calling `MyClass`. **It basically works as an interceptor for the `MyClass` class.**

> **Note**: Please note that the `decorator_func` is exactly the same as the one used for [[Function Decorators]], it has zero changes in it except for the name of the argument, which, since [[Python]] is a dynamically typed language, can be anything.