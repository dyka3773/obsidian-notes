---
tags:
  - tech
---
**DevOps** is a **set of practices, cultural philosophies, and tools** that aims to **integrate and automate the work of software development (Dev) and IT operations (Ops)** teams.
The primary goal is to shorten the **development life cycle**, deliver high-quality software **continuously**, and enable **faster, more reliable deployments**.

Rather than being a role or a toolset alone, DevOps is a **methodology** that emphasizes **collaboration, automation, monitoring, and continuous improvement**.

# Key Principles
| Principle                               | Description                                                                                       |
| --------------------------------------- | ------------------------------------------------------------------------------------------------- |
| **Collaboration**                       | Developers and operations teams work together throughout the lifecycle.                           |
| **Automation**                          | Build, test, and deploy processes are automated to improve speed and consistency.                 |
| **Continuous Integration (CI)**         | Developers integrate code frequently, triggering automated builds and tests.                      |
| **Continuous Delivery/Deployment (CD)** | Code changes are automatically tested and deployed to production or staging.                      |
| **Monitoring and Feedback**             | Applications and infrastructure are constantly monitored, and feedback loops are used to improve. |
| **Infrastructure as Code (IaC)**        | Infrastructure is managed using code and configuration files, enabling automation and versioning. |
# DevOps Lifecycle
1. **Plan**: Define project goals and track progress using tools like Jira, [[Trello]].
2. **Develop**: Write and manage code using [[Git]], GitHub, GitLab.
3. **Build**: Compile and package code automatically using tools like [[Jenkins]], [[GitHub Actions]].
4. **Test**: Automate tests to ensure code quality (e.g., [[Unit testing|unit]], [[Integration testing|integration]], [[Regression Testing|regression]]).
5. **Release**: Deploy applications with versioning, safely and quickly.
6. **Deploy**: Push to environments using CD pipelines and configuration management tools.
7. **Operate**: Manage infrastructure and runtime environments.
8. **Monitor**: Collect metrics, logs, and alerts to track performance and detect issues.
# Common Tools in the DevOps Ecosystem
| Area                       | Tools                                                                   |
| -------------------------- | ----------------------------------------------------------------------- |
| **Version Control**        | [[Git]], GitHub, GitLab, Bitbucket                                      |
| **CI/CD**                  | [[Jenkins]], [[GitHub Actions]], GitLab CI, [[CircleCI]], [[Travis CI]] |
| **Containerization**       | [[Docker]], Podman                                                      |
| **Orchestration**          | [[Kubernetes]], Docker Swarm, Nomad                                     |
| **Infrastructure as Code** | [[Terraform]], [[Ansible]], [[Pulumi]], CloudFormation                  |
| **Monitoring**             | Prometheus, [[Grafana]], ELK Stack, Datadog, New Relic                  |
| **Logging**                | Fluentd, [[Logstash]], Loki                                             |
| **Collaboration**          | Slack, Microsoft Teams, Confluence                                      |
# Benefits
| Benefit                                | Description                                                                        |
| -------------------------------------- | ---------------------------------------------------------------------------------- |
| **Faster Time to Market**              | Continuous delivery reduces lead time from development to deployment.              |
| **Improved Collaboration**             | Breaks down silos between Dev and Ops.                                             |
| **More Stable Operating Environments** | Automation and monitoring reduce human error and downtime.                         |
| **Better Product Quality**             | Frequent testing and feedback loops improve software reliability.                  |
| **Scalability**                        | Automation enables quick and efficient scaling of infrastructure and applications. |
# Related Concepts
| Concept                                | Description                                                                                              |
| -------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| **Site Reliability Engineering (SRE)** | A discipline that applies software engineering to operations, similar to DevOps but more metrics-driven. |
| **GitOps**                             | Managing infrastructure and applications through [[Git]] as the single source of truth.                  |
| **Platform Engineering**               | Building internal platforms to support DevOps practices with reusable tools and environments.            |
| **SecDevOps / DevSecOps**              | Integrating security into DevOps pipelines and culture.                                                  |
