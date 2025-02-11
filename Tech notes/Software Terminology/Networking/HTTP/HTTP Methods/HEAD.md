---
tags:
  - tech
---
The HEAD method requests that the target resource transfer a representation of its state, as for a [[GET]] request, but without the representation data enclosed in the response body.
This is useful for retrieving the representation metadata in the response header, without having to transfer the entire representation.
Uses include checking whether a page is available through the status code and quickly finding the size of a file (`Content-Length`).