---
tags:
  - tech
aliases:
  - Single Sign-On
  - Single-Sign-On
  - Single Sign On
---
**Single Sign-On (SSO)** is an **authentication mechanism** that allows users to log in once and gain access to multiple applications or services without needing to authenticate again. 
It improves user experience and security by centralizing authentication.

# How SSO Works
1. User Requests Access: The user attempts to log in to an application (**Service Provider - SP**).
2. SSO Redirects to Identity Provider (IdP): If the user is not already authenticated, they are redirected to the **Identity Provider (IdP)** (e.g., Google, Okta, Microsoft Azure AD).
3. User Authenticates: The IdP verifies credentials (username/password, multi-factor authentication, etc.).
4. IdP Issues a Token: Once authenticated, the IdP generates a **session token** or **assertion** (e.g., [[SAML]], [[JWT]], [[OAuth]]).
5. Token is Used for Access: The user is redirected back to the original application (SP) with the authentication token, granting access.
6. User Can Access Other Applications: Other connected applications recognize the SSO session and don’t require re-authentication.

# SSO Protocols & Standards
## [[SAML]] ([[SAML|Security Assertion Markup Language]])
- [[XML]]-based protocol used in enterprise environments (e.g., Okta, Microsoft AD FS).
- Common in **corporate intranets and cloud apps**.
## [[OAuth]] 2.0 + OpenID Connect (OIDC)
- [[OAuth]] 2.0 handles authorization & OpenID Connect adds authentication.
- Used for web & mobile apps (Google, Facebook, Microsoft Login).
## [[Kerberos]]
Used in Windows [[Active Directory]] for secure authentication within corporate networks.

# Pros & Cons of SSO
## Benefits
- **Improved User Experience** - No need to log in multiple times.
- **Stronger Security** - Reduces password fatigue and reliance on weak passwords.
- **Centralized Authentication** - Easier to manage user access from one place.
- **Reduces IT Costs** - Fewer password reset requests.
## Challenges & Risks
- **Single Point of Failure** - If the IdP goes down, users may be locked out.
- **Security Risks** - A compromised SSO account can grant access to multiple services.
- **Implementation Complexity** - Integrating different systems can be challenging.
