---
tags:
  - tech
---
**JAMstack** is a modern web development architecture based on three key components:
- [[JavaScript]]: Handles dynamic functionality.
- [[API|APIs]]: Third-party or custom [[API|APIs]] for server-side operations.
- Markup: Prebuilt [[HTML]] files served from a [[CDN]].
JAMstack decouples the [[Frontend Development|frontend]] from the [[Backend Development|backend]], favoring **static site generation** and **client-side rendering** powered by [[API|APIs]].
# Key Principles
- **Pre-rendering**: Sites are generated at build time as static assets.
- **Decoupling**: [[Frontend Development|Frontend]] and [[Backend Development|backend]] are separated. Content and services are provided via [[API|APIs]].
- **[[CDN]]-first**: Assets and pages are served globally via [[CDN|CDNs]] for speed and availability.
# Core Technologies
| Component          | Tools/Examples                                                                                                  |
| ------------------ | --------------------------------------------------------------------------------------------------------------- |
| **[[JavaScript]]** | [[React]], [[Vue]], [[Svelte]], [[Alpine.js]]                                                                   |
| **[[API\|APIs]]**  | [[REST]], [[GraphQL]], [[serverless functions]] (e.g., AWS Lambda, Netlify Functions)                           |
| **Markup**         | [[Markdown]], [[HTML]], generated via [[Static Site Generator\|SSGs]] like Gatsby, Hugo, [[Next.js]] (SSG mode) |
# Advantages
| Benefit                  | Description                                                   |
| ------------------------ | ------------------------------------------------------------- |
| **Performance**          | Static sites load faster and can be cached aggressively.      |
| **Security**             | No runtime server or [[Databases\|database]] reduces attack surface.         |
| **[[Scalability]]**          | Easy to [[Scalability\|scale]] via [[CDN]] without complex infrastructure.         |
| **Developer experience** | Modern tools, version control integration, fast iteration.    |
| **Flexibility**          | Choose your stack for [[Frontend Development\|frontend]], [[Backend Development\|backend]], and content sources. |
# Limitations
| Limitation            | Notes                                                                      |
| --------------------- | -------------------------------------------------------------------------- |
| **Build time**        | Large sites can take time to rebuild.                                      |
| **Complex workflows** | Integrating [[API\|APIs]], auth, and dynamic content can require more architecture. |
| **Content preview**   | Previewing unpublished content may require custom solutions.               |
# Ideal Use Cases
- Marketing and product websites
- Documentation portals
- Developer blogs and portfolios
- E-commerce [[Frontend Development|frontends]] (integrated via [[API|APIs]])
- Dashboards with static + dynamic hybrid content
