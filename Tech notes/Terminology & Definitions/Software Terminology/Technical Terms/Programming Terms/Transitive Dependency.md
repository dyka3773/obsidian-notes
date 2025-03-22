---
tags:
  - tech
aliases:
  - Transitive Dependencies
---
A **transitive dependency** occurs when **A depends on B, and B depends on C, leading A to indirectly depend on C**.

# Transitive Dependency in [[Databases]] (Normalization)
In **[[relational databases]]**, a transitive dependency exists when a **non-key attribute depends on another non-key attribute** rather than directly on the [[Primary Key]].
This violates **Third Normal Form ([[3NF]])**.

## Example: Breaking a Transitive Dependency
Consider this **unoptimized** table:

| **Student_ID** | **Student_Name** | **Department** | **Department_Location** |
| -------------- | ---------------- | -------------- | ----------------------- |
| 101            | Alice            | CS             | Building A              |
| 102            | Bob              | IT             | Building B              |
Here:
- **Student_ID → Department** ✅ (Direct dependency)
- **Department → Department_Location** ✅ (Direct dependency)
- **Student_ID → Department_Location** ❌ (**Transitive dependency**)

### Solution: Normalize into Two Tables
#### **Student Table**
| **Student_ID** | **Student_Name** | **Department** |
| -------------- | ---------------- | -------------- |
| 101            | Alice            | CS             |
| 102            | Bob              | IT             |
#### **Department Table**
| **Department** | **Department_Location** |
| -------------- | ----------------------- |
| CS             | Building A              |
| IT             | Building B              |
> Now, there are no transitive dependencies

# Transitive Dependencies in Software Development
## Transitive Dependencies in Build Systems ([[Maven]]/[[Gradle]]/[[NPM]][)]
In **dependency management systems**, a **transitive dependency** occurs when a library you include **depends on another library, which you inherit automatically**.

### Example: [[Maven]]
In `pom.xml`, if **Project A depends on B**, and **B depends on C**, then **A implicitly depends on C**.
> A does not declare C, but it still gets C as a transitive dependency

#### How to Manage Transitive Dependencies in Maven
1. **Use `<scope>provided</scope>`**: Avoids unnecessary dependencies.
2. **Use `<exclusions>`**: Manually exclude unwanted dependencies. eg
```xml
<dependency>
    <groupId>org.example</groupId>
    <artifactId>B</artifactId>
    <version>1.0</version>
    <exclusions>
        <exclusion>
            <groupId>org.example</groupId>
            <artifactId>C</artifactId>
        </exclusion>
    </exclusions>
</dependency>
```
> This prevents Project A from inheriting C

## Transitive Dependencies in [[Java]] Modules (Java 9+)
In Java 9+, the **module system** allows specifying **transitive dependencies** explicitly.
### Example: [[Java]] Modules
```java
module A {
    requires B;
}

module B {
    requires transitive C;
}
```
> Since `B` declares `requires transitive C`, **A now automatically has access to C**.

## Transitive Dependencies in [[NPM]] ([[Node.js]] Package Manager)
In [[JavaScript]] projects, **installing a package** often installs multiple indirect dependencies.
### Example: Installing Express.js
```bash
npm install express
```
- `express` depends on `body-parser`
- `body-parser` depends on `debug`
- **You get `debug` without explicitly installing it**
#### Managing Transitive Dependencies in [[NPM]]
1.  **Run `npm list`** to see dependency trees.
2. **Use `npm dedupe`** to remove duplicate transitive dependencies.
3. **Use `package-lock.json`** to lock dependency versions.

# Problems Caused by Transitive Dependencies
- **Version Conflicts**: Different dependencies may require **incompatible versions** of the same library.
- **Security Risks**: A transitive dependency **may have vulnerabilities** that you don’t directly control.
- **Bloating**: Inheriting unnecessary libraries increases **application size** and **build time**.

## Solutions
- **Explicit Dependency Management**: Use exclusions in [[Maven]], [[Gradle]], and [[NPM]].
- **Dependency Tree Analysis**: Use tools like `mvn dependency:tree` or `npm list`.
- **Dependency Audits**: Use `npm audit` or `OWASP Dependency-Check` to scan for security risks.
