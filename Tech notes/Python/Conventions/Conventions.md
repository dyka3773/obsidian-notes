---
tags:
  - tech
  - python
aliases:
  - Python Conventions
---

## Introduction

Naming conventions are important in programming because they make the code more readable and understandable.
In [[Python]], there are several naming conventions that are used for different purposes.

Most of the developers in the [[Python]] community follow the coding style that is defined in [PEP 8](https://www.python.org/dev/peps/pep-0008/).
Some of the most important points of this style guide are highlighted in this document.

## Biggest things to watch out for

- [[Casing]]
- [[Conventions when giving examples]]
- [[self instead of this]]
- [[self vs cls]]
- [[args and kwargs]]

## PEP 8 - General Coding style

- Use 4 spaces for indentation.
- Use 1 space after commas and colons.
- Use 2 blank lines between top-level functions and classes.
- Use 1 blank line between methods in a class.
- Use 1 blank line before a `return` statement.
- Wrap lines that are longer than 79 characters.
- Use `"""docstrings"""` to document classes, methods and functions.
- Use `#` for [[comments]].
- Don't use fancy encodings if your code is meant to be used in international environments. Plain ASCII works best in any case. (Even though Python 3 supports UTF-8 by default)