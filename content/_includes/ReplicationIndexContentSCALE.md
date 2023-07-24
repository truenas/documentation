---
---

Local replication occurs on the same TrueNAS SCALE system using different pools or datasets. 
Remote replication can occur between your TrueNAS SCALE system and another TrueNAS system, or with some other remote server you want to use to store your replicated data.
Local and remote replication can involve encrypted pools or datasets. 

With the implementation of rootless login and the admin user, setting up replication tasks as an admin user has a few differences than with setting up replication tasks when logged in as root. Each of the tutorials in this section include these configuration differences.

The first snapshot taken for a task creates a full file system snapshot, and all subsequent snapshots taken for that task are incremental to capture differences occurring between the full and subsequent incremental snapshots.

Scheduling options allow users to run replication tasks daily, weekly, monthly, or on a custom schedule. 
Users also have the option to run a scheduled job on demand.