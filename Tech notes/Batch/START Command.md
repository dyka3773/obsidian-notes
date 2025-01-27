---
tags:
  - tech
  - batch
aliases:
  - "`START`"
---
## Open a new command prompt window

`START` will instantiate a new `CMD.exe` shell for the called [[batch]]. This will inherit variables from the calling shell, but any variable changes will be discarded when the second script ends.

```cmd
@REM This opens a new command prompt window and continues the execution of the batch file

start cmd.exe

@REM This opens a new command prompt window named "My terminal", which prints "Hello World" and remains open while the calling batch file has continued its execution

start "My terminal" cmd.exe /k "echo Hello World"

@REM Real life example
START "Kafka Schema Registry" wsl docker-compose up
```

> **NOTE**: `start` searches for a specified executable file, and if found the executable will launch regardless of the current working directory. When searching for an executable file, if there's no match on any extension, `start` checks to see if the name matches a directory name. If it does, `start` opens `Explorer.exe` on that path.

  
> See also: Microsoft, SS64 Docs for `START` command
[1]: https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/start
[2]: https://ss64.com/nt/start.html