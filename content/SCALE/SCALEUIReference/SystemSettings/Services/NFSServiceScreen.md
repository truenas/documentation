---
title: "NFS Services Screen"
description: "Provides information on NFS service screen and settings."
weight: 25
aliases:
 - /scale/scaleuireference/shares/nfs/nfsservicescreen/
 - /scale/scaleclireference/service/clinfs/
tags:
 - nfs
 - services
---


The **System > Services** screen includes two icons on the **NFS** service row:
* <span class="iconify" data-icon="material-symbols:list"></span> **NFS Sessions** opens the [**NFS Sessions** screen]({{< relref "NFSSharesScreens.md" >}}).
* <span class="iconify" data-icon="ic:baseline-edit"></span> **Configure** opens the **NFS Service** screen.

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
| **Bind IP Addresses** | Select IP addresses to listen to for NFS requests. Leave empty for NFS to listen to all available addresses. You must configure static IPs on the interface for them to appear on the dropdown list. |
| **Calculate number of threads dynamically** | Automatically sets the number of threads used by the kernel NFS server. |
| **Specify number of threads manually** | Shows after deselecting **Calculate number of threads dynamically**. Enter an optimal number of threads used by the kernel NFS server. |
{{< /truetable >}}

### NFSv4 Settings

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Enabled Protocols** | Select NFSv3, NFSv4, or both. If NFSv4 is selected, **NFSv3 ownership model for NFSv4** clears, allowing you to select or leave it clear. |
| **NFSv4 DNS Domain** | Select to use the value to override the default DNS domain name ofr NFSv4. Speicifies the domain idmapd.conf setting. |
| **NFSv3 ownership model for NFSv4** | Becomes selectable after selecting **NFSv4**. Select when you need NFSv4 ACL support without requiring the client and the server to sync users and groups. Selecting this deactivates the **Manage Groups Server-side** option. |
| **Require Kerberos for NFSv4** | Select to force NFS shares to fail if the Kerberos ticket is unavailable. |
{{< /truetable >}}

### Ports Settings

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **mountd(8) bind port** | Enter a port to bind [mountd(8)](https://man7.org/linux/man-pages/man8/mountd.8.html). |
| **rpc.statd(8) bind port** | Enter a port to bind [rpc.statd(8)](https://man7.org/linux/man-pages/man8/statd.8.html). |
| **rpc.lockd(8) bind port** | Enter a port to bind [rpc.lockd(8)](https://linux.die.net/man/8/rpc.lockd). |
{{< /truetable >}}

### Other Options Settings

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Enable NFS over RDMA** | Select to improve NFS performance and reduce CPU overhead. This setting requires an Enterprise licensed system with an RDMA capable NIC. |
| **Allow non-root mount** | Only select if required by the NFS client to allow serving non-root mount requests. |
| **Manage Groups Server-side** | This option allows the server to determine group IDs based on server-side lookups rather than relying solely on the information provided by the NFS client. This can support more than 16 groups and provide more accurate group memberships. Equivalent to the `--manage-gids` flag for [rpc.mountd](https://linux.die.net/man/8/rpc.mountd). |
{{< /truetable >}}

We recommend using the default NFS settings unless you require specific settings.
When TrueNAS is already connected to [Active Directory]({{< relref "/SCALE/SCALEUIReference/Credentials/DirectoryServices/_index.md" >}}), setting **NFSv4** and **Require Kerberos for NFSv4** also requires a [Kerberos Keytab]({{< relref "/SCALE/SCALEUIReference/Credentials/DirectoryServices/_index.md" >}}).