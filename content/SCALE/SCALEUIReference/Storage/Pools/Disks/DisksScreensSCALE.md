---
title: "Disks Screens"
description: "This article provides information on the settings found on and functions of the Disks Screens."
weight: 10
aliases:
- /scale/scaleuireference/storage/disksscale/
- /scale/scaletutorials/storage/disksscale/
tags:
- scaledisks
- scalesmart
- scaledevices
- scalepools
- scalestorage
---


{{< toc >}}


The **Disks** screen displays a list of the physical drives (disks) installed in the system. 
The list includes the names, serial numbers, sizes, and pools for each system disk. 

![DisksScreen](/images/SCALE/22.12/DisksScreen.png "Disks Screen") 

Use the **Columns** dropdown list to select options to customize disk the information displayed. 
Options are **Select All**, **Serial** (the disk serial number), **Disk Size**, **Pool** (where the disk is in use), **Disk Type**, **Description**, **Model**, **Transfer Mode**, **Rotation Rate (RPM)**, **HDD Standby**, **Adv. Power Management**, **Enable S.M.A.R.T.**, **S.M.A.R.T. extra options**, and **Reset to Defaults**. 
Each option displays the information you enter in the **Edit Disk** screen or when you install the disk. 

Selecting the checkbox to the left of the disk displays the **[Batch Operations](#batch-operations)** options. 
The checkbox at the top of the table selects all disks in the system. Select again to clear the checkboxes.

**Storage** at the top of the screen to return to the **[Storage Dashboard]({{< relref "StorageDashboardScreen.md" >}})**.

## Disks Screen - Expanded Disk 
Click anywhere on a disk row to expand it and show the traits specific to that disk and available option. 
{{< expand "Click Here for More Information" "v" >}}
The expanded view of a disk includes details for the disk and options to edit disk properties, run SMART test and view the test results, and in some instances the ability to wipe the disk.

![DisksScreenWithDiskExpanded](/images/SCALE/22.12/DisksScreenWithDiskExpanded.png "Disk Details") 

**Edit** opens the **[Edit Disk](#edit-disk-screen)** screen.

**Manual Test** opens the **[Manual S.M.A.R.T. test](#manual-test-dialog)** where you can initiate a S.M.A.R.T. test of the disk.

**S.M.A.R.T. Test Results** opens the **[S.M.A.R.T. Test Results if *diskname*](#smart-test-results-if-diskname-screen)** screen with the results of each S.M.A.R.T. test run for that disk.

**Wipe** opens the **[Wipe Disk](#wipe-disk-dialogs)** dialog. 
{{< /expand >}}

### Batch Operations
Selecting a checkbox to the left of a disk on the **Disks** screen displays the **Batch Operations** functions: **Edit Disk(s)** and **Manual Test**.

**Edit Disk(s)** opens the **[Bulk Edit Disks](#bulk-edit-disks)** screen.

**Manual Test** opens the **[Manual SMART Test]()** dialog with a list of the disk(s) selected.

#### Bulk Edit Disks
The **Bulk Edits Disks** screen allows you to make changes to disk settings for multiple disks at the same time.
{{< expand "Click Here for More Information" "v" >}}

![BulkEditDisksScreen](/images/SCALE/22.12/BulkEditDisksScreen.png "Bulk Edit Disks Screen") 

The screen lists the device names for each selected disk in the **Disks to be edited** section.

| Setting | Description |
|---------|-------------|
| **HDD Standby** | Select the minutes of inactivity before the drive enters standby mode from the dropdown list. Options are **Always On** or **5**, **10**, **20**, **30**, **60**, **120**, **240**, **300**, and **330**. For more information read this [forum post|(https://forums.freenas.org/index.php?threads/how-to-find-out-if-a-drive-is-spinning-down-properly.2068/) describing identifying spun down drives. Temperature monitoring is disabled for standby disk. |
| **Advanced Power Management** | Select the power management profile from the dropdown list. Options are **Disabled**, **Level 1 - Minimum power usage with Standby (spindown)**, **Level 64 - Intermediate power usage with Standby**, **Level 127 - Maximum power usage with Standby**, **Level 128 - Minimum power usage without Standby (no spindown)**, **Level 192 - Intermediate power usage without Standby**, and **Level 254 - Maximum performance, maximum power usage**. |
| **Enable S.M.A.R.T.**  | Select to enable and allow the system to conduct periodic [S.M.A.R.T. tests](http://10.220.0.219/ui/--docurl--/tasks.html/#s-m-a-r-t-tests). |
| **S.M.A.R.T. Extra Options** | Ente additional [smartctl(8)](https://www.smartmontools.org/browser/trunk/smartmontools/smartctl.8.in). |
{{< /expand >}}

### Manual S.M.A.R.T. Test Dialog
The **Manual S.M.A.R.T. Test** dialog displays the name of the selected disk(s) and the option to specify the type of test you want to run outside of a scheduled S.M.A.R.T. test.
{{< expand "Click Here for More Information" "v" >}}

![ManualSmartTestDialog](/images/SCALE/22.12/ManualSmartTestDialog.png "Manual SMART Test Dialog") 

| Setting | Description |
|---------|-------------|
| **Long** | Runs SMART Extended Self Test. This scans the entire disk surface and can take many hours on large-volume disks. |
| **Short** | Runs SMART Short Self Test (usually under ten minutes). These are basic disk tests that vary by manufacturer. |
| **Conveyance** | Runs a SMART Conveyance Self Test. This self-test routine is intended to identify damage incurred during transporting of the device. This self-test routine requires only minutes to complete. |
| **Offline** | Runs SMART Immediate Offline Test. The effects of this test are visible only in that it updates the SMART Attribute values, and if the test finds errors, they appear in the SMART error log. |

**Start** begins the test. Depending on the test type selected, the test can take some time to complete. TrueNAS generates alerts when tests discover issues.

For information on automated S.M.A.R.T. testing, see the [S.M.A.R.T. tests]({{< relref "SMARTTestsSCALE.md" >}}) article.
{{< /expand >}}

### S.M.A.R.T. Test Results if *diskname* Screen
The **S.M.A.R.T. Test Results if *diskname*** lists test results for the selected disk.
{{< expand "Click Here for More Information" "v" >}}
The **Storage** and **Disks** breadcrumbs return to other storage pages. 
**Storage** opens the **Storage Dashboard** and **Disks** opens the **Disks** screen.

![SMARTTestResultsofDiskExpanded](/images/SCALE/22.12/SMARTTestResultsofDiskExpanded.png "S.M.A.R.T. Test Results for A Disk Screen") 

Customize the information displayed with the **Columns** option. 
Options are **Unselect All** (toggles to **Select All**), **Description**, **Status**, **Remaining**, **Lifetime**, **Error**, and **Reset to Defaults**.
**Unselect All** removes all information except the **ID** number. 
Expand the row to see the **Description**, Status, Remaining, Lifetime, and Error information for the test ID.

![SMARTTestResultsExpandedAfterUnselectAll](/images/SCALE/22.12/SMARTTestResultsExpandedAfterUnselectAll.png "S.M.A.R.T. Test Results Expanded after Unselect All") 

The **Select All** option displays all information on the table view and eliminates the expand function for the tests listed.

#### SMART Test Result Information
These options, except the ID, appear on the **Columns** dropdown list.

| Option | Description |
|--------|-------------|
| **ID** | The test identification number assigned by the system. |
| **Description** | Type of test run and the status of the system. For example, **Short offline** indicating the test type is **Short** while the system is **offline** when the test ran. |
| **Status** | Lists the test status. Options are **Success** or **Fail**. |
| **Remaining** | How much of the test is left to perform. If the test encounters an error, the field shows at what point in the test the error occurs. A value of **0** means the test completed and with no errors encountered. |
| **Lifetime** | The age of the disk when the test ran. |
| **Error** | Displays details about any error encountered during the test. Displays **N/A** if no error was encountered during the test. |
  
{{< /expand >}}
### Wipe Disk Dialogs
The option to wipe a disk only displays when a disk is unused by a pool. **Wipe** opens three dialogs, one to select the method, a confirmation dialog, and a progress dialog that includes the option to abort the process.
{{< expand "Click Here for More Information" "v" >}}
The **Wipe Disk *diskname*** opens after clicking **Wipe** on the expanded view of a disk on the **Disks** screen. 

![WipeDiskDialog](/images/SCALE/22.12/WipeDiskDialog.png "Wipe Disk Dialog") 

**Method** provides options for how you want the system to wipe the disk. Options are **Quick**, **Full with zeros**, or **Full with random data**. 
See [Wiping Disks]({{< relref "/SCALE/SCALETutorials/Storage/Pools/Disks/WipingDisks.md" >}}) for more information.

**Wipe** opens the wipe disk confirmation dialog.

![WipeDiskConfirmationDialog](/images/SCALE/22.12/WipeDiskConfirmationDialog.png "Wipe Disk Confirmation Dialog") 

**Confirm** activates **Continue**, and **Continue** starts the disk wipe process and opens a progress dialog with the **Abort** button. 

![DiskWipeProgressDialog](/images/SCALE/22.12/iskWipeProgressDialog.png "Wipe Disk Progress Dialog") 

**Abort** stops the disk wipe process. At the end of the disk wipe process a success dialog displays. **Close** closes the dialog and returns you to the **Disks** screen.
{{< /expand >}}

## Edit Disk Screen
The **Edit Disk** screen allows users to configure general disk, power management, temperature alert, S.M.A.R.T., and SED settings for system disks not assigned to a pool. 
{{< expand "Click Here for More Information" "v" >}}

![EditDiskScreen](/images/SCALE/22.12/EditDiskScreen.png "Edit Disk Screen")

The **Edit Disk** screen, accessed from the **[Devices]({{< relref "DevicesScreensSCALE.md" >}})** screen, displays the same settings found on the **Edit Disk**.  

### General Settings

| Setting | Description |
|---------|-------------|
| **Name** | Displays the current name of the disk. To change, enter a Linux disk device name. |
| **Serial** | Displays the serial number for the selected disk. To change, enter the disk serial number. |
| **Description** | Enter notes about this disk. |

### Power Management Settings

| Setting | Description |
|---------|-------------|
| **HDD Standby** | Select a value from the dropdown list of options or leave set to the default **Always On**. This specifies the minutes of inactivity before the drive enters standby mode. This [forum post](https://www.truenas.com/community/threads/how-to-find-out-if-a-drive-is-spinning-down-properly.2068/) describes identifying spun down drives. Temperature monitoring is disabled for standby disks. |
| **Advanced Power Management** | Select a power management profile from the dropdown list of options that include **Disabled** (the default setting), **Level 1 - Minimum power usage with Standby (spindown)**, **Level 64 - Intermediate power usage with Standby**, **Level 127 - Maximum power usage with Standby**, **Level 128 - Minimum power usage without Standby (no spindown)**, **Level 192 - Intermediate power usage without Standby**, or **Level 254 - Maximum performance, maximum power usage**. |

### Temperature Alerts Settings

| Setting | Description |
|---------|-------------|
| **Critical** | Enter a threshold temperature in Celsius. If the drive temperature is higher than this value, it creates a LOG_CRIT level log entry and sends an email to the address entered in the [Alerts]({{< relref "/SCALE/SCALEUIReference/TopToolbar/Alerts/EmailScreens.md" >}}). Enter **0** to disable this check. |
| **Difference** | Enter a value in degrees Celsius that triggers a report if the temperature of a drive changes by this value since the last report. Enter **0** to disable this check. |
| **Informational** | Enter a value in degrees Celsius that triggers a report if drive temperature is at or above this temperature. Enter **0** to disable this check. |

#### S.M.A.R.T./SED Settings

| Setting | Description |
|---------|-------------|
| **Enable S.M.A.R.T.** | Select to enable the system to conduct periodic [S.M.A.R.T. tests]({{< relref "SMARTTestsSCALE.md" >}}). |
| **S.M.A.R.T. extra options** | Enter additional [smartctl(8)](https://www.unix.com/man-page/suse/8/smartctl/) options. |
| **SED Password** | Enter a password to set or change the password of the SED for this disk and to use instead of the global SED password. |
| **Clear SED Password** | Select to clear the SED password for this disk. |
{{< /expand >}}

{{< taglist tag="scaledisks" limit="10" >}}
{{< taglist tag="scalesmart" limit="10" title="Related SMART Test Articles" >}}
{{< taglist tag="scalesdevices" limit="10" title="Related Devices Articles" >}}
