---
tags:
  - dnd
  - monster
---

```statblock
name: Zoblin
type: Small Undead (Goblinoid)
alignment: Neutral Evil
ac: 10 (leather armor)
hp: 22 (4d6 +8)
speed: 30 ft
stats: [12, 8, 15, 5, 7, 6]
damage_immunities: poison
condition_immunities: poisoned
senses: Darkvision 60 ft., passive Perception 8
languages: Understands the languagues it knew in life but can't speak
cr: 1/4
traits:
  - name: Undead Fortitude
    desc: "If damage reduces the zoblin to 0 HP, it must make a CON saving throw with a DC of 5 + damage taken, unless the damage is radiant or from a critical hit. On success, the zoblin drops to 1HP instead"
actions:
  - name: Vicious Bite
    desc: "Melee Weapon Attack: +3 to hit, reach 5ft, one target. Hit: 3 (1d4+1) piercing damage, and the zoblin attaches to the target. While attached, the zoblin doesn't attack. Instead, at the start of each of the zoblin's turns, that creature takes 5 (2d4) necrotic damage. While the zoblin is attached, that creature's movement speed is also reduced by 10ft. A creature may use its action to make a DC 11 Athletics check, prying the zoblin loose on a success."
```