---
tags:
  - tech
---
**SQLite** is a **lightweight, self-contained, and serverless relational [[Databases|database]] management system ([[Relational Databases|RDBMS]])**.
It is embedded directly into applications, requiring no standalone server process.

# Key Features
- Zero Configuration: No setup, installation, or administration required.
- Self-Contained: Entire [[Databases|database]] is stored in a single file.
- Cross-Platform: Works on Windows, Linux, macOS, and mobile devices (iOS, [[Android]]).
- [[ACID]]-Compliant: Ensures reliability through [[transactions]].
- Small Footprint: Less than 1MB in size.
- Public Domain: Free to use for commercial and personal projects.

# Why Use It?
## Advantages
- Lightweight & Fast: Ideal for small applications and embedded systems.
- Portable: A single file can be moved across devices.
- No Configuration Needed: Works out of the box.
-  Reliable: Uses rollback journal or WAL (Write-Ahead Logging) for data integrity.
- Highly [[Scalability|Scalable]]: Supports terabytes of data (though not for high concurrency).

## Disadvantages
- Not Ideal for High Concurrency: Limited to one write operation at a time.
- Lacks Some Enterprise Features: No built-in user authentication, stored procedures, or fine-grained access control.
- Not for Large-Scale Web Apps: Best suited for local storage, not distributed databases.

**When to use it**: Mobile apps (iOS, [[Android]]), Embedded systems (IoT, Smart TVs, Game Consoles), Desktop applications (Browsers, Media Players), Lightweight websites (Local storage, caching)

**When NOT to use it**: High-concurrency applications (use [[PostgreSQL]], [[MySQL]], or [[MariaDB]]),
Large-scale distributed applications, Multi-user applications requiring extensive security
