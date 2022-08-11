---
title: "NFS Shares Screens"
description: "This article provides information on NFS Shares screens and settings."
weight: 50
aliases: 
tags:
 - scalenfs
 - scaleshares
---

{{< toc >}}

## Creating an NFS Share
Go to **Shares > Unix (NFS) Shares** and click **Add**.

![SharingNFSAddSCALE](/images/SCALE/SharingNFSAddSCALE.png "Services NFS Add")

Use the file browser to select the dataset to be shared.
You can enter an optional text to help identify the share in **Description**.
Clicking **Save** creates the share.
At the time of creation, you can select **Enable Service** for the service to start and to automatically start after any reboots.
If you wish to create the share but not immediately enable it, select **Cancel**.

## Configuring the NFS Service

To begin sharing, go to **System Settings > Services** and click the **NFS** toggle to running.
Select **Start Automatically** if you want NFS to activate when TrueNAS boots.

Configure NFS service settings by clicking <i class="material-icons" aria-hidden="true" title="Configure">edit</i>.

![ServicesNFSOptionsSCALE](/images/SCALE/ServicesNFSOptionsSCALE.png "Services NFS Options")

| Setting | Description |
|---------|-------------|
| Bind IP Addresses | Select IP addresses to listen to for NFS requests. Leave empty for NFS to listen to all available addresses. |
| Enable NFSv4 | Set to switch from NFSv3 to NFSv4.  |
| NFSv3 ownership model for NFSv4 | Set when NFSv4 ACL support is needed without requiring the client and the server to sync users and groups. |
| Require Kerberos for NFSv4 | Set to force NFS shares to fail if the Kerberos ticket is unavailable. |
| Serve UDP NFS clients | Set if NFS clients need to use the User Datagram Protocol (UDP). |
| Support >16 groups | Set when a user is a member of more than 16 groups. This assumes group membership is configured correctly on the NFS server. |
| mountd(8) bind port | Enter a number to bind [mountd](https://manpages.debian.org/testing/mount/mount.8.en.html) only to that port. |
| rpc.statd(8) bind port | Enter a number to bind [rpc.statd](https://manpages.debian.org/testing/nfs-common/statd.8.en.html) only to that port. |
| rpc.lockd(8) bind port | Enter a number to bind [rpc.lockd](https://manpages.debian.org/testing/manpages-ja/rpc.lockd.8.ja.html) only to that port. |

Unless you need a specific setting, we recommend using the default NFS settings.

When TrueNAS is already connected to [Active Directory]({{< relref "/SCALE/SCALEUIReference/Credentials/DirectoryServices/_index.md" >}}), setting **NFSv4** and **Require Kerberos for NFSv4** also requires a [Kerberos Keytab]({{< relref "/SCALE/SCALEUIReference/Credentials/DirectoryServices/_index.md" >}}). 


{{< taglist tag="scalenfs" limit="10" >}}