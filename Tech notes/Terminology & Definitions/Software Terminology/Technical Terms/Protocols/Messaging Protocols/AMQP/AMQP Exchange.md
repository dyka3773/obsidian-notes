---
tags:
  - tech
aliases:
  - Exchange
---
AMQP **exchanges** determine how messages are routed to **queues**. 
Different exchange types allow for different messaging patterns.

# Exchange Types in [[AMQP]]
| **Exchange Type** | **Description**                                                | **Use Case**                 |
| ----------------- | -------------------------------------------------------------- | ---------------------------- |
| **Direct**        | Routes messages to a queue based on an exact routing key match | Task distribution            |
| **Fanout**        | Broadcasts messages to all bound queues                        | Event notifications, logging |
| **Topic**         | Routes messages based on pattern matching (wildcards)          | Selective event distribution |
| **Headers**       | Routes messages based on message headers                       | Advanced filtering           |

## Example: Direct Exchange Routing in [[RabbitMQ]] using [[Python]]
```python
import pika

connection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))
channel = connection.channel()

channel.exchange_declare(exchange='direct_logs', exchange_type='direct')

channel.basic_publish(exchange='direct_logs', routing_key='error', body='Error log message')
print(" [x] Sent 'Error log message'")

connection.close()
```
