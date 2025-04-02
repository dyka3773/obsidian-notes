---
tags:
  - tech
aliases:
  - Data Transfer Object
  - Data Transfer Objects
  - DTOs
---
A Data Transfer Object (DTO) is a [[Design Patterns|design pattern]] used to transfer data between layers in a software application.
It is a **plain object** that contains data but **no business logic**.
DTOs are commonly used in [[API|APIs]], [[microservices]], and [[Databases|database]] interactions to improve **performance, security, and maintainability**.

Features:
- Encapsulates Data: Contains only attributes (no behavior).
- Prevents Unnecessary Data Exposure: Restricts data transfer to only relevant fields.
- Improves Performance: Reduces serialization/deserialization overhead.
- Ensures Data Consistency: Avoids exposing internal models directly.

# Why use it?
- **Separation of Concerns**: Decouples internal models from external data representation.
- **Better Security**: Prevents exposing sensitive fields (e.g., passwords).
- **Improved Performance**: Reduces data transferred over the network.
- **Easier Versioning**: [[API]] responses remain stable even when internal models change.

# Examples

## DTO in [[Python]] (Using [[Pydantic]] for [[API]] Data Validation)
```python
from pydantic import BaseModel

class UserDTO(BaseModel):
    id: int
    name: str
    email: str

def get_user() -> UserDTO:
    return UserDTO(id=1, name="Alice", email="alice@example.com")
```
> Prevents unnecessary fields (e.g., passwords) from being exposed in [[API]] responses.

## DTO in [[Java]] (Using [[Lombok]] for Simplicity)
```java
import lombok.Data;

@Data
public class UserDTO {
    private int id;
    private String name;
    private String email;
}
```
