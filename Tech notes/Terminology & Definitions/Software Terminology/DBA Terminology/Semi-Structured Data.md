---
tags:
  - tech
---
**Semi-structured data** is a type of data that **doesn't conform to the strict structure of [[relational databases]]** (tables, rows, columns) but still has **some organizational properties**, like tags or markers, to separate data elements and enforce hierarchies.
It sits **between structured data ([[SQL]])** and **[[unstructured data]] (raw text, images)**, offering more flexibility while retaining enough metadata for parsing and querying.

# Characteristics
- **Flexible schema**: The structure may vary from record to record.
- **Self-describing**: Contains metadata along with the data (e.g., tags, attributes).
- **Hierarchical or nested**: Often organized in tree-like structures.
- **Easily parse-able**: Can be interpreted by software without rigid [[Databases|database]] schemas.
# Common Formats
| Format                                              | Description                                                             |
| --------------------------------------------------- | ----------------------------------------------------------------------- |
| **[[JSON]] ([[JSON\|JavaScript Object Notation]])** | Lightweight format with nested [[key-value pairs]].                     |
| **[[XML]] ([[XML\|eXtensible Markup Language]])**   | Tagged, hierarchical format, widely used in web and enterprise systems. |
| **[[YAML]]**                                        | Human-readable data serialization format.                               |
| **[[CSV]] with embedded metadata**                  | Some CSVs may include headers and delimiter info.                       |
| **[[NoSQL Databases\|NoSQL]] documents**            | [[MongoDB]] documents or [[Couchbase]] entries with flexible fields.    |
| **Email**                                           | Contains structured headers and unstructured message body.              |
| **Log files**                                       | Often follow a pattern but can vary in structure.                       |
# Advantages
- **Schema flexibility**: Easily adapt to changes in data requirements.
- **[[Scalability|Scalable]]**: Ideal for big data and [[NoSQL Databases|NoSQL]] systems.
- **Human-readable**: [[JSON]], [[XML]], [[YAML]] are easily understood and edited.
- **Rich metadata**: Tags and keys make data machine-parseable.
# Challenges and Considerations
- **Parsing complexity**: Requires specialized tools for querying and validation.
- **Data quality**: Inconsistencies may arise due to lack of strict schema.
- **Indexing**: Harder to index than structured data, which affects query performance.
- **Storage efficiency**: Can be verbose compared to binary formats.
# Storage Systems Supporting Semi-Structured Data
| Storage Type                                                 | Example Technologies                    |
| ------------------------------------------------------------ | --------------------------------------- |
| **[[NoSQL Databases\|Document DBs]]**                        | [[MongoDB]], [[CouchDB]], [[Couchbase]] |
| **Columnar DBs**                                             | [[Apache Cassandra]], [[HBase]]         |
| **[[Relational Databases\|Relational DBs]] with extensions** | [[PostgreSQL]] (JSONB/XML), [[MySQL]]   |
| **File-based systems**                                       | Hadoop [[HDFS]], [[Amazon S3]]          |
