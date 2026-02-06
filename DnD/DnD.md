---
tags:
  - dnd
  - homepage
---

```dataview
CALENDAR file.ctime
FROM #dnd 
```

#### Quick Navigation
- **[[Campaign Index]]** - View all campaigns and create new ones
- **[[Shared Resources]]** - Rules, monsters, magic items shared across campaigns
- **[[Decks]]** - Your existing decks folder

#### Things left TODO

```dataview
TASK
FROM #dnd 
WHERE !completed AND !contains(file.path, "templates")
GROUP BY file.link
```


### Recently Modified Notes

```dataview
TABLE file.mtime as "Last Update", file.folder as "Path"
FROM #dnd 
WHERE !contains(file.path, "templates")
SORT file.mtime DESC
LIMIT 5
```

## Your Workspace Structure
- **Campaigns/** - Each campaign gets its own folder with sessions, NPCs, encounters, locations
- **Shared Resources/** - Rules, monsters, and items shared across all campaigns
- **Decks/** - Your existing decks folder

## Getting Started
1. Go to **[[Campaign Index]]** to start a new campaign
2. Create a campaign folder and use the Campaign template
3. Create Sessions, NPCs, Encounters, Locations folders inside
4. Record each session using the Session template
5. Check **[[Shared Resources]]** for 5e rules and monster stat blocks

See also the [[Homepage]] for a general view.
