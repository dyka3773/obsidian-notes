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
The Producers and Consumers can be written in any language that supports the Kafka API (Java, Python, Go, etc.) or can use the REST API that Kafka provides.
The Kafka cluster can be deployed on-premise or on the cloud (It usually is a [[docker]] container).
It also supports other 3rd party tools like [[Schema Registry]], [[REST Proxy]], etc. that can be used to manage the Kafka cluster. (I'll talk about them later)