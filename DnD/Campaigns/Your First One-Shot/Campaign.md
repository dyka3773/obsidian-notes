---
tags:
  - dnd
  - campaign
type: campaign
status: planning
campaign_start: 
players: 
setting: 
theme: 
---

# Campaign: Your First One-Shot

## Overview
This is your starter one-shot campaign template. Replace this with your actual one-shot concept!

## Campaign Status
- **Started**: [Date]
- **Players**: [List player names]
- **Sessions Played**: 0
- **Current Level**: [Level]
- **Status**: planning

## Main Plot Hook
- [ ] [What's the adventure about?]
- [ ] [Why do the players care?]
- [ ] [What's the resolution?]

## The Concept
Replace this with your one-shot idea. Some ideas:
- Investigating a mysterious occurrence
- Escaping from a dangerous situation
- Rescuing someone
- Exploring a dungeon
- Solving a crime
- Political intrigue

## Session Tracking
```dataview
LIST file.link
FROM "DnD/Campaigns/Your First One-Shot/Sessions"
SORT file.name DESC
```

## NPCs & Allies
```dataview
TABLE role, allegiance
FROM "DnD/Campaigns/Your First One-Shot/NPCs"
WHERE type = "npc"
SORT file.name
```

## Locations
```dataview
LIST file.link
FROM "DnD/Campaigns/Your First One-Shot/Locations"
SORT file.name
```

## Encounters Archive
```dataview
TABLE status, level
FROM "DnD/Campaigns/Your First One-Shot/Encounters"
SORT file.name DESC
```

## How to Start
1. **Rename this campaign**: Replace "Your First One-Shot" with your actual adventure name
2. **Flesh out the concept**: What's the hook? Where does it take place?
3. **Create NPCs**: Who will the players meet? Use the NPC template
4. **Plan encounters**: Create 2-3 encounters using the Encounter template
5. **Create locations**: Describe places the party will visit
6. **Run the session**: Fill out a Session note afterward
7. **Create more campaigns**: Duplicate this folder structure

## Session Prep Checklist
- [ ] Create all NPCs
- [ ] Plan all encounters
- [ ] Create all locations
- [ ] Prepare stat blocks (add to Shared Resources/Monsters)
- [ ] Plan the session flow
- [ ] Prepare any handouts
- [ ] Test your dataview queries work

## Resources
- [[DnD|Main DnD Hub]]
- [[Campaign Index]]
- [[Shared Resources]]
- [[5e Rules & References]]

## Tips for One-Shots
- Keep it focused: one main plot thread
- Plan for 4-6 hours of play
- Have 2-3 encounters
- Create memorable NPCs
- Don't over-prepare encounters (players will surprise you!)
- Focus on fun rather than perfect balance
