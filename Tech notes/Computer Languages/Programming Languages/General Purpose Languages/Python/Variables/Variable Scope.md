---
tags:
  - tech
  - python
---
A variable is only available from inside the region it is created. This is called scope.

```python
def myfunc():
  x = 300
  print(x)

myfunc() # This will print 300
print(x) # While this will cause an error
```

In [[Python]], [[Variables]] that are created outside of a function (as in all of the examples above) are known as global [[Variables]]. Global [[Variables]] can be used by everyone, both inside of functions and outside.

```python
x = 300

def myfunc():
  print(x)

myfunc() # This will print 300
print(x) # And this will also print 300
```

If you create a variable with the same name inside a function, this variable will be local, and can only be used inside the function. The global variable with the same name will remain as it was, global and with the original value.

```python
x = 300

def myfunc():
  x = 200
  print(x)

myfunc() # This will print 200
print(x) # While this will print 300
```

The `global` keyword makes the variable global.

```python
def myfunc():
  global x
  x = 300

myfunc() # This will print 300
print(x) # And this will also print 300
```
> **Note**: This is not recommended, as it can cause confusion and lead to bugs.