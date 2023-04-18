---
title: iSCSI Volume Management
weight: 70
---

{{< hint type=warning >}}
iSCSI management is a brand new feature in TrueCommand 2.0. 
Always back up any data intended for storage or sharing!
{{< /hint >}}

Open the **iSCSI Manager** page by clicking the <mat-icon role="img" fontset="mdi" fonticon="mdi-database" class="mat-icon mdi mdi-database mat-icon-no-color" aria-hidden="true"></mat-icon> icon on the top bar.

![iSCSIManagerPage](/images/TrueCommand/2.1/iSCSIManagerPage.png "iSCSI Manager Page")

Begin creating an iSCSI volume by clicking **+ Volume**.
After the **iSCSI Manager** page opens, click **+ Add System Pool** and select a pool or multiple pools.

![iSCSISelect Pools](/images/TrueCommand/2.1/iSCSISelectPools.png "iSCSI Select Pools")

Click **Next**.

Click **+ Block Devices** to add block devices.
The **Count** field creates a batch of ISCSI datastores with identical settings in the number specified.

![iSCSICreateBlockDevice](/images/TrueCommand/2.1/iSCSICreateBlockDevice.png "iSCSI Create Block Device")

Click **SAVE** when finished, and then click **NEXT**.

Click **+ Target** and name the target.  

![iSCSICreateTarget](/images/TrueCommand/2.1/iSCSICreateTarget.png "iSCSI Create Target")

Click **SAVE** when finished and then click **NEXT**.

Click the checkbox to assign the target to the block device.

![iSCSIMapBlocks](/images/TrueCommand/2.1/iSCSIMapBlocks.png "iSCSI Map Blocks")

Click **NEXT**.

By default, TrueCommand grants target access to all initiators.
To change this, click **+ Initiator**.
Name the new initiator and click the checkbox to assign it to the target.

![iSCSICreateInitiator](/images/TrueCommand/2.1/iSCSICreateInitiator.png "iSCSICreateInitiator")

Click **NEXT**.

Review the configuration and click **Create**.

![iSCSIReview](/images/TrueCommand/2.1/iSCSIReview.png "iSCSIReview")

TrueCommand creates the iSCSI volume on the TrueNAS system and adds it to the iSCSI Manager.

![iSCSIVolumeList](/images/TrueCommand/2.1/iSCSIVolumeList.png "iSCSIVolumeList")

Using the TrueNAS web interface to update iSCSI settings takes approximately five minutes to resync with TrueCommand.

#### Deleting a Share

To delete a block device, click the <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i> icon to open the options, select **Edit**, then click the <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i> icon in the pop-out panel.

![iSCSIEdit](/images/TrueCommand/2.1/iSCSIEdit.png "iSCSIEdit")

![iSCSIDeleteBlockDeviceandzvol](/images/TrueCommand/2.0/iSCSIDeleteBlockDeviceandzvol.png "iSCSI Delete Block Device and zvol")

To delete the target click the <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i> icon and select **Delete Target**.
To delete everything click the <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i> icon and select **Deleting Target and zvols** which is the full cleanup.

![iSCSIDeleteTarget](/images/TrueCommand/2.1/iSCSIDeleteTarget.png "iSCSIDeleteTarget")

TrueCommand cannot delete initiators and init groups because they might be tied to multiple targets.
To remove these settings, delete them from each TrueNAS system.
