---
tags:
  - tech
  - python
---
You can also nest [[decorators]].
This means that you can use a decorator to decorate another decorator.
You can do this by just stacking the [[decorators]] on top of each other.

For example, let's say that we have a decorator that will print the time it took for a function to execute and another decorator that will execute a function multiple times.
We can do it like this:

```python
from functools import wraps
from time import time

def timer(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        start = time()
        result = func(*args, **kwargs)
        end = time()
        print(f'Time elapsed: {end - start}')
        return result
    return wrapper

def repeat(n=1):
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            for _ in range(n):
                result = func(*args, **kwargs)
            return result
        return wrapper
    return decorator

@timer
@repeat(n=3)
def func():
    print('Hello World!')
```

Now, if we call `func()`, it will print `Hello World!` 3 times and it will print the time it took for it to execute.

But if we had used the [[decorators]] in the opposite order, like this:

```python
@repeat(n=3)
@timer
def func():
    print('Hello World!')
```

Then it would have printed `Hello World!` 3 times, but it would have printed the time it took for it to execute three times as well (once for each time it was executed).