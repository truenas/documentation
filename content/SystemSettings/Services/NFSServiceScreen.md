---
title: "NFS Services Screen"
description: "Provides information on NFS service screen and settings."
weight: 100
aliases:
 - /scaleuireference/systemsettings/services/nfsservicescreen/
tags:
 - nfs
 - services
doctype: reference
---



The **System > Services** screen includes two options on the **NFS** service row:
* **View Sessions** opens the [**NFS Sessions** screen]({{< ref "NFSSharesScreens#nfs-sessions-screen" >}}).
* <span class="material-icons">edit</span> **Configure** icon opens the **NFS Service** screen.

{{< hint type=info title="UDP Protocol and NFS" >}}
{{< include file="/static/includes/NFSServiceUDPWarning.md" >}}
{{< /hint >}}

## NFS Service Screen
The **Services > NFS** configuration screen displays settings to customize the TrueNAS NFS service.

You can access it from **System > Services** screen.
Locate **NFS** and click <i class="material-icons" aria-hidden="true" title="Configure">edit</i> to open the screen, or use the **Config Service** option on the **Unix (NFS) Share** widget options menu found on the main **Sharing** screen.

Select **Start Automatically** to activate the NFS service when TrueNAS boots.

{{< trueimage src="/images/SCALE/SystemSettings/ServicesNFSSettingsScreen.png" alt="NFS Service Settings" id="NFS Service Settings" >}}

### General Options Settings

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Bind IP Addresses** | Sets the IP addresses the share (SMB or NFS) listens on. Leaving empty listens on all available addresses. Must configure static IPs on the interface to show one the list. |
| **Calculate number of threads dynamically** | Automatically sets the number of threads used by the kernel NFS server. |
| **Specify number of threads manually** | Sets the optimal thread count for the kernel NFS server. Shows after disabling **Calculate number of threads dynamically**. |
{{< /truetable >}}

### NFSv4 Settings

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Enabled Protocols** | Sets the NFS service protocol to NFSv3, NFSv4, or both. When NFSv4 is selected, **NFSv3 ownership model for NFSv4** clears, allowing you to select or leave it clear. |
| **NFSv4 DNS Domain** | Overrides the default DNS domain for NFSv4. Specifies the domain in idmapd.conf. Select to use a value to override the default DNS domain name for NFSv4. When AD is joined and healthy, NFSv4 is selected as an enabled protocol, setting this shows **Add SPN** to the right of **Save**. |
| **NFSv3 ownership model for NFSv4** | Enables NFSv4 ACL support without requiring the client and the server to sync users and groups. Becomes selectable after selecting **NFSv4**. Deactivates **Manage Groups Server-side**. |
| **Require Kerberos for NFSv4** | Forces NFS shares to fail if a Kerberos ticket is unavailable. |
{{< /truetable >}}

#### SPN Entry Settings

**ADD SPN** only shows on the **NFS** service screen when AD is joined and hhealty, NFSv4 is selected in **Enabled Protocols**, and **Require Kerberos for NFSv4** is enabled.
After saving settings and reopening the **NFS** service screen, the **Add SPN** button becomes active. Clicking this opens the first **Add Kerberos SPN Entry** dialog. Clicking **Yes** in the fist dialog opens the second **Add Kerberos SPN Entry** dialog where you add the credentials.

{{< trueimage src="/images/SCALE/SystemSettings/AddKerberosSPNEntryDialog.png" alt="Add Kerberos SPN Entry Dialog" id="Add Kerberos SPN Entry Dialog" >}}

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Name** | Specifies the AD admin account credential name with the rights to create SPNs in the domain, commonly a domain admin for delegated account granted `write servicePrincipalName` permissions on the relevant computer object. This is not the TrueNAS administrator account name. |
| **Password** | Specifies crendtial password for the AD admin account as mentioned in **Name**. |
{{< /truetable >}}

### Ports Settings

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **mountd(8) bind port** | Specifies a port to bind [mountd(8)](https://man7.org/linux/man-pages/man8/mountd.8.html). |
| **rpc.statd(8) bind port** | Specifies a port to bind [rpc.statd(8)](https://man7.org/linux/man-pages/man8/statd.8.html). |
| **rpc.lockd(8) bind port** | Specifies a port to bind [rpc.lockd(8)](https://linux.die.net/man/8/rpc.lockd). |
{{< /truetable >}}

### Other Options Settings

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Enable NFS over RDMA** | Improves NFS performance and reduce CPU overhead. This setting requires an Enterprise licensed system with an RDMA capable NIC. |
| **Allow non-root mount** | Allows serving non-root mount requests. Only enable if required by the NFS client. |
| **Manage Groups Server-side** | Allows the server to determine group IDs via server-side lookups instead of client-provided information. Supports more than 16 groups and provides more accurate memberships. Equivalent to the `--manage-gids` flag for [rpc.mountd](https://linux.die.net/man/8/rpc.mountd). |
{{< /truetable >}}

{{< include file="/static/includes/NFSUpdateTime.md" >}}

We recommend using the default NFS settings unless you require specific settings.
When TrueNAS is already connected to [Active Directory]({{< ref "/Credentials/DirectoryServices" >}}), setting **NFSv4** and **Require Kerberos for NFSv4** also requires a [Kerberos Keytab]({{< ref "/Credentials/DirectoryServices" >}}).