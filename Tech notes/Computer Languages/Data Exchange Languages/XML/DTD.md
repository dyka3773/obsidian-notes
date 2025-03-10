---
tags:
  - tech
aliases:
  - Document Type Definition
---
A **Document Type Definition (DTD)** is a set of rules that defines the structure, elements, attributes, and data types of an **[[SGML]]** or **[[XML]]** document. 
It ensures that a document follows a consistent structure by specifying **what elements are allowed, their relationships, and the type of content they can contain**.

# Syntax and Structure
A DTD consists of **declarations** that define elements, attributes, and entities.
## Defining Elements
Elements are the building blocks of a document.
```DTD
<!ELEMENT book (title, author, chapter+)>  
<!ELEMENT title (#PCDATA)>  
<!ELEMENT author (#PCDATA)>  
<!ELEMENT chapter (#PCDATA)>  
```
- `<!ELEMENT>` defines an **element**.
- `#PCDATA` (Parsed Character Data) means the element contains **text**.
- `chapter+` means **one or more** `<chapter>` elements are required.
## Defining Attributes
Attributes provide **additional information** about elements.
```dtd
<!ELEMENT book (title, author)>  
<!ATTLIST book id ID #REQUIRED>
```
- The `id` attribute must be **unique** (`ID` type) and is **required** (`#REQUIRED`).
## Internal vs. External DTDs
### Internal DTD (Defined inside the [[XML]] document):
```xml
<?xml version="1.0"?>
<!DOCTYPE book [
    <!ELEMENT book (title, author)>
    <!ELEMENT title (#PCDATA)>
    <!ELEMENT author (#PCDATA)>
]>
<book>
    <title>XML Basics</title>
    <author>John Doe</author>
</book>
```
### External DTD (Referenced from an external file)
```xml
<!DOCTYPE book SYSTEM "book.dtd">
<book>
    <title>XML Basics</title>
    <author>John Doe</author>
</book>
```
The DTD file (`book.dtd`) contains:
```dtd
<!ELEMENT book (title, author)>
<!ELEMENT title (#PCDATA)>
<!ELEMENT author (#PCDATA)>
```
This keeps the document **clean** and allows multiple files to share the same DTD.

# Use Cases
- **Early Web Development**: Used in early **[[HTML]] ([[SGML]]-based)** document validation.
- **[[XML]] Document Validation**: Ensures **well-structured** [[XML]] documents.
- **Data Exchange**: Standardizes data structure for **[[databases]] and [[API|APIs]]**.

# Limitations
- **Limited Data Type Support**: Only supports basic text structures.
- **No Namespace Support**: Cannot work well with **multiple [[XML]] vocabularies**.
- **Less Readable than [[XSD]]**: [[XSD]] is **more expressive and flexible**.
- **Outdated for Modern [[XML]] Processing**: [[XSD]] and [[JSON Schema]] are more common today.
