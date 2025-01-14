---
tags:
  - tech
  - python
  - snippet
aliases: []
---
In order to create a singleton class, you can override its `__new__` method to return the same instance every time.

Here is an example:

```python
class MySingletonClass:
    _instance = None

    def __new__(cls, *args, **kwargs):
        if cls._instance is None:
            cls._instance = super().__new__(cls, *args, **kwargs)
        return cls._instance

s1 = Singleton()
s2 = Singleton()
print(s1 is s2) # True
```

or you can use a decorator:

```python
from functools import wraps

def singleton(cls):
    @wraps(cls)
    def wrapper_singleton(*args, **kwargs):
        if not wrapper_singleton.instance:
            wrapper_singleton.instance = cls(*args, **kwargs)
        return wrapper_singleton.instance
    wrapper_singleton.instance = None
    return wrapper_singleton
```

Usage:

```python
@singleton
class MyClass:
    pass

m1 = MyClass()
m2 = MyClass()
print(m1 is m2) # True
```

> **Note**: There is a `wrapper_singleton.instance` in the code above.
> This is a function attribute.
> 
> I know it's weird, but it's a thing in Python.
> 
> You can read more about it in the [PEP proposal](https://peps.python.org/pep-0232/) and [this](https://stackoverflow.com/questions/338101/python-function-attributes-uses-and-abuses) StackOverflow question.
