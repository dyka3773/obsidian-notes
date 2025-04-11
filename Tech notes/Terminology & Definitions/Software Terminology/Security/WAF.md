---
tags:
  - tech
aliases:
  - Web Application Firewall
  - Web Application Firewalls
  - WAFs
---
A **Web Application Firewall (WAF)** is a security solution that monitors, filters, and blocks [[HTTP]](S) traffic to and from a web application.
It protects applications from common web threats by inspecting requests at the **application layer (Layer 7)** of the OSI model.

Unlike traditional firewalls, which focus on network-level protection, WAFs are tailored to detect and block **web-specific attacks** like [[SQL injection]], [[cross-site scripting]] ([[XSS]]), and [[CSRF]].
# How WAFs Work
WAFs sit between users and web applications, acting as a **reverse proxy** that intercepts incoming traffic:
```text
User → WAF → Web Application
```
They inspect requests and responses based on rules, [[heuristics]], or [[machine learning]] models, allowing or blocking them based on patterns.
# Types of WAF Deployments
|Type|Description|Example Use|
|---|---|---|
|**Network-based**|Deployed at the perimeter, hardware or VM|High-performance, low latency|
|**Host-based**|Installed directly on the application server|Deep integration, customizable|
|**Cloud-based**|Managed services via [[CDN]] or cloud provider|[[Scalability\|Scalable]], easy to deploy|
# Common Features
- **Predefined rule sets** (e.g., OWASP Top 10 protections)
- **Custom rule creation**
- **Real-time traffic monitoring and logging**
- **Rate limiting and throttling**
- **Bot mitigation**
- **Geo-blocking**
- **Virtual patching** (blocking known vulnerabilities at request level)
- **[[DDoS]] protection (limited)**
