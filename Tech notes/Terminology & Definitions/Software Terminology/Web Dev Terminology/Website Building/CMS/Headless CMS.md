---
tags:
  - tech
---
A **Headless [[CMS]] ([[CMS|Content Management System]])** is a [[Backend Development|backend]]-only [[CMS|content management system]] that **decouples content management from content presentation**.
It delivers content via **[[API|APIs]]** (usually [[REST]] or [[GraphQL]]), leaving the [[Frontend Development|frontend]] (the “head”) entirely up to the developer.
> In short: **The [[CMS]] handles content. You choose how and where to display it.**
# Why "Headless"?
In a traditional [[CMS]], the [[Backend Development|backend]] (content) and [[Frontend Development|frontend]] (presentation) are tightly coupled.
The **"head"** refers to the presentation layer (e.g., [[HTML]] rendered by a [[CMS]] like WordPress). 
Removing that head, leaving just the body (the content and [[API]]), makes it "headless".
# Core Characteristics
- **[[API]]-first**: Content is accessed via [[API|APIs]] ([[REST]] or [[GraphQL]]).
- **Presentation-agnostic**: No assumptions about how content is rendered.
- **Omnichannel delivery**: Same content can be reused across platforms.
- **Developer flexibility**: [[Frontend Development|Frontend]] can be built using any framework (e.g., [[React]], [[Vue]], [[Svelte]], [[Next.js]]).
- **[[Scalability|Scalable]]**: Good for [[JAMstack]] or [[Microservices|microservice]] architectures.
# Use Cases
- **Multi-platform content distribution** (web, mobile, smart TVs, etc.)
- **Developer-centric websites** using [[React]], [[Vue]], [[Svelte]], or [[Static Site Generator|static site generators]] ([[Next.js]], Gatsby)
- **E-commerce [[Backend Development|backends]]** for headless storefronts
- **Mobile apps** requiring dynamic, [[CMS]]-driven content
- **Corporate intranets or documentation portals**
# Benefits & Drawbacks
## Benefits
- [[Frontend Development|Frontend]] freedom: Use any [[Frontend Development|frontend]] [[tech stack]]
- Reusability: Same content delivered to multiple platforms
- Speed and performance: Enables [[Static Site Generator|static site generation]] and [[JAMstack]]
- Security: Attack surface is reduced <- no public-facing [[CMS]] [[Backend Development|backend]]
- [[Scalability]]: Easy to distribute content via [[CDN|CDNs]] and [[API]] layers
## Drawbacks
- More complexity: You need to build the [[Frontend Development|frontend]]
- Steeper learning curve: Especially for non-technical users
- Less out-of-the-box: Requires developer setup for features like preview, [[SEO]], etc.
- Cost: Some headless CMS platforms charge based on usage/[[API]] calls
# When to Use a Headless CMS
Use a headless CMS if:
- You’re building a **[[Frontend Development|frontend]]-heavy app or [[SPA]]**.
- You want **content consistency across web, mobile, and more**.
- You need **high [[scalability]]** and developer control.
- You’re integrating with a **[[static site generator]]** (e.g., Gatsby, [[Next.js]]).
- You want to treat content as a **service** (Content-[[as-a-Service]] or CaaS).
