---
tags:
  - tech
aliases:
  - synonym
---
A synonym is an alias for a table, [[Database View|view]], sequence, or program unit.
It is used to provide an alternative name for an object or a level of encapsulation for an object.
    
```sql
CREATE SYNONYM synonym_name FOR object_name;
```

> **WARNING**: Synonyms still exist even if the object they point to is dropped.
> This can lead to errors when querying the synonym.
> To check if a synonym is pointing to a non-existent table, use the following query:
```sql
SELECT *
FROM ALL_SYNONYMS
WHERE TABLE_NAME NOT IN (
    SELECT DISTINCT TABLE_NAME
    FROM ALL_TABLES
);
```

