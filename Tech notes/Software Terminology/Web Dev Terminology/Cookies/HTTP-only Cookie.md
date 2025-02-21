---
tags:
  - tech
---
An [[HTTP]]-only cookie cannot be accessed by client-side [[API|APIs]], such as [[JavaScript]].
This restriction eliminates the threat of cookie theft via [[cross-site scripting]] ([[XSS]]).
However, the cookie remains vulnerable to [[cross-site tracing]] ([[XST]]) and [[cross-site request forgery]] ([[CSRF]]) attacks.
A [[cookie]] is given this characteristic by adding the `HttpOnly` flag to the [[cookie]].
