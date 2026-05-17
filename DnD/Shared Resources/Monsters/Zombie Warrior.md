---
tags:
  - dnd
  - monster
---


```statblock
name: Zombie Warrior
type: Medium Undead
alignment: Neutral Evil
ac: 16 (chainmail)
hp: 51 (6d10 +18)
speed: 30 ft
stats: [16, 10, 16, 6, 10, 6]
damage_immunities: poison
condition_immunities: poisoned
senses: Darkvision 60 ft., passive Perception 10
languages: Understands the languagues it knew in life but can't speak
cr: 2
traits:
  - name: Undead Fortitude
    desc: "If damage reduces the zoblin to 0 HP, it must make a CON saving throw with a DC of 5 + damage taken, unless the damage is radiant or from a critical hit. On success, the zoblin drops to 1HP instead"
actions:
  - name: Greatsword
    desc: "Melee Weapon Attack: +5 to hit, reach 5ft, one target. Hit: 10 (2d6+3) piercing damage."
  - name: Spew Bile (recharge 5-6)
    desc: "The zombie  spews bile in a 15ft line. Each creature in that line must make a DC 12 CON save taking 17 (5d6) necrotic damage on failed save, or half as much on a successful one."
```