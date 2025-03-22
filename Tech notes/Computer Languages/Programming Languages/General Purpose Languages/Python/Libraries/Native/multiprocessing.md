---
tags:
  - tech
  - python
---
The **multiprocessing** module allows **true parallelism** by creating separate processes, each with its own memory space.
This is useful for CPU-intensive tasks like **image processing** or **scientific computing**.

# Example: Running Multiple Processes
```python
import multiprocessing
import os

def worker():
    print(f"Process ID: {os.getpid()}")

if __name__ == "__main__":
    processes = []
    for _ in range(3):
        p = multiprocessing.Process(target=worker)
        p.start()
        processes.append(p)

    for p in processes:
        p.join()
```
> Each process runs **independently** and leverages multiple CPU cores for **true parallel execution**.
