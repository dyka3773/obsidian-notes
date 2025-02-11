---
tags:
  - todo
---

## Tech notes
```dataview
TASK
FROM #todo 
WHERE !completed
GROUP BY file.link
```

## Daily notes
```dataview
TASK
FROM #daily 
WHERE !completed AND !contains(file.path, "templates")
GROUP BY file.link
```

See also [[Unlinked Notes]] and [[empty files]] for possible things to TODO.