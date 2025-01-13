---
aliases:
  - producer
tags:
  - tech
---
The producers are the clients that send messages to the [[Kafka]] cluster.
They can send messages to a specific topic or a partition of a topic.
Where the message is sent depends on the partitioning strategy used and the key of the message which is optional.
The partitioning strategy can be [[round-robin]] (no-key) or based on the key of the message (or any other custom strategy).
An example configuration is something like this:
```properties
bootstrap.servers=localhost:9092
key.serializer=org.apache.kafka.common.serialization.StringSerializer
value.serializer=org.apache.kafka.common.serialization.StringSerializer
topic.name=example_topic
```

The `bootstrap.servers` is the address of the [[Kafka]] cluster.
The `key.serializer` and `value.serializer` are the serializers for the key and value of the message.
The serializers are used to convert the key and value of the message to bytes before sending them to the [[Kafka]] cluster.
The `value.serializer` can be almost anything, but the usual scenarios are:
- `org.apache.kafka.common.serialization.StringSerializer` for string messages (UTF-8) that have no real structure
- `io.confluent.kafka.serializers.KafkaAvroSerializer` for messages that have a schema (like JSON, XML, etc.), where the schema is stored in the [[Schema Registry]], and the messages are serialized using the [[Avro]] serialization format.
- `io.confluent.kafka.serializers.KafkaJsonSerializer` for messages that have a schema (like JSON, XML, etc.), where the schema is stored in the [[Schema Registry]], and the messages are serialized using the [[JSON]] serialization format.
- `io.confluent.kafka.serializers.protobuf.KafkaProtobufSerializer` for messages that have a schema (like JSON, XML, etc.), where the schema is stored in the [[Schema Registry]], and the messages are serialized using the [[Protobuf]] serialization format.

The `topic.name` is the name of the topic to which the messages will be sent.

> Note: In the case of the Avro, JSON, and Protobuf serializers, the schema is stored in the [[Schema Registry]], and the messages are serialized using the schema. This means that another property is needed to specify the address of the [[Schema Registry]]. The property is `schema.registry.url`.

Let's take a look at a simple producer example in Java:

```java
import org.apache.kafka.clients.producer.KafkaProducer;
import org.apache.kafka.clients.producer.ProducerRecord;
import org.apache.kafka.clients.producer.RecordMetadata;

import java.util.Properties;
import java.util.concurrent.ExecutionException;


public class ProducerDemo {
    public static void main(String[] args) throws ExecutionException, InterruptedException {
        // Create Producer Properties
        Properties properties = new Properties();
        properties.setProperty("bootstrap.servers", "localhost:9092");
        properties.setProperty("key.serializer", org.apache.kafka.common.serialization.StringSerializer.class);
        properties.setProperty("value.serializer", org.apache.kafka.common.serialization.StringSerializer.class);
        properties.setProperty("topic.name", "example_topic")

        // Create the Producer
        KafkaProducer<String, String> producer = new KafkaProducer<>(properties); // The KafkaProducer will ignore any properties that are not needed

        // Create a Producer Record
        ProducerRecord<String, String> record = new ProducerRecord<>(properties.getProperty("topic.name"), "hello world"); // This means that the value of the message is "hello world" and that it will be sent to the topic "example_topic" (the key is null)

        // Send Data - Asynchronous
        producer.send(record, (RecordMetadata recordMetadata, Exception e) -> { // Callback function that is executed every time a record is sent or an exception is thrown while sending the record
            if (e == null) {
                System.out.println("Received new metadata. \n" +
                        "Topic: " + recordMetadata.topic() + "\n" +
                        "Partition: " + recordMetadata.partition() + "\n" +
                        "Offset: " + recordMetadata.offset() + "\n" +
                        "Timestamp: " + recordMetadata.timestamp());
            } else {
                System.out.println("Error while producing: " + e);
            }
        }).get(); // block the .send() to make it synchronous - don't do this in production!

        // Flush Data
        producer.flush();

        // Flush and Close Producer
        producer.close();
    }
}
```

A similar example in Python:

```python

from kafka import KafkaProducer
from kafka.errors import KafkaError

properties = {
  "bootstrap.servers": "localhost:9092",
  "topic.name": "example_topic"
}

producer = KafkaProducer(
  bootstrap_servers=properties["bootstrap.servers"],
  key_serializer=str.encode,
  value_serializer=str.encode
)

# The b'hello world' means that the value of the message is "hello world" and that it will be sent to the topic "example_topic" (the key is null)
future = producer.send(properties["topic.name"], b'hello world')

try:
    record_metadata = future.get(timeout=10)

    print(record_metadata.topic)
    print(record_metadata.partition)
    print(record_metadata.offset)
except KafkaError as e:
    print(e)


producer.flush()
producer.close()
```

> Note: For the Python example, I'm using the [kafka-python](https://kafka-python.readthedocs.io/en/master/index.html) library. 
> It is not the official library, but it is the most popular one.