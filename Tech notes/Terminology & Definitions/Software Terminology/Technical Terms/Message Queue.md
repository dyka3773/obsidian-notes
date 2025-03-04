---
tags:
  - tech
aliases:
  - Message Queues
  - mailbox
---
In computer science, message queues and mailboxes are software-engineering components typically used for inter-process communication (IPC), or for inter-thread communication within the same process.
They use a queue for messaging the passing of control or of content. 
Group communication systems provide similar kinds of functionality.

The message queue paradigm is a sibling of the [[publisher/subscriber pattern]], and is typically one part of a larger message-oriented middleware system.
Most messaging systems support both the publisher/subscriber and message queue models in their [[API]], e.g. [[JMS|Java Message Service]] ([[JMS]]).

## Common message queue options
- **Durability**: messages may be kept in memory, written to disk, or even committed to a [[Databases|DBMS]] if the need for reliability indicates a more resource-intensive solution.
- **Security policies**: which applications should have access to these messages?
- **Message purging policies**: queues or messages may have a [[TTL]].
- **Message filtering**: some systems support filtering data so that a subscriber may only see messages matching some pre-specified criteria of interest.
- **Delivery policies**: do we need to guarantee that a message is delivered at least once, or no more than once?
- **Routing policies**: in a system with many queue servers, what servers should receive a message or a queue's messages?
- **Batching policies**: should messages be delivered immediately? Or should the system wait a bit and try to deliver many messages at once?
- **Queuing criteria**: when should a message be considered "enqueued"? When one queue has it? Or when it has been forwarded to at least one remote queue? Or to all queues?
- **Receipt notification**: A publisher may need to know when some or all subscribers have received a message
