---
tags:
  - tech
---
A supercookie is a [[Cookie]] with an origin of a top-level domain (such as `.com`) or a public suffix (such as `.co.uk`).
Ordinary cookies, by contrast, have an origin of a specific domain name, such as `example.com`.

Supercookies can be a potential security concern and are therefore often blocked by web browsers.
If unblocked by the browser, an attacker in control of a malicious website could set a supercookie and potentially disrupt or impersonate legitimate user requests to another website that shares the same top-level domain or public suffix as the malicious website.
For example, a supercookie with an origin of `.com`, could maliciously affect a request made to `example.com`, even if the cookie did not originate from `example.com`.
This can be used to fake logins or change user information.

