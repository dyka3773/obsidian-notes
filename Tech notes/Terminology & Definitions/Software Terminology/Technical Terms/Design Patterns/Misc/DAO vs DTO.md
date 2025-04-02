---
tags:
  - tech
---
| Feature                                     | **[[DAO]] ([[DAO\|Data Access Object]])**    | **[[DTO]] ([[DTO\|Data Transfer Object]])** |
| ------------------------------------------- | -------------------------------------------- | ------------------------------------------- |
| **Purpose**                                 | Manages [[Databases\|database]] operations   | Transfers data between layers               |
| **Contains Business Logic?**                | Yes ([[CRUD]] operations)                    | No                                          |
| **Interacts with [[Databases\|Database]]?** | Yes                                          | No                                          |
| **Used in**                                 | Persistence layer                            | [[API]] layer, service layer                |
| **Best For**                                | Encapsulating [[Databases\|database]] access | Controlling data exposure                   |
# Can [[DAO]] and [[DTO]] Be Used Together?
Yes, [[DAO]] and [[DTO]] are often used together in layered architectures.
### Example: [[DAO]] and [[DTO]] in a Service Layer ([[Java]] [[Spring Boot]])
```java
@Service
public class UserService {
    private final UserDAO userDAO;

    public UserService(UserDAO userDAO) {
        this.userDAO = userDAO;
    }

    public UserDTO getUserById(int id) {
        User user = userDAO.findById(id);
        return new UserDTO(user.getId(), user.getName(), user.getEmail());
    }
}
```
In this example, `UserDAO` fetches the user from the [[Databases|database]], while `UserDTO` ensures that only necessary fields are sent to the client.
