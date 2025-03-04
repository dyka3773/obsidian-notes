---
tags:
  - tech
---
The testing environment allows QA engineers to test new and changed code whether via automated or non-automated techniques.

Development environments are ever-changing as developers keep adding new functionalities which makes it difficult for QA teams to run time-consuming tests so a testing environment is where they can execute more complex and time-consuming tests.

The code at this stage usually goes through more than one QA environment where unit tests are first conducted and the code is moved to further [[Test Environment|test environments]].

Thus, you can either run tests one after the other or you can create several testing environments that allow for parallel testing to take place, depending on the sophistication of your testing environment.

If there is a test failure, the faulty code can be removed in this environment. Thus, testers can ensure the quality of the code by finding any bugs and reviewing all bug fixes. However, if all tests pass, the test environment can automatically move the code to the next deployment environment.
