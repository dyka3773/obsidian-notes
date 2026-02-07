---
tags:
  - dnd
  - guide
  - quickstart
---

# Plugin Quick-Start for Your One-Shot

Step-by-step guide to use your D&D plugins during a session.

## Before the Session Starts

### 1. Review Your Encounter Notes
Open: [[Example Encounter - Forest Ambush]]
- Read through the encounter
- Check the stat blocks work
- Have [[Example Monster - Goblin]] open in another tab

### 2. Test the Stat Blocks
In the monster file, you should see a formatted stat block:

```statblock
monster: Goblin
```

If it displays correctly ✅ you're good!
If not ❌ check that Fantasy Statblocks plugin is enabled

### 3. Test the Dice Roller
Click any of these to roll:
- Attack: `dice: 1d20+4`
- Damage: `dice: 1d6+2`
- Initiative: `dice: 1d20+2`

If they're clickable and roll ✅ you're good!

### 4. Open Initiative Tracker
1. Look at left sidebar for dice icon (🎲)
2. Click it to open Initiative Tracker panel
3. Panel should open on left or right side

---

## During Combat: Step-by-Step

### Step 1: Add Creatures to Initiative Tracker
1. Click **"+ Add Creature"** button
2. For each goblin:
   - **Name**: "Goblin 1" (or "Goblin 2", "Goblin 3")
   - **HP**: 7
   - **AC**: 15
   - **Initiative Modifier**: +2
3. Click **"Add"**
4. Repeat for all 3 goblins

### Step 2: Add Player Characters
1. Click **"+ Add Creature"** again
2. For each player:
   - **Name**: Player's character name
   - **HP**: Their max HP
   - **AC**: Their AC
   - **Initiative Modifier**: Their DEX modifier
3. Click **"Add"**

### Step 3: Roll Initiative
**Option A - Manual**:
Go to your encounter note and roll:
- `dice: 1d20+2|Goblin 1 Init`
- `dice: 1d20+2|Goblin 2 Init`
- `dice: 1d20+2|Goblin 3 Init`
- Have players roll their initiative
- Enter results in tracker

**Option B - Auto**:
Click **"Roll All"** button in tracker

### Step 4: Start Combat
Click **"Begin Encounter"** button
- Tracker will sort by initiative order
- Highlight current turn

### Step 5: Run Combat Round-by-Round

#### On Each Creature's Turn:
1. **Describe their action**
2. **Roll attack**: Click `dice: 1d20+4|Goblin Attack` in your notes
3. **Compare to target's AC**
4. **If hit, roll damage**: Click `dice: 1d6+2|Damage`
5. **Apply damage**: Click on the target in tracker, modify their HP

#### To Damage a Creature:
1. Click their name in tracker
2. Type damage amount or use +/- buttons
3. Their HP updates automatically

#### To Add a Condition:
1. Right-click creature in tracker
2. Select condition (Prone, Blinded, etc.)
3. Icon appears next to their name

#### End of Turn:
Click **"Next"** button to advance to next creature

### Step 6: End Combat
When combat ends:
- Click "End Encounter" OR
- Click ❌ next to each creature to remove them
- Tracker resets

---

## Common Actions During Combat

### Goblin's Turn
1. **Describe**: "The goblin snarls and swings its scimitar at [Player]!"
2. **Roll attack**: `dice: 1d20+4|Scimitar Attack`
3. **Announce**: "That's a [result]. Does that hit your AC?"
4. **If yes**: "Roll damage!" `dice: 1d6+2|Damage`
5. **Apply damage** in tracker to that player

### Goblin Uses Nimble Escape
1. Describe: "The goblin cackles and darts behind the tree! Disengage as bonus action."
2. No roll needed - it's an ability
3. Right-click goblin → Add note: "Behind tree (+2 AC cover)"

### Player Attacks Goblin
1. Player rolls attack (their physical dice or dice roller)
2. Compare to goblin AC 15
3. If hit, player rolls damage
4. Click goblin in tracker → reduce HP by damage amount

### Goblin Dies
1. HP reaches 0 in tracker
2. Describe death: "The goblin shrieks and collapses!"
3. Click ❌ next to goblin to remove from tracker
4. Continue combat

---

## Example Combat Flow

### Round 1
```
TURN: Goblin 1 (Initiative 15)
DM: "Goblin 1 fires an arrow at [Fighter]!"
DM clicks: dice: 1d20+4 → Result: 18
DM: "18 to hit, does that beat your AC?"
Player: "Yes, my AC is 16"
DM clicks: dice: 1d6+2 → Result: 5
DM: "5 piercing damage!"
DM clicks Fighter in tracker, reduces HP by 5
DM clicks "Next"

TURN: Fighter (Initiative 14)
Player: "I charge the goblin and swing my sword!"
Player rolls: d20+5 = 19
DM: "That hits! Roll damage."
Player rolls: 1d8+3 = 9
DM: "You cleave into the goblin!"
DM clicks Goblin 1 in tracker, reduces HP by 9 (7→0, it dies)
DM clicks ❌ to remove Goblin 1
DM: "The goblin falls dead! Next!"
```

---

## Tips for Smooth Play

### Preparation
- ✅ Have encounter note open
- ✅ Have monster notes open in tabs
- ✅ Have tracker open before combat starts
- ✅ Pre-roll initiative if players are slow

### During Combat
- ✅ Click dice in your notes instead of physical dice (faster)
- ✅ Apply damage immediately in tracker
- ✅ Describe hits/misses dramatically
- ✅ Use conditions to track effects
- ✅ Don't stress perfect accuracy - keep it moving

### What to Track
- ✅ HP for all creatures
- ✅ Conditions (Prone, Blinded, etc.)
- ✅ Concentration (if spellcaster)
- ❌ Don't track minor details - just important stuff

---

## Troubleshooting

### Stat Blocks Don't Show
- Check Fantasy Statblocks plugin is enabled
- Make sure you have proper syntax: ` ```statblock `
- Try built-in monsters: `monster: Goblin`

### Dice Don't Roll
- Check Dice Roller plugin is enabled
- Syntax: ` `dice: 1d20` ` (with backticks)
- Make sure you're in preview mode, not edit mode

### Initiative Tracker Won't Open
- Check left sidebar for dice icon
- Try command palette (Ctrl/Cmd+P) → "Initiative Tracker"
- Check plugin is enabled in settings

### Can't Add Creatures
- Try clicking "+ Add Creature" button
- Make sure you filled out Name and HP fields
- Restart Obsidian if stuck

---

## After the Session

### Record Results
In your encounter note, scroll to bottom and fill out:
```markdown
## Actual Outcome
**Status**: Completed
- Party result: Victory
- Casualties: None
- Notable moments: Fighter crit on final blow!
- XP awarded: 50 per goblin = 150 total
```

### Update Campaign
- Mark encounter as "completed" in frontmatter
- Note any consequences
- Add to session notes

---

**Ready to Play?**
Open [[Example Encounter - Forest Ambush]] and follow this guide!

**Related**: [[Using Your DnD Plugins]] | [[Running Your First One-Shot]] | [[DM Quick Reference]]
