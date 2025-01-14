---
tags:
  - tech
  - python
---
It is useful sometimes to catch an [[Exceptions & Errors|exception]] and then re-raise it or raise a different one.
This can be done using the `raise ... from` statement.

```python
try:
    # Code that might raise an exception
except ExceptionType as e:
    # Code that handles the exception
    raise ExceptionType2("Message") from e
```

The above code will raise an [[Exceptions & Errors|exception]] of type `ExceptionType2` with the message `Message` and the original [[Exceptions & Errors|exception]] will be stored in the `__cause__` attribute of the new [[Exceptions & Errors|exception]].

By default, the nested raised [[Exceptions & Errors|exception]] gets chained to the new [[Exceptions & Errors|exception]] so in our case the `from e` part is optional.
But if you want to raise a new [[Exceptions & Errors|exception]] and not chain the nested one, you can use the `from None` statement.

```python
try:
    # Code that might raise an exception
except ExceptionType as e:
    # Code that handles the exception
    raise ExceptionType2("Message") from None
```

> Note: It is recommended to always chain [[Exceptions & Errors|exceptions]], unless you have a good reason not to.

> Note 2: Re-raising an [[Exceptions & Errors|exception]] inside an `except` statement is usually a bad practice. But it can be useful sometimes, for example when you want to add more information to the [[Exceptions & Errors|exception]].