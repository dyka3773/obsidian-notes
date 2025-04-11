---
tags:
  - tech
aliases:
  - Load Balancer
---
**Load balancing** is the process of distributing incoming network or application traffic across multiple servers to ensure **no single server becomes overwhelmed**, thereby improving performance, reliability, and availability of services.
It acts as a traffic manager that ensures users get routed to optimal resources.

# Why It’s Used
- To **[[Scalability|scale]] horizontally** by adding more servers
- To **increase fault tolerance**: if one server fails, others continue to serve traffic
- To **reduce latency** by routing requests based on proximity or performance
- To **optimize resource usage**
# Types of Load Balancing
## Layer 4 Load Balancing
Operates at the **Transport Layer** ([[TCP]]/[[UDP]]). Makes routing decisions based on [[IP]] address and port information.
- Faster, more efficient
- Cannot inspect application-level content
## Layer 7 Load Balancing
Operates at the **Application Layer**. Makes decisions based on [[HTTP]] headers, [[Cookie|cookies]], URL paths, etc.
- Allows for intelligent routing (e.g. A/B testing, URL-based routing)
- Supports content switching and user session awareness
# Load Balancing Algorithms
|Algorithm|Description|
|---|---|
|**[[Round-robin\|Round Robin]]**|Requests are distributed evenly across all servers|
|**Least Connections**|Traffic is sent to the server with the fewest active connections|
|**IP Hash**|Uses client IP to determine which server handles the request|
|**Weighted Round Robin**|Servers are assigned weights based on capacity|
|**Random**|Requests are distributed randomly|
|**Response Time-Based**|Sends traffic to the server with the lowest response time|
# Health Checks
Load balancers perform **regular health checks** on [[Backend Development|backend]] servers to ensure they're available.
If a server fails, the balancer stops sending traffic to it until it recovers.
# Advanced Features
- **[[SSL]] termination**: Decrypt [[HTTPS]] traffic at the load balancer level
- **Sticky sessions**: Keep users connected to the same [[Backend Development|backend]] server
- **Autoscaling**: Triggered based on traffic/load metrics
- **Geographic routing**: Send users to closest regional server
