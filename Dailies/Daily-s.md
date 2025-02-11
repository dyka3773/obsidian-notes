---
tags:
  - homepage
---

```dataview
CALENDAR file.ctime
FROM #daily 
```

### Things left TODO

```dataview
TASK
FROM #daily 
WHERE !completed AND !contains(file.path, "templates")
GROUP BY file.link
```

### Recently Modified Notes
```dataview
TABLE file.mtime as "Last Update", file.folder as "Path", file.cday as "Creation Time"
FROM #daily
SORT file.mtime DESC
LIMIT 10
```

See also the [[Homepage]] for a general view.
