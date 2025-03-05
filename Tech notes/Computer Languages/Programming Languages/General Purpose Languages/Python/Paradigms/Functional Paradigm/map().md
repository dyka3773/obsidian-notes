---
tags:
  - tech
  - python
aliases:
  - map
---
Map applies a function to all the items of an [[Iterables|iterable]] object (lists, [[Generators]], etc). 
Here is the blueprint:

```python
map(function_to_apply, list_of_inputs)
```

For example, if we want to multiply all the items in a list by 2, we can do it like this:
```python
my_list = [1, 2, 3, 4, 5]
result = map(lambda x: x * 2, my_list)
print(list(result)) # [2, 4, 6, 8, 10]
```

> **NOTE 1**: `map()` returns an [[Iterators|iterator]], so we need to convert it to a list to see the result.

We can also pass multiple [[Iterables|iterable]] objects to `map()`:
```python
my_list1 = [1, 2, 3, 4, 5]
my_list2 = [6, 7, 8, 9, 10]
result = map(lambda x, y: x + y, my_list1, my_list2)
print(list(result)) # [7, 9, 11, 13, 15]
```
