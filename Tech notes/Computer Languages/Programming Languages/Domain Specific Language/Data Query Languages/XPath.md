---
tags:
  - tech
aliases:
  - XML Path Language
---
XPath (XML Path Language) is a **query language** used to navigate and extract data from [[XML]] documents.
It allows developers to select elements, attributes, and values within an [[XML]] structure using **path expressions**.

#### Example [[XML]]:
```xml
<books>
    <book>
        <title>Learning XPath</title>
        <author>John Doe</author>
        <price>29.99</price>
    </book>
    <book>
        <title>Mastering XML</title>
        <author>Jane Smith</author>
        <price>39.99</price>
    </book>
</books>
```
#### Example XPath Query:
```xpath
(: Find all book titles :)
/books/book/title
```
> Result
```xml
<title>Learning XPath</title>
<title>Mastering XML</title>
```
# Why Use It?
- **Extract specific data** from [[XML]] documents.
- **Navigate [[XML]] trees** efficiently.
- Used in [[XSLT]], [[XQuery]], and [[Selenium]] for web automation.
- **Supports complex queries** with conditions and functions.
# Syntax & Expressions
## Basic Syntax
| Expression | Description            | Example                       |
| ---------- | ---------------------- | ----------------------------- |
| `/`        | Root node              | `/books`                      |
| `//`       | Selects nodes anywhere | `//title` (all titles)        |
| `.`        | Current node           | `.` (self-reference)          |
| `..`       | Parent node            | `../author` (parent’s author) |
| `@`        | Attribute selection    | `//@id` (all `id` attributes) |
## Predicates (Conditions in `[]`)
| Expression | Description                        | Example                          |
| ---------- | ---------------------------------- | -------------------------------- |
| `[index]`  | Selects element by index (1-based) | `/books/book[1]` (first book)    |
| `[text()]` | Filters by text content            | `//book[title='Learning XPath']` |
| `[@attr]`  | Filters by attribute               | `//book[@price='29.99']`         |
# Advanced XPath Functions
## String and Math functions

| Function            | Description                             | Example                                  |
| ------------------- | --------------------------------------- | ---------------------------------------- |
| `contains()`        | Checks if a string contains a substring | `//book[contains(title, 'XML')]`         |
| `starts-with()`     | Checks string prefix                    | `//book[starts-with(title, 'Learning')]` |
| `normalize-space()` | Removes extra spaces                    | `normalize-space(//title)`               |
| `sum()`             | Sums numeric values                     | `sum(//book/price)`                      |
| `count()`           | Counts nodes                            | `count(//book)`                          |
## Logical Operators
| Operator | Description                         | Example                              |
| -------- | ----------------------------------- | ------------------------------------ |
| `and`    | Both conditions must be true        | `//book[price>30 and price<40]`      |
| `or`     | At least one condition must be true | `//book[price=29.99 or price=39.99]` |
# Real-World Application Examples

## Web Scraping (Using [[Selenium]] in [[Python]])
```python
from selenium import webdriver

driver = webdriver.Chrome()
driver.get("https://example.com")

# Find element using XPath
element = driver.find_element("xpath", "//h1")
print(element.text)

driver.quit()
```
## [[XSLT]] (Transforming [[XML]] with XPath)
```xml
<xsl:for-each select="//book">
    <xsl:value-of select="title"/>
</xsl:for-each>
```
## [[API]] Responses (Parsing [[XML]] in [[Python]])
```python
import xml.etree.ElementTree as ET

xml_data = '''<books><book><title>Learning XPath</title></book></books>'''
tree = ET.fromstring(xml_data)

# XPath-like selection
titles = tree.findall(".//title")
for title in titles:
    print(title.text)
```
