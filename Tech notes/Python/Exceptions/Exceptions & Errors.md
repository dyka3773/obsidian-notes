---
tags:
  - tech
  - python
aliases:
  - exception
  - error
  - exceptions
  - errors
---
## Introduction

Exceptions are errors that occur during the execution of a program.
They interrupt the normal flow of the program and usually end it.
Like in many other languages, in Python, exceptions are split into two categories: Handled and unhandled exceptions.

Handled exceptions are caught by the program and dealt with.
Unhandled exceptions are not caught by the program and end it.

`BaseException` is the base class for all exceptions in Python. 
One of its subclasses is `Exception`, it is used for all exceptions that are non fatal and can be handled.
Exceptions which are not subclasses of `Exception` are typically not handled and are used to indicate that the program should be terminated.

The following diagram shows the hierarchy of the most common exceptions in Python:

![](https://python3.info/_images/exception-hierarchy.png)

> Source: [python3.info](https://python3.info/basics/exception/raise.html)

## Handling Exceptions

Exceptions can be handled using the `try` and `except` statements.
The `try` statement is used to mark a block of code that might raise an exception.
The `except` statement is used to handle the exception.

```python
try:
    # Code that might raise an exception
except:
    # Code that handles the exception
```

The `except` statement can be used with or without an exception type.
If it is used without an exception type, it will catch all exceptions.
If it is used with an exception type, it will only catch exceptions of that certain type.

```python
try:
    # Code that might raise an exception
except ExceptionType:
    # Code that handles the exception
```

The `except` statement can also be used with multiple exception types at once and it can also be used with multiple `except` statements.

```python
try:
    # Code that might raise an exception
except (ExceptionType1, ExceptionType2):
    # Code that handles the exception1 or exception2
except ExceptionType3:
    # Code that handles the exception3
```

You can also use the `as` statement to get the exception object.

```python
try:
    # Code that might raise an exception
except ExceptionType as e:
    # Code that handles the exception
```

There are 2 slightly more advanced statements that can be used with the `try` statement: `else` and `finally`.

The `else` statement is used to mark a block of code that should only be executed if no exception was raised in the `try` block.

```python
try:
    # Code that might raise an exception
except:
    # Code that handles the exception
else:
    # Code that is executed if no exception was raised
```

> Note: This can be used to avoid catching exceptions that are not raised by the code in the `try` block and to clearly separate the code that handles the exception from the code that is executed if no exception was raised.


The `finally` statement is used to mark a block of code that should always be executed, no matter if an exception was raised or not.

```python
try:
    # Code that might raise an exception
except:
    # Code that handles the exception
finally:
    # Code that is always executed

# eg
try:
    f = open("file.txt", "r")
    # Code that might raise an exception
except Error:
    # Code that handles the exception
finally:
    f.close()
```

> Note: This can be used to ensure that resources are always closed, even if an exception was raised.

> Note 2: In case a context manager (`with` statement) can be used, it is recommended to use it instead of the whole `try` statement.

## Raising Exceptions

Exceptions can be raised using the `raise` statement.
It can be used with or without an exception type.
If it is used without an exception type, it will raise the last exception that was raised.
If it is used with an exception type, it will raise an exception of that certain type.

```python
# 1. Raise an exception of type ExceptionType
raise ExceptionType
# 2. Raise an exception of type ExceptionType with a message
raise ExceptionType("Message")
# 3. Raise the last exception that was raised
raise
# 4. Raise the last exception that was raised with a message
raise "Message"
```

> Note: You can raise an exception without instantiating it. In this case, the exception will be instantiated automatically with the default constructor.

See also [[Advanced Exception Handling]]