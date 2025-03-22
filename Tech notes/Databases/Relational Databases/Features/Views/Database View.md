---
tags:
  - tech
aliases:
  - View
  - views
---
A **database view** is a **virtual table** that provides a structured way to **store and retrieve** data from one or multiple tables without physically duplicating the data.
It is based on a **[[SQL]] query** and dynamically presents **a subset or a transformed representation** of the original data.

**Key Characteristics of Views:**
- **Virtual Table**: Doesn’t store data itself; instead, it references data from real tables.
- **Simplifies Queries**: Reduces complexity by encapsulating frequently used [[SQL]] queries
- **Enhances Security**: Restricts access to specific columns or rows by exposing only selected data
- **Improves Maintainability**: Provides an abstraction layer, isolating users from schema changes.

# Why Use Them?
- **Data Abstraction:** Users interact with a simplified representation without seeing underlying complexity.
- **Security & Access Control:** Limits access to sensitive columns or rows.
- **Performance Optimization:** Predefined queries run faster, reducing [[Databases|database]] load.
- **Consistency:** Ensures data integrity by centralizing commonly used queries.
- **Reusability:** Saves developers from writing repetitive [[SQL]] queries.

# Basic [[SQL]] commands on Views
## Creating a Simple View
```sql
CREATE VIEW employee_view AS
SELECT id, name, department FROM employees;
```
# Querying the View
```sql
SELECT * FROM employee_view;
```
## Updating the View
```sql
CREATE OR REPLACE VIEW employee_view AS
SELECT id, name, salary FROM employees;
```
## Deleting Views
```sql
DROP VIEW employee_view;
```

# Types of Views
| **Type**                  | **Description**                                            |
| ------------------------- | ---------------------------------------------------------- |
| **Simple View**           | Based on a single table with no aggregations.              |
| **Complex View**          | Uses multiple tables with joins, aggregates, or functions. |
| **[[Materialized View]]** | Stores query results physically for faster retrieval.      |
# Updating Data in Views
Views based on **simple queries** (without [[joins]], aggregations, or [[DISTINCT]]) **can be updatable** in some [[Databases|DBMSs]].
```sql
UPDATE employee_view
SET name = 'John Doe'
WHERE id = 1;
```
> Updates reflect in the base table (`employees`).
## When is a View NOT Updatable?
- Uses **JOINs, GROUP BY, DISTINCT, or Aggregate Functions**.
- Includes **UNION or HAVING clauses**.

> **Solution: Use [[INSTEAD OF]] [[Triggers]]** (e.g., in [[PostgreSQL]], [[SQL Server]] or [[Oracle DBMS|Oracle]]).
# Performance Considerations
## When to Use Views for Optimization:
- Reducing query complexity for developers.
- Hiding implementation details from end-users.
- Restricting access to specific columns for security.
## When NOT to Use Views:
- If a view is queried frequently, it can slow performance due to re-execution.
- [[Materialized views]] require periodic refresh (`REFRESH MATERIALIZED VIEW`).
