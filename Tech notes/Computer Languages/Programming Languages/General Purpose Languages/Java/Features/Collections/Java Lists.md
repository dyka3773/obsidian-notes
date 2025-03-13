---
tags:
  - tech
  - java
aliases:
  - Lists
---
A **List** maintains the **insertion order** and allows duplicate elements.

# Common Implementations
| **Implementation** | **Features**                                     | **Best For**                |
| ------------------ | ------------------------------------------------ | --------------------------- |
| `ArrayList<E>`     | Dynamic array, fast random access                | Read-heavy operations       |
| `LinkedList<E>`    | Doubly linked list, fast insert/delete           | Frequent additions/removals |
| `Vector<E>`        | Synchronized version of `ArrayList`              | Thread-safe access          |
| `Stack<E>`         | [[LIFO & FIFO\|LIFO]] (Last In, First Out) stack | Stack operations            |

## ### **Example: Using `ArrayList`**
```java
import java.util.ArrayList;
import java.util.List;

public class ListExample {
    public static void main(String[] args) {
        List<String> names = new ArrayList<>();
        names.add("Alice");
        names.add("Bob");
        names.add("Alice");  // Duplicates allowed

        System.out.println(names);  // Output: [Alice, Bob, Alice]
    }
}
```
