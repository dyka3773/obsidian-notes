---
tags:
  - tech
  - python
aliases:
  - Asynchronous Server Gateway Interface
---
**ASGI (Asynchronous Server Gateway Interface)** is a **specification for [[Python]] web servers and applications** that supports **asynchronous** and **synchronous** execution.
It was designed as a replacement for **[[WSGI]] ([[WSGI|Web Server Gateway Interface]])** to enable **high-performance, event-driven applications** such as [[WebSockets]], long [[polling]], and background tasks.

### Key Features of ASGI
- **Supports Asynchronous and Synchronous Code**: Works with both `async` and traditional blocking [[Python]] code.
- **Handles Multiple Protocols**: Supports [[HTTP]], [[WebSockets]], and other real-time communication.
- **Non-Blocking Execution**: Ideal for handling high-concurrency applications.
- **Event-Driven**: Can process requests in parallel, unlike [[WSGI]].

# ASGI Application Structure
An ASGI application is an **async function** that accepts three [[Arguments|parameters]]:
- **scope**: Contains request metadata (e.g., type, headers, method).
- **receive**: An async function to receive incoming messages.
- **send**: An async function to send responses.
## Example: Minimal ASGI App
```python
async def app(scope, receive, send):
    assert scope["type"] == "http"

    response_body = b"Hello, ASGI!"
    await send({
        "type": "http.response.start",
        "status": 200,
        "headers": [(b"content-type", b"text/plain")],
    })
    await send({
        "type": "http.response.body",
        "body": response_body,
    })
```
This simple ASGI app handles an [[HTTP]] request and returns `"Hello, ASGI!"`.
# Lifespan Events
ASGI applications support **startup** and **shutdown** events for resource management.

```python
async def app(scope, receive, send):
    if scope["type"] == "lifespan":
        while True:
            message = await receive()
            if message["type"] == "lifespan.startup":
                print("Application starting...")
            elif message["type"] == "lifespan.shutdown":
                print("Application shutting down...")
                break
```
> These events can be used for **[[Databases|database]] connections, background tasks, and resource cleanup**.

In order to understand ASGI & [[WSGI]] standards better I suggest also watching [this playlist](https://www.youtube.com/playlist?list=PLJ_usHaf3fgO_PgB1zTSlKVSqDdvh49bi)