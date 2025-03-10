---
tags:
  - tech
---
**JSON Schema** is a **structured format** used to define, validate, and enforce rules on [[JSON]] data.
It provides a **clear, machine-readable specification** for the expected structure, data types, and constraints of a [[JSON]] object.

JSON Schema is widely used for **[[API]] validation, configuration files, and data exchange formats**.
It ensures that [[JSON]] documents conform to a predefined structure, reducing errors in data communication.

# Features
- **Validates [[JSON]] Data**: Ensures that [[JSON]] data follows the expected format.
- **Supports Data Types**: Defines data types like `string`, `number`, `boolean`, `array`, `object`, etc.
- **Flexible & Extensible**: Supports complex validation rules, pattern matching, and custom constraints.
- **Human & Machine Readable**: Uses [[JSON]] itself as the schema format.
- **Widely Adopted**: Used in **[[REST]] [[API|APIs]], [[OpenAPI]] ([[OpenAPI|Swagger]]), [[GraphQL]], and [[databases]]**.

# JSON Schema Structure & Syntax
A **JSON Schema** is a [[JSON]] object that defines rules for validating other [[JSON]] objects.
## Basic JSON Schema Example
```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "title": "User",
  "type": "object",
  "properties": {
    "name": {
      "type": "string"
    },
    "age": {
      "type": "integer",
      "minimum": 18
    },
    "email": {
      "type": "string",
      "format": "email"
    }
  },
  "required": ["name", "email"]
}
```
- `$schema`: Defines the **JSON Schema version**.
- `type`: Specifies the **data type** (`object`, `array`, `string`, etc.).
- `properties`: Defines **allowed fields** and their data types.
- `required`: Lists **mandatory fields**.
- `minimum`: Sets **minimum value** for numeric fields.
- `format`: Specifies **format validation** (e.g., `email`, `date-time`, `uri`).

# Data Types & Constraints
## Basic Data Types
| **Data Type** | **Example**           |
| ------------- | --------------------- |
| `string`      | `"hello"`             |
| `integer`     | `25`                  |
| `number`      | `99.99`               |
| `boolean`     | `true`                |
| `array`       | `["apple", "banana"]` |
| `object`      | `{"key": "value"}`    |
| `null`        | `null`                |

## Constraints & Validation Rules
| Constraint                | Description                         | Example                               |
| ------------------------- | ----------------------------------- | ------------------------------------- |
| `minimum` / `maximum`     | Sets min/max values for numbers     | `"minimum": 18`                       |
| `minLength` / `maxLength` | Restricts string length             | `"minLength": 3`                      |
| `pattern`                 | Regex pattern for strings           | `"pattern": "\^\[A-Z]"`               |
| `enum`                    | Limits values to predefined options | `"enum":\["male", "female", "other"]` |
| `uniqueItems`             | Ensures array items are unique      | `"uniqueItems": true`                 |

## Example Array Validation
```json
{
  "type": "array",
  "items": {
    "type": "string"
  },
  "minItems": 1,
  "uniqueItems": true
}
```
- Ensures **array contains only strings**, at least **one item**, and **no duplicates**.
