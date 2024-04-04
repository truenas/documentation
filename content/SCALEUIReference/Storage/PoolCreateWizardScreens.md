---
title: "Pool Creation Wizard"
description: "Descriptions for settings and functions found in the Pool Creation Wizard."
weight: 30
tags: 
- pools
- storage
- disks
---

The **Pool Creation Wizard** configuration screens include a configuration preview and an inventory list of disks available on the system.

**Create Pool** at the top right of the **Storage Dashboard** screen opens the **Pool Creation Wizard**.

{{< trueimage src="/images/SCALE/Storage/PoolCreationWizard.png" alt="Pool Creation Wizard" id="Pool Creation Wizard" >}}

**Configuration Preview** displays a list of pool and VDEV settings that dynamically update as you configure settings in the wizard.

**Inventory** displays the number of available disks by size on the system, and this list dynamically updates as disks move to VDEVs added in the wizard.

## Pool Creation Wizard
The **Pool Creation Wizard** has seven configuration screens, numbered in sequence, to create a pool with VDEVs.

Each wizard VDEV configuration screen includes the **Automated Disk Selection** and **Advanced Options** areas.
Click **Manual Disk Selection** to open the **[Manual Selection](#manual-selection-screen)** screen.

**Back** and **Next** move to either the previous or next wizard screen.
**Reset Step** clears the VDEV settings for the VDEV type selected. For example, **Data** VDEV configuration.
**Save And Go To Review** saves the current selections and goes directly to the **Review** wizard screen.

### General Info
The **General Info** area includes two default settings, **Name** and **Encryption**.

{{< trueimage src="/images/SCALE/Storage/PoolCreationWizardGeneralInfo.png" alt="Pool Creation Wizard General Info" id="Pool Creation Wizard General Info" >}}

**Name** is a required field.
Enter a pool name of up to 50 characters in length that follows [ZFS naming conventions](https://docs.oracle.com/cd/E23824_01/html/821-1448/gbcpt.html).
Use lower-case alpha characters to avoid potential problems with sharing protocols.
Names can include numbers and special characters such as underscore (_), hyphen (-), colon (:), or a period (.).

**Encryption** applies key type encryption to the pool.
Select to enable [ZFS encryption](https://zfsonlinux.org/manpages/0.8.3/man8/zfs.8.html) for the pool and all datasets (or zvols) created within the pool.
See [Storage Encryption]({{< relref "EncryptionScale.md" >}}) for more information on using SCALE storage encryption.
An encryption warning dialog displays with a **Confirm** checkbox.
Select to enable the **I Understand** button. **I Understand** allows you to continue adding the pool with encryption applied.

{{< hint type="Warning" >}}
Applying encryption at the pool level also encrypts all datasets (and zvols) within the pool.

Keep the encryption key file in a safe location where you perform regular backups. Losing the encryption key file results in lost data you cannot recover.
{{< /hint >}}

If system disks have data exported from pools on them, a warning displays with a checkbox for the pool name.

{{< trueimage src="/images/SCALE/Storage/PoolCreationWizardGenInfoExportedPool.png" alt="General Info With Exported Pools" id="General Info with Exported Pools" >}}

If system disks have non-unique serial numbers, a warning displays with additional fields.

{{< trueimage src="/images/SCALE/Storage/PoolCreationWizardGenInfoNonUniqueSerialNums.png" alt="Non-Unique Serial Numbers Screen" id="Non-Unique Serial Numbers Screen" >}}

**Allow non-unique serialed disks** has two radio buttons, **Allow** and **Don't Allow**.

**Allow** permits using disks with non-unique serial numbers, such as those that can occur on virtual disks, and displays them as available disks on the **Data** wizard screen.
**Don't Allow** does not permit using disks with non-unique serial numbers.

### Data Screen
The **Data** wizard screen includes the option to automatically or manually add disks to a data VDEV.
You must add a data VDEV before you can add other types of VDEVs to the pool.

{{< trueimage src="/images/SCALE/Storage/PoolCreationWizardDataScreen.png" alt="Pool Creation Wizard Data Screen" id="Pool Creation Wizard Data Screen" >}}

{{< expand "Common Pool Creation Wizard Settings" "v" >}}
The **Layout** dropdown list shows the **Stripe**, **Mirror**, **RAIDZ1**, **RAIDZ2**, **RAIDZ3**, **dRAID1**, **dRAID2**, and **dRAID3** VDEV types on the **Data** wizard screens.

{{< include file="/static/includes/PoolCreationWizardCommonSettings.md" >}}
{{< /expand >}}

### Log (Optional)
Use the **Log** wizard screen to configure a log VDEV. ZFS log devices can improve speeds of synchronous writes.

{{< trueimage src="/images/SCALE/Storage/PoolCreationWizardLogScreen.png" alt="Pool Creation Wizard Log Screen" id="Pool Creation Wizard Log Screen" >}}

{{< expand "Common Pool Creation Wizard Settings" "v" >}}
The **Layout** dropdown list includes the **Stripe** or **Mirror** types.

{{< include file="/static/includes/PoolCreationWizardCommonSettings.md" >}}
{{< /expand >}}

### Spare (Optional)
Use the **Spare** wizard screen to configure a hot spare for a drive in a data VDEV.

{{< trueimage src="/images/SCALE/Storage/PoolCreationWizardSpareScreen.png" alt="Pool Creation Wizard Spare Screen" id="Pool Creation Wizard Spare Screen" >}}

{{< expand "Common Pool Creation Wizard Settings" "v" >}}
{{< include file="/static/includes/PoolCreationWizardCommonSettings.md" >}}

{{< /expand >}}

### Cache (Optional)
Use the **Cache** wizard screen to configure a ZFS L2ARC read-cache VDEV.

{{< trueimage src="/images/SCALE/Storage/PoolCreationWizardCacheScreen.png" alt="Pool Creation Wizard Cache Screen" id="Pool Creation Wizard Cache Screen" >}}

{{< expand "Common Pool Creation Wizard Settings" "v" >}}
{{< include file="/static/includes/PoolCreationWizardCommonSettings.md" >}}
{{< /expand >}}

### Metadata (Optional)
Use the **Metadata** wizard screen to configure a special allocation class VDEV. Metadata VDEVS are used when creating a fusion pool.
This VDEV type is used to speed up metadata and small block IO.

{{< trueimage src="/images/SCALE/Storage/PoolCreationWizardMetadataScreen.png" alt="Pool Creation Wizard Metadata Screen" id="Pool Creation Wizard Metadata Screen" >}}

{{< expand "Common Pool Creation Wizard Settings" "v" >}}
The **Layout** dropdown list includes the **Stripe** or **Mirror** types.

{{< include file="/static/includes/PoolCreationWizardCommonSettings.md" >}}
{{< /expand >}}

### Dedup (Optional)
Use the **Dedup** wizard screen to configure a VDEV. A Dedup VDVE is used to store de-duplication tables.
Size dedup VDEVs as *x* GiB for each *x* TiB of general storage.

{{< trueimage src="/images/SCALE/Storage/PoolCreationWizardDedupScreen.png" alt="Pool Creation Wizard Dedup Screen" id="Pool Creation Wizard Dedup Screen" >}}

{{< expand "Common Pool Creation Wizard Settings" "v" >}}
The **Layout** dropdown list includes the **Stripe** or **Mirror** types.

{{< include file="/static/includes/PoolCreationWizardCommonSettings.md" >}}
{{< /expand >}}

### Advanced Options
The **Manual Selection** screen allows adding a **Stripe** or the **Data** VDEV **Layout**, and then selecting individual disks to add to the new VDEV.
You can filter disks by type or size.

**Add** places a VDEV area to populate with individual disks.

The screen shows disk icons for available disks, or click on the system field to expand the dropdown list to show a list of available system disks.
You can use the disk filters separately or together to find disks of the same type and size.
Drag disks to the VDEV to add them.

**Save Selection** creates the VDEV and closes the window.

{{< trueimage src="/images/SCALE/Storage/ManualSelectionScreen.png" alt="Manual Selection Screen" id="Manual Selection Screen" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Search** | Enter the disk name or other details to search for disks matching the specified value to filter available disks in the system. |
| **Filter by Disk Type** | Resets the available disks list to show only the selected type (HDD or SSD). |
| **Filter by Disk Size** | Resets the available disks list to show only disks matching the selected size. |
| TrueNAS System | Click to expand and show the list of available disks in the system. Filter options change disks displayed on this list. |
{{< /truetable >}}

### Review
The **Review** wizard screen displays a summary of the pool VDEV configuration.

{{< trueimage src="/images/SCALE/Storage/PoolCreationWizardReviewScreen.png" alt="Pool Creation Wizard Review Screen" id="Pool Creation Wizard Review Screen" >}}

**Inspect VDEVs** opens the **Inspect VDEVs** screen that shows the VDEVs with assigned disks added to the pool.

**Start Over** clears the current pool configuration so you can start over.

**Create Pool** completes the configuration process and adds the pool.
