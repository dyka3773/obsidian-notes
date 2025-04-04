---
tags:
  - tech
aliases:
  - SSG
  - SSGs
  - Static Site Generators
---
A **Static Site Generator (SSG)** is a tool that **generates a complete, [[static HTML]] website** from source files such as **[[Markdown]], [[HTML]] templates, or data files**.
Instead of building pages dynamically at runtime (like in CMSs or server-rendered apps), SSGs **pre-generate all [[HTML]] pages at build time** and serve them as-is.

# Typical Workflow
1. **Write Content**: Usually in [[Markdown]] or another markup language.
2. **Design with Templates**: Use [[HTML]]/[[CSS]] templates to define layout.
3. **Build Site**: The SSG compiles content and templates into [[static HTML]] files.
4. **Deploy**: The generated files are hosted on a static server (e.g., Netlify, GitHub Pages).
```text
Markdown + Templates → [SSG] → HTML files → Static Hosting
```
# Benefits of Static Site Generators
| Benefit                      | Description                                                                        |
| ---------------------------- | ---------------------------------------------------------------------------------- |
| **Speed**                    | No server-side processing & pages load quickly.                                    |
| **Security**                 | No [[Databases\|database]] or dynamic execution at runtime reduces attack surface. |
| **Version Control Friendly** | Content can be stored in [[Git]], enabling collaboration and rollbacks.            |
| **Easy Hosting**             | Can be hosted on any static file server or [[CDN]].                                |
| **[[Scalability]]**          | Minimal server resources required to handle traffic.                               |
# Popular Static Site Generators
| Generator                       | Language               | Use Case                                      |
| ------------------------------- | ---------------------- | --------------------------------------------- |
| **Jekyll**                      | [[Ruby]]               | Blog and documentation (used by GitHub Pages) |
| **Hugo**                        | [[Go]]                 | Very fast builds, great for large sites       |
| **Gatsby**                      | [[JavaScript]] (React) | React-based, modern web apps                  |
| **[[Next.js]] (Static Export)** | [[JavaScript]] (React) | Hybrid static/dynamic sites                   |
| **Eleventy (11ty)**             | [[JavaScript]]         | Simple and flexible for custom setups         |
| **Pelican**                     | [[Python]]             | Blog-oriented, [[Markdown]]-based             |
| **MkDocs**                      | [[Python]]             | Project documentation                         |
# Use Cases
- Developer Blogs
- Project Documentation
- Marketing Websites
- Portfolios
- Landing Pages
- [[Open Source]] Project Pages
# Drawbacks and Limitations
- **No dynamic content at runtime** (e.g., comments, login) unless integrated via [[JavaScript|JS]] or third-party [[API|APIs]].
- **Build time increases** with site size (especially in large SSGs like Gatsby).
- **Non-technical users** may struggle without a [[CMS]] unless paired with a **[[headless CMS]]**.
