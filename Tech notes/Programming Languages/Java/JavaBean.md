---
tags:
  - tech
  - java
aliases:
  - bean
  - beans
---
The 'beans' of JavaBeans are classes that encapsulate one or more objects into a single standardized object (the bean). 
This standardization allows the beans to be handled in a more generic fashion, allowing easier code reuse and introspection. 
This in turn allows the beans to be treated as software components, and to be manipulated visually by editors and [[IDEs and Editors|IDEs]] without needing any initial configuration, or to know any internal implementation details.

As part of the standardization, all beans must be serializable, have a zero-argument constructor, and allow access to properties using getter and setter methods.
