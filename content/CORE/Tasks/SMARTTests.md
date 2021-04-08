---
title: "S.M.A.R.T. Tests"
weight: 40
---

{{< toc >}}

[S.M.A.R.T.](https://en.wikipedia.org/wiki/S.M.A.R.T.) (Self-Monitoring, Analysis and Reporting Technology) is an industry standard for disk monitoring and testing.
Disks can be monitored for problems using several different kinds of self-tests.
TrueNAS can adjust when and how [alerts]({{< relref "Alert.md" >}}) for S.M.A.R.T. are issued.
When S.M.A.R.T. monitoring reports an issue, we recommend you replace that disk.
Most modern ATA, IDE, and SCSI-3 hard drives support S.M.A.R.T.
Refer to your respective drive documentation for confirmation.

S.M.A.R.T. tests are run on a disk.
Running tests can reduce drive performance, so we recommend scheduling tests when the system is in a low-usage state.
Avoid scheduling disk-intensive tests at the same time!
For example, S.M.A.R.T. tests should not be scheduled on the same day as a disk [scrub]({{< relref "ScrubTasks.md" >}}) or [resilver]({{< relref "ResilverPriority.md" >}}).



{{< expand "How do I check or change S.M.A.R.T. testing for a disk?" "v" >}}
Go to **Storage > Disks** and click <i class="fa fa-chevron-right"></i> to expand an entry.
*Enable S.M.A.R.T.* shows as *true* or *false*.

To enable or disable testing, click *EDIT DISK(S)* and find the *Enable S.M.A.R.T.* option.
{{< /expand >}}

## Manual S.M.A.R.T. Test

To quickly test a disk for errors, go to **Storage > Disks** and select the disks to be tested.
After selecting the desired disks, click *MANUAL TEST*.

![StorageDisksManualTest Options](/images/CORE/12.0/StorageDisksManualTestOptions.png "Manual Test Options")

Next, select the test *Type*.
Each test type can be slightly different based on the drive connection, ATA or SCSI:
{{< tabs "Tests by Drive Connection" >}}
{{< tab "ATA" >}}
* *Long* - runs SMART Extended Self Test. This will scan the entire disk surface and can take many hours on large-volume disks.
* *Short* - runs SMART Short Self Test (usually under ten minutes). These are basic disk tests that vary by manufacturer.
* *Conveyance* - runs a SMART Conveyance Self Test.
  This self-test routine is intended to identify damage incurred during transporting of the device.
  This self-test routine requires only minutes to complete.
* *Offline* - runs SMART Immediate Offline Test.
  The effects of this test are visible only in that it updates the SMART Attribute values, and if the test finds errors, they appear in the SMART error log.

{{< /tab >}}
{{< tab "SCSI" >}}
* *Long* - runs the "Background long" self-test.
* *Short* - runs the "Background short" self-test.
* *Offline* - runs the default self test in foreground.
  No entry is placed in the self test log.

{{< /tab >}}
{{< /tabs >}}

For more information, refer to [smartctl(8)](https://www.smartmontools.org/browser/trunk/smartmontools/smartctl.8.in).

Click **START** to begin the test.
Depending on the test type you choose, the test can take some time to complete.
TrueNAS generates alerts when tests discover issues.

{{< expand "Where can I view the test results?" "v" >}}
Go to **Storage > Disks**, expand an entry, and click *S.M.A.R.T. TEST RESULTS*.
From the **[Shell]({{< relref "Shell.md" >}})**, use `smartctl` and the name of the drive: `smartctl -l selftest /dev/ada0`.
{{< /expand >}}

## Automatic S.M.A.R.T. Tests

To schedule recurring S.M.A.R.T. tests, go to **Tasks > S.M.A.R.T. Tests** and click *ADD*.

![TasksSMARTTestsAdd](/images/CORE/12.0/TasksSMARTTestsAdd.png "Add recurring S.M.A.R.T. test")

{{< expand "Specific Options" "v" >}}
{{< include file="static/includes/TasksSMARTAddFields.md.part" markdown="true" >}}
{{< /expand >}}

Choose the *Disks* to test, *Type* of test to run, and *Schedule* for the task.

{{< hint warning >}}
SMART tests can offline disks! Avoid scheduling S.M.A.R.T. tests simultaneously with scrub or resilver operations.
{{< /hint >}}

When the test must run on a very specific *Schedule*, set this to *Custom* to open the advanced scheduler.
{{< expand "Advanced Scheduler" "v" >}}
{{< include file="static/includes/AdvancedScheduler.md.part" markdown="true" >}}
{{< /expand >}}

Saved schedules appear in the **Tasks > S.M.A.R.T. Tests** list.

{{< expand "CLI" "v" >}}
To verify the schedule is saved, you can open the [shell]({{< relref "Shell.md" >}}) and enter `smartd -q showtests`.
{{< /expand >}}

## Service Options

The S.M.A.R.T. service must be enabled for automatic S.M.A.R.T. tests to run.

{{< expand "RAID controllers?" "v" >}}
Disable the S.M.A.R.T. service when disks are controlled by a RAID controller.
The controller monitors S.M.A.R.T. separately and marks disks as a **Predictive Failure** on a test failure.
{{< /expand >}}

To start the S.M.A.R.T. service, go to **Services** and toggle *S.M.A.R.T.*.
To start the service during the TrueNAS boot process, set *Start Automatically*.

Configure the S.M.A.R.T. service by clicking <i class="fa fa-pencil" aria-hidden="true" title="Pencil"></i> (Configure).

![ServicesSMARTOptions](/images/CORE/12.0/ServicesSMARTOptions.png "Services SMART Options")

{{< include file="static/includes/TasksSMARTAddFields.md.part" markdown="true" >}}

Don't forget to click *SAVE* after changing any settings.
