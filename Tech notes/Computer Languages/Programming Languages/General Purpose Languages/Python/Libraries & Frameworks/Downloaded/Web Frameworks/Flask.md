---
tags:
  - tech
---
**Flask** is a lightweight, flexible web framework for building web applications in **[[Python]]**.
It follows the **[[WSGI]] ([[WSGI|Web Server Gateway Interface]])** standard and is often referred to as a **microframework** because it provides the basic tools to build a web app but leaves most decisions (like [[Databases|database]], authentication, etc.) to the developer.

Flask is designed to be **simple, unopinionated, and extensible**, making it popular for small projects, [[API|APIs]], and also large applications when combined with additional libraries.
# Core Concepts
## Routing
Defines how URLs are mapped to [[Python]] functions (called views or endpoints).
Example:
```python
from flask import Flask
app = Flask(__name__)

@app.route('/')
def home():
    return "Hello, World!"
```
## Request and Response
Flask provides an easy way to access request data and build responses.
Example:
```python
from flask import request

@app.route('/greet', methods=['POST'])
def greet():
    name = request.form.get('name')
    return f"Hello, {name}"
```
## Templates
Uses **[[Jinja2]]** templating engine to render dynamic [[HTML]].
Example:
```python
from flask import render_template

@app.route('/profile')
def profile():
    return render_template('profile.html', name="Alice")
```
## Extensions
Flask has a rich ecosystem of extensions to add features like:
- [[Databases|Database]] [[ORM]]: `Flask-SQLAlchemy`
- Form validation: `Flask-WTF`
- Authentication: `Flask-Login`
- [[API]] building: `Flask-RESTful`, `Flask-Smorest`
# Key Features
- **Minimalistic Core**: You get routing, request/response handling, and templating out of the box.
- **Flexible Structure**: No imposed way to organize code.
- **Extensible**: Add features only if and when needed.
- **Built-in Development Server and Debugger**: Useful for fast iteration.
- **Integrated Unit Testing Support**: Comes with testing tools for writing tests easily.
# When to Use Flask
- You need quick prototypes or small to medium web applications.
- You want full control over components and architecture.
- You are building [[REST]] [[API|APIs]] or [[microservices]].
- You prefer adding only what you need instead of having everything pre-integrated.
