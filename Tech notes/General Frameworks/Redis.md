---
tags:
  - tech
aliases:
  - Remote Dictionary Server
---
**Redis (Remote Dictionary Server)** is an **open-source**, **in-memory**, **[[Key-Value Pairs|key-value]] data store** primarily used as a **[[cache]], [[message broker]], and [[Databases|database]]**.
It supports **high-performance read/write operations**, making it one of the fastest [[databases]] available.

**Key Features:**
- **In-Memory Storage**: Stores data in RAM for ultra-fast access.
- **[[Key-Value Pairs|Key-Value]] Data Model**: Supports strings, lists, sets, hashes, bitmaps, and more.
- **Persistence Options**: Can save data to disk with snapshots or append-only files (AOF).
- **Pub/Sub Messaging**: Enables real-time communication between processes.
- **Replication & Clustering**: Supports master-slave replication for high availability.
- **[[Atomicity|Atomic]] [[Transactions]]**: Uses Lua scripting for multi-step commands.

# Why Use Redis?
- **Super Fast:** Redis operates in memory, making it significantly faster than traditional [[databases]].
- **Versatile Data Structures:** Unlike simple [[Key-Value Pairs|key-value]] stores, Redis supports lists, sets, and more.
- **Caching:** Redis is commonly used for [[caching]] [[Databases|database]] queries, session data, and [[API]] responses.
- **Real-Time Processing:** Used in chat applications, gaming leaderboards, and analytics.
- **[[Scalability]]:** Supports replication and clustering for distributed deployments.

# Redis Data Types & Commands
| **Data Type**  | **Description**                                   | **Example Command**               |
| -------------- | ------------------------------------------- | --------------------------------- |
| **St Simple [[Key-Value Pairs\|key-value pairs]] ]  ]  ]  ]  ]  ]  | `SET name "Alice"`                |
| **List**       | Ordered co                                        | `LPUSH mylist 10 20 30`           |
| **Set**        |                                                   | `SADD myset "apple" "banana"`     |
| **Hash**       | [[                                                | `HSET user:1 name "Alice" age 25` |
| **Sorted Set** |                              a r    ing    ore    | `ZADD leaderboard 100 "player1"`  |
# Using Redis as a Cache
Redis is commonly used for **caching** [[Databases|database]] queries, [[API]] responses, and session data.
## Example: Caching with Expiry Time
```sh
SET user:1001 "John Doe" EX 3600  # Expires in 1 hour
```
> This reduces [[Databases|database]] load and improves response times.
# Redis Pub/Sub ([[Message Queue]])
Redis can handle **real-time messaging** with **publish-subscribe (Pub/Sub)**.
## Example: Publishing and Subscribing to a Channel
```sh
SUBSCRIBE news_channel
PUBLISH news_channel "Breaking News: Redis is awesome!"
```
> Useful for chat apps, notifications, and event-driven systems.
# Redis Persistence (Data Backup & Recovery)
Redis offers two persistence methods:
1. **RDB (Redis Database File)**: Creates **snapshots** of data at set intervals.
2. **AOF (Append-Only File)**: Logs each write operation for durability.
## Enable Persistence in `redis.conf`:
```sh
save 900 1   # Save every 900 seconds if at least 1 change occurs
appendonly yes  # Enable AOF for durability
```
> This prevents data loss in case of system failures.
# [[Scalability|Scaling]] Redis (Replication & Clustering)
## Master-Slave Replication
Redis supports **one master** with multiple **read-only slaves** to distribute read requests.
```sh
SLAVEOF 192.168.1.10 6379  # Make a Redis instance a replica of another
```
## Redis Clustering
Redis Cluster partitions data across multiple nodes, **enabling horizontal [[Scalability|scaling]]**.
```sh
redis-cli --cluster create 192.168.1.1:6379 192.168.1.2:6379 192.168.1.3:6379 --cluster-replicas 1
```

# Example: Integrating Redis with [[Python]]
1. Installing Redis Client for [[Python]]
```sh
pip install redis
```
2. Usage in [[python]]
```python
import redis

# Connect to Redis
r = redis.Redis(host='localhost', port=6379, decode_responses=True)

# Set and Get a value
r.set("user:1", "Alice")
print(r.get("user:1"))  # Output: Alice
```
