---
title: "Setting Up Data Sharing"
description: "Provides general information on setting up basic data sharing on TrueNAS SCALE."
weight: 50
aliases:
 - /scale/gettingstarted/install/setupsharing/
tags:
- shares
---

After setting up storage on your TrueNAS, it is time to begin sharing data!
There are several sharing solutions available on SCALE, but in this article we discuss the most common.

## Sharing Data Methods

TrueNAS SCALE provides four types of sharing methods, but this article only discusses three:

* SMB for Windows shares
* NFS for Unix-like shares
* ISCSi block shares

For more information on TrueNAS SCALE shares, see the [Shares]({{< relref "/SCALE/SCALETutorials/Shares/_index.md" >}}) tutorials.

Regardless of what type of share you create, you need to create the user and dataset for the share.

## Creating Share Users

Share users are those with permissions to access the share. You can create the user before you create the share or after creating the share. Administrators can provision share users using a directory server such as Active Directory or LDAP.

To add non-SMB share users or edit users, go to **Credentials > Local Users** to add or edit the user(s).
Click **Add** to create a new or as many new user accounts as you need.

Enter the values in each required field, verify **Samba Authentication** is selected for SMB share users, then click **Save**.
For more information on the fields and adding users, see [Creating User Accounts]({{< relref "ManageLocalUsersScale.md" >}}).

By default, all new local users are members of a built-in group called **builtin_users**.
You can use a group to grant access to all local users on the server or add more groups to fine-tune permissions for large numbers of users.

{{< expand "Why not just allow anonymous access to the share?" "v" >}}
Anonymous or guest access to a share is possible, but it is a security vulnerability and not recommended for Enterprise or systems with more than one share administrator account.
Using a guest account also increases the likelihood of unauthorized users gaining access to your data.
{{< /expand >}}

After creating the share user account(s), next create the share and dataset.
For iSCSI shares, create the dataset then the share.
You can create an SMB or NFS share while creating the dataset or create the dataset while creating the share.

{{< expand "Creating a Basic Dataset" "v" >}}

{{< include file="/_includes/CreateDatasetSCALE.md" >}}

{{< /expand >}}

## Setting up SMB Shares for Windows

For more information on adding SMB shares, see [Adding SMB Shares]({{< relref "/SCALE/SCALETutorials/Shares/_index.md" >}}).

To set up a basic SMB share:
1. Create the share and dataset.

   a. Go to **Shares**, then click **Add** on the **Windows (SMB) Shares** widget to open the **Add SMB** configuration screen.

   b. Select the dataset mount path or enter it in **Path**.
      You can click on the <i class="fa fa-caret-right" aria-hidden="true"></i> to the left of **mnt**, and then at the pool to expand the options.
      Continue expanding until reaching the dataset where you want to add the share dataset.
      Click on the dataset to populate the field with the full path.

    {{< trueimage src="/images/SCALE/Shares/AddSMBPath.png" alt="Add SMB Path" id="Add SMB Path" >}}

   c. Click **Create Dataset**, enter a name in the **Create Dataset** dialog, then click **Create**.
      The system creates the share dataset and populates both the **Path** and share **Name** fields with the name given the dataset.
      The dataset name becomes the share name.

   d. Change any **Advanced Options** settings you want to customize the dataset and share.
      Click **Enable** to set up audit logging, or to change case sensitivity from the default **Sensitive** setting, then click **Save**.

2. Start the SMB service when prompted.

3. Edit the SMB share permissions to set the share owner and/or group.

   a. Click on <span class="material-icons">share</span> **Edit Share ACL** icon to open the **Edit Share ACL** screen.

   {{< trueimage src="/images/SCALE/Shares/SMBShareACLScreen.png" alt="SMB Share ACL Screen" id="SMB Share ACL Screen" >}}

   b. Select either **User** in **Who**, then the user name in **User**, and then set the permission level using **Permissions** and **Type**.

   c. (Optional) Click **Add** then select **Group**, then the group name, and set the group permissions.

   d. Click **Save**.

