---
tags:
  - dnd
  - monster
---


```statblock
name: Zoblin Boss
type: Small Undead (Goblinoid)
alignment: Neutral Evil
ac: 12 (chain shirt)
hp: 33 (6d6 +12)
speed: 30 ft
stats: [14, 8, 14, 5, 8, 6]
damage_immunities: poison
condition_immunities: poisoned
senses: Darkvision 60 ft., passive Perception 9
languages: Understands the languagues it knew in life but can't speak
cr: 1
traits:
  - name: Undead Fortitude
    desc: "If damage reduces the zoblin to 0 HP, it must make a CON saving throw with a DC of 5 + damage taken, unless the damage is radiant or from a critical hit. On success, the zoblin drops to 1HP instead"
actions:
  - name: Scimitar
    desc: "Melee Weapon Attack: +4 to hit, reach 5ft, one target. Hit: 5 (1d6+2) piercing damage plus 2 (1d4) necrotic damage."
reactions:
  - name: Lingering Instincts
    desc: "Whenever an enemy within 5ft misses the zoblin with an attack, it can use its reaction to make a scimitar attack against that creature with disadvantage"
```