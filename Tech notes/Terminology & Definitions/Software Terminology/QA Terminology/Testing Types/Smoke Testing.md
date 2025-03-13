---
tags:
  - tech
---
Smoke testing is a preliminary testing technique in software development that aims to quickly verify the core functionality of a software build.
It acts as an initial "health check" to determine if the build is stable enough for further, more rigorous testing.

# Concept and Purpose
## Rapid Validation
- The primary goal of smoke testing is to provide rapid feedback on the stability of a new build.
- It ensures that the fundamental features are working as expected, preventing wasted time on testing a fundamentally broken build.
## Subset of Functionality
- Smoke tests cover a minimal set of critical functionalities, focusing on the core pathways of the application.
- They are not intended to be exhaustive but rather to identify major defects early in the development cycle.
## Build Verification
- Smoke testing is often performed after a new build is deployed to a [[Test Environment|testing environment]].
- It serves as a gatekeeper, preventing unstable builds from progressing to more in-depth testing phases.
## Regression Prevention
- It can also be used after bug fixes or code changes to ensure that those changes have not broken existing core functionality.
