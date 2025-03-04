---
tags:
  - tech
aliases:
  - transaction processing
  - transaction
---
In computer science, transaction processing is information processing that is divided into individual, indivisible operations called transactions.
Each transaction must succeed or fail as a complete unit; it can never be only partially complete.

For example, when you purchase a book from an online bookstore, you exchange money (in the form of *credit*) for a book. 
If your credit is good, a series of related operations ensures that you get the book and the bookstore gets your money. 
However, if a single operation in the series fails during the exchange, the entire exchange fails. 
You do not get the book and the bookstore does not get your money. 
The technology responsible for making the exchange balanced and predictable is called *transaction processing*. 
Transactions ensure that data-oriented resources are not permanently updated unless all operations within the transactional unit complete successfully. 
By combining a set of related operations into a unit that either completely succeeds or completely fails, one can simplify error recovery and make one's application more reliable.

Transaction processing systems consist of computer hardware and software hosting a transaction-oriented application that performs the routine transactions necessary to conduct business. 
Examples include systems that manage sales order entry, airline reservations, payroll, employee records, manufacturing, and shipping.

To design a reliable transaction system, the [[ACID]] principles are used.