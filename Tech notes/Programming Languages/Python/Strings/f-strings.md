---
tags:
  - tech
  - python
aliases:
  - formatted string
  - formatted strings
---
f-Strings provide a concise and convenient way to embed [[Python]] expressions inside [[Strings|string]] literals for formatting.
The `f` or `F` prefix before the [[Strings|string]] indicates that it is an f-string.
The [[Strings|string]] itself can be formatted in much the same way that you would with `str.format()`.

```python
>>> name = 'Fred'
>>> f"He said his name is {name}."
'He said his name is Fred.'
>>> "He said his name is {name}.".format(name=name)
'He said his name is Fred.'
```

## Expressions

You can put any valid [[Python]] expression inside the braces and it will be evaluated and formatted.

```python
>>> f"{2 * 37}"
'74'
>>> f"{name.lower()}"
'fred'
```

## Callables

You can call any callable [[Python]] object inside the braces and it will be evaluated and formatted.

```python
>>> def to_lowercase(input):
...     return input.lower()
...
>>> name = "Eric Idle"
>>> f"{to_lowercase(name)} is funny."
'eric idle is funny.'
```

## Extra Features

- [[! Conversion Flag]]
- [[colon Format Specifier]]
- [[= Format Specifier]]