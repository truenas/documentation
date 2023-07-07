---
title: "Pool Creation Wizard Screens"
description: "Provides information on the settings and functions found on the Pool Creation Wizard screens."
weight: 30
aliases: 
tags: 
- scalepools
- scalestorage
- scalevdevs
- scaledisks
---

{{< toc >}}

The **Pool Creation Wizard** includes the wizard configuration screens, a configuration preview, and an inventory list of disks available on the system.

The **Create Pool (new)** button at the top right of the **Storage Dashboard** screen opens the **Pool Creation Wizard**. 

{{< trueimage src="/images/SCALE/23.10/PoolCreationWizard.png" alt="Pool Creation Wizard" id="1: Pool Creation Wizard" >}}

The **Leave Feedback** link in the **Pool Creation Wizard** heading opens a feedback window that allows you to rate the web UI **Pool Creation Wizard** screen and leave comments. 
The **File Ticket** link opens the **File Ticket** panel you can also access from the **System Settings > General** screen **File Ticket** button.

{{< trueimage src="/images/SCALE/23.10/LeaveFeedbackWindow.png" alt="Leave Feedback Window" id="2: Leave Feedback Window" >}}

The **Configuration Preview** displays a list of Pool and VDEV settings that dynamically update as you configure settings in the wizard.

The **Inventory** area displays the number of available disks by size on the system. This list dynamically updates as disks move to VDEVs added in the wizard.

## Pool Creation Wizard Screens

The **Pool Creation Wizard** has seven configuration screens, numbered in sequence, to use to create a pool and add VDEVs on your TrueNAS system. 

**Back** and **Next** move to either the previous or next screen. 
**Save And Go To Review** saves settings and goes directly to the **Review** wizard screen.

### General Info Wizard Screen

The **General Info** screen includes two default settings, **Name** and **Encryption**. 

{{< expand "Click Here for More Information" "v" >}}

{{< trueimage src="/images/SCALE/23.10/PoolCreationWizardGeneralInfo.png" alt="Pool Creation Wizard General Info" id="3: Pool Creation Wizard General Info" >}}

