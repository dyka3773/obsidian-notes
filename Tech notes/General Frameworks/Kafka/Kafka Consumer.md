---
aliases:
  - consumer
tags:
  - tech
---
Consumers are the clients that consume messages from the [[Kafka]] cluster.
They can consume messages from a specific topic or a partition of a topic.
Where the message is consumed from depends on the consumer group that the consumer belongs to. (This means that every consumer must belong to a consumer group)
The consumer group is a logical grouping of consumers that consume messages from the same topic.
Each consumer group has a unique group id.
Usually, each consumer commits the offset of the last message that it consumed to the [[Kafka]] cluster so that if it crashes, the next consumer that belongs in the same group will know from where to start consuming messages.
Their usual configuration is something like this:
```properties
bootstrap.servers=localhost:9092
key.deserializer=org.apache.kafka.common.serialization.StringDeserializer
value.deserializer=org.apache.kafka.common.serialization.StringDeserializer

topic.name=example_topic
group.id=example-consumer-group
auto.offset.reset=earliest
```

The `bootstrap.servers` is the address of the [[Kafka]] cluster.
The `key.deserializer` and `value.deserializer` are the deserializers for the key and value of the message.
The deserializers are used to convert the bytes of the key and value of the message to the actual key and value of the message after receiving them from the [[Kafka]] cluster.
The `value.deserializer` must be the same as the `value.serializer` of the [[Kafka Producer|producer]] that sent the message.
The `topic.name` is the name of the topic from which the messages will be consumed.
The `group.id` is the id of the consumer group to which the consumer belongs.
The `auto.offset.reset` is the offset from where the consumer will start consuming messages if it is the first time that it is consuming messages from the topic or if no offset was committed to the [[Kafka]] cluster. Its possible values are:
- `earliest` - the consumer will start consuming messages from the beginning of the topic
- `latest` - the consumer will start consuming messages from the end of the topic
- `none` - the consumer will throw an error if no offset was committed to the [[Kafka]] cluster

Let's take a look at a simple consumer example in [[Java]]:

```java

import org.apache.kafka.clients.consumer.ConsumerConfig;
import org.apache.kafka.clients.consumer.ConsumerRecord;
import org.apache.kafka.clients.consumer.ConsumerRecords;
import org.apache.kafka.clients.consumer.KafkaConsumer;

import java.time.Duration;
import java.util.Collections;
import java.util.Properties;


public class ConsumerDemo {
    public static void main(String[] args) {
        // Create Consumer Properties
        Properties properties = new Properties();
        properties.setProperty(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG, "localhost:9092");
        properties.setProperty(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, org.apache.kafka.common.serialization.StringDeserializer.class);
        properties.setProperty(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, org.apache.kafka.common.serialization.StringDeserializer.class);
        properties.setProperty(ConsumerConfig.GROUP_ID_CONFIG, "example-consumer-group");
        properties.setProperty(ConsumerConfig.AUTO_OFFSET_RESET_CONFIG, "earliest");
        properties.setProperty("topic.name", "example_topic");

        // Create the Consumer
        KafkaConsumer<String, String> consumer = new KafkaConsumer<>(properties);

        // Subscribe to the Topic
        consumer.subscribe(properties.getProperty("topic.name"));

        // Poll for new Data
        while (true) {
            ConsumerRecords<String, String> records = consumer.poll(Duration.ofMillis(100)); // new in Kafka 2.0.0
            for (ConsumerRecord<String, String> record : records) {
                System.out.println("Key: " + record.key() + ", Value: " + record.value());
                System.out.println("Partition: " + record.partition() + ", Offset: " + record.offset());
            }
        }
    }
}
```

A similar example in [[Python]]:

```python
from kafka import KafkaConsumer
from kafka.errors import KafkaError

properties: dict = {
    "bootstrap.servers": "localhost:9092",
    "topic.name": "example_topic",
    "group.id": "example-consumer-group",
    "auto.offset.reset": "earliest"
}

consumer = KafkaConsumer(
    properties["topic.name"],
    bootstrap_servers=properties["bootstrap.servers"],
    group_id=properties["group.id"],
    auto_offset_reset=properties["auto.offset.reset"],
    key_deserializer=str.decode,
    value_deserializer=str.decode
)


for message in consumer:
    print(message.topic)
    print(message.partition)
    print(message.offset)
    print(message.key)
    print(message.value)


consumer.close() # This will commit the offset of the last message that was consumed
```