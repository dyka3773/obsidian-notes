---
tags:
  - tech
  - database
---

| Feature                   | [[Relational Databases\|SQL]] (Relational)   | [[NoSQL Databases\|NoSQL]] (Non-Relational)                    |
| ------------------------- | -------------------------------------------- | -------------------------------------------------------------- |
| **Schema**                | Fixed, predefined schema                     | Flexible, schema-less                                          |
| **[[Scalability]]**       | Vertical (adding more CPU/RAM)               | Horizontal (adding more servers)                               |
| **Data Model**            | Tables, rows, columns                        | [[Key-Value Pairs\|Key-value]], document, column-family, graph |
| **Query Language**        | [[SQL]] ([[SQL\|Structured Query Language]]) | Varies ([[API\|APIs]], [[JSON]] queries, etc.)                 |
| **Joins & Relationships** | Strong support for relational joins          | Not designed for complex joins                                 |
| **Performance**           | Optimized for structured data                | Optimized for unstructured, high-speed data                    |

## When to Use a [[Relational Databases|Relational Database]]

### a. Structured and Consistent Data
When data follows a **well-defined schema** and relationships between entities are important.

**Example:**
- Banking system: `Customers`, `Accounts`, `Transactions`
- E-commerce: `Orders`, `Products`, `Users`

These systems need **[[ACID]]** ([[Atomicity]], [[Consistency]], [[Isolation]], [[Durability]]) guarantees to ensure data integrity.

```sql
CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    total_amount DECIMAL(10,2),
    order_date TIMESTAMP
);
```

### b. Complex Queries and Relationships
Use [[SQL]] for **joins**, **aggregations**, and **[[transactions]]** across multiple tables.

**Example:**  
A logistics app querying shipments by region, customer, and delivery status.

### c. Strong [[Consistency]] is Required
In financial or transactional applications, data must always be consistent.  
**Example:** updating an account balance must happen [[Atomicity|atomically]].

### d. Mature Tooling and Standardization
[[Relational databases]] have decades of development, robust security, and strong support for **reporting, analytics, and migrations**.

## When to Use a [[NoSQL Databases|NoSQL Database]]

### a. [[Unstructured Data|Unstructured]] or [[Semi-Structured Data]]
When data varies in format or evolves frequently.

**Example:**
- A social media app where posts can include text, images, or videos.
- `MongoDB` document for a post:
```json
{
  "user": "alice",
  "content": "Hello world!",
  "likes": 25,
  "comments": [
    {"user": "bob", "text": "Hi!"},
    {"user": "eve", "text": "Welcome!"}
  ]
}
```

### b. High [[Scalability]] and Availability
When you need to [[Scalability|scale]] horizontally across many servers or regions.
**Example:**
- A large-[[Scalability|scale]] messaging platform using **Cassandra** or **DynamoDB** for fast distributed writes.
- A caching layer using **[[Redis]]** to handle millions of requests per second.

### c. Flexible or Rapidly Changing Schema
When the application evolves quickly and schema updates are frequent.
**Example:**
- A startup experimenting with product data structures.
- A [[CMS|content management system]] with different fields per document.

### d. Specific Data Models
[[NoSQL Databases|NoSQL]] includes several types optimized for different data relationships:
- **[[Key-Value Pairs|Key-Value]] Stores**: [[Redis]], DynamoDB --> caching, sessions.
- **Document Stores**: MongoDB, CouchDB --> flexible [[JSON]]-like data.
- **Column Stores**: Cassandra, HBase --> analytical queries on large datasets.
- **Graph Databases**: [[Neo4j]] --> complex relationships (e.g., social networks, recommendation engines).

## Hybrid Approach
Many modern systems use **both** [[Relational Databases|RDBMS]] and [[NoSQL Databases|NoSQL]] depending on the component:
- Use **[[PostgreSQL]]** for transactional data (user accounts, payments).
- Use **[[MongoDB]]** for content and activity feeds.
- Use **[[Redis]]** for caching and session management
