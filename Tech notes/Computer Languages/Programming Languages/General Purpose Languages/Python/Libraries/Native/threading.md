---
tags:
  - tech
aliases:
---
The **threading** module allows multiple tasks to run concurrently.
However, due to the **[[Global Interpreter Lock]] ([[GIL]])**, [[Python]] threads don’t run in true parallelism.
They are useful for **I/O-bound** operations like **downloading files** or **reading web pages**.

# Example
```python
import threading
import time

def print_numbers():
    for i in range(5):
        print(f"Number: {i}")
        time.sleep(1)

# Creating two threads
t1 = threading.Thread(target=print_numbers)
t2 = threading.Thread(target=print_numbers)

t1.start()
t2.start()

t1.join()
t2.join()

print("Both threads finished execution.")
```
> **Threads share memory** and run concurrently, allowing for efficient handling of **I/O-heavy** tasks.
