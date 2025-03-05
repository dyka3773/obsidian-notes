---
tags:
  - tech
  - jquery
aliases:
  - Typical jQuery start-point
---
Typically, [[jQuery]] is used by putting initialization code and event handling functions in `$(_handler_)`. 
This is triggered by [[jQuery]] when the browser has finished constructing the [[DOM]] for the current Web page.
```js
$(function () {
        // This anonymous function is called when the page has completed loading.
        // Here, one can place code to create jQuery objects, handle events, etc.
});
```
or
```js
$(fn); // The function named fn, defined elsewhere, is called when the page has loaded.
```
Historically, `$(document).ready(callback)` has been the de facto idiom for running code after the [[DOM]] is ready. However, since [[jQuery]] 3.0, developers are encouraged to use the much shorter `$(handler)` signature instead.