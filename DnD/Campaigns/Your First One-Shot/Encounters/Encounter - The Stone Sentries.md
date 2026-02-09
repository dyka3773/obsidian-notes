---
tags:
  - dnd
  - encounter
type: encounter
campaign: The Relic of Alexander
difficulty: Medium
party_level: 1
encounter_type: Combat/Environmental
status: planned
---

# Encounter: The Stone Sentries

An ancient stone lion awakens as the party approaches the mid-level catacombs. This is a combat-focused encounter that introduces the magical guardians and tests the party's combat ability.

## Overview
As the party ventures deeper into the catacombs, they enter a wide chamber lined with stone statues. The moment a creature approaches the relic chamber's passage, the statues animate. A battle ensues against magical constructs.

## Encounter Type
- **Type**: Combat / Environmental
- **Location**: [[Location - Thessaloniki Catacombs]] (mid-level chamber)
- **Difficulty**: Medium (for 4 level 1 PCs)
- **Party Level**: 1
- **Estimated Duration**: 20-25 minutes

## Setup

### Visual Description
> "The chamber opens into a vast hall, almost a cathedral of stone. The walls are lined with elaborate statues, roaring lions in mid-pounce, soldiers with spears raised, warriors in ancient armor. Frescoes on the ceiling depict battles and conquests. The air is cold, and you sense a prickling at the back of your neck.
>
> As your footsteps echo, the nearest lion statue's eyes glow with faint blue light. Stone grinds against stone as it shifts, cracks forming in the floor where it stands. Others begin to stir."

## The Combatants

### Animated Stone Lions (1-2)
These lion constructs are remnants of ancient magic, bound to protect the relic.

```
Name: Animated Stone Lion
Size: Large
Type: Construct
AC: 15 (stone body)
HP: 22 each
Speed: 40 ft.
Abilities: STR 16 (+3) | DEX 10 (+0) | CON 14 (+2)

Traits:
- Immovable: Advantage on saves against being moved
- Fragile: Takes extra 5 damage from thunder/force damage
- Stone Form: Resistance to piercing and slashing damage (from weapons)

Actions:
- Bite: +5 to hit, reach 5 ft., 1d10+3 piercing damage
- Claw: +5 to hit, reach 5 ft., 1d8+3 slashing damage
- Pounce: Can move up to 20 ft. and attack as one action

Legendary Actions (1/turn if reduced to 11 HP or less):
- Move up to half speed
- Attack once
```

```statblock
name: Animated Stone Lion
size: Large
type: Construct
ac: 15 (stone body)
hp: 22 each
speed: 40 ft.
stats: [ 16, 10, 14, 0, 0, 0 ]
traits:
    - name: Immovable
      desc: "Advantage on saves against being moved"
    - name: Fragile
      desc: "Takes extra 5 damage from thunder/force damage"
    - name: Stone Form
      desc: "Resistance to piercing and slashing damage (from weapons)"
actions:
    - name: Bite
      desc: "Melee Weapon Attack: `dice: 1d20+5` to hit, reach 5 ft., one target. Hit: `dice: 1d10+3` piercing damage."
    - name: Claw
      desc: "Melee Weapon Attack: `dice: 1d20+5` to hit, reach 5 ft., one target. Hit: `dice: 1d8+3` slashing damage."
    - name: Pounce
      desc: "Can move up to 20 ft. and attack as one action."
legendary_actions:
    - name: Move
      desc: "Move up to half speed."
    - name: Attack
      desc: "Attack once."
```

### Environmental Hazard: Unstable Floor
In the chamber, several tiles are unstable. When combat begins, they crack and become difficult terrain.

- **DC 12 Acrobatics** to cross without falling
- **Failed save**: Fall 10 feet into a secondary chamber below (takes 1d6 damage)
- Only affects the area near the lion statues (creates tactical complexity)

## Encounter Design

### The Battle Map (Approximate)
```
Party enters from passage →
Chamber opens up (40 ft × 40 ft)
Stone Lions positioned at corners
Pillars provide cover
Unstable tiles in the center
Passage to relic chamber at far end
```

### Map
```
|---20ft----|-10ft-|----20ft----|
|LL       PP         PP       LL|
|LL                           LL|
|         PP         PP         |
|+++++++++++++++++++++++++++++++|
|+++++++++++++++++++++++++++++++|
|         PP         PP         |
| PP                         PP |
|                               |
|___________| 10FT |____________|
```

### Tactical Notes for DM
- **Lion Behavior**: Lions pursue the closest PC initially, then focus on whoever deals the most damage
- **Movement**: Lions can move around pillars; use verticality if possible
- **Difficulty**: 2 lions = Medium difficulty
- **Motivation**: Lions are mindless constructs; they fight to the death

## Combat Flow

### Round 1
- Lions activate and advance
- Party rolls initiative
- Describe the grinding sound of stone, the awakening of ancient constructs

### Rounds 2-3
- Combat escalates
- If party is overwhelmed (multiple PCs below half HP), reduce to 1 lion
- If party dominates, lions might be destroyed early

### Resolution
- When all lions are destroyed, they crumble to rubble
- The passage to the relic chamber opens (statues move aside)
- Party can proceed (but they're likely wounded)

## Alternative: Non-Combat Resolution

If the party wants to avoid combat:

### Knowledge Checks
- **Arcana DC 13**: Recognize these are animated constructs, not alive
- **History DC 12**: Understand these guard something valuable
- **Religion DC 14**: Identify protective magic; know ancient oath might be key

### Peaceful Passage
- **Persuasion DC 14** (with advantage if properly described): "I swear to protect what you guard" (appeal to the oath)
- **Performance DC 13**: Distract lions long enough to sneak past
- **Deception DC 15**: Convince lions you're authorized to pass

**Result**: Lions stand down and allow passage. Party reaches relic chamber with full resources.

## Rewards

### XP
- 2 lions: 100 XP total (25 XP per PC for 4 players)

### Loot
- 10-15 gp in ancient coins (from the rubble)

## Encounter Progression

**Time Budget**: 20-25 minutes
- 2 min: Chamber exploration
- 2 min: Initiative and positioning
- 12-15 min: Combat (2-3 rounds)
- 3-5 min: Resolution and looting

## DM Notes
- This encounter is meant to be the "real fight" of the one-shot
- Let the party experience combat mechanics (HP damage, healing, using abilities)
- Don't make it too hard, level 1 characters are fragile
- Reward creative solutions (using the environment, clever tactics, etc.)
- If the party is struggling, lions can take reduced damage or one can be destroyed early

## What Comes Next

After defeating the lions:
- The passage continues forward, eventually reaching the Junction Chamber where all three paths converge
- Party recovers briefly (1-2 minutes to catch breath, heal, etc.)
- They can hear something in the deeper chamber: footsteps, or the faint sound of water
- Continue to [[Encounter - Nikos Guardian of Crown]]

---

**Campaign**: [[Campaign - The Relic of Alexander|The Relic of Alexander]]
**Location**: [[Location - Thessaloniki Catacombs]] (mid-level, left path)
**Previous Encounter**: [[Encounter - Infiltrating the Catacombs]]
**Next Encounter**: [[Encounter - Nikos Guardian of Crown]]

**Alternate Encounter**: This encounter is one of three possible mid-level challenges. The party will only face one of:
- [[Encounter - The Stone Sentries]] (left path - medium difficulty)
- [[Encounter - Peritas's Trial]] (middle path - medium difficulty, multiple solutions)
- [[Encounter - The Drakofido]] (right path - hard difficulty)
