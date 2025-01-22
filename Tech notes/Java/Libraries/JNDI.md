---
tags:
  - tech
  - java
aliases:
  - Java Naming and Directory Interface
---
The Java Naming and Directory Interface (JNDI) is a [[Java]] [[API]] for a directory service that allows Java software clients to discover and look up data and resources (in the form of Java objects) via a name. 
Like all [[Java]] [[API]]s that interface with host systems, JNDI is independent of the underlying implementation.
The information looked up via JNDI may be supplied by a server, a flat file, or a database; the choice is up to the implementation used.

Typical uses of JNDI include:
- connecting a Java application to an external directory service (such as an address database or an LDAP server),
- allowing a Java Servlet to look up configuration information provided by the hosting web container.

The API provides:
- a mechanism to bind an object to a name
- a directory-lookup interface that allows general queries
- an event interface that allows clients to determine when directory entries have been modified
- LDAP extensions to support the additional capabilities of an LDAP service

See also [this very useful SO answer](https://stackoverflow.com/a/4365766/15552149).

## Lookup Example

JNDI (Java Naming and Directory Interface) organizes its names into a hierarchy. 
A name can be any string such as "com.example.ejb.MyBean". 
A name can also be an object that implements the Name interface; however, a string is the most common way to name an object. 
A name is bound to an object in the directory by storing either the object or a reference to the object in the directory service identified by the name.

The JNDI API defines a context that specifies where to look for an object. 
The initial context is typically used as a starting point.

In the simplest case, an initial context must be created using the specific implementation and extra parameters required by the implementation. 
The initial context will be used to look up a name. 
The initial context is analogous to the root or top of a directory tree for a file system. 
Below is an example of creating an initial context:

```java
Hashtable contextArgs = new Hashtable<String, String>();

// First you must specify the context factory.
// This is how you choose between jboss implementation
// vs. an implementation from Sun or other vendors.
contextArgs.put( Context.INITIAL_CONTEXT_FACTORY, "com.jndiprovider.TheirContextFactory" );

// The next argument is the URL specifying where the data store is:
contextArgs.put( Context.PROVIDER_URL, "jndiprovider-database" );

// (You may also have to provide security credentials)

// Next you create the initial context
Context myCurrentContext = new InitialContext(contextArgs);
```

> An alternative and/or simpler code example to the above is this:
```java
//just need to create initial context object, it will try to read jndi.properties file from the classpath.
Context myCurrentContext = new InitialContext();
```
> This just assumes that the Context object is configured using a `jndi.properties` file in the [[Classpath]] and the `INITIAL_CONTEXT_FACTORY` and `PROVIDER_URL` are defined there.

A context is then used to look up previously bound names in that context. 
For example:

```java
MyBean myBean = (MyBean)  myCurrentContext.lookup("com.mydomain.MyBean");
```
