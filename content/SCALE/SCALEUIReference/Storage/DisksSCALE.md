---
title: "Disks"
geekdocCollapseSection: true
weight: 30
---

{{< toc >}}

The *Disks* page displays the names, serial numbers, sizes, and pools of all the system's physical drives. Users can customize disk columns using the *Columns* drop-down*.

Clicking the the <i class="material-icons" aria-hidden="true" title="Expand">chevron_right</i> in a disk's row will expand it to show the traits specific to that disk.

![DisksSCALE](/images/SCALE/DisksSCALE.png "Disks")

{{< tabs "Disks" >}}
{{< tab "Managing Disks" >}}
## Managing Disks

To manage disks, go to **Storage** and click *Disks*, then select *Disks*.

The *Disks* page lets users edit disks, perform manual tests, and view S.M.A.R.T. test results. Users may also delete obsolete data off an unused disk.

### Editing Disks

Clicking *Edit* allows users to configure general disk settings, as well as power management, temperature alerts, and S.M.A.R.T./SED settings.

![EditDiskSCALE](/images/SCALE/EditDiskSCALE.png "Edit Disks")

#### General

| Setting | Description |
|---------|-------------|
| Name | Linux disk device name. |
| Serial | Serial number for this disk. |
| Description | Notes about this disk. |

#### Power Management

