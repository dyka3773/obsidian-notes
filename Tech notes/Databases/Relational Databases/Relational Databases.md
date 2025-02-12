---
tags:
  - tech
aliases:
  - RDBMS
  - RDB
---
A relational database (RDB) is a database based on the relational model of data. 
(Derived by [[Relational Algebra]])
A database management system used to maintain relational databases is a relational database management system (RDBMS).
Most relational database systems are equipped with the option of using [[SQL]] ([[SQL|Structured Query Language]]) for querying and updating the database.


## Relational Model

A relational model organizes data into one or more tables (or "relations") of columns and rows, with a [[Unique Key]] identifying each row.
Rows are also called records or tuples.
Columns are also called attributes.
Generally, each table/relation represents one "entity type" (such as customer or product).
The rows represent instances of that type of entity (such as "John" or "table") and the columns represent values attributed to that instance (such as address or price).

For example, each row of a "class" table corresponds to a class, and a "class" corresponds to multiple "students", so the relationship between the class table and the student table is "one to many".

## Features
- [[Keys]]
- [[Database Transactions]]
- [[Stored Procedures]]
- [[Views]]
- [[Constraints]]
- [[Triggers]]
- [[Database Index|Index]]

## Key Related Terminology
- [[Database normalization]]
- [[Relational Algebra]]