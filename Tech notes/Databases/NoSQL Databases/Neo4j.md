---
tags:
  - tech
---
Neo4j is a graph database management system (GDBMS) that uses a graph structure to store, manage, and query highly connected data.
Unlike [[relational databases]] that use tables, Neo4j represents data as **nodes** (entities) and **relationships** (connections between entities).

**Key Features of Neo4j:**
- **Graph-based storage**: Data is stored as nodes and relationships instead of tables.
- **Uses Cypher Query Language (CQL)**: A specialized query language optimized for graphs.
- **Highly optimized for traversing relationships**: Queries run efficiently even on large datasets.
- **[[ACID]]-compliant**: Ensures data integrity and reliability.
- **[[Scalability|Scalable]] and flexible**: Suitable for large, interconnected datasets.
# Why Use It?
- **Fast Relationship Queries**: Unlike [[INNER JOIN|SQL JOIN]]s, relationships are stored directly, reducing query time.
- **Highly Connected Data**: Ideal for social networks, recommendation engines, and fraud detection.
- **Flexible Schema**: No predefined schema like [[relational databases]]; can evolve over time.
- **Intuitive Data Representation**: Data is naturally modeled as a graph.
# Data Model
| **Component**     | **Description**                                             | **Example**                      |
| ----------------- | ----------------------------------------------------------- | -------------------------------- |
| **Nodes**         | Represent entities (e.g., Person, Product, City)            | `(User:Person {name: "Alice"})`  |
| **Relationships** | Define how nodes connect (e.g., FRIEND, PURCHASED)          | `(:Person)-[:FRIEND]->(:Person)` |
| **Properties**    | [[Key-value pairs]] storing data inside nodes and relationships | `{age: 30, city: "Berlin"}`      |
| **Labels**        | Categorize nodes (e.g., Person, Company, Movie)             | `(:Movie {title: "Inception"})`  |
# Cypher Query Language (CQL)
## Creating Nodes
```cypher
CREATE (:Person {name: "Alice", age: 30})
```
## Creating Relationships
```cypher
MATCH (a:Person {name: "Alice"}), (b:Person {name: "Bob"})
CREATE (a)-[:FRIEND]->(b)
```
> Any Person named Alice and any Person named Bob are now declared as friends
## Querying Data
```cypher
MATCH (p:Person)-[:FRIEND]->(friend)
WHERE p.name = "Alice"
RETURN friend.name
```
> Find all friends of Alice
## Updating Data
```cypher
MATCH (p:Person {name: "Alice"})
SET p.age = 31
```
## Deleting Nodes & Relationships
```cypher
MATCH (p:Person {name: "Alice"})-[r:FRIEND]->(b)
DELETE r, p
```
