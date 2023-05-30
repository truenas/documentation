---
title: "Running S.M.A.R.T. Tests"
description: "Provides information on how to run Self-Monitoring, Analysis and Reporting Technology (S.M.A.R.T.) tests on your TrueNAS."
weight: 40
tags:
- coresmart
- coresystemleveltasks
---

{{< toc >}}

[S.M.A.R.T.](https://en.wikipedia.org/wiki/S.M.A.R.T.) (Self-Monitoring, Analysis and Reporting Technology) is an industry standard for disk monitoring and testing.
Disks are monitored for problems using several different kinds of self-tests.
TrueNAS can adjust when and how [alerts]({{< relref "CORE/CORETutorials/SystemConfiguration/CreatingAlerts.md" >}}) for S.M.A.R.T. are issued.
When S.M.A.R.T. monitoring reports an issue, we recommend you replace that disk.
Most modern ATA, IDE, and SCSI-3 hard drives support S.M.A.R.T.
Refer to your respective drive documentation for confirmation.

S.M.A.R.T. tests run on a disk.
Running tests can reduce drive performance, so we recommend scheduling tests when the system is in a low-usage state.
Avoid scheduling disk-intensive tests at the same time!
For example, do not schedule S.M.A.R.T. tests on the same day as a disk [scrub]({{< relref "CORE/CORETutorials/Tasks/CreatingScrubTasks.md" >}}) or [resilver]({{< relref "CORE/CORETutorials/Tasks/UsingResilverPriority.md" >}}).

{{< expand "How do I check or change S.M.A.R.T. testing for a disk?" "v" >}}
Go to **Storage > Disks** and click <i class="material-icons" aria-hidden="true" title="Expand">chevron_right</i> to expand an entry.
**Enable S.M.A.R.T.** shows as **true** or **false**.

To enable or disable testing, click **EDIT DISK(S)** and find the **Enable S.M.A.R.T.** option.
{{< /expand >}}

## Manual S.M.A.R.T. Tests

To quickly test a disk for errors, go to **Storage > Disks** and select the disks to be tested.
After selecting the desired disks, click **MANUAL TEST**.

![StorageDisksManualTest Options](/images/CORE/12.0/StorageDisksManualTestOptions.png "Manual Test Options")

Next, select the test **Type**.
Each test type can differ based on the drive connection, ATA or SCSI:

### ATA Connection

* **Long** - runs S.M.A.R.T. Extended Self-Test. This scans the entire disk surface and can take many hours on large-volume disks.
* **Short** - runs S.M.A.R.T. Short Self-Test (usually under ten minutes). These are basic disk tests that vary by manufacturer.
* **Conveyance** - runs S.M.A.R.T. Conveyance Self-Test.
  This self-test routine identifies damage incurred during transporting of the device.
  This self-test routine requires only minutes to complete.
* **Offline** - runs S.M.A.R.T. Immediate Offline Test.
 Updates the S.M.A.R.T. attribute values. If the test finds errors, the errors only appear in the SMART error log.

### SCSI Connection
* **Long** - runs the *Background long* self-test.
* **Short** - runs the *Background short* self-test.
* **Offline** - runs the default self-test in foreground.
  No entry is placed in the self-test log.

For more information, refer to [smartctl(8)](https://www.unix.com/man-page/suse/8/smartctl/).

Click **START** to begin the test.
Depending on the test type you choose, the test can take some time to complete.
TrueNAS generates alerts when tests discover issues.

{{< expand "Where can I view the test results?" "v" >}}
Go to **Storage > Disks**, expand an entry, and click **S.M.A.R.T. TEST RESULTS**.
From the **[Shell]({{< relref "CORE/CORETutorials/UsingShell.md" >}})**, use `smartctl` and the name of the drive: `smartctl -l selftest /dev/ada0`.
{{< /expand >}}

## Automatic S.M.A.R.T. Tests

Go to **Tasks > S.M.A.R.T. Tests** and click **ADD**.

![TasksSMARTTestsAdd](/images/CORE/12.0/TasksSMARTTestsAdd.png "Add recurring S.M.A.R.T. test")

Select the **Disks** to test, **Type** of test to run, and **Schedule** for the task.

{{< hint type=important >}}
S.M.A.R.T. tests can offline disks! Avoid scheduling S.M.A.R.T. tests simultaneously with scrub or resilver operations.
{{< /hint >}}

Saved schedules appear in the **Tasks > S.M.A.R.T. Tests** list.

{{< expand "CLI" "v" >}}
To verify the schedule is saved, you can open the [shell]({{< relref "CORE/CORETutorials/UsingShell.md" >}}) and enter `smartd -q showtests`.
{{< /expand >}}

## Service Options

You must [enable S.M.A.R.T. service]({{< relref "CORE/CORETutorials/Services/ConfiguringSMART.md" >}}) to run automatic S.M.A.R.T. tests.

{{< expand "RAID controllers?" "v" >}}
Disable the S.M.A.R.T. service when using a RAID disk controller.
The controller monitors S.M.A.R.T. separately and marks disks as a **Predictive Failure** on a test failure.
{{< /expand >}}

{{< taglist tag="coresmart" limit="10" >}}

{{< taglist tag="coresystemleveltasks" limit="10" title="Related System Level Tasks Articles" >}}
