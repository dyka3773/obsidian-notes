---
tags:
  - tech
  - python
aliases:
  - iterator
---
An **iterator** is an object that has a `__next__` [[Double Underscore Methods and Attributes in Python|dunder]] method which returns the next item in the sequence. If there are no more items in the sequence, it should raise a `StopIteration` [[Exceptions & Errors|exception]].