---
tags:
  - tech
aliases:
  - Sanity test
  - Sanity tests
---
**Sanity testing** is a **quick, focused type of software testing** that verifies whether a specific part of an application is functioning correctly **after minor changes or bug fixes**.
It is typically **narrow in scope**, aimed at confirming that a particular functionality works as expected and hasn’t caused unintended side effects.

Sanity tests help determine **whether it’s "sane" to proceed with further testing**, such as full [[Regression Testing|regression]] or [[Integration testing|integration tests]].
# Key Characteristics
- **Subset of [[Regression Testing]]**: It doesn’t retest the entire application, only the part that was changed.
- **Quick and focused**: Tests specific functionality, not the whole system.
- **Unscripted or lightly scripted**: Can often be performed ad hoc by testers.
- **Post-build check**: Usually done after receiving a new build or patch.
# Example Scenario
Let’s say a bug was fixed in the login module where incorrect passwords were not being handled correctly.  
**Sanity test flow might include**:
1. Attempt login with a wrong password.
2. Ensure error message is shown.
3. Confirm the user is not logged in.
4. Optionally, check that other recent changes (e.g., password reset) still work.
The goal is not to test the entire login module, but just to ensure the **fix behaves as expected**.
