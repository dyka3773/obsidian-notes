---
tags:
  - tech
  - lists
---

## Todo Tree *(ID: Gruntfuggly.todo-tree)*

- This extension allows you to create TODOs in your code and then view them in a tree view. 
- It supports a variety of languages and allows you to customize the [[Regular Expressions|regex]] used to find TODOs.
- It also supports a variety of themes and allows you to customize the colors used to display TODOs and other tags.

#### Settings Example

```json
"todo-tree.general.statusBar": "current file",
    "todo-tree.general.showActivityBarBadge": true,
    "todo-tree.filtering.excludeGlobs": [
        "**/node_modules/*/**",
        "**/*env/**",
        "**/temp/**"
    ],
    "todo-tree.general.tagGroups": {
    
        "TODO": ["TODO", "[ ]", "[-]"],
        "NOTE": ["NOTE", "INFO"],
        "FIXME": ["FIXME", "FIXIT", "FIXTHIS"]
    },
    "todo-tree.general.tags": [
        "BUG",
        "HACK",
        "FIXME",
        "FIXIT",
        "FIXTHIS",
        "XXX",
        "NOTE",
        "INFO",
        "TODO",
        "[ ]",
        "[-]",
    ],
    "todo-tree.highlights.customHighlight": {

        "BUG": {
            "icon": "bug"
        },
        "HACK": {
            "icon": "alert"
        },
        "FIXME": {
            "icon": "tools"
        },
        "XXX": {
            "icon": "x"
        },
        "NOTE": {
            "icon": "note"
        },
        "TODO":{
            "icon": "issue-draft"
        }
    },
    "todo-tree.highlights.useColourScheme": true,
    "todo-tree.general.showIconsInsteadOfTagsInStatusBar": true
```

## GitHub Copilot *(ID: GitHub.copilot)*

- This extension provides AI-powered code suggestions.
- It actually works pretty well and I use it a lot.
- It is currently writing this text for me. 😄

## Beautify *(ID: HookyQR.beautify)*

- This extension is deprecated but I still use it because it works well for me.
- It allows you to format a variety of file types, namely `javascript`, `JSON`, `CSS`, `Sass`, and `HTML`.

## Path Intellisense *(ID: christian-kohler.path-intellisense)*

- This extension provides auto-completion for file paths.
- It also supports auto-completion for `import` statements in some languages.

## Remote Explorer *(ID: ms-vscode-remote.remote-explorer)*

- This extension provides useful features for working with remote files and folders through SSH.
- It allows you to connect to a remote server and then browse the files and folders on that server.
- It also allows you to use shell commands on that workspace as if it were a local workspace.

## WSL *(ID: ms-vscode-remote.remote-wsl)*

- This extension provides useful features for working with WSL.
- It allows you to connect to a WSL instance and then browse the files and folders on that instance.
- This way you can use [[Visual Studio Code]] to edit and run scripts on your WSL instance.

## Dev Containers *(ID: ms-vscode-remote.remote-containers)*

- This extension enables you to use a [[Docker]] container as a full-featured development environment. (For example, you can use it to run [[Python]] scripts without having [[Python]] installed on your machine.)
- It **requires** you to have [[Docker]] installed and configured.
