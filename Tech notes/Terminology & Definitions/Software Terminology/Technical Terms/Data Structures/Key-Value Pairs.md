---
tags:
  - tech
aliases:
  - key-value
---
A **key-value pair** is a fundamental data structure that associates a unique **key** with a corresponding **value**.
It is widely used in [[databases]], programming, and data storage due to its simplicity and efficiency.

- **Key:** A unique identifier (e.g., a name, ID, or reference).
- **Value:** The associated data (e.g., a number, string, object, or even another key-value pair).

**Example of a Key-Value Pair:**
```json
{
  "username": "john_doe",
  "email": "john@example.com",
  "age": 30
}
```
Here, `"username"` is a key, and `"john_doe"` is its corresponding value.

# Where are they used?
- [[Databases]]: [[NoSQL Databases]] like [[Redis]], [[DynamoDB]], and Riak store data as key-value pairs.
- Programming Languages: Dictionaries in [[Python]], Objects in [[JavaScript]], HashMaps in [[Java]].
- Configuration Files: [[JSON]], [[YAML]], and INI files use key-value structures.
- [[Caching]]: [[Redis]] stores frequently accessed data as key-value pairs.
- [[Environment Variables]]: System settings use key-value formats (e.g., `DB_HOST=localhost`).
- [[API|APIs]] & [[HTTP]] Headers: Request/response headers like `Content-Type: application/json`.

# Advantages & Disadvantages of Key-Value Storage
## Advantages
- Fast Lookup: Accessing values via keys is extremely efficient.
- [[Scalability]]: [[NoSQL Databases|NoSQL]] key-value stores [[Scalability|scale]] horizontally.
- Flexibility: No fixed schema is required.
- Easy to Use: Simple structure with direct key-value mappings.

## Disadvantages
- **Limited Querying**: No support for complex queries (e.g., joins, filtering)
- **Data Redundancy**: No normalization like in [[Relational Databases|SQL databases]].
- **Inefficient for Relationships**: Not ideal for relational data (e.g., customer orders).
