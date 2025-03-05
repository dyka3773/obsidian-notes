---
tags:
  - tech
aliases:
  - noConflict
---
[[jQuery]] provides a `$.noConflict()` function, which relinquishes control of the `$` name. 
This is useful if [[jQuery]] is used on a Web page also linking another library that demands the `$` symbol as its identifier. 
In no-conflict mode, developers can use `jQuery` as a replacement for `$` without losing functionality.
