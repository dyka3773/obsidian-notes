---
tags:
  - tech
aliases:
  - Single Logout
---
**Single Logout (SLO)** is a process that allows a user to **log out from all connected applications and services at once** after ending a session with a central identity provider.
It is the logout counterpart to **[[SSO|Single Sign-On]] ([[SSO]])**.

In a typical **[[SSO]]-enabled system**, a user signs in once and gains access to multiple systems.
With SLO, ending the session in one system **terminates the session across all systems**, ensuring consistent security and session management.
# How It Works
When a user initiates a logout from one service:
1. The **service provider (SP)** notifies the **identity provider (IdP)**.
2. The IdP sends **logout requests to all other SPs** where the user has active sessions.
3. Each SP invalidates the session and optionally confirms the logout to the IdP.
4. The user is fully logged out from all linked services.
This process can be **back-channel** (server-to-server) or **front-channel** (browser-mediated via redirects or iframes).
# Protocol Support
| Protocol                  | SLO Support                                                                                                        |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| **[[SAML]] 2.0**              | Native support for SLO with both front-channel and back-channel options                                            |
| **OIDC (OpenID Connect)** | Limited support; SLO not part of the core spec but possible via session management or backchannel logout extension |
| **[[OAuth]] 2.0**             | Does not define logout behavior; depends on extensions or custom implementation                                    |
# Use Cases
- Enterprise environments with many web applications using [[SSO]]
- Cloud platforms with federated identity services
- Education or healthcare portals where users access multiple connected tools
# Security Considerations
- Ensure logout tokens or requests are **authenticated and verified**.
- Prevent **logout [[CSRF]]** by validating user intent.
- Use secure transmission channels (e.g., [[HTTPS]]) for logout requests and responses.
