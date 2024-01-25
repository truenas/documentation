---
title: "Adding a Basic Time Machine SMB Share"
description: "Provides instructions to adding an SMB share and enabling basic time machine."
weight: 25
aliases:
tags:
- smb
- afp
- shares
---

SCALE uses predefined setting options to establish an SMB share that fits a predefined purpose, such as a basic time machine share.

## Setting Up a Basic Time Machine SMB Share

To set up a basic time machine share:

1. [Create the user(s)]({{< relref "ManageLocalUsersSCALE.md" >}}) for this SMB share.
   Go to **Credentials > Local User** and click **Add**.

2. [Create the share and dataset](#creating-the-share-and-dataset) with **Purpose** set to **Basic time machine share**.

3. [Modify the SMB service settings](#modifying-the-smb-service).

After creating the share, enable the SMB service.

### Creating the Share and Dataset
You can either [create the dataset]({{< relref "DatasetsSCALE.md" >}}) to use for the share on the **Add Dataset** screen and the share, or create the dataset when you add the share on the **Add SMB** screen.
If you want to customize the dataset, use the **Add Dataset** screen.

{{< include file="/_includes/CreateDatasetSCALE.md" >}}

To use the **Add SMB** screen, Click **Add** on the **Windows (SMB) Shares** widget to open the screen.

Set the **Path** to the existing dataset created for the share, or to where you want to add the dataset, then click **Create Dataset**.

Enter a name for the dataset and click **Create Dataset**.
The dataset name populates the share **Name** field and updates the **Path** automatically.
The dataset name becomes the share name. Leave this as the default.

If you change the name follow the naming conventions for:
* [Files and directories](https://learn.microsoft.com/en-us/windows/win32/fileio/naming-a-file#naming-conventions)
* [Share names](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-fscc/dc9978d7-6299-4c5a-a22d-a039cdc716ea)

Set the **Purpose** to **Basic time machine share**.

Select **Enabled** to allow sharing of this path when the SMB service is activated.
Leave it cleared if you want to disable the share without deleting the configuration.

Finish customizing the share, then click **Save**.

Do not start the SMB service when prompted, start it after configuring the SMB service.

### Modifying the SMB Service
Click on the <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i> on the **Windows (SMB) Share** widget, then click **Configure Service** to open the **SMB Service** screen.

You can also go to **System Settings > Services** and scroll down to **SMB**.
If using the **Services** screen, click the toggle to turn off the SMB service if it is running, then click <i class="material-icons" aria-hidden="true" title="Configure">edit</i> **Configure** to open the **SMB Service** settings screen.

1. Click **Advanced Settings**.

2. Verify or select **Enable Apple SMB2/3 Protocol Extension** to enable it, then click **Save**.

3. Restart the SMB service.
