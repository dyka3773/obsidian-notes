---
tags:
  - dnd
  - campaign
type: campaign
status: planning
campaign_start:
players:
setting: Thessaloniki, Ancient Catacombs
theme: Heroic Mystery/Heist with Plot Twist
aliases:
  - The Relic of Alexander
---

# Campaign: The Relic of Alexander

## Overview
A cult leader disguises themselves as a benevolent religious figure, manipulating the party into stealing an ancient artifact from a hidden guardian. The twist: they're trying to resurrect Alexander's greatest enemy to enslave the world. The party must uncover the truth, survive the guardian's wrath, and stop a catastrophic resurrection.

## Campaign Status
- **Started**: [Date]
- **Players**: [List player names]
- **Sessions Played**: 0
- **Current Level**: 1
- **Status**: planning
- **Estimated Length**: 3-4 hours of play (after character creation)

## Main Plot Hook
- Party is hired by a charismatic religious leader to steal an artifact from a "dangerous warlord"
- The truth: The leader is a cultist, the "warlord" is a protector, and the relic can resurrect Darius III
- Party must stop the resurrection and decide the relic's fate

## The Core Story
**The Setup**: A noble religious figure, the High Priest of the Temple of Asclepius, hires adventurers to infiltrate the catacombs beneath Thessaloniki. An ancient relic, [[the Crown of Kings]], is being guarded by a mysterious warrior. The relic, he claims, should be in the temple's vault for safekeeping. It's too dangerous in the hands of one person.

**The Infiltration**: The party sneaks through the catacombs, facing animated stone guardians and the spirits of Alexander's companions. It's challenging but doable for level 1 characters.

**The Guardian**: They meet a warrior who claims to be a descendant of Alexander, sworn to protect the relic. He's hostile and powerful, but negotiable. He reveals the truth: The High Priest is trying to resurrect Darius III, Alexander's greatest enemy.

**The Twist**: If the High Priest gets the relic, he can command armies/reality itself to resurrect Darius III. The guardian has been protecting it for generations. The party must decide: destroy the relic, help the guardian, or find a third path.

### Key NPCs
- **[[NPC: High Priest Vasilis]]** - The villain (disguised as benevolent religious leader)
- **[[NPC: Nikias]]** - Guardian of the relic (Alexander's descendant)
- **[[NPC: The Informant]]** - Quest-giver who brings party to the High Priest

## Key Locations
- **[[Location: Thessaloniki Catacombs]]** - Ancient underground network beneath the city
- **Part 1**: The upper catacombs (burial chambers, exploring)
- **Part 2**: The guardian's domain (stone statues, puzzles)
- **Part 3**: The relic chamber (final guardian battle)

## Encounters
- **Infiltration Encounter**: Sneaking through catacombs with guards patrolling
- **Guardian Battles**: Stone lions, Peritas the ghost hound, the Drakofido
- **Nikias Boss Battle**: The guardian (can be fought or negotiated with)
- **Final Confrontation**: High Priest tries to activate the relic

## The Relic
- **Name**: [[The Crown of Kings]]
- **Power**: Command Armies (mind control/dominance on a large scale)
- **History**: Belonged to Alexander the Great, grants absolute authority
- **Danger**: In the wrong hands, can resurrect Darius III and control his armies

## How to Start
1. **Rename this campaign**: Replace "Your First One-Shot" with your actual adventure name
2. **Flesh out the concept**: What's the hook? Where does it take place?
3. **Create NPCs**: Who will the players meet? Use the [[NPC template]]
4. **Plan encounters**: Create 2-3 encounters using the [[Encounter template]]
5. **Create locations**: Describe places the party will visit
6. **Run the session**: Fill out a Session note afterward
7. **Create more campaigns**: Duplicate this folder structure

## Session Prep Checklist
- [ ] Create all NPCs
- [ ] Plan all encounters
- [ ] Create all locations
- [ ] Prepare stat blocks (add to [[Shared Resources]]/Monsters)
- [ ] Plan the session flow
- [ ] Prepare any handouts
- [ ] Test your dataview queries work

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
