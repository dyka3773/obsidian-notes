---
tags:
  - tech
aliases:
  - NoSQL
  - NoSQL Database
---
NoSQL (**Not Only SQL**) databases are **non-relational** databases designed to handle large-scale data storage and high-speed operations.
Unlike traditional **[[Relational Databases|SQL (relational) databases]]**, NoSQL databases do not use structured **tables, rows, and columns**. Instead, they support **flexible schema models** such as **[[key-value pairs]], documents, column-family stores, and graph structures**.

# Why use it?
- Handles **big data** and **high-velocity** applications
- **Schema-less** (flexible structure)
- **Horizontally [[Scalability|scalable]]** (distributed across multiple servers)
- Designed for **high availability and fault tolerance**
- Supports **[[Unstructured Data|unstructured]] and [[semi-structured data]]**

# Challenges of using it
- **No Standard Query Language**: Each [[Databases|database]] has its own querying method
- **Limited [[ACID]] [[Transactions]]**: Some NoSQL databases sacrifice [[consistency]] for speed
- **Data Redundancy**: NoSQL allows denormalization, which can lead to redundant data

See also [[NoSQL Database Model Comparison]].
