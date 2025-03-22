---
tags:
  - tech
  - python
  - todo
aliases:
  - AsyncIO
---
The `asyncio` module enables **cooperative concurrency**, where tasks **yield control** while waiting (e.g., for network responses).
Unlike `threading`, `asyncio` doesn't use multiple threads but **single-threaded event loops** for non-blocking execution.

# Example: Async [[HTTP]] Requests (Non-blocking I/O)
```python
import asyncio

async def say_hello():
    print("Hello")
    await asyncio.sleep(1)  # Simulate async task
    print("World")

async def main():
    await asyncio.gather(say_hello(), say_hello())

asyncio.run(main())
```
> `asyncio` is **ideal for I/O-bound** tasks like **network requests, [[Databases|database]] queries, or web crawling**.

- [ ] TODO: Enhance this