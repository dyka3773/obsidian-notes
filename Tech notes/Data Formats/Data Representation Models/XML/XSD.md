---
tags:
  - tech
aliases:
  - XML Schema Definition
  - XML Schema
---
The [[XML]] Schema language is also referred to as [[XML]] Schema Definition (XSD).

The purpose of an XML Schema is to define the legal building blocks of an [[XML]] document:
- the elements and attributes that can appear in a document
- the number of (and order of) child elements
- data types for elements and attributes
- default and fixed values for elements and attributes

## Data types

One of the greatest strength of XML Schemas is the support for data types.
- It is easier to describe allowable document content
- It is easier to validate the correctness of data
- It is easier to define data facets (restrictions on data)
- It is easier to define data patterns (data formats)
- It is easier to convert data between different data types

## Uses [[XML]] Syntax

Another great strength about XML Schemas is that they are written in [[XML]].
- You don't have to learn a new language
- You can use your [[XML]] editor to edit your Schema files
- You can use your [[XML]] parser to parse your Schema files
- You can manipulate your Schema with the XML DOM
- You can transform your Schema with XSLT

XML Schemas are extensible, because they are written in [[XML]].

With an extensible Schema definition you can:
- Reuse your Schema in other Schemas
- Create your own data types derived from the standard types
- Reference multiple schemas in the same document