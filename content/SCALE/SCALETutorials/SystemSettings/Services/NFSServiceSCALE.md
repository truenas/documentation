---
title: "NFS"
description: "Provides information on configuring NFS service in TrueNAS SCALE."
weight: 25
aliases: /scale/scaleuireference/shares/nfs/nfsservicescreen/
tags:
 - nfs
 - services
---

The **Services > NFS** configuration screen displays settings to customize the TrueNAS NFS service.

You can access it from **System Settings > Services** screen. Locate **NFS** and click <i class="material-icons" aria-hidden="true" title="Configure">edit</i> to open the screen, or use the **Config Service** option on the **Unix (NFS) Share** widget options menu found on the main **Sharing** screen.

Select **Start Automatically** to activate the NFS service when TrueNAS boots.

{{< trueimage src="/images/SCALE/SystemSettings/ServicesNFSSettingsScreen.png" alt="NFS Service Settings" id="NFS Service Settings" >}}

### Configuring NFS Service

We recommend using the default NFS settings unless you require specific settings.

Select the IP address from the **Bind IP Addresses** dropdown list if you want to use a specific static IP address, or leave this field blank for NFS to listen to all available addresses.

By default, TrueNAS dynamically calculates the number of threads the kernel NFS server uses. However, if you want to manually enter an optimal number of threads the kernel NFS server uses, clear **Calculate number of threads dynamically** and enter the number of threads you want in the **Specify number of threads manually** field. 

If using NFSv4, select **NFSv4** from **Enabled Protocols**. **NFSv3 ownership model for NFSv4** clears, allowing you to enable or leave it clear.

If you want to force NFS shares to fail if the Kerberos ticket is unavailable, select **Require Kerberos for NFSv4**.

Next, enter a port to bind to in the field that applies:

* Enter a port to bind [mountd(8)](https://man7.org/linux/man-pages/man8/mountd.8.html) in **mountd(8) bind port**. 
* Enter a port to bind [rpc.statd(8)](https://man7.org/linux/man-pages/man8/statd.8.html)in **rpc.statd(8) bind port**.
* Enter a port to bind [rpc.lockd(8)](https://linux.die.net/man/8/rpc.lockd) in **rpc.lockd(8) bind port**.

Select **Serve UDP NFS clients** if NFS clients need to use UDP.

Only select **Allow non-root mount** if the NFS client requires it to allow serving non-root mount requests.

Select **Support > 16 groups** when a user is a member of more than 16 groups. This setting assumes group membership is configured correctly on the NFS server.

Click **Save**.

Start the NFS service.

When TrueNAS is already connected to [Active Directory]({{< relref "/SCALE/SCALEUIReference/Credentials/DirectoryServices/_index.md" >}}), setting **NFSv4** and **Require Kerberos for NFSv4** also requires a [Kerberos Keytab]({{< relref "/SCALE/SCALEUIReference/Credentials/DirectoryServices/_index.md" >}}). 