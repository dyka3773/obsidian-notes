---
tags:
  - tech
  - python
aliases:
  - args
  - kwargs
  - unpacking
---
`*args` and `**kwargs` are used to pass a variable number of [[arguments]] to a function.
`*args` is used to pass a variable number of **positional** [[arguments]] and `**kwargs` is used to pass a variable number of **keyword** [[arguments]].

See [[Variable Number of Arguments]] for more information.

The names `args` and `kwargs` are just a convention and you can use any other names but it is recommended to stick to the convention.

What I mean by the above is that the actual syntactic sugar/feature of [[python]] is the fact that '\*' and '\*\*'  can be used to unpack lists and key-value pairs respectively.