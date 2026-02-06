---
tags:
  - dnd
  - homepage
---

```dataview
CALENDAR file.ctime
FROM #dnd 
```

#### Things left TODO

```dataview
TASK
FROM #dnd 
WHERE !completed AND !contains(file.path, "templates")
GROUP BY file.link
```


### Recently Modified Notes

```dataview
TABLE file.mtime as "Last Update", file.folder as "Path", file.cday as "Creation Time"
FROM #dnd 
SORT file.mtime DESC
LIMIT 10
```


See also the [[Homepage]] for a general view.
