---
tags:
  - tech
aliases:
  - Jakarta Enterprise Beans
  - Enterprise JavaBean
---


## Types of Enterprise Beans

- **Session Beans** that can be either "Stateful", "Stateless" or "[[Singleton]]" and can be accessed via either a Local (same [[JVM]]) or Remote (different [[JVM]]) interface or directly without an interface, in which case local semantics apply. All session beans support asynchronous execution for all views (local/remote/no-interface).
- **[[Message Driven Beans]]** (MDBs, also known as Message Beans). MDBs also support asynchronous execution, but via a messaging paradigm.