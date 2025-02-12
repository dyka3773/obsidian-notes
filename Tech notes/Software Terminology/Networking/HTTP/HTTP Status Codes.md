---
tags:
  - tech
aliases:
  - Status Code
---
In HTTP/1.0 and since, the first line of the [[HTTP]] response is called the status line and includes a numeric status code and a textual reason phrase.
The response status code is a three-digit integer code representing the result of the server's attempt to understand and satisfy the client's corresponding request.
Clients may not understand all registered status codes but they must understand their class (given by the first digit of the status code) and treat an unrecognized status code as being equivalent to the x00 status code of that class.

### Classes
- `1XX` (info): The request was received, continuing process.
- `2XX` (success): The request was successfully received, understood, and accepted.
- `3XX` (redirect): Further action needs to be taken in order to complete the request.
- `4XX` (client error): The request contains bad syntax or cannot be fulfilled.
- `5XX` (server error): The server failed to fulfill an apparently valid request.

### Most notable status codes
- `200 OK`: Standard response for successful [[HTTP]] requests.
- `201 Created`: The request has been fulfilled, resulting in the creation of a new resource.
- `202 Accepted`: The request has been accepted for processing, but the processing has not been completed.
- `301 Moved Permanently` : This and all future requests should be directed to the given URI.
- `302 Found (Previously "Moved temporarily")`: ells the client to look at (browse to) another URL. The HTTP/1.0 specification required the client to perform a temporary redirect with the same method (the original describing phrase was "Moved Temporarily"), but popular browsers implemented 302 redirects by changing the method to [[GET]]. Therefore, HTTP/1.1 added status codes 303 and 307 to distinguish between the two behaviours.
- `400 Bad Request`: The server cannot or will not process the request due to an apparent client error (e.g., malformed request syntax, size too large, invalid request message framing, or deceptive request routing).
- `401 Unauthorized`: Similar to `403 Forbidden`, but specifically for use when authentication is required and has failed or has not yet been provided. The response must include a `WWW-Authenticate` header field containing a challenge applicable to the requested resource.
- `403 Forbidden`: The request contained valid data and was understood by the server, but the server is refusing action. This may be due to the user not having the necessary permissions for a resource or needing an account of some sort, or attempting a prohibited action (e.g. creating a duplicate record where only one is allowed).
- `404 Not Found`: The requested resource could not be found but may be available in the future. Subsequent requests by the client are permissible.
- `405 Method Not Allowed`: A request method is not supported for the requested resource; for example, a [[GET]] request on a form that requires data to be presented via [[POST]], or a [[PUT]] request on a read-only resource.
- `408 Request Timeout`: The server timed out waiting for the request.
- `410 Gone`: Indicates that the resource requested was previously in use but is no longer available and will not be available again. This should be used when a resource has been intentionally removed and the resource should be purged. Upon receiving a 410 status code, the client should not request the resource in the future. Clients such as search engines should remove the resource from their indices.
- `418 I'm a teapot`: The RFC specifies this code should be returned by teapots requested to brew coffee.
- `429 Too Many Requests`: The user has sent too many requests in a given amount of time. Intended for use with [[rate-limiting]] schemes.
- `500 Internal Server Error`: A generic error message, given when an unexpected condition was encountered and no more specific message is suitable.
- `501 Not Implemented`: The server either does not recognize the request method, or it lacks the ability to fulfil the request. Usually this implies future availability (e.g. a new feature of a web-service [[API]]).
- `502 Bad Gateway`: The server was acting as a gateway or proxy and received an invalid response from the upstream server.
- `503 Service Unavailable`: The server cannot handle the request (because it is overloaded or down for maintenance). Generally, this is a temporary state.