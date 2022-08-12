---
title: "NFS Share Screen"
description: "Use the NFS share screen to configure Network File System (NFS) shares on your TrueNAS."
weight: 10
tags:
- corenfs
---

{{< toc >}}

Unix and Unix-like operating systems often use the Network File System (NFS) protocol. NFS shares data across a network as part of a distributed file system. Go to **Sharing > Unix Shares (NFS)** to access the **NFS** screen to create a Network File System (NFS) share on TrueNAS.

![NFSScreen](/images/CORE/13.0/NFSScreen.png "Sharing NFS Screen")

Click **COLUMNS** to change the NSF table view. Options include **Unselect All**, **Description**, **Enabled** or **Reset to Defaults**.

Click **ADD** to open the **BASIC OPTIONS** configuration screen.

### NFS Share Basic Option Settings

![NFSBasicOptionsScreen](/images/CORE/13.0/NFSBasicOptionsScreen.png "Services NFS Basic Options")

| Name | Description |
|---------|-------------|
| **Path** | Type or browse to the full path to the pool or dataset to share. Click **ADD** to add another **Path** setting field. Repeat to configure multiple paths. |
| **Description** | Enter any notes or reminders about the share. |
| **All dirs** | Select checkbox to allow the client to mount any subdirectory within the **Path**. Clear to only allow clients to mount the **Path** endpoint. |
| **Quiet** | Select to suppress some syslog diagnostics to avoid error messages. See [exports(5)](https://www.freebsd.org/cgi/man.cgi?query=exports) for examples. Clear checkbox to allow all syslog diagnostics. This can lead to additional cosmetic error messages. |
| **Enabled** | Select checkbox to enable this NFS share. Clear checkbox to disable this NFS share without deleting the configuration. |  
 
Click **ADVANCED OPTIONS** to display extra settings. These settings allow tuning the share access permissions and defining authorized networks.

### NFS Share Advanced Option Settings

![NFSAdvancedOptionsScreen](/images/CORE/13.0/NFSAdvancedOptionsScreen.png "Services NFS Advanced Options")

**Access Settings**

| Name | Description |
|---------|-------------|
| **Read Only** | Select checkbox to prohibit writing to the share. Clear checkbox to allow writing to the share. |
| **Maproot User** | Enter a new string or select a user to apply that user permissions to the root user. Dropdown list displays a list of all users on the system. |
| **Maproot Group** | Enter a new string or select a group to apply that group permissions to the root user. Dropdown list displays a list of all groups on the system. |
| **Mapall User** | Enter a new string or select a user to apply permissions for the chosen user to all clients. |
| **Mapall Group** | Enter a new string or select a group to apply permissions for the chosen group to all clients. |
| **Authorized Networks** | Enter an allowed network in network/mask CIDR notation. Click **ADD** to define another authorized network. Defining an authorized network restricts access to all other networks. Leave empty to allow all networks. |
| **Authorized Hosts and IP addresses** | Enter a host name or IP address to allow that system access to the NFS share. Click **ADD** to define another allowed system. Defining authorized systems restricts access to all other systems. Leave field empty to allow all systems access to the share. |  

Click **SUBMIT** to save NFS share settings.

Click **CANCEL** to exit without saving and return to the NFS Shares screen.

To edit an existing NFS share click the <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> for the share and select **Edit**.
The options available are identical to the **ADD** share setting options.

{{< taglist tag="corenfs" limit="10" >}}
