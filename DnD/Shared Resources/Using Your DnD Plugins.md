---
tags:
  - dnd
  - guide
  - plugins
---

# Using Your D&D Plugins

Quick guide to the Obsidian plugins you have installed for D&D.

## 1. Fantasy Statblocks (obsidian-5e-statblocks)

Creates beautiful, formatted stat blocks for monsters and NPCs.

### Basic Syntax
````markdown
```statblock
monster: Goblin
```
````

This uses the built-in SRD monsters. For custom monsters:

````markdown
```statblock
name: Custom Bandit Leader
size: Medium
type: humanoid
subtype: human
alignment: any
ac: 15
hp: 65
hit_dice: 10d8 + 20
speed: 30 ft.
stats: [15, 16, 14, 14, 11, 14]
saves:
  - strength: 4
  - dexterity: 5
  - wisdom: 2
skillsaves:
  - athletics: 4
  - deception: 4
senses: passive Perception 10
languages: Common, Thieves' Cant
cr: 2
spells:
  - (none)
traits:
  - name: Pack Tactics
    desc: The bandit has advantage on attack rolls against a creature if at least one of the bandit's allies is within 5 feet of the creature and the ally isn't incapacitated.
actions:
  - name: Multiattack
    desc: The bandit makes two melee attacks.
  - name: Scimitar
    desc: "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) slashing damage."
  - name: Dagger
    desc: "Melee or Ranged Weapon Attack: +5 to hit, reach 5 ft. or range 20/60 ft., one target. Hit: 5 (1d4 + 3) piercing damage."
```
````

### Where to Save Stat Blocks
Create monster notes in `DnD/Shared Resources/Monsters/[Monster Name].md`

### Tips
- Use the built-in SRD monsters: `monster: Goblin`, `monster: Ancient Red Dragon`, etc.
- For custom monsters, fill out the template above
- Link to stat blocks from your encounters: `[[Goblin]]`

---

## 2. Dice Roller Plugin

Roll dice directly in your notes!

### Basic Syntax
- `dice: 1d20` - Simple roll
- `dice: 1d20+5` - Roll with modifier
- `dice: 2d6+3` - Multiple dice

---

## 3. Initiative Tracker

Track combat initiative order and HP.

### How to Use
1. **Open Initiative Tracker**: Click the dice icon in left sidebar, or use command palette: "Initiative Tracker"
2. **Add Creatures**:
   - Click "+ Add Creature"
   - Type name, HP, AC, initiative modifier
   - Or link to a stat block file
3. **Roll Initiative**: Click "Roll All"
4. **Start Combat**: Click "Begin Encounter"
5. **Track HP**: Click on creature to damage/heal
6. **Add Conditions**: Right-click creature to add conditions (Blinded, Prone, etc.)
7. **Next Turn**: Click "Next" to move to next creature

### Using with Stat Blocks
If you create a monster file with a stat block, the initiative tracker can import it:
1. Create [[Goblin]] note with statblock
2. In tracker, type creature name and it auto-fills HP/AC

### Tips
- Add your players to the tracker with their stats
- Save parties for reuse
- Conditions automatically reference 5e rules

---

## 4. Using Plugins Together

Here's how to use all three plugins in an encounter:

### In Your Encounter Note
````markdown
# Encounter: Goblin Ambush

## Setup
3 goblins ambush the party on the road.

## Goblin Stat Block
```statblock
monster: Goblin
```

## Running the Encounter
1. Open Initiative Tracker
2. Add 3 goblins: HP 7 each, AC 15, +2 initiative
3. Add party members
4. Roll initiative: `dice: 1d20+2|Goblin 1` `dice: 1d20+2|Goblin 2` `dice: 1d20+2|Goblin 3`
5. Begin combat!

### Goblin Tactics
- **Attack**: `dice: 1d20+4|Scimitar Attack`
- **Damage**: `dice: 1d6+2|Scimitar Damage`
- Goblins use Nimble Escape to Disengage as bonus action
````

---

## Quick Plugin Workflow

### Before Session
1. Create encounter notes with stat blocks
2. Prepare dice rolls inline: `dice: 1d20+5`
3. Have monster files ready in Shared Resources

### During Session
1. Open Initiative Tracker for combat
2. Click dice rolls as needed
3. Track HP and conditions in tracker
4. Take session notes

### After Session
1. Fill out Session template
2. Link to stat blocks used
3. Note what worked/didn't work

---

## Example Files to Create

I'll create some example monster files and encounters showing these plugins in action. Check:
- [[Example Monster - Goblin]]
- [[Example Encounter - Forest Ambush]]

---

**Related**: [[DnD|D&D Hub]] | [[Campaign Index]] | [[Running Your First One-Shot]]
