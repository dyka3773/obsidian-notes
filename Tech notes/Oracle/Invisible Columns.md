---
tags:
  - tech
---
Invisible columns are columns that are not visible to the user or any other process that uses the table unless they explicitly ask for them. They are used to hide columns that are used internally by the database. They are created using the `INVISIBLE` keyword in the `CREATE TABLE` statement.

```sql
CREATE TABLE table_name (
    column1 datatype INVISIBLE,
    column2 datatype,
    column3 datatype INVISIBLE
);
```

```sql
-- The above CREATE TABLE statement when queried using the following statement:
SELECT * FROM table_name;
-- will return only column2

-- To query the invisible columns, we need to explicitly ask for them:
SELECT column1, column2, column3 FROM table_name;
```
