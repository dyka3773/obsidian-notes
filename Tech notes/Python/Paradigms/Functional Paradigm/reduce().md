---
tags:
  - tech
  - python
aliases:
  - reduce
  - mapreduce
---
Reduce is a really useful function for performing some computation on a list and returning the result.
It applies a rolling computation to sequential pairs of values in a list.

```python
reduce(function_to_apply, list_of_inputs)
```

For example, if we want to sum all the numbers in a list, we can do it like this:
```python
from functools import reduce

my_list = [1, 2, 3, 4, 5]
result = reduce(lambda x, y: x + y, my_list)
print(result) # 15
```

> **NOTE 1**: `reduce()` is not a built-in function in [[Python]] 3, so we need to import it from the `functools` module.

The above is equivalent to the following:
```python
my_list = [1, 2, 3, 4, 5]
result = 0
for x in my_list:
    result += x
print(result) # 15
```

> **NOTE 2**: `reduce()` can also take an optional third argument which is the initial value of the computation. For example:
```python
 from functools import reduce

 my_list = [1, 2, 3, 4, 5]
 result = reduce(lambda x, y: x + y, my_list, 10)
 print(result) # 25
 ```
 