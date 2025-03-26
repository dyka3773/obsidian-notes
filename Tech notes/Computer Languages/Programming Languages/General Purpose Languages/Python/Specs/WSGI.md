---
tags:
  - tech
  - python
aliases:
  - Web Server Gateway Interface
---
**WSGI (Web Server Gateway Interface)** is a **[[Python]] standard** that defines how web servers communicate with web applications.
It allows [[Python]] web applications (e.g., [[Flask]], [[Django]]) to interact with web servers (e.g., Apache, [[Nginx]], Gunicorn, uWSGI).

**Key Features:**
- **Middleware Between Web Servers & Applications**: Connects [[Python]] apps to web servers.
- **Synchronous Processing**: Unlike [[ASGI]], WSGI does not support real-time features.
- **Framework Compatibility**: Works with [[Flask]], [[Django]], Pyramid, etc
- **Single-Threaded by Default**: Can be [[Threading vs Multiprocessing|multi-threaded or multi-process]] with Gunicorn/uWSGI.
> WSGI is a specification ([PEP 3333](https://peps.python.org/pep-3333/)) and not a framework or server.
# How It Works
A WSGI server acts as a bridge between a web application and a web server.
## WSGI Request Flow:
1. **Client (Browser/[[Postman]])** → Sends a request (e.g., `GET /home`).
2. **Web Server (Apache/[[Nginx]])** → Receives the request.
3. **WSGI Server (Gunicorn/uWSGI)** → Passes the request to the WSGI app.
4. **[[Python]] Web App ([[Flask]]/[[Django]])** → Processes the request and returns a response.
5. **WSGI Server → Web Server → Client** → Sends the response back to the client.

In order to understand [[ASGI]] & WSGI standards better I suggest also watching [this playlist](https://www.youtube.com/playlist?list=PLJ_usHaf3fgO_PgB1zTSlKVSqDdvh49bi)