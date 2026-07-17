---
tags:
  - dnd
---

```statblock
name: Adult Crystal Dragon
size: Huge
type: dragon (Gem)
alignment: typically chaotic neutral
ac: 16 (natural armor)
hp: 172 (15d12 +75)
speed: 40ft, fly 80ft, climb 40ft, burrow 40ft
stats: [21, 12, 21, 18, 15, 19]
saves:
  - DEX: +5
  - CON: +9
  - WIS: +6
  - CHA: +8
skillsaves:
  - perception: +10
  - stealth: +9
  - survival: +6
senses: blindsight 60ft, darkvision 120ft, passive Perception 20
languages: Common, Draconic, telepathy 120ft
cr: 12
traits:
  - name: Legendary Resistence (3/Day)
    desc: If the dragon fails a saving throw, it can choose to succeed instead.
actions:
  - name: Multiattack
    desc: "The dragon makes one Bite attack and two Claw attacks."
  - name: Bite
    desc: "Melee Weapon Attack: +9 to hit, reach 10ft, one taget. Hit: 16 (2d10 + 5) piercing damage + 4 (1d8) radiant damage."
  - name: Claw
    desc: "Melee Weapon Attack: +9 to hit, reach 5ft, one taget. Hit: 9 (1d8 + 5) slashing damage."
  - name: Scintillating Breath (Recharge 5-6)
    desc: "Exhale a burst of brilliant radiance in a 60ft cone. Each creature in that area must make a DC 17 CON save, taking 40 (9d8) radiant damage on a failed save or half as much damage on a successful one. The dragon then gains 15 temporary HP by absorbing a portion of the radiant energy."
  - name: Spellcasting (Psionics)
    desc: "The dragon casts one of the following spells, requireing no spell components and using INT as the spellcasting ability (Spell Save DC = 16). - At will: [[Dancing Lights]], [[Guidance]]. - 1/day each: [[Command]], [[Divination]], [[Hypnotic Pattern]], [[Lesser Restoration]]"
bonus_actions:
  - name: Change Shape
    desc: The dragon magically transforms into any creature that is Medium or Small, while retaining its game statistics (other than its size). This transformation ends if the dragon is reduces to 0 HP or uses a bonus action to end it.
  - name: Psychic Step
    desc: The dragon magically teleports to an unoccupied space it can see within 60ft of it.
legendary_actions:
  - name: Claw
    desc: The dragon makes one Claw attack
  - name: Psionics (Costs 2 Actions)
    desc: The dragon uses Psycic Step or Spellcasting
  - name: Starlight Strike (Costs 3 Actions)
    desc: The dragon releases a searing beam of starlight at a creature that it can see within 60ft of it. The target must succeed on a DC 17 DEX save or take 31 (9d6) radiant damage.
```