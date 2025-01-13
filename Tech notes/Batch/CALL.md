---
tags:
  - tech
  - batch
---
Besides [[START]] there is also a command called `CALL` which is used to execute another batch file. 

## START vs CALL

The main difference between `CALL` and `START` is that `CALL` will execute the batch file in the same shell, while `START` will execute the batch file in a new shell. This also means that the calling batch file will wait for the called batch file to finish before continuing its execution.

A way to think about it is that `CALL` is like a function call, while `START` is like a new process.

> In fact, `CALL` can be used to call labels in the same batch file like `GOTO`, while `START` can only be used to call other batch files.

The way to make `START` work almost like `CALL` is to use `/w /b` switches, which will make `START` execute the batch file in the same shell and wait for it to finish before continuing the execution of the calling batch file.
 

> See also: Microsoft, SS64 Docs for `CALL` command
[1]: https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/call
[2]: https://ss64.com/nt/call.html