| Setting | Description |
|---------|-------------|
| HDD Standby | Minutes of inactivity before the drive enters standby mode. This [forum post](https://www.truenas.com/community/threads/how-to-find-out-if-a-drive-is-spinning-down-properly.2068/) describes identifying spun down drives. Temperature monitoring is disabled for standby disks. |
| Force HDD Standby | Allows the drive to enter standby, even when non-physical S.M.A.R.T. operations could prevent the drive from sleeping. |
| Advanced Power Management  | Select a power management profile from the menu. |

#### Temperature Alerts

| Setting | Description |
|---------|-------------|
| Critical | Threshold temperature in Celsius. If the drive temperature is higher than this value, a LOG_CRIT level log entry is created and an email is sent. 0 disables this check. |
| Difference | Report if the temperature of a drive has changed by this many degrees Celsius since the last report. 0 disables the report. |
| Informational | Report if drive temperature is at or above this temperature in Celsius. 0 disables the report. |

#### S.M.A.R.T./SED

| Setting | Description |
|---------|-------------|
| Enable S.M.A.R.T. | Enabling allows the system to conduct periodic [S.M.A.R.T. tests]({{< relref "/SCALE/SCALEUIReference/DataProtection/_index.md" >}}). |
| S.M.A.R.T. extra options | Additional [smartctl(8)](https://www.unix.com/man-page/suse/8/smartctl/) options. |
| SED Password | Set or change the password of this SED. This password is used instead of the global SED password. |
| Clear SED Password | Clear the SED password for this disk. |

### Manual Testing

Select the disk(s) you want to perform a S.M.A.R.T. test on and click *Manual Test*. 

![TestDiskSCALE](/images/SCALE/TestDiskSCALE.png "Test Disks")

* *Long* - runs SMART Extended Self Test. This will scan the entire disk surface and can take many hours on large-volume disks.
* *Short* - runs SMART Short Self Test (usually under ten minutes). These are basic disk tests that vary by manufacturer.
* *Conveyance* - runs a SMART Conveyance Self Test.
  This self-test routine is intended to identify damage incurred during transporting of the device.
  This self-test routine requires only minutes to complete.
* *Offline* - runs SMART Immediate Offline Test. The effects of this test are visible only in that it updates the SMART Attribute values, and if the test finds errors, they appear in the SMART error log.

Click *Start* to begin the test. Depending on the test type you choose, the test can take some time to complete. TrueNAS generates alerts when tests discover issues.

For information on automated S.M.A.R.T. testing, see the [S.M.A.R.T. tests]({{< relref "/SCALE/SCALEUIReference/DataProtection/_index.md" >}}) SCALE article.

### S.M.A.R.T. Test Results

To review test results, expand the disk and click *S.M.A.R.T. Test Results*.

![TestResultsDiskSCALE](/images/SCALE/TestResultsDiskSCALE.png "Disk S.M.A.R.T. Test Results")

Users can also view S.M.A.R.T. Test Results in **Shell** using `smartctl` and the name of the drive: `smartctl -l selftest /dev/sdb`.

### Wipe

The *Wipe* option deletes obsolete data off an unused disk.

{{< hint danger >}}
Wipe is a destructive action and results in permanent data loss!
Back up any critical data before wiping a disk.
{{< /hint >}}

TrueNAS only shows the *Wipe* option for unused disks.
Click *Wipe* to open a dialog with additional options:

* *Quick* - Erases only the partitioning information on a disk without clearing other old data, making it easy to reuse. Quick wipes take only a few seconds.
* *Full with zeros* - Overwrites the entire disk with zeros and can take several hours to complete.
* *Full with random* - Overwrites the entire disk with random binary code and takes even longer than *Full with zeros* to complete.

{{< hint danger >}}
Ensure you have backed-up all data and are no longer using the disk.
Triple check that you have selected the correct disk for the wipe.
Recovering data from a wiped disk is usually impossible.
{{< /hint >}}

After choosing the appropriate method, click *Wipe* and confirm the action.

![WipeDiskSCALE](/images/SCALE/WipeDiskSCALE.png "Wipe Disk Confirmation")

**Verify the name to ensure you have chosen the correct disk**.
When satisfied the disk can be wiped, set *Confirm* and click *Continue*.
{{< /tab >}}

{{< tab "Importing Disks" >}}
Go to **Storage** and click *Disks*, then select *Import Disk* to integrate UFS (BSD Unix), NTFS (Windows), MSDOS (FAT), or EXT2 (Linux) formatted disks into TrueNAS.
Importing is a one-time procedure that copies the data from that disk into a TrueNAS dataset.
TrueNAS can only import one disk at a time, and it must be installed or physically connected to the TrueNAS system.

{{< expand "What about EXT3 or EXT4 filesystems?" "v" >}}
Importing an EXT3 or EXT4 filesystem is possible in some cases, although neither is fully supported.
EXT3 journaling is not supported, so those filesystems must have an external `fsck` utility, like the one provided by [E2fsprogs utilities](http://e2fsprogs.sourceforge.net/), run on them before import.
EXT4 filesystems with extended attributes or inodes greater than 128 bytes are not supported.
EXT4 filesystems with EXT3 journaling must have an `fsck` run on them before import, as described above.
{{< /expand >}}

![ImportDiskSCALE](/images/SCALE/ImportDiskSCALE.png "Import Disk Options")

Use the drop-down menu to select the *Disk* to import.

TrueNAS attempts to detect and select the *Filesystem type*.
Selecting the MSDOSFS filesystem shows an additional *MSDOSFS locale* drop-down menu.
Use this option to select the locale when non-ASCII characters are present on the disk.

Finally, select the ZFS dataset you want to hold the copied data in *Destination Path*.

After clicking *Save*, the chosen *Disk* mounts and copies its contents to the specified dataset at the end of the *Destination Path*.
To monitor an in-progress import, open the Task Manager by clicking the <i class="material-icons" aria-hidden="true" title="Task Manager">assignment</i> in the interface top bar.
The disk unmounts after the copy operation completes.
A dialog allows viewing or downloading the disk import log.

{{< expand "The import was interrupted!" "v" >}}
Use the same import procedure to restart the task.
Choose the same *Destination Path* as the interrupted import for TrueNAS to scan the destination for previously imported files and resume importing any remaining files.
{{< /expand >}}
{{< /tab >}}

{{< tab "Replacing Disks" >}}
Hard drives and solid-state drives (SSDs) have a finite lifetime and can fail unexpectedly.
When a disk fails in a Stripe (RAID0) pool, must to recreate the entire pool and restore all data backups.
We always recommend creating non-stripe storage pools that have disk redundancy.

To prevent further redundancy loss or eventual data loss, always replace a failed disk as soon as possible!
TrueNAS integrates new disks into a pool to restore it to full functionality.

## Replacing a Disk

TrueNAS requires another disk of the same or greater capacity to replace a failed disk.
The disk must be installed in the TrueNAS system and not part of an existing storage pool.
TrueNAS wipes any data on the replacement disk as part of the process.

The TrueNAS **Dashboard** shows when a disk failure degrades a pool.

![DashboardPoolDegradedSCALE](/images/SCALE/DashboardPoolDegradedSCALE.png "Degraded Pool on the Dashboard")

Click the <i class="fa fa-database" aria-hidden="true" title="Pool Status"></i> on the pool card to go to the *Pool Status* screen and locate the failed disk.

### Offline the Failed Disk

Clicking <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> next to the failed disk shows additional operations.

![DiskOptionsSCALE](/images/SCALE/DiskOptionsSCALE.png "Options for a Failed Disk")

We recommend users *Offline* the disk before starting the replacement.
Doing so removes the device from the pool and can prevent swap issues.

{{< expand "Can I use a disk that is failing but still active?" "v" >}}
There are situations where a disk that has not completely failed can be left online to provide additional redundancy during the replacement procedure.
**We do not recommend leaving failed disks online unless you know the exact condition of the failing disk.**
Attempting to replace a heavily degraded disk without offlining it will significantly slow down the replacement process.
{{< /expand >}}

{{< expand "The offline failed?" "v" >}}
If the *Offline* operation fails with a "Disk offline failed - no valid replicas" message, go to **Storage**, click the <i class="material-icons" aria-hidden="true" title="Settings">settings</i> for the degraded pool, and select *Scrub Pool*.
When the scrub operation finishes, reopen the pool *Status* and try to *Offline* the disk again.
{{< /expand >}}

You can physically remove the disk from the system when the disk status is *Offline*.

![DiskOfflineSCALE](/images/SCALE/DiskOfflineSCALE.png "Disk Offline Status")

If the replacement disk is not already physically added to the system, add it now.

### Online the New Disk

In *Pool Status*, open the options for the *Offline* disk and click *Replace*.

![DiskReplaceSCALE](/images/SCALE/DiskReplaceSCALE.png "Disk Replace Options")

Select a new member disk and click *Replace Disk*.
The new disk must have the same or greater capacity as the disk you are replacing.
The replacement fails when the chosen disk has partitions or data present.
To **destroy** any data on the replacement disk and allow the replacement to continue, set the *Force* option.

When the disk wipe completes, TrueNAS will start replacing the failed disk. *Pool Status* updates to show the in-progress replacement.

![DiskReplaceProgressSCALE](/images/SCALE/DiskReplaceProgressSCALE.png "Disk Replacement Progress")

TrueNAS resilvers the pool during the replacement process.
For pools with large amounts of data, this can take a long time.
When the resilver is complete, the pool status returns to **Online** shows the new disk.

![DiskReplaceCompleteSCALE](/images/SCALE/DiskReplaceCompleteSCALE.png "Disk Replacement Complete")
{{< /tab >}}
{{< /tabs >}}
