---
tags:
  - tech
aliases:
  - microservice
---
Microservices are a popular architectural style for building applications that are resilient, highly [[Scalability|scalable]], independently deployable, and able to evolve quickly. 
A microservices architecture consists of a collection of small, autonomous services. 
Each service is self-contained and should implement a single business capability within a bounded context. 
A bounded context is a natural division within a business and provides an explicit boundary within which a domain model exists.

## What are microservices?

- Microservices are small, independent, and loosely coupled. A single small team of developers can write and maintain a service.
- Each service is a separate codebase, which can be managed by a small development team.
- Services can be deployed independently. A team can update an existing service without rebuilding and redeploying the entire application.
- Services are responsible for persisting their own data or external state. This differs from the traditional model, where a separate data layer handles data persistence.
- Services communicate with each other by using well-defined [[API|APIs]]. Internal implementation details of each service are hidden from other services.
- Supports polyglot programming. For example, services don't need to share the same technology stack, libraries, or frameworks.

Besides for the services themselves, some other components appear in a typical microservices architecture:
- **Management/orchestration**. This component is responsible for placing services on nodes, identifying failures, rebalancing services across nodes, and so forth. Typically this component is an off-the-shelf technology such as Kubernetes, rather than something custom built.
- **API Gateway**. The API gateway is the entry point for clients. Instead of calling services directly, clients call the API gateway, which forwards the call to the appropriate services on the back end. Advantages of using an API gateway include:
	- It decouples clients from services. Services can be versioned or refactored without needing to update all of the clients.
	- Services can use messaging protocols that are not web friendly, such as [[AMQP]].
	- The API Gateway can perform other cross-cutting functions such as authentication, logging, [[SSL]] termination, and [[load balancing]].
	- Out-of-the-box policies, like for throttling, caching, transformation, or validation.

## Benefits

- **Agility.** Because microservices are deployed independently, it's easier to manage bug fixes and feature releases. You can update a service without redeploying the entire application, and roll back an update if something goes wrong. In many traditional applications, if a bug is found in one part of the application, it can block the entire release process. New features might be held up waiting for a bug fix to be integrated, tested, and published.
- **Small, focused teams**. A microservice should be small enough that a single feature team can build, test, and deploy it. Small team sizes promote greater agility. Large teams tend be less productive, because communication is slower, management overhead goes up, and agility diminishes.
- **Small code base**. In a monolithic application, there is a tendency over time for code dependencies to become tangled. Adding a new feature requires touching code in a lot of places. By not sharing code or data stores, a microservices architecture minimizes dependencies, and that makes it easier to add new features.
- **Mix of technologies**. Teams can pick the technology that best fits their service, using a mix of technology stacks as appropriate.
- **Fault isolation**. If an individual microservice becomes unavailable, it won't disrupt the entire application, as long as any upstream microservices are designed to handle faults correctly. For example, you can implement the [Circuit Breaker pattern](https://learn.microsoft.com/en-us/azure/architecture/patterns/circuit-breaker), or you can design your solution so that the microservices communicate with each other using [asynchronous messaging patterns](https://learn.microsoft.com/en-us/dotnet/architecture/microservices/architect-microservice-container-applications/asynchronous-message-based-communication).
- **[[Scalability]]**. Services can be scaled independently, letting you [[Scalability|scale]] out subsystems that require more resources, without [[Scalability|scaling]] out the entire application. Using an orchestrator such as Kubernetes, you can pack a higher density of services onto a single host, which allows for more efficient utilization of resources.
- **Data isolation**. It is much easier to perform schema updates, because only a single microservice is affected. In a monolithic application, schema updates can become very challenging, because different parts of the application might all touch the same data, making any alterations to the schema risky.

## Challenges

The benefits of microservices don't come for free. Here are some of the challenges to consider before embarking on a microservices architecture.
- **Complexity**. A microservices application has more moving parts than the equivalent monolithic application. Each service is simpler, but the entire system as a whole is more complex.
- **Development and testing**. Writing a small service that relies on other dependent services requires a different approach than writing a traditional monolithic or layered application. Existing tools are not always designed to work with service dependencies. Refactoring across service boundaries can be difficult. It is also challenging to test service dependencies, especially when the application is evolving quickly.
- **Lack of governance**. The decentralized approach to building microservices has advantages, but it can also lead to problems. You might end up with so many different languages and frameworks that the application becomes hard to maintain. It might be useful to put some project-wide standards in place, without overly restricting teams' flexibility. This especially applies to cross-cutting functionality such as logging.
- **Network congestion and latency**. The use of many small, granular services can result in more interservice communication. Also, if the chain of service dependencies gets too long (service A calls B, which calls C...), the additional latency can become a problem. You will need to design [[API|APIs]] carefully. Avoid overly chatty [[API|APIs]], think about serialization formats, and look for places to use asynchronous communication patterns like queue-based load leveling.
- **Data integrity**. Each microservice responsible for its own data persistence. As a result, data consistency across multiple services can be a challenge. Different services persist data at different times, using different technology, and with potentially different levels of success. When more than one microservices is involved in persisting new or changed date, it's unlikely that the complete data change could be considered an [[ACID]] [[Transactions|transaction]]. Instead, the technique is more aligned to BASE (Basically Available, Soft state, and Eventually consistent). Embrace eventual consistency where possible.
- **Management**. To be successful with microservices requires a mature [[DevOps]] culture. Correlated logging across services can be challenging. Typically, logging must correlate multiple service calls for a single user operation.
- **Versioning**. Updates to a service must not break services that depend on it. Multiple services could be updated at any given time, so without careful design, you might have problems with backward or forward compatibility.
- **Skill set**. Microservices are highly distributed systems. Carefully evaluate whether the team has the skills and experience to be successful.

## Process for building a microservices architecture

The articles listed here present a structured approach for designing, building, and operating a microservices architecture.

**Domain analysis.** To avoid some common pitfalls when designing microservices, use domain analysis to define your microservice boundaries. Follow these steps:

1. [Use domain analysis to model microservices](https://learn.microsoft.com/en-us/azure/architecture/microservices/model/domain-analysis).
2. [Use tactical DDD to design microservices](https://learn.microsoft.com/en-us/azure/architecture/microservices/model/tactical-ddd).
3. [Identify microservice boundaries](https://learn.microsoft.com/en-us/azure/architecture/microservices/model/microservice-boundaries).

**Design the services**. Microservices require a different approach to designing and building applications. For more information, see [Designing a microservices architecture](https://learn.microsoft.com/en-us/azure/architecture/microservices/design/).

**Operate in production**. Because microservices architectures are distributed, you must have robust operations for deployment and monitoring.

- [CI/CD for microservices architectures](https://learn.microsoft.com/en-us/azure/architecture/microservices/ci-cd)
- [Build a CI/CD pipeline for microservices on Kubernetes](https://learn.microsoft.com/en-us/azure/architecture/microservices/ci-cd-kubernetes)

## Resources

- [[Design Patterns]] for applications that use microservices [here](https://medium.com/@madhukaudantha/microservice-architecture-and-design-patterns-for-microservices-e0e5013fd58a)
- [[GraphQL]] design on microservices [here](https://medium.com/@mena.meseha/practice-of-graphql-in-microservice-architecture-e8f2d698f93b)
-  Microsoft's intro to Microservices [here](https://learn.microsoft.com/en-us/azure/architecture/microservices/) from which I have copied almost everything for this note :')