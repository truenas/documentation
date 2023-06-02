---
title: "Adding a Basic Time Machine SMB Share"
description: "Provides instructions to adding an SMB share and enabling basic time machine."
weight: 25
aliases:
tags:
- scalesmb
- scaleafp
- scaleshares
---

{{< toc >}}


SCALE uses predefined setting options to establish an SMB share that fits a predefined purpose, such as for a share enabled for a basic time machine share.

## Setting Up a Basic Time Machine SMB Share

To set up a basic time machine share:

1. [Create the user(s)]({{< relref "ManageLocalUsersSCALE.md" >}}) that use this share. Go to **Credentials > Local User** and click **Add**.

2. [Create a dataset](#creating-the-dataset-for-the-share) for the share to use.

3. [Modify the SMB service settings](#modify-the-smb-service).

4. [Create the share](#create-the-basic-time-machine-smb-share) with **Purpose** set to **Basic time machine share**.

After creating the share, enable the SMB service.

### Creating the Dataset for the Share

When adding a share, first create the dataset you plan to use for the new share.

{{< include file="/content/_includes/CreateDatasetSCALE.md" type="page" >}}

Select this dataset as the mount path when you create your SMB share that uses the **Basic time machine share** setting.

### Modify the SMB Service

Go to **System Settings > Services** and scroll down to **SMB**.

1. Click the toggle to turn off the SMB service if it is running, then click <i class="material-icons" aria-hidden="true" title="Configure">edit</i> **Configure** to open the **SMB Service** settings screen..

2. Click **Advanced Settings**.

3. Verify or select **Enable Apple SMB2/3 Protocol Extension** to enable it, then click **Save**

4. Click the toggle to restart the SMB service.

### Create the Basic Time Machine SMB Share 

Go to **Shares** and click **Add** on the **Windows SMB Share** widget to open the **Add SMB Share** screen.
 
1. Enter the SMB share **Path** and **Name**. 

   The **Path** is the directory tree on the local file system that TrueNAS exports over the SMB protocol. 

   The **Name** is the SMB share name, which forms part of the full share pathname when SMB clients perform an SMB tree connect. 
   Because of how the SMB protocol uses the name, it must be less than or equal to 80 characters. It cannot have invalid characters as specified in Microsoft documentation MS-FSCC section 2.1.6. 
   If you do not enter a name, the share name becomes the last component of the path.
   If you change the name, follow the naming conventions for:
   * [Files and directories](https://learn.microsoft.com/en-us/windows/win32/fileio/naming-a-file#naming-conventions)
   * [Share names](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-fscc/dc9978d7-6299-4c5a-a22d-a039cdc716ea) 

2. Select a **Basic time machine share** from the **Purpose** dropdown list.

3. (Optional) Enter a **Description** to help explain the share purpose.

4. Select **Enabled** to allow sharing of this path when the SMB service is activated. 
   Leave it cleared if you want to disable the share without deleting the configuration.

5. Click **Save** to create the share and add it to the **Shares > Windows (SMB) Shares** list.

You can also choose to enable the SMB service at this time.

{{< taglist tag="scalesmb" limit="10" >}}