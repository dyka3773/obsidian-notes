---
tags:
  - tech
  - python
aliases:
  - variable unpacking
  - unpacking
---
Sometimes we don't know how many [[Arguments]] we will need to pass to a function.
In this case we can use `*args` and `**kwargs` to accept any number of positional and keyword [[Arguments]].

`*args` is used to accept any number of positional [[Arguments]].
For example:
```python
def func(*args):
    pass

func(1, 2, 3) # args will be (1, 2, 3)
```

`**kwargs` is used to accept any number of keyword [[Arguments]].
For example:
```python
def func(**kwargs):
    pass

func(x=1, y=2, z=3) # kwargs will be {'x': 1, 'y': 2, 'z': 3}
```

> **NOTE 1**: `*args` and `**kwargs` can be used together. 
> For example:
```python
 def func(*args, **kwargs):
     pass

 func(1, 2, 3, x=1, y=2, z=3) # args will be (1, 2, 3) and kwargs will be {'x': 1, 'y': 2, 'z': 3}
 ```

> **NOTE 2**: `*args` and `**kwargs` can be used when calling a function to unpack a list or a dictionary and pass its elements as positional or keyword [[Arguments]] to the function.
> For example:
```python
 def func(x, y, z):
     pass

 l = [1, 2, 3]
 d = {'x': 1, 'y': 2, 'z': 3}

 func(*l) # This is equivalent to func(1, 2, 3)
 func(**d) # This is equivalent to func(x=1, y=2, z=3)
 ```
> Please also note that the keywords `args` and `kwargs` are just a convention. You can use any other name you want.

You can also declare a function that accepts a fixed number of positional [[Arguments]] and any number of keyword [[Arguments]].
For example:
```python
def func(x, y, **kwargs):
    pass

func(1, 2, z=3) # kwargs will be {'z': 3}
```

