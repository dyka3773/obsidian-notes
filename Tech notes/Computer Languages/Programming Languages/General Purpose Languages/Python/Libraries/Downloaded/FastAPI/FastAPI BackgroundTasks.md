---
tags:
  - tech
  - python
aliases:
  - BackgroundTasks
---
[[FastAPI]] allows you to run background tasks in a way that is easy to test and maintain. This is done using the `BackgroundTasks` class.

```python
from fastapi import BackgroundTasks

def send_email(email: str):
    print(f"Sending email to {email}...")

@app.post("/register/")
def register_user(email: str, background_tasks: BackgroundTasks):
    background_tasks.add_task(send_email, email)
    return {"message": "User registered, email will be sent."}
```
> Executes background tasks without blocking the API request.
