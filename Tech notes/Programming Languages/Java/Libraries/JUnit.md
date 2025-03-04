---
tags:
  - tech
  - java
---
JUnit is a test automation framework for the [[Java]] programming language.

## Lifecycle

Every JUnit test class usually has several test cases. These test cases are subject to the test life cycle. The full JUnit Lifecycle has three major phases:

1. **Setup phase**- This phase is where the test infrastructure is prepared. Two levels of setup are available. The first type of setup is class-level setup in which a computationally expensive object, such as a database connection, is created and reused, with minimal side effects. Class-level setup is implemented using the `@BeforeAll` annotation (depending on the version of JUnit you're using this may also be `@BeforeClass`). The other type is setup before running each test case, which uses the `@BeforeEach` annotation.
2. **Test execution** - This phase is responsible for running the test and verifying the result. The test result will indicate if the test result is a success or a failure. The `@Test` annotation is used here.
3. **Clean up phase** - After all posttest executions are performed, the system may need to perform cleanup. Similar to class-level setup, there is a corresponding class-level clean up. The `@AfterAll` annotation is used to support class-level clean up (again, depending on the version of JUnit you're using this may also be `@AfterClass`). The `@AfterEach` annotation allows for cleanup after test execution.