**Name** is a required field. 
Enter a name for the pool of up to 50 characters in length that follows [ZFS naming conventions](https://docs.oracle.com/cd/E23824_01/html/821-1448/gbcpt.html). 
Use lower-case alpha characters to avoid potential problems with sharing protocols. 
Names can include numbers and special characters such as underscore (_), hyphen (-), colon (:), or a period (.). 

**Encryption** applies key type encryption to the pool. 
Select to enable [ZFS encryption](https://zfsonlinux.org/manpages/0.8.3/man8/zfs.8.html) for this pool and all datasets (or zvols) created within the pool. 
See [Storage Encryption]({{< relref "EncryptionScale.md" >}}) for more information on using SCALE storage encryption. An encryption warning dialog displays with a **Confirm** checkbox. Select to enable the **I Understand** button. **I Understand** allows you to continue adding the pool with encryption applied.

{{< hint type="Warning" >}}
Applying encryption at the pool level also encrypts all datasets (and zvols) within the pool. 

Keep the encryption key file in a safe location where you perform regular backups. Losing the encryption key file results in lost data you cannot recover.
{{< /hint >}}

If system disks have data exported from pools on them, a warning displays with a checkbox for the pool name.

{{< trueimage src="/images/SCALE/23.10/PoolCreationWizardGenInfoExportedPool.png" alt="General Info With Exported Pools" id="4: General Info with Exported Pools" >}}

If system disks have non-unique serial numbers, a warning displays with additional fields.

{{< trueimage src="/images/SCALE/23.10/PoolCreationWizardGenInfoNonUniqueSerialNums.png" alt="Non-Unique Serial Numbers Screen" id="5: Non-Unique Serial Numbers Screen" >}}

**Allow non-unique serialed disks** has two radio buttons, **Allow** and **Don't Allow**.

**Allow** permits using disks with non-unique serial numbers, such as those that can occur on virtual disks, and displays them as available disks on the **Data** wizard screen. 
**Don't Allow** does not permit using disks with non-unique serial numbers.

{{< /expand >}}

### Data Wizard Screen
The **Data** wizard screen provides the option to add disks to the data VDEV. You must add a data VDEV before adding other types of VDEVs to the pool.

{{< trueimage src="/images/SCALE/23.10/PoolCreationWizardDataScreen.png" alt="Pool Creation Wizard Data Screen" id="6: Pool Creation Wizard Data Screen" >}}

{{< expand "Click Here for More Information" "v" >}}
**Layout** displays a dropdown list of VDEV layouts (**Stripe**, **Mirror**, **RAIDZ1**, **RAIDZ2**, and **RAIDZ3**). 

{{< include file="/_includes/PoolCreationWizardCommonSettings.md" type="page" >}}
{{< /expand >}}

### Manual Selection Screen
The **Manual Selection** screen allows you to add a VDEV of the type specified in the **Layout** field (on the **Data** and **Log** wizard screens) and to select the disks to add to the new VDEV. You can filter disks by type or size. 

{{< expand "Click Here for More Information" "v" >}}
**Add** displays VDEV area of the type specified in the **Layout** field. 
Click on the system field to expand the dropdown list to show a list of available system disks. 
Drag the number of disks to VDEV to add them. 

**Save Selection** creates the VDEV and closes the window.

{{< trueimage src="/images/SCALE/23.10/PoolCreationWizardManualSelectionScreen.png" alt="Manual Selection Screen" id="6: Manual Selection Screen" >}}

#### Manual Selection Settings
{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Search** | Enter the disk name or other details to search for disks matching the specified value to filter available disks in the system. |
| **Filer by Disk Type** | Filters the list of available disks displayed on the list of system disks by type (HDD or SSD). |
| **Filter by Disk Size** | Filters the list of available disks displayed on the list of system disks by size. |
| TrueNAS System | Click to expand and show the list of available disks in the system. Filter options change disks displayed on this list. |
{{< /truetable >}}

{{< /expand >}}
### Log (Optional) Wizard Screen
The wizard **Log** screen provides the option to configure a log VDEV. ZFS log devices can improve speeds of synchronous writes. 

{{< trueimage src="/images/SCALE/23.10/PoolCreationWizardLogScreen.png" alt="Pool Creation Wizard Log Screen" id="7: Pool Creation Wizard Log Screen" >}}
{{< expand "Click Here for More Information" "v" >}}
**Layout** displays a dropdown list of VDEV layouts (**Stripe** or **Mirror**). 

{{< include file="/_includes/PoolCreationWizardCommonSettings.md" type="page" >}}
{{< /expand >}}
### Spare (Optional) Wizard Screen
The **Spare** wizard screen provides the option to configure a hot spare for a drive in a data VDEV.

{{< trueimage src="/images/SCALE/23.10/PoolCreationWizardSpareScreen.png" alt="Pool Creation Wizard Spare Screen" id="8: Pool Creation Wizard Spare Screen" >}}

{{< expand "Click Here for More Information" "v" >}}

{{< include file="/_includes/PoolCreationWizardCommonSettings.md" type="page" >}}

{{< /expand >}}
### Cache (Optional) Wizard Screen
The **Cache** wizard screen provides the option to configure a ZFS L2ARC read-cache VDEV.

{{< trueimage src="/images/SCALE/23.10/PoolCreationWizardCacheScreen.png" alt="Pool Creation Wizard Cache Screen" id="9: Pool Creation Wizard Cache Screen" >}}

{{< expand "Click Here for More Information" "v" >}}

{{< include file="/_includes/PoolCreationWizardCommonSettings.md" type="page" >}}

{{< /expand >}}
### Metadata (Optional) Wizard Screen
The **Metadata** wizard screen provides the option to configure a special allocation class VDEV, for use when creating a fusion pool. This VDEV type is used to speed up metadata and small block IO.

{{< trueimage src="/images/SCALE/23.10/PoolCreationWizardMetadataScreen.png" alt="Pool Creation Wizard Metadata Screen" id="10: Pool Creation Wizard Metadata Screen" >}}

{{< expand "Click Here for More Information" "v" >}}

{{< include file="/_includes/PoolCreationWizardCommonSettings.md" type="page" >}}

{{< /expand >}}
### Dedup (Optional) Wizard Screen
The **Dedup** wizard screen provides the option to configure a VDEV to use for storing de-duplication tables. 
Dedup VDEVs must be sized for *x* GiB for each *x* TiB of general storage.

{{< trueimage src="/images/SCALE/23.10/PoolCreationWizardDedupScreen.png" alt="Pool Creation Wizard Dedup Screen" id="11: Pool Creation Wizard Dedup Screen" >}}

{{< expand "Click Here for More Information" "v" >}}

{{< include file="/_includes/PoolCreationWizardCommonSettings.md" type="page" >}}

{{< /expand >}}
### Review Wizard Screen
The **Review** wizard screen displays a summary of the pool VDEV configuration.

{{< trueimage src="/images/SCALE/23.10/PoolCreationWizardReviewScreen.png" alt="Pool Creation Wizard Review Screen" id="121: Pool Creation Wizard Review Screen" >}}

**Inspect VDEVs** opens the **Inspect VDEVs** screen that shows the VDEVs with assigned disks added to the pool.

**Start Over** clears the current pool configuration so you can start over.

**Create Pool** completes the configuration process and adds the pool.

{{< taglist tag="scalepools" limit="10" title="Related Pools Articles" >}}
{{< taglist tag="scalevdevs" limit="10" title="Related VDEV Articles" >}}
{{< taglist tag="scalestorage" limit="10" title="Related Storage Articles" >}}
