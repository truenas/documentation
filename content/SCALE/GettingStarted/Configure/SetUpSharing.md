---
title: "Setting Up Data Sharing"
description: "Provides general information on setting up basic data sharing on TrueNAS SCALE."
weight: 50
aliases:
 - /scale/gettingstarted/install/setupsharing/
tags:
- scaleshares
- scaleconfig
---

{{< toc >}}

After setting up storage on your TrueNAS, it is time to begin sharing data!
There are several sharing solutions available on SCALE, but in this article we discuss the most common. 

{{< include file="/_includes/SMBShareMSDOSalert.md" type="page" >}}

## Sharing Data Methods
TrueNAS SCALE provides four types of sharing methods, but this article only discusses three:

* [SMB]({{< relref "AddSMBShares.md" >}}) for Windows shares
* [NFS]({{< relref "AddingNFSShares.md" >}}) for Unix-like shares
* [ISCSi]({{< relref "/SCALE/SCALETutorials/Shares/iSCSI/_index.md" >}}) block shares

For more information on TrueNAS SCALE shares, see the [Shares]({{< relref "/SCALE/SCALETutorials/Shares/_index.md" >}}) tutorials.

Regardless of what type of share you create, the first step is to create a dataset to use for the share.
## Creating a Share Dataset
The share creation process starts with creating a dataset to use for the share. 
{{< expand "Creating a Basic Dataset for Shares" "v" >}}

{{< include file="CreateDatasetSCALE.md" type="page" >}}

{{< /expand >}}
## Setting up SMB Shares for Windows

For more information on adding SMB shares, see [Adding SMB Shares]({{< relref "AddSMBShares.md" >}}).
{{< expand "Creating a Basic SMB Share" "v" >}}
To set up a basic SMB share:

