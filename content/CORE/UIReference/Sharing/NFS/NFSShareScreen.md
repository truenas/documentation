---
title: "Sharing NFS Screens"
description: "Network File System (NFS) sharing on TrueNAS"
weight: 10
tags:
- corenfs
---

{{< toc >}}

Use the **Sharing Unix Shares (NSF)** option to access the **NFS** screen to creating a Network File System (NFS) share on TrueNAS

![NFSScreen](/images/CORE/13.0/NFSScreen.png "Sharing NFS Screen")

Use **COLUMNS** to change the NSF table view. Options include **Unselect All**, **Description**, **Enabled** or **Reset to Defaults**.

Use **ADD** to open the **BASIC OPTIONS** configuration screen.

Use **SUBMIT** to save NFS share settings.

Use **CANCEL** to exit without saving and return to the NFS Shares screen.

### NFS Share Basic Option Settings

![NFSBasicOptionsScreen](/images/CORE/13.0/NFSBasicOptionsScreen.png "Services NFS Basic Options")

| Setting | Value | Description |
|---------|-------|-------------|
| **Path** | file browser | Type or browse to the full path to the pool or dataset to share. Click **ADD** to add another **Path** setting field. Repeat to configure multiple paths. |
| **Description** | string | Enter any notes or reminders about the share. |
| **All dirs** | checkbox | Select to allow the client to mount any subdirectory within the **Path**. Clear to only allows clients to mount the **Path** endpoint. |
| **Quiet** | checkbox | Select to enable and allow inhibiting some syslog diagnostics to avoid error messages. See [exports(5)](https://www.freebsd.org/cgi/man.cgi?query=exports) for examples. Clear checkmark to allow all syslog diagnostics, which can lead to additional cosmetic error messages. |
| **Enabled** | checkbox | Select to enable this NFS share. Clear checkmark to disable this NFS share without deleting the configuration. |

### NFS Share Advanced Option Settings

![NFSAdvancedOptionsScreen](/images/CORE/13.0/NFSAdvancedOptionsScreen.png "Services NFS Advanced Options")

Use **ADVANCED OPTIONS** to display additional settings that allows tuning the share access permissions and defining authorized networks.

**Access Settings**

| Setting | Value | Description |
|---------|-------|-------------|
| **Read Only** | checkbox | Select to prohibit writing to the share. Clear checkmark to allow writing to the share. |
| **Maproot User** | string or drop down | Enter a new string or select a user to apply that user permissions to the root user. Dropdown list displays a list of all users on the system. |
| **Maproot Group** | string or drop down | Enter a new string or select a group to apply that group permissions to the root user. Dropdown list displays a list of all groups on the system. |
| **Mapall User** | string or drop down | Enter a new string or select a user to apply permissions for the chosen user to all clients. |
| **Mapall Group** | string or drop down | Enter a new string or select a group to apply permissions for the chosen group to all clients. |
| **Authorized Networks** | IP address | Enter an allowed network in network/mask CIDR notation. Click **ADD** to define another authorized network. Defining an authorized network restricts access to all other networks. Leave empty to allow all networks. |
| **Authorized Hosts and IP addresses** | string | Enter a host name or IP address to allow that system access to the NFS share. Click **ADD** to define another allowed system. Defining authorized systems restricts access to all other systems. Leave field empty to allow all systems access to the share. |

To edit an existing NFS share click the <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> for the share and select **Edit**.
The options available are identical to the **ADD** share setting options.

{{< taglist tag="corenfs" limit="10" title="Related Articles" >}}