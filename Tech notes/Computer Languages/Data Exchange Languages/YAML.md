---
tags:
  - tech
---
YAML is a human-readable data serialization language.
It is commonly used for configuration files and in applications where data is being stored or transmitted.
YAML targets many of the same communications applications as [[XML|Extensible Markup Language]] ([[XML]]) but has a minimal syntax that intentionally differs from Standard Generalized Markup Language ([[SGML]]).
It uses [[Python]]-style indentation to indicate nesting and does not require quotes around most string values (it also supports [[JSON]] style `[...]` and `{...}` mixed in the same file).

Custom data types are allowed, but YAML natively encodes scalars (such as strings, integers, and floats), lists, and associative arrays (also known as maps, dictionaries or hashes).

The official recommended filename extension for YAML files has been `.yaml` since 2006,  but `.yml` is also used.
In 2024, the [[MIME type]] `application/yaml` has been finalized.

## Syntax
- Whitespace indentation is used for denoting structure; however, tab characters are not allowed as part of that indentation
- Comments begin with the number sign (`#`), can start anywhere on a line and continue until the end of the line. Comments must be separated from other tokens by whitespace characters. If `#` characters appear inside of a string, then they are number sign (`#`) literals.
- List members are denoted by a leading hyphen (`-`) with one member per line.
	- A list can also be specified by enclosing text in square brackets (`[...]`) with each entry separated by a comma.
- An associative array entry is represented using colon space in the form key: value with one entry per line. YAML requires the colon be followed by a space so that url-style strings like http://www.wikipedia.org can be represented without needing to be enclosed in quotes.
- Strings (one type of scalar in YAML) are ordinarily unquoted, but may be enclosed in double-quotes (`"`), or single-quotes (`'`).
- Multiple documents within a single stream are separated by three hyphens (`---`).
- Repeated nodes are initially denoted by an ampersand (`&`) and thereafter referenced with an asterisk (`*`).
