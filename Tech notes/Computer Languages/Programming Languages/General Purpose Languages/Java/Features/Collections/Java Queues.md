---
tags:
  - tech
aliases:
  - Queues
---
A **Queue** follows [[LIFO & FIFO|FIFO]] (First-In-First-Out) order.

# Common Implementations
| **Implementation** | **Features**                      | **Best For**                           |
| ------------------ | --------------------------------- | -------------------------------------- |
| `PriorityQueue<E>` | Orders elements based on priority | Task scheduling                        |
| `ArrayDeque<E>`    | Double-ended queue (Deque)        | Efficient insert/remove from both ends |

## Example: Using `PriorityQueue`
```java
import java.util.PriorityQueue;
import java.util.Queue;

public class QueueExample {
    public static void main(String[] args) {
        Queue<Integer> pq = new PriorityQueue<>();
        pq.add(30);
        pq.add(10);
        pq.add(20);

        System.out.println(pq.poll()); // Output: 10 (smallest element)
    }
}
```
