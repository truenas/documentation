---
title: "NFS Services Screen"
description: "This article provides information on NFS service screen and settings."
weight: 25
aliases: /scale/scaleuireference/shares/nfs/nfsservicescreen/
tags:
 - scalenfs
 - scaleservice
---

{{< toc >}}

## NFS Service Screen
The **Services > NFS** configuration screen displays settings to customize the TrueNAS NFS service.

You can access it from **System Settings > Services** screen. Locate **NFS** and click <i class="material-icons" aria-hidden="true" title="Configure">edit</i> to open the screen, or use the **Config Service** option on the **Unix (NFS) Share** widget options menu found on the main **Sharing** screen.

Select **Start Automatically** to activate NFS service when TrueNAS boots.

![ServicesNFSSettingsScreen](/images/SCALE/22.12/ServicesNFSSettingsScreen.png "Services NFS Options")

### General Options Settings

| Setting | Description |
|---------|-------------|
| **Bind IP Addresses** | Select IP addresses to listen to for NFS requests. Leave empty for NFS to listen to all available addresses. You must configure static IPs on the interface to appear on the dropdown list. |
| **Number of threads** | Required. Enter an optimal number of threads used by the kernel NFS server. |

### NFSv4 Settings

| Setting | Description |
|---------|-------------|
| **Enable NFSv4** | Select to switch from NFSv3 to NFSv4. If selected, **NFSv3 ownership model for NFSv4** clears, allowing you to select or leave it clear. |
| **NFSv3 ownership model for NFSv4** | Becomes selectable after selecting **Enable NFSv4**. Select when NFSv4 ACL support is needed without requiring the client and the server to sync users and groups. |
| **Require Kerberos for NFSv4** | Select to force NFS shares to fail if the Kerberos ticket is unavailable. |

### Ports Settings

| Setting | Description |
|---------|-------------|
| **mountd(8) bind port** | Enter a port to bind [mountd(8)](https://man7.org/linux/man-pages/man8/mountd.8.html). |
| **rpc.statd(8) bind port** | Enter a port to bind [rpc.statd(8)](https://man7.org/linux/man-pages/man8/statd.8.html). |
| **rpc.lockd(8) bind port** | Enter a port to bind [rpc.lockd(8)](https://linux.die.net/man/8/rpc.lockd). |

### Other Options Settings

| Setting | Description |
|---------|-------------|
| **Serve UDP NFS clients** | Select if NFS clients need to use the User Datagram Protocol (UDP). |
| **Allow non-root mount** | Select only if required by the NFS client to allow serving non-root mount requests. | 
| **Support >16 groups** | Select when a user is a member of more than 16 groups. This assumes group membership is configured correctly on the NFS server. | 

Unless a specific setting is required, we recommend using the default NFS settings.

When TrueNAS is already connected to [Active Directory]({{< relref "/SCALE/SCALEUIReference/Credentials/DirectoryServices/_index.md" >}}), setting **NFSv4** and **Require Kerberos for NFSv4** also requires a [Kerberos Keytab]({{< relref "/SCALE/SCALEUIReference/Credentials/DirectoryServices/_index.md" >}}). 

{{< taglist tag="scalenfs" limit="10" title="Related NFS Articles" >}}