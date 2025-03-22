---
tags:
  - tech
aliases:
  - UK
---
In [[Relational Databases|relational database management systems]], a unique key is a candidate key.
All the candidate [[Keys]] of a relation can uniquely identify the records of the relation, but only one of them is used as the [[Primary Key]] of the relation.
The remaining candidate [[Keys]] are called unique keys because they can uniquely identify a record in a relation.
Unique keys can consist of multiple columns.
Unique keys are also called alternate keys.
Unique keys are an alternative to the [[Primary Key]] of the relation.
In [[SQL]], the unique keys have a `UNIQUE` [[Constraints|constraint]] assigned to them in order to prevent duplicates (a duplicate entry is not valid in a unique column).
Alternate keys may be used like the [[Primary Key]] when doing a single-table select or when filtering in a where clause, but are not typically used to join multiple tables.
