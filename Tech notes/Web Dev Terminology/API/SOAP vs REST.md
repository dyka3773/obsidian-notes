---
tags:
  - tech
---

> Note: The following tables list features of each protocol, they don't directly compare each row.

|                                                                     [[SOAP]]                                                                     |                                                     [[REST]]                                                      |
| :----------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------: |
|                                                           Wide range of specifications                                                           |     Usually no standard descriptor (e.g. like [[WSDL]]) for the endpoint (unless utilizing [[OpenAPI]] spec)      |
|                       Operations (inputs/return value/faults), and argument types are well-defined using [[WSDL]], [[XSD]]                       |                                           [[JSON]]-based communication                                            |
|                                                          Usually for S2S communication                                                           |                                         Can be used for C2S communication                                         |
|                                                 Has security features (signing, encryption, etc)                                                 |                                                                                                                   |
| When it comes to exception handling, [[Web Services]] can describe the exact set of possible faults that can occur, so that clients are prepared |                                               No predefined faults                                                |
|                                                                                                                                                  | Working with URL resources, using existing [[HTTP methods]] to perform operations on them (usually just [[CRUD]]) |

## Tooling

|                               [[SOAP]]                                |       [[REST]]       |
| :-------------------------------------------------------------------: | :------------------: |
| Debugging and testing webservices: [SOAP UI](https://www.soapui.org/) |     [[Postman]]      |
|     Generating ws-clients: `wsdl2java`, `wsgen` (from oracle jdk)     | Advanced REST Client |
|                                                                       |     [[OpenAPI]]      |

## Authentication

|    [[SOAP]]     | [[REST]]  |
| :-------------: | :-------: |
| [[WS-Security]] | [[oAuth]] |
|    [[SAML]]     |  [[JWT]]  |

