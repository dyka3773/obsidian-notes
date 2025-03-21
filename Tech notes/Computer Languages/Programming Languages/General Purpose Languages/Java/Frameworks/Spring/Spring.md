---
tags:
  - tech
  - java
aliases:
  - Spring Framework
---
The Spring Framework is an application framework and inversion of control container for the [[Java]] platform.
The framework's core features can be used by any [[Java]] application, but there are extensions for building web applications on top of the [[JavaEE|Java EE]] (Enterprise Edition) platform.
The framework does not impose any specific programming model.
The framework has become popular in the [[Java]] community as an addition to the Enterprise JavaBeans ([[EJB]]) model.
The Spring Framework is free and [[Open Source]] software.

The Spring Framework is divided into modules. 
Applications can choose which modules they need. 
At the heart are the modules of the core container, including a configuration model and a dependency injection mechanism. 
Beyond that, the Spring Framework provides foundational support for different application architectures, including messaging, transactional data and persistence, and web. 
It also includes the [[Servlet]]-based Spring MVC web framework and, in parallel, the Spring WebFlux reactive web framework.

If you are just getting started with Spring, you may want to begin using the Spring Framework by creating a [[Spring Boot]]-based application. [[Spring Boot]] provides a quick (and opinionated) way to create a production-ready Spring-based application. It is based on the Spring Framework, favors convention over configuration, and is designed to get you up and running as quickly as possible.

## Creating and managing [[JavaBean|beans]]

Objects created by the container are called managed objects or [[JavaBean|beans]].
The container can be configured by loading [[XML]] ([[XML|Extensible Markup Language]]) files or detecting specific [[Java]] annotations on configuration classes. 
These data sources contain the [[JavaBean|bean]] definitions that provide the information required to create the [[JavaBean|beans]].

The `@Configuration` is a Spring-specific annotation that marks a class as the configuration class. The configuration class provides the [[JavaBean|beans]] to the Spring `ApplicationContext`.
Each of the methods in the Spring configuration class is configured with the `@Bean` annotation. 
The `ApplicationContext` interface will then return the objects configured with the `@Bean` annotation as [[JavaBean|beans]]. 
The advantage of [[Java]]-based configuration over [[XML]]-based configuration is better type safety and refactorability.

## Autowiring

The Spring framework has a feature known as autowiring, which uses the Spring container to automatically satisfy the dependencies specified in the [[JavaBean]] properties to objects of the appropriate type in the current factory.
This can only occur if there is only one object with the appropriate type.
There are several annotations that can be used for autowiring POJOs, the most comon being `Autowire`.

See also [[Spring Annotations]].