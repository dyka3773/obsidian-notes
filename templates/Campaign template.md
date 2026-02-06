---
tags:
  - dnd
  - campaign
type: campaign
status: active
campaign_start: 
players: 
setting: 
theme: 
---

# Campaign: [Campaign Name]

## Overview
[Describe the campaign concept, setting, and main themes]

## Campaign Status
- **Started**: [Date]
- **Players**: [List player names]
- **Sessions Played**: [#]
- **Current Level**: [Level]
- **Status**: [active/ended/paused]

## Main Plot Threads
- [ ] [Main plot hook]
- [ ] [Secondary plot]
- [ ] [Character arc]

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

## Campaign Notes
[Add any ongoing notes, worldbuilding details, or campaign-specific rules here]

## Resources
- [[DnD|Main DnD Hub]]
- [[Shared Resources]]
- [[5e Rules & References]]
