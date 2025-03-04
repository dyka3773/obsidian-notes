---
tags:
  - tech
---
In 2016 Google Chrome version 51 introduced a new kind of [[Cookie]] with attribute `SameSite` with possible values of `Strict`, `Lax` or `None`.
With attribute `SameSite=Strict`, the browsers would only send cookies to a target domain that is the same as the origin domain.
This would effectively mitigate [[cross-site request forgery]] ([[CSRF]]) attacks.
With `SameSite=Lax`, browsers would send cookies with requests to a target domain even it is different from the origin domain, but only for _safe_ requests such as [[GET]] ([[POST]] is unsafe) and not third-party cookies (inside iframe).
Attribute `SameSite=None` would allow third-party (cross-site) cookies, however, most browsers require [[Secure Cookie|secure attribute]] on `SameSite=None` cookies.


