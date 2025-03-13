---
tags:
  - tech
  - java
aliases:
  - Sets
---
A **Set** does **not allow duplicate elements** and has different behaviors based on its implementation.

# Common Implementations
| **Implementation** | **Features**                                     | **Best For**                    |
| ------------------ | ------------------------------------------------ | ------------------------------- |
| `HashSet<E>`       | No duplicates, no order                          | Fast lookups                    |
| `LinkedHashSet<E>` | Maintains insertion order                        | Iteration in order of insertion |
| `TreeSet<E>`       | Sorted order (uses `Comparable` or `Comparator`) | Sorted data retrieval           |

## Example: Using `HashSet`
```java
import java.util.HashSet;
import java.util.Set;

public class SetExample {
    public static void main(String[] args) {
        Set<Integer> numbers = new HashSet<>();
        numbers.add(10);
        numbers.add(20);
        numbers.add(10);  // Ignored (no duplicates allowed)

        System.out.println(numbers);  // Output: [10, 20] (order may vary)
    }
}
```
