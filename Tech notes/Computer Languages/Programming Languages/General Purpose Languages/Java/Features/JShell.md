---
tags:
  - tech
---
**JShell** is an interactive tool introduced in **[[Java]] 9** that provides a **Read-Eval-Print Loop ([[REPL]])** for [[Java]].
It allows developers to quickly **write, test, and explore [[Java]] code snippets** without the need to create a full class or project structure.****
JShell is aimed at improving developer productivity, learning, and experimentation with [[Java]] [[API|APIs]] and features.
# Key Features
- **Immediate Feedback**: Evaluate [[Java]] expressions and see results instantly.
- **No Boilerplate**: Execute statements without defining classes or a `main` method.
- **Exploratory Programming**: Quickly test logic, [[API|APIs]], libraries, or new Java features.
- **Command Set**: Special commands (starting with `/`) for saving sessions, listing variables, viewing history, etc.
- **Import Support**: Easily import [[Java]] packages for use in snippets.
# Useful Commands
| Command        | Description                    |
| -------------- | ------------------------------ |
| `/help`        | List available JShell commands |
| `/vars`        | List declared variables        |
| `/methods`     | List declared methods          |
| `/list`        | Show command history           |
| `/save <file>` | Save current session to a file |
| `/open <file>` | Load and run code from a file  |
| `/reset`       | Clear all definitions          |
| `/exit`        | Exit JShell                    |
# Limitations
- Designed for **interactive** use, not full application development.
- Session state is **temporary** unless explicitly saved.
- Not all complex project setups (like dependency management, advanced [[classpath]] setups) are easily handled inside JShell.
