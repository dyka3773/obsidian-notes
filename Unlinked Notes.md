#### Table View

```dataview
TABLE rows.OUT AS Unresolved
FLATTEN file.outlinks AS OUT
WHERE !OUT.file AND !(contains(meta(OUT).path, "/"))
GROUP BY file.link AS Source
```

### List View grouped by file containing the unlinked notes
```dataview
LIST rows.OUT
FLATTEN file.outlinks AS OUT
WHERE !OUT.file AND !(contains(meta(OUT).path, "/"))
GROUP BY file.link AS Source
```

#### Alternative Dataview without duplicates that requires DataviewJS

```dataviewjs
const unresolvedLinks = Object.entries(dv.app.metadataCache.unresolvedLinks)
      .filter(([origin, unresolved]) =>
              Object.keys(unresolved).length)

console.log(unresolvedLinks)
dv.table(["Origin file", "Notes left to create"],
         dv.array(unresolvedLinks)
           .map(item =>
                [dv.fileLink(item[0]),
                 Object.keys(item[1])]))
            
```
