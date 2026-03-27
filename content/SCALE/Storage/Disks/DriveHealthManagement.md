---
title: "Drive Health Management"
description: "Provides information and considerations for drive health."
weight: 60
tags:
- disks
keywords:
- nas storage device
- enterprise data storage solutions
- nas data storage
doctype: tutorial
---

Drive Health Management (DHM) in TrueNAS monitors the condition of installed HDD and SSD drives (SAS, SATA, and NVMe) and alerts you when action is required. TrueNAS manages drive health with three layers:

- **ZFS** detects sudden failures in real time during active read and write operations.
- **TrueNAS Middleware** handles the alert logic and provides actionable notifications.
- **SMART (Self-Monitoring, Analysis, and Reporting Technology)** integrates directly into TrueNAS middleware to regularly poll drives.

TrueNAS DHM is designed to:

- Minimize data loss from drive failures.
- Provide actionable alerts and support drive replacement workflows.
- Predict failures with low false-positive rates.
- Extend drive and system lifespan.
- Keep configuration simple and automated.
- Minimize performance impact on drives and CPU.

### Enterprise Considerations

Enterprise deployments benefit from additional protections and processes built around DHM:
- Factory burn-in testing (running drives at sustained load before deployment) significantly reduces failure rates.
- TrueNAS DHM is designed to scale across large drive counts (1000+) without increasing administrative overhead.
- When an alert appears, review the alert details to determine the recommended action.
- For guidance on drive replacement or interpreting a specific alert condition, contact iXsystems support.

## How DHM Works in TrueNAS 25.10 and Later

### SMART Integration

TrueNAS integrates SMART stats collection directly into the middleware, which provides consistent handling across all supported drive types and vendors.

SMART polls drives every 90 minutes. When a polled attribute crosses a threshold indicating a likely failure, TrueNAS chooses whether to suppress the alert or notify the user. 

### ZFS as Real-Time Failure Detection

ZFS acts as the primary detector for sudden, unexpected drive failures.
Unlike SMART polling, which runs on a schedule, ZFS detects failures immediately when a read or write operation returns an error.

When ZFS encounters an unrecoverable error, it marks the affected VDEV or disk as faulted and generates an alert.
ZFS and SMART work together: SMART catches degrading drives before they fail, while ZFS catches drives that fail without prior warning.

### Alert Logic

TrueNAS evaluates incoming SMART data and ZFS events against alert rules before generating a notification.
This filtering suppresses known-benign attribute fluctuations and only notifies users about conditions that require attention, reducing false-positive alerts by approximately 50% compared to prior releases.

**Alert Levels** can be adjusted to control notification severity.
Higher-priority alerts appear in the **[Alerts]({{< ref "/SCALE/TopToolbar/Alerts/_index.md" >}})** panel and can trigger configured [alert services]({{< ref "/SCALE/TopToolbar/Alerts/AlertSettingsScreen.md" >}}) (email, SNMP, etc.).

TrueNAS configures automated temperature alerts based on the specified maximum operating temperature of each drive.
If a drive reports a temperature that exceeds its rated maximum, TrueNAS generates an alert.

## Monitoring Drive Health

To view drive health status, go to the **Storage** dashboard and view the [Disk Health card](https://www.truenas.com/docs/scale/storage/storagedashboardscreens/#storage-health-widget).

Active alerts appear in the **[Alerts]({{< ref "/SCALE/TopToolbar/Alerts/_index.md" >}})** panel at the top right of the UI.
Click an alert to expand it and view details, including the affected disk, the attribute or event that triggered the alert, and recommended next steps.

### Alert Types

{{< truetable >}}
| Type    | Description |
|-----------------|-------------|
| **SMART Stat**  | A drive-reported diagnostic value crossed a failure threshold. The alert identifies the specific attribute (for example, Reallocated Sector Count) and the current value. |
| **ZFS Event**   | ZFS detected an I/O error or checksum failure during a read or write operation. These alerts indicate the disk might have failed or is failing. |
| **Temperature** | Drive temperature exceeded the rated maximum from the manufacturer specification. |
{{< /truetable >}}


## SMART Tests Options for Community Edition

{{< hint type=note >}}
TrueNAS handles SMART testing through its automated DHM polling.
The manual SMART test options described in this section are primarily intended for Community Edition users who want additional drive validation beyond the automated 90-minute polling.
{{< /hint >}}

### Cron Jobs

You can schedule manual SMART tests using **[Cron Jobs]({{< ref "/SCALE/SystemSettings/Advanced/ManageCronJobs.md" >}})** in the TrueNAS UI.

TrueNAS logs cron job output. Review the system log or configure the cron job to send output to a file for later review.

### SHORT Test

The SHORT test performs a quick, surface-level diagnostic check. It typically completes within a few minutes and has minimal performance impact on drives used in a ZFS pool. It is suitable for nightly or weekly scheduling as a routine check.

To run a SHORT test, go to **System > Shell** and run:

```
smartctl -t short /dev/sda
```

Replace `/dev/sda` with the target disk device name.

### LONG Test

The LONG test performs a full drive surface scan for periodic, deep validation. It provides a thorough validation of the entire drive surface, but has a significant negative performance impact during the test. LONG tests can also produce false-positive failure results on healthy drives.

To run a LONG test, go to **System > Shell** and run:

```
smartctl -t long /dev/sda
```

Replace `/dev/sda` with the target disk device name.

For a full reference of `smartctl` options and output interpretation, see the [smartmontools documentation](https://www.smartmontools.org/wiki/TocDoc).


### Third-Party Tools

Additional drive introspection and analysis tools are available outside of TrueNAS.
These tools can supplement DHM data with more detailed vendor-specific diagnostics.
Consult the documentation for any third-party tool before running it against drives in an active ZFS pool.
