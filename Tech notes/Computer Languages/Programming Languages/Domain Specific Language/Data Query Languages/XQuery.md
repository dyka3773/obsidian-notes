---
tags:
  - tech
aliases:
  - XML Query Language
---
XQuery (XML Query Language) is a powerful query language designed to extract, transform, and manipulate [[XML]] data.
It is similar to [[SQL]] but works specifically with [[XML]], allowing structured and efficient querying of [[XML]] documents, [[databases]], and [[web services]].

**Key Features:**
- **Extracts & filters [[XML]] data** like [[SQL]] does for [[relational databases]].
- **Supports [[XPath]]** expressions for navigation.
- **Performs transformations** similar to [[XSLT]].
- **Handles structured & [[semi-structured data]]** efficiently.
- **Works with [[XML Databases]]** such as BaseX, eXistDB, and MarkLogic.
# Elements & Syntax
| **XQuery Feature**        | **Description**                                      | **Example**                                                             |
| ------------------------- | ---------------------------------------------------- | ----------------------------------------------------------------------- |
| **[[FLWOR]] Expression**  | For-Loop, Let, Where, Order, Return (similar to [[SQL]]) | `for $b in /bookstore/book return $b/title`                             |
| **[[XPath]] Support**         | Selects nodes from [[XML]]                               | `/bookstore/book/title`                                                 |
| **Conditional Filtering** | Filters data based on conditions                     | `where $b/price > 30`                                                   |
| **Sorting (`order by`)**  | Orders data by a field                               | `order by $b/title ascending`                                           |
| **Aggregation**           | Computes sum, count, avg, min, max                   | `sum(/bookstore/book/price)`                                            |
| **Constructing Output**   | Generates custom [[XML]]/[[HTML]] from queries               | `<html>{ for $b in /bookstore/book return <li>{$b/title}</li> }</html>` |
