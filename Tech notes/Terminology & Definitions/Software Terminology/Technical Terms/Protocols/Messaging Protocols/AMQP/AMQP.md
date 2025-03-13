---
tags:
  - tech
aliases:
  - Advanced Message Queuing Protocol
---
AMQP (**Advanced [[Message Queue|Message Queuing]] Protocol**) is an **open standard protocol** for **message-oriented middleware** that enables secure, reliable, and efficient communication between distributed systems.
It is widely used in **message brokering** to facilitate communication between [[microservices]], IoT devices, and enterprise applications.

- **Message-Oriented**: Uses messages to decouple applications
- **Reliable**: Ensures message delivery with acknowledgments
- **Interoperable**: Works across different platforms and vendors
- **Secure**: Supports authentication and encryption

Examples of AMQP Implementations: [[RabbitMQ]], Apache Qpid, Microsoft Azure Service Bus

# How it works
AMQP follows a **producer-consumer model** with a **message broker** in between.
It uses a **queue-based architecture** where messages are produced, routed, stored, and then consumed asynchronously.

## Basic Workflow
1. **Producer** sends a message to the **[[AMQP Exchange|Exchange]]**
2. **[[AMQP Exchange|Exchange]]** routes the message based on predefined rules
3. **Queue** stores the message until it is processed
4. **Consumer** retrieves the message from the queue

## Key Components

| **Component** | **Description**                                       |
| ------------- | ----------------------------------------------------- |
| **Producer**  | Sends messages to the [[AMQP Exchange]]               |
| **Exchange**  | Routes messages to queues based on routing rules      |
| **Queue**     | Stores messages until consumers retrieve them         |
| **Consumer**  | Receives and processes messages from queues           |
| **Binding**   | Defines the relationship between exchanges and queues |

# Pros & Cons
## Advantages
- **Interoperability**: Open standard, works across vendors
- **Reliability**: Ensures message delivery with acknowledgments & retries
- **Asynchronous Processing**: Decouples systems for better [[scalability]]
- **Flexible Routing**: Multiple [[AMQP Exchange|exchange]] types enable complex workflows

## Disadvantages
- **Complexity**: Requires careful setup & configuration
- **Higher Overhead**: More protocol overhead than [[MQTT]] or [[Kafka]]
- **Latency**: Not ideal for ultra-low latency applications
