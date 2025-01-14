---
tags:
  - homepage
---

```dataview
CALENDAR file.ctime
FROM #tag 
```

### Recently Modified Notes
```dataview
TABLE file.mtime as "Last Update", file.folder as "Path", file.cday as "Creation Time"
FROM #tag
SORT file.mtime DESC
LIMIT 10
```


See also the [[Homepage]] for a general view.
