---
tags:
  - tech
aliases:
  - Kafka Schema Registry
---
The Schema Registry is a service that is used to store the schemas of the messages that are sent to the Kafka cluster.
It is used by the producers and consumers that use the Avro, JSON, or Protobuf serializers.
It is not required by the producers and consumers, but it is highly recommended to use it because it provides type safety and compatibility between different consumers and producers (or applications in general).
It is usually deployed as a docker container and usually on the same machine as the Kafka cluster.
It is also usually deployed with the [[REST Proxy]].