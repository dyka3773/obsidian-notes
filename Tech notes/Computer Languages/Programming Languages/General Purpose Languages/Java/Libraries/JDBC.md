---
tags:
  - tech
---
JDBC (Java Database Connectivity) is an **[[API]] ([[API|Application Programming Interface]])** in [[Java]] that allows applications to connect to, interact with, and manipulate [[relational databases]]. 
It provides a **standardized way** for [[Java]] applications to communicate with various [[databases]] like **[[MySQL]], [[PostgreSQL]], [[Oracle DBMS|Oracle]], [[SQLite]], [[SQL Server]]**, and more.

**Key Features:**
- Connects [[Java]] applications with [[databases]].
- Executes [[SQL]] queries (SELECT, INSERT, UPDATE, DELETE).
- Supports [[Database Transactions|transactions]] and batch processing.
- Works with different database drivers.
# JDBC Code Example (Connecting to [[MySQL]] Database)
```java
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class JDBCExample {
    public static void main(String[] args) {
        String url = "jdbc:mysql://localhost:3306/mydatabase";
        String user = "root";
        String password = "password";

        try {
            // Step 1: Establish connection
            Connection conn = DriverManager.getConnection(url, user, password);

            // Step 2: Create a Statement object
            Statement stmt = conn.createStatement();

            // Step 3: Execute SQL query
            ResultSet rs = stmt.executeQuery("SELECT * FROM users");

            // Step 4: Process the ResultSet
            while (rs.next()) {
                System.out.println(rs.getInt("id") + " - " + rs.getString("name"));
            }

            // Step 5: Close the connection
            rs.close();
            stmt.close();
            conn.close();

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
```

# JDBC [[Database Transactions|Transactions]] Example
By default, each [[SQL]] statement is executed separately. 
[[Database Transactions|Transactions]] allow multiple queries to be executed as a single unit.
```java
try {
    conn.setAutoCommit(false);  // Start transaction

    stmt.executeUpdate("UPDATE accounts SET balance = balance - 500 WHERE id = 1");
    stmt.executeUpdate("UPDATE accounts SET balance = balance + 500 WHERE id = 2");

    conn.commit();  // Commit transaction
} catch (Exception e) {
    conn.rollback();  // Rollback on error
}
```
