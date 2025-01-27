---
tags:
  - tech
aliases: []
---
A database [[Transactions|transaction]] symbolizes a unit of work, performed within a database management system (or similar system) against a database, that is treated in a coherent and reliable way independent of other transactions.
A transaction generally represents any change in a database.
[[Transactions]] in a database environment have two main purposes:
1. To provide reliable units of work that allow correct recovery from failures and keep a database consistent even in cases of system failure.
2. To provide [[isolation]] between programs accessing a database concurrently. If this [[isolation]] is not provided, the programs' outcomes are possibly erroneous.
In a database management system, a transaction is a single unit of logic or work, sometimes made up of multiple operations. 
Any logical calculation done in a consistent mode in a database is known as a transaction. 
One example is a transfer from one bank account to another: the complete transaction requires subtracting the amount to be transferred from one account and adding that same amount to the other.

A database transaction, by definition, must be:
- atomic (it must either be complete in its entirety or have no effect whatsoever), 
- consistent (it must conform to existing [[constraints]] in the database), 
- isolated (it must not affect other transactions) and 
- durable (it must get written to persistent storage). 
Database practitioners often refer to these properties of database transactions using the acronym [[ACID]].

## In [[SQL]]
A transaction is typically started using the command `BEGIN` (although the [[SQL]] standard specifies `START TRANSACTION`). 
When the system processes a `COMMIT` statement, the transaction ends with successful completion.
A `ROLLBACK` statement can also end the transaction, undoing any work performed since BEGIN. 
If [[autocommit]] was disabled with the start of a transaction, [[autocommit]] will also be re-enabled with the end of the transaction.

One can set the [[isolation level]] for individual transactional operations as well as globally.
At the highest level (`READ COMMITTED`), the result of any operation performed after a transaction has started will remain invisible to other database users until the transaction has ended. 
At the lowest level (`READ UNCOMMITTED`), which may occasionally be used to ensure high concurrency, such changes will be immediately visible.