---
tags:
  - tech
  - java
aliases:
  - Java virtual machine
---
The heart of the [[Java platform]] is the "virtual machine" that executes [[Java]] bytecode programs.
This bytecode is the same no matter what hardware or operating system the program is running under.

There is a JIT (Just In Time) compiler within the Java Virtual Machine, or JVM. 
The JIT compiler translates the [[Java]] bytecode into native processor instructions at run-time and caches the native code in memory during execution.

The use of bytecode as an intermediate language permits [[Java]] programs to run on any platform that has a virtual machine available. 
The use of a JIT compiler means that [[Java]] applications, after a short delay during loading and once they have "warmed up" by being all or mostly JIT-compiled, tend to run about as fast as native programs.

Although [[Java]] programs are cross-platform or platform independent, the code of the Java Virtual Machines (JVM) that execute these programs is not.
Every supported operating platform has its own JVM.