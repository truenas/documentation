---
title: "Setting Up SMB Home Shares"
description: "Provides instructions to set up SMB home shares."
weight: 40
tags:
- smb
---


{{< include file="/static/includes/RootLevelDatasetShareWarning.md" >}}

{{< hint type=important title="Legacy Feature" >}}
SMB Home Shares are a legacy feature for organizations looking to maintain existing SMB configurations.
They are not recommended for new deployments.

Future TrueNAS SCALE releases can introduce instability or require configuration changes affecting this legacy feature.
{{< /hint >}}

## Setting Up SMB Home Shares
The **Use as Home Share** option, found in the **Add SMB** and **Edit SMB** screen **Advanced Options** settings in the **Other Options** section, is an available option for organizations or SMEs that want to use a single SMB share to provide a personal directory to every user account.

With home shares, each user is given a personal home directory when connecting to the share.
These home directories are not accessible by other users.
You can use only one share as the home share, but you can create as many non-home shares as you need or want.

<!-- Place holders for future tutorials/links below. Update with links to appropriate procedures as part of PD-1252 -->
Other options for configuring individual user directories include:
* Configure a single share on the TrueNAS and provision individual user directories on the client OS. 
* Create a single SMB share and configure the ACL so that users can create individual directories on the share that inherit write access for the user and grant read access the administrator.
* Create an SMB share using the **Private SMB datasets and shares** preset that can create per-user datasets under the umbrella of a single share when users access the share.

Creating an SMB home share requires configuring the system storage and provisioning users or joining Active Directory.

### Adding Local Share Users
Go to **Credentials > Users** and click **Add**.
Create a new user name and password.

By default, the user **Home Directory** title comes from the user account name and is added as a new subdirectory of **Home_Share_Dataset**.

![AddUserDirPermsAuthSettings](/images/SCALE/Credentials/AddUserDirPermsAuthSettings.png "Add User Directories, Permissions and Authentication Settings")

If existing users require access to the home share, go to **Credentials > Users** and edit an existing account.

Adjust the user home directory to the appropriate dataset and give it a name to create its own directory.

{{< hint type="important" title="Home Directory Known Impacts" >}}
{{< include file="/static/includes/24.04HomeDirectory.md" >}}

{{< expand "Why the change?" "v" >}}
TrueNAS uses the `pam_mkhomdir` PAM module in the pam_open_session configuration file to automatically create user home directories if they do not exist.
`pam_mkhomedir` returns `PAM_PERM_DENIED` if it fails to create a home directory for a user, which eventually turns into a pam_open_session() failure.
This does not impact other PAM API calls, for example, `pam_authenticate()`.

TrueNAS SCALE does not include the customized version of `pam_mkhomedir` used in TrueNAS CORE that specifically avoided trying to create the `/nonexistent` directory. This led to some circumstances where users could create the `/nonexistent` directory on SCALE versions before 24.04.

Starting in SCALE 24.04 (Dragonfish), the root filesystem of TrueNAS is read-only, which prevents `pam_mkhomdir` from creating the `/nonexistent` directory in cases where it previously did.
This results in a permissions error if `pam_open_session()` is called by an application for a user account that has **Home Directory** set to **/nonexistent**.
{{< /expand >}}
{{< /hint >}}


### Adding Share Users with Directory Services

You can use Active Directory or LDAP to create share users.

If not already created, add a pool, then join Active Directory.

Go to **Storage** and [create a pool]({{< relref "CreatePoolWizard.md" >}}).

Next, [set up the Active Directory]({{< relref "/SCALETutorials/credentials/directoryservices/configadscale.md" >}}) that you want to share resources with over your network.

### Creating the Share and Dataset

{{< include file="/static/includes/LocalSMBUser.md" >}}

You can either add the share when you [create the dataset]({{< relref "DatasetsSCALE.md" >}}) for the share on the **Add Dataset** screen, or create the dataset when you add the share on the **Add SMB** screen.
If you want to customize the dataset, use the **Add Dataset** screen.

{{< include file="/static/includes/CreateDatasetSCALE.md" >}}

To use the **Add SMB** screen, Click **Add** on the **Windows (SMB) Shares** widget to open the screen.

Set the **Path** to the existing dataset created for the share, or to where you want to add the dataset, then click **Create Dataset**.

Enter a name for the dataset and click **Create Dataset**.
The dataset name populates the share **Name** field and updates the **Path** automatically.
The dataset name becomes the share name. Leave this as the default.
If you change the name follow the naming conventions for:
* [Files and directories](https://learn.microsoft.com/en-us/windows/win32/fileio/naming-a-file#naming-conventions)
* [Share names](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-fscc/dc9978d7-6299-4c5a-a22d-a039cdc716ea)

Set the **Purpose** to **No presets**, then click **Advanced Options**.
Scroll down to **Other Options** and set **Use as Home Share**.
Click **Save**.

Enable the **SMB** service when prompted to make the share available on your network.

After saving the dataset, set the permissions.

### Setting Dataset Permissions
After creating the share and dataset, you can edit permissions using either the **Edit** option on the **Permissions** widget for the dataset or use the **Edit Filesystem ACL** option for the share on the **Windows (SMB) Share** widget to open the ACL edit screen for the share dataset.
See [SMB Shares]({{< relref "ManageSMBShares.md" >}}) for more information on editing the share dataset permissions.

Click on the new dataset. Scroll down to the **Permissions** widget and click **Edit**.

Click the **Owner** dropdown and select the owner, then repeat for **Group**.
Change the owning group to your Active Directory domain admins. Select **Apply Owner** and **Apply Group**.

![GroupDomainAdminsSCALE](/images/SCALE/Datasets/GroupDomainAdmins.png "Set the owning group to Domain Admins")

Click **Use an ACL Preset** and choose **NFS4_HOME**.
Then, click **Continue**.

![StoragePoolsOptionsEditPermissionsACLPresetHomeSCALE](/images/SCALE/Datasets/StoragePoolsOptionsEditPermissionsACLPresetHome.png "Set the Home ACL Preset")

After adding the user accounts and configuring permissions, users can log in to the share and see a folder matching their user name.

{{< include file="/static/includes/SMBShareMSDOSalert.md" >}}
