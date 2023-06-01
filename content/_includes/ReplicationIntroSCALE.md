---
---

The first snapshot taken for a task creates a full file system snapshot, and all subsequent snapshots taken for that task are incremental to capture differences occurring between the full and subsequent incremental snapshots.

Scheduling options allow users to run replication tasks daily, weekly, monthly, or on a custom schedule. 
Users also have the option to run a scheduled job on demand. 
{{< hint type=note >}}
Replication tasks require a periodic snapshot task. 
The earlier releases of SCALE required creating a periodic snapshot task before the replication task, but SCALE 22.12 and newer automatically creates the snapshot task when a scheduled replication task starts.
To start a replication task using the **Run Now** option on the **Replication Task** widget or by selecting **Run Once** in the **Replication Task Wizard**, [create a periodic snapshot task]({{< relref "PeriodicSnapshotTasksSCALE.md" >}}) first.
{{< /hint >}}