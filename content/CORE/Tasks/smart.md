---
title: "Configuring S.M.A.R.T. Tests"
description: "How to configure S.M.A.R.T. tests for installed disks."
weight: 50
tags: ["S.M.A.R.T."]
---

[S.M.A.R.T.](https://en.wikipedia.org/wiki/S.M.A.R.T.) (Self-Monitoring, Analysis and Reporting Technology) is an industry standard for disk monitoring and testing.
Disks can be monitored for problems, with several different kinds of self-tests available.
TrueNAS can adjust when and how [alerts](/CORE/System/system-alerts/) for SMART are issued.
When S.M.A.R.T. monitoring reports an issue, it is recommended to replace that disk.
Most modern ATA, IDE, and SCSI-3 hard drives support S.M.A.R.T.
Refer to your respective drive documentation for confirmation.

S.M.A.R.T. tests are run on a disk.
Running tests can reduce drive performance, so it is recommended to schedule tests when the system is in a low-usage state.
Avoid scheduling disk-intensive tests at the same time!
For example, S.M.A.R.T. tests should not be scheduled on the same day as a disk [scrub](/CORE/Tasks/scrub/) or [resilver](/CORE/Tasks/resilver/).

{{< hint info >}}
To disable all S.M.A.R.T. testing for a disk, go to **Storage > Disks**, select a disk, and click **EDIT DISK(S)**.
Unset **Enable S.M.A.R.T.**.
{{< /hint >}}

## Manual S.M.A.R.T. Test

To quickly test a disk for errors, go to **Storage > Disks** and select the disks to be tested.
After selecting the desired disks, click *MANUAL TEST*.

![Storage Disks Manual Test Options](/images/CORE/12.0/StorageDisksManualTestOptions.png "Storage Disks Manual Test Options")
<br><br>

Next, select the test **Type**.
Each test type can be slightly different based on the drive connection (ATA or SCSI):

* Long - [ATA] runs SMART Extended Self Test. This will scan the entire disk surface and can take many hours on large-volume disks.
* Long - [SCSI] runs the "Background long" self-test.
* Short - [ATA] runs SMART Short Self Test (usually under ten minutes). These are basic disk tests that vary by manufacturer.
* Short - [SCSI] runs the "Background short" self-test.
* Conveyance - [ATA only] runs a SMART Conveyance Self Test (minutes).
  This self-test routine is intended to identify damage incurred during transporting of the device.
  This self-test routine should take on the order of minutes to complete.
* Offline - [ATA] runs SMART Immediate Offline Test.
  The effects of this test are visible only in that it updates the SMART Attribute values, and if errors are found they will appear in the SMART error log.
* Offline - [SCSI] runs the default self test in foreground.
  No entry is placed in the self test log.

For more information, refer to [smartctl(8)](https://www.smartmontools.org/browser/trunk/smartmontools/smartctl.8.in).

Click *START* to begin the test.
Depending on the chosen test type, the test can take some time to complete.

Test results can be viewed by expanding a **Storage > Disks** entry and clicking **S.M.A.R.T. TEST RESULTS**.
To find test results from the [shell](/CORE/Administrative/gui-shell/), use `smartctl` and the name of the drive: `smartctl -l selftest /dev/ada0`.

## Automatic S.M.A.R.T. Tests

To schedule recurring S.M.A.R.T. tests, go to **Tasks > S.M.A.R.T. Tests** and click **ADD**.

![Tasks SMART Tests Add](/images/CORE/12.0/TasksSMARTTestsAdd.png "Tasks SMART Tests Add")
<br><br>

Setting **All Disks** will include every disk that has S.M.A.R.T. enabled in the test.
To check if a disk has S.M.A.R.T. Enabled, go to **Storage > Disks** and expand a disk entry.
*Enable S.M.A.R.T.* shows *true* or *false*.

To specify which disks to test, leave **All Disks** unset and make selections from the **Disks** drop down.

Select a test type from the *Type* dropdown.
Test types are the same as a [manual test](/CORE/Tasks/smart/#manual-smart-test).

Finally, select a schedule for the S.M.A.R.T. test.
If a custom schedule is desired, select *Custom* and fill out the [custom scheduler](/CORE/Tasks/advanced-scheduler/) to meet your needs.

Saved schedules appear in the **Tasks > S.M.A.R.T. Tests** list.
To verify the schedule is saved, you can open the [shell](/CORE/Administrative/gui-shell/) and enter `smartd -q showtests`.

## Service Options

The S.M.A.R.T. service must be turned on for automatic S.M.A.R.T. tests to function.

{{< hint info >}}
It is recommended to disable the S.M.A.R.T. service when disks are controlled by a RAID controller.
The controller will monitor S.M.A.R.T. separately and mark disks as a *Predictive Failure* on a test failure.
{{< /hint >}}

To turn the S.M.A.R.T. service on, go to **Services** and click the slider for *S.M.A.R.T.*.
If you wish to turn the service on automatically when the TrueNAS system is turned on, set *Start Automatically*.

The S.M.A.R.T. service settings can be configured by clicking <i class="fas fa-pen" aria-hidden="true" title="Pen"></i>&nbsp; (Configure).

![Services SMART Options](/images/CORE/12.0/ServicesSMARTOptions.png "Services SMART Options")
<br><br>

*Check Interval* is the amount of time, in minutes, the [smartd](https://www.freebsd.org/cgi/man.cgi?query=smartd) service checks for S.M.A.R.T. tests to run on the system.
`smartd` wakes up at the configured interval and checks the times configured in **Tasks > S.M.A.R.T. Tests** to see if a test must begin.
For example, if a SMART test is scheduled to run every 15 minutes but the *Check Interval* is 30 minutes, then the SMART test only runs every 30 minutes when the `smartd` service activates.

Enter a number of degrees in Celsius for the *Difference*.
S.M.A.R.T. reports if the temperature of a drive has changed by the number of degrees Celsius specified since the last report.

Enter a threshold temperature in Celsius for *Informational*.
S.M.A.R.T. will message with a log level of `LOG_INFO` if the temperature is higher than the threshold specified.

Enter a threshold temperature in Celsius for *Critical*.
S.M.A.R.T. will message with a log level of `LOG_CRIT` if the temperature is higher than the threshold.

Don't forget to click *SAVE* after changing any settings.
