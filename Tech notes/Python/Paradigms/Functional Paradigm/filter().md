---
tags:
  - tech
  - python
aliases:
  - filter
---
Filter creates an [[Iterators|iterator]] of elements for which a function returns true.

```python
filter(function_to_apply, list_of_inputs)
```

For example, if we want to filter out all the odd numbers from a list, we can do it like this:
```python
my_list = [1, 2, 3, 4, 5]
result = filter(lambda x: x % 2 == 0, my_list)
print(list(result)) # [2, 4]
```

> **NOTE 1**: `filter()` returns an [[Iterators|iterator]], so we need to convert it to a list to see the result.

We can also pass multiple [[Iterables|iterable]] objects to `filter()`:
```python
my_list1 = [1, 2, 3, 4, 5]
my_list2 = [6, 7, 8, 9, 10]
result = filter(lambda x, y: x % 2 == 0 and y % 2 == 0, my_list1, my_list2)
print(list(result)) # [(2, 6), (4, 8)]
```

> **NOTE 2**: `filter()` can also be used to filter out `None` values or empty [[Strings]] from a list. For example:
```python
 my_list = [1, 2, None, 3, 4, None, 5]
 result = filter(None, my_list)
 print(list(result)) # [1, 2, 3, 4, 5]
 ```
> This just filters out all the values that are treated as `False` in [[Python]]. Namely: `None`, `False`, `0`, `0.0`, `0j`, `''`, `[]`, `{}`, `()` and the objects that implement `__bool__()` and return `False` or implement `__len__()` and return `0`.
>
> **IMPORTANT SIDE-NOTE**: Depending on your data, in some cases `0` might be useful, so the above might not be the safest way to filter numbers.
