---
tags:
  - tech
  - python
  - lists
---
Out of all these, the most important one is `__eq__`, which is used to compare objects for equality.

- `__and__`: The bitwise AND method. It is called when the `&` operator is used on an object.
- `__or__`: The bitwise OR method. It is called when the `|` operator is used on an object.
- `__xor__`: The bitwise XOR method. It is called when the `^` operator is used on an object.
- `__lshift__`: The left shift method. It is called when the `<<` operator is used on an object. (It is rarely used.)
- `__rshift__`: The right shift method. It is called when the `>>` operator is used on an object. (It is rarely used.)
- `__lt__`: The less than method. It is called when the `<` operator is used on an object.
- `__le__`: The less than or equal to method. It is called when the `<=` operator is used on an object.
- `__eq__`: The equal to method. It is called when the '\==' operator is used on an object. Be careful when overriding this method, it can lead to unexpected results when comparing objects for equality, especially in a large codebase where the object implementing it is the main business component and it is used in many places.
- `__ne__`: The not equal to method. It is called when the `!=` operator is used on an object.
- `__gt__`: The greater than method. It is called when the `>` operator is used on an object.
- `__ge__`: The greater than or equal to method. It is called when the `>=` operator is used on an object.