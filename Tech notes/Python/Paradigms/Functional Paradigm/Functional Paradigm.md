---
tags:
  - tech
  - python
aliases:
  - functional
  - functional programming
---

## Introduction

[[Functional programming]] is a programming paradigm that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data. 
It is a declarative programming paradigm, which means programming is done with expressions or declarations instead of statements. 
In functional code, the output value of a function depends only on the [[arguments]] that are passed to the function, so calling a function f twice with the same value for an argument x will produce the same result f(x) each time. 
Eliminating side effects, i.e. changes in state that do not depend on the function inputs, can make it much easier to understand and predict the behavior of a program, which is one of the key motivations for the development of functional programming.

Functional programming has its roots in lambda calculus, a formal system developed in the 1930s to investigate function definition, function application, and recursion.

In [[Python]], functions are first-class objects. This means that functions can be passed around and used as [[arguments]], just like any other object ([[Strings|string]], int, float, list, and so on).
This opens up a lot of possibilities for functional programming in [[Python]].

The most common functions used in functional programming are:
- `map()`
- `filter()`
- `reduce()` (in [[Python]] 2, in [[Python]] 3 it is in the `functools` module)
- `lambda`

[[Python]] has also a new addition in the functional programming area, which is the `List Comprehension`.

Let's take a quick look at all of these.
- [[Lambda Functions]]
- [[map()]]
- [[filter()]]
- [[reduce()]]
- [[List Comprehension]]
