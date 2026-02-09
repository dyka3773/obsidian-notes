---
tags:
  - dnd
  - encounter
type: encounter
campaign: The Relic of Alexander
difficulty: Hard
combat: Yes (puzzle elements)
duration: 25-35 minutes
level_range: 1
---
# Encounter: [[The Drakofido]]

A massive serpentine dragon sculpture guards the right passage, the **[[The Drakofido|Drakofido]]**, an ancient automaton that awakens when intruders approach.

## Overview
**Type**: Combat with Puzzle Elements
**Difficulty**: Hard (harder than the other two paths)
**Expected Duration**: 25-35 minutes
**XP Award**: 250 XP total (62 XP per character for 4 players)

## Situation
After choosing the **right passage** following their infiltration, the party enters a large chamber with a high vaulted ceiling. In the center of the room coils a massive stone sculpture, a serpentine dragon with scales carved in meticulous detail.

As they step inside, ancient mechanisms grind to life. The sculpture's eyes glow red. Stone scrapes against stone as the **[[The Drakofido|Drakofido]]** unfurls, revealing it's not a statue, it's a construct, an animated guardian from Alexander's era.

### What [[the Drakofido]] Wants
[[The Drakofido]] has no wants or personality, it's a magical automaton programmed to destroy intruders. However, it has a **weakness**: the ancient control mechanisms that activate it can also be used to disable it.

## Battle Map

```
        [Door In]
            |
    [Stone Pillar]    [Stone Pillar]
            |               |
     ___________________
    |                   |
    |                   |
    |    DRAKOFIDO      |
    |   (Center Coil)   |
    |                   |
    |___________________|
    
    [Pillar]            [Pillar]
            |               |
        [Exit Door - Locked while Drakofido active]
```

**Room Dimensions**: 40 ft x 40 ft, 20 ft high ceiling

**Tactical Features**:
- **Four Stone Pillars**: Provide half cover, can be climbed (DC 12 Athletics), 15 feet tall
- **Control Pedestals**: Three small stone pedestals in a triangle around the room (one at each corner except entry) with glowing runes
- **[[The Drakofido]]**: Coiled in center, occupies 10 ft x 10 ft space when coiled, 15 ft long when extended
- **Exit Door**: Stone door at far end, sealed by magic while [[The Drakofido|Drakofido]] is active

## Creatures

### [[The Drakofido]] (Serpentine Guardian Construct)
**Custom Stat Block** (based on Animated Armor + Constrictor Snake)

**Armor Class**: 15 (stone construction)
**Hit Points**: 33 (6d8 + 6)
**Speed**: 20 ft.

