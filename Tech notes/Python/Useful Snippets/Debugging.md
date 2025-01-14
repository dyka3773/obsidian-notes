---
tags:
  - tech
  - snippet
  - python
---
Print all the parameters passed to a function and its return value:

```python
from functools import wraps

def debug(func):
    @wraps(func)
    def wrapper_debug(*args, **kwargs):
        args_repr = [repr(a) for a in args]
        kwargs_repr = [f"{k}={v!r}" for k, v in kwargs.items()]
        signature = ", ".join(args_repr + kwargs_repr)
        print(f"Calling {func.__name__}({signature})")
        value = func(*args, **kwargs)
        print(f"{func.__name__!r} returned {value!r}")
        return value
    return wrapper_debug
```

Usage:

```python
@debug
def my_func(a, b, c):
    return a + b + c
```

Result:

```python
>>> my_func(1, 2, 3)
Calling my_func(1, 2, 3)
'my_func' returned 6
6
```

> **Note**: There is a `{v!r}` in the code above.
> What it does is that it calls `repr()` on the value before interpolating it into the string.
> This is equivalent to doing `f"{k}={repr(v)}"`.
> 
> I didn't know about this until I read [this](https://docs.python.org/3/reference/lexical_analysis.html#f-strings) in the docs.