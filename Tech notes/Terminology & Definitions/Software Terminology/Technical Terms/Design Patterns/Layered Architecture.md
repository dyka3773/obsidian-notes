---
tags:
  - tech
---

Layered architecture is a software design [[Architecture Design Patterns|architecture style]] that organizes a system into layers, each with a specific responsibility.
Typically, the layers consist of:
1. **Presentation Layer**: The top layer that handles user interface and user experience.
2. **Business Logic Layer**: The layer that contains the core functionality and business rules of the application.
3. **Data Access Layer**: The layer responsible for data storage and retrieval, often interacting with [[databases]] or external services.
4. **Integration Layer** (Optional): The layer that manages communication with external systems or services, often through [[API|APIs]] or [[Message Queue|message queues]].

In this model, we have user-interface components, which could be a web page, an [[API]], or a [[CLI]].
These components communicate with the business logic layer, which contains our business rules and our workflows.
Finally, we have a [[Databases|database]] layer, which is responsible for storing and retrieving data.
