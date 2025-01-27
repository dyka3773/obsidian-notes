---
tags:
  - tech
aliases:
  - create, read, update, and delete
  - ABCD
  - CRUDL
  - BREAD
  - DAVE
  - CRAP
---
Create, read, update, and delete (CRUD) are the four basic operations (actions) of persistent storage.
> CRUD is also sometimes used to describe user interface conventions that facilitate viewing, searching, and changing information using computer-based forms and reports.

# Use Cases
## Databases
The acronym CRUD refers to the major operations which are implemented by databases.
Each letter in the acronym can be mapped to a standard Structured Query Language ([[SQL]]) statement.

|  CRUD  |  SQL   |
| :----: | :----: |
| Create | INSERT |
|  Read  | SELECT |
| Update | UPDATE |
| Delete | DELETE |
Although [[relational databases]] are a common persistence layer in software applications, numerous other persistence layers exist. 
CRUD functionality can for example be implemented with [[document databases]], object databases, [[XML databases]], text files, or binary files.

Some big data systems do not implement UPDATE, but have only a timestamped INSERT ([[journaling]]), storing a completely new version of the object each time.

## RESTful APIs
The acronym CRUD also appears in the discussion of [[REST|RESTful APIs]].
Each letter in the acronym may be mapped to an [[HTTP methods|HTTP Method]]

|  CRUD  |                             HTTP                             |
| :----: | :----------------------------------------------------------: |
| Create | POST (sometimes PUT if we don't have `id` or [[UUID\|uuid]]) |
|  Read  |                             GET                              |
| Update |               PUT to replace, PATCH to modify                |
| Delete |                            DELETE                            |
In [[HTTP]], the GET (read), PUT (create and update), POST (create), and DELETE (delete) methods are CRUD operations as they have storage management semantics, meaning that they let user agents directly manipulate the states of target resources.
The POST method, on the other hand, is a process operation that has target-resource-specific semantics which typically exceed the scope of CRUD operations.

## User Interface
CRUD is also relevant at the user interface level of most applications.
For example, in address book software, the basic storage unit is an individual contact entry.
As a bare minimum, the software usually would allow the user to:
- _Create_, or add new entries
- _Read_, retrieve, search, or view existing entries
- _Update_, or edit existing entries
- _Delete_, deactivate, or remove existing entries

# Variations
- ABCD (add, browse, change, delete)
- CRUDL (create, read, update, delete, list)
- BREAD (browse, read, edit, add, delete)
- DAVE (delete, add, view, edit)
- CRAP (create, replicate, append, process)