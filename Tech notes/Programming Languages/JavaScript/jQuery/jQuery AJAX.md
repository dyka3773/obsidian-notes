---
tags:
  - tech
  - jquery
aliases:
  - $.ajax()
---
It is possible to make [[AJAX]] requests (with cross-browser support) with `$.ajax()` to load and manipulate remote data.
```js
$.ajax({
  type: 'POST',
  url: '/process/submit.php',
  data: {
    name : 'John',
    location : 'Boston',
  },
}).then(function(msg) {
  alert('Data Saved: ' + msg);
}).catch(function(xmlHttpRequest, statusText, errorThrown) {
  alert(
    'Your form submission failed.\n\n'
      + 'XML Http Request: ' + JSON.stringify(xmlHttpRequest)
      + ',\nStatus Text: ' + statusText
      + ',\nError Thrown: ' + errorThrown);
});
```
This example posts the data `name=John` and `location=Boston` to `/process/submit.php` on the server. 
When this request finishes the success function is called to alert the user. 
If the request fails it will alert the user to the failure, the status of the request, and the specific error.

The above example uses the `.then()` and `.catch()` methods to register callbacks that run when the response has completed. These promise callbacks must be used due to the asynchronous nature of [[AJAX]] requests.
