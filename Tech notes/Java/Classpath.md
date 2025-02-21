---
tags:
  - tech
  - java
---
Classpath is a parameter in the [[JVM|Java Virtual Machine]] or the [[Java]] compiler that specifies the location of user-defined classes and packages.
The parameter may be set either on the command-line, or through an environment variable.

Similar to the classic [dynamic loading](https://en.wikipedia.org/wiki/Library_(computing)#Dynamic_loading "Library (computing)") behavior, when executing [[Java]] programs, the [[JVM|Java Virtual Machine]] finds and loads classes lazily (it loads the bytecode of a class only when the class is first used). 
The classpath tells [[Java]] where to look in the filesystem for files defining these classes.

The virtual machine searches for and loads classes in this order:
1. **bootstrap classes**: the classes that are fundamental to the [[Java Platform]] (comprising the public classes of the Java Class Library, and the private classes that are necessary for this library to be functional).
2. **extension classes**: packages that are in the extension directory of the [[Java Runtime Environment]] or [[JDK]].
3. **user-defined packages and libraries**

By default only the packages of the [[JDK]] standard [[API]] and extension packages are accessible without needing to set where to find them.
The path for all user-defined packages and libraries must be set in the command-line (or in the Manifest associated with the `Jar` file containing the classes).

See also [this very useful SO answer](https://stackoverflow.com/a/2396759/15552149).