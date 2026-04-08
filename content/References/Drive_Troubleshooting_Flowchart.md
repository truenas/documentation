---
title: "Drive Troubleshooting Flowchart"
description: "Provides detailed assistance to troubleshoot and diagnose a drive problem, or possible ZFS problem."
weight: 80
---

## Before You Begin

These flowcharts help you diagnose the most common drive and ZFS-related problems using a systematic approach.
There are five flowcharts:

- [ZFS Errors](#zfs-errors)
- [ZFS Slow Pool](#zfs-slow-pool)
- [Critical Drive Errors](#critical-drive-errors)
- [Non-Critical Drive Errors](#non-critical-drive-errors)
- [Suspect Foul Play (Altered Drive Data)](#suspect-foul-play-altered-drive-data)

Read each step carefully and answer each question exactly as written before proceeding.
For help reading *Self-Monitoring, Analysis, and Reporting Technology* (SMART) output, see [Appendix A](#appendix-a---reading-smart-output).
For commands referenced in the flowchart steps, see [Appendix B](#appendix-b---troubleshooting-commands).

You must run all commands as `root` or with `sudo`.

Seagate drives typically report Error Rates as wildly changing numbers.
This is normal behavior for Seagate drives and does not necessarily indicate a failure.
The flowcharts include specific guidance for evaluating Seagate error rates where applicable.

{{< hint type="warning" title="Warning" >}}
Some commands in these flowcharts can cause data loss if misused.
Run all commands exactly as written.
{{< /hint >}}

## ZFS Errors

If you get stuck in the same loop more than twice, stop and seek help on the [TrueNAS community forums](https://forums.truenas.com).

1. Is your pool state ONLINE or DEGRADED?
   - Yes — Go to step 3.
   - No — Go to step 2.

2. If you believe you have a drive failure, proceed to step 3.
   Otherwise, exit this procedure.

3. Is Repaired Data from the `zpool status` output greater than zero?
   - Yes — Go to step 14.
   - No — Go to step 4.

4. Do you have read, write, or checksum errors?
   - Yes — Go to step 5.
   - No — Go to step 9.

5. Run `zpool scrub poolname`.

6. Did the read, write, or checksum errors increase? Note any corrupt files.
   - Yes — Go to step 7.
   - No — Go to step 9.

7. Have you been through this loop more than twice?
   - Yes — Go to step 8.
   - No — Go to step 4.

8. Back up your data and seek additional help. Exit this procedure.

9. Run `zpool clear poolname`.

10. Run `zpool scrub poolname`.

11. Do you still have errors?
    - Yes — Go to step 7.
    - No — Go to step 12.

12. Use the TrueNAS Guide to perform things like "How to replace a drive."
    - If the problem is solved, exit this procedure.

13. Record the names of the corrupt files and delete them.

14. Run `zpool scrub poolname`.

15. Do you still have Repaired Data errors?
    - Yes — Go to step 14.
    - No — Go to step 17.

16. Have you been through this loop more than twice?
    - Yes — Go to step 18.
    - No — Go to step 3.

17. Are the errors associated only with one drive?
    - Yes — Go to step 18.
    - No — Go to step 19.

18. Troubleshoot the drive using the [Critical Drive Errors](#critical-drive-errors) and [Non-Critical Drive Errors](#non-critical-drive-errors) flowcharts.
    Exit this procedure.

19. Back up your data and seek additional help. Exit this procedure.

## ZFS Slow Pool

1. Is your used pool space over 80%?
   - Yes — The pool has limited space for write operations, which slows performance significantly.
     Usage above 90% causes severe slowdowns.
     Reduce pool usage below 80%. Exit this procedure.
   - No — Go to step 2.

2. Do you have SMR drives?
   - Yes — ZFS does not work well with SMR (Shingled Magnetic Recording) drives during write operations.
     Replace them with CMR (Conventional Magnetic Recording) drives. Exit this procedure.
   - No — Go to step 3.

3. Consider the following common causes of pool slowdowns and check each that applies:
   - Did you recently reboot?
   - Is the NAS currently busy with another operation?
   - Do you have a large number of snapshots?
   - Is swap space low?

   If none of these apply, seek additional help.

## Critical Drive Errors

{{< hint type="info" title="Media Wear Level" >}}
NA = Not applicable.

Media wear level can be reported as Wear Level or Percent Used.

Examine the Thresh value to interpret the wear level correctly:
- If Thresh is below 50: 100 = new, 0 = worn out.
- If Thresh is above 50: 0 = new, 100 = worn out.

See [Appendix A](#appendix-a---reading-smart-output) for more information on SMART attributes and values.
{{< /hint >}}

1. Can you obtain SMART data from the drive?
   - Yes — Go to step 2.
   - No — Go to step 3.

2. Does the SMART status show FAIL, Media Error, or Critical Warning?
   - Yes — Go to step 3.
   - No — Go to step 4.

3. Back up your data, then consider replacing the drive. Exit this procedure.

4. Did a SMART short or long test fail?
   - Yes — Go to step 5.
   - No — Go to step 7.

5. Run `smartctl -t long /dev/diskID`. After the test completes, run `smartctl -a /dev/diskID` to check the results. Did it pass or fail?
   - Pass — Go to step 6.
   - Fail — Go to step 3.

6. Is the problem corrected? Monitor for recurrence. A subsequent failure indicates the drive is failing.
   Exit this procedure.

7. For SSD/NVMe: is the wear level value 0?
   For HDD: is the helium value low?
   - Yes — Go to step 8.
   - No or NA — Go to step 9.

8. Does the drive require immediate replacement? Exit this procedure.

9. Is the Reallocated Sectors (ID 5) raw value less than 5?
   - Yes — Go to step 11.
   - No — Go to step 10.

10. Replace the drive due to media or wear damage. Seek additional help.
    Exit this procedure.

11. Run `smartctl -t long /dev/diskID`.

12. Run `smartctl -a /dev/diskID` to check the results. Did the test pass or fail?
    - Fail — Go to step 3.
    - Pass — Go to step 13.

13. Is Spin Retry Count (ID 10) raw value greater than 0?
    - Yes — Go to step 14.
    - No — Go to step 17.

14. Does the drive sound like it is spinning up and down repeatedly?
    - Yes — Go to step 11.
    - No — Go to step 15.

15. Check the power supply before replacing the drive — this could be a drive or power supply failure. Exit this procedure.

16. Refer to the [Non-Critical Drive Errors](#non-critical-drive-errors) flowchart. The drive has no critical errors. Exit this procedure.

17. Is Current Pending (ID 197) raw value greater than 0, or is Uncorrectable Sector (ID 198) raw value greater than 0?
    - Yes — Go to step 18.
    - No — Go to step 16.

18. Refer to the [Non-Critical Drive Errors](#non-critical-drive-errors) flowchart and consider seeking additional help.
    Exit this procedure.

## Non-Critical Drive Errors

1. Can you obtain SMART data from the drive?
   - Yes — Go to step 3.
   - No — Go to step 2.

2. Seek additional help. Exit this procedure.

3. Is UDMA CRC Errors (ID 199) raw value increasing?
   - Yes — UDMA CRC errors indicate a connection problem between the drive and the controller, such as a loose or faulty SATA cable.
     Check and replace the cable. If errors persist after replacing the cable, seek additional help.
     Exit this procedure.
   - No — Go to step 4.

4. Are Hardware ECC Recovered or MultiZone errors increasing and are they the only errors present?
   - Yes — Go to step 5. This is not an immediate issue.
   - No — Go to step 6.

5. Monitor for increasing counts.
   Hardware ECC Recovered (ID 195) raw count does not indicate a typical drive failure. Exit this procedure.

6. Are there any other errors?
   - Yes — Go to step 8.
   - No — Go to step 7.

7. Monitor these non-critical errors. Hardware ECC Recovered (ID 195) indicates the drive hardware is automatically correcting data reads, which is expected behavior. MultiZone Error (ID 200) sometimes indicates a problem when associated errors are present, but is generally not an issue on its own. Exit this procedure.

8. Is Current Pending Sectors (ID 197) raw value greater than 5?
   - Yes — Go to step 9.
   - No — Go to step 12.

9. Run `smartctl -t long /dev/diskID`. After the test completes, run `smartctl -a /dev/diskID` to check the results. Does it pass?
   - Yes — Go to step 10.
   - No — Go to step 11.

10. Monitor Current Pending Sectors (ID 197) raw value.
    If the count continues to increase, replace the drive.
    Post the full `smartctl -x /dev/diskID` output to the [TrueNAS community forums](https://forums.truenas.com) for additional evaluation.
    Exit this procedure.

11. Replace the drive. Exit this procedure.

12. Is ID 1 (Raw Read Error Rate) or ID 7 (Seek Error Rate) the error you are evaluating?
    - Yes — Go to step 14.
    - No — Go to step 13.

13. Seek additional help.
    Post the complete `smartctl -x /dev/diskID` output when requesting assistance.
    Exit this procedure.

14. Do you have a Seagate drive?
    - Yes — Go to step 15.
    - No — Go to step 16.

15. Subtract 4294967295 (0xFFFFFFFF) from the raw value to check for real failures. Seagate drives report these values differently and rapidly changing numbers can be normal. If the result is greater than zero, the drive has that many real failures. Go to step 9.

16. Replace the drive. This indicates a failure of the armature or head mechanism. Exit this procedure.

## Suspect Foul Play (Altered Drive Data)

With the prevalence of used drives on the market in 2024 and 2025, verify that a new drive is actually new before deploying it.
The following procedure uses *Field Access Reliability Metrics* (FARM) data to check if drive SMART data has been reset.
FARM data is currently available only for Seagate drives.

Western Digital has WDDA data, but reading it requires additional software not installed on TrueNAS and is not covered here.

1. Check the installed version of smartmontools: `smartctl --version`

2. Is smartmontools version 7.4 or later?
   - Yes — Go to step 4.
   - No — Go to step 3.

3. Update to smartmontools version 7.4 or later to read FARM data. Exit this procedure.

4. Obtain SMART drive data: `smartctl -a /dev/diskID`

5. Obtain FARM data: `smartctl -l farm /dev/diskID`

6. From both reports, record the following values:
   - Serial number
   - Power on hours
   - Spindle power on hours
   - Head flight hours
   - LBAs read and written

7. Compare the values between the two reports. Is there a large discrepancy?
   - Yes — Go to step 9.
   - No — Go to step 8.

8. Confirm the drive data appears valid. Exit this procedure.

9. Investigate likely data alteration on this drive. If the drive was refurbished or previously used, the discrepancy might be expected. If in doubt, seek additional help. Exit this procedure.

## Appendix A - Reading SMART Output

*Self-Monitoring, Analysis, and Reporting Technology* (SMART) attributes vary between drive types.
SATA HDDs, SAS HDDs, SATA SSDs, and NVMe SSDs use different attribute sets, and some attributes are manufacturer-specific.
The human-readable name for an attribute ID (for example, Reallocated Sectors Count for ID 5) can vary by software.

Each SMART attribute line contains the following values:

{{< truetable >}}
| Column | Description |
|--------|-------------|
| ID | The attribute identifier number. |
| VALUE | The normalized performance value for this attribute. |
| WORST | The worst VALUE observed over the life of the drive. |
| THRESH | The minimum acceptable limit for VALUE and WORST. If VALUE or WORST drops below THRESH, the drive is considered failed. A THRESH of 0 means the attribute is not life-critical (for example, Power On Hours). |
| RAW_VALUE | The non-normalized value. This is the value referenced in the flowchart steps. The content of RAW_VALUE is generally vendor-specific. |
{{< /truetable >}}

When VALUE or WORST approaches THRESH and other errors are present, plan to replace the drive.
Do not wait until a critical failure occurs, as data loss is possible.

Example — ID 5 (Reallocated Sectors Count):
Fewer than five reallocated sectors indicates a drive to monitor.
More than five indicates likely media damage.
Adjust these thresholds based on your environment and risk tolerance.

Example — ID 1 (Raw Read Error Rate) for Seagate drives:
Seagate drives report large RAW_VALUE numbers for error rates because the value represents more than a simple count of failures.
Do not interpret a large Raw Read Error Rate RAW_VALUE as a failure on Seagate drives without evaluating it using the method described in step 15 of the [Non-Critical Drive Errors](#non-critical-drive-errors) flowchart.

If you are unsure how to interpret SMART data, post the full `smartctl -x /dev/diskID` output to the [TrueNAS community forums](https://forums.truenas.com) for evaluation.

## Appendix B - Troubleshooting Commands

The commands below apply to both TrueNAS FreeBSD-based versions and TrueNAS Debian-based versions unless marked otherwise.
Replace *diskID* with your drive identifier and *poolname* with your pool name.

{{< hint type="warning" title="Warning" >}}
Some commands below have destructive potential if misused. Enter them exactly as written.
{{< /hint >}}

### Zpool Commands

{{< truetable >}}
| Command | Description |
|---------|-------------|
| `zpool status -v` | Shows pool status for all pools. |
| `zpool scrub poolname` | Starts a scrub on the specified pool. |
| `zpool clear poolname` | Clears all Read, Write, and Checksum errors for the specified pool. |
{{< /truetable >}}

### Identifying Drives

When cross-referencing by GPTID, a drive with multiple partitions shares one drive identifier.
For example, `ada0p1` and `ada0p2` are both partitions on the physical drive `ada0`.

{{< truetable >}}
| Command | Platform | Description |
|---------|----------|-------------|
| `lsblk -o +PARTUUID,NAME,LABEL,SERIAL` | SCALE | Lists disks, partitions, drive identifiers, and serial numbers for cross-referencing. |
| `glabel status` | CORE | Shows GPTID and drive identifier. Note: `nvd0` = `nvme0`. Use the SMART data commands to cross-reference the drive identifier with the serial number. |
{{< /truetable >}}

### Obtaining SMART Data

If a `smartctl` command returns an error reading the drive, try adding the interface type:
`smartctl -d interfaceType command /dev/diskID`

Example: `smartctl -d scsi -a /dev/sda`

Run `smartctl --scan` to list interface types for all available drives.

{{< truetable >}}
| Command | Platform | Description |
|---------|----------|-------------|
| `smartctl -a /dev/sda` | SCALE | Returns basic SMART data for the specified drive. |
| `smartctl -a /dev/da0` or `smartctl -a /dev/ada0` | CORE | Returns basic SMART data for the specified drive. |
| `smartctl -x /dev/sda` | SCALE | Returns extended SMART data for the specified drive. |
| `smartctl -x /dev/da0` or `smartctl -x /dev/ada0` | CORE | Returns extended SMART data for the specified drive. |
{{< /truetable >}}

### Obtaining FARM Data

{{< truetable >}}
| Command | Platform | Description |
|---------|----------|-------------|
| `smartctl -l farm /dev/sda` | SCALE | Returns the Field Access Reliability Metrics (FARM) log. |
| `smartctl -l farm /dev/da0` or `smartctl -l farm /dev/ada0` | CORE | Returns the FARM log. |
{{< /truetable >}}

### Running SMART Tests (HDD, SSD, Most NVMe)

{{< truetable >}}
| Command | Platform | Description |
|---------|----------|-------------|
| `smartctl -t short /dev/sda` | SCALE | Runs a short SMART test. |
| `smartctl -t short /dev/da0` or `smartctl -t short /dev/ada0` | CORE | Runs a short SMART test. |
| `smartctl -t long /dev/sda` | SCALE | Runs a long SMART test. |
| `smartctl -t long /dev/da0` or `smartctl -t long /dev/ada0` | CORE | Runs a long SMART test. |
| `smartctl -X /dev/sda` | SCALE | Aborts the current SMART test. |
| `smartctl -X /dev/da0` or `smartctl -X /dev/ada0` | CORE | Aborts the current SMART test. |
{{< /truetable >}}

### Running SMART Tests (NVMe, if smartctl Does Not Work)

{{< hint type="warning" title="Warning" >}}
Enter these commands exactly as written. Entering them incorrectly can be destructive.
{{< /hint >}}

Replace `nvme0` with your NVMe drive identifier.

{{< truetable >}}
| Command | Platform | Description |
|---------|----------|-------------|
| `nvme device-self-test /dev/nvme0 -s 1` | SCALE | Runs a short SMART test. |
| `nvmecontrol selftest -c 1 nvme0` | CORE | Runs a short SMART test. |
| `nvme device-self-test /dev/nvme0 -s 2` | SCALE | Runs a long SMART test. |
| `nvmecontrol selftest -c 2 nvme0` | CORE | Runs a long SMART test. |
| `nvme device-self-test /dev/nvme0 -s 0xf` | SCALE | Aborts the current SMART test. |
| `nvmecontrol selftest -c 0xf nvme0` | CORE | Aborts the current SMART test. |
{{< /truetable >}}
