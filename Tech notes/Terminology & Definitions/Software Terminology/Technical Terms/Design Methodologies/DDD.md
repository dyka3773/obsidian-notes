---
tags:
  - tech
---
**Domain-Driven Design (DDD)** is a software development approach focused on **modeling software to match complex business domains**.
Introduced by Eric Evans in his book _"Domain-Driven Design: Tackling Complexity in the Heart of Software"_, DDD emphasizes collaboration between technical experts and domain experts to ensure that the software accurately represents real-world business logic.

It encourages developers to prioritize the **core domain**, using a **ubiquitous language** and **strategic [[design patterns]]** to manage complexity.
# Core Concepts
## Domain
The sphere of knowledge or activity around which the business logic revolves.
## Model
An abstraction that describes aspects of the domain and can be implemented in software.
## Ubiquitous Language
A shared language between developers and domain experts based on the [[domain model]]. 
It must be used consistently in code, conversations, and documentation.
## Bounded Context
A boundary within which a particular [[domain model]] applies. 
Different models can exist in different bounded contexts and must be clearly separated.
# Building Blocks of DDD (Tactical Patterns)
| Pattern            | Description                                                                               |
| ------------------ | ----------------------------------------------------------------------------------------- |
| **[[Entity]]**     | An object with a distinct identity that persists over time (e.g., `User`, `Order`)        |
| **Value Object**   | An object without a unique identity, defined by its attributes (e.g., `Money`, `Address`) |
| **Aggregate**      | A cluster of entities and value objects treated as a single unit                          |
| **[[Repository]]** | Provides methods to access aggregates (e.g., [[Databases\|database]] abstraction)         |
| **[[Factory]]**    | Responsible for creating complex objects or aggregates                                    |
| **Service**        | A stateless operation that does not naturally belong to an entity or value object         |
# Strategic Design in DDD
Strategic design focuses on **how different parts of the system interact**:
- **Bounded Contexts**: Defines clear model boundaries.
- **Context Map**: A visual representation showing how bounded contexts relate to each other.
- **Relationships Between Contexts**:
    - **Shared Kernel**: Some domain logic is shared
    - **Customer/Supplier**: One context depends on another
    - **Conformist**: A context accepts another’s model without changes
    - **Anticorruption Layer**: A layer that translates between models to prevent undesired influence
# Benefits
- **Better alignment between software and business needs**
- **Increased flexibility and adaptability** to business changes
- **Clear boundaries** reduce coupling between components
- **Improved communication** between developers and domain experts
# When to Use
- The domain is **complex and evolving**
- **Deep collaboration** with domain experts is possible
- Business logic is **core to the value** of the application
- Projects need **long-term maintainability** and flexibility
# When DDD Might Be Overkill
- Simple [[CRUD]] applications with straightforward requirements
- Very small or prototype projects
- Lack of access to domain experts or lack of organizational support
