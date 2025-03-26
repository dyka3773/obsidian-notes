---
tags:
  - tech
aliases:
  - Open Authorization
  - OAuth2
---
OAuth (**Open Authorization**) is an **open standard protocol** for **secure authorization** that allows applications to access a user’s data **without exposing their credentials**.
It enables **third-party applications** to request **limited access** to a user's account on another service.

**Key Features:**
- **Delegated Access**: Users can grant apps permission **without sharing passwords**
- **Token-Based Authentication**: Uses access tokens instead of credentials
- **[[Scalability|Scalable]] & Secure**: Ideal for [[API|APIs]], mobile apps, and cloud services
- **Supports [[SSO|Single Sign-On]] ([[SSO]])**: Used by platforms like Google, Facebook, GitHub

# How it works
OAuth **separates authentication and authorization** using **access tokens**.
Instead of logging in with a username and password, an application **requests permission** from the user to access their data on another platform.

## Basic OAuth 2.0 Flow
1. **User Requests Access**: A third-party app asks for permission to access user data.
2. **User Grants Permission**: The user authenticates and approves the request.
3. **Authorization Server Issues Token**: A temporary **access token** is generated.
4. **App Uses Token to Access Resources**: The app includes the token in [[API]] requests.

# Key Components
| **Component**            | **Description**                                                          |
| ------------------------ | ------------------------------------------------------------------------ |
| **Resource Owner**       | The user who grants access to their data                                 |
| **Client**               | The third-party app requesting access                                    |
| **Authorization Server** | Issues access tokens after user approval                                 |
| **Resource Server**      | The [[API]] or service hosting the protected data                        |
| **Access Token**         | A credential used by the client to access protected resources            |
| **Refresh Token**        | A long-lived token to request new access tokens without user interaction |

# Popular OAuth Providers & Use Cases
| **Provider**           | **Use Case**                                |
| ---------------------- | ------------------------------------------- |
| **Google OAuth**       | Sign in with Google, Google APIs access     |
| **Facebook OAuth**     | Social media login, Facebook Graph API      |
| **GitHub OAuth**       | GitHub authentication, developer API access |
| **Microsoft Azure AD** | Enterprise SSO, Office 365 integration      |
