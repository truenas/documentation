---
title: iSCSI Volume Management
weight: 70
---

{{< hint danger >}}
iSCSI management is a brand new feature in TrueCommand 2.0. 
Always back up any data intended for storage or sharing!
{{< /hint >}}

Open the **iSCSI Manager** page by clicking the <mat-icon role="img" fontset="mdi" fonticon="mdi-database" class="mat-icon mdi mdi-database mat-icon-no-color" aria-hidden="true"></mat-icon> icon on the top bar.

![iSCSIManagerPage](/images/TrueCommand/2.0/iSCSIManagerPage.png "iSCSI Manager Page")

Start creating an iSCSI volume by clicking **+ Volume**.
When the page opens, click **+ Add System Pool** and select a pool or multiple pools.

![iSCSISelect Pools](/images/TrueCommand/2.0/iSCSISelectPools.png "iSCSI Select Pools")

Click **Next**.

Click **+ Block Devices** to add Block devices.
The *count* field creates a batch of ISCSI datastores with identical settings in the number specified.

![iSCSICreateBlockDevice](/images/TrueCommand/2.0/iSCSICreateBlockDevice.png "iSCSI Create Block Device")

Click **SAVE** when finished and click **NEXT**.

Click **+ Target** and name the target.  

![iSCSICreateTarget](/images/TrueCommand/2.0/iSCSICreateTarget.png "iSCSI Create Target")

Click **SAVE** when finished and click **NEXT**.

Set the checkbox to assign the target to the block device.

![iSCSIMapBlocks](/images/TrueCommand/2.0/iSCSIMapBlocks.png "iSCSI Map Blocks")

Click **NEXT**.

By default, all initiators are granted access to the target.
To change this, click **+ Initiator**.
Name the new initiator and set the checkbox to assign the initiator to the target.

![iSCSICreateInitiator](/images/TrueCommand/2.0/iSCSICreateInitiator.png "iSCSICreateInitiator")

Click **NEXT**.

Review the configuration and click **Create**.

![iSCSIReview](/images/TrueCommand/2.0/iSCSIReview.png "iSCSIReview")

TrueCommand creates the iSCSI volume on the TrueNAS system and adds it to the iSCSI Manager.

![iSCSIVolumeList](/images/TrueCommand/2.0/iSCSIVolumeList.png "iSCSIVolumeList")

Using the TrueNAS web interface to update iSCSI settings takes approximately five minutes to resync with TrueCommand.

#### Deleting a Share

To delete a block device, open the options (three dots), select *Edit*, then click the three dots in the popout panel.

![iSCSIEdit](/images/TrueCommand/2.0/iSCSIEdit.png "iSCSIEdit")

![iSCSIDeleteBlockDeviceandzvol](/images/TrueCommand/2.0/iSCSIDeleteBlockDeviceandzvol.png "iSCSI Delete Block Device and zvol")

To delete the target click the three dots and select deleting target.
To delete everything click the three dots and select deleting target + zvols is the "full" cleanup.

![iSCSIDeleteTarget](/images/TrueCommand/2.0/iSCSIDeleteTarget.png "iSCSIDeleteTarget")

TrueCommand cannot delete Initiators and Init Groups because they can be tied to multiple targets.
To remove these settings, delete them from each TrueNAS system.
