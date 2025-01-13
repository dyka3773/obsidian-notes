---
tags:
  - tech
  - python
---
You can also create more complex [[decorators]] that take [[arguments]].
In order to achieve that, you need to create a decorator factory that will return a decorator.
This basically means that you can add another layer of abstraction to your [[decorators]].

In order to see that in action, let's create a decorator that will print the time it took for a function to execute.
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

@timer
def func():
    pass
```

Now, if we call `func()`, it will print the time it took for it to execute. 

We can also create a decorator that will print the time it took for a function to execute *only if the function took more than a certain amount of time to execute*. 
We can do it like this:

```python
from functools import wraps
from time import time

def timer(min_time=0):
    def decorator(func):
        @wraps(func)
        def wrapper(*args, **kwargs):
            start = time()
            result = func(*args, **kwargs)
            end = time()
            if end - start > min_time:
                print(f'Time elapsed: {end - start}')
            return result
        return wrapper
    return decorator

@timer(min_time=1)
def func():
    pass
```

Now, if we call `func()`, it will print the time it took for it to execute *only if it took more than 1 second to execute*.

This works because the `timer` function is a decorator factory that returns a decorator which is then used to decorate the `func` function.

> I know that this is a bit confusing, but it is a very powerful feature of [[Python]] and it is worth learning it.
> If you want to learn more about [[decorators]], I recommend reading [this article](https://realpython.com/primer-on-python-decorators/).
