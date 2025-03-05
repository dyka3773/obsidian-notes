---
tags:
  - tech
---
A _ghost_ is the object that is to be loaded in a partial state.
It may initially only contain the object's identifier, but it loads its own data the first time one of its properties is accessed.
For example, consider that a user is about to request content via an online form.
At the time of creation, the only information available is that content will be accessed, but the specific action and content is unknown.

An example in [[PHP]]:
```php
$userData = array (
    "UID" = > uniqid(),
    "requestTime" => microtime(true),
    "dataType" => "",
    "request" => ""
);

if (isset($_POST['data']) && $userData) {
    // ...
}
```
