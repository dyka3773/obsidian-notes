---
tags:
  - tech
aliases:
  - FK
---
Foreign key refers to a field in a relational table that matches the [[Primary Key]] column of another table. 
It relates the two keys. 
Foreign keys do not need to have unique values in the referencing relation. 
A foreign key can be used to cross-reference tables, and it effectively uses the values of attributes in the referenced relation to restrict the domain of one or more attributes in the referencing relation.

## Referrencial Actions
Because the database management system enforces referential [[constraints]], it must ensure data integrity if rows in a referenced table are to be deleted (or updated).
If dependent rows in referencing tables still exist, those references have to be considered.
[[SQL]] specifies 5 different referential actions that shall take place in such occurrences:

#### CASCADE
Whenever rows in the parent (referenced) table are deleted (or updated), the respective rows of the child (referencing) table with a matching foreign key column will be deleted (or updated) as well. 
This is called a cascade delete (or update).

#### RESTRICT
A value cannot be updated or deleted when a row exists in a referencing or child table that references the value in the referenced table.

Similarly, a row cannot be deleted as long as there is a reference to it from a referencing or child table.

#### NO ACTION
NO ACTION and RESTRICT are very much alike. 
The main difference between NO ACTION and RESTRICT is that with NO ACTION the referential integrity check is done after trying to alter the table. 
RESTRICT does the check before trying to execute the UPDATE or DELETE statement. 
Both referential actions act the same if the referential integrity check fails: the UPDATE or DELETE statement will result in an error.

#### SET NULL, SET DEFAULT
In general, the action taken by the [[Databases|DBMS]] for SET NULL or SET DEFAULT is the same for both ON DELETE or ON UPDATE: the value of the affected referencing attributes is changed to NULL for SET NULL, and to the specified default value for SET DEFAULT.
