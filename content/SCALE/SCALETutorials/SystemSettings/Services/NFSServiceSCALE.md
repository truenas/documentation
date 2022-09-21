---
title: "Configuring NFS Service"
description: "This article provides information on configuring NFS service in SCALE."
weight: 25
aliases: /scale/scaleuireference/shares/nfs/nfsservicescreen/
tags:
 - scalenfs
 - scaleservice
---

{{< toc >}}


The **Services > NFS** configuration screen displays settings to customize the TrueNAS NFS service.

You can access it from **System Settings > Services** screen. Locate **NFS** and click <i class="material-icons" aria-hidden="true" title="Configure">edit</i> to open the screen, or use the **Config Service** option on the **Unix (NFS) Share** widget options menu found on the main **Sharing** screen.

Select **Start Automatically** to activate NFS service when TrueNAS boots.

![ServicesNFSSettingsScreen](/images/SCALE/22.02/ServicesNFSSettingsScreen.png "Services NFS Options")

### Configuring NFS Service

Unless a specific setting is required, we recommend using the default NFS settings.

First enter the number of servers you want to create in **Number of servers**. 

Select the IP addressed from the **Bind IP Addresses** dropdown list if you want to use a specific static IP address, or to to list on all available addresses leave this blank.

If you are using NFSv4 select **Enable NFSv4**. **NFSv3 ownership model for NFSv4** clears, allowing you to select or leave it clear.

If you want to force NFS shares to fail if the Kerberos ticket is unavailable, select **Require Kerberos for NFSv4**.

Next enter a port to bind to in the field that applies:

* Enter a port to bind [mountd(8)](https://man7.org/linux/man-pages/man8/mountd.8.html) in **mountd(8) bind port**. 
* Enter a port to bind [rpc.stad(8)](https://man7.org/linux/man-pages/man8/statd.8.html)in **rpc.statd(8) bind port**.
* Enter a port to bind [rpc.lockd(8)](https://linux.die.net/man/8/rpc.lockd) in **rpc.lockd(8) bind port**.

Select **Allow non-root mount** only if required by the NFS client to allow serving non-root mount requests. 

Click **Save**.

Start the NFS service.

When TrueNAS is already connected to [Active Directory]({{< relref "/SCALE/SCALEUIReference/Credentials/DirectoryServices/_index.md" >}}), setting **NFSv4** and **Require Kerberos for NFSv4** also requires a [Kerberos Keytab]({{< relref "/SCALE/SCALEUIReference/Credentials/DirectoryServices/_index.md" >}}). 

{{< taglist tag="scalenfs" limit="10" >}}