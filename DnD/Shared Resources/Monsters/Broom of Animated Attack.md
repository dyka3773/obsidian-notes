---
tags:
  - dnd
  - monster
---
```statblock
name: Broom of Animated Attack
size: small
type: construct
alignment: unaligned
ac: 15 (natural armor)
hp: 17 (5d6)
speed: 0ft, fly 50ft (hover)
stats: [10, 17, 10, 1, 5, 1]
damage_immunities: poison, psychic
condition_immunities: blinded, charmed, deafened, exhaustion, frightened, paralyzed, petrified, poisoned, prone
senses: blindsight 30ft (blind beyond this radius), passive Perception 7
cr: 1/4
traits:
  - name: Antimagic Susceptibility
    desc: The broom is incapacitated while in the area of an antimagic field. If targeted by dispel magic, the broom must succeed on a Constitution saving throw against the caster's spell save DC or fall unconscious for l minute.
  - name: False Appearance
    desc: While the broom remains motionless and isn't flying, it is indistinguishable from a normal broom.
actions:
  - name: Multiattack
    desc: It makes 2 melee attacks
  - name: Broomstick
    desc: Melee, +5 to hit, reach 5 ft, 5 (1d4 + 3) bludgeoning damage.
reactions:
  - name: Animated Attack
    desc:  If the broom is motionless and a creature grabs hold of it, the broom makes a Dexterity check contested by the creature's Strength check. If the broom wins the contest, it flies out of the creature's grasp and makes a melee attack against it with advantage on the attack roll.
```
