---
tags:
  - dnd
  - encounter
type: encounter
campaign: The Relic of Alexander
difficulty: Medium
party_level: 1
encounter_type: Infiltration/Stealth
status: planned
---

# Encounter: Infiltrating the Catacombs

## Overview
The party must sneak through the upper catacombs entrance and past a guard patrol or alarm system. This is a low-combat infiltration encounter designed to teach stealth and decision-making.

## Encounter Type
- **Type**: Infiltration/Stealth
- **Location**: [[Location - Thessaloniki Catacombs]] (upper level)
- **Difficulty**: Easy-Medium (DC 11 Stealth checks)
- **Party Level**: 1
- **Estimated Duration**: 20-30 minutes

## Setup
The party has been given directions by [[DnD/Campaigns/Your First One-Shot/NPCs/Dimitris]] to the hidden monastery entrance. They arrive at dusk. The entrance is a collapsed section of the monastery basement that leads down into the catacombs.

**The Obstacle**:
- **Option A (Combat Path)**: 2 [[Cultist Guard|cultist guards]] stationed at the entrance (they're expecting trouble)
- **Option B (Stealth Path)**: No guards visible, but magical wards might alert the cultists if triggered
- **Option C (Social Path)**: A young guard who is sympathetic to the party and can be persuaded/tricked

## The Environment
- Collapsed monastery basement (crumbled stone, darkness, dust)
- Small passage leading down (10 feet wide, 8 feet tall)
- Torchlight visible from below (guard station)
- 60 feet down to the first chamber

### Visual Description
> "The monastery is a shell, centuries of decay have crumbled its walls. You find the loose stone [[DnD/Campaigns/Your First One-Shot/NPCs/Dimitris]] mentioned, revealing a passage down into darkness. Cold air rises from below, carrying the smell of age and earth. You can see faint torchlight dancing on stone walls far below. Your heart pounds as you realize this is the point of no return."

## The Guard Station (Upper Catacombs Entrance)

### Stat Blocks
If a guard encounter occurs, use these stats:

**[[Cultist Guard]] (2-3)**
```statblock
name: Cultist Guard
size: Medium
type: humanoid
ac: 14
hp: 5
speed: 30 ft.
stats: [10, 12, 10, 10, 10, 10]
skills:
 - perception: +2
actions:
 - name: Shortsword
   desc: "Melee Weapon Attack: `dice: 1d20+2` to hit, reach 5 ft., one target. Hit: `dice: 1d6` slashing damage."
```

```
AC 14 (leather armor)
HP 5 each
STR: 10 | DEX: 12 | CON: 10
Attack: Shortsword +2 to hit, 1d6 damage
Skills: Perception +2
```

They're not elite warriors, just hired muscle. They'll surrender or flee if outmatched.

### Guard Behavior
- **Alert**: If they hear the party, they call for backup (1d4 cultists arrive in 2 rounds)
- **Negotiable**: They can be bribed (50 gp), tricked (Deception DC 12), or intimidated (Intimidation DC 13)
- **Cowardly**: If one guard is defeated, the other flees (they're not fanatics, just paid)

## Stealth Approach (Recommended)

### Clues to Stealth:
- Listen check (DC 11) reveals guard positions and talking
- Perception check (DC 12) spots side passages that avoid the guards
- Investigation check (DC 13) identifies the magical wards

### Stealth Check DCs
- **DC 11**: Past the guards without being seen (moderate difficulty for level 1)
- **DC 13**: Past the guards AND avoid disturbing magical wards
- **DC 15**: Silent approach, no alarms at all

### Consequences
- **Success**: Party passes undetected, continues deeper
- **Partial Success**: Guards don't see them, but alarms trigger (cultists know intruders are here, time pressure increases)
- **Failure**: Combat with guards, then they must deal with reinforcements

## Alternative: Social Approach

### The Young Guard (Optional NPC)
If you want to make this less combat-heavy, the guards might include **Alexios**, a 19-year-old conscript who was promised money and isn't dedicated to the cause.

**Alexios Stats**:
- AC 12 | HP 4
- Kind-hearted but desperate for money
- Will stand aside if the party:
  - Offers 30 gp or valuables
  - Convinces him (Persuasion DC 12) that the High Priest is evil
  - Tricks him (Deception DC 13) with a convincing story

**His Dialogue**:
- "I'm just here for the coin, you understand? I don't want trouble."
- "The High Priest... he seems nice in public, but down here? I'm not sure about him."

## The Alarm System (Optional Twist)

If you want to add complexity without combat, there might be **magical wards**:
- Ancient glyphs on the walls and floor
- They trigger if disturbed (DC 13 Arcana check to understand them)
- If triggered: A low hum echoes through the catacombs (cultists are alerted)
- Party has 2-3 rounds before reinforcements arrive

**Ways to solve**:
- Disarm them (Arcana check DC 15)
- Go around them (careful movement, Acrobatics DC 12)
- Accept the alarm and prepare for combat

## What Happens Next

### If Stealth Succeeds
- Party enters the mid-level catacombs undetected
- Continue to [[Encounter - The Stone Sentries]]

### If Combat Occurs
- 2-3 cultists are defeated/fled
- Alarms are triggered (they have ~1 minute before reinforcements)
- Party must decide: Press on, hide, or fortify position
- Reinforcements arrive (2 more cultists) in 2 rounds

### If Negotiations Work
- Guards allow passage (or stand aside)
- Party learns some information: "The High Priest wants treasure from deep below"
- Cultists still know intruders are here but aren't immediately hostile

## Combat Stats (If Needed)

**[[Cultist Guard]]**
```statblock
name: Cultist Guard
size: Medium
type: humanoid
ac: 14
hp: 5
speed: 30 ft.
stats: [10, 12, 10, 10, 10, 10]
skills: Perception+2
actions:
  - name: Shortsword
    desc: "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d6) slashing damage."
  - name: Hide
    desc: "The guard hides as a bonus action if outnumbered."
traits:
  - name: Low Morale
    desc: If reduced to 2 HP or less, the guard attempts to flee.
```

## DM Notes
- This encounter is designed to **not** force combat at level 1
- Stealth and role-playing should be rewarded
- If combat happens, it should be quick and easy
- The goal is for the party to reach the relic chamber with time for the major encounters
- Don't spend too long here. Move the story forward

## Encounter Progression

**Time Budget**: 20-30 minutes
- 5 min: Investigation/scouting
- 10-15 min: Stealth/social interaction
- 5-10 min: Resolution and movement to next area

---

**Campaign**: [[Campaign - The Relic of Alexander|The Relic of Alexander]]
**Location**: [[Location - Thessaloniki Catacombs]]
**Next Encounter**: [[Encounter - The Stone Sentries]]
