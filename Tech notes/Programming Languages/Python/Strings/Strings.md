---
tags:
  - tech
  - python
aliases:
  - Python strings
  - Python String
---

## Introduction

String literals are used to represent strings in [[Python]].
They can be enclosed in single quotes (`'...'`), double quotes (`"..."`) or triple quotes (`"""..."""`) with the same result. `\` can be used to escape quotes.

```python
>>> 'spam eggs'  # single quotes
'spam eggs'
>>> 'doesn\'t'  # use \' to escape the single quote...
"doesn't"
>>> "doesn't"  # ...or use double quotes instead
"doesn't"
>>> '"Yes," he said.'
'"Yes," he said.'
>>> "\"Yes,\" he said."
'"Yes," he said.'
>>> '"Isn\'t," she said.'
'"Isn\'t," she said.'
```

Triple quoted strings are useful for strings that span multiple lines.
The following example shows a string that spans multiple lines:

```python
>>> print("""This is a very long string
... that spans multiple lines""")
This is a very long string
that spans multiple lines
```

Strings can be concatenated (glued together) with the `+` operator, and repeated with `*`:

```python
>>> # 3 times 'un', followed by 'ium'
>>> 3 * 'un' + 'ium'
'unununium'
```

Two or more string literals (i.e. the ones enclosed between quotes) next to each other are automatically concatenated.

```python
>>> 'Py' 'thon'
'Python'
```

This feature is particularly useful when you want to break long strings:

```python
>>> text = ('Put several strings within parentheses '
...         'to have them joined together.')
>>> text
'Put several strings within parentheses to have them joined together.'
```

> **Note**: The fact that you can do it doesn't mean you should do it. This can make the code less readable.

Strings can be indexed (subscripted), with the first character having index 0.
The `:` sign can also be used to access substrings.

> There is no separate character type; a character is simply a string of size one:

```python
>>> word = 'Python'
>>> word[0]  # character in position 0
'P'
>>> word[:2]  # characters from the beginning to position 2 (excluded)
'Py'
```

See also [[f-strings]].