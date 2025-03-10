---
tags:
  - tech
aliases:
  - regex
---
A **Regular Expression (Regex)** is a sequence of characters that defines a search pattern. 
It is commonly used for:
- **Pattern Matching**: Searching for text patterns.
- **Text Validation**: Validating email addresses, phone numbers, etc.
- **Text Manipulation**: Replacing, extracting, or modifying text.
Regex is widely supported in **programming languages** like **[[JavaScript]], [[Python]], [[Java]], [[C++]], and [[Perl]]**.

# Basic Syntax
## Literal Characters
A basic regex matches exact text:
```regex
hello
```
> Matches `"hello"` in `"hello world"` but not `"Hello"` (case-sensitive).

## Special Characters (Meta-Characters)
| Symbol  | Meaning                      | Example   | Matches                                 |
| ------- | ---------------------------- | --------- | --------------------------------------- |
| `.`     | Any character except newline | `c.t`     | `"cat"`, `"cut"`                        |
| `^`     | Start of string              | `^hello`  | `"hello world"` but not `"world hello"` |
| `$`     | End of string                | `world$`  | `"hello world"` but not `"world hello"` |
| `*`     | 0 or more repetitions        | `go*`     | `"g"`, `"go"`, `"goo"`, `"gooo"`        |
| `+`     | 1 or more repetitions        | `go+`     | `"go"`, `"goo"`, `"gooo"` but not `"g"` |
| `?`     | 0 or 1 occurrence (optional) | `colou?r` | `"color"`, `"colour"`                   |
| `{n}`   | Exactly n occurrences        | `a{3}`    | `"aaa"` but not `"aa"`                  |
| `{n,}`  | At least n occurrences       | `a{2,}`   | `"aa"`, `"aaa"`, `"aaaa"`               |
| `{n,m}` | Between n and m occurrences  | `a{2,4}`  | `"aa"`, `"aaa"`, `"aaaa"` but not `"a"` |
| `\`     | Escape special character     | `\.`      | Matches `.` literally                   |
## Character Classes (Character Sets)
| Pattern    | Matches                     |
| ---------- | --------------------------- |
| `[aeiou]`  | Any vowel                   |
| `[0-9]`    | Any digit (same as `\d`)    |
| `[a-zA-Z]` | Any letter (case-sensitive) |
| `[^0-9]`   | Any non-digit               |

## Predefined Character Classes (Shortcuts)
| Symbol | Equivalent to            | Example | Matches                     |
| ------ | ------------------------ | ------- | --------------------------- |
| `\d`   | `[0-9]`                  | `\d{3}` | `"123"`, `"456"`            |
| `\D`   | `[^0-9]`                 | `\D+`   | `"abc"`, `"hello"`          |
| `\w`   | `[a-zA-Z0-9_]`           | `\w+`   | `"word"`, `"var123"`        |
| `\W`   | `[^a-zA-Z0-9_]`          | `\W+`   | `"#$%"`, `"@!&"`            |
| `\s`   | `[ \t\r\n]` (whitespace) | `\s+`   | `" "` (space), `"\t"` (tab) |
| `\S`   | `[^ \t\r\n]`             | `\S+`   | `"hello"` (not whitespace)  |

## Grouping and Alternation
### Parentheses `()`: Grouping & Capturing
```regex
(banana)+
```
> Matches `"banana"`, `"bananabanana"`.

### Alternation `|`: OR Operator
```regex
apple|banana
```
> Matches `"apple"` or `"banana"`.

# Common Patterns
| Use Case              | Regex Pattern           | Example Match      |
| --------------------- | ----------------------- | ------------------ |
| **Email Validation**  | `^\w+@\w+\.\w{2,3}$`    | `user@example.com` |
| **Phone Number**      | `\d{3}-\d{3}-\d{4}`     | `123-456-7890`     |
| **Date (YYYY-MM-DD)** | `\d{4}-\d{2}-\d{2}`     | `2023-03-05`       |
| **IPv4 Address**      | `\d{1,3}(\.\d{1,3}){3}` | `192.168.1.1`      |

# Performance Considerations
- **Use non-greedy quantifiers** (`*?`, `+?`) to improve efficiency.
- **Precompile regex** if used repeatedly (e.g., `Pattern.compile()` in [[Java]]).
- **Avoid catastrophic backtracking** by keeping patterns optimized.
