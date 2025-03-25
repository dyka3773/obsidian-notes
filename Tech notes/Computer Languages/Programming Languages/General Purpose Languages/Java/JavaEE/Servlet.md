---
tags:
  - tech
  - java
aliases:
  - Servlets
---
A **Servlet** is a [[Java]] class used to handle [[HTTP]] requests and generate dynamic web content on the **server side**.
It extends the capabilities of a web server by providing a mechanism to process client requests, usually from a **web browser or [[API]] client**.
- **Key Role:** Servlets process user requests, interact with [[databases]], and return responses ([[HTML]], [[JSON]], [[XML]], etc.).
- **Part of:** **[[JavaEE|Java EE]] ([[JavaEE|Jakarta EE]])** for building web applications.
- **Alternative to:** Older **CGI scripts** and now often replaced by modern **[[Spring Boot]], [[REST]] [[API|APIs]], and frameworks like [[JSP]], [[JSF]], and [[Spring MVC]]**.

# How they work
1. **Client (Browser or [[API]]) Sends a Request** → Servlet Container receives it.
2. **Servlet Processes the Request** (e.g., retrieves data from a [[Databases|database]]).
3. **Servlet Generates a Response** ([[HTML]] page, [[JSON]] data, etc.).
4. Server Sends Response to the Client.

> - Runs inside a **Servlet Container** (like [[Apache Tomcat]], [[Jetty]], [[WildFly]]).
> - Uses the **HttpServlet** class for handling [[HTTP]] requests ([[GET]], [[POST]], etc.).

# Lifecycle
A Servlet follows this **lifecycle managed by the container**:
1. **Initialization (`init()`)** – Executed once when the servlet is first loaded.
2. **Request Handling (`service()`)** – Handles [[HTTP]] requests (`doGet()`, `doPost()`).
3. **Destruction (`destroy()`)** – Called before removing the servlet from memory.

# Example: Basic [[Java]] Servlet
```java
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/hello")  // Defines URL mapping
public class HelloServlet extends HttpServlet {
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html");
        PrintWriter out = response.getWriter();
        out.println("<h1>Hello, World!</h1>");
    }
}
```
- **`@WebServlet("/hello")`** → Maps this servlet to `http://localhost:8080/app/hello`.
- **`doGet()`** → Handles [[GET]] requests, sends back an [[HTML]] response.
- **`PrintWriter`** → Writes the response output.

# Advanced Features
- **Session Management**: Track user sessions using **HttpSession**.
- **Servlet Filters**: Intercept and modify requests/responses (e.g., authentication, logging).
- **Servlet Listeners**: Monitor lifecycle events in web applications.
- **Asynchronous Processing**: Handle long-running tasks without blocking threads.

# Modern Alternatives
While Servlets remain foundational in [[Java]] web development, many modern frameworks **abstract** servlets to simplify development:
- **[[Spring Boot]] ([[Spring MVC]], [[REST]] [[API|APIs]])**: Replaces low-level servlet coding.
- **[[JAX-RS]] (Jakarta RESTful Web Services)**: For building [[REST|RESTful]] [[API|APIs]].
- **[[Microservices]] (Spring Cloud, [[Quarkus]], Micronaut)**: Serverless and cloud-native development.
