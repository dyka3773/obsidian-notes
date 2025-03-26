---
tags:
  - tech
  - python
---

| Feature                | **[[WSGI]]**                     | **[[ASGI]]**                        |
| ---------------------- | -------------------------------- | ----------------------------------- |
| **Request Handling**   | Synchronous (Blocking)           | Asynchronous (Non-blocking)         |
| **WebSockets Support** | No                               | Yes                                 |
| **Best for**           | [[REST]] [[API\|APIs]], Web Apps | Real-time Apps, [[WebSockets]]      |
| **Used in**            | [[Flask]], [[Django]], Pyramid   | [[FastAPI]], [[Django]] (ASGI mode) |
> As their name suggests, [[WSGI]] is great for traditional web apps, while [[ASGI]] is better for async applications.