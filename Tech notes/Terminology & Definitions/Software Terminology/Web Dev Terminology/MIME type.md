---
tags:
  - tech
aliases:
  - media type
  - content type
---
In information and communications technology, a media type, content type or MIME type is a two-part identifier for file formats and content formats.
Their purpose is comparable to filename extensions and uniform type identifiers, in that they identify the intended data format.
They are mainly used by technologies underpinning the Internet, and also used on Linux desktop systems.

## Structure
A media type consists of a type and a subtype, which is further structured into a tree. A media type can optionally define a suffix and parameters.

As an example, an [[HTML]] file might be designated `text/html; charset=UTF-8`.
In this example, `text` is the type, `html` is the subtype, and `charset=UTF-8` is an optional parameter indicating the character encoding.

Types, subtypes, and parameter names are case-insensitive.
Parameter values are usually case-sensitive, but may be interpreted in a case-insensitive fashion depending on the intended use.

### Types
The "type" part defines the broad use of the media type.
The registered types are: 
- `application`, 
- `audio`,
- `image`, 
- `message`, 
- `multipart`, 
- `text` ,
- `video`,
- `font`, 
- `example`, 
- `model`, 
- `haptics`

### Subtypes
A subtype typically consists of a media format, but it may or must also contain other content, such as a tree prefix, producer, product or suffix, according to the different rules in registration trees.

#### Standards tree
The standards tree does not use any tree prefix. Examples are `text/javascript`, `image/png`.

## Common examples
- `application/json`
- `application/msword` (.doc)
- `application/pdf`
- `application/sql`
- `application/vnd.api+json`
- `application/x-www-form-urlencoded`
- `application/xml`
- `application/zip`
- `image/jpeg` (.jpg, .jpeg, .jfif)
- `image/png`
- `image/svg+xml` (.svg)
- `image/tiff` (.tif)
- `text/plain`
- `text/css`
- `text/csv`
- `text/html`
- `text/javascript`(.js)
- `text/xml`
