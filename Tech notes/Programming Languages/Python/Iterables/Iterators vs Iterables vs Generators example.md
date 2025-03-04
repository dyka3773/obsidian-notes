---
tags:
  - tech
  - python
---

```python
# This is an iterable
class MyIterable:
    def __init__(self, n):
        self.n = n

    def __iter__(self):
        return MyIterator(self.n)

# This is an iterator
class MyIterator:
    def __init__(self, n):
        self.n = n
        self.i = 0

    def __next__(self):
        if self.i < self.n:
            i = self.i
            self.i += 1
            return i
        else:
            raise StopIteration # This is how we signal the end of the sequence

# This is a generator
def my_generator(n):
    i = 0
    while i < n:
        yield i
        i += 1

# This is how we use them
for i in MyIterable(5):
    print(i) # 0 1 2 3 4

for i in my_generator(5):
    print(i) # 0 1 2 3 4
```