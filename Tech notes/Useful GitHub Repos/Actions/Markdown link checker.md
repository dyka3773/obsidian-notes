---
tags:
  - tech
---
Link: [Here](https://github.com/gaurav-nelson/github-action-markdown-link-check)

Description: A GitHub Action to check for broken links in [[Markdown]] files.

### Sample usage:

```yml
name: Check Markdown links

on: push

jobs:
  markdown-link-check:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@master
    - uses: gaurav-nelson/github-action-markdown-link-check@v1
```