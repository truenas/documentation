---
title: "Adding a Basic Time Machine SMB Share"
description: "Provides instructions for adding an SMB share and enabling basic Time Machine."
weight: 25
aliases:
tags:
- smb
- afp
- shares
---


{{< include file="/static/includes/RootLevelDatasetShareWarning.md" >}}

{{< include file="/static/includes/TimeMachineMultiprotocol.md" >}}

TrueNAS uses predefined setting options to establish an SMB share that fits a predefined purpose, such as a basic Time Machine share.

## Setting Up a Basic Time Machine SMB Share


To set up a basic time machine share:

1. [Create the user(s)]({{< ref "ManageUsers" >}}) for this SMB share.
   Go to **Credentials > Local User** and click **Add**.

2. [Create the share and dataset](#creating-the-share-and-dataset) with **Purpose** set to **Time Machine Share**.

3. [Modify the SMB service settings](#modifying-the-smb-service).

After creating the share, start or restart the SMB service.

When accessing from a Windows client, having more than 512 snapshots on the TrueNAS box can lead to performance issues, as the Windows client often attempts to load all snapshots into the Windows **Previous Versions** tab.
To avoid this, users should maintain fewer than 512 snapshots or consider accessing from a non-Windows client.
Alternatively, configure snapshot lifetimes or create an automatic deletion policy via the [Periodic Snapshot Tasks screen]({{< ref "PeriodicSnapshotTasksSCALE" >}}). This screen helps users manage the snapshot count more effectively.

The latest maintained Mac OS versions allow setting the maximum Time Machine backup size from the Mac OS UI.
Setting this from the client side is generally recommended for better share flexibility and Mac OS coordination.

Note that enabling a multi-user Time Machine does not automatically replicate the backup data to another pool or offsite system. To protect against data loss, configure a **[Replication Task](https://www.truenas.com/docs/scale/scaletutorials/dataprotection/replication/)** that includes the dataset used by the Time Machine share.

### Creating the Share and Dataset

You can either [create the dataset]({{< ref "DatasetsSCALE" >}}) to use for the share on the **Add Dataset** screen and the share, or create the dataset when you add the share on the **Add SMB** screen.
We recommend using the **Add SMB** screen when setting up a Time Machine share as it can create the dataset, enable the SMB2/3 protocol setting in the SMB service, and create the Time Machine share from the same screen.

When you want to customize the dataset, use the **Add Dataset** screen to create the customized dataset and a basic SMB share.
After saving, go to **Shares**, select the SMB share and click **Edit** to change the purpose to **Time Machine Share**.
The **Edit SMB** screen shows the **Enable Now** button to configure the SMB service with the required SMB2/3 protocol option if it is not already enabled.

{{< include file="/static/includes/CreateDatasetSCALE.md" >}}

{{< include file="/static/includes/ShareACLDialogs.md" >}}

To use the **Add SMB** screen, click **Add** on the **Windows (SMB) Shares** widget to open the screen.

Set the **Path** to the existing dataset created for the share, or to where you want to add the dataset, then click **Create Dataset**.

Enter a name for the dataset and click **Create Dataset**.
The dataset name populates the share **Name** field and updates the **Path** automatically.
The dataset name becomes the share name.
Leave this as the default.

If you change the name, follow the naming conventions for:
* [Files and directories](https://learn.microsoft.com/en-us/windows/win32/fileio/naming-a-file#naming-conventions)
* [Share names](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-fscc/dc9978d7-6299-4c5a-a22d-a039cdc716ea)

Set the **Purpose** to **Time Machine Share**.

{{< trueimage src="/images/SCALE/Shares/AddSMBTimeMachineBasic.png" alt="Add Basic Time Machine Share" id="Add Basic Time Machine Share" >}}

**Enabled** is selected by default to allow sharing of this path when the SMB service is activated.
Clearing this option disables the share but does not delete the configuration.

Click **Advanced Options** to finish customizing the share, then click **Save**.

Start or restart the SMB service when prompted.

### Modifying the SMB Service

You can configure the SMB service before you add the share, or you can enable this setting from the Add SMB or Edit SMB screens while adding the share or modifying an existing share. The system prompts you to restart the service after modifying the SMB service or adding/changing a share configuration.

Click on the <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i> on the **Windows (SMB) Share** widget, then click **Configure Service** to open the **SMB Service** screen.

Go to **System > Services** and scroll down to **SMB**.
When using the **Services** screen, click the toggle to turn off the SMB service if it is running, then click <i class="material-icons" aria-hidden="true" title="Configure">edit</i> **Edit** to open the **SMB Service** settings screen.

1. Click **Advanced Settings**.

2. Select **Enable Apple SMB2/3 Protocol Extension** to enable it, then click **Save**.

3. Start or restart the SMB service.
