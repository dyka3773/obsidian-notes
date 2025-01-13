---
tags:
  - tech
  - batch
---
## Getting the parent directory of the [[batch]] file being executed

> The equivalent of `dirname` in [[bash]]

```cmd

ECHO %~dp0

```

`%0` contains the full path of the running `.bat` or `.cmd` file.

The `~` expansions can be applied to all numbered arguments (`%0`…`%9`) and to the one-letter variables used by `FOR` (e.g. `%%a`). The most commonly used expansions are:

- `~d`: drive letter (with colon)
- `~p`: directory path (without drive letter)
- `~n`: file name without extension
- `~x`: file extension (with leading dot)
  
So combining them into `%~dp0` will work like `dirname`, while `%~nx0` will work like `basename`.