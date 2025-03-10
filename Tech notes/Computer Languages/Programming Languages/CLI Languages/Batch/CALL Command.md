---
tags:
  - tech
  - batch
aliases:
  - "`CALL`"
---
Besides [[START Command|`START`]] there is also a command called `CALL` which is used to execute another [[Batch]] file. 

## [[START Command|START]] vs CALL

The main difference between `CALL` and `START` is that `CALL` will execute the [[Batch]] file in the same shell, while `START` will execute the [[Batch]] file in a new shell. This also means that the calling [[Batch]] file will wait for the called [[Batch]] file to finish before continuing its execution.

A way to think about it is that `CALL` is like a function call, while `START` is like a new process.

> In fact, `CALL` can be used to call labels in the same [[Batch]] file like `GOTO`, while `START` can only be used to call other [[Batch]] files.

The way to make `START` work almost like `CALL` is to use `/w /b` switches, which will make `START` execute the [[Batch]] file in the same shell and wait for it to finish before continuing the execution of the calling [[Batch]] file.
 

> See also: Microsoft, SS64 Docs for `CALL` command
[1]: https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/call
[2]: https://ss64.com/nt/call.html