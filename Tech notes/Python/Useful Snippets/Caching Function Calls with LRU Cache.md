---
tags:
  - tech
  - python
  - snippet
---
You can use the `functools.lru_cache` decorator to cache the results of a function call.

Here is an example:

```python
from functools import lru_cache

@lru_cache(maxsize=32)
def fib(n):
    print(f"Calculating fib({n})")
    if n < 2:
        return n
    return fib(n-1) + fib(n-2)
```

Usage:

```python
>>> fib(10)
Calculating fib(10)
Calculating fib(9)
Calculating fib(8)
Calculating fib(7)
Calculating fib(6)
Calculating fib(5)
Calculating fib(4)
Calculating fib(3)
Calculating fib(2)
Calculating fib(1)
Calculating fib(0)
55
>>> fib(5)
5
>>> fib(12)
Calculating fib(12)
Calculating fib(11)
144
```

In the example above, the results of the function calls are cached.
So, when we call `fib(5)` again, it doesn't calculate the result again, but returns the cached result.

> **Note**: You can also use `fib.cache_info()` to get information about the cache.
> 
> There are many other useful functions in the `lru_cache` object.
> 
> You can read more about them in the [docs](https://docs.python.org/3/library/functools.html#functools.lru_cache).
