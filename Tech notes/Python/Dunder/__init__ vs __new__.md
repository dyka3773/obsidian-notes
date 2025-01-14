---
tags:
  - tech
  - python
---

|                                             `__init__`                                             |                                         `__new__`                                         |
|:--------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------:|
|         is the constructor of the class and it is called after the object has been created         | is the method that creates the object and it is called before the object has been created |
| is an instance method and it is used when you want to control the initialization of a new instance | is a static method and it is used when you want to control the creation of a new instance |

To be honest, I have used `__new__` very few times and I can only think of a few cases where it might be useful.

For example, if you want to create a singleton class, you can override `__new__` to return the same instance every time.

```python
class Singleton:
    _instance = None

    def __new__(cls):
        if cls._instance is None:
            cls._instance = super().__new__(cls)
        return cls._instance

s1 = Singleton()
s2 = Singleton()
print(s1 is s2) # True
```
> The file [[Singleton Class Example]] contains yet another way to create a Singleton class in case you're interested.