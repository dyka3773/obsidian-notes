---
tags:
  - tech
  - jquery
aliases:
  - method chaining
  - chaining
---
[[jQuery]] [[object methods]] typically also return a [[jQuery]] object, which enables the use of _method chains_:
```js
$('div.test')
  .on('click', handleTestClick)
  .addClass('foo');
```
This line finds all `div` elements with class attribute `test` , then registers an event handler on each element for the "click" event, then adds the class attribute `foo` to each element.

Certain [[jQuery]] [[object methods]] retrieve specific values (instead of modifying a state).
An example of this is the `val()` method, which returns the current value of a text input element.
In these cases, a statement such as `$('#user-email').val()` cannot be used for chaining as the return value does not reference a [[jQuery]] object.
