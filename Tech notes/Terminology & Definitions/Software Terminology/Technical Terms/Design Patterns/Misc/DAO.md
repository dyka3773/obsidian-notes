---
tags:
  - tech
aliases:
  - Data Access Object
---
A **Data Access Object (DAO)** is a **[[Design Patterns|design pattern]]** used in software development to provide an **abstraction layer** between the application and the [[Databases|database]].
It **encapsulates data access logic** and provides a structured way to interact with [[databases]] without exposing the underlying [[Databases|database]] implementation to the rest of the application.
- **Primary Purpose:** Separates business logic from data persistence logic.
- **Key Benefit:** Improves maintainability, testability, and [[scalability]] of applications.

# Why Use the DAO Pattern?
- **Encapsulation**: Hides [[Databases|database]] logic from the application.
- **Reusability**: Centralized [[Databases|database]] operations can be reused across different components.
- **Flexibility**: Easily switch between different [[databases]] or storage mechanisms.
- **Maintainability**: Changes to data access logic do not affect the business logic.

# Structure
A DAO typically consists of the following:
1. **DAO Interface** – Defines the [[Databases|database]] operations ([[CRUD]] methods).
2. **DAO Implementation** – Implements the interface using a specific [[Databases|database]] technology (e.g., [[JDBC]], [[Hibernate]], [[JPA]]).
3. **Model/Entity Class** – Represents the [[Databases|database]] table as an object.
4. **[[Databases|Database]] Connection Manager** – Manages connections to the [[Databases|database]].

# Examples in [[Java]]
## DAO Interface
```java
public interface UserDAO {
    void save(User user);
    User getById(int id);
    List<User> getAll();
    void update(User user);
    void delete(int id);
}
```

## A. DAO Implementation with [[JDBC]]
```java
public class UserDAOImpl implements UserDAO {
    private Connection connection;

    public UserDAOImpl(Connection connection) {
        this.connection = connection;
    }

    @Override
    public void save(User user) throws SQLException {
        String sql = "INSERT INTO users (name, email) VALUES (?, ?)";
        try (PreparedStatement stmt = connection.prepareStatement(sql)) {
            stmt.setString(1, user.getName());
            stmt.setString(2, user.getEmail());
            stmt.executeUpdate();
        }
    }

    @Override
    public User getById(int id) throws SQLException {
        String sql = "SELECT * FROM users WHERE id = ?";
        try (PreparedStatement stmt = connection.prepareStatement(sql)) {
            stmt.setInt(1, id);
            ResultSet rs = stmt.executeQuery();
            if (rs.next()) {
                return new User(rs.getInt("id"), rs.getString("name"), rs.getString("email"));
            }
        }
        return null;
    }

    // Other CRUD methods omitted for brevity
}
```

## B. DAO Implementation with [[ORM]]s ([[Hibernate]])
Using an ORM like Hibernate simplifies DAO implementation.
```java
public class UserDAOImpl implements UserDAO {
    private SessionFactory sessionFactory;

    public UserDAOImpl(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    @Override
    public void save(User user) {
        Session session = sessionFactory.openSession();
        Transaction tx = session.beginTransaction();
        session.save(user);
        tx.commit();
        session.close();
    }
}
```
- **[[ORM]] ([[Object-Relational Mapping]])** simplifies [[Databases|database]] interactions.
- **No need for raw [[SQL]]** – Queries are written in [[HQL]] ([[Hibernate Query Language]]).

# Alternatives to DAO
- **[[Repository]] Pattern**: Often used in Domain-Driven Design (DDD).
- **Microservices & APIs**: Some applications use direct API calls instead of DAOs.
- **Active Record Pattern**: Used in frameworks like [[Rails]] and [[Laravel]].