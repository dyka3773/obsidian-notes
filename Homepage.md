## Notes Created

```dataview
CALENDAR file.ctime
```

```dataview
TABLE file.mtime as "Last Update", file.folder as "Path", file.cday as "Creation Time"
SORT file.mtime DESC
LIMIT 10
```

## Notes left to create

```dataview
LIST rows.OUT
FLATTEN file.outlinks AS OUT
WHERE !OUT.file AND !(contains(meta(OUT).path, "/"))
GROUP BY file.link AS Source
```
See more info on [[Unfinished Notes]].
