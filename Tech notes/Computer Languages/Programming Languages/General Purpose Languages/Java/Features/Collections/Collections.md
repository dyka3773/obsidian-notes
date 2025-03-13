---
tags:
  - tech
  - java
---
The **[[Java]] Collections [[API]]** is a set of **interfaces and classes** that provide **efficient data structures** for storing, retrieving, and manipulating data.
It is part of **java.util** and supports various operations such as searching, sorting, and iteration.
- **Provides reusable data structures** like [[Java Lists|Lists]], [[Java Sets|Sets]], and [[Java Maps|Maps]]
- **Standardized [[API|APIs]]** for handling collections
- **Built-in algorithms** (sorting, searching, etc.)
- **Thread-safe implementations** available

# Key Interfaces
| **Interface**   | **Description**                                        | **Common Implementations**                         |
| --------------- | ------------------------------------------------------ | -------------------------------------------------- |
| `Collection<E>` | Root interface of all collection types                 | -                                                  |
| `List<E>`       | Ordered collection (allows duplicates)                 | `ArrayList`, `LinkedList`, `Vector`, `Stack`       |
| `Set<E>`        | Unordered collection (no duplicates)                   | `HashSet`, `TreeSet`, `LinkedHashSet`              |
| `Queue<E>`      | [[LIFO & FIFO\|FIFO]] (First In, First Out) collection | `PriorityQueue`, `ArrayDeque`                      |
| `Map<K, V>`     | [[Key-Value pairs]] (not a Collection)                 | `HashMap`, `TreeMap`, `LinkedHashMap`, `Hashtable` |
> **[[Java Lists|Lists]], [[Java Sets|Sets]], and [[Java Queues|Queues]]** extend `Collection<E>`, but `Map<K,V>` is a separate interface.

# Synchronized & Concurrent Collections
## Synchronized Collections (`Collections.synchronizedXXX()`)
Thread-safe versions of standard collections but require **external synchronization**.
## Concurrent Collections (`java.util.concurrent`)
Optimized for **multi-threaded environments**.

| **Class**                  | **Description**         |
| -------------------------- | ----------------------- |
| `ConcurrentHashMap<K,V>`   | Thread-safe `HashMap`   |
| `CopyOnWriteArrayList<E>`  | Thread-safe `ArrayList` |
| `ConcurrentLinkedQueue<E>` | Thread-safe queue       |
# Performance Comparison of Java Collections
| **Collection Type** | **Insertion Performance**       | **Access Performance** |
| ------------------- | ------------------------------- | ---------------------- |
| `ArrayList`         | Fast (Amortized O(1))           | Fast (O(1))            |
| `LinkedList`        | Slower (O(1) but high overhead) | Slow (O(n))            |
| `HashSet`           | Fast (O(1))                     | Moderate (O(1))        |
| `TreeSet`           | Slower (O(log n))               | Fast (O(log n))        |
| `HashMap`           | Fast (O(1))                     | Fast (O(1))            |
| `TreeMap`           | Slower (O(log n))               | Fast (O(log n))        |
> Use `ArrayList` for fast access, `LinkedList` for frequent insertions, `HashSet` for unique elements, and `HashMap` for fast [[Key-Value Pairs|key-value]] lookups.
