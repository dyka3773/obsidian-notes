---
tags:
  - tech
  - java
aliases:
  - JRE
---
The **Java Runtime Environment (JRE)** is a **software package** that provides the necessary libraries, [[JVM|Java Virtual Machine]] ([[JVM]]), and other components required to run [[Java]] applications.
It does **not** include development tools like compilers and debuggers (which are part of the [[JDK]]).
- **Primary Function:** Enables [[Java]] applications to execute on any system with the JRE installed.
- **Key Components:** **[[JVM]], core libraries, and supporting files**.
- **Platform Independence:** [[Java]] applications run on different OS platforms without modification, thanks to the **"Write Once, Run Anywhere"** principle.

# Key Components
- **[[JVM|Java Virtual Machine]] ([[JVM]])**: Executes [[Java]] bytecode and provides memory management, garbage collection, and runtime optimizations.
- **[[Java Class Library|Java Class Libraries]]**: Essential precompiled [[Java]] classes (e.g., `java.lang`, `java.util`, `java.io`).
- **Java Class Loader**: Loads [[Java]] classes into memory dynamically.
- **Runtime Libraries & Native Code**: System-dependent code required for execution.

# How [[Java]] Code Runs
1. **[[Java]] source code (`.java`) is compiled** → Converted into **bytecode (`.class`)** by the [[JDK]].
2. **JRE loads and runs the bytecode** → Uses [[JVM]], libraries, and runtime components.
3. **[[JVM]] executes the code** → Converts bytecode into **machine-specific instructions**.
4. **Application runs on any OS** → As long as the appropriate JRE is installed.
