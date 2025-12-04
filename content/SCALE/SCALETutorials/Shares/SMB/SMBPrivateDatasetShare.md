---
title: "Setting Up SMB Private Dataset Shares"
description: "Provides instructions on using SMB Private Datasets Share as an alternative to legacy SMB Home Shares."
weight: 40
aliases: 
 - /scale/scaletutorials/shares/smb/addsmbhomeshare
tags:
- smb
---

{{< include file="/static/includes/RootLevelDatasetShareWarning.md" >}}

{{< hint type=important title="Home Share Legacy Feature" >}}
SMB Home Share is a legacy feature for organizations looking to maintain existing SMB configurations.
Microsoft deprecated the Home Shares feature in Windows 10 and removed it completely from Windows 11.
They no longer support Home Shares as of October 2025.
TrueNAS removed the home share option from the SMB share **Purpose** list in 24.04 (Dragonfish).

The SMB share **Other Options** in pre-25.10 releases includes a home share legacy option, but it is not recommended for new shares.
It is for organisations still using the legacy home shares option to add a single SMB share to provide a personal directory for every user account.
Future TrueNAS releases can introduce instability or require configuration changes affecting this legacy feature.
This option does not show in 25.10 and later releases unless an existing home share is upgraded to 25.10 or later.
{{< /hint >}}

## Replacing SMB Home Shares

TrueNAS has removed the **Use as Home Share** option, found in the **Other Options** section of the **Advanced Options** screen for the **Add SMB** and **Edit SMB** screens in earlier releases of TrueNAS.
The **Private Dataset Share** found as a **Purpose** dropdown list option in 25.10 and later releases replaces home shares, and is the recommended method to provide users with a private personal folder they access through an SMB share.

Follow the instructions in the [Adding Private Dataset Shares](#adding-private-dataset-shares) section below to set up private and personal shares.

{{< expand "What is a private dataset and share?" "v" >}}
The **Private Dataset Share** option allows creating a private personal directory for a user in the specified dataset, that when correctly configured, provides users with a private folder only they access through an SMB share.
{{< /expand >}}

TrueNAS allows creating one private directory per user, while it still allows creating as many non-private directories as desired or needed.
When a user first authenticates to a Private Dataset Share, TrueNAS automatically creates a subdirectory named after their username (for example, */mnt/poolname/share-name/username/*).
Each user only sees and can access their own subdirectory when connecting to the share.
Users can create as many directories as needed through a Windows File Explorer.

TrueNAS does not control what Windows allows through the File Explorer.
Share ACL settings control who can access the private directory share.
If the personal directories show in File Explorer, use [Windows file properties](https://community.spiceworks.com/t/how-to-configure-file-sharing-in-windows-server/1014185) and access control to hide the folder in the share.

A user home directory in TrueNAS is a function of the ZFS file system and is not related to the SMB private dataset share or (deprecated Home Share).
A user configuration does not need to specify or add a file system home directory for a private dataset share.

Other options for configuring individual user directories include:
* Configure a single share on the TrueNAS and provision individual user directories on the client OS. 
* Create a single SMB share and configure the ACL so that users can create individual directories on the share that inherit write access for the user and grant read access to the administrator.
* Create an SMB share using the **Private Dataset Share** preset, and then create per-user datasets under the umbrella of a single share when users access the share.

Creating an SMB private dataset share requires provisioning users or joining Active Directory, and configuring the system storage and share.

## Adding Private Dataset Shares

Private directories are not intended for every user on the system.
When setting the **Purpose** dropdown list to the **Private Dataset Share** option, TrueNAS might show the private directories to all users with access to the root level of the share but setting the share ACL prevents other users from accessing the private share.

Examples of setting up private SMB shares are those for backups, system configuration, and users or departments that need to keep information private from other users.

This article covers:
1. Adding the private dataset share user.
2. Creating the private dataset share and the dataset.
3. Modifying ACL permissions for the dataset(s) and the share.

### Adding the Share User

{{< include file="/static/includes/AddingAUser.md" >}}

### Using AD to Add Users and Private Dataset Shares

You can manually add users and groups in TrueNAS, or configure groups in Active Directory and add users to each group, and then have AD add the users and group to TrueNAS.
After AD adds users and groups, configure private directories, and if needed for other file system functions not related to private directory shares, configure home directories for the users and group(s).
See [Managing Users]({{< ref "ManagingUsers.md" >}}) for more information on adding home directories.

Before setting up SMB shares, check system alerts to verify that no errors related to connections to Active Directory are listed.
Resolve any issues with Active Directory before proceeding. If Active Directory cannot bind with TrueNAS, you cannot start the SMB service after making changes.

### Creating the Private Dataset Share

{{< include file="/static/includes/LocalSMBUser.md" >}}

You can use an existing dataset or create a new dataset for the share.

We recommend using the **Add SMB** screen to create a new share and dataset for this procedure, and for any customized SMB share, rather than using the **Add Dataset** screen to create the share and dataset.
In general, when creating a simple SMB share and dataset, you can use either screen.
We recommend using the [**Add Dataset** screen]({{< ref "DatasetsSCALE" >}}) to access the dataset advanced setting options when you want to customize the dataset, and using the **Add SMB** screen to create and customize an SMB share with presets and advanced options.

{{< include file="/static/includes/ShareACLDialogs.md" >}}

#### Before You Begin

Before creating the private share dataset, go to **Datasets**, select the parent dataset for the private share dataset and check the permissions for that dataset.
Select the parent dataset on the dataset tree table, then click **Edit** on the **Permissions** widget to open the **Edit ACL** screen for that dataset.
Change the default in **Owner** and **Owner Group** to the admin user for your system, and click apply for both owner and owner group.
The owner and owner group default user is root, which means only the root user can create the private share dataset unless you add your admin user to the ACL and give the entry full access permissions.
When set to root, if another logged-in admin user tries to create a new private dataset share nested under the parent, TrueNAS shows an error message and prevents adding the new private dataset share until you correct the permissions issue.
You can leave the **Owner** and **Owner Group** set to root, but you must add a user entry for the admin user who creates the private dataset shares. Give that admin user full access permissions.

#### Adding the Private Dataset Share and Dataset

To create SMB private dataset share, go to **Shares**, and click **Add** on the **Windows (SMB) Shares** widget to open the **Add SMB** screen.

1. Select **Private Dataset Share** on the **Purpose** dropdown list, then click **Advanced Options** to configure additional share setting options.

   {{< trueimage src="/images/SCALE/Shares/AddPrivateSMBShareAdvancedOptions.png" alt="Add Share Advanced Options" id="Add Share Advanced Options" >}}

2. Enter or browse to select the path to the parent dataset for the private share dataset, then click **Create Dataset**.
   The **Create Dataset** dialog opens.

3. Enter the private dataset name, for example *rikka-private*, then click **Create Dataset**.
   The dialog closes, and **Path** is populated with the full path to the new dataset.

   If you created a simple share and dataset using the **Add Dataset** screen, to customize it, go to **Shares**, select it on the **SMB** screen (or widget if it shows on the list), then click **Edit**. Verify the path and **Name** field are populated.
   
   {{< trueimage src="/images/SCALE/Shares/AddPrivateSMBShare.png" alt="Set the Share Path" id="Set the Share Path" >}}

   Follow naming conventions for:
   * [Files and directories](https://learn.microsoft.com/en-us/windows/win32/fileio/naming-a-file#naming-conventions)
   * [Share names](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-fscc/dc9978d7-6299-4c5a-a22d-a039cdc716ea)

   The dataset name populates the share **Name** field and becomes the share name. The **Path** field is updated with the dataset name.
   The share and dataset must have the same name.

4. (Optional) Click **Advanced**, scroll down to select **Enable Logging** to enable SMB share audit logging.
   
5. (Optional) Scroll down to **Other Options** while on the **Advanced Options** screen to locate the legacy **Export Recycle Bin** option, which only shows if you select a share created in an earlier TrueNAS release.
   This allows moving files deleted in the share to a recycle bin in that dataset.

   Files are renamed to a per-user subdirectory within <file>.recycle</file> directory at the root of the SMB share if the path is the same dataset as the share.
   If the dataset has a nested dataset, the directory is at the root of the current dataset. If this is the case, there is no automatic deletion based on file size.

6. (Optional) Select any other advanced option that applies to your share needs.

7. Click **Save**.

8. Enable or restart the **SMB** service when prompted and make the share available on your network.

When prompted by the system to configure the dataset ACL, accept the option. The **Edit ACL** screen for the new private share dataset opens.

### Setting ACL Permissions

The private dataset share requires both the dataset and share ACL permissions to allow or prevent access to the share.

Dataset ACL permissions are configured on the **Edit ACL** screen. Share ACL permissions are configured using the **Share ACL for *rikka-private*** screen.

#### Setting Dataset Permissions

First, set the dataset permissions to allow your admin user and the user assigned to the private directory share access.
Your admin user must have permissions granted for the parent dataset covered in [Before You Begin](#before-you-begin) and the private dataset covered in this section.
If you want or need to grant another user access to the private share dataset, other than the private share user or a group of users, add an ACL entry to the dataset and share ACL to allow access to the private dataset.

Accessing the **Edit ACL** screen with the dataset permissions:
- From the **Datasets** screen, select the dataset row for the private share dataset.
  Click **Edit** on the **Permissions** widget to open the **Edit ACL** screen.
  See [Setting Up Permissions]({{< ref "PermissionsSCALE" >}}) for more information on editing dataset permissions.

- From the **Shares** screen, click the triple dot icon for the share row, then click **Edit Filesystem ACL** to open the **Edit ACL** screen.

Set the permission for the private dataset to allow additional users or a group if others are permitted to access the private directory share.

Click the **Owner** dropdown, select the administration user with full control, and then repeat for **Group**.
You can set the owning group to your Active Directory domain admins. Click **Apply Owner** and **Apply Group** to apply the changes.

{{< trueimage src="/images/SCALE/Shares/SetACLPresetForPrivateDataset.png" alt="Add Dataset ACL Permissions" id="Add Dataset ACL Permissions" >}}

![GroupDomainAdminsSCALE](/images/SCALE/Datasets/GroupDomainAdmins.png "Set the owning group to Domain Admins")

Click **Use Preset** and choose **NFS4_HOME**. If the dataset has a POSIX ACL, choose **HOME**.
Click **Continue**.

Next, click **Add Entry** to add user entries for each user that needs access to the dataset.
To assign required permissions, select **User** in **Who** and locate the user name in the **User** dropdown list.
Select the required permissions.
Repeat for each user that needs access.
Alternatively, if you added users to a group, select, set **Who** to **Group** and locate the group in the dropdown list.

{{< include file="/static/includes/SMBShareMSDOSalert.md" >}}

After adding all users or groups and setting the required permissions for each, click **Save Access Control List**.

#### Setting the Share Permissions

If the private dataset is nested under a parent dataset that also has other private datasets nested under it, you must set the share ACL permission to restrict access to the files in the private share dataset (directory).
Windows File Explorer shows all datasets nested under the share parent but blocks other users not granted access permission from opening and viewing the contents of that folder or directory.

Click the triple dot icon at the right of the private dataset share on the Shares screen, then click **Edit Share ACL** to open the **Share ACL for *rikka-private*** screen.

{{< trueimage src="/images/SCALE/Shares/ShareACLForPrivateDatasetShare.png" alt="Set the Share ACL Permissions" id="Set the Share ACL Permissions" >}}

Change **Who** from the default **everyone@** to the private dataset share user. In the example, the user is *rikka* for the *rikka-private* share.
Leave **Permissions** set to **Full** and **Type** set to **Allowed**.
Click **Add** to show another **Add entry** group of settings. Change **Who** to the admin user to allow for share maintenance tasks, like moving the directory to a new location if that becomes necessary.

If granting other users in a group to a private share for that group, add an entry for each user and change the level of permissions to what is needed. For example, if the group members can read the files but not change them, set **Permission** to **READ** for those users, and grant the user that maintains the documents either **FULL** or **CHANGE** permissions.

Click **Save** when finished.

### Adding Share Users with Directory Services

You can use Active Directory or LDAP to create the share users.

If not already created, add a pool, then join Active Directory.

Go to **Storage** and [create a pool]({{< ref "CreatePoolWizard" >}}).

Next, [set up the Active Directory]({{< ref "/SCALE/SCALETutorials/credentials/directoryservices/configadscale" >}}) that you want to share resources with over your network.

When creating the share for this dataset, use the **SMB** preset for the dataset, but do not add the share from the **Add Dataset** screen. 

Do not share the root directory!

Go to **Shares** and follow the instructions listed above using the **Private Dataset Share** preset, and then modify the file system permissions of the dataset to use the **NFSv4_HOME** ACL preset.
