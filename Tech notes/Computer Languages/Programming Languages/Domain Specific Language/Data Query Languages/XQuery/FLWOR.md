---
tags:
  - tech
aliases:
  - For–Let–Where–Order by–Return
---
**FLWOR** stands for:  
**For–Let–Where–Order by–Return**

It is a **powerful expression construct used in [[XQuery]]** (and [[XPath]] 2.0+) to **query and transform [[XML]] data**.
Think of it as **the "[[SQL]] for [[XML]]"**, allowing you to iterate, filter, sort, and return complex results from [[XML]] documents.
# Components
| Clause       | Purpose                                                      |
| ------------ | ------------------------------------------------------------ |
| **For**      | Iterates over a sequence of items (similar to [[SQL]]'s `FROM`). |
| **Let**      | Binds a variable to a value or expression.                   |
| **Where**    | Filters items based on a condition.                          |
| **Order by** | Sorts the output (optional).                                 |
| **Return**   | Defines what to output for each item in the final result.    |
> Not all clauses are required, but, at a minimum, **`for`** and **`return`** are used.
# Syntax Example
## [[XML]] Input
```xml
<books>
  <book>
    <title>1984</title>
    <author>George Orwell</author>
    <year>1949</year>
  </book>
  <book>
    <title>Brave New World</title>
    <author>Aldous Huxley</author>
    <year>1932</year>
  </book>
</books>
```
## FLWOR Query ([[XQuery]])
```xquery
for $b in /books/book
where $b/year > 1935
order by $b/title
return <result>{$b/title}</result>
```
### Output
```xml
<result>1984</result>
```
# Use Cases
- Extracting and transforming [[XML]] data.
- Generating new [[XML]] structures from existing ones.
- Filtering and sorting large [[XML]] datasets.
- Querying [[XML]]-based data sources (like configuration files, [[API|APIs]], or [[XML databases]]).
