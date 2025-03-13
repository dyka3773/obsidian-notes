---
tags:
  - tech
  - java
aliases:
  - Maps
---
A **Map** stores **[[key-value pairs]]** and does **not allow duplicate keys**.

# Common Implementations
| **Implementation**    | **Features**                                    | **Best For**                    |
| --------------------- | ----------------------------------------------- | ------------------------------- |
| `HashMap<K, V>`       | Fast lookups, no order                          | General-purpose mapping         |
| `LinkedHashMap<K, V>` | Maintains insertion order                       | Iteration in order of insertion |
| `TreeMap<K, V>`       | Sorted keys (uses `Comparable` or `Comparator`) | Sorted [[Key-Value Pairs\|key-value]] retrieval      |
| `Hashtable<K, V>`     | Thread-safe version of `HashMap`                | Multi-threaded applications     |

## Example: Using `HashMap`
```java
import java.util.HashMap;
import java.util.Map;

public class MapExample {
    public static void main(String[] args) {
        Map<String, Integer> scores = new HashMap<>();
        scores.put("Alice", 90);
        scores.put("Bob", 85);
        scores.put("Charlie", 92);

        System.out.println(scores.get("Alice")); // Output: 90
    }
}
```
