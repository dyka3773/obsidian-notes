---
tags:
  - tech
  - python
---
**FastAPI** is a **high-performance, asynchronous web framework** for building [[API|APIs]] with [[Python]].
It is based on **[[Starlette]]** and **[[Pydantic]]**, making it **fast, easy to use, and highly efficient**.

**Key Features:**
- **Fast & Asynchronous**: Built on **[[ASGI]]** ([[ASGI|Asynchronous Server Gateway Interface]]).
- **Auto-Generated [[API]] Documentation**: Comes with **[[OpenAPI|Swagger UI]]** and **[[Redoc]]**.
- **[[Type hinting|Type Hints]] for Data Validation**: Uses **[[Pydantic]]** for automatic validation.
- **Dependency Injection**: Easy to manage complex logic and authentication.
- **Compatible with [[Databases]]**: Works with [[SQL]] ([[SQLAlchemy]], [[TortoiseORM]]) & [[NoSQL Databases|NoSQL]] ([[MongoDB]]).
# Why Use FastAPI?
- **Speed**: Faster than [[Flask]] and nearly as fast as [[Node.js]] & [[Go]].
- **Developer-Friendly**: Auto-completes in editors like [[Visual Studio Code|VS Code]] & [[PyCharm]].
- **Minimal Boilerplate**: Less code than [[Flask]] & [[Django]] [[REST]] Frameworks.
- **Built-in Security**: [[OAuth|OAuth2]], [[JWT]], and authentication support.
- **Automatic Data Validation**: Uses [[Type hinting|Python type hints]] and **[[Pydantic]]** models.
# Example: Simple FastAPI Application
```python
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Hello, FastAPI!"}
```
> FastAPI automatically generates [[OpenAPI]] documentation.
## Running FastAPI
Run the application using [[Uvicorn]]:
```sh
# Assuming your filename is main.py
uvicorn main:app --reload
```
### [[OpenAPI]] **[[OpenAPI|Swagger UI]]** available at:
- http://127.0.0.1:8000/docs
### **[[Redoc]] Documentation** available at:
- http://127.0.0.1:8000/redoc
# Request & Response Body for Data Validation (with [[Pydantic]])
```python
from pydantic import BaseModel

class Item(BaseModel):
    name: str
    price: float
    in_stock: bool = True

@app.post("/items/")
def create_item(item: Item):
    return {"message": "Item created", "item": item}
```
> FastAPI automatically validates and converts [[JSON]] request bodies.

```python
from fastapi import HTTPException

class User(BaseModel):
    username: str
    email: str

@app.get("/user/{user_id}", response_model=User)
def get_user(user_id: int):
    if user_id == 1:
        return {"username": "JohnDoe", "email": "john@example.com"}
    raise HTTPException(status_code=404, detail="User not found")
```
> Ensures the [[API]] response follows the `User` model format.

# Advanced Features
- [[FastAPI BackgroundTasks]]
- [[FastAPI WebSocket]]
