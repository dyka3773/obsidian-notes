---
tags:
  - tech
  - lists
aliases:
  - Testing Types
---
There are different types of tests that help analyze various elements of the software such as performance, security and user experience.

While a [[Staging environment]] allows teams to replicate real testing conditions, tests will still need to be run beforehand to test its individual components to make sure that it all works well together to satisfy quality assurance requirements.

## Levels
Software testing can be categorized into levels based on how much of the software system is the focus of a test.
- [[Unit testing]]
- [[Integration testing]]
- [[System testing]]

## Black/white box
Software testing can often be divided into [[White-box Testing|white-box]] and [[Black-box Testing|black-box]]. 
These two approaches are used to describe the point of view that the tester takes when designing test cases. 
A hybrid approach called grey-box that includes aspects of both boxes may also be applied to software testing methodology.

### Functional vs non-functional testing
[[Black-box Testing|Functional testing]] refers to activities that verify a specific action or function of the code.
These are usually found in the code requirements documentation, although some development methodologies work from use cases or user stories.
Functional tests tend to answer the question of "can the user do this" or "does this particular feature work."

Non-functional testing refers to aspects of the software that may not be related to a specific function or user action, such as [[scalability]] or other performance, behavior under certain constraints, or security.
Testing will determine the breaking point, the point at which extremes of [[scalability]] or performance leads to unstable execution.
Non-functional requirements tend to be those that reflect the quality of the product, particularly in the context of the suitability perspective of its users.

## Other Types of Testing
- [[smoke testing]]
- [[sanity testing]]
- [[Performance Testing]]
- Internationalization and localization testing
