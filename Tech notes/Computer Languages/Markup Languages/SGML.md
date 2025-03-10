---
tags:
  - tech
aliases:
  - Standard Generalized Markup Language
---
**SGML (Standard Generalized Markup Language)** is a **meta-language** used to define markup languages. 
It provides a **standardized way to structure and annotate documents** using custom markup tags and serves as the foundation for **[[HTML]] and [[XML]]**.

Unlike specific markup languages (such as [[HTML]]), SGML **does not dictate a specific set of tags** but instead allows users to define their own document structure and elements.

## How it works
### A. Defining a Document Type ([[DTD]] - [[DTD|Document Type Definition]])
SGML documents rely on a [[DTD]] ([[DTD|Document Type Definition]]) to specify the allowed tags, attributes, and document structure.

Example of an SGML [[DTD]]:
```dtd
<!ELEMENT book (title, author, chapter+)>
<!ELEMENT title (#PCDATA)>
<!ELEMENT author (#PCDATA)>
<!ELEMENT chapter (#PCDATA)>
```
- `<!ELEMENT>` defines **allowed elements** in a document.
- `#PCDATA` represents **parsed character data** (text content).

### B. Writing an SGML Document
A document based on the above **[[DTD]]** would look like:
```SGML
<!DOCTYPE book SYSTEM "book.dtd">
<book>
    <title>Introduction to SGML</title>
    <author>John Doe</author>
    <chapter>Understanding SGML</chapter>
    <chapter>SGML vs XML</chapter>
</book>
```
- The `<!DOCTYPE>` declaration specifies the **[[DTD]] reference**.
- The `<book>` tag follows the structure defined in the **[[DTD]]**.
