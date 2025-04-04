---
tags:
  - tech
  - java
---
Java is a high-level, general-purpose, memory-safe, [[object-oriented]] programming language.
It is intended to let programmers write once, run anywhere (WORA), meaning that compiled Java code can run on all platforms that support Java without the need to recompile.
Java applications are typically compiled to bytecode that can run on any [[JVM|Java virtual machine]] ([[JVM]]) regardless of the underlying computer architecture.
The syntax of Java is similar to [[C]] and [[C++]], but has fewer low-level facilities than either of them. The Java runtime provides dynamic capabilities (such as [[reflection]] and runtime code modification) that are typically not available in traditional compiled languages.

Java 23 is the version current as of September 2024. 
Java 20 and 22 are no longer maintained. 
[[Java 8]], 11, 17, and 21 are long-term support versions still under maintenance.

Writing in the Java programming language is the primary way to produce code that will be deployed as byte code in a [[JVM|Java virtual machine]] ([[JVM]]). 
Bytecode compilers are also available for other languages, including [[Ada]], [[JavaScript]], [[Kotlin]] (Google's preferred [[Android]] language), [[Python]], and [[Ruby]].
In addition, several languages have been designed to run natively on the [[JVM]], including [[Clojure]], [[Groovy]], and [[Scala]]. (See also the [[List of JVM languages]])

## Common Features added to the language through the years

| **Version** | **Feature(s)**                                                                                                                  |
|:-----------:|:------------------------------------------------------------------------------------------------------------------------------- |
|     17      | - [[Sealed Classes]]                                                                                                            |
|     16      | - [[Pattern Matching for instanceof]]<br>- [[Record Classes]]                                                                   |
|     15      | - [[Text Blocks]]                                                                                                               |
|     14      | - [[Switch expressions]]                                                                                                        |
|     10      | - [[Local Variable Type Inference]]                                                                                             |
|      9      | - [[JShell]]<br>- [[Jigsaw Module System]]                                                                                      |
|      8      | - [[Lambda Expressions]]<br>- [[Streams API]]                                                                                   |
|      5      | - [[Generics]]<br>- [[Autoboxing & Unboxing]]<br>- [[Static Import]]<br>- [[Varargs]]<br>- [[Enumerators]]<br>- [[Annotations]] |
|      4      | - [[Java Exception Chaining\|Exception Chaining]]                                                                               |
|      2      | - [[Collections]]                                                                                                               |
|     1.1     | - [[Inner Classes]]<br>- [[reflection]]<br>- [[JavaBean\|Java Beans]]<br>- [[JDBC]]                                             |
See also [this article](https://www.marcobehler.com/guides/a-guide-to-java-versions-and-features#_practical_information)

## Features of the standard libraries
### Core Libraries
- I/O and non-blocking I/O (IO/NIO)
- Networking
- [[Java Reflection|Reflective Programming]]
- [[Java Concurrency|Concurrent Computing]]
- [[Java Generics|Generics]]
- [[Functional programming]] using [[Lambda Functions in Java|Lambdas]] and [[Java Streams|Streaming]]
- [[Java Collections|Collections]]
- [[XML]] Processing
### Integration Libraries
- [[JDBC|Java Database Connectivity]]
- [[JNDI|Java Naming and Directory Interface]]
- [[Java remote method invocation]] and [[CORBA]]
### UI Libraries
- [[AWT|Abstract Window Toolkit]]
- [[Java Swing]]
- [[JavaFX]]
