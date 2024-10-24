---
title: "Disks"
description: "Describes UI screens and dialogs related to disk operations."
geekdocCollapseSection: true
weight: 20
tags:
 - disks
 - smart
 - pools
 - storage
---

The **Disks** screen lists the physical drives (disks) installed in the system.
The list includes the names, serial numbers, sizes, and pools for each system disk.

{{< trueimage src="/images/SCALE/Storage/DisksScreen.png" alt="Disks Screen" id="Disks Screen" >}}

Use the **Columns** dropdown list to select options to customize disk the information displayed.
Options are **Select All**, **Serial** (the disk serial number), **Disk Size**, **Pool** (where the disk is in use), **Disk Type**, **Description**, **Model**, **Transfer Mode**, **Rotation Rate (RPM)**, **HDD Standby**, **Adv. Power Management**, **Enable S.M.A.R.T.**, **S.M.A.R.T. extra options**, and **Reset to Defaults**.
Each option displays the information you enter in the **Edit Disk** screen or when you install the disk.

Select the checkbox to the left of a disk to display the **[Batch Operations](#batch-operations)** options.
The checkbox at the top of the table selects all disks in the system. Select again to clear the checkboxes.

**Storage** in the breadcrumb at the top of the screen returns to the **[Storage Dashboard]({{< relref "/SCALEUIReference/Storage/_index.md" >}})**.

## Disks Screen - Expanded Disk
Click anywhere on a disk row to expand it and show the traits specific to that disk and available options.
The expanded view of a disk includes details for the disk and options to edit disk properties, run a SMART test and view the test results, and in some instances the ability to wipe the disk.

{{< trueimage src="/images/SCALE/Storage/DiskScreenExpandedDiskWithWipeOption.png" alt="Disk Details" id="Disk Details" >}}

**Edit** opens the **[Edit Disk](#edit-disk-screen)** screen.

**Manual Test** opens the **[Manual S.M.A.R.T. test](#manual-test-dialog)** where you can initiate a S.M.A.R.T. test of the disk.

**S.M.A.R.T. Test Results** opens the **[S.M.A.R.T. Test Results of *diskname*](#smart-test-results-of-diskname-screen)** screen with the results of each S.M.A.R.T. test run for that disk.

**Wipe** opens the **[Wipe Disk](#wipe-disk-dialogs)** dialog.

### Batch Operations
Select a checkbox to the left of a disk on the **Disks** screen to display the **Batch Operations** functions: **Edit Disk(s)** and **Manual Test**.

**Edit Disk(s)** opens the **[Bulk Edit Disks](#bulk-edit-disks)** screen.

**Manual Test** opens the **[Manual SMART Test]()** dialog with a list of the disk(s) selected.

#### Bulk Edit Disks
The **Bulk Edits Disks** screen allows you to change disk settings for multiple disks simultaneously.
The screen lists the device names for each selected disk in the **Disks to be edited** section.

{{< trueimage src="/images/SCALE/Storage/BulkEditDisksScreen.png" alt="Bulk Edit Disks Screen" id="Bulk Edit Disks Screen" >}}

{{< expand "Bulk Edit Disks Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **HDD Standby** | Select the minutes of inactivity before the drive enters standby mode from the dropdown list. Options are **Always On** or **5**, **10**, **20**, **30**, **60**, **120**, **240**, **300**, and **330**. For more information read this [forum post|(https://forums.freenas.org/index.php?threads/how-to-find-out-if-a-drive-is-spinning-down-properly.2068/) describing identifying spun-down drives. Temperature monitoring is disabled for the standby disk. |
| **Advanced Power Management** | Select the power management profile from the dropdown list. Options are **Disabled**, **Level 1 - Minimum power usage with Standby (spindown)**, **Level 64 - Intermediate power usage with Standby**, **Level 127 - Maximum power usage with Standby**, **Level 128 - Minimum power usage without Standby (no spindown)**, **Level 192 - Intermediate power usage without Standby**, and **Level 254 - Maximum performance, maximum power usage**. |
| **Enable S.M.A.R.T.**  | Select to enable and allow the system to conduct periodic [S.M.A.R.T. tests]({{< relref "SMARTTestsScreensSCALE.md" >}}). |
| **S.M.A.R.T. Extra Options** | Enter additional [smartctl(8)](https://www.smartmontools.org/browser/trunk/smartmontools/smartctl.8.in). |
{{< /truetable >}}
{{< /expand >}}

### Manual S.M.A.R.T. Test Dialog
The **Manual S.M.A.R.T. Test** dialog displays the name of the selected disk(s) and the option to specify the type of test you want to run outside of a scheduled S.M.A.R.T. test.

{{< trueimage src="/images/SCALE/DataProtection/ManualSMARTTestDialog.png" alt="Manual SMART Test Dialog" id="Manual SMART Test Dialog" >}}

{{< expand "Manual S.M.A.R.T. Test Settings" "v" >}}
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Long** | Runs SMART Extended Self Test. This scans the entire disk surface and can take many hours on large-volume disks. |
| **Short** | Runs SMART Short Self Test (usually under ten minutes). These are basic disk tests that vary by manufacturer. |
| **Conveyance** | Runs a SMART Conveyance Self-Test. This self-test routine is intended to identify damage incurred during transporting of the device. This self-test routine requires only minutes to complete. |
| **Offline** | Runs SMART Immediate Offline Test. The effects of this test are visible only in that it updates the SMART Attribute values, and if the test finds errors, they appear in the SMART error log. |
{{< /truetable >}}

**Start** begins the test. Depending on the test type selected, the test can take some time to complete. TrueNAS generates alerts when tests discover issues.

For information on automated S.M.A.R.T. testing, see the [S.M.A.R.T. tests]({{< relref "SMARTTestsSCALE.md" >}}) article.
{{< /expand >}}

### S.M.A.R.T. Test Results of&nbsp;*diskname*&nbsp;Screen
The **S.M.A.R.T. Test Results of *diskname*** lists test results for the selected disk.
The **Storage** and **Disks** breadcrumbs return to other storage pages. 
**Storage** opens the **Storage Dashboard** and **Disks** opens the **Disks** screen.

{{< trueimage src="/images/SCALE/DataProtection/SMARTTestResultsofDiskExpanded.png" alt="S.M.A.R.T. Test Results for A Disk Screen" id="S.M.A.R.T. Test Results for A Disk Screen" >}}

{{< expand "Customizing the Test Results Screen" "v" >}}
Customize the information displayed with the **Columns** option. 
Options are **Unselect All** (toggles to **Select All**), **Description**, **Status**, **Remaining**, **Lifetime**, **Error**, and **Reset to Defaults**.
**Unselect All** removes all information except the **ID** number.
Expand the row to see the **Description**, Status, Remaining, Lifetime, and Error information for the test ID.

{{< trueimage src="/images/SCALE/Storage/SMARTTestResultsExpandedAfterUnselectAll.png" alt="S.M.A.R.T. Test Results after Unselect All" id="S.M.A.R.T. Test Results after Unselect All" >}}

The **Select All** option displays all information on the table view and eliminates the expand function for the tests listed.

#### SMART Test Result Column Options
These options, except the ID, appear on the **Columns** dropdown list.

{{< truetable >}}
| Option | Description |
|--------|-------------|
| **ID** | The test identification number assigned by the system. |
| **Description** | Type of test run and the status of the system. For example, **Short offline** indicates the test type is **Short** while the system is **offline** when the test runs. |
| **Status** | Lists the test status. Options are **Success** or **Fail**. |
| **Remaining** | How much of the test is left to perform. If the test encounters an error, the field shows at what point in the test the error occurs. A value of **0** means the test completed and with no errors encountered. |
| **Lifetime** | The age of the disk when the test ran. |
| **Error** | Displays details about any error encountered during the test. Displays **N/A** if no error was encountered during the test. |
{{< /truetable >}}
{{< /expand >}}

{{<include file="/static/includes/addcolumnorganizer.md">}}

### Wipe Disk Dialogs
The option to wipe a disk only displays when a disk is unused by a pool.
**Wipe** opens three dialogs, one to select the method, a confirmation dialog, and a progress dialog that includes the option to abort the process.

The **Wipe Disk *diskname*** opens after clicking **Wipe** on the expanded view of a disk on the **Disks** screen.

{{< trueimage src="/images/SCALE/Storage/WipeDiskDialog.png" alt="Wipe Disk Dialog" id="Wipe Disk Dialog" >}}

**Method** provides options for how you want the system to wipe the disk.
Options are **Quick**, **Full with zeros**, or **Full with random data**.
See [Wiping Disks]({{< relref "WipingDisks.md" >}}) for more information.

**Wipe** opens the wipe disk confirmation dialog.

{{< trueimage src="/images/SCALE/Storage/WipeDiskConfirmationDialog.png" alt="Wipe Disk Confirmation Dialog" id="Wipe Disk Confirmation Dialog" >}}

**Confirm** activates **Continue**, and **Continue** starts the disk wipe process and opens a progress dialog with the **Abort** button.

{{< trueimage src="/images/SCALE/Storage/DiskWipeProgressDialog.png" alt="Wipe Disk Progress Dialog" id="Wipe Disk Progress Dialog" >}}

**Abort** stops the disk wipe process. At the end of the disk wipe process a success dialog displays.
**Close** closes the dialog and returns you to the **Disks** screen.

## Edit Disk Screen
The **Edit Disk** screen allows users to configure and manage general disk, power management, temperature alert, S.M.A.R.T., and SED settings for system disks not assigned to a pool.

{{< trueimage src="/images/SCALE/Storage/EditDiskScreen.png" alt="Edit Disk Screen" id="Edit Disk Screen" >}}

Click **Edit Disk** on the **[Devices]({{< relref "DevicesScreensSCALE.md" >}})** screen to open the the **Edit Disk** screen.

### General Settings
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Name** | Displays the current name of the disk. To change, enter a Linux disk device name. |
| **Serial** | Displays the serial number for the selected disk. To change, enter the disk serial number. |
| **Description** | Enter notes about this disk. |
{{< /truetable >}}

### Power Management Settings
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **HDD Standby** | Select a value from the dropdown list of options or leave it set to the default **Always On**. This specifies the minutes of inactivity before the drive enters standby mode. This [forum post](https://www.truenas.com/community/threads/how-to-find-out-if-a-drive-is-spinning-down-properly.2068/) describes identifying spun-down drives. Temperature monitoring is disabled for standby disks. |
| **Advanced Power Management** | Select a power management profile from the dropdown list of options that include **Disabled** (the default setting), **Level 1 - Minimum power usage with Standby (spindown)**, **Level 64 - Intermediate power usage with Standby**, **Level 127 - Maximum power usage with Standby**, **Level 128 - Minimum power usage without Standby (no spindown)**, **Level 192 - Intermediate power usage without Standby**, or **Level 254 - Maximum performance, maximum power usage**. |
{{< /truetable >}}

### Temperature Alerts Settings
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Critical** | Enter a threshold temperature in Celsius. If the drive temperature is higher than this value, it creates a LOG_CRIT level log entry and sends an email to the address entered in the [Alerts]({{< relref "/SCALEUIReference/TopToolbar/Alerts/EmailScreens.md" >}}). Enter **0** to disable this check. |
| **Difference** | Enter a value in degrees Celsius that triggers a report if the temperature of a drive changes by this value since the last report. Enter **0** to disable this check. |
| **Informational** | Enter a value in degrees Celsius that triggers a report if the drive temperature is at or above this temperature. Enter **0** to disable this check. |
{{< /truetable >}}

#### S.M.A.R.T./SED Settings
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Enable S.M.A.R.T.** | Select to enable the system to conduct periodic [S.M.A.R.T. tests]({{< relref "SMARTTestsSCALE.md" >}}). |
| **S.M.A.R.T. extra options** | Enter additional [smartctl(8)](https://www.unix.com/man-page/suse/8/smartctl/) options. |
| **SED Password** | Enter a password to set or change the password of the SED for this disk and to use instead of the global SED password. |
| **Clear SED Password** | Select to clear the SED password for this disk. |
{{< /truetable >}}
