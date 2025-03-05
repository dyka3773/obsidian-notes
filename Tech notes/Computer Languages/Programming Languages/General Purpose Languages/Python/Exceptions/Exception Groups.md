---
tags:
  - tech
  - python
---
Multiple [[Exceptions & Errors|exceptions]] can be raised at once using the `ExceptionGroup` class.
It is a subclass of `Exception` which means that it cannot be used to wrap BaseExceptions.

```python
def function_that_has_multiple_arguments(arg1, arg2, arg3, arg4):
    exceptions = []
    if arg1 is None:
        exceptions.append(ValueError("arg1 is None"))
    if arg2 is None:
        exceptions.append(TypeError("arg2 is None"))
    if arg3 is None:
        exceptions.append(ValueError("arg3 is None"))
    if arg4 is None:
        exceptions.append(OSError("arg4 is None"))

    if len(exceptions) > 0:
        raise ExceptionGroup(exceptions)

    # Code that uses arg1 and arg2

try:
    function_that_has_multiple_arguments(None, None, None, None)
except ExceptionGroup as e:
    for exception in e.exceptions:
        print(exception)
```

And if there are multiple [[Exceptions & Errors|exceptions]] thrown they can be unpacked and prioritized using the `except*` statement.

```python
try:
    function_that_has_multiple_arguments(None, None, None, None)
except* (ValueError, TypeError) as e:
    print(f"{type(e)}, {e}")
    # Code that handles the ValueError or TypeError
except OSError as e: # This will be executed if 
    print(e)
    # Code that handles the OSError
```

> Note: Please note that the [[Exceptions & Errors|exceptions]] in the ExceptionGroup must be instantiated, not just the types, this is because in practice these [[Exceptions & Errors|exceptions]] would have already been raised and caught by the program.

The above code will print the following:

```
ValueError, arg1 is None
TypeError, arg2 is None
ValueError, arg3 is None
arg4 is None
```