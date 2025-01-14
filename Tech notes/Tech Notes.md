
```dataview
CALENDAR file.ctime
FROM #tech 
```

### Recently Modified Notes

```dataview
TABLE file.mtime as "Last Update", file.folder as "Path", file.cday as "Creation Time"
FROM #tech 
SORT file.mtime DESC
LIMIT 10
```

This is a collection of notes on various technologies that me and some of my friends have worked with. The notes are intended to be a quick reference for ourselves, but we hope they are useful to others as well.

See also the [[Homepage]] for a general view.
