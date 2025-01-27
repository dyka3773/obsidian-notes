---
tags:
  - tech
aliases:
  - PK
---
In the [[Relational Databases|relational model of databases]], a primary key is a designated attribute (column or columns) that can reliably identify and distinguish between each individual record in a table. 
The database creator can choose an existing [[Unique Key|unique attribute]] or combination of attributes from the table (named "natural key") to act as its primary key, or create a new attribute containing a [[UUID|unique ID]] that exists solely for this purpose (named "surrogate key").

Examples of natural keys that could be suitable primary keys include data that is already by definition unique to all items in the table such as a national identification number attribute for person records, or the combination of a very precise [[timestamp]] attribute with a very precise location attribute for event records.

## Defining PKs in [[SQL]]
The syntax to add such a constraint to an existing table is defined like this:
```sql
ALTER TABLE <table identifier> 
    ADD [ CONSTRAINT <constraint identifier> ] 
    PRIMARY KEY ( <column name> [ {, <column name> }... ] )
```

> The primary key can also be specified directly during table creation:
```sql
CREATE TABLE table_name (
   id_col  INT  PRIMARY KEY,
   col2    CHARACTER VARYING(20),
   ...
)
```