**STR**: 16 (+3)
**DEX**: 10 (+0)
**CON**: 13 (+1)
**INT**: 1 (-5) (it's a construct)
**WIS**: 10 (+0)
**CHA**: 1 (-5)

**Damage Immunities**: Poison, Psychic
**Condition Immunities**: Blinded, Charmed, Deafened, Exhaustion, Frightened, Paralyzed, Petrified, Poisoned
**Senses**: Blindsight 60 ft. (can't see beyond this), passive Perception 10
**Languages**: None
**Challenge**: 1 (200 XP)

**Traits**:
- **Antimagic Susceptibility**: [[The Drakofido]] is incapacitated while in the area of an *[[antimagic field]]*. If targeted by *[[dispel magic]]*, it must succeed on a Constitution saving throw or fall unconscious for 1 minute.
- **False Appearance**: While motionless, [[the Drakofido]] is indistinguishable from a normal statue.
- **Magical Construct**: Immune to diseases and doesn't need air, food, or sleep.

**Actions**:
- **Multiattack**: [[The Drakofido]] makes two attacks: one bite and one constrict, or two slam attacks.
  
- **Bite**: Melee Weapon Attack, +5 to hit, reach 5 ft., one creature.
  - *Hit*: 7 (1d8 + 3) piercing damage plus 2 (1d4) fire damage (residual magic in its jaws).
  
- **Constrict**: Melee Weapon Attack, +5 to hit, reach 10 ft., one creature.
  - *Hit*: 6 (1d6 + 3) bludgeoning damage, and the target is grappled (escape DC 13). Until this grapple ends, the creature is restrained, and [[the Drakofido]] can't constrict another target.
  
- **Slam** (when not constricting): Melee Weapon Attack, +5 to hit, reach 5 ft., one target.
  - *Hit*: 8 (1d10 + 3) bludgeoning damage.

**Tactical Behavior**:
- **Round 1**: Lunges at nearest target, attempts to constrict
- **Round 2+**: Slams constricted target against pillars or walls (flavored as extra damage)
- **If damaged significantly** (below 15 HP): Becomes erratic, lashing wildly (disadvantage on attacks but makes three slam attacks instead of two)

## The Puzzle Element: Control Pedestals

Around the chamber are **three control pedestals** with glowing runes. These are the mechanisms that power [[the Drakofido]].

### How It Works
Each pedestal has a **rune sequence** that needs to be pressed in the correct order. When all three pedestals are deactivated correctly, [[the Drakofido]] powers down.

**The Challenge**: The party must deactivate pedestals *while* fighting [[the Drakofido]] (or avoiding it).

### Deactivating a Pedestal
**Action Required**: Use an action to interact with a pedestal
**Skill Check**: DC 13 Intelligence (Arcana) or (Investigation)
- **Success**: Pedestal deactivates (glowing runes fade to blue)
- **Failure**: Pedestal emits a magical shock, character takes 1d4 lightning damage and pedestal remains active

**Progress Tracking**:
- **1 pedestal deactivated**: [[The Drakofido|Drakofido]]'s movement speed reduced to 10 ft
- **2 pedestals deactivated**: [[The Drakofido|Drakofido]]'s AC reduced to 12, it loses Multiattack (can only make one attack per turn)
- **3 pedestals deactivated**: [[The Drakofido|Drakofido]] collapses into dormant statue form (combat ends)

### Alternative: Find the Pattern
**DC 15 Intelligence (Investigation)** check while examining the room:
- **Success**: Character notices the runes on the pedestals correspond to the carvings on [[the Drakofido]]'s scales, they spell out "Alexander" in ancient Greek (ΑΛΕΞΑΝΔΡΟΣ). If they press the runes in that order, they auto-succeed on deactivation (no check needed).
- **Failure**: No special insight, must use the DC 13 Arcana/Investigation checks per pedestal

## Combat Strategies

### Path 1: Pure Combat (Hardest)
- Party ignores pedestals, fights [[The Drakofido|Drakofido]] directly
- This is a deadly encounter for level 1 characters, [[The Drakofido|Drakofido]] can drop someone in 1-2 hits
- If party commits to this, have NPCs or environmental clues push them toward the pedestals

### Path 2: Divide and Conquer (Recommended)
- Half the party distracts/fights [[the Drakofido]]
- Other half works on deactivating pedestals
- Coordination is key. Communicate who's doing what

### Path 3: Avoidance & Puzzle (Skill-Focused)
- Use pillars as cover
- Have fastest characters (high Dex) kite [[the Drakofido]] around the room
- Others focus purely on pedestal deactivation
- Requires teamwork and good tactical positioning

## Environmental Hazards

### [[The Drakofido|Drakofido]]'s Tail Sweep (Lair Action)
On **initiative count 20** (losing ties), [[the Drakofido]] sweeps its tail in a 15-foot cone:
- All creatures in the area must make **DC 12 Dexterity saving throw**
- **Failure**: Knocked prone and pushed 5 feet
- **Success**: No effect

This can disrupt characters trying to reach pedestals, adding urgency.

### Falling Debris
If [[the Drakofido]] is reduced to half HP (16 or fewer), stone debris falls from the ceiling:
- All creatures must make **DC 11 Dexterity saving throw**
- **Failure**: Take 1d4 bludgeoning damage
- **Success**: Take no damage
- After this happens once, no more debris falls

## Rewards

### Experience
- **Combat Victory (killed [[The Drakofido|Drakofido]])**: 250 XP
- **Puzzle Victory (deactivated all pedestals)**: 250 XP (same reward, encourage cleverness!)
- **Hybrid Approach**: 250 XP (same total regardless of method)

### Loot
- **On the Pedestals** (after deactivating all three):
  - A small carved stone token in the shape of a lion (worth 10 gp)
  - A **potion of healing** tucked into one of the pedestals
  
- **From [[the Drakofido]]** (if they search the dormant construct):
  - DC 14 Investigation check: Find a **spell scroll of [[Shield]]** wedged between its stone scales (left by a previous adventurer who didn't make it)

### Story Reward
- If the party solves the puzzle, [[Nikos]] later acknowledges their intelligence: "Few think to use their minds in these halls. Most rely on steel alone." (This can provide a small bonus during negotiation.)

## DM Notes & Tips

### Setting the Mood
**Describe the activation**:
- "Grinding stone echoes through the chamber. The carved eyes ignite with crimson light."
- "The serpent's body uncoils with mechanical precision. Each scale clicks into place."
- "It doesn't roar. It hisses. A sound like steam escaping from cracking rock."

**During combat**:
- "The stone tail whips toward you with crushing force."
- "Its bite grinds shut like a vice. You hear the crunch of stone teeth."

### Balancing for Your Party

**If party struggles**:
- Reduce [[The Drakofido|Drakofido]]'s HP to 25
- Allow the first pedestal deactivation to succeed automatically (no check)
- Have a clear visual cue (glowing line of magic connecting pedestals to [[The Drakofido|Drakofido]])

**If party steamrolls**:
- Increase HP to 40
- Add a fourth pedestal
- Make the tail sweep recharge on 5-6 instead of being automatic

### Avoiding a TPK
This is designed to be the *hardest* of the three paths. If things go badly:
- After dropping two party members, have [[the Drakofido]] prioritize targets still standing (giving unconscious PCs a break)
- Allow a DC 10 History or Religion check: A character recalls that ancient constructs often have "off switches", this gives them advantage on pedestal checks
- Environmental escape: One of the pillars is loose (DC 15 Strength check to topple it)—if pushed, it falls on [[the Drakofido]], dealing 2d10 damage and restraining it for one round

### Tactical Advice for Players
When they enter, give them a moment to survey:
- "The chamber is large. You see three pedestals glowing with runes. The serpent statue begins to move. What do you do?"

This prompts them to think tactically before initiative is rolled.

### Roleplay Opportunities
- **Character Knowledge**: If anyone has proficiency in History or Arcana, they might recognize this as a "guardian automaton" from Alexander's era
- **Fears**: The construct is terrifying. Allow characters to roleplay intimidation or fear (builds immersion)
- **Victory Pose**: When defeated, let the party describe their finishing move or how they deactivate the final pedestal

## Aftermath
Once [[the Drakofido]] is defeated/deactivated, the exit door's magic seal breaks. The door grinds open, revealing a passage that leads to the junction where all three paths converge.

The party can catch their breath, tend wounds, and prepare for [[Encounter - Nikos Guardian of Crown]].

## Connections
- **Previous Encounter**: [[Encounter - Infiltrating the Catacombs]]
- **Next Encounter**: [[Encounter - Nikos Guardian of Crown]]
- **Location**: [[Location - Thessaloniki Catacombs]]
- **Campaign**: [[Campaign - The Relic of Alexander]]

---

**Alternate Encounter**: This encounter is one of three possible mid-level challenges. The party will only face one of:
- [[Encounter - The Stone Sentries]] (left path - easy/medium)
- [[Encounter - Peritas's Trial]] (middle path - medium)
- [[Encounter - The Drakofido]] (right path - hard)
