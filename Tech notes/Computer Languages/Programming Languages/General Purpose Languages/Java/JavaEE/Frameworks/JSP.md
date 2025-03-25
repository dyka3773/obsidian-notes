---
tags:
  - tech
  - java
aliases:
  - JavaServer Pages
---
**JavaServer Pages (JSP)** is a **server-side technology** used for creating dynamic web pages in **[[Java]]-based web applications**.
It allows developers to embed [[Java]] code into **[[HTML]]** and generate dynamic content at runtime.
JSP is part of **[[JavaEE|Java EE]] ([[JavaEE|Jakarta EE]])** and is built on top of **[[Servlet|Servlets]]**, making it an extension of the [[Servlet|Java Servlet]] technology.

**Key Features**
- **Dynamic [[HTML]] content generation** using [[Java]] code.
- **Separation of presentation & logic** with [[JavaBean|JavaBeans]] and [[MVC pattern]].
- **Reusable components** using JSP tags and [[JavaBean|JavaBeans]].
- **Integration with Servlets** for advanced web applications.
- **Session management, form handling, and [[Databases|database]] connectivity**.

**Example Syntax:**
```jsp
<%@ page language="java" contentType="text/html" %>
<html>
  <body>
    <h1>Welcome to JSP!</h1>
    <p>The current time is: <%= new java.util.Date() %></p>
  </body>
</html>
```
> `<%= expression %>` inserts dynamic content into [[HTML]].
# Elements & Syntax
| **JSP Element**      | **Description**                                                | **Example**                                           |
| -------------------- | -------------------------------------------------------------- | ----------------------------------------------------- |
| **Directives**       | Provide instructions to the JSP engine.                        | `<%@ page language="java" contentType="text/html" %>` |
| **Declarations**     | Declare variables & methods in [[Java]].                           | `<%! int count = 0; %>`                               |
| **Scriptlets**       | [[Java]] code inside JSP.                                          | `<% out.println("Hello, JSP!"); %>`                   |
| **Expressions**      | Insert dynamic values.                                         | `<%= new java.util.Date() %>`                         |
| **Comments**         | Add server-side comments.                                      | `<%-- This is a JSP comment --%>`                     |
| **Implicit Objects** | Predefined objects like `request`, `response`, `session`, etc. | `<%= request.getParameter("name") %>`                 |
## JSP Implicit Objects
JSP provides **built-in objects** for handling requests, responses, and session management.

| Object        | Description                                    |
| ------------- | ---------------------------------------------- |
| `request`     | Holds [[HTTP]] request data (parameters, headers). |
| `response`    | Sends response data to the client.             |
| `session`     | Stores user session data.                      |
| `application` | Stores application-wide data.                  |
| `out`         | Writes content to the response.                |
| `config`      | Retrieves JSP configuration settings.          |
| `pageContext` | Provides information about the page execution. |
| `exception`   | Captures exceptions (used in error pages).     |
# JSP with [[JavaBean|JavaBeans]] Example
## [[JavaBean]] Class (`User.java`)
```java
package com.example;

public class User {
    private String name;
    
    public String getName() { return name; }
    public void setName(String name) { this.name = name; }
}
```
## JSP Page (`user.jsp`)
```jsp
<jsp:useBean id="user" class="com.example.User" />
<jsp:setProperty name="user" property="name" value="Alice"/>
<p>Welcome, <jsp:getProperty name="user" property="name"/>!</p>
```
> Uses [[JavaBean]] to separate business logic from JSP presentation.
# JSP in [[MVC]] Architecture
JSP is often used in **[[Model-View-Controller]] ([[MVC]])** pattern:
- **Model (M)**: [[JavaBean|JavaBeans]], [[Databases|Database]] logic.
- **View (V)**: JSP pages (UI).
- **Controller (C)**: [[Servlet|Servlets]] handling requests.
## Example MVC Flow:
1. User requests `login.jsp` → **(View)**
2. [[Servlet]] `LoginServlet.java` processes login → **(Controller)**
3. [[JavaBean]] `User.java` handles user data → **(Model)**
4. Response sent back to `dashboard.jsp`
