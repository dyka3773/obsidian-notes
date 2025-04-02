---
tags:
  - tech
  - python
---
[[FastAPI]] supports [[WebSockets]] out of the box. 
This is a simple example of how to use [[WebSockets]] with [[FastAPI]].

```python
from fastapi import WebSocket

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    while True:
        data = await websocket.receive_text()
        await websocket.send_text(f"Message: {data}")
```
> Supports real-time communication like chat apps.
