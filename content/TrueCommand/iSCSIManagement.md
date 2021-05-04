---
title: iSCSI Volume Management
weight: 70
---

{{< hint danger >}}
iSCSI management is a BETA feature in TrueCommand 2.0. 
Before attempting to use such features, please ensure that your data is backed up. 
Do not rely on this for critical data.
{{< /hint >}}

Open the iSCSI manager page by clicking the <mat-icon role="img" fontset="mdi" fonticon="mdi-database" class="mat-icon mdi mdi-database mat-icon-no-color" aria-hidden="true"></mat-icon> icon on the top bar.

![iSCSIManagerPage](/images/TrueCommand/2.0/iSCSIManagerPage.png "iSCSI Manager Page")

Start creating an iSCSI volume by clicking **+ Volume** button.
Once the page opens click **+ Add System Pool** and select a pool or multipe pools.

![iSCSISelect Pools](/images/TrueCommand/2.0/iSCSISelectPools.png "iSCSI Select Pools")

Click next to proceed.

Click ** + Block Devices** to add Block devices.  The count field will create a 
batch of ISCSI datastores with identical setups in the number specified.

![iSCSICreateBlockDevice](/images/TrueCommand/2.0/iSCSICreateBlockDevice.png "iSCSI Create Block Device")

Click **SAVE** when finished and click **NEXT** to proceed.

Click **+ Target** and name the target.  

![iSCSICreateTarget](/images/TrueCommand/2.0/iSCSICreateTarget.png "iSCSI Create Target")

Click **SAVE** when finished and click **NEXT** to proceed.

Mark the checkbox to assign the target to the block device.

![iSCSIMapBlocks](/images/TrueCommand/2.0/iSCSIMapBlocks.png "iSCSI Map Blocks")

Click **NEXT** to proceed.

By default all initiators are granted access to change this, click **+ Initiator**.
Name your intiator and then mark the checkbox to assign the initator to the target.

![iSCSICreateInitiator](/images/TrueCommand/2.0/iSCSICreateInitiator.png "iSCSICreateInitiator")

Click **NEXT** to proceed.

Review the configuration and click **Create** if you are satisfied.

![iSCSIReview](/images/TrueCommand/2.0/iSCSIReview.png "iSCSIReview")

The iSCSI volume will be created and will appear in the iSCSI Manager.

![iSCSIVolumeList](/images/TrueCommand/2.0/iSCSIVolumeList.png "iSCSIVolumeList")

{{< hint info >}}
Any updates to iSCSI initiated through the TrueNAS WebUI will take 5 minutes to resync with TrueCommand.
{{< /hint >}}


#### Deleting a share

To delete the block device - click the three dots - select edit then click the three dots in the popout panel.

![iSCSIEdit](/images/TrueCommand/2.0/iSCSIEdit.png "iSCSIEdit")

![iSCSIDeleteBlockDeviceandzvol](/images/TrueCommand/2.0/iSCSIDeleteBlockDeviceandzvol.png "iSCSI Delete Block Device and zvol")

To delete the target click the three dots and select deleting target.
To delete everything click the three dots and select deleting target + zvols is the "full" cleanup.

![iSCSIDeleteTarget](/images/TrueCommand/2.0/iSCSIDeleteTarget.png "iSCSIDeleteTarget")

{{< hint info >}}Initiators and Init Groups are not deleted through TrueCommand since those can be tied to multiple targets.  These must be deleted individual on each TrueNAS system.
{{< /hint >}}
