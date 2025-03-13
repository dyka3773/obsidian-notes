---
tags:
  - tech
---
This environment is a nearly exact replica of the [[Production environment]] so it seeks to mirror an actual [[Production environment]] as closely as possible to ensure the software works correctly.

The staging environment is often restricted to a small number of selected users and so it is limited to certain IPs and developer teams.

The purpose of this environment is to test on a near-production level but in a non-[[Production environment]] to verify that the application will behave correctly after deployment. 
Thus, it represents a safe space away from the public eye to make sure everything works as expected; it is kept invisible from end-users.

The focus here is to test the application or software as a whole.
Examples of the kind of test that can be run in this environment include [[Smoke Testing]] and in particular load testing since it can be difficult to replicate high volumes of traffic in a staging environment to test the software or application under stress.

However, keep in mind that a staging environment is not meant to be a substitute for a real-world [[Production environment]].

To ensure your product works as it should, you need both a testing and staging environment, where the [[Testing environment]] makes sure that every component does its job while the staging environment ensures that your software would behave correctly in an environment almost exactly the same as production.
