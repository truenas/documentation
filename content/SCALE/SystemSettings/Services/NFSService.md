---
title: "Configuring NFS Service"
description: "Provides information on configuring NFS service in TrueNAS."
weight: 20
aliases:
 - /scale/shares/iscsi/nfs/nfsservicescreen/
 - /scale/scaletutorials/systemsettings/services/nfsservicescale/
tags:
 - nfs
 - services
keywords:
- enterprise storage solutions
- nas storage solutions
- software storage solutions
doctype: tutorial
---


The **Services > NFS** configuration screen displays settings to customize the TrueNAS NFS service.

Go to **System > Services** screen, locate **NFS**, and click <i class="material-icons" aria-hidden="true" title="Configure">edit</i> to open the screen, or use the **Config Service** option on the **Unix (NFS) Share** widget options menu found on the main **Sharing** screen.

Select **Start Automatically** to activate the NFS service when TrueNAS boots.

{{< trueimage src="/images/SCALE/SystemSettings/ServicesNFSSettingsScreen.png" alt="NFS Service Settings" id="NFS Service Settings" >}}

### Configuring NFS Service

We recommend using the default NFS settings unless you require specific settings.

Select the IP address from the **Bind IP Addresses** dropdown list to use a specific static IP address, or leave this field blank for NFS to listen to all available addresses.

By default, TrueNAS dynamically calculates the number of threads the kernel NFS server uses.
To manually enter an optimal number of threads the kernel NFS server uses, clear **Calculate number of threads dynamically** and enter the number of threads you want in the **Specify number of threads manually** field.

If using NFSv4, select **NFSv4** from **Enabled Protocols**. **NFSv3 ownership model for NFSv4** clears, allowing you to enable or leave it clear.
Selecting **NFSv3 ownership model for NFSv4** deactivates the **Manage Group Server-side** option.

To force NFS shares to fail if the Kerberos ticket is unavailable, select **Require Kerberos for NFSv4**.

Next, enter a port to bind to in the field that applies:

* Enter a port to bind [mountd(8)](https://man7.org/linux/man-pages/man8/mountd.8.html) in **mountd(8) bind port**.
* Enter a port to bind [rpc.statd(8)](https://man7.org/linux/man-pages/man8/statd.8.html)in **rpc.statd(8) bind port**.
* Enter a port to bind [rpc.lockd(8)](https://linux.die.net/man/8/rpc.lockd) in **rpc.lockd(8) bind port**.

{{< hint type=info title="UDP Protocol and NFS" >}}
{{< include file="/static/includes/NFSServiceUDPWarning.md" >}}
{{< /hint >}}

Only select **Allow non-root mount** if the NFS client requires it to allow serving non-root mount requests.

Select **Manage Groups Server-side** to allow the server to determine group IDs based on server-side lookups rather than relying solely on the information provided by the NFS client.
This can support more than 16 groups and provide more accurate group memberships.
It is equivalent to setting the `--manage-gids` flag for [rpc.mountd](https://linux.die.net/man/8/rpc.mountd).
This setting assumes group membership is configured correctly on the NFS server.

{{< include file="/static/includes/NFSUpdateTime.md" >}}

Click **Save**.

Start the NFS service.
When TrueNAS is already connected to [Active Directory]({{< ref "/SCALE/Credentials/DirectoryServices" >}}), setting **NFSv4** and **Require Kerberos for NFSv4** also requires a [Kerberos Keytab]({{< ref "/SCALE/Credentials/DirectoryServices" >}}).

### Adding a Service Principal Name (SPN)

TrueNAS allows configuring a Service Principal Name (SPN) on the **NFS** service screen when TrueNAS is joined to Active Directory, AD is healthy in TrueNAS, and when NFSv4 is selected in **Enabled Protocols** and **Require Kerberos for NFSv4** is enabled.

{{< expand "What is an SPN?" "v" >}}
A Service Principal Name (SPN) is how Kerberos identifies a specific service instance on a specific host so a client can request a ticket for it.

Think of it as the address for the NFS service in Kerberos terms, which is specified as <code>service-class/hostname[:port]</code>, for example, *nfs/truenas-box.domain.com*.

When a client wants to talk to that NFS server using Kerberos auth, it asks the AD domain controller (KDC) for a ticket for that exact SPN.
The KDC can only issue the ticket if the SPN is registered to a security principal in AD (usually a computer account or a dedicated service account).

Adding the SPN registers the *nfs/truenas-box.domain.com* in AD and stores the corresponding keytab entry locally so the NFS service can decrypt tickets presented for it.
Without this registration, clients requesting Kerberos-secured NFSv4 get an auth failure because the ticket request has nowhere to resolve to.
Registering the SPN entry creates the AD registration and the local keytab entry via nfs.add_principal, using AD admin credentials with rights to write SPNs.

{{< /expand >}}

After setting up the NFS service and saving changes, open the NFS service screen again to see **Add SPN** active at the bottom of the screen to the right of **Save**.

Click **Add SPN** to open the first of two dialogs. Select **Yes** on the first **Enable Kerberos SPN Entry** dialog to open the second dialog.

{{< trueimage src="/images/SCALE/SystemSettings/AddKerberosSPNEntryDialog.png" alt="Add Kerberos SPN Entry Dialog" id="Add Kerberos SPN Entry Dialog" >}}

Enter the AD admin account name and password for that account, then click **Submit**.

Authentication is against the AD account and not the TrueNAS administrator account in the TrueNAS database.
AD owns the SPN, not TrueNAS.