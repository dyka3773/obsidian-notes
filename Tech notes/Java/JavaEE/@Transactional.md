---
tags:
  - tech
  - java
---
The [javax.transaction.Transactional](https://javaee.github.io/javaee-spec/javadocs/javax/transaction/Transactional.html) annotation provides the application the ability to control transaction boundaries declaratively.
This annotation can be applied to any class that the [[JavaEE|Jakarta EE]] specification defines as a managed [[EJB|bean]].

Transactional behavior can be configured via an attribute on the annotation. 
The available options closely mirror those of the [[EJB]] specification.