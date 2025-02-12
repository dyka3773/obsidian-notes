---
tags:
  - tech
aliases:
  - HyperText Transfer Protocol
  - HTTP protocol
---
HTTP ([[HTML|Hypertext]] Transfer Protocol) is an application layer protocol in the Internet protocol suite model for distributed, collaborative, hypermedia information systems.
HTTP is the foundation of data communication for the World Wide Web, where [[HTML|hypertext]] documents include hyperlinks to other resources that the user can easily access, for example by a mouse click or by tapping the screen in a web browser.

## Versioning differences
-  In HTTP/1.0 a separate [[TCP]] connection to the same server is made for every resource request.
- In HTTP/1.1 instead a [[TCP]] connection can be reused to make multiple resource requests (i.e. of [[HTML]] pages, frames, images, scripts, stylesheets, etc.).
> HTTP/1.1 communications therefore experience less [latency](https://en.wikipedia.org/wiki/Network_latency "Network latency") as the establishment of TCP connections presents considerable overhead, especially under high traffic conditions.
- HTTP/2 is a revision of previous HTTP/1.1 in order to maintain the same client–server model and the same protocol methods but with these differences in order (among others):
	- to use a compressed binary representation of metadata (HTTP headers) instead of a textual one, so that headers require much less space
	- to add a push capability to allow server application to send data to clients whenever new data is available (without forcing clients to request periodically new data to server by using polling methods).
> HTTP/2 communications therefore experience much less latency and, in most cases, even higher speeds than HTTP/1.1 communications.
- HTTP/3 is a revision of previous HTTP/2 in order to use [[QUIC]] + [[UDP]] transport protocols instead of [[TCP]].
> Before that version, [[TCP]]/[[IP]] connections were used; but now, only the [[IP]] layer is used (which [[UDP]], like [[TCP]], builds on). This slightly improves the average speed of communications and to avoid the occasional problem of [[TCP]] connection congestion that can temporarily block or slow down the data flow of all its streams.

## Features
- [[HTTP Methods]]
- [[HTTP Status Codes]]