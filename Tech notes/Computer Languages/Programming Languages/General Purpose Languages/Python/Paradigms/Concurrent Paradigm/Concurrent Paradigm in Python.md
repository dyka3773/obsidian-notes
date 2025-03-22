---
tags:
  - tech
  - python
aliases:
  - python concurrency
---
The **Concurrent Programming Paradigm** is a design approach where multiple computations execute **independently** and may run **simultaneously** to improve performance.
In [[Python]], concurrency allows multiple tasks to make progress without necessarily executing at the same instant.

**Key Concepts in Concurrency:**
- **[[Concurrency]]:** Multiple tasks start, run, and complete in overlapping time periods (but not necessarily at the same time).
- **[[Parallelism]]:** Tasks are executed **exactly** at the same time using multiple CPU cores.
- **[[Threading vs Multiprocessing]]:** Threads share memory, while processes have separate memory spaces.
- **[[Asynchronous Programming]]:** Tasks don’t block each other while waiting for input/output (I/O).

# Concurrency Models in [[Python]]
[[Python]] provides several ways to handle concurrency:

| Model                                   | Module            | Best Use Case                                                                              |
| --------------------------------------- | ----------------- | ------------------------------------------------------------------------------------------ |
| **Threads (Preemptive Concurrency)**    | `threading`       | I/O-bound tasks (e.g., network requests, file I/O)                                         |
| **Processes (Parallel Execution)**      | `multiprocessing` | CPU-bound tasks (e.g., data processing, calculations)                                      |
| **Async I/O (Cooperative Concurrency)** | `asyncio`         | High-performance I/O-bound tasks (e.g., [[web scraping]], [[Databases\|database]] queries) |
> See also:
> - [[threading]]
> - [[multiprocessing]]
> - [[asyncio]]
