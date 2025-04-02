---
tags:
  - tech
aliases:
  - WebSocket
---
**WebSockets** are a **full-duplex communication protocol** that allows **persistent, bidirectional** communication between a client and a server.
Unlike [[HTTP]], which follows a request-response model, WebSockets enable real-time interaction without repeatedly polling the server.
### **Key Features**
- **Persistent Connection:** The connection remains open, reducing overhead.
- **Bidirectional Communication:** Both the server and client can send messages at any time.
- **Low Latency:** No need for repeated [[HTTP]] requests, making it ideal for real-time apps.
- **Uses a Single [[TCP]] Connection:** Unlike [[HTTP]] polling, which repeatedly opens and closes connections.
# How they work
1. **Handshake:** The client initiates a connection with an `Upgrade` request via [[HTTP]].
2. **Connection Upgrade:** The server responds with `101 Switching Protocols`, upgrading the connection to WebSockets.
3. **Persistent Communication:** The connection remains open, allowing real-time data exchange.
4. **Closure:** Either the client or server can close the connection.

# Examples
## Implementing WebSockets in [[Python]]
```python
from fastapi import FastAPI, WebSocket

app = FastAPI()

@app.websocket("/ws")
async def websocket_endpoint(websocket: WebSocket):
    await websocket.accept()
    while True:
        data = await websocket.receive_text()
        await websocket.send_text(f"Message received: {data}")
```

Run with:
```sh
uvicorn myapp:app --host 0.0.0.0 --port 8000
```
Clients can now connect via WebSockets and send messages.

## WebSockets in [[JavaScript]] (Client-Side)
```js
const socket = new WebSocket("ws://localhost:8000/ws");

socket.onopen = () => {
    console.log("Connected to WebSocket");
    socket.send("Hello Server!");
};

socket.onmessage = (event) => {
    console.log("Received:", event.data);
};
```
This script connects to a WebSocket server, sends a message, and listens for responses.

# Security Considerations
- **Use WSS (WebSockets over [[SSL]]/TLS):** Encrypts data to prevent interception.
- **Implement Authentication:** Use tokens or session validation.
- **Rate Limiting:** Prevents abuse and DDoS attacks.
