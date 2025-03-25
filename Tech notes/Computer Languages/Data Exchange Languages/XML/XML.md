---
tags:
  - tech
aliases:
  - Extensible Markup Language
---
XML (**Extensible Markup Language**) is a **text-based format** for storing and transporting structured data.
It is widely used for **data interchange, configuration files, [[web services]] ([[SOAP]], [[REST]]), and document representation**.

**Key Features:**
- Human-readable & machine-readable
- Self-descriptive (tags define structure, not format)
- Hierarchical data representation (like a tree)
- Platform-independent
- Supports Unicode (multiple languages)

**Example of an XML Document**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<library>
    <book id="1">
        <title>XML Fundamentals</title>
        <author>John Doe</author>
        <year>2024</year>
    </book>
    <book id="2">
        <title>Advanced XML</title>
        <author>Jane Smith</author>
        <year>2023</year>
    </book>
</library>
```
> **Explanation:**
> - `<library>` is the root element.
> - `<book>` elements contain sub-elements `<title>`, `<author>`, and `<year>`.
> - The `id` attribute in `<book>` uniquely identifies each book.

# XML Structure & Syntax Rules
- XML Declaration (optional): Defines XML version and encoding.
```xml
<?xml version="1.0" encoding="UTF-8"?>
```
- Root Element: Every XML document has a single root element.
- Proper Nesting: Elements must be properly closed and nested.
- Case Sensitivity: `<Title>` and `<title>` are different.
- Attributes: Provide additional metadata, always enclosed in quotes.

# XML Technologies & Related Concepts
## [[XSD]] ([[XSD|XML Schema Definition]])
Defines **rules** for XML structure (data types, constraints).
```xml
<xs:element name="price" type="xs:decimal"/>
```
## [[DTD]] ([[DTD|Document Type Definition]])
Older method for defining XML structure.
```xml
<!ELEMENT book (title, author, year)>
<!ELEMENT title (#PCDATA)>
```
## [[XPath]]
Query language for selecting parts of an XML document.
```xpath
/library/book/title
```
> **Returns:** All `<title>` elements in `<library>`.
## [[XSLT]] ([[XSLT|Extensible Stylesheet Language Transformations]])
Transforms XML into other formats (e.g., [[HTML]], [[CSV]]).
```xml
<xsl:template match="/">
    <html><body>
        <xsl:value-of select="library/book/title"/>
    </body></html>
</xsl:template>
```
## XML Parsers
- **DOM Parser**: Loads entire XML into memory.
- **SAX Parser**: Reads XML sequentially (efficient for large files).

# Where is XML Used?
- **[[Web Services]]**: [[SOAP]] [[API|APIs]], [[REST|RESTful]] responses (`application/xml`).
- **Configuration Files**: [[Android]] `AndroidManifest.xml`, [[Spring]] `applicationContext.xml`.
- **Data Storage & Exchange**: Microsoft Office files (`.docx`, `.xlsx` are XML-based).
- **[[Databases]]**: **[[XML Databases]]** like BaseX, MarkLogic.
