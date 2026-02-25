---
tags:
  - dnd
  - campaign
  - dashboard
campaign: The Relic Race
status: active
---
# 📊 Campaign Dashboard: [[The Relic Race]]

> **Campaign Start Date**: [Session 1 date]
> **Current Session**: [Number]
> **Campaign Status**: Planning / Active
> **Setting**: Fantasy Medieval Earth (Starting in Thessaloniki, Greece)

---
## Quick Navigation

### 🎯 Core Campaign Info
- [[The Relic Race]] - Post-one-shot setup, stakes, and trajectory
- [[Faction Overview]] - The four powers competing for relics

### 🗺️ World Building
- [[How Magic Works]] - Magic rarity, relics, and power
- [[Magical Academies]] - Hogwarts, Beauxbatons, Durmstrang, and others
- [[Thessaloniki (Hub City)]] - Starting location and current base
- [[Aegean Piracy Overview]] - Pirates, naval powers, and sea dangers

### 🏛️ Relics & Mysteries
- [[Known Relics]] - Confirmed artifacts and their powers
- [[Relic Rumors & Legends]] - Hooks, rumors, and quest seeds

### 🎭 Factions (The Four Powers)
1. [[Northern Power (Macedonian Bloc)]] - Alexander's heirs
2. [[Maritime City-State]] - Naval dominance and trade
3. [[Cult of Vasilis (Remnants)]] - Zealots seeking historical justice
4. [[Scholarly Order]] - Arcane balance keepers

### 👥 Key NPCs
- [[DnD/Campaigns/The Relic Race/NPCs/Dimitris|Dimitris]] - Information broker (from one-shot)
- [[Master Ornn]] - Legendary artificer
- [Add more as encountered]

### 🗺️ Exploration Hooks
- [[Alexander's Lost Records]]
- [[The Uncharted Islands]]
- [[The Lost Fleet]]

---

## Recent Activity

### Last Session Summary
[Brief recap of what happened]

### Active Quests
```dataview
TABLE status, difficulty, reward
FROM "DnD/Campaigns/The Relic Race"
WHERE type = "quest" AND status = "active"
SORT difficulty ASC
```

### Faction Status
```dataview
TABLE disposition, power_level, current_goal
FROM "DnD/Campaigns/The Relic Race/Factions"
WHERE type = "faction"
```

---
## Party Status

### Current Party Composition
- **[Character Name]** - Dwarf Artificer (Ornn's apprentice, traveling to Skouries)
- **[Character Name]** - [Class/Race]
- **[Character Name]** - [Class/Race]
- **[Character Name]** - [Class/Race]

### Current Location
**Thessaloniki, Greece** - City-state hub

### Resources & Assets
- Gold: [Amount]
- Notable Items: [[The Crown of Kings]] (status: [with party / hidden / destroyed])
- Reputation: [Faction standings]

---
## Campaign Resources

### Tools & References
- **Unearthed Arcana**: Ships & Naval Combat
- **Published Material**: Mythic Odysseys of Theros (inspiration only)
- **One-Shot Foundation**: [[Campaign - The Relic of Alexander]]

### Session Log
```dataview
TABLE session_number, date, summary
FROM "DnD/Campaigns/The Relic Race"
WHERE type = "session"
SORT session_number DESC
LIMIT 5
```

---

**Last Updated**: [Date]
**Next Session**: [Date/Time]