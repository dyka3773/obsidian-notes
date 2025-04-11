---
tags:
  - tech
aliases:
  - env vars
  - envars
---
**Environment variables** are dynamic [[key-value pairs]] stored outside of an application’s code that define the **execution context** of a process.
They are used to **configure applications without modifying the source code**, making them especially useful for managing settings across different environments like development, testing, and production.
# Common Uses
- **Configuration settings** (e.g., [[API]] keys, [[Databases|DB]] connection strings)
- **Controlling behavior** (e.g., logging level, debug mode)
- **Environment-specific paths** (e.g., `JAVA_HOME`, `PATH`)
- **Security** (e.g., hiding secrets from source code)
- **[[CI/CD]] pipelines** (e.g., credentials, tokens)
# Where They Are Used
| Context                     | Example Use                                 |
| --------------------------- | ------------------------------------------- |
| **Operating Systems**       | System-wide paths, user-specific settings   |
| **Shells ([[Bash]], Zsh)**  | Temporary configurations for sessions       |
| **Application Configs**     | Web apps using `.env` files                 |
| **Containers ([[Docker]])** | Injecting config into containers at runtime |
| **Cloud Platforms**         | Deploy-time variable management             |
## Examples
### Linux/macOS
```sh
export DATABASE_URL="postgres://user:pass@localhost:5432/db"
echo $DATABASE_URL
```
### Windows [[Batch|CMD]]
```cmd
set NODE_ENV=production
echo %NODE_ENV%
```
### [[Python]]
```python
import os
api_key = os.getenv("API_KEY")
```
### [[Java]]
```java
String env = System.getenv("ENVIRONMENT");
```
# Best Practices
- **Never commit [[Environment Files|`.env` files]]** with secrets to version control.
- **Use environment variables for sensitive information** instead of hardcoding.
- **Validate required variables** at app startup.
- **Document** required variables for other developers or ops teams.
- **Scope appropriately**: Use local envs for development; use platform-specific tools (e.g., AWS Secrets Manager, GitHub Secrets) in production.
# Risks and Pitfalls
- **Leaking secrets** via logs or error messages.
- **Unmanaged growth** of [[environment files]] over time.
- **Incorrect scoping** can lead to cross-contamination of settings.
- **Case sensitivity**: On UNIX, env vars are case-sensitive; on Windows, they are not.
