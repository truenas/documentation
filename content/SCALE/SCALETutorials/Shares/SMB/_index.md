---
title: "Windows Shares (SMB)"
description: "Provides information on SMB shares and instruction creating a basic share and setting up various specific configurations of SMB shares."
geekdocCollapseSection: true
weight: 50
related: false
aliases:
 - /scale/scaletutorials/shares/smb/addsmbshares/
tags:
- smb
- afp
- shares
---


{{< include file="/static/includes/RootLevelDatasetShareWarning.md" >}}

## About Windows (SMB) Shares
SMB (also known as CIFS) is the native file-sharing system in Windows.
SMB shares can connect to most operating systems, including Windows, MacOS, and Linux.
TrueNAS can use SMB to share files among single or multiple users or devices.

SMB supports a wide range of permissions, security settings, and advanced permissions (ACLs) on Windows and other systems, as well as Windows Alternate Streams and Extended Metadata.
SMB is suitable for managing and administering large or small pools of data.

TrueNAS uses [Samba](https://www.samba.org/) to provide SMB services.
The SMB protocol has multiple versions. An SMB client typically negotiates the highest supported SMB protocol during SMB session negotiation.
Industry-wide, SMB1 protocol (sometimes referred to as NT1) usage is deprecated for security reasons.

{{< include file="/static/includes/SMBShareMSDOSalert.md" >}}

However, most SMB clients support SMB 2 or 3 protocols, even when not default.

{{< hint type=note >}}
Legacy SMB clients rely on NetBIOS name resolution to discover SMB servers on a network.
TrueNAS disables the NetBIOS Name Server (nmbd) by default. Enable it on the **Network > Global Settings** screen if you require this functionality.

MacOS clients use mDNS to discover SMB servers present on the network. TrueNAS enables the mDNS server (avahi) by default.

Windows clients use [WS-Discovery](https://docs.oasis-open.org/ws-dd/ns/discovery/2009/01) to discover the presence of SMB servers, but you can disable network discovery by default depending on the Windows client version.

Discoverability through broadcast protocols is a convenience feature and is not required to access an SMB server.
{{< /hint >}}

## Sharing Administrator Access

{{< include file="/static/includes/SharingAdminRole.md" >}}

## How do I add an SMB Share?

{{< hint type="info" title="Active Directory and SMB Service" >}}
Verify Active Directory connections are working and error free before adding an SMB share.
If configured but not working or in an error state, AD cannot bind and prevents starting the SMB service.
{{< /hint >}}

Creating an SMB share to your system involves several steps to add the share and get it working.

1. [Create the SMB share user account](#creating-the-smb-share-user-account).
   You can also use directory services like Active Directory or LDAP to provide additional user accounts.
   If setting up an external SMB share, we recommend using Active Directory or LDAP, or at a minimum synchronizing the user accounts between systems.

2. [Create the SMB share and dataset](#adding-an-smb-share-and-dataset).
   You can create a basic SMB share, or for more specific share types or feature requirements, use the [Advanced Options](#configuring-share-advanced-options-settings) instructions before saving the share.

   TrueNAS allows creating the dataset and share at the same time from either the **Add Dataset** screen or the **Add SMB** share screen.
   Use either option to create a basic SMB share, but when customizing share presets use the **Add SMB** screen to create the share and dataset.
   The procedure in this article provides the instructions to add the dataset while adding the share using the **Add SMB** screen.

3. [Modify the share permissions](#tuning-the-dataset-acl).
   After adding or modifying the user account for the share, edit the dataset permissions.

After adding the share, [start the service](#starting-the-smb-service) and [mount it](#mounting-the-smb-share) to your other system.

### Creating SMB Share User Accounts

{{< include file="/static/includes/LocalSMBUser.md" >}}

To add users or edit users, go to **Credentials > Users** to add or edit the SMB share user(s).
Click **Add** to create a new or as many new user accounts as needed.
If joined to Active Directory, Active Directory can create the TrueNAS accounts.

Enter the values in each required field, verify **Samba Authentication** is selected, then click **Save**.
For more information on the fields and adding users, see [Creating User Accounts]({{< relref "ManageLocalUsersScale.md" >}}).

By default, all new users are members of a built-in group called **builtin_users**.
You can use a group to grant access to all users on the server or add more groups to fine-tune permissions for large numbers of users.

{{< expand "Why not just allow anonymous access to the share?" "v" >}}
Anonymous or guest access to the share is possible, but it is a security vulnerability and not recommended for Enterprise or systems with more than one SMB share administrator account.
Using a guest account also increases the likelihood of unauthorized users gaining access to your data.
Major SMB client vendors are deprecating it, partly because signing and encryption are impossible for guest sessions.
{{< /expand >}}
{{< expand "What about LDAP users?" "v" >}}
{{< hint type=important >}}
Support for LDAP **Samba Schema** is deprecated in TrueNAS 22.02 (Angelfish) and removed in 24.10 (Electric Eel).
Migrate legacy Samba domains to Active Directory before upgrading to 24.10 or later.
{{< /hint >}}
{{< /expand >}}

## Adding an SMB Share and Dataset
You can create an SMB share while [creating a dataset on the **Add Dataset** screen]({{< relref "DatasetsSCALE.md" >}}) or create the dataset while creating the share on the **Add SMB Share** screen.
This article covers adding the dataset on the **Add SMB Share** screen.

{{< include file="/static/includes/AppsSMBErrorWarning.md" >}}

{{< include file="/static/includes/ShareDatasetsNotPools.md" >}}

{{< expand "What are ZFS dataset setting defaults?" "v" >}}
TrueNAS creates the ZFS dataset with these settings:

* **ACL Mode** set to **Restricted**
   The **ACL Type** influences the **ACL Mode** setting. When **ACL Type** is set to **Inherit**, you cannot change the **ACL Mode** setting.
   When **ACL Type** is set to **NFSv4**, you can change the **ACL Mode** to **Restricted**.

* **Case Sensitivity** set to **Insensitive**

TrueNAS also applies a default access control list to the dataset.
This default ACL is restrictive and only grants access to the dataset owner and group.
You can modify the ACL later according to your use case.
{{< /expand >}}

To create a basic Windows SMB share and a dataset, go to **Shares**, then click **Add** on the **Windows Shares (SMB)** widget to open the **Add Share** screen.

   {{< trueimage src="/images/SCALE/Shares/AddShareBasicOptions.png" alt="Add SMB Basic Options" id="Add SMB Basic Options" >}}

1. Enter or browse to select SMB share mount path (parent dataset where you want to add a dataset for this share) to populate the **Path** field.
   The **Path** is the directory tree on the local file system that TrueNAS exports over the SMB protocol.
   
   {{< include file="/static/includes/FileExplorerFolderIcons.md" >}}

2. Click **Create Dataset**. Enter the name for the share dataset in the **Create Dataset** dialog, then click **Create**.
   The system creates the new dataset.

   **Name** becomes the dataset name entered and is the SMB share name.
   This forms part of the share pathname when SMB clients perform an SMB tree connect.
   Because of how the SMB protocol uses the name, it must be less than or equal to 80 characters.
   Do not use invalid characters as specified in Microsoft documentation MS-FSCC section 2.1.6.

   If you change the name, follow the naming conventions for:
   * [Files and directories](https://learn.microsoft.com/en-us/windows/win32/fileio/naming-a-file#naming-conventions)
   * [Share names](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-fscc/dc9978d7-6299-4c5a-a22d-a039cdc716ea)

   If creating an external SMB share, enter the hostname or IP address of the system hosting the SMB share and the name of the share on that system.
   Enter as **EXTERNAL:*ip address*&bsol;*sharename*** in **Path**, then change **Name** to EXTERNAL with no special characters.

3. (Optional) Select a preset from the **Purpose** dropdown list to apply.
   The preset selected locks or unlock pre-determined **Advanced Options** settings for the share.
   To retain control over all the share **Advanced Options** settings, select **No presets** or **Default share parameters**.
   To create an alternative to Home Shares, select **Private SMB Datasets and Shares**.
   See [Setting Up SMB Home Shares]({{< relref "AddSMBHomeShare.md" >}}) for more information on replacing this legacy feature with private SMB shares and datasets.

   {{< expand "SMP Purpose Options" "v" >}}
   {{< include file="/static/includes/SMBPurposePresets.md" >}}
   {{< /expand >}}

4. (Optional) Enter a **Description** to help explain the share purpose.

5. Select **Enabled** to allow sharing of this path when the SMB service is activated.
   Leave it cleared to disable the share without deleting the configuration.

6. (Optional) Click **Advanced Options** to configure audit logging or other advanced configuration settings such as changing **Case Sensitivity**.

7. Click **Save** to create the share and add it to the **Shares > Windows (SMB) Shares** list.

Enable the SMB service when prompted.

### Configuring Share Advanced Options Settings
For a basic SMB share, using the **Advanced Options** settings is not required, but if you set **Purpose** to **No Presets**, click **Advanced Options** to finish customizing the SMB share for your use case.

The following are possible use cases. See [SMB Shares Screens]({{< relref "SMBSharesScreens.md" >}}) for all settings and other possible use cases.

{{< expand "Setting Up Guest Access" "v" >}}
**Not a recommended configuration and adds security vulnerabilities!**

To allow guest access to the share, select **Allow Guest Access**.
The privileges are the same as the guest account.
Windows 10 version 1709 and Windows Server version 1903 disable guest access by default.
Additional client-side configuration is required to provide guest access to these clients.

* **MacOS clients**: Attempting to connect as a user that does not exist in TrueNAS does not automatically connect as the guest account.

* **Connect As: Guest** Specifically choose this option in macOS to log in as the guest account.
  See the [Apple documentation](https://support.apple.com/guide/mac-help/connect-mac-shared-computers-servers-mchlp1140/mac) for more details.

If setting up guest access with read only permissions, see the information in [Adding a New Share Group](#adding-a-new-share-group).
If the share is nested under parent datasets, see [Using the Traverse Permission](#using-the-traverse-permission).
{{< /expand >}}
{{< expand "Setting Up Read or Write Access" "v" >}}
To prohibit writes to the share, select **Export Read-Only**.

To restrict share visibility to users with read or write access to the share, select **Access Based Share Enumeration**.
See the [smb.conf](https://www.samba.org/samba/docs/current/man-html/smb.conf.5.html) manual page.
{{< /expand >}}
{{< expand "Setting Up Host Allow and Host Deny" "v" >}}
Use the **Host Allow** and **Host Deny** options to allow or deny specific host names and IP addresses.

Use the **Hosts Allow** field to enter a list of allowed host names or IP addresses.
Separate entries by pressing <kbd>Enter</kbd>.
{{< hint type="Warning" title="Setting Host Allow" >}}
Entering values in the **Host Allow** restricts access to only the addresses entered into this list!
You can break UI access for all other IP or host name entries by using this list.
{{< /hint >}}
You can find a more detailed description with examples [here](https://www.samba.org/samba/docs/current/man-html/smb.conf.5.html#HOSTSALLOW).
Use the **Hosts Deny** field to enter a list of denied host names or IP addresses. Separate entries by pressing <kbd>Enter</kbd>.

**Hosts Allow** and **Hosts Deny** work together to produce different situations:
* Leaving both **Hosts Allow** and **Hosts Deny** free of entries allows any host to access the SMB share.
* Adding entries to the **Hosts Allow** list but not the **Hosts Deny** list allows only the hosts on the **Hosts Allow** list to access the share.
* Adding entries to the **Hosts Deny** list but not **Hosts Allow** list allows all hosts not on the **Hosts Deny** list to access the share.
* Adding entries to both a **Hosts Allow** and **Hosts Deny** list allows all hosts on the **Hosts Allow** list to access the share, and also allows hosts not on the **Hosts Allow** or **Hosts Deny** list to access the share.
{{< /expand >}}
{{< expand "Apple Filing Protocol (AFP) Compatibility" "v" >}}
AFP shares are deprecated and not available in TrueNAS.

To customize your SMB share to work with a migrated AFP share or with your MacOS, use the **Advanced Options** settings provided for these use cases:

* **Time Machine** enables [Apple Time Machine](https://support.apple.com/en-us/HT201250) backups on this share.

* **Legacy AFP Compatibility** controls how the SMB share reads and writes data.
  Leave unset for the share to behave like a standard SMB share.
Only set this when the share originated as an AFP sharing configuration.
Pure SMB shares or macOS SMB clients do not require legacy compatibility.

**Use Apple-style Character Encoding** converts NTFS illegal characters in the same manner as MacOS SMB clients.
By default, Samba uses a hashing algorithm for NTFS illegal characters.
{{< /expand >}}
{{< expand "Private SMB Datasets and Shares" "v" >}}
Use to set up an alternative to the legacy Home Shares function.

Allow adding private datasets and shares for individual users. Useful as an alternate way to creating home shares for individual users.
See [Setting Up SMB Home Shares]({{< relref "AddSMBHomeShare.md" >}}) for more information.
{{< /expand >}}
{{< expand "Enabling SMB Audit Logging" "v" >}}
To enable SMB audit logging, from either the **Add SMB** or **Edit SMB** screens, click **Advanced Options**, scroll down to **Audit Logging** and select **Enable**.
{{< /expand >}}

### Enabling ACL Support
To add ACL support to the share, select **Enable ACL** under **Advanced Options** on either the **Add SMB** or **Edit SMB** screens.
See [Managing SMB Shares]({{< relref "ManageSMBShares.md" >}}) for more on configuring permissions for the share and the file system.

## Tuning ACLs for SMB Shares
There are two levels to set SMB share permissions, at the share or for the dataset associated for with the share.
See [Managing SMB Shares]({{< relref "ManageSMBShares.md" >}}) for more information on these options.

See [Permissions]({{< relref "PermissionsScale.md" >}}) for more information on dataset permissions.

### Tuning the Share ACL

{{< include file="/static/includes/ShareACLPermissions.md" >}}

### Tuning the Dataset (Filesystem) Permissions

{{< include file="/static/includes/FilesystemACLPermissions.md" >}}

#### Changing the built-in-user Group Permissions

{{< include file="/static/includes/ChangeBuiltin-UserACL.md" >}}

#### Adding a New Share Group

{{< include file="/static/includes/AddNewSMBShareGroupAndACE.md" >}}

#### Using the Traverse Permission

{{< include file="/static/includes/UsingTraversePermission.md" >}}

## Starting the SMB Service
To connect to an SMB share, start the SMB service.

After adding a new share TrueNAS prompts you to either start, or restart the SMB service.

You can also start the service from the **Windows (SMB) Share** widget or on the **System > Services** screen from the **SMB** service row.

### Starting the Service Using the Windows SMB Share
From the **Sharing** screen, click on the **Windows (SMB) Shares** <span class="material-icons">more_vert</span> to display the service options, which are **Turn Off Service** if the service is running or **Turn On Service** if the service is not running.

{{< trueimage src="/images/SCALE/Shares/SMBShareOptions.png" alt="SMB Service Options" id="SMB Service Options" >}}

Each SMB share on the list also has a toggle to enable or disable the service for that share.

### Starting the Service Using System Settings
To make SMB share available on the network, go to **System > Services** and click the toggle for **SMB**.
Set **Start Automatically** if you want the service to activate when TrueNAS boots.

## Configuring the SMB Service
Configure the SMB service by clicking **Config Service** from the <span class="material-icons">more_vert</span> dropdown menu on the **Windows (SMB) Shares** widget header or by clicking <i class="material-icons" aria-hidden="true" title="Configure">edit</i> on the **Services** screen.
Unless you need a specific setting or are configuring a unique network environment, we recommend using the default settings.

## Mounting the SMB Share
The instructions in this section cover mounting the SMB share on a system with the following operating systems.

{{< expand "Mounting on a Linux System" "v" >}}
Verify that your Linux distribution has the required CIFS packages installed.

Create a mount point with the `sudo mkdir /mnt/smb_share` command.

Mount the volume with the `sudo mount -t cifs //computer_name/share_name /mnt/smb_share` command.

If your share requires user credentials, add the switch `-o username=` with the username after `cifs` and before the share address.
{{< /expand >}}

{{< expand "Mounting on a Windows System" "V" >}}
To permanently mount the SMB share in Windows, map a drive letter in the computer for the user to the TrueNAS IP and share name.
Select a drive letter from the bottom of the alphabet rather than from the top to avoid assigning a drive dedicated to some other device.
The example below uses *Z*.
Open the command line and run the following command with the appropriate drive letter, TrueNAS system name or IP address, and the share name.

<code>net use <i>Z</i>: &bsol;&bsol;<i>TrueNAS_name</i>&bsol;<i>share_name</i> /PERSISTENT:YES</code>

Where:
* *Z* is the drive letter to map to TrueNAS and the share
* *TrueNAS_name* is either the host name or system IP address
* *share_name* is the name given to the SMB share

To temporarily connect to a share, open a Windows File Explorer window, type <code>&bsol;&bsol;<i>TrueNAS_name</i>&bsol;<i>share_name</i></code> and then enter the user credentials to authenticate with to connect to the share.
Windows remembers the user credentials so each time you connect it uses the same authentication credentials unless you restart the system, then you are prompted to enter the authentication credentials again.
{{< /expand >}}

{{< expand "Mounting on an Apple System" "v" >}}
Have the username and password for the user assigned to the pool or for the guest if the share has guest access ready before you begin.

Open **Finder > Go > Connect To Server**
Enter the SMB address as follows: <code>smb://<i>192.168.1.111</i></code>.

Input the username and password for the user assigned to that pool or guest if the share has guest access.

For further tuning in macOS, Apple provides some enterprise-specific pointers in their [Adjust SMB browsing behavior in macOS](https://support.apple.com/en-us/102064) article.

{{< /expand >}}

{{< expand "Mounting on a FreeBSD System" "v" >}}
Mounting on a FreeBSD system involves creating the mount point, then mounting the volume.

Create a mount point using the `sudo mkdir /mnt/smb_share` command.

Mount the volume using the `sudo mount_smbfs -I computer_name\share_name /mnt/smb_share` command.
{{< /expand >}}

## Setting up an External SMB Share
External SMB shares are essentially redirects to shares on other systems.
Administrators might want to use this when managing multiple TrueNAS systems with SMB shares and if they do not want to keep track of which shares live on which boxes for clients.
This feature allows admins to connect to any of the TrueNAS systems with external shares set up, and to see them all.

Create the SMB share on another TrueNAS server (for example, *system1*), as described in [Adding an SMB Share](#adding-an-smb-share) above.

We recommend using Active Directory or LDAP when creating user accounts, but at a minimum synchronize user accounts between the system with the share (*system1*) and on the TrueNAS system where you set up the external share (for example, *system2*).

On *system2*, enter the host name or IP address of the system hosting the SMB share (*system1*) and the name given the share on that system as **EXTERNAL:*ip address*&bsol;*sharename*** in **Path**, then change **Name** to EXTERNAL with no special characters.

Leave **Purpose** set to **Default share parameters**, leave **Enabled** selected, then click **Save** to add the share redirect.

Repeat the *system2* instructions above to add an external redirect (share) on *system1* to see the SMB shares of each system.

{{< trueimage src="/images/SCALE/Shares/SetUpExternalSMBShare.png" alt="Set Up Another External SMB Share" id="Set Up Another External SMB Share" >}}

Repeat for each TrueNAS system with SMB shares to add as an external redirect.
Change the auto-populated name to EXTERNAL2 or something to distinguish it from the SMB shares on the local system (*system1* in this case) and any other external shares added.

<div class="noprint">

## SMB Shares Contents

These tutorials describe creating and managing various specific configurations of SMB shares.

{{< children depth="2" description="true" >}}

</div>
