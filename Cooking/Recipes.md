---
tags:
  - homepage
---
# Recipes by category
```dataview
TABLE file.tags as Tags
FROM #recipe  
WHERE !contains(file.path, "templates")
```

# Other Recipe metadata

```dataview
CALENDAR file.ctime
FROM #recipe 
```

#### Things left TODO

```dataview
TASK
FROM #recipe 
WHERE !completed AND !contains(file.path, "templates")
GROUP BY file.link
```

### Recently Modified Notes
```dataview
TABLE file.mtime as "Last Update", file.folder as "Path", file.cday as "Creation Time"
FROM #recipe
SORT file.mtime DESC
LIMIT 10
```


See also the [[Homepage]] for a general view.
