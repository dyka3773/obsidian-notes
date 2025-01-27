---
tags:
  - tech
---
Each row in a table has its own [[Unique Key]].
Rows in a table can be linked to rows in other tables by adding a column for the [[Unique Key]] of the linked row (such columns are known as [[Foreign Key]]s).

Part of this processing involves consistently being able to select or modify one and only one row in a table.
Therefore, most physical implementations have a unique [[Primary Key]] (PK) for each row in a table.
When a new row is written to the table, a new unique value for the [[Primary Key]] is generated; this is the key that the system uses primarily for accessing the table.
System performance is optimized for PKs.
Additional technology may be applied to ensure a unique ID across the world, a [[UUID|globally unique identifier]], when there are broader system requirements.

The primary keys within a database are used to define the relationships among the tables.
When a [[Primary Key|PK]] migrates to another table, it becomes a [[Foreign Key]] (FK) in the other table.
