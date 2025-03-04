---
tags:
  - tech
aliases:
  - Document Object Model
---
The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an [[HTML]] or [[XML]] document as a tree structure wherein each node is an object representing a part of the document.
The DOM represents a document with a logical tree.
Each branch of the tree ends in a node, and each node contains objects.
DOM methods allow programmatic access to the tree. 
With them one can change the structure, style or content of a document.
Nodes can have [[event handlers]] (also known as event listeners) attached to them.
Once an event is triggered, the event handlers get executed.

In [[HTML]] DOM (Document Object Model), every element is a node:
- A document is a document node.
- All [[HTML]] elements are element nodes.
- All [[HTML]] attributes are attribute nodes.
- Text inserted into [[HTML]] elements are text nodes.
- Comments are comment nodes.

## Web Browsers
To render a document such as a [[HTML]] page, most web browsers use an internal model similar to the DOM.
The nodes of every document are organized in a tree structure, called the DOM tree, with the topmost node named as "Document object".
When an [[HTML]] page is rendered in browsers, the browser downloads the [[HTML]] into local memory and automatically parses it to display the page on screen.

## [[JavaScript]]
When a web page is loaded, the browser creates a Document Object Model of the page, which is an object oriented representation of an [[HTML]] document that acts as an interface between [[JavaScript]] and the document itself.
This allows the creation of dynamic web pages, because within a page [[JavaScript]] can:
- add, change, and remove any of the [[HTML]] elements and attributes
- change any of the [[CSS]] styles
- react to all the existing events
- create new events

## Manipulating the DOM tree
The DOM tree can be manipulated using [[JavaScript]] or other programming languages.
Common tasks include navigating the tree, adding, removing, and modifying nodes, and getting and setting the properties of nodes.
The DOM [[API]] provides a set of methods and properties to perform these operations, such as `getElementById`, `createElement`, `appendChild`, and `innerHTML`.

> Creating a DOM structure does not necessarily mean that it will be displayed in the web page, it only exists in memory and should be appended to the document body or a specific container to be rendered.
