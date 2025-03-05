---
tags:
  - tech
---
Idempotence is a property of certain operations in mathematics and computer science that ensures repeated applications of the operation produce the same result as a single application.
In other words, an idempotent operation can be executed multiple times without changing the final outcome beyond its initial effect.

## Idempotence in Different Contexts

### 1. Mathematics
- An operation `f(x)` is idempotent if: `f(f(x))=f(x)`
- Example: The absolute value function `f(x)=∣x∣` is idempotent because applying it multiple times does not change the result beyond the first application.
### 2. Computer Science & Software Development
**Function calls & methods:** A function is idempotent if calling it multiple times with the same input always returns the same output without additional side effects.
#### Examples
##### [[REST]] [[API|APIs]]
- A **[[GET]]** request is idempotent because retrieving data multiple times does not modify the server state.
- A **[[DELETE]]** request is also idempotent: deleting an existing resource once or multiple times has the same effect.
- A **[[PUT]]** request (update) is idempotent, whereas a **[[POST]]** request (creating new resources) is not.
##### Distributed Systems & Networking
- In networking, **retransmitted requests** (e.g., retrying failed requests) should be idempotent to avoid unintended side effects.
- Example: If a money transfer operation is retried due to a timeout, it should be designed to **not** send multiple payments unintentionally.
##### [[Databases]]
- **[[SQL]] `INSERT` vs. `UPDATE`:** An `INSERT` statement is not idempotent (it creates duplicates), but an `UPDATE` statement can be idempotent if it sets the value deterministically.
- **Idempotent [[Transactions]]:** Financial transactions must be designed to prevent duplicate entries if retried.

## Why Idempotence Matters
- **Reliability**: Helps in building fault-tolerant systems, especially in [[microservices]] and distributed computing.
- **[[Consistency]]**: Ensures predictable behavior, avoiding unintended state changes.
- **Error Handling**: Retries and failures won’t cause undesired side effects.
