---
title: "Disks"
geekdocCollapseSection: true
weight: 30
---

{{< toc >}}

The *Disks* page displays the names, serieal numbers, sizes, and pools of all the system's physical drives. Users can customize what disk specs to display using the *Columns* drop-down*.

Clicking the the <i class="material-icons" aria-hidden="true" title="Expand">chevron_right</i> in a disk's row will expand it to show the traits specific to that disk.

![DisksSCALE](/images/SCALE/DisksSCALE.png "Disks")

{{< tabs "Disks" >}}
{{< tab "Managing Disks" >}}
## Managing Disks

To manage disks, go to **Storage** and click *Disks*, then select *Disks*.

The *Disks* page allows users to edit disks, perform manual tests, and view S.M.A.R.T. test results. Users may also delete obsolete data off an unused disk.

### Editing Disks

Clicking *Edit* allows users to configure general disk settings, as well as power mangement, temperature alerts, and S.M.A.R.T./SED settings.

![EditDiskSCALE](/images/SCALE/EditDiskSCALE.png "Edit Disks")

#### General

| Setting | Description |
|---------|-------------|
| Name | FreeBSD disk device name. |
| Serial | Serial number for this disk. |
| Description | Notes about this disk. |

#### Power Management

| Setting | Description |
|---------|-------------|
| HDD Standby | Minutes of inactivity before the drive enters standby mode. This [forum post](https://forums.freenas.org/index.php?threads/how-to-find-out-if-a-drive-is-spinning-down-properly.2068/) describes identifying spun down drives. Temperature monitoring is disabled for standby disks. |
| Force HDD Standby | Allows the drive to enter standby, even when non-physical S.M.A.R.T. operations could prevent the drive from sleeping. |
| Advanced Power Managament | Select a power management profile from the menu. |

#### Temperature Alerts

| Setting | Description |
|---------|-------------|
| Critical | Threshold temperature in Celsius. If the drive temperature is higher than this value, a LOG_CRIT level log entry is created and an email is sent. 0 disables this check. |
| Difference | Report if the temperature of a drive has changed by this many degrees Celsius since the last report. 0 disables the report. |
| Informational | Report if drive temperature is at or above this temperature in Celsius. 0 disables the report. |

#### S.M.A.R.T./SED

| Setting | Description |
|---------|-------------|
| Enable S.M.A.R.T. | Enabling allows the system to conduct periodic [S.M.A.R.T. tests]({{< relref "S.M.A.R.T.TestsSCALE.md" >}}). |
| S.M.A.R.T. extra options | Additional [smartctl(8)](https://www.smartmontools.org/browser/trunk/smartmontools/smartctl.8.in) options. |
| SED Password | Set or change the password of this SED. This password is used instead of the global SED password. |
| Clear SED Password | Clear the SED password for this disk. |

### Manual Testing

To perform a manual S.M.A.R.T. test and check for errors, select the disk(s) you want to check and click *Manual Test*. 

![TestDiskSCALE](/images/SCALE/TestDiskSCALE.png "Test Disks")

* *Long* - runs SMART Extended Self Test. This will scan the entire disk surface and can take many hours on large-volume disks.
* *Short* - runs SMART Short Self Test (usually under ten minutes). These are basic disk tests that vary by manufacturer.
* *Conveyance* - runs a SMART Conveyance Self Test.
  This self-test routine is intended to identify damage incurred during transporting of the device.
  This self-test routine requires only minutes to complete.
* *Offline* - runs SMART Immediate Offline Test. The effects of this test are visible only in that it updates the SMART Attribute values, and if the test finds errors, they appear in the SMART error log.

Click *Start* to begin the test. Depending on the test type you choose, the test can take some time to complete. TrueNAS generates alerts when tests discover issues.

For information on automated S.M.A.R.T. testing, see the [S.M.A.R.T. tests]({{< relref "S.M.A.R.T.TestsSCALE.md" >}}) SCALE article.

### S.M.A.R.T. Test Results

To view a disk's S.M.A.R.T. Test Results, expand the disk and click *S.M.A.R.T. Test Results*.

![TestResultsDiskSCALE](/images/SCALE/TestResultsDiskSCALE.png "Disk S.M.A.R.T. Test Results")

Users can also view S.M.A.R.T. Test Results in **Shell** using `smartctl` and the name of the drive: `smartctl -l selftest /dev/sdb`.

### Wipe

The *Wipe* option deletes obsolete data off an unused disk.

{{< hint danger >}}
Wipe is a destructive action and results in permanent data loss!
Back up any critical data off the disk to be wiped.
{{< /hint >}}

TrueNAS only shows the *Wipe* option when the disk is not in use.
Click *Wipe* to open a dialog with additional options:

* *Quick* - Erases only the partitioning information on a disk, making it easy to reuse but without clearing other old data. Quick wipes take only a few seconds.
* *Full with zeros* - Overwrites the entire disk with zeros and can take several hours to complete.
* *Full with random* - Overwrites the entire disk with random binary code and takes even longer than *Full with zeros* to complete.

{{< hint danger >}}
Ensure all data is backed up and the disk is no longer in use.
Triple check that the correct disk is selected for the wipe.
Recovering data from a wiped disk is usually impossible.
{{< /hint >}}

After choosing the appropriate method, click *Wipe*.
A dialog asks will ask you to confirm the action.

![WipeDiskSCALE](/images/SCALE/WipeDiskSCALE.png "Wipe Disk Confirmation")

**Verify the name to ensure you have the chosen the correct disk**.
When satisfied the disk can be wiped, set *Confirm* and click *Continue*.
{{< /tab >}}

{{< tab "Importing Disks" >}}
{{< /tab >}}

{{< tab "Replacing Disks" >}}
{{< /tab >}}
{{< /tabs >}}

