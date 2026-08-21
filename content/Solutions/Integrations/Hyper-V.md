---
title: "Hyper-V"
description: "Windows MPIO, iSCSI initiator, and failover cluster tuning for Hyper-V hosts that use TrueNAS iSCSI storage."
weight: 52
tags:
 - hyperv
 - iscsi
 - mpio
---

## Hyper-V Best Practices

Hyper-V hosts that use TrueNAS iSCSI storage need adjusted storage timeouts before they enter production.

TrueNAS Enterprise systems provide high availability (HA) through dual controllers in active/standby mode.
Only the active controller serves I/O.
A *failover* transfers that role to the other controller, which imports the pool and starts the iSCSI targets.
No controller serves I/O on the affected LUNs until the transfer completes.

Windows storage defaults are shorter than this window.
Multipath I/O (MPIO) removes a disk after 20 seconds without a path, and I/O does not resume on its own after Windows removes it.
Recovery then requires an initiator restart, a storage rescan, or a reboot.
The settings on this page raise those timers so disk objects survive the failover.

{{< hint type=important >}}
These settings affect all iSCSI and MPIO traffic on the host.
Review them with your storage and virtualization team before you apply them.
{{< /hint >}}

## Before You Begin

Apply these settings to every Hyper-V host that mounts TrueNAS iSCSI LUNs.
Open PowerShell as an administrator on each host.

Some values require a restart, so plan a maintenance window that allows a restart of each host and a test failover.

These values use the same 300-second envelope TrueNAS recommends for [VMware]({{< ref "/Solutions/Integrations/VMware" >}}).
The new controller must finish the pool import and target startup before any host timer expires.

## Multipath I/O Timers

Use the `Set-MPIOSetting` cmdlet for these values.
Most take effect without a restart.

{{< truetable >}}
| Parameter | Default | Recommended | Description |
|-----------|---------|-------------|-------------|
| `-NewPDORemovePeriod` | 20 | 300 | Seconds MPIO keeps a lost device before it removes the disk from Windows. The most important value to size correctly. |
| `-CustomPathRecovery` | Disabled | Enabled | Lets MPIO probe a failed path instead of waiting for a session to reconnect. |
| `-NewPathRecoveryInterval` | 40 | 25 | Seconds between probes of a failed path. |
| `-NewRetryCount` | 3 | 60 | Retries for an I/O that returns a SCSI error. |
| `-NewRetryInterval` | 1 | 1 | Seconds between retries. Leave at the default. |
{{< /truetable >}}

## Per-Disk SCSI Timeout

`TimeOutValue` sets the longest time a single SCSI command stays outstanding before Windows abandons it.
It must exceed the failover window so queued I/O is held rather than failed.
Raise it from the default of 60 seconds to 300.

The value is under `HKLM:\SYSTEM\CurrentControlSet\Services\disk`.
A restart is required.

## iSCSI Initiator Timers

These values control initiator behavior while a session reconnects.
All are under `HKLM:\SYSTEM\CurrentControlSet\Services\iScsiPrt\Parameters`, and a restart is required.

{{< truetable >}}
| Registry value | Default | Recommended | Description |
|----------------|---------|-------------|-------------|
| `LinkDownTime` | 15 | 60 | Seconds the initiator tolerates a disconnect before it declares the session dead. |
| `MaxRequestHoldTime` | 60 | 300 | Seconds the initiator queues I/O while a session reconnects. Sized to match the MPIO and disk timeouts. |
| `DelayBetweenReconnect` | 5 | 5 | Seconds between reconnection attempts. Leave at the default. |
{{< /truetable >}}

## Failover Cluster Heartbeat Settings

If the Hyper-V hosts belong to a failover cluster, raise the heartbeat thresholds so the cluster does not evict a node while storage is mid-failover.
These settings are cluster-wide, so run them one time on any cluster node.
On Windows Server 2019 and later, some defaults already match these values.

{{< truetable >}}
| Property | Recommended |
|----------|-------------|
| `SameSubnetThreshold` | 20 |
| `CrossSubnetThreshold` | 30 |
| `RouteHistoryLength` | 30 |
{{< /truetable >}}

## Applying the Settings

Run the following on every Hyper-V host as an administrator.

```powershell
# MPIO timers
Set-MPIOSetting -NewPDORemovePeriod 300 `
                -CustomPathRecovery Enabled `
                -NewPathRecoveryInterval 25 `
                -NewRetryCount 60 `
                -NewRetryInterval 1

# Per-disk SCSI timeout (restart required)
Set-ItemProperty -Path 'HKLM:\SYSTEM\CurrentControlSet\Services\disk' `
                 -Name TimeOutValue -Value 300 -Type DWord

# iSCSI initiator timers (restart required)
Set-ItemProperty -Path 'HKLM:\SYSTEM\CurrentControlSet\Services\iScsiPrt\Parameters' `
                 -Name LinkDownTime -Value 60 -Type DWord
Set-ItemProperty -Path 'HKLM:\SYSTEM\CurrentControlSet\Services\iScsiPrt\Parameters' `
                 -Name MaxRequestHoldTime -Value 300 -Type DWord
```

Run the cluster settings one time on any cluster node.

```powershell
(Get-Cluster).SameSubnetThreshold  = 20
(Get-Cluster).CrossSubnetThreshold = 30
(Get-Cluster).RouteHistoryLength   = 30
```

Restart each host after you apply the settings.

## Verifying the Settings

Confirm the values after each host restarts.
Windows accepts a registry write to an incorrect location without an error, so verify the values rather than assume they applied.

```powershell
Get-MPIOSetting
Get-ItemProperty 'HKLM:\SYSTEM\CurrentControlSet\Services\disk' TimeOutValue
Get-ItemProperty 'HKLM:\SYSTEM\CurrentControlSet\Services\iScsiPrt\Parameters' `
                 LinkDownTime, MaxRequestHoldTime
Get-Cluster | Select-Object SameSubnetThreshold, CrossSubnetThreshold, RouteHistoryLength
```

In `Get-MPIOSetting` output, the path recovery settings appear as `UseCustomPathRecoveryTime` and `CustomPathRecoveryTime`.

## Validating in a Maintenance Window

Test the configuration after all hosts restart.

First, click **Initiate Failover** on the TrueNAS web interface for the active controller.
Confirm that virtual machines continue to run and that `Get-ClusterSharedVolume` reports the Cluster Shared Volumes online throughout.

Next, issue a power reset to the active controller from the out-of-band management interface.
Expect a longer pause than the controlled test, but confirm that virtual machines do not crash and the Cluster Shared Volumes stay online.

Finally, fail back through the web interface and confirm the same results.

## Notes and Caveats

These values trade fast detection of a genuine path failure for tolerance during a failover.
They do not suit environments where rapid path-failure detection matters more than continuity.

A large pool with many datasets, large deduplication tables, or slow drives can take longer to import than the 300-second envelope.
Measure the worst-case failover time for your own system, then size `PDORemovePeriod`, `TimeOutValue`, and `MaxRequestHoldTime` together to exceed it by at least 50 percent.

These settings do not remove the I/O pause during a failover.
They reduce the chance that Hyper-V treats the pause as a permanent loss of the path.
If a failover occurs before you apply them and virtual machines pause, recovery might require a storage rescan on each host with `Update-HostStorageCache` or a restart of the affected host.
