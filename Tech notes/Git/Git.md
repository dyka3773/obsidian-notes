---
tags:
  - tech
---
Git is a distributed version control system that tracks versions of files.
It is often used to control source code by programmers who are developing software collaboratively.

Frequently used commands for Git's [[CLI|command-line interface]] include:
- `git init`, which is used to create a git repository.
- `git clone [URL]`, which _clones_, or duplicates, a git repository from an external URL.
- `git add [file]`, which adds a file to git's _working directory_ (files about to be committed).
- `git commit -m [commit message]`, which _commits_ the files from the current working directory (so they are now part of the repository's history).

A `.gitignore` file may be created in a Git repository as a plain text file.
The files listed in the `.gitignore` file will not be tracked by Git.
This feature can be used to ignore files with keys or passwords, various extraneous files, and large files (which GitHub will refuse to upload).

