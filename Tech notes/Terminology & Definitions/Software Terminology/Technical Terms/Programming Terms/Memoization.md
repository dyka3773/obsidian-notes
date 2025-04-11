---
tags:
  - tech
aliases:
  - memoize
  - memoized
---
**Memoization** is an **optimization technique** used primarily to **speed up programs** by **storing the results of expensive function calls** and returning the cached result when the same inputs occur again.

It's a **form of [[caching]]** where function outputs are **remembered (memorized)** based on their inputs.
This is particularly useful in [[recursive algorithms]] or [[dynamic programming]], where the same subproblems are solved repeatedly.

# Key Characteristics
- Used to **avoid redundant computations**.
- Typically applied to **[[pure functions]]** (functions that always produce the same output for the same input and have no side effects).
- Can significantly improve **time complexity**.
- Involves a **lookup table**, **dictionary**, or **hash map** to store previous results.
# Example: Fibonacci Without and With Memoization
## Without Memoization (Naive Recursion)
```python
def fib(n):
    if n <= 1:
        return n
    return fib(n - 1) + fib(n - 2)
```
- Time complexity: **O(2ⁿ)**
- Recomputes the same values repeatedly.
## With Memoization
```python
memo = {}

def fib(n):
    if n in memo:
        return memo[n]
    if n <= 1:
        memo[n] = n
    else:
        memo[n] = fib(n - 1) + fib(n - 2)
    return memo[n]
```
- Time complexity: **O(n)**
- Saves and reuses results.
### Using `functools.lru_cache` in [[Python]]
[[Python]] provides a built-in decorator for memoization:
```python
from functools import lru_cache

@lru_cache(maxsize=None)
def fib(n):
    if n <= 1:
        return n
    return fib(n - 1) + fib(n - 2)
```
- `maxsize=None` means unlimited cache.
- Thread-safe and automatic cache management.
> Beware though that this consumes a lot of memory and it should be avoided in production environments
# Use Cases
| Problem Type             | Example                            |
| ------------------------ | ---------------------------------- |
| **Recursive Algorithms** | Fibonacci, factorial, permutations |
| **Dynamic Programming**  | Knapsack, edit distance            |
| **Parsing**              | Recursive descent parsers          |
| **Graph Traversals**     | Memoizing subpath results          |
| **[[API]] Responses**    | [[Caching]] expensive calls        |
# Considerations
- **Memory consumption**: Storing many results can increase memory usage.
- **Side effects**: Don’t memoize functions with I/O or changing state.
- **Mutable arguments**: Use only with immutable argument types (e.g., strings, tuples, ints).
- **Cache invalidation**: If input data changes, memoized results may become stale.
