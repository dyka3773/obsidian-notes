---
tags:
  - tech
  - python
  - lists
---
- `__str__`: The [[Strings|string]] representation method. It is called when the `str()` or `print()` function are called on an object. (Similar to `toString()` in Java and other languages.) It is meant to be human-readable, aimed at the end-user.
- `__repr__`: The object representation method. It is called when the `repr()` function is called on an object. It is meant to be unambiguous, aimed at the developer. (Useful for debugging.)