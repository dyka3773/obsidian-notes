---
tags:
  - tech
aliases:
  - Node Package Manager
---
**NPM (Node Package Manager)** is the default **package manager for [[Node.js]]**. 
It is both:
- a **[[CLI]] tool** for installing, managing, and publishing [[JavaScript]] packages,
- and an **online registry** ([https://www.npmjs.com](https://www.npmjs.com)) that hosts thousands of reusable packages (or "modules").

NPM helps developers share code and manage dependencies in modern [[JavaScript]] projects.
# Key Concepts
## Packages
A **package** is a directory containing a `package.json` file, which includes metadata like the name, version, dependencies, and scripts. Packages can be:
- **Public**: Published and available on the NPM registry
- **Private**: Scoped packages (e.g. `@your-org/package`) or unpublished local modules
## Registry
The NPM **registry** is a centralized repository of open-source [[JavaScript]] packages. 
Developers can both **download** from and **publish** to this registry.
## Dependencies
These are other packages that your project needs. 
NPM downloads them and stores them in a local `node_modules` directory.
# Common [[CLI]] Commands
| Command                    | Purpose                                                              |
| -------------------------- | -------------------------------------------------------------------- |
| `npm init`                 | Create a new `package.json` file                                     |
| `npm install` or `npm i`   | Install all dependencies listed in `package.json`                    |
| `npm install <package>`    | Add a package to your project                                        |
| `npm install -g <package>` | Install a package globally                                           |
| `npm uninstall <package>`  | Remove a package                                                     |
| `npm update`               | Update all packages                                                  |
| `npm publish`              | Publish your package to the registry                                 |
| `npm run <script>`         | Run a script defined in `package.json`                               |
| `npm audit`                | Check for security vulnerabilities                                   |
| `npm ci`                   | Clean install based on `package-lock.json` (used in CI environments) |
# Dependency Types in `package.json`
- `"dependencies"`: Required for the project to run
- `"devDependencies"`: Only needed during development (e.g., test frameworks, [[linter]]s)
- `"peerDependencies"`: Indicate a compatible host package version (usually plugins)
- `"optionalDependencies"`: Dependencies that are not critical for functionality
# [[semver|Semantic Versioning]] ([[semver]])
NPM follows **[[semver|semantic versioning]]** ([[semver]]):  
`MAJOR.MINOR.PATCH`
- `^1.2.3`: Accepts minor/patch updates but locks major version
- `~1.2.3`: Accepts only patch updates
- `1.2.3`: Exact version only
# `package-lock.json`
This file is **automatically generated** by NPM to lock the exact versions of every installed dependency (and their sub-dependencies). 
It ensures repeatable builds.
