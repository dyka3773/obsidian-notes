---
tags:
  - tech
---
You can get the `TRANSACTION_ID` of a transaction using the `DBMS_TRANSACTION.LOCAL_TRANSACTION_ID` function.

```sql
SET SERVEROUTPUT ON
DECLARE
    l_transaction_id VARCHAR2(64);
BEGIN
    l_transaction_id := DBMS_TRANSACTION.LOCAL_TRANSACTION_ID;
    DBMS_OUTPUT.PUT_LINE(l_transaction_id);
END;
```

This is extremely useful when used in conjunction with the [[Invisible Columns]] feature to track the changes made by a transaction to a table.