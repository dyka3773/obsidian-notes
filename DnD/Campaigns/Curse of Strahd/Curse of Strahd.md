---
tags:
  - dnd
  - campaign
  - overview
type: campaign
status: active
campaign_start:
players:
setting:
theme:
---
## Session Tracking
```dataview
LIST file.link
FROM "DnD/Campaigns/[Campaign Name]/Sessions"
SORT file.name DESC
```

## NPCs & Allies
```dataview
TABLE role, allegiance
FROM "DnD/Campaigns/[Campaign Name]/NPCs"
WHERE type = "npc"
SORT file.name
```

## Locations
```dataview
LIST file.link
FROM "DnD/Campaigns/[Campaign Name]/Locations"
SORT file.name
```

## Encounters Archive
```dataview
TABLE status, level
FROM "DnD/Campaigns/[Campaign Name]/Encounters"
SORT file.name DESC
```


## Resources
- [[DnD|Main DnD Hub]]
- [[Shared Resources]]
