---
tags:
  - tech
aliases:
  - Simple Object Access Protocol
---
SOAP is an [[XML]] specification for sending messages over a network. SOAP messages are independent of any operating system and can use a variety of communication protocols including [[HTTP]] and [[SMTP]].

SOAP is XML heavy, hence best used with tools/frameworks.

It uses [[WSDL]] and [[XSD]] to send [[XML]] messages.

## Top-Down & Bottom-Up

There are two ways of building SOAP web services. We can go with a top-down approach or a bottom-up approach.

In a top-down (contract-first) approach, a [[WSDL]] document is created, and the necessary [[metaclasses]] are generated from the [[WSDL]]. In a bottom-up (contract-last) approach, the [[metaclasses]] are written, and the [[WSDL]] is generated from them.

Writing a [[WSDL]] file can be quite difficult depending on how complex your web service is. This makes the bottom-up approach an easier option. On the other hand, since your [[WSDL]] is generated from the [[metaclasses]], any change in code might cause a change in the [[WSDL]]. This is not the case for the top-down approach.