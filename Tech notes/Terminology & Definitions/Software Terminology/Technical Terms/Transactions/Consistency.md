---
tags:
  - tech
---
Consistency ensures that a [[Transactions|transaction]] can only bring the [[Databases|database]] from one consistent state to another.
Any data written to the [[Databases|database]] must be valid according to all defined rules, including [[constraints]], cascades, triggers, and any combination thereof.
This prevents [[Databases|database]] corruption by an illegal [[Transactions|transaction]].

In short:
> The [[Transactions|transaction]] has a correct transformation of the state. The actions taken as a group do not violate any of the integrity [[constraints]] associated with the state.