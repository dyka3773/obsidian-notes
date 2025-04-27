---
tags:
  - tech
  - java
---
**Static Import** is a [[Java]] feature that allows members (fields and methods) defined in a class as `static` to be imported **directly** into another class, so they can be used without qualifying them with the class name.

Introduced in **Java 5**, static import helps reduce code verbosity, especially when using utility classes or constants.
# Syntax
```java
import static package_name.ClassName.staticMember;
// or
import static package_name.ClassName.*;
```
(where `*` imports all static members of the class.)
# Example
### Without static import:
```java
import java.lang.Math;

public class Example {
    public static void main(String[] args) {
        double result = Math.sqrt(16);
        System.out.println(Math.PI);
    }
}
```
### With static import:
```java
import static java.lang.Math.*;

public class Example {
    public static void main(String[] args) {
        double result = sqrt(16);
        System.out.println(PI);
    }
}
```
> You can call `sqrt()` and `PI` directly without prefixing with `Math.`.
# Common Use Cases
- Working with **mathematical utilities** (`Math` class methods: `sin`, `cos`, `sqrt`, etc.)
- Using **test assertions** (e.g., `assertEquals`, `assertTrue` from [[JUnit]])
- Accessing **constants** (e.g., `TimeUnit.SECONDS`, `ChronoUnit.DAYS`)
# Advantages
- **Improves readability**: Reduces repetitive class references for static fields/methods.
- **Cleaner code**: Especially useful in code heavy with constants or utility methods.
# Disadvantages
- **Possible name conflicts**: Two classes might have static members with the same name.
- **Reduced clarity**: Without the class name, it might not be obvious where a method or constant comes from.
- **Overuse can harm readability**: If over-applied, especially with `*` imports.
# Best Practices
- Use static imports **sparingly** and **only** when it clearly improves readability.
- Prefer importing individual members over using `*` unless importing all static members is intentional and safe.
- Avoid static import if it causes confusion or hides important class associations.