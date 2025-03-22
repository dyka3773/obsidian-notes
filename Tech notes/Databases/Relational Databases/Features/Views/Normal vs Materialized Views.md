---
tags:
  - tech
---
| Feature         | Normal [[Database View\|View]]                | Materialized View                  |
| --------------- | -------------------------- | ---------------------------------- |
| **Storage**     | No physical storage        | Data is stored physically          |
| **Performance** | Executes query dynamically | Faster reads (precomputed data)    |
| **Use Case**    | Real-time data updates     | Analytical reports, large datasets |
> Materialized views improve performance by caching query results.
