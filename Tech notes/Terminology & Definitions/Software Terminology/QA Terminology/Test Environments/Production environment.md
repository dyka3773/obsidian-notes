---
tags:
  - tech
---
Production environment is where the software is produced and is running on a production server.
It has officially gone live to real users.

When deploying a new release to production, rather than immediately deploying to all users, the release can be deployed in phases to a segment of your users first to see how it performs to catch and fix any additional bugs before deploying to the rest of your users.

In other words, just because you’re in the production environment, it doesn’t mean tests have to end here. 
You can and should still be testing in production.
This can be done with the help of [[feature flags]], which allow you to safely test in production on a pre-selected number of users.