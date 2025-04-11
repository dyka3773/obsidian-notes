---
tags:
  - tech
aliases:
  - Semantic Versioning
---
**Semantic Versioning**, often abbreviated as **semver**, is a versioning system designed to make it easier to understand the nature of changes in a software release.
It uses a standardized format: `MAJOR.MINOR.PATCH`
Each segment has a specific meaning, and version numbers increase based on the type of change made.
# Version Format
## `MAJOR` version
Increased when:
- Backward-incompatible changes are made
- [[API]] contracts or behavior change in a way that breaks existing usage
## `MINOR` version
Increased when:
- New features are added in a backward-compatible manner
## `PATCH` version
Increased when:
- Bug fixes or small changes are made without affecting existing features
# Pre-release and Build Metadata
Semver allows optional extensions:
- **Pre-release tags** (e.g., `1.0.0-alpha`, `1.0.0-beta.2`) indicate unstable versions
- **Build metadata** (e.g., `1.0.0+build123`) may provide additional build info but does not affect version precedence
# Rules for Compatibility
| Update Type | Safe to Auto-Upgrade? | Backward Compatible?    |
| ----------- | --------------------- | ----------------------- |
| PATCH       | Yes                   | Yes                     |
| MINOR       | Usually               | Yes                     |
| MAJOR       | No                    | No (might break things) |
Package managers often use **range specifiers**:

| Specifier | Meaning                                    |
| --------- | ------------------------------------------ |
| `^1.2.3`  | Accept all minor/patch updates under 2.0.0 |
| `~1.2.3`  | Accept patch updates under 1.3.0           |
| `1.2.3`   | Exact version only                         |
# Benefits of Semantic Versioning
- **Predictability**: Makes it easier to decide when and how to upgrade
- **Clarity**: Communicates the nature of changes clearly
- **Automation**: Enables tooling to safely resolve dependencies
- **Trust**: Helps teams and users manage upgrades with confidence
# Common Pitfalls
- Incorrectly updating **major** when only making minor changes
- Failing to increase **major** when introducing breaking changes
- Overusing **patch** updates for everything, which can mislead users
