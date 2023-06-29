---
---

{{< hint type=note >}}
Using encryption for SSH transfer security is always recommended.
{{< /hint >}}

In situations where you use two systems within an absolutely secure network for replication, disabling encryption speeds up the transfer.
However, the data is completely unprotected from eavesdropping.

Choosing **No Encryption** for the task is less secure but faster. This method uses common port settings but you can override these by switching to the **Advanced Replication Creation** options or by editing the task after creation.

{{< trueimage src="/images/SCALE/RepSecurityTaskSCALE.png" alt="Replication Security and Task Name" id="10: Replication Security and Task Name" >}}
