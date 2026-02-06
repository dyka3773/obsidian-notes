---
tags:
  - dnd
  - index
---

# DnD Campaigns

Track all your D&D campaigns here. Each campaign has its own folder with sessions, NPCs, locations, and encounters.

## Active Campaigns
```dataview
TABLE status, players, campaign_start
FROM "DnD/Campaigns"
WHERE type = "campaign" AND status = "active"
SORT file.name
```

## All Campaigns
```dataview
TABLE status, campaign_start, players
FROM "DnD/Campaigns"
WHERE type = "campaign"
SORT file.name
```

## Quick Create
Use these templates when starting a new campaign:
- **Campaign Template**: For campaign setup and dashboard
- **Session Template**: After each session to record what happened
- **NPC Template**: For important characters
- **Encounter Template**: Combat, social, exploration encounters
- **Location Template**: Towns, dungeons, important places
- **Loot Template**: Magic items and special treasure

## Campaign Structure
Each campaign folder contains:
- **Campaign.md** - Campaign overview and dashboard
- **Sessions/** - Session notes (what happened each session)
- **NPCs/** - Important characters and creatures
- **Encounters/** - Encounters used (combat, social, exploration)
- **Locations/** - Places the party has visited
- **Loot & Rewards/** - Magic items and treasure

## Tips for New DMs
1. Use **Session templates** to record what actually happened - future you will thank you
2. **NPC templates** help you remember personality quirks and details between sessions
3. Link encounters, NPCs, and locations together for easy reference
4. Check **5e Rules & References** for mechanics questions
5. Build a monster library as you go (copy stat blocks to Shared Resources/Monsters)

---
See also: [[DnD|Main DnD Hub]] | [[Shared Resources]]
