---
tags:
  - tech
  - java
---
In most modern operating systems (OSs), a large body of reusable code is provided to simplify the programmer's job.
This code is typically provided as a set of dynamically loadable libraries that applications can call at runtime.
Because the [[Java Platform]] is not dependent on any specific operating system, applications cannot rely on any of the pre-existing OS libraries.
Instead, the [[Java Platform]] provides a comprehensive set of its own standard class libraries containing many of the same reusable functions commonly found in modern operating systems.

The Java class libraries serve three purposes within the [[Java Platform]]:
1. they provide the programmer a well-known set of functions to perform common tasks, such as maintaining lists of items or performing complex string parsing
2. they provide an abstract interface to tasks that would normally depend heavily on the hardware and operating system
> Tasks such as network access and file access are often heavily intertwined with the distinctive implementations of each platform.
> The `java.net` and `java.io` libraries implement an abstraction layer in native OS code, then provide a standard interface for the [[Java]] applications to perform those tasks.
3. when some underlying platform does not support all of the features a [[Java]] application expects, the class libraries work to gracefully handle the absent components, either by emulation to provide a substitute, or at least by providing a consistent way to check for the presence of a specific feature
