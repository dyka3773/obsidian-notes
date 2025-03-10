---
tags:
  - tech
  - batch
---
## Waiting for user input to continue the flow of the program

```cmd
@REM Case 1
PAUSE

@REM Case 2
TIMEOUT /t -1
```

Both of the above commands will wait by printing the message *`Press any key to continue . . .`* and waiting for the user to press any key to continue the flow of the program .

The difference is that `TIMEOUT` can take more than one argument. For example, `TIMEOUT /t 5` will wait for 5 seconds before continuing the flow of the program.

> See also:  
[1]: https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/timeout
[2]: https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/pause
