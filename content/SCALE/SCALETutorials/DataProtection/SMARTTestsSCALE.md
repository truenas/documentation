---
title: "Managing S.M.A.R.T. Tests"
description: "Provides instructions on running S.M.A.R.T. tests manually or automatically, using Shell to view the list of tests, and configuring the S.M.A.R.T. test service."
weight: 60
aliases: 
tags:
- scalesmart
- scaledisks
---

{{< toc >}}

[S.M.A.R.T.](https://en.wikipedia.org/wiki/S.M.A.R.T.) or Self-Monitoring, Analysis and Reporting Technology is a standard for disk monitoring and testing.
You can monitor disks for problems using different kinds of self-tests.
TrueNAS can adjust when it issues S.M.A.R.T. alerts.
When S.M.A.R.T. monitoring reports a disk issue, we recommend you replace that disk.
Most modern ATA, IDE, and SCSI-3 hard drives support S.M.A.R.T.
Refer to your respective drive documentation for confirmation.

TrueNAS runs S.M.A.R.T. tests on disks.
Running tests can reduce drive performance, so we recommend scheduling tests when the system is in a low-usage state.
Avoid scheduling disk-intensive tests at the same time!
For example, do not schedule S.M.A.R.T. tests on the same day as a disk [scrub]({{< relref "ScrubTasksSCALE.md" >}}) or other data protection task.

{{< expand "How do I check or change S.M.A.R.T. testing for a disk?" "v" >}}
Go to **Storage**, then click **Disks** button. Select disks to be examined using the checkbox at left. Click the <i class="material-icons" aria-hidden="true">expand_more</i> to the right of the disk row to expand it.
**Enable S.M.A.R.T.** shows as **true** or **false**.

To enable or disable testing, click **EDIT** and find the **Enable S.M.A.R.T.** option.
{{< /expand >}}

## Running a Manual S.M.A.R.T. Test

To test one or more disk for errors, go to **Storage** and click the **Disks** button.

![StorageDashDisksButtonSCALE](/images/SCALE/22.12/StorageDashDisksButtonSCALE.png "Storage Dashboard Disks Button")

Select the disks you want to test using the checkboxes to the left of the disk names. Selecting multiple disks displays the **Batch Operations** options.

![StorageDisksSelectedSCALE](/images/SCALE/22.12/StorageDisksSelectedSCALE.png "Storage Dashboard Disks Selected")

Click **Manual Test**. The **Manual S.M.A.R.T. Test** dialog displays. 

{{< hint type=note >}}
Manual S.M.A.R.T. tests on NVMe devices is currently not supported.
{{< /hint >}}

![StorageDisksManualTestSCALE](/images/SCALE/22.12/StorageDisksManualTestSCALE.png "Run Manual S.M.A.R.T. Test")

Next, select the test type from the **Type** dropdown and then click **Start**.

Test types differ based on the drive connection, ATA or SCSI. 
Test duration varies based on the test type you chose.
TrueNAS generates alerts when tests discover issues.

### ATA Drive Connection Test Types
The ATA drive connection test type options are:
* **Long** runs a S.M.A.R.T. Extended Self Test that scans the entire disk surface, which may take hours on large-volume disks.
* **Short** runs a basic S.M.A.R.T. Short Self Test (usually under ten minutes) that varies by manufacturer.
* **Conveyance** runs a S.M.A.R.T. Conveyance Self Test (usually only minutes) that identifies damage incurred while transporting the device.
* **Offline** runs a S.M.A.R.T. Immediate Offline Test that updates the S.M.A.R.T. Attribute values. Errors will appear in the S.M.A.R.T. error log.
### SCSI Drive Connection Test Type
* **Long** runs the "Background long" self-test.
* **Short** runs the "Background short" self-test.
* **Offline** runs the default self-test in the foreground, but doesn't place an entry in the self-test log.

For more information, refer to [smartctl(8)](https://www.unix.com/man-page/suse/8/smartctl/).

{{< expand "Where can I view the test results?" "v" >}}
Click the <i class="material-icons" aria-hidden="true">expand_more</i> in a disk's row to expand it, then click **S.M.A.R.T. TEST RESULTS**.
You can also see results in the **[Shell]({{< relref "UseSCALEShell.md" >}})** using `smartctl` and the name of the drive: `smartctl -l selftest /dev/ada0`.
{{< /expand >}}

## Running Automatic S.M.A.R.T. Tests

To schedule recurring S.M.A.R.T. tests, go to **Data Protection** and click **ADD** in the **S.M.A.R.T. Tests** widget.

![DataProtectionAddSMARTTestSCALE](/images/SCALE/22.12/DataProtectionAddSMARTTestSCALE.png "Add S.M.A.R.T. Test")

Select the disks to test from the **Disks** dropdown list, and then select the test type to run from the **Type** dropdown list.

Next select a preset from the **Schedule** dropdown. To create a custom schedule select **Custom** to open the advanced scheduler window where you can define the schedule parameters you want to use.

{{< expand "Advanced Scheduler" "v" >}}
{{< include file="content/_includes/SCALEAdvancedScheduler.md" type="page" >}}
{{< /expand >}}

![DataProtectionSMARTTestWidgetSCALE](/images/SCALE/22.12/DataProtectionSMARTTestWidgetSCALE.png "S.M.A.R.T. Test List")

Saved schedules appear in the **S.M.A.R.T. Tests** window.

{{< hint type=important >}}
S.M.A.R.T. tests can offline disks! Avoid scheduling S.M.A.R.T. tests simultaneously with scrub or other data protection tasks.
{{< /hint >}}

Start the S.M.A.R.T. service. Go to **System Settings > Services** and scroll down to the **S.M.A.R.T.** service. If not running, click the toggle to turn the service on. Select **Start Automatically** to have this service start after after the system reboots.

![SMARTSystemServicesSCALE](/images/SCALE/22.12/SMARTSystemServicesSCALE.png "System Services S.M.A.R.T. Test")

If you have not configured the S.M.A.R.T. service yet, while the service is stopped, click <i class="material-icons" aria-hidden="true" title="Configure">edit</i> to open the service configuration form. See [Services S.M.A.R.T. Screen]({{< relref "SMARTServicesScreen.md" >}}) for more information on service settings.
Click **Save** to save settings and return to the **Services** screen.

{{< expand "RAID controllers?" "v" >}}
Disable the S.M.A.R.T. service when a RAID controller controls the disks.
The controller monitors S.M.A.R.T. separately and marks disks as a **Predictive Failure** on a test failure.
{{< /expand >}}

## Using Shell to View Scheduled Tests
{{< expand "CLI" "v" >}}
To verify the schedule is saved, you can open the [shell]({{< relref "UseSCALEShell.md" >}}) and enter `smartd -q showtests`.
{{< /expand >}}

{{< taglist tag="scalesmart" limit="10" >}}
