---
tags:
  - dnd
  - campaign
type: campaign
status: active
campaign_start: 22-05-2026
players: "3"
setting: Medieval Island Archipelago
theme: Exploration, Episodic
---
## Campaign Status
- **Started**: 2026-05-22
- **Players**: 
	- Ian
	- Eirini
	- Connie
- **Sessions Played**: 2
- **Current Level**: 3
- **Status**:  active

## Session Tracking
```dataview
LIST file.link
FROM "DnD/Campaigns/Island Explorers/Sessions"
SORT file.name DESC
```

## NPCs & Allies
```dataview
TABLE role, allegiance
FROM "DnD/Campaigns/Island Explorers/NPCs"
WHERE type = "npc"
SORT file.name
```

## Locations
```dataview
LIST file.link
FROM "DnD/Campaigns/Island Explorers/Locations"
SORT file.name
```

## Encounters Archive
```dataview
TABLE status, level
FROM "DnD/Campaigns/Island Explorers/Encounters"
SORT file.name DESC
```
