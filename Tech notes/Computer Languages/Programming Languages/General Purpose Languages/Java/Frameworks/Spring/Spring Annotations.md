---
tags:
  - tech
  - lists
  - java
---

## `@Autowired`

This annotation is applied to fields, setter methods, and constructors. The `@Autowired` annotation injects object dependency implicitly.

## `@Configuration`

This annotation is used on classes that define [[JavaBean|beans]]. 
`@Configuration` is an analog for an [[XML]] configuration file, it is configuration using [[Java]] classes. 
A [[Java]] class annotated with `@Configuration` is a configuration by itself and will have methods to instantiate and configure the dependencies.

Annotated classes will be processed by the [[Spring]] container to generate [[JavaBean|bean]] definitions and service requests for those [[JavaBean|beans]] at runtime.

`@Configuration` is also a `@Component`. This means subject to component-scanning
**But**: `@Configuration` classes may **not only be bootstrapped using component scanning**, but may also **themselves configure component scanning using the `@ComponentScan` annotation**

One `@Configuration` may be **injected into another** using `@Import(OtherConfig)` via **constructor injection.**

## `@Bean`

This annotation is used at the method level. 
The `@Bean` annotation works with `@Configuration` to create [[Spring]] [[JavaBean|beans]]. 
As mentioned earlier, `@Configuration` will have methods to instantiate and configure dependencies. 
Such methods will be annotated with `@Bean`. 
The method annotated with this annotation works as the bean ID, and it creates and returns the actual [[JavaBean|bean]].

## `@Lazy`

This annotation is used on component classes. 
By default, all autowired dependencies are created and configured at startup. 
But if you want to initialize a [[JavaBean|bean]] lazily, you can use the `@Lazy` annotation over the class. 
This means that the [[JavaBean|bean]] will be created and initialized only when it is first requested for. 
You can also use this annotation on `@Configuration` classes. 
This indicates that all `@Bean` methods within that `@Configuration` class should be lazily initialized.

## `@Component`

This annotation is used on classes to indicate a [[Spring]] component. 
The `@Component` annotation marks the [[Java]] class as a [[JavaBean|bean]] or component so that the component-scanning mechanism of [[Spring]] can add it into the application context.

## `@Controller`

The `@Controller` annotation is used to indicate the class is a [[Spring]] controller. 
This annotation can be used to identify controllers for [[Spring MVC]] or [[Spring WebFlux]].

## `@Service`

This annotation is used on a class. 
`@Service` marks a [[Java]] class that performs some service, such as executing business logic, performing calculations, and calling external [[API]]s. 
This annotation is a specialized form of the `@Component` annotation intended to be used in the service layer.

## `@Repository`

This annotation is used on [[Java]] classes that directly access the [[Databases|database]]. 
The `@Repository` annotation works as a marker for any class that fulfills the role of repository or [[Data Access Object]]. 
This annotation has an automatic translation feature. 
For example, when an exception occurs in the `@Repository`, there is a handler for that exception and there is no need to add a try-catch block.
