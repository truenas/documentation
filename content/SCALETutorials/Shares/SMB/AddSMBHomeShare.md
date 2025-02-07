---
title: "Setting Up SMB Home Shares"
description: "Provides instructions on setting up private SMB datasets and shares as an alternative to legacy SMB home shares."
weight: 40
tags:
- smb
---


{{< include file="/static/includes/RootLevelDatasetShareWarning.md" >}}

{{< hint type=important title="Legacy Feature" >}}
SMB Home Shares are a legacy feature for organizations looking to maintain existing SMB configurations.
They are not recommended for new deployments.

Future TrueNAS releases can introduce instability or require configuration changes affecting this legacy feature.
{{< /hint >}}

## Replacing SMB Home Shares
TrueNAS does not recommend setting up home shares with the **Use as Home Share** option, found in the **Add SMB** and **Edit SMB** screen **Advanced Options** settings, in the **Other Options** section.
This option is for organizations still using the legacy home shares option of adding a single SMB share to provide a personal directory for every user account.

Users wanting to create the equivalent of home shares should use the intructions in the [Adding Private SMB Datasets and Shares](#adding-private-smb-datasets-and-shares) section below for the recommended method for creating private shares and datasets.

The legacy home shares provide each user a personal home directory when connecting to the share.
These home directories are not accessible by other users.
You can use only one share as the home share, but you can create as many non-home shares as you need or want.

Other options for configuring individual user directories include:
* Configure a single share on the TrueNAS and provision individual user directories on the client OS. 
* Create a single SMB share and configure the ACL so that users can create individual directories on the share that inherit write access for the user and grant read access the administrator.
* Create an SMB share using the **Private SMB datasets and shares** preset; and then create per-user datasets under the umbrella of a single share when users access the share.

Creating an SMB home share requires configuring the system storage and provisioning users or joining Active Directory.

## Adding Private SMB Datasets and Shares
This option allows creating private share and datasets for the users that require the equivalent of the legacy home share.
It is not intended for every user on the system.
Setting up private SMB shares and datasets prevents the system from showing these to all users with access to the root level of the share.
Examples of private SMB shares are those for backups, system configuration, and users or departments that need to keep information private from other users.

Before setting up SMB shares check system alerts to verify there are no errors related to connections to Active Directory.
Resolve any issues with Active Directory before proceeding. If Active Directory cannot bind with TrueNAS you cannot start the SMB service after making changes.

To add private shares and datasets for users that require home directories:

1. Create the share using the **Private SMB Datasets and Shares** preset.

2. Configure the share dataset ACL to use the **NFSv4_HOME** preset.

3. Create users either manually or through Active Directory.

### Creating the Share and Dataset

{{< include file="/static/includes/LocalSMBUser.md" >}}

You can use an existing dataset for the share or create a new dataset.
You can either add a share when you [create the dataset]({{< relref "DatasetsSCALE.md" >}}) for the share on the **Add Dataset** screen, or create the dataset when you add the share on the **Add SMB** screen.
If creating a simple SMB share and dataset use either method, or if customizing the dataset, use the [**Add Dataset** screen]({{< relref "DatasetsSCALE.md" >}}) to access dataset advanced setting options.
To configure a customized SMB share, use the **Add SMB** share option that provides access to the advanced setting options for shares.
This procedure covers creating the share and dataset from the **Add Share** screen.

To create an alternative to the legacy SMB home share:

1. Go to **Shares**, click **Add** on the **Windows (SMB) Shares** widget to open the **Add SMB** screen.

   If you created the dataset already, you can add the share with the correct share preset on this screen.
   If you are creating the share and dataset together you can create both using the correct share preset on this screen.

2. Browse to or enter the location of an existing dataset or path to where you want to create the dataset to populate the **Path** for the share.
   To add a dataset, click **Create Dataset**, enter a name for the dataset, then click **Create Dataset**.
   For example, creating a share and dataset named *private*.
   
   {{< trueimage src="/images/SCALE/Shares/AddPrivateSMBShare.png" alt="Set the Share Path" id="Set the Share Path" >}}

   Follow naming conventions for:
   * [Files and directories](https://learn.microsoft.com/en-us/windows/win32/fileio/naming-a-file#naming-conventions)
   * [Share names](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-fscc/dc9978d7-6299-4c5a-a22d-a039cdc716ea)

   By default, the dataset name populates the share **Name** field and becomes the share name. The share and dataset must have the same name. It also updates the **Path** automatically.

3. Set **Purpose** to the **Private SMB Dataset and Share** preset and click **Advanced Options** to show the additional settings.
   Configure the options you want to use.

   {{< trueimage src="/images/SCALE/Shares/AddPrivateSMBShareAdvancedOptions.png" alt="Add Share Advanced Options" id="Add Share Advanced Options" >}}

4. (Optional) Select Enable for audit logging.
   
5. Scroll down to **Other Options** and select **Export Recycle Bin** to allow moving files deleted in the share to a recycle bin in that dataset.
   Files are renamed to a per-user subdirectory within <file>.recycle</file> directory at the root of the SMB share if the path is the same dataset as the share.
   If the dataset has nested dataset, the directory is at the root of the current dataset. If this is the case, there is not automatic deletion based on file size. 

6. Click **Save**.

7. Enable or restart the **SMB** service when prompted and make the share available on your network.

After saving the dataset and if not already set for the dataset, set the ACL permissions.

### Setting Dataset ACL Permissions
After creating the share and dataset, edit ACL permissions.
You can access the **Edit ACL** screen either from the **Datasets** or the **Shares** screens.

If starting on the **Datasets** screen, select the dataset row, then click **Edit** on the **Permissions** widget to open the **Edit ACL** screen.
See [Setting Up Permissions]({{< relref "PermissionsSCALE.md" >}}) for more information on editing dataset permissions.

If starting on the **Shares** screen, select the share on the **Windows (SMB) Share** widget, then click **Edit Filesystem ACL** to open the **Edit ACL** screen.
Select the option to edit the file system ACL not the share permissions.
See [SMB Shares]({{< relref "ManageSMBShares.md" >}}) for detailed information on editing the share dataset permissions.

To set the permission for the private dataset and share, the home share alternative scenario, select the **HOME** (if a POSIX ACL) or **NSFv4_HOME** (for NFSv4 ACL) preset option to correctly configure dataset permissions.

Click the **Owner** dropdown and select the administration user with full control, then repeat for **Group**.
You can set the owning group to your Active Directory domain admins. Click **Apply Owner** and **Apply Group**.

{{< trueimage src="/images/SCALE/Shares/SetACLPresetForPrivateDataset.png" alt="Add Dataset ACL Permissions" id="Add Dataset ACL Permissions" >}}

![GroupDomainAdminsSCALE](/images/SCALE/Datasets/GroupDomainAdmins.png "Set the owning group to Domain Admins")

Next, click **Use Preset** and choose **NFS4_HOME**. If the dataset has a POSIX ACL the preset is **HOME**.
Click **Continue**, then click **Save Access Control List**.

Next, add the users that need a private dataset and share.

{{< include file="/static/includes/SMBShareMSDOSalert.md" >}}

### Adding Local Share Users
Go to **Credentials > Users** and click **Add**.
Create a new user name and password. For home directories, make the username all lowercase.

Add and configure permissions for the user the private share is for to allow log in access to the share and the ability see a folder matching their username.

By default, the user **Home Directory** is set to **/var/empty**.
You must change this to the path for the new parent dataset created for home directories.
Select the path **/mnt/*poolname*/*datasetname*/*username*** where *poolname* is the name of the pool where you added the share dataset, *datasetname* is the name of the dataset associated with the share, and *username* is the username (all lowercase) and is also the name of the home directory for that username.
Select **Create Home Directory**.

{{< trueimage src="/images/SCALE/Shares/SetUserHomeDirectoryToPrivate.png" alt="Add User Home Directory for Private Dataset" id="Add User Home Directory for Private Dataset" >}}

Click **Save**. TrueNAS adds the user and creates the home directory for the user.

If existing users require access to a home share, go to **Credentials > Users**, select the user, click **Edit** and add the home directory as described above.

{{< hint type="important" title="Home Directory Known Impacts" >}}
{{< include file="/static/includes/24.04HomeDirectory.md" >}}

{{< expand "Why the change?" "v" >}}
TrueNAS uses the `pam_mkhomdir` PAM module in the pam_open_session configuration file to automatically create user home directories if they do not exist.
`pam_mkhomedir` returns `PAM_PERM_DENIED` if it fails to create a home directory for a user, which eventually turns into a pam_open_session() failure.
This does not impact other PAM API calls, for example, `pam_authenticate()`.

TrueNAS 24.04 (or newer) does not include the customized version of `pam_mkhomedir` used in TrueNAS 13.0 and earlier or 13.3 releases.
This version of `pam_mkhomedir` specifically avoided trying to create the `/nonexistent` directory.
This led to some circumstances where users could create the `/nonexistent` directory on TrueNAS versions before 24.04.

Starting in TrueNAS 24.04 (Dragonfish), the root file system of TrueNAS is read-only, which prevents `pam_mkhomdir` from creating the `/nonexistent` directory in cases where it previously did.
This results in a permissions error if `pam_open_session()` is called by an application for a user account that has **Home Directory** set to **/nonexistent**.
{{< /expand >}}
{{< /hint >}}

### Adding Share Users with Directory Services
You can use Active Directory or LDAP to create share users.

If not already created, add a pool, then join Active Directory.

Go to **Storage** and [create a pool]({{< relref "CreatePoolWizard.md" >}}).

Next, [set up the Active Directory]({{< relref "/SCALETutorials/credentials/directoryservices/configadscale.md" >}}) that you want to share resources with over your network.


When creating the share for this dataset, use the **SMB** preset for the dataset but do not add the share from the **Add Dataset** screen. 

Do not share the root directory!

Go to **Shares** and follow the instructions listed above using the **Private SMB Dataset and Share** preset, and then modifying the file system permissions of the dataset to use the **NFSv4_HOME** ACL preset.
