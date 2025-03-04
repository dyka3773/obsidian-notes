---
tags:
  - tech
  - python
aliases:
  - lambda
  - anonymous function
---
`lambda` is a keyword in [[Python]] that is used to create anonymous/lambda functions.
These anonymous functions can only take one expression and they can't contain any statements.
Eg:
```python
# This is a normal function
def func1(x):
    return x + 1

# This is an anonymous function
func2 = lambda x: x + 1
```

Both of the above can be called like this:
```python
func1(1) # 2
func2(1) # 2
```

In general, `lambda` functions are used when we need to pass a function as an argument to another function.

> **NOTE 1**: `lambda` functions can be used to create functions that return other functions. This is called a closure. For example:
```python
 def func(x):
     return lambda y: x + y

 func1 = func(1)
 func1(2) # 3
 ```

> **NOTE 2**: `lambda` functions can have 0 to any number of [[Arguments]]. For example:
```python
 func = lambda: 1
 func() # 1

 func = lambda x, y: x + y
 func(1, 2) # 3
 ```