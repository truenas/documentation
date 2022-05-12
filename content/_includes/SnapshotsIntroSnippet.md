---
---

Snapshots are one of the most powerful features of ZFS.
A *snapshot* provides a read only point-in-time copy of a file system or volume.
This copy does not consume extra space in the ZFS pool.
The snapshot only records the differences between storage block references whenever the data is modified.

{{< expand "Why do I want to keep snapshots?" "v" >}}
Snapshots keep a history of files and provide a way to recover an older or even deleted files.
For this reason, many administrators take regular snapshots, store them for some time, and copy them to a different system.
This strategy allows an administrator to roll the system data back to a specific point in time.
In the event of catastrophic system or disk failure, off-site snapshots can restore data up to the most recent snapshot.

{{< /expand >}}