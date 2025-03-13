---
tags:
  - tech
---

| Feature               | **[[AMQP]]**                        | **[[MQTT]]**              | **[[Kafka]] (Event Streaming)** |
| --------------------- | ----------------------------------- | ------------------------- | ------------------------------- |
| **Message Model**     | Queue-based                         | Publish-Subscribe         | Log-based                       |
| **Best For**          | Reliable messaging, enterprise apps | IoT & lightweight devices | High-throughput event streaming |
| **Persistence**       | Yes                                 | Optional                  | Retained as event logs          |
| **[[Scalability]]**   | High                                | Moderate                  | Extremely high                  |
| **Protocol Overhead** | Higher                              | Lower                     | Higher                          |

# Conclusion
- **Use [[AMQP]] if:** You need **guaranteed message delivery, complex routing, and high reliability**.
- **Use MQTT if:** You need **lightweight messaging for IoT or mobile applications**.
- **Use [[Kafka]] if:** You need **high-throughput event-driven architecture**.
