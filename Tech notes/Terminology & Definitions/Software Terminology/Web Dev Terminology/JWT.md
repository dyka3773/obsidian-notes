---
tags:
  - tech
aliases:
  - JSON Web Token
---
JSON Web Token (JWT, suggested pronunciation "jot") is a proposed Internet standard for creating data with optional signature and/or optional encryption whose payload holds [[JSON]] that asserts some number of claims. 
The tokens are signed either using a private secret or a public/private key.

For example, a server could generate a token that has the claim "logged in as administrator" and provide that to a client. 
The client could then use that token to prove that it is logged in as admin. 
The tokens can be signed by one party's private key (usually the server's) so that any party can subsequently verify whether the token is legitimate. 
If the other party, by some suitable and trustworthy means, is in possession of the corresponding public key, they too are able to verify the token's legitimacy. 
The tokens are designed to be compact, URL-safe, and usable, especially in a web-browser [[SSO|single-sign-on]] ([[SSO]]) context. 
JWT claims can typically be used to pass identity of authenticated users between an identity provider and a service provider, or any other type of claims as required by business processes.
