---
tags:
  - tech
  - python
aliases:
  - parameters
---

## Introduction

Arguments are the values that are passed to a function when it is called.
In [[Python]] arguments are neither passed by value nor by reference. 
**They are passed by assignment.**
This means that the function gets a copy of the reference to the object that is passed as an argument, but *if the reference gets reassigned inside the function, the original reference will not be affected.*

There are 2 types of arguments in [[Python]]:
- [[Positional arguments]]
- [[Keyword arguments]]

> **Note**: [[Positional arguments]] must come before [[Keyword arguments]]. For example, `func(1, y=2)` is valid, but `func(x=1, 2)` is not.

In [[Python]] 3.8 and later, it is possible to use `/` and `*` to specify which arguments are positional and which are keyword.
For example:
```python
def func(x, y, /, z, w, *, a, b):
    pass

func(1, 2, 3, 4, a=5, b=6) # This is valid
func(1, 2, z=3, w=4, a=5, b=6) # This is also valid
func(1, 2, 3, 4, 5, 6) # This is not valid
func(1, 2, 3, 4, 5, b=6) # This is not valid
```

In this case, `x` and `y` are positional **only** arguments, `z` and `w` are positional or [[Keyword arguments]], and `a` and `b` are keyword **only** arguments.

Following that example we can also have positional only arguments and keyword only arguments.
For example:
```python
def func1(x, y, /):
    pass

def func2(*, x, y):
    pass

func1(1, 2) # This is valid
func1(x=1, y=2) # This is not valid

func2(x=1, y=2) # This is valid
func2(1, 2) # This is not valid
```

> **Note**: This is mostly used when the function is part of an [[API]] and you want to prevent the user from passing certain arguments in a certain way.

## Features

- [[Default Arguments]]
- [[Variable Number of Arguments]] and [[args and kwargs]]