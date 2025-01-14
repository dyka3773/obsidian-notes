---
tags:
  - tech
  - python
---
[[Exceptions & Errors|Exceptions]] can have notes attached to them.
These notes can be used to add more information to the [[Exceptions & Errors|exception]].
They can be added using the `add_note` method of the [[Exceptions & Errors|exception]].

```python
try:
    # Code that might raise an exception
except ExceptionType as e:
    # Code that handles the exception
    e.add_note("Note")
    raise
```

> Note: This will re-raise the exception with the note attached to it.
> The notes only have a point if the exception is re-raised, otherwise they are lost.

Near real world example:

```python
def f():
    raise ValueError("ValueError")

exceptions = []
for i in range(10):
    try:
        f()
    except ValueError as e:
        e.add_note(f"i = {i}")
        exceptions.append(e)

raise ExceptionGroup(exceptions)
```
