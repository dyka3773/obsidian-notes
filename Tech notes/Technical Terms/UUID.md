---
tags:
  - tech
aliases:
  - Universally unique identifier
  - Globally unique identifier
  - GUID
  - Unique ID
---
A Universally Unique Identifier (UUID) is a 128-bit label used to uniquely identify objects in computer systems.
The term Globally Unique Identifier (GUID) is also used, mostly in Microsoft systems.

When generated according to the standard methods, UUIDs are, for practical purposes, unique.
Their uniqueness does not depend on a central registration authority or coordination between the parties generating them, unlike most other numbering schemes.
While the probability that a UUID will be duplicated is not zero, it is generally considered close enough to zero to be negligible.

Thus, anyone can create a UUID and use it to identify something with near certainty that the identifier does not duplicate one that has already been, or will be, created to identify something else.
Information labeled with UUIDs by independent parties can therefore be later combined into a single database or transmitted on the same channel, with a negligible probability of duplication.

Adoption of UUIDs is widespread, with many computing platforms providing support for generating them and for parsing their textual representation.

## Textual representation
In most cases, UUIDs are represented as hexadecimal values.
The most used format is the 8-4-4-4-12 format, `xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx`, where every `x` represents 4 bits.
