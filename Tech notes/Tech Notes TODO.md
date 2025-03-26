---
tags:
  - tech
  - todo
---

- [ ] [[Camunda]]
- [ ] [[Flask]]
- [ ] [[ASGI]]
- [ ] [[struts]]

## Unlinked mentions in each file

> See also [[Unlinked Notes]] for all possible unlinked notes and different ways to view them.
```dataview
LIST rows.OUT
FROM #tech 
FLATTEN file.outlinks AS OUT
WHERE !OUT.file AND !(contains(meta(OUT).path, "/"))
GROUP BY file.link AS Source
```

