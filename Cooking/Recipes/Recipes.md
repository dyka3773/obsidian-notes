---
tags:
  - homepage
---

# Recipes by category (tag)
```dataview
TABLE WITHOUT ID (tag + "(" + length(rows.file.link) + ")") AS Tags, (rows.file.link) AS Files
FROM #recipe 
WHERE !contains(file.path, "templates")
FLATTEN file.tags AS tag 
GROUP BY tag 
SORT length(rows.file.link) DESC
```

# Other Recipe metadata

```dataview
CALENDAR file.ctime
FROM #recipe 
```

### Recently Modified Notes
```dataview
TABLE file.mtime as "Last Update", file.folder as "Path", file.cday as "Creation Time"
FROM #recipe
SORT file.mtime DESC
LIMIT 10
```


See also the [[Homepage]] for a general view.
