---
title: "Windows Shares (SMB)"
description: "Provides information on SMB shares and instruction on how to create a basic and set up various specific configurations of SMB shares."
geekdocCollapseSection: true
weight: 50
related: false
aliases:
 - /docs/scale/scaletutorials/shares/smb/addsmbshares/
tags:
- smb
- afp
- shares
---

## About Windows (SMB) Shares
SMB (also known as CIFS) is the native file-sharing system in Windows.
SMB shares can connect to most operating systems, including Windows, MacOS, and Linux.
TrueNAS can use SMB to share files among single or multiple users or devices.

SMB supports a wide range of permissions, security settings, and advanced permissions (ACLs) on Windows and other systems, as well as Windows Alternate Streams and Extended Metadata.
SMB is suitable for managing and administering large or small pools of data.

TrueNAS uses [Samba](https://www.samba.org/) to provide SMB services.
The SMB protocol has multiple versions. An SMB client typically negotiates the highest supported SMB protocol during SMB session negotiation.
Industry-wide, SMB1 protocol (sometimes referred to as NT1) usage is deprecated for security reasons.

{{< include file="/_includes/SMBShareMSDOSalert.md" >}}

However, most SMB clients support SMB 2 or 3 protocols, even when not default.

{{< hint type=note >}}
Legacy SMB clients rely on NetBIOS name resolution to discover SMB servers on a network.
TrueNAS disables the NetBIOS Name Server (nmbd) by default. Enable it on the **Network > Global Settings** screen if you require this functionality.

MacOS clients use mDNS to discover SMB servers present on the network. TrueNAS enables the mDNS server (avahi) by default.

Windows clients use [WS-Discovery](https://docs.oasis-open.org/ws-dd/ns/discovery/2009/01) to discover the presence of SMB servers, but you can disable network discovery by default depending on the Windows client version.

Discoverability through broadcast protocols is a convenience feature and is not required to access an SMB server.
{{< /hint >}}

## How do I add an SMB Share?
Creating an SMB share to your system involves several steps to add the share and get it working.

1. [Create the SMB share user account](#creating-the-smb-share-user-account).
   You can also use directory services like Active Directory or LDAP to provide additional user accounts.
   If setting up an external SMB share, we recommend using Active Directory or LDAP, or at a minimum synchronizing the user accounts between systems.

2. [Create the SMB share and dataset](#adding-an-smb-share-and-dataset).
   You can create a basic SMB share, or for more specific share types or feature requirements, use the [Advanced Options](#configuring-share-advanced-options-settings) instructions before saving the share.

   You can create the dataset and share on the **Add Dataset** screen or create the share and dataset on the **Add SMB Share** screen.
   The procedure in this article provides the instructions to add the dataset while adding the share.

3. [Modify the share permissions](#tuning-the-dataset-acl).
   After adding or modifying the user account for the share, edit the dataset permissions.

After adding the share, [start the service](#starting-the-smb-service) and [mount it](#mounting-the-smb-share) to your other system.

### Creating SMB Share User Accounts
{{< hint type=note >}}
You cannot access SMB shares using the root user, TrueNAS built-in user accounts, or those without the **Samba Authentication** selected.
{{< /hint >}}

To add users or edit users, go to **Credentials > Local Users** to add or edit the SMB share user(s).
Click **Add** to create a new or as many new user accounts as you need.

Enter the values in each required field, verify **Samba Authentication** is selected, then click **Save**.
For more information on the fields and adding users, see [Creating User Accounts]({{< relref "ManageLocalUsersScale.md" >}}).

By default, all new local users are members of a built-in group called **builtin_users**.
You can use a group to grant access to all local users on the server or add more groups to fine-tune permissions for large numbers of users.

{{< expand "Why not just allow anonymous access to the share?" "v" >}}
Anonymous or guest access to the share is possible, but it is a security vulnerability and not recommended for Enterprise or systems with more than one SMB share administrator account.
Using a guest account also increases the likelihood of unauthorized users gaining access to your data.
Major SMB client vendors are deprecating it, partly because signing and encryption are impossible for guest sessions.
{{< /expand >}}
{{< expand "What about LDAP users?" "v" >}}
If you want LDAP server users to access the SMB share, go to **Credentials > Directory Services**.
If you configured an LDAP server, select the server and click **Edit** to display the **LDAP** configuration screen.
If not configured, click **Configure LDAP** to display the **LDAP** configuration screen.
Click **Advanced Options** and select **Samba Schema (DEPRECATED - see the help text**).
{{< hint type=important >}}
Only enable LDAP authentication for the SMB share if you require it. Your LDAP server must have Samba attributes.
Support for **Samba Schema** is [officially deprecated in Samba 4.13](https://www.samba.org/samba/history/samba-4.13.0.html).
Samba Schema is no longer in Samba after 4.14.
Users should begin upgrading legacy Samba domains to Samba AD domains.
{{< /hint >}}
Local TrueNAS user accounts can no longer access the share.
{{< /expand >}}

## Adding an SMB Share and Dataset
You can create an SMB share while [creating a dataset on the **Add Dataset** screen]({{< relref "DatasetsSCALE.md" >}}) or create the dataset while creating the share on the **Add SMB Share** screen.
This article covers adding the dataset on the **Add SMB Share** screen.

{{< include file="/content/_includes/ShareDatasetsNotPools.md" >}}

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

To create a basic Windows SMB share and a dataset, go to **Shares** and click **Add** on the **Windows Shares (SMB)** widget to open the **Add Share** screen.

   {{< trueimage src="/images/SCALE/Shares/AddShareBasicOptions.png" alt="Add SMB Basic Options" id="Add SMB Basic Options" >}}

1. Enter or browse to select SMB share mount path (parent dataset where you want to add a dataset for this share) to populate the **Path** field.
   The **Path** is the directory tree on the local file system that TrueNAS exports over the SMB protocol.

2. Click **Create Dataset**. Enter the name for the share dataset in the **Create Dataset** dialog, then click **Create**.
   The system creates the new dataset.

   **Name** becomes the dataset name entered and is the SMB share name.
   This forms part of the share pathname when SMB clients perform an SMB tree connect.
   Because of how the SMB protocol uses the name, it must be less than or equal to 80 characters.
   It cannot have invalid characters as specified in Microsoft documentation MS-FSCC section 2.1.6.

   If you change the name, follow the naming conventions for:
   * [Files and directories](https://learn.microsoft.com/en-us/windows/win32/fileio/naming-a-file#naming-conventions)
   * [Share names](https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-fscc/dc9978d7-6299-4c5a-a22d-a039cdc716ea)

   If creating an external SMB share, enter the hostname or IP address of the system hosting the SMB share and the name of the share on that system.
   Enter as **EXTERNAL:*ip address*&bsol;*sharename*** in **Path**, then change **Name** to EXTERNAL with no special characters.

3. (Optional) Select a preset from the **Purpose** dropdown list to apply and lock or unlock pre-determined **Advanced Options** settings for the share.
   To retain control over all the share **Advanced Options** settings, select **No presets** or **Default share parameters**.

4. (Optional) Enter a **Description** to help explain the share purpose.

5. Select **Enabled** to allow sharing of this path when the SMB service is activated.
   Leave it cleared if you want to disable the share without deleting the configuration.

6. (Optional) Click **Advanced Options** to configure audit logging or other advanced configuration settings such as changing **Case Sensitivity**.

7. Click **Save** to create the share and add it to the **Shares > Windows (SMB) Shares** list.

Enable the SMB service when prompted.

### Configuring Share Advanced Options Settings
For a basic SMB share, you do not need to use the **Advanced Options** settings, but if you set **Purpose** to **No Presets**, click **Advanced Options** to finish customizing the SMB share for your use case.

The following are possible use cases, but for all settings, see [SMB Shares Screens]({{< relref "SMBSharesScreens.md" >}}).

{{< expand "Setting Up Guest Access" "v" >}}
If you want to allow guest access to the share, select **Allow Guest Access**.
The privileges are the same as the guest account.
Windows 10 version 1709 and Windows Server version 1903 disable guest access by default.
Additional client-side configuration is required to provide guest access to these clients.

* **MacOS clients**: Attempting to connect as a user that does not exist in TrueNAS *does not* automatically connect as the guest account.

* **Connect As: Guest** Specifically choose this option in macOS to log in as the guest account.
  See the [Apple documentation](https://support.apple.com/guide/mac-help/connect-mac-shared-computers-servers-mchlp1140/mac) for more details.
{{< /expand >}}
{{< expand "Setting Up Read or Write Access" "v" >}}
To prohibit writes to the share, select **Export Read-Only**.

To restrict share visibility to users with read or write access to the share, select **Access Based Share Enumeration**.
See the [smb.conf](https://www.samba.org/samba/docs/current/man-html/smb.conf.5.html) manual page.
{{< /expand >}}
{{< expand "Setting Up Host Allow and Host Deny" "v" >}}
Use the **Host Allow** and **Host Deny** options to allow or deny specific host names and IP addresses.

Use the **Hosts Allow** field to enter a list of allowed hostnames or IP addresses.
Separate entries by pressing <kbd>Enter</kbd>.
{{< hint type="Warning" title="Setting Host Allow" >}}
Entering values in the **Host Allow** restricts access to only the addresses entered into this list!
You can break UI access for all other IP or host name entries by using this list.
{{< /hint >}}
You can find a more detailed description with examples [here](https://www.samba.org/samba/docs/current/man-html/smb.conf.5.html#HOSTSALLOW).
Use the **Hosts Deny** field to enter a list of denied hostnames or IP addresses. Separate entries by pressing <kbd>Enter</kbd>.

**Hosts Allow** and **Hosts Deny** work together to produce different situations:
* If neither **Hosts Allow** nor **Hosts Deny** contains an entry, any host can access the SMB share.
* If you create a **Hosts Allow** list, but no **Hosts Deny** list, the share only allows hosts on the **Hosts Allow** list.
* If you create a **Hosts Deny** list, but no **Hosts Allow** list, the share allows all hosts not on the **Hosts Deny** list.
* If you create both a **Hosts Allow** and **Hosts Deny** list, the share allows all hosts on the **Hosts Allow** list. The share also allows hosts not on the **Hosts Allow** or **Hosts Deny** list.
{{< /expand >}}
{{< expand "Apple Filing Protocol (AFP) Compatibility" "v" >}}
AFP shares are deprecated and not available in SCALE.
To customize your SMB share to work with a migrated AFP share or with your MacOS, use the **Advanced Options** settings provided for these use cases:

* **Time Machine** enables [Apple Time Machine](https://support.apple.com/en-us/HT201250) backups on this share.

* **Legacy AFP Compatibility** controls how the SMB share reads and writes data.
  Leave unset for the share to behave like a standard SMB share.
Only set this when the share originated as an AFP sharing configuration.
Pure SMB shares or macOS SMB clients do not require legacy compatibility.

**Use Apple-style Character Encoding** converts NTFS illegal characters in the same manner as MacOS SMB clients.
By default, Samba uses a hashing algorithm for NTFS illegal characters.
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

### Tuning the Share ACL
{{< hint type=note >}}
You cannot access SMB shares with the root user. Always change SMB dataset ownership to the intended SMB user.
{{< /hint >}}

After creating the share and dataset, modify the share permissions to grant user or group access.

Click on <span class="material-icons">share</span> **Edit Share ACL** icon to open the **Edit Share ACL** screen if you want to modify permissions at the share level.

{{< trueimage src="/images/SCALE/Shares/SMBShareACLScreen.png" alt="SMB Share ACL Screen" id="SMB Share ACL Screen" >}}

Select either **User** in **Who**, then the user name in **User**, and then set the permission level using **Permissions** and **Type**.

(Optional) Click **Add** then select **Group**, the group name, and then set the group permissions.

Click **Save**.

### Tuning the Dataset (Filesystem) Permissions
{{< hint type=note >}}
You cannot access SMB shares with the root user. Always change SMB dataset ownership to the intended SMB user.
{{< /hint >}}

To modify the dataset (filesystem) permissions, select the share, then click <span class="iconify" data-icon="ic:baseline-edit"></span> edit icon to open the **Edit SMB** screen.

You can also modify dataset permissions from the **Datasets** screen using the **Permissions** widget.

Many home users typically add a new ACL entry that grants **FULL_CONTROL** to the **builtin_users** group with the flags set to **INHERIT**.

{{< expand "Changing builtin_user Group Permissions" "v" >}}
To change or add permissions for the **builtin_users** group, go to **Datasets**:

1. Check the **Access Control List** to see if this user is on the list and has the correct permissions. If not, add an ACE item.

   {{< trueimage src="/images/SCALE/Datasets/EditACLBuiltin_UserGroupForSMBShare.png" alt="Edit ACL Permissions" id="Edit ACL Permissions" >}}

2. Enter **Group** in the **Who** field or use the dropdown list to select **Group**.

3. Begin typing **builtin_users** in the **Group** field to filter the list of groups, then select **builtin_users**.

4. Verify **Full Control** displays in **Permissions**. If not, select it from the dropdown list.

5. Click **Save Access Control List** to add the ACE item or save changes.

{{< hint type=note >}}
To allow users to move through directories within an SMB share without having read or write privileges, you must use the **Traverse** permission.
Use **Traverse** if you intend to have nested groups within an SMB share with different access levels.
{{< /hint >}}
{{< /expand >}}

See [Permissions]({{< relref "PermissionsScale.md" >}}) for more information on editing dataset permissions.

## Starting the SMB Service
To connect to an SMB share, you must start the related system service.

After adding a new share the system prompts you to either start, or restart the SMB service.

You can also start the service from the **Windows (SMB) Share** widget or on the **System Settings > Services** screen from the **SMB** service row.

### Starting the Service Using the Windows SMB Share

From the **Sharing** screen, click on the **Windows (SMB) Shares** <span class="material-icons">more_vert</span> to display the service options, which are **Turn Off Service** if the service is running or **Turn On Service** if the service is not running.

{{< trueimage src="/images/SCALE/Shares/SharingSMBServicesActionOptions.png" alt="SMB Service Options" id="SMB Service Options" >}}

Each SMB share on the list also has a toggle to enable or disable the service for that share.

### Starting the Service Using System Settings

To make SMB share available on the network, go to **System Settings > Services** and click the toggle for **SMB**.
Set **Start Automatically** if you want the service to activate when TrueNAS boots.

## Configuring the SMB Service

Configure the SMB service by clicking **Config Service** from the <span class="material-icons">more_vert</span> dropdown menu on the **Windows (SMB) Shares** widget header or by clicking <i class="material-icons" aria-hidden="true" title="Configure">edit</i> on the **Services** screen.
Unless you need a specific setting or are configuring a unique network environment, we recommend using the default settings.

## Mounting the SMB Share
The instructions in this section cover mounting the SMB share on a system with the following operating systems.

{{< expand "Mounting on a Linux System" "v" >}}
Verify that your Linux distribution has the required CIFS packages installed.

Create a mount point: `sudo mkdir /mnt/smb_share`.

Mount the volume. `sudo mount -t cifs //computer_name/share_name /mnt/smb_share`.

If your share requires user credentials, add the switch `-o username=` with your username after `cifs` and before the share address.
{{< /expand >}}

{{< expand "Mounting on a Windows System" "V" >}}
To mount the SMB share in Windows, assign it a drive letter, and permanently mount, open the command line and run the following command with the appropriate drive letter, computer name, and share name.

<code>net use Z: &bsol;&bsol;<i>computer_name</i>&bsol;<i>share_name</i> /PERSISTENT:YES</code>
{{< /expand >}}

{{< expand "Mounting on an Apple System" "v" >}}

Have the user name and password for the user assigned to the pool or for the guest if the share has guest access ready before you begin.

Open **Finder > Go > Connect To Server**
Enter the SMB address: `smb://192.168.1.111`.

Input the username and password for the user assigned to that pool or guest if the share has guest access.
{{< /expand >}}

{{< expand "Mounting on a FreeBSD System" "v" >}}
Mounting on a FreeBSD system involves creating the mount point, then mounting the volume.

Create a mount point: `sudo mkdir /mnt/smb_share`.

Mount the volume. `sudo mount_smbfs -I computer_name\share_name /mnt/smb_share`.
{{< /expand >}}

## Setting up an External SMB Share
External SMB shares are essentially redirects to shares on other systems.
Administrators might want to use this when managing multiple TrueNAS systems with SMB shares and if they don't want to keep track of which shares live on which boxes for clients.
This feature allows admins to connect to any of the TrueNAS systems with external shares set up and see them all.

Create the SMB share on another SCALE server (for example, *system1*), as described in [Adding an SMB Share](#adding-an-smb-share) above.

We recommend using Active Directory or LDAP when creating user accounts, but at a minimum synchronize user accounts between the system with the share (*system1*) and on the TrueNAS SCALE system where you set up the external share (for example, *system2*).

On *system2*, enter the hostname or IP address of the system hosting the SMB share (*system1*) and the name given the share on that system as **EXTERNAL:*ip address*&bsol;*sharename*** in **Path**, then change **Name** to EXTERNAL with no special characters.

Leave **Purpose** set to **Default share parameters**, leave **Enabled** selected, then click **Save** to add the share redirect.

Repeat the *system2* instructions above to add an external redirect (share) on *system1* to see the SMB shares of each system.

{{< trueimage src="/images/SCALE/Shares/SetUpExternalSMBShare.png" alt="Set Up Another External SMB Share" id="Set Up Another External SMB Share" >}}

Repeat for each SCALE system with SMB shares you want added as an external redirect.
Change the auto-populated name to EXTERNAL2 or something to distinguish it from the SMB shares on the local system (*system1* in this case) and any other external shares added.

## SMB Shares Contents
These tutorials describe creating and managing various specific configurations of SMB shares.

{{< children depth="2" description="true" >}}
