---
tags:
  - tech
aliases:
  - REST API
  - RESTful
  - RESTful API
  - Representational State Transfer
---
Representational State Transfer (REST) is an architectural style that defines a set of constraints to be used for creating [[Web Services]]. 
RESTful [[Web Services]] allow the requesting systems to access and manipulate textual representations of web resources by using a uniform and predefined set of stateless operations.

The client sends a request to the server, and the server sends a response back to the client.
The response and request are built around the transfer of representations of resources.
A resource can be any object that can be accessed by the client, such as a document or an image.

RESTful [[Web Services]] are built to work best on the web using the [[HTTP]] protocol.
They can be used by virtually any programming language and are easy to test and debug.

The REST architectural style takes advantage of the [[HTTP]] protocol by using the [[HTTP methods]] to perform operations on resources.
The most common operations are:
- GET: Retrieve a resource
- POST: Create a new resource
- PUT: Update a resource
- DELETE: Remove a resource
- PATCH: Update a resource partially

Usually, RESTful APIs return data in [[JSON]] or (less frequent) [[XML]] format.

A downside of RESTful APIs is that they can be slow when the client needs to make multiple requests to different endpoints to get all the data it needs.
This is known as the "over-fetching" problem. (More on this [here](https://stackoverflow.com/a/44568365/15552149))