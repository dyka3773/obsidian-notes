---
tags:
  - tech
  - java
aliases:
  - Autoboxing
  - Unboxing
---
Autoboxing and Unboxing are **automatic type conversion** features introduced in **Java 5** that simplify the handling of primitive data types and their corresponding wrapper classes.
- **Autoboxing**: Automatic conversion of a **primitive type** to its **corresponding wrapper class**.
- **Unboxing**: Automatic conversion of a **wrapper class** object back to its **primitive type**.
> These conversions occur **implicitly**, reducing boilerplate code and improving readability.

**Example:**
```java
// Autoboxing: int → Integer
Integer obj = 10;  // Automatically converts primitive int to Integer

// Unboxing: Integer → int
int num = obj;  // Automatically converts Integer to int
```

# Why use it?
- **Simplifies code**: No need for manual conversion
- **Enhances Collection API usage**: [[Collections]] in [[Java]] work with objects, not primitives
- **Improves readability**: Eliminates explicit conversion methods

# Performance Considerations
- Autoboxing and Unboxing can have performance overhead!
- Wrapper objects **consume more memory** than primitives.
- Autoboxing **creates unnecessary objects** (affecting garbage collection).
- Frequent conversions can **impact performance in loops**.
**Example:**
```java
Integer sum = 0;  // Unnecessary autoboxing in a loop
for (int i = 0; i < 1000; i++) {
    sum += i;  // Causes repeated boxing & unboxing
}
```
