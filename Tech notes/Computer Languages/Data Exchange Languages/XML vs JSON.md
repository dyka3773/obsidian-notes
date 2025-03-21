---
tags:
  - tech
---

| Feature          | [[XML]]                              | [[JSON]]                                      |
| ---------------- | ------------------------------------ | --------------------------------------------- |
| Readability      | More verbose                         | More concise                                  |
| Human-friendly   | Somewhat                             | Highly readable                               |
| Data Types       | Only text ([[XSD]] needed for types) | Supports numbers, booleans, arrays            |
| Structure        | Hierarchical                         | [[Key-Value Pairs\|Key-value]] (object-based) |
| Parsing Speed    | Slower                               | Faster                                        |
| Metadata Support | Attributes & elements                | Limited metadata                              |
### **Use [[XML]]** when:
- **You need metadata** (attributes).
- **Hierarchical document structures** (e.g., legal documents).
- **Interoperability with legacy systems**.
### **Use [[JSON]]** when:
- **You need fast parsing and lightweight files**.
- **Data exchange in [[API|APIs]]** ([[REST]], [[GraphQL]]).
