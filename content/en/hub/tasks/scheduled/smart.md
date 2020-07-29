---
title: "Configuring S.M.A.R.T. Tests"
description: "A how-to for configuring S.M.A.R.T. tests."
---

<a href="https://en.wikipedia.org/wiki/S.M.A.R.T.">S.M.A.R.T.</a> (Self-Monitoring, Analysis and Reporting Technology) is a monitoring system for computer hard disk drives to detect and report on various indicators of reliability. Replace the drive when a failure is anticipated by S.M.A.R.T. Most modern ATA, IDE, and SCSI-3 hard drives support S.M.A.R.T. Refer to the respective drive documentation for confirmation.

The S.M.A.R.T. service must be turned on in order for a S.M.A.R.T. test to work. To turn the S.M.A.R.T. service on, go to **Services** and click the slider for *S.M.A.R.T.*. If you wish to turn the service on automatically when the TrueNAS system is turned on, check the *Start Automatically* box. 

The S.M.A.R.T. service settings can be configured by clicking <i class="fas fa-pen" aria-hidden="true" title="Pen"></i>. Don't forget to click *SAVE* when changing the settings. *Check Interval* is the amount of time, in minutes, the <a href="https://www.freebsd.org/cgi/man.cgi?query=smartd&manpath=FreeBSD+11.1-RELEASE+and+Ports">smartd</a> service checks for S.M.A.R.T. tests to run on the system. Enter a number of degrees in Celsius for the *Difference*. S.M.A.R.T. reports if the temperature of a drive has changed by the number of degrees Celsius specified since the last report. Enter a threshold temperature in Celsius for *Informational*. S.M.A.R.T. will message with a log level of LOG_INFO if the temperature is higher than the threshold specified. Enter a threshold temperature in Celsius for *Critical*. S.M.A.R.T. will message with a log level of LOG_CRIT if the temperature is higher than the threshold.

{{% pageinfo %}}
NOTE: If you would like to exclude a disk from being tested by S.M.A.R.T., go to **Storage > Disks**, select a disk, and click *EDIT DISK(S)*.
Unset *Enable S.M.A.R.T.*.
{{% /pageinfo %}}

## Automatic S.M.A.R.T. Test

After enabling the service, go to **Tasks > S.M.A.R.T. Tests** and click *ADD*. All disks can be selected for testing by setting *All Disks*. Otherwise, select the desired disks from the *Disks* dropdown. Select a test type from the *Type* dropdown. Each test type is slightly different based on the drive connection-- SCSI or ATA. Here are the test type descriptions: 

* offline - [ATA] runs SMART Immediate Offline Test. The effects of this test
  are visible only in that it updates the SMART Attribute values, and if errors
  are found they will appear in the SMART error log.

* offline - [SCSI] runs the default self test in foreground. No entry is placed
  in the self test log.

* short - [ATA] runs SMART Short Self Test (usually under ten minutes).

* short - [SCSI] runs the "Background short" self-test.

* long - [ATA] runs SMART Extended Self Test (tens of minutes to several hours).

* long - [SCSI] runs the "Background long" self-test.

* conveyance - [ATA only] runs a SMART Conveyance Self Test (minutes). This
  self-test routine is intended to identify damage incurred during transporting
  of the device. This self-test routine should take on the order of minutes to
  complete.

For more information, refer to <a href="https://www.smartmontools.org/browser/trunk/smartmontools/smartctl.8.in">smartctl(8)</a>. An optional description can be specified. Finally, select a schedule for the S.M.A.R.T. test. If a custom schedule is desired, select *Custom* and fill out the custom scheduler to meet your needs. The custom scheduler can accept standard [cron input strings](https://www.freebsd.org/cgi/man.cgi?query=crontab&sektion=5) for the *Minutes*, *Hours*, and *Days*.

## Manual S.M.A.R.T. Test

If an automatic S.M.A.R.T. test is not desired, manual tests can be run. Go to **Storage > Disks** and select the disks to be tested. After selecting the desired disks, click *MANUAL TEST*. Next, select the test type (descriptions above) and click *START*. 
