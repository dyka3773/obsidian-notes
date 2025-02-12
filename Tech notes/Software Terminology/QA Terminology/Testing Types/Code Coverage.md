---
tags:
  - tech
aliases:
  - test coverage
---
In software engineering, code coverage, also called test coverage, is a percentage measure of the degree to which the source code of a program is executed when a particular test suite is run.
A program with high code coverage has more of its source code executed during testing, which suggests it has a lower chance of containing undetected software bugs compared to a program with low code coverage.
Many different metrics can be used to calculate test coverage.
Some of the most basic are the percentage of program subroutines and the percentage of program statements called during execution of the test suite.

Code coverage as a software metric can be reported as a percentage for:
- _Function coverage_, which reports on functions executed
- _Statement coverage_, which reports on the number of lines executed to complete the test
- _Decision coverage_, which reports on whether both the True and the False branch of a given test has been executed

100% statement coverage ensures that all code paths or branches (in terms of control flow) are executed at least once.
This is helpful in ensuring correct functionality, but not sufficient since the same code may process different inputs correctly or incorrectly.
