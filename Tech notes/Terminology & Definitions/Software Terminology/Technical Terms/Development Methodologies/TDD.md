---
tags:
  - tech
aliases:
  - Test-Driven Development
  - Test-Driven
  - Test Driven Development
  - Test Driven
  - Red-Green-Refactor
---
**Test-Driven Development (TDD)** is a software development methodology where tests are written **before** writing the actual code.
The process emphasizes writing minimal code necessary to pass tests, leading to cleaner, more maintainable, and well-tested applications.

The typical workflow follows a short, repeating cycle often referred to as **"Red-Green-Refactor"**.
# Red-Green-Refactor
| Phase        | Description                                                                            |
| ------------ | -------------------------------------------------------------------------------------- |
| **Red**      | Write a test for a new feature. It should fail because the feature does not yet exist. |
| **Green**    | Write the simplest possible code to make the test pass.                                |
| **Refactor** | Improve the code structure while keeping all tests passing.                            |
This encourages frequent, small iterations and ensures code is always covered by tests.
# Steps of TDD
1. **Write a failing test**: Define the behavior you expect from the code.
2. **Run all tests**: Verify that the new test fails.
3. **Write the code**: Write just enough code to make the test pass.
4. **Run tests again**: Confirm all tests pass.
5. **Refactor**: Clean up the code without changing its functionality.
6. **Repeat**: Continue with the next small piece of functionality.
# Advantages of TDD
- **High [[Code Coverage|Test Coverage]]**: By design, every feature is covered by tests.
- **Better Design**: Forces developers to think about requirements and interface before implementation.
- **Faster Debugging**: Failures are immediately visible and isolated.
- **Improved Maintainability**: Easier to change code later with confidence.
- **Reduced Defects**: Many bugs are caught early in development.
# Challenges and Criticism
- **Learning Curve**: Requires developers to be comfortable with writing good tests.
- **Initial Overhead**: Development can feel slower initially due to constant switching between writing tests and writing code.
- **Over-testing**: Writing too many low-value tests can lead to high maintenance costs.
- **Not a Replacement for All Testing**: TDD focuses mainly on unit tests, not integration or system tests.
# Variants Related to TDD
- **[[BDD]] (Behavior-Driven Development)**: Extends TDD by focusing on the behavior of software from a business/user perspective using natural language.
- **[[ATDD]] (Acceptance Test-Driven Development)**: Starts with acceptance criteria before development begins.
