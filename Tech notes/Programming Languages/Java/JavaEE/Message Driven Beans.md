---
tags:
  - tech
  - java
aliases:
  - MDB
---
Message Driven Beans are business objects whose execution is triggered by messages instead of by method calls.
The Message Driven Bean is used among others to provide a high level ease-of-use abstraction for the lower level [[JMS]] (Java Message Service) specification.
It may subscribe to [[JMS]] [[Message Queue|message queues]] or message topics, which typically happens via the `activationConfig` attribute of the `@MessageDriven` annotation.
They were added in [[EJB]] to allow event-driven processing. 

Unlike session beans, an MDB does not have a client view (Local/Remote/No-interface), i.e. clients cannot look-up an MDB instance. 
An MDB just listens for any incoming message on, for example, a [[JMS]] queue or topic and processes them automatically. 
Only [[JMS]] support is required by the [[JavaEE|Java EE]] spec, but Message Driven Beans can support other messaging protocols.
Such protocols may be asynchronous but can also be synchronous. 
Since session beans can also be synchronous or asynchronous, the prime difference between session- and message driven beans is not the synchronicity, but the difference between (object oriented) method calling and messaging.