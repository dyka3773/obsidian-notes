---
tags:
  - tech
  - python
aliases:
  - python variables
---
Variables are containers for storing data values. Unlike other programming languages, [[Python]] has no command for declaring a variable. A variable is created the moment you first assign a value to it.

```python
x = 5
y = "John"
print(x)
print(y)
```

Variables do not need to be declared with any particular type and can even change type after they have been set.

```python
x = 4 # x is of type int
x = "Sally" # x is now of type str
print(x)
```

[[Strings|String]] variables can be declared either by using single or double quotes.

```python
x = "John"
# is the same as
x = 'John'
```

> **Note 1**: Triple quotes are used to span the [[Strings|string]] across multiple lines.
```python 
x = """Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua."""
```

Variable names are case-sensitive.

```python
a = 4
A = "Sally"
# A will not overwrite a
```

Variable names must start with a letter or the underscore character.

```python
# Legal variable names:
myvar = "John"
my_var = "John"
_my_var = "John"
myVar = "John"
MYVAR = "John"
myvar2 = "John"

# Illegal variable names:
2myvar = "John"
my-var = "John"
my var = "John"
```

> **Note 2**: Variable names can only contain alpha-numeric characters and underscores.

> **Note 3**: For the naming convention of variables, see [[Conventions|Python Conventions]]