4. Edit the dataset for the SMB share permissions to set the share owner and/or group.

   a. Click on <span class="material-icons">share</span> **Edit Fileshsystem ACL** icon to open the **Edit ACL** screen for the dataset.

   {{< trueimage src="/images/SCALE/Shares/SMBACLEditor.png" alt="Edit ACL Screen for Share Dataset" id="Edit ACL Screen for Share Dataset" >}}

   b. Select the **Owner** and **Group** and click **Apply Owner** and **Apply Group**.
      With **Who** set to **Owner**, set the permission level using **Permissions** and **Type**.

   c. Click **Save**.

   {{< include file="/_includes/SMBShareMSDOSalert.md" >}}

5. Connect to the share. On a **Windows 10** or later system, open the **File Browsers** and then:

   a. Enter `\\` and the TrueNAS system name or IP address in the navigation bar. A login credentials dialog displays.

   b. Enter the TrueNAS user account credentials you created on the TrueNAS system.

   {{< trueimage src="/images/SCALE/Shares/FileExplorerEnterSMBCredentials.png" alt="File Explorer Enter SMB Credentials" id="File Explorer Enter SMB Credentials" >}}

   c. Begin browsing the dataset.

## Setting up NFS for Unix-Like Shares

For more information on creating NFS shares, see [Adding NFS Shares]({{< relref "AddingNFSShares.md" >}}).

To set up NFS sharing:
1. Add additional packages like `nfs-common` to any client systems that require them.

2. Create the NFS share and dataset.

   a. Go to **Shares**, then click **Add** on the **UNIX (NFS) Share Targets** to open the **Add NFS** configuration screen.

   b. Select the dataset mount path or enter it in **Path**.
      You can click on the <i class="fa fa-caret-right" aria-hidden="true"></i> to the left of **mnt**, and then at the pool to expand the options.
      Continue expanding until reaching the dataset where you want to add the share dataset.
      Click on the dataset to populate the field with the full path.

      {{< trueimage src="/images/SCALE/Shares/AddNFSSharePath.png" alt="Add NFS Share Path" id="Add NFS Share Path" >}}

   c. Click **Create Dataset**, enter a name in the **Create Dataset** dialog, then click **Create**.
      The system creates the share dataset and populates both the **Path** and share **Name** fields with the name given the dataset.
      The dataset name becomes the share name.

   d. Finish the NFS share configuration if you want to add network and hosts at this time, or click **Advanced Options** to configure additional settings.

   e. Click **Save**.

3. Access the dataset.
   On a Unix-like system, open a command line and enter command `showmount -e {IPADDRESS}` where {IPADDRESS} is your TrueNAS system IP address.

   ```
   tmoore@ChimaeraPrime:~$ showmount -e 10.238.15.194
   Export list for 10.238.15.194:
   /mnt/pool1/testds (everyone)
   ```

4. Make a local directory for the NFS mount. Enter command `sudo mkdir nfstemp/`.

   ```
   tmoore@ChimaeraPrime:~$ sudo mkdir nfstemp/
   ```

5. Mount the shared directory.
   Enter command `sudo mount -t nfs {IPADDRESS:dataset path}` where {IPADDRESS} is your system IP address and {:dataset path} is the full path displayed in step 3.b. above.

   ```
   tmoore@ChimaeraPrime:~$ sudo mount -t nfs 10.238.15.194:/mnt/pool1/testds nfstemp/
   ```

6. From here, `cd` into the local directory and view or modify the files as needed.

## Setting up an iSCSI Block Share

Setting up block sharing is a complicated scenario that requires detailed configuration steps and knowledge of your network environment.
A simple configuration is beyond the scope of this getting started guide, but detailed articles are [available in the SCALE Tutorials section]({{< relref "/SCALE/SCALETutorials/Shares/iSCSI/_index.md" >}}).

With simple sharing now set up, you can back up your configuration and set up data backup.
