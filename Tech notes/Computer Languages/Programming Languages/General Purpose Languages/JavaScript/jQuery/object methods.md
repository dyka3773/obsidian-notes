---
tags:
  - tech
  - jquery
aliases:
  - jQuery Methods
---
The `jQuery` function is a [[Factory method|factory]] for creating a [[jQuery]] object that represents one or more [[DOM]] nodes.
[[jQuery]] objects have methods to manipulate these nodes.
These methods (sometimes called commands), are chainable as each method also returns a [[jQuery]] object.

Access to and manipulation of multiple [[DOM]] nodes in [[jQuery]] typically begins with calling the `$` function with a [[CSS]] selector string.
This returns a [[jQuery]] object referencing all the matching elements in the [[HTML]] page.
`$("div.test")`, for example, returns a [[jQuery]] object with all the `div` elements that have the class `test`. 
This node set can be manipulated by calling methods on the returned [[jQuery]] object.
