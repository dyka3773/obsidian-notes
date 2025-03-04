---
tags:
  - tech
aliases:
  - Application Program Interface
  - Application Programming Interface
  - APIs
  - Web API
---
An application programming interface (API) is a connection between computers or between computer programs. 
It is a type of software interface, offering a service to other pieces of software.
The term API may refer either to the specification or to the implementation.
The term API is also often used to refer to web APIs, which allow communication between computers that are joined by the internet.

## Types of APIs
### Libraries and frameworks
The interface to a software library is one type of API.
The API describes and prescribes the "expected behavior" (a specification) while the library is an "actual implementation" of this set of rules.

A single API can have multiple implementations (or none, being abstract) in the form of different libraries that share the same programming interface.

The separation of the API from its implementation can allow programs written in one language to use a library written in another. For example, because [[Scala]] and [[Java]] compile to compatible bytecode, Scala developers can take advantage of any [[Java API]].

API use can vary depending on the type of programming language involved. 
An API for a procedural language such as [[Lua]] could consist primarily of basic routines to execute code, manipulate data or handle errors while an API for an [[object-oriented]] language, such as [[Java]], would provide a specification of classes and its class methods.

An API can also be related to a software framework: a framework can be based on several libraries implementing several APIs, but unlike the normal use of an API, the access to the behavior built into the framework is mediated by extending its content with new classes plugged into the framework itself.

### Operating systems
An API can specify the interface between an application and the operating system.
[[POSIX]], for example, specifies a set of common APIs that aim to enable an application written for a [[POSIX]] conformant operating system to be compiled for another [[POSIX]] conformant operating system.

Microsoft has shown a strong commitment to a backward-compatible API, particularly within its Windows API (Win32) library, so older applications may run on newer versions of Windows using an executable-specific setting called "Compatibility Mode"

### Remote APIs
Remote APIs allow developers to manipulate remote resources through protocols, specific standards for communication that allow different technologies to work together, regardless of language or platform.

For example, the [[JDBC|Java Database Connectivity API]] allows developers to query many different types of [[databases]] with the same set of functions, while the [[Java remote method invocation]] API uses the Java Remote Method Protocol to allow invocation of functions that operate remotely, but appear local to the developer.

Therefore, remote APIs are useful in maintaining the object abstraction in [[object-oriented]] programming.
A method call, executed locally on a proxy object, invokes the corresponding method on the remote object, using the remoting protocol, and acquires the result to be used locally as a return value.
A modification of the proxy object will also result in a corresponding modification of the remote object.

### Web APIs
When used in the context of web development, an API is typically defined as a set of specifications, such as [[HTTP|Hypertext Transfer Protocol]] ([[HTTP]]) request messages, along with a definition of the structure of response messages, usually in an [[XML|Extensible Markup Language]] ([[XML]]) or [[JSON|JavaScript Object Notation]] ([[JSON]]) format.

While "web API" historically has been virtually synonymous with [[Web Services|web service]], the recent trend (so-called Web 2.0) has been moving away from [[SOAP|Simple Object Access Protocol]] ([[SOAP]]) based [[Web Services]] and service-oriented architectures (SOA) towards more direct [[REST|representational state transfer]] ([[REST]]) style web resources and resource-oriented architectures (ROA).
#### Most common types of web APIs
- [[GraphQL]]
- [[REST]]
- [[SOAP]]
