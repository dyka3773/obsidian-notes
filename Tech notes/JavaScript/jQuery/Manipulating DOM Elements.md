---
tags:
  - tech
  - jquery
aliases:
  - Creating new DOM elements
---
Besides accessing existing [[DOM]] nodes through [[jQuery]], it is also possible to create new [[DOM]] nodes, if the string passed as the argument to `$()` [[Factory method|factory]] looks like [[HTML]].

For example, the below code finds an HTML `select` element, and creates a new `option` element with the value `VAG` and the label `Volkswagen`, which is then appended to the select menu:
```js
$('select#car-brands')
  .append($('<option>')
    .prop(value,"VAG")
    .text('Volkswagen')
  );
```
