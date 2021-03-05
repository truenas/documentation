---
title: "Persistent L2ARC in TrueNAS 12.0"
weight: 20
---

Persistent L2ARC, or L2ARC rebuild, is a ZFS feature that was added to TrueNAS 12.0.
By default, the L2ARC cache empties when the system reboots.
When persistent L2ARC is enabled, a sysctl repopulates the cache device mapping during the reboot process.
This is intended to preserve L2ARC performance even after a system reboot.

However, persistent L2ARC for very large data pools can drastically slow the reboot process, degrading middleware and web interface performance.
Because of this, persistent L2ARC is disabled by default in TrueNAS 12.0 and must be manually activated.

## Activating Persistent L2ARC

Go to **System > Tunables > ADD**.
For the *Variable*, enter `vfs.zfs.l2arc.rebuild_enabled`. Set the *Value* to *1* and the *Type* to *sysctl*.
It is often helpful to note in the *Description* that this is the Persistent L2ARC activation.
Make sure *Enabled* is set and click *SUBMIT*.

![PersistentL2ARCTunable](/images/CORE/12.0/SystemTunablesL2ARCRebuild.png "Persistent L2ARC Activation")

{{< expand "CLI Instructions" "v" >}}
{{< hint warning >}}
Settings changed through the CLI are not written to the configuration database and will be reset on reboot.
{{< /hint >}}
In a command line, enter `sysctl vfs.zfs.l2arc.rebuild_enabled=1`.
When successful, the output reads: `vfs.zfs.l2arc.rebuild_enabled: 0 -> 1`
{{< /expand >}}
