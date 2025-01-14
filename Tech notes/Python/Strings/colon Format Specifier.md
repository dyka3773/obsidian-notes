---
tags:
  - tech
  - python
---
The `:` format specifier is used to format the result of the expression or call.

```python
>>> pi = 3.14159265359
>>> f"Pi is approximately {pi:.3f}."
'Pi is approximately 3.142.'
```

It can also be used to declare how many characters the field should be wide, and to align numbers:

```python
>>> table = {'Sjoerd': 4127, 'Jack': 4098, 'Dcab': 7678}
>>> for name, phone in table.items():
...     print(f'{name:10} ==> {phone:10d}')
...
Sjoerd     ==>       4127
Jack       ==>       4098
Dcab       ==>       7678
```
