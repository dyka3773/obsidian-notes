---
tags:
  - tech
  - python
---
A **Series** is a one-dimensional labeled array, similar to a dictionaries but without the ability to nest.

```python
import pandas as pd

# Creating a Series
data = pd.Series([10, 20, 30, 40], index=['a', 'b', 'c', 'd'])
print(data)
```
> Each value is associated with an index.

## Accessing Elements
```python
print(data['b'])  # Output: 20
```