1. [Create a dataset](#creating-a-share-dataset) with **Share Type** set to **SMB**. 

2. Create the TrueNAS user accounts with **Samba Authentication** set.

   a. Go to **Credentials > Local Users** and click **Add** to create a user. 
      
      ![AddUserIdentificationSettings](/images/SCALE/23.10/AddUserIdentificationSettings.png "Add User Identification Settings")
      
      ![AddUserUserIDAndGroupsSettings](/images/SCALE/23.10/AddUser-UserIDAndGroupSettings.png "Add User User Id an Groups Settings")
          
   b. Enter the values in each required field, and then verify **Samba Authentication** is selected. 
      For more information on the fields and adding users, see [Creating User Accounts]({{< relref "ManageLocalUsersScale.md" >}}).
      
      ![AddUserDirPermsAuthSettings](/images/SCALE/23.10/AddUserDirPermsAuthSettings.png "Add User Directories, Permissions and Authentication Settings")
    
   c. Click **Save**.

3. Edit the SMB share dataset permissions to set the **Select an ACL Preset** to **Open**.

   a. Go to **Datasets**. Select the name of the dataset for the SMB share you created. 
      Scroll down to the **Permissions** widget on the right side of the screen. 

      ![EditDatasetSMBPermissions](/images/SCALE/22.12/EditDatasetSMBPermissions.png "Edit Dataset SMB Permissions")
      
      Click **Edit** to open the **ACL Editor** screen and edit the permissions.
      
      ![EditACLSMBShare1SCALE](/images/SCALE/22.12/EditACLSMBShare1SCALE.png "Edit ACL SMB Share")
   
   b. Select **Use Preset**. The **Select a preset ACL** dialog displays. Select **NFS4_OPEN** from the dropdown list.
      
      ![UseACLPresetSCALE](/images/SCALE/22.12/UseACLPresetSCALE.png "Select Preset ACL NFS4_OPEN")

   c. Click **Continue**.

   d. Click **Save Access Control List**.

   For more information on Access Control Lists and editing permissions, see [Setting Up Permissions]({{< relref "PermissionsSCALE.md" >}}).

4. Create the new SMB share. 

   a. Click **Shares** on the main navigation panel, then click **Add** on the **Windows (SMB) Shares** widget to open the **Add SMB** configuration screen.

   b. Select the dataset you created for the share in the **Path** field. 
      You can click on the <i class="fa fa-caret-right" aria-hidden="true"></i> to the left of **mnt**, and then at the pool to expand the options, and then click on the dataset to populate the field with the full path.
   
      ![AddSMBPath](/images/SCALE/22.02/AddSMBPath.png "Add SMB Path")

   c. Enter a name for the share.

   d. Click **Save**.

5. Turn the SMB service on. 
   If the dialog to enable the service does not open, click the <i class="fa fa-ellipsis-v" aria-hidden="true" title="Options"></i> for the share and select **Turn On Service**.
   
   ![SMBShareOptions](/images/SCALE/22.02/SMBShareOptions.png "SMB Share Options")

6. Connect to the share. On a Windows 10 system, open the **File Browsers** and then:

   a. In the navigation bar, enter `\\` and the TrueNAS system name or IP address. A login credentials dialog displays.

   b. Enter the TrueNAS user account credentials you created on the TrueNAS system. 
      
      ![FileExplorerEnterSMBCredentials](/images/SCALE/22.02/FileExplorerEnterSMBCredentials.png "File Explorer Enter SMB Credentials")

   c. Begin browsing the dataset.
{{< /expand >}}
## Setting up NFS for Unix-Like Shares
For more information on creating NFS shares, see [Adding NFS Shares]({{< relref "AddingNFSShares.md" >}}).
{{< expand "Adding a Basic NFS Share" "v" >}}
To set up NFS sharing:

1. [Create a dataset](#creating-a-share-dataset) with **Share Type** set to **Generic**.  

2. Add additional packages like `nfs-common` to any client systems that require them.

3. Create the NFS share. 

   a. Select **Shares** on the main navigation panel, then click **Add** on the **UNIX (NFS) Share Targets** to open the **Add NFS** configuration screen.

   b. Select the dataset you created for the share in the **Path** field. 
      You can click on the <i class="fa fa-caret-right" aria-hidden="true"></i> to the left of **mnt**, and then at the pool to expand the options, and then click on the dataset to populate the field with the full path.
   
      ![AddNFSPath](/images/SCALE/22.02/AddNFSPath.png "Add NFS Path")

   c. Click **Save**.

4. Access the dataset. 
   On a Unix-like system, open a command line and enter command `showmount -e {IPADDRESS}` where {IPADDRESS} is your TrueNAS system IP address.
   
   ```
   tmoore@ChimaeraPrime:~$ showmount -e 10.238.15.194
   Export list for 10.238.15.194:
   /mnt/pool1/testds (everyone)
   ```

5. Make a local directory for the NFS mount. Enter command `sudo mkdir nfstemp/`
   
   ```
   tmoore@ChimaeraPrime:~$ sudo mkdir nfstemp/
   ```

6. Mount the shared directory. 
   Enter command `sudo mount -t nfs {IPADDRESS:dataset path}` where {IPADDRESS} is your system IP address and {:dataset path} is the full path displayed in step 3.b. above.

   ```
   tmoore@ChimaeraPrime:~$ sudo mount -t nfs 10.238.15.194:/mnt/pool1/testds nfstemp/
   ```

7. From here, `cd` into the local directory and view or modify the files as needed.
{{< /expand >}}
## Setting up an iSCSI Block Share

Setting up block sharing is a complicated scenario that requires detailed configuration steps and knowledge of your network environment.
A simple configuration is beyond the scope of this getting started guide, but detailed articles are [available in the SCALE Tutorials section]({{< relref "/SCALE/SCALETutorials/Shares/iSCSI/_index.md" >}}).

With simple sharing now set up, you can back up your configuration and set up data backup.

{{< taglist tag="scaleconfig" limit="10" title="Related Configuration Articles" >}}
{{< taglist tag="scaleshares" limit="10" title="Related Shares Articles" >}}
