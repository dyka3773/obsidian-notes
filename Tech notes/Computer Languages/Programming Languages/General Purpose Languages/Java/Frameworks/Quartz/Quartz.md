---
tags:
  - tech
  - java
---
Quartz is a richly featured, [[open source]] job scheduling library that can be integrated within virtually any [[Java]] application - from the smallest stand-alone application to the largest e-commerce system. 
Quartz can be used to create simple or complex schedules for executing tens, hundreds, or even tens-of-thousands of jobs; jobs whose tasks are defined as standard [[Java]] components that may execute virtually anything you may program them to do. 
The Quartz Scheduler includes many enterprise-class features, such as support for [[JTA]] [[Transactions]] and clustering.

## Datasources

Quartz needs a storage to keep its tables (if not using ram-based storage).
If you're using JDBC-Jobstore, you'll be needing a Datasource for its use.

DataSources can be configured in three ways:
- All pool properties specified in the `quartz.properties` file, so that Quartz can create the DataSource itself.
- The [[JNDI]] location of an application server managed Datasource can be specified, so that Quartz can use it.
- Custom defined `org.quartz.utils.ConnectionProvider` implementations.

## Deleting Jobs & Triggers

Sometimes it is useful to completely reset quartz jobs and triggers.

Note: In the projects I've worked on we added quartz jobs every time a server starts, so it is safe to remove jobs together with triggers also.
```sql
delete from qrtz_simple_triggers;
delete from qrtz_cron_triggers;
delete from qrtz_triggers;
delete from qrtz_job_details;
```

