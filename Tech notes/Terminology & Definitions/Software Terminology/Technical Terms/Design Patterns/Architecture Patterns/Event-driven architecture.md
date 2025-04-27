---
tags:
  - tech
aliases:
  - EDA
---
**Event-Driven Architecture (EDA)** is a **[[Architecture Design Patterns|Software Architecture Pattern]]** where **events** are the core means of communication between different parts of a system.
An event represents a significant change in state, such as "Order Placed", "Payment Received", or "User Registered".
Components in an EDA system react to events asynchronously, promoting loose coupling and [[scalability]].

# Core Concepts
## Event
An immutable, observable record of something that happened within the system.
Example:
```json
{
	"eventType": "OrderPlaced", 
	"orderId": "12345", 
	"timestamp": "2024-04-27T10:00:00Z" 
}
```
## Event Producers
Components or services that detect a change and publish an event.
## Event Consumers
Components or services that subscribe to and react to events, possibly triggering new events themselves.
## Event Channels
The pathways ([[message brokers]], [[Message Queue|Message Queues]], topics) over which events are transmitted.
Examples: [[Kafka]], [[RabbitMQ]], AWS SNS/SQS.
# Types of Event-Driven Communication
| Type                        | Description                                                                                 |
| --------------------------- | ------------------------------------------------------------------------------------------- |
| **Publish/Subscribe**       | Producers publish events, and multiple consumers can react independently.                   |
| **Event Stream Processing** | A continuous flow of events is processed in real-time (e.g., fraud detection systems).      |
| **Event Sourcing**          | Application state is stored as a sequence of events rather than the current state snapshot. |
# Characteristics
- **Asynchronous Communication**: Components communicate without waiting for a response.
- **Loose Coupling**: Producers and consumers are decoupled; they only know about the event format, not each other.
- **[[Scalability]]**: Systems can [[Scalability|scale]] horizontally by handling more events concurrently.
- **Resilience**: Failures are isolated because services are not tightly interconnected.
# Advantages
- Promotes **real-time updates** across distributed systems.
- Improves **flexibility** by allowing easy addition or modification of event consumers.
- **Increases [[scalability]]** by decoupling workload among services.
- Enables **better fault isolation** because services operate independently.
# Challenges and Considerations
- **Complexity**: Managing asynchronous flows can become difficult.
- **Event Ordering**: Guarantees about the order of event processing must be considered.
- **Debugging and Monitoring**: Tracing how an event flows through multiple systems can be hard.
- **Schema Evolution**: Changing the event structure requires careful planning to avoid breaking consumers.
# Common Tools and Technologies.
| Category                | Examples                                                  |
| ----------------------- | --------------------------------------------------------- |
| **[[Message Brokers]]** | Apache [[Kafka]], RabbitMQ, AWS SNS/SQS, Azure Event Hubs |
| **Event Storage**       | EventStoreDB, [[Kafka]] Topics                            |
| **Frameworks**          | Axon Framework ([[Java]]), NATS, Pulsar                   |
| **Serverless**          | AWS Lambda + EventBridge                                  |
