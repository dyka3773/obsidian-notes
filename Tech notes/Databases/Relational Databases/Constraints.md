---
tags:
  - tech
---
Constraints are often used to make it possible to further restrict the domain of an attribute.
For instance, a constraint can restrict a given integer attribute to values between 1 and 10.
Constraints provide one method of implementing business rules in the [[Databases|database]] and support subsequent data use within the application layer.
[[SQL]] implements constraint functionality in the form of [[check constraints]].
These are usually defined using expressions that result in a Boolean value, indicating whether or not the data satisfies the constraint.
Constraints can apply to single attributes, to a tuple (restricting combinations of attributes) or to an entire relation.

[[Keys]] are also considered constraints.