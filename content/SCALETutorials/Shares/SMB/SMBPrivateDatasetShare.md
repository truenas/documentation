---
title: "Setting Up SMB Private Dataset Shares"
description: "Provides instructions on using SMB Private Datasets and Shares as an alternative to legacy SMB Home Shares."
weight: 40
aliases: 
 - /scale/25.04/scaletutorials/shares/smb/addsmbhomeshare
tags:
- smb
---

{{< include file="/static/includes/RootLevelDatasetShareWarning.md" >}}

{{< hint type=important title="Home Share Legacy Feature" >}}
SMB Home Share is a legacy feature for organizations looking to maintain existing SMB configurations.
TrueNAS removed the home share option from the SMB share **Purpose** list in 24.04 (Dragonfish).
The SMB share **Other Options** includes a home share legacy option but it is not recommended for new shares, it is for organizations still using the legacy home shares option of adding a single SMB share to provide a personal directory for every user account.
Future TrueNAS releases can introduce instability or require configuration changes affecting this legacy feature.

Microsoft has eliminated the Home Share feature in Windows 11 and deprecated it in Windows 10.
Microsoft ending support for Home Shares is planned for October 2025.
{{< /hint >}}

## Replacing SMB Home Shares
TrueNAS does not recommend setting up new home shares and has removed the **Use as Home Share** option, found in the **Other Options** section of the **Advanced Options** screen for the **Add SMB** and **Edit SMB** screens.
The **Private SMB Datasets and Shares** setting replaces the home shares option and is the recommended method to provide users with a private personal folder they access through an SMB share.
Follow the instructions in the [Adding Private SMB Datasets and Shares](#adding-private-smb-datasets-and-shares) section below to set up private and personal shares.

{{< expand "What is a private dataset and share?" "v" >}}
The private dataset and share option allows creating a private personal directory under the dataset specified as the home directory for the user, and when correctly configured, provides users with a private folder they access through an SMB share.
{{< /expand >}}

TrueNAS allows creating one private directory per user, but allows creating as many non-private directories as desired or needed.
Users can create as many directories as needed in their private share through Windows File Explorer.

TrueNAS does not control what Windows allows through the File Explorer.
If the personal directories show in File Explorer, use [Windows file properties](https://community.spiceworks.com/t/how-to-configure-file-sharing-in-windows-server/1014185) and access control to hide the folder in the share.

After creating a dataset and SMB share, use the path to this dataset as the home directory for each user with a private share directory.
Other users who do not require a private personal share can use a path to another dataset for their home directory.
This replaces the legacy home share personal home directory when connecting to the share.

Home directories are not visible to or accessible by other users.
Private directories created for users do not display in the datasets table on the **Datasets** screen.
They are visible on the **Edit User** screen in the file explorer section under the **Home Directory** field.

Other options for configuring individual user directories include:
* Configure a single share on the TrueNAS and provision individual user directories on the client OS. 
* Create a single SMB share and configure the ACL so that users can create individual directories on the share that inherit write access for the user and grant read access to the administrator.
* Create an SMB share using the **Private SMB datasets and shares** preset, and then create per-user datasets under the umbrella of a single share when users access the share.

Creating an SMB private dataset and share requires provisioning users or joining Active Directory, and configuring the system storage and share.

## Adding Private SMB Datasets and Shares

Private directories are not intended for every user on the system.
When using the **Private SMB Datasets and Shares** share **Purpose** preset and configuring it as a home directory the system TrueNAS does not show the private directories to all users with access to the root level of the share.

Examples of setting up private SMB shares are those for backups, system configuration, and users or departments that need to keep information private from other users.

You can manually add users and groups in TrueNAS, or configure groups in Active Directory and add users to each group, and then have AD add the users and group to TrueNAS.
After adding users and groups, configure private directories and home directories for the users and group(s).
Before setting up SMB shares, check system alerts to verify no errors related to connections to Active Directory are listed.
Resolve any issues with Active Directory before proceeding. If Active Directory cannot bind with TrueNAS, you cannot start the SMB service after making changes.

To add private shares and datasets for users that require home directories:

1. Create the share (and dataset) using the **Private SMB Datasets and Shares** preset.

2. Configure the share dataset ACL to use the **NFSv4_HOME** preset.

3. Create users either manually or through Active Directory.

4. Add the home directory path to the dataset where you want to create the private directory, and set permissions.

### Creating the Share and Dataset

{{< include file="/static/includes/LocalSMBUser.md" >}}

You can use an existing dataset or create a new dataset for the share.
We recommend using the **Add SMB** screen to create a new share and dataset for this procedure.
While you can add a share while [creating the dataset]({{< ref "DatasetsSCALE" >}}) on the **Add Dataset** screen, this method requires editing the share settings afterward.
In general, when creating a simple SMB share and dataset you can use either method, but if customizing the dataset, use the [**Add Dataset** screen]({{< ref "DatasetsSCALE" >}}) to access dataset advanced setting options.
To configure and customize an SMB share, using the **Add SMB** share method is better as it provides access to the advanced setting options for shares, meaning you do not have to edit settings afterward.

To create SMB private datasets and shares, go to **Shares** and click **Add** on the **Windows (SMB) Shares** widget to open the **Add SMB** screen.

1. Enter or browse to select the path to where you want to add the share dataset, then click **Create Dataset**. This populates the **Path** for the share.

   Or, if the dataset is already created, select the share on the SMB widget, click edit, then change the **Purpose** setting to **Private SMB Datasets and Shares**.
   If creating a new share and dataset using the **Add SMB** screen, select **Private SMB Datasets and Shares** from the **Purpose** dropdown list before clicking **Advanced Options** to make other setting changes. See Step 3.

2. Enter a name for the dataset in the dialog field, then click **Create Dataset**. For example, creating a share and dataset named *private*.

   {{< trueimage src="/images/SCALE/Shares/AddPrivateSMBShare.png" alt="Set the Share Path" id="Set the Share Path" >}}

   Follow naming conventions for:
   * [Files and directories](https://learn.microsoft.com/en-us/windows/win32/fileio/naming-a-file#naming-conventions)
   * [Share names](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-fscc/dc9978d7-6299-4c5a-a22d-a039cdc716ea)

   The dataset name populates the share **Name** field and becomes the share name. The **Path** field is updated with the dataset name.
   The share and dataset must have the same name.

3. Select **Private SMB Dataset and Share** on the **Purpose** dropdown list.
   Click **Advanced Options** to show the additional settings to configure additional share setting options.

   {{< trueimage src="/images/SCALE/Shares/AddPrivateSMBShareAdvancedOptions.png" alt="Add Share Advanced Options" id="Add Share Advanced Options" >}}

4. (Optional) Select **Enable** for audit logging.

5. Scroll down to **Other Options** to select **Export Recycle Bin**, which allows moving files deleted in the share to a recycle bin in that dataset.

   Files are renamed to a per-user subdirectory within <file>.recycle</file> directory at the root of the SMB share if the path is the same dataset as the share.
   If the dataset has a nested dataset, the directory is at the root of the current dataset. If this is the case, there is no automatic deletion based on file size. 

6. Click **Save**.

7. Enable or restart the **SMB** service when prompted and make the share available on your network.

When prompted by the system to configure the dataset ACL, accept the option. The **Edit ACL** screen opens. 

### Setting Dataset ACL Permissions

Dataset ACL permissions are configured on the **Edit ACL** screen.
The user assigned the private directory share does not need to be added as an ACL entry in the dataset ACL.
Add an ACL entry to the dataset ACL to grant another user, other than the private share user or a group of users, to allow access to the private directory.

If on the **Datasets** screen, select the dataset row for the share dataset, then click **Edit** on the **Permissions** widget to open the **Edit ACL** screen.
See [Setting Up Permissions]({{< ref "PermissionsSCALE" >}}) for more information on editing dataset permissions.

If starting on the **Shares** screen and not prompted by the system to configure the ACL permissions or if you closed the prompt window, select the share on the **Windows (SMB) Share** widget, then click **Edit Filesystem ACL** to open the **Edit ACL** screen.
Do not select the option to edit the share permissions. Share permissions only apply to the share and not the dataset the share uses for storage.
See [SMB Shares]({{< ref "ManageSMBShares" >}}) for detailed information on editing the share dataset permissions.

Set the permission for the private dataset to allow additional users or a group if others are permitted to access the private directory share.

Click the **Owner** dropdown, select the administration user with full control, then repeat for **Group**.
You can set the owning group to your Active Directory domain admins. Click **Apply Owner** and **Apply Group** to apply the changes.

{{< trueimage src="/images/SCALE/Shares/SetACLPresetForPrivateDataset.png" alt="Add Dataset ACL Permissions" id="Add Dataset ACL Permissions" >}}

![GroupDomainAdminsSCALE](/images/SCALE/Datasets/GroupDomainAdmins.png "Set the owning group to Domain Admins")

Click **Use Preset** and choose **NFS4_HOME**. If the dataset has a POSIX ACL choose **HOME**.
Click **Continue**, then click **Save Access Control List**.

Next, click **Add Entry** to add entries for each user that needs access to the dataset.
To assign required permissions, select **User** in **Who** and locate the user name on the **User** dropdown list.
Select the required permissions.
Repeat for each user that needs access.
Alternatively, if you added users to a group, select, set **Who** to **Group** and locate the group on the dropdown list.

{{< include file="/static/includes/SMBShareMSDOSalert.md" >}}

After adding all users or groups and setting the required permissions for each, click **Save Access Control List**.

### Adding Local Share Users

Add users by joining Active Directory to TrueNAS, or manually create users in TrueNAS.
Edit existing users or the group to add home directories and grant access to private datasets and shares.

If manually adding existing users to a group in TrueNAS, go to **Groups**, click **Add** to create the group, then either configure Active Directory to assign the group or manually add the group to individual users in TrueNAS.

Go to **Credentials > Users** and click **Add** to create new users, or select the user on the **Users** screen and click **Edit**.
If adding a new user, enter the name and password information.

Next, add **bulitin-users** in **Auxilliary Group**, or for users in a group, add the group name.

Enter or browse to select the path to the dataset where you want to create home directories. For private datasets, create the private directory for the share.
By default, the user **Home Directory** is set to **/var/empty**.
You must change this to the path for the new parent dataset created for home directories.
Select the path **/mnt/*poolname*/*datasetname*/*username*** where *poolname* is the name of the pool where you added the share dataset, *datasetname* is the name of the dataset associated with the share, and *username* is the username.
For home directories, make the username all lowercase.

Select the permissions below the path field. 
Configure permissions for the user of the private share to allow login access to the share and the ability to see a folder matching their username.
Select **Create Home Directory**.

{{< trueimage src="/images/SCALE/Shares/SetUserHomeDirectoryToPrivate.png" alt="Add User Home Directory for Private Dataset" id="Add User Home Directory for Private Dataset" >}}

Click **Save**. TrueNAS adds the user and creates the home directory for the user.
The home directory shows on the **Edit User** screen but not on the **Datasets** screen.

{{< hint type="important" title="Home Directory Known Impacts" >}}

{{< expand "Why the change?" "v" >}}
TrueNAS uses the `pam_mkhomdir` PAM module in the pam_open_session configuration file to automatically create user home directories if they do not exist.
`pam_mkhomedir` returns `PAM_PERM_DENIED` if it fails to create a home directory for a user, which eventually turns into a pam_open_session() failure.
This does not impact other PAM API calls, for example, `pam_authenticate()`.

TrueNAS 24.04 (or newer) does not include the customized version of `pam_mkhomedir` used in TrueNAS 13.0 and earlier or 13.3 releases.
This version of `pam_mkhomedir` specifically avoided trying to create the `/nonexistent` directory.
This led to some circumstances where users could create the `/nonexistent` directory on TrueNAS versions before 24.04.

Starting in TrueNAS 24.04 (Dragonfish), the root file system of TrueNAS is read-only, which prevents `pam_mkhomdir` from creating the `/nonexistent` directory in cases where this previously occurred.
This results in a permissions error if `pam_open_session()` is called by an application for a user account that has **Home Directory** set to **/nonexistent**.
{{< /expand >}}
{{< /hint >}}

### Adding Share Users with Directory Services
You can use Active Directory or LDAP to create share users.

If not already created, add a pool, then join Active Directory.

Go to **Storage** and [create a pool]({{< ref "CreatePoolWizard" >}}).

Next, [set up the Active Directory]({{< ref "/SCALETutorials/credentials/directoryservices/configadscale" >}}) that you want to share resources with over your network.

When creating the share for this dataset, use the **SMB** preset for the dataset but do not add the share from the **Add Dataset** screen. 

Do not share the root directory!

Go to **Shares** and follow the instructions listed above using the **Private SMB Dataset and Share** preset, and then modify the file system permissions of the dataset to use the **NFSv4_HOME** ACL preset.