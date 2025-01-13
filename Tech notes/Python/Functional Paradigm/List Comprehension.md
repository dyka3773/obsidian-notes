---
tags:
  - tech
  - python
aliases:
  - comprehension
---
In [[Python]], list comprehension is a way to create lists in a declarative way.
It is a syntactic construct that allows us to create lists from other lists, generators, etc.
It is mostly used to replace `map()` and `filter()` functions when the function we want to apply is a simple [[Lambda Functions|lambda]] function.
For more complex functions, it is better to use `map()` and `filter()` as (to my opinion) they are more readable.

For example, if we want to create a list of all the even numbers from 1 to 10, we can do it like this:
```python
my_list = [x for x in range(1, 11) if x % 2 == 0]
print(my_list) # [2, 4, 6, 8, 10]
```

The above is equivalent to the following:
```python
my_list = []
for x in range(1, 11):
    if x % 2 == 0:
        my_list.append(x)
print(my_list) # [2, 4, 6, 8, 10]
```

or this:
```python
my_list = list(filter(lambda x: x % 2 == 0, range(1, 11)))
print(my_list) # [2, 4, 6, 8, 10]
```

> **NOTE 1**: You can stack many `for` and `if` statements in a list comprehension. They will be executed in the same order as they would be in a normal `for` loop.

> **NOTE 2**: List comprehension can also be used to create dictionaries and sets. 
> For example:
```python
 my_dict = {x: x * 2 for x in range(1, 11)}
 print(my_dict) # {1: 2, 2: 4, 3: 6, 4: 8, 5: 10, 6: 12, 7: 14, 8: 16, 9: 18, 10: 20}

 my_set = {x for x in range(1, 11) if x % 2 == 0}
 print(my_set) # {2, 4, 6, 8, 10}
 ```

> **NOTE 3**: List comprehension can also be used to create generators. 
> For example:
```python
 my_generator = (x for x in range(1, 11) if x % 2 == 0)
 print(list(my_generator)) # [2, 4, 6, 8, 10]
 ```
> This is useful when we want to create a list of a large number of items, but we don't want to store them in memory.
