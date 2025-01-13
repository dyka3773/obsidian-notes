---
tags:
  - tech
---
## Introduction

Apache Kafka is a distributed streaming platform.
It is used for building real-time data pipelines and streaming apps.
It is horizontally scalable, can support fault-tolerance.
It uses a pub-sub messaging system like [[Message Queues]], but the messages are not popped out of the queue once consumed.
There is a retention period for the messages, after which they are deleted.
There is the concept of consumer groups, where multiple consumers can consume messages from the same topic in parallel even if they are on the same machine.
There is also the concept of partitions, where a topic can be divided into multiple partitions for fault-tolerance and parallelism.
The partitions are distributed across the brokers in a cluster.
The messages are ordered within a partition, but not across partitions.
They are stored in the partitions in an append-only fashion and are immutable.
They are also stored in an ordered fashion using an offset.

## Architecture

To the Kafka application, everything is either a [[Kafka Producer|producer]], a [[Kafka Consumer|consumer]], or a broker.
The producers and consumers are the clients of the Kafka application.
The brokers are the servers that form the Kafka cluster.
The Producers and Consumers can be written in any language that supports the Kafka API (Java, [[Python]], Go, etc.) or can use the REST API that Kafka provides.
The Kafka cluster can be deployed on-premise or on the cloud (It usually is a [[docker]] container).
It also supports other 3rd party tools like [[Schema Registry]], [[REST Proxy]], etc. that can be used to manage the Kafka cluster. (I'll talk about them later)

## Configuration features

### Auto Create Topics and Schemas

The Kafka cluster can be configured to not automatically create topics and schemas when a [[Kafka Producer|producer]] or [[Kafka Consumer|consumer]] tries to send or consume messages from a topic or a schema that does not exist.

This is useful in production because it prevents the creation of topics and schemas that are not needed or are caused by an error.

### Testing the [[Kafka Producer|Producer]]

When testing the [[Kafka Producer|producer]], it is useful to instantiate a [[Kafka Consumer|Consumer]] to the same topic and consume the messages that the [[Kafka Producer|producer]] sends.

But the tricky part is that the [[Kafka Consumer|consumer]] must be instantiated before the [[Kafka Producer|producer]] sends the messages and that the [[Kafka Consumer|consumer]] must only consume the messages that where sent by the [[Kafka Producer|producer]] in the current run of the test.

This can be achieved by setting the `auto.offset.reset` property of the [[Kafka Consumer|consumer]] to `latest` and by setting the `enable.auto.commit` property of the [[Kafka Consumer|consumer]] to `false` or by creating a new [[Kafka Consumer|consumer]] group for each test run (this is not recommended because it can cause problems in production).

### Testing `auto.register.schemas=false` or `auto.create.topics.enable=false`

When testing these configurations, it is useful to create a [[REST]] client that can be used to create or delete topics and schemas before or after each test, because as far as I know, there is no way to create or delete topics and schemas from the Kafka API if these configurations are set to false.

## Resources

#### E-Books

- [Kafka: The Definitive Guide (Requires Email Confirmation)](https://www.confluent.io/resources/kafka-the-definitive-guide/)
- [Kafka: The Definitive Guide (PDF version but old)](https://www.confluent.io/wp-content/uploads/confluent-kafka-definitive-guide-complete.pdf)

#### Documentation

- [Apache Kafka Quick Start](https://developer.confluent.io/quickstart/kafka-docker/)

#### Videos

- [Apache Kafka Tutorials | Kafka 101](https://www.youtube.com/playlist?list=PLa7VYi0yPIH0KbnJQcMv5N9iW8HkZHztH)
- [Schema Registry 101 | Introduction to Schema Registry](https://www.youtube.com/playlist?list=PLa7VYi0yPIH1KE10jwqmFEM61krd9WXQV)
- [Apache Kafka for Beginners](https://www.youtube.com/playlist?list=PLt1SIbA8guusxiHz9bveV-UHs_biWFegU)
- [Apache Kafka and KSQL in Action](https://www.youtube.com/watch?v=Z8_O0wEIafw)