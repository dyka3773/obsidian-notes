---
tags:
  - tech
  - python
aliases:
  - python types
  - type of a variable
---
[[Python]] has the following built-in types:
- Text Type: `str` ("Hello World")
- Numeric Types: `int`, `float`, `complex` (1, 1.5, 1j)
- Sequence Types: `list`, `tuple`, `range` ([1, 2, 3], (1, 2, 3), range(1, 4))
- Mapping Type: `dict` ({'name': 'John', 'age': 36})
- Set Types: `set`, `frozenset` ({1, 2, 3}, frozenset({1, 2, 3}))
- Boolean Type: `bool` (True, False)
- Binary Types: `bytes`, `bytearray`, `memoryview` (b"Hello", bytearray(5), memoryview(bytes(5)))

And of course, we can create our own types by using classes.

> **Fun Fact 1**: In [[Python]], integers have unlimited precision. This means that you can work with very large numbers without worrying about overflow. But this comes at the cost of speed.

> **Fun Fact 2**: Small integers in [[Python]] are cached. This means that the same small integer object is reused when you create a new integer object with the same value. This is done to save memory. The range of numbers that are cached is from -5 to 256.