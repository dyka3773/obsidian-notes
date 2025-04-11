---
tags:
  - tech
aliases:
  - Content Management System
---
A **Content Management System (CMS)** is a software platform that allows users to **create, manage, and publish digital content**, typically for websites, **without requiring programming knowledge**.
It separates content from code, making it easy for non-technical users to update websites and for developers to maintain structure and functionality.
# Core Features
- **Content creation and editing**: Rich-text editors ([[WYSIWYG]]), media upload, formatting tools.
- **Content storage**: Structured storage for articles, images, videos, etc.
- **User roles and permissions**: Editors, authors, admins, and readers.
- **Themes and templates**: Define the visual layout of content.
- **Plugins or extensions**: Add features like [[SEO]] tools, analytics, or e-commerce.
- **Versioning and history**: Track content changes and rollbacks.
- **Publishing controls**: Drafts, scheduled publishing, archiving.
# Types of CMSs
## Traditional (Monolithic) CMS
- Coupled [[Frontend Development|frontend]] and [[Backend Development|backend]].
- Example: **[[WordPress]]**, **[[Drupal]]**, **[[Joomla]]**
## [[Headless CMS]]
- [[Backend Development|Backend]]-only: serves content via [[API|APIs]] (usually [[REST]] or [[GraphQL]]).
- [[Frontend Development|Frontend]] can be built using any technology.
- Example: **Strapi**, **Contentful**, **Sanity.io**
## Decoupled CMS
- Separates [[Backend Development|backend]] and [[Frontend Development|frontend]] but offers tools for both.
- Combines benefits of monolithic and headless.
# Common Use Cases
| Use Case             | CMS Role                                               |
| -------------------- | ------------------------------------------------------ |
| **Blogs**            | Easy article publishing, tag management, user comments |
| **Company websites** | Pages for services, contact info, job listings         |
| **E-commerce**       | Product listings, order management, content marketing  |
| **Documentation**    | [[Markdown]] support, search, navigation                   |
| **News & media**     | Editorial workflows, scheduled releases, rich media    |
# Examples of CMS Platforms
| CMS               | Type        | Language                     | Notes                                    |
| ----------------- | ----------- | ---------------------------- | ---------------------------------------- |
| **[[WordPress]]** | Traditional | [[PHP]]                      | Most popular CMS                         |
| **[[Drupal]]**    | Traditional | [[PHP]]                      | Highly customizable                      |
| **[[Joomla]]**    | Traditional | [[PHP]]                      | Flexible but less common                 |
| **Strapi**        | Headless    | [[JavaScript]] ([[Node.js]]) | Developer-friendly                       |
| **Contentful**    | Headless    | N/A (SaaS)                   | [[API]]-first, [[Scalability\|scalable]] |
| **Ghost**         | Hybrid      | [[Node.js]]                  | Blogging-focused CMS                     |
| **Sanity.io**     | Headless    | N/A (SaaS)                   | Real-time collaboration                  |
# Security Considerations
- CMS platforms are common attack targets.
- Use **strong admin credentials** and **limit plugin use**.
- Keep **CMS core and plugins updated**.
- Apply **rate limiting, [[WAF]]s, and [[HTTPS]]**.
- Consider **static builds** or **[[Headless CMS]] + [[Frontend Development|frontend]]** for improved security.
