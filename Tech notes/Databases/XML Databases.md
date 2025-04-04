---
tags:
  - tech
aliases:
  - XML Database
---
An **XML database** is a type of **[[Databases|database]] designed to store, query, and manipulate data in [[XML]] format**.
Unlike traditional [[relational databases]] that store data in rows and columns, XML databases treat [[XML]] documents as **first-class citizens**, preserving their tree-like structure.

### Key Characteristics
- Stores data as **hierarchical documents** ([[XML]] trees)
- Supports **[[XPath]] and [[XQuery]]** for querying
- Useful for **semi-structured** or **hierarchically structured** data
- Can be **native** ([[XML]] is stored as-is) or **[[XML]]-enabled** ([[XML]] is stored in relational tables)

# Types of XML Databases
## Native XML Databases
- Store [[XML]] documents directly, preserving their structure
- Querying is optimized for [[XML]] with **[[XQuery]]** or **[[XPath]]**
- Example: **BaseX**, **eXist-db**, **Sedna**
## [[XML]]-Enabled [[Relational Databases]]
- Traditional [[Relational Databases|RDBMS]] with [[XML]] support via columns or data types
- Parse [[XML]] and map it to relational tables or store as [[XML]] strings
- Example: **PostgreSQL (XML type)**, **Oracle XML DB**, **[[SQL Server]]**
# Use Cases
- Applications where data is already in [[XML]] (e.g., configuration, documents, [[SOAP]])
- Metadata repositories or publishing systems
- Storing **scientific**, **technical**, or **legal documents** with deeply nested structures
- Systems that rely on **data interchange formats** ([[XML]], [[XSLT]], etc.)
# Pros and Cons
## Advantages
- Ideal for **document-centric** or **hierarchical data**
- Schema flexibility: no fixed table definitions required
- Rich querying using **[[XPath]]** and **[[XQuery]]**
- Native support for **[[XSLT|XML transformations]]** ([[XSLT]])
## Disadvantages
- Slower than [[Relational Databases|RDBMS]] for flat, [[structured data]]
- Complex [[Database Index|indexing]] and performance tuning
- Limited adoption compared to [[NoSQL Databases|NoSQL]] or [[relational databases]]
