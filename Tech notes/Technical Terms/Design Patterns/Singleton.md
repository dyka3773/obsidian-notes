---
tags:
  - tech
aliases:
  - Singleton Pattern
---
The singleton pattern is a software [[Design Patterns|design pattern]] that restricts the instantiation of a class to a singular instance.
The pattern is useful when exactly one object is needed to coordinate actions across a system.

More specifically, the singleton pattern allows classes to:
- Ensure they only have one instance
- Provide easy access to that instance
- Control their instantiation (for example, hiding the constructors of a class)

Typically, this is accomplished by:
- Declaring all constructors of the class to be private, which prevents it from being instantiated by other objects
- Providing a static method that returns a reference to the instance
The instance is usually stored as a private static variable; the instance is created when the variable is initialized, at some point before when the static method is first called.

The term comes from the [mathematical concept of a singleton](https://en.wikipedia.org/wiki/Singleton_(mathematics)).

## Uses

Singletons are often preferred to global variables because they do not pollute the global namespace (or their containing namespace). 
Additionally, they permit lazy allocation and initialization, whereas global variables in many languages will always consume resources.
Logging is a common real-world use case for singletons, because all objects that wish to log messages require a uniform point of access and conceptually write to a single source