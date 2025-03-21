---
tags:
  - tech
aliases:
  - Extensible Hypertext Markup Language
---
**XHTML (Extensible Hypertext Markup Language)** is a reformulation of **[[HTML]]** using **[[XML]] ([[XML|Extensible Markup Language]])**.
It is stricter than [[HTML]] and ensures well-formed documents that are more consistent and reliable across different platforms.

# Key Features
- Combines the flexibility of **[[HTML]]** with the strict syntax rules of **[[XML]]**.
- Ensures **well-formed documents** that are easy to parse.
- Designed to be more **extensible** for future web technologies.
- Supports **better integration with other [[XML]]-based languages** (e.g., [[SVG]], MathML).

# Pros & Cons
## Advantages
- Well-Formed & Strict Syntax: Fewer errors, easier debugging.
- Extensibility: Can integrate with [[XML]], [[SVG]], MathML.
- Backward Compatibility: Works with older [[HTML]] browsers.
- Improved Accessibility: More structured content.

## Disadvantages
- Stricter Rules: Requires well-formed markup.
- Deprecated in Favor of HTML5: HTML5 offers similar benefits without strict [[XML]] rules.
- More Verbose: Requires explicit closing tags and attributes.

# HTML vs XHTML
| Feature                | HTML                                     | XHTML                                         |
| ---------------------- | ---------------------------------------- | --------------------------------------------- |
| Case Sensitivity       | **Not case-sensitive** (`<BR>` = `<br>`) | **Case-sensitive** (`<br>` only)              |
| Element Closing        | **Optional in some cases** (`<p>Text`)   | **Mandatory** (`<p>Text</p>`)                 |
| Attribute Quotes       | **Optional** (`width=100`)               | **Required** (`width="100"`)                  |
| Attribute Minimization | **Allowed** (`<input checked>`)          | **Not Allowed** (`<input checked="checked">`) |
| Nesting Rules          | **Lenient**                              | **Strictly follows [[XML]] rules**                |
| Doctype Declaration    | **Multiple formats**                     | **Strict doctype required**                   |
