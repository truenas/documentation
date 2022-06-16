---
title: "S.M.A.R.T. Tests"
weight: 60
---

{{< toc >}}

[S.M.A.R.T.](https://en.wikipedia.org/wiki/S.M.A.R.T.) (Self-Monitoring, Analysis and Reporting Technology) is a standard for disk monitoring and testing.
You can monitor disks for problems using different kinds of self-tests.
TrueNAS can adjust when it issues S.M.A.R.T. alerts.
When S.M.A.R.T. monitoring reports a disk issue, we recommend you replace that disk.
Most modern ATA, IDE, and SCSI-3 hard drives support S.M.A.R.T.
Refer to your respective drive documentation for confirmation.

![SMARTTestsSCALE](/images/SCALE/SMARTTestsSCALE.png "S.M.A.R.T. Tests")

TrueNAS runs S.M.A.R.T. tests on disks.
Running tests can reduce drive performance, so we recommend scheduling tests when the system is in a low-usage state.
Avoid scheduling disk-intensive tests at the same time!
For example, don't schedule S.M.A.R.T. tests on the same day as a disk [scrub]({{< relref "ScrubTasksSCALE.md" >}}) or other Data Protection task.

{{< expand "How do I check or change S.M.A.R.T. testing for a disk?" "v" >}}
Go to **Storage**, then click the **Disks** drop-down and select **Disks**.

Click the <i class="material-icons" aria-hidden="true">expand_more</i> in a disk's row to expand it.
*Enable S.M.A.R.T.* shows as *true* or *false*.

To enable or disable testing, click **EDIT** and find the **Enable S.M.A.R.T.** option.
{{< /expand >}}

## Manual S.M.A.R.T. Test

To quickly test one or more disk for errors, select the disks you want to test and click **MANUAL TEST**.

![SMARTTestsQuickSCALE](/images/SCALE/SMARTTestsQuickSCALE.png "Manual Test Options")

Next, select the test **Type**.
Test types differ based on the drive connection, ATA or SCSI:

{{< hint info >}}
Note: We currently do not support manual S.M.A.R.T. tests on NVMe devices.
{{< /hint >}}
{{< tabs "Tests by Drive Connection" >}}
{{< tab "ATA" >}}
* **Long** runs a S.M.A.R.T. Extended Self Test that scans the entire disk surface, which may take hours on large-volume disks.
* **Short** runs a basic S.M.A.R.T. Short Self Test (usually under ten minutes) that varies by manufacturer.
* **Conveyance** runs a S.M.A.R.T. Conveyance Self Test (usually only minutes) that identifies damage incurred while transporting the device.
* **Offline** runs a S.M.A.R.T. Immediate Offline Test that updates the S.M.A.R.T. Attribute values. Errors will appear in the S.M.A.R.T. error log.

{{< /tab >}}
{{< tab "SCSI" >}}
* **Long** runs the "Background long" self-test.
* **Short** runs the "Background short" self-test.
* **Offline** runs the default self-test in the foreground, but doesn't place an entry in the self-test log.
{{< /tab >}}
{{< /tabs >}}

For more information, refer to [smartctl(8)](https://www.unix.com/man-page/suse/8/smartctl/).

Click **START** to begin the test.
Test duration varies based on the test type you chose.
TrueNAS generates alerts when tests discover issues.

{{< expand "Where can I view the test results?" "v" >}}
Click the <i class="material-icons" aria-hidden="true">expand_more</i> in a disk's row to expand it, then click **S.M.A.R.T. TEST RESULTS**.
You can also see results in the **[Shell]({{< relref "SCALEShell.md" >}})** using `smartctl` and the name of the drive: `smartctl -l selftest /dev/ada0`.
{{< /expand >}}

## Automatic S.M.A.R.T. Tests

To schedule recurring S.M.A.R.T. tests, go to **Data Protection** and click **ADD** in the **S.M.A.R.T. Tests** window.

![SMARTTestsAddSCALE](/images/SCALE/SMARTTestsAddSCALE.png "Add recurring S.M.A.R.T. test")

{{< expand "Specific Options" "v" >}}
{{< include file="static/includes/Reference/TasksSMARTAddFields.md.part" markdown="true" >}}
{{< /expand >}}

Choose the **Disks** to test, the test **Type** to run, and the task's **Schedule**.

{{< hint warning >}}
S.M.A.R.T. tests can offline disks! Avoid scheduling S.M.A.R.T. tests simultaneously with scrub or other data protection tasks.
{{< /hint >}}

If you need the test to run on a specific **Schedule**, choose **Custom** to open the advanced scheduler.
{{< expand "Advanced Scheduler" "v" >}}
{{< include file="static/includes/SCALE/SCALEAdvancedScheduler.md.part" markdown="true" >}}
{{< /expand >}}

Saved schedules appear in the **S.M.A.R.T. Tests** window.

{{< expand "CLI" "v" >}}
To verify the schedule is saved, you can open the [shell]({{< relref "SCALEShell.md" >}}) and enter `smartd -q showtests`.
{{< /expand >}}

## Service Options

You must enable the S.M.A.R.T. service to run automatic S.M.A.R.T. tests.

{{< expand "RAID controllers?" "v" >}}
Disable the S.M.A.R.T. service when a RAID controller controlls the disks.
The controller monitors S.M.A.R.T. separately and marks disks as a **Predictive Failure** on a test failure.
{{< /expand >}}

To start the S.M.A.R.T. service, go to **System Settings > Services** and toggle **S.M.A.R.T.**.
To start the service during the TrueNAS boot process, set **Start Automatically**.

Configure the S.M.A.R.T. service by clicking <i class="material-icons" aria-hidden="true" title="Configure">edit</i>.

![SMARTTestsOptionsSCALE](/images/SCALE/SMARTTestsOptionsSCALE.png "Services SMART Options")

{{< include file="static/includes/Reference/ServicesSMARTFields.md.part" markdown="true" >}}

Click **Save** after changing any settings.
