---
tags:
  - tech
---

GraphQL is a query language for APIs and a runtime for executing those [[GraphQL Queries]] by using a type system you define for your data. It was developed by Facebook in 2012 and released as an open-source project in 2015.
It is an alternative to [[REST|RESTful API]]s and is designed to provide a more efficient and powerful way to interact with data.

## Features

- **Hierarchical**: GraphQL [[GraphQL Queries|Queries]] are hierarchical and allow you to request only the data you need.
- **Strongly Typed**: GraphQL uses a type system to define the schema of your [[API]].
- **Introspective**: GraphQL APIs are self-documenting and allow you to query the schema itself.
- **Real-time**: GraphQL supports real-time updates using subscriptions.
- **Batching**: GraphQL allows you to batch multiple [[GraphQL Queries|Queries]] into a single request.
- **Versionless**: GraphQL APIs are versionless and allow you to evolve your [[API]] without breaking changes.
- **Client-driven**: GraphQL allows clients to request the data they need and avoid over-fetching.
- **Tooling**: GraphQL has a rich ecosystem of tools and libraries for building and consuming APIs.
- **Performance**: GraphQL allows you to optimize [[GraphQL Queries|Queries]] and reduce the number of round trips to the server.
- **Security**: GraphQL allows you to define fine-grained access control rules for your data.
- **Flexibility**: GraphQL allows you to define custom scalar types and directives to extend the schema.

## Components

- **Schema**: The schema defines the types and [[GraphQL Queries|Queries]] that are available in your [[API]].
- **Types**: Types define the shape of your data and the operations that can be performed on it.
- **Queries**: [[GraphQL Queries|Queries]] are used to fetch data from the [[API]].
- **Mutations**: Mutations are used to modify data in the [[API]].
- **Subscriptions**: Subscriptions are used to receive real-time updates from the [[API]].
- **Directives**: Directives are used to modify the behavior of the schema or the execution of a query.

## Example

Here is an example of a GraphQL schema that defines a `User` type with `id`, `name`, and `email` fields:

```graphql
type User {
  id: ID!
  name: String!
  email: String!
}

type Query {
  user(id: ID!): User
}
```

You can query the [[API]] using the following GraphQL query:

```graphql
query {
  user(id: "1") {
    id
    name
    email
  }
}
```

The [[API]] will return the following [[JSON]] response:

```json
{
  "data": {
    "user": {
      "id": "1",
      "name": "John Doe",
      "email": "abc@abc.com"
    }
  }
}
```