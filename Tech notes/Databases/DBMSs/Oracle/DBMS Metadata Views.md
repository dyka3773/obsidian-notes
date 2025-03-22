---
tags:
  - tech
aliases:
  - Metadata Views
---
All the tables that contain information about the [[Databases|database]] are created by [[Oracle DBMS|Oracle]] and their names start with `DBA_`, `ALL_` or `USER_`. 
- `DBA_` [[Database View|views]] contain all the information about the [[Databases|database]] and are accessible to users with the `DBA` role.
- `ALL_` [[Database View|views]] contain all the information about the [[Databases|database]] that the current user has access to.
- `USER_` [[Database View|views]] contain all the information about the [[Databases|database]] that the current user owns.