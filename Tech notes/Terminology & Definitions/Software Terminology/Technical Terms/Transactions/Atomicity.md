---
tags:
  - tech
---
[[Transactions]] are often composed of multiple statements. 
Atomicity guarantees that each [[Transactions|transaction]] is treated as a single "unit", which either succeeds completely or fails completely: if any of the statements constituting a [[Transactions|transaction]] fails to complete, the entire [[Transactions|transaction]] fails and the [[Databases|database]] is left unchanged.
An atomic system must guarantee atomicity in each and every situation, including power failures, errors, and crashes.

In short:
> A [[Transactions|transaction]]'s changes to the state are atomic: either all happen or none happen. 
> These changes include [[Databases|database]] changes, messages, and actions on transducers.