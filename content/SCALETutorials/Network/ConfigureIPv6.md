---
title: "Configuring IPv6"
description: "Provides instructions configuring a network interface and other network settings for IPv6, and configuring an SMB or NFS share for IPv6."
weight: 21
tags:
- network
- interfaces
- smb
- nfs
- ipv6
---

TrueNAS provides the option to configure network interfaces using either IPv4 or IPv6 addresses.
IPv4 networks cannot see or communicate with an IPv6 website or network unless a gateway or some other implementation is configured to allow it.
See [Understanding IPv6](https://www.truenas.com/docs/references/ipv6/) for more information.

## Configuring IPv6 Addresses

After configuring your network infrastructure for IPv6, assign the IP addresses for your TrueNAS system.
Use the TrueNAS UI to configure your network settings.
If setting TrueNAS up for the first time after a clean install, use the Console Setup menu to enter IPv6 addresses.

### Configuring an Interface Using the Console Setup Menu

If configuring your network settings using the Console Setup menu for the first time after installing TrueNAS, first configure the interface address.
Type 1, then press <kbd>Enter</kbd>.
Enter **eno1** in **name**, then the IPv6 address in **aliases**.

{{< trueimage src="/images/SCALE/Network/ConfigureIPv6InterfaceWithConsoleSetupMenu.png" alt="TrueNAS Console Setup Menu Edit Interface" id="TrueNAS Console Setup Menu Edit Interface" >}}

Save, then select **a** to apply and **p** to make it persist. Type **q** to return to the Console Setup menu.

Next, configure the IPv6 gateway address, and the nameserver addresses. Type **2**, then press <kbd>Enter</kbd>.
Enter the name server addresses provided by your IT department or Internet Service Provider (ISP), and then the gateways.
Save, then select **a** to apply and **p** to make it persist.

### Adding an IPv6 Interface in the UI

Navigate to **System > Network** screen to enter your network settings.

Click on **Add** in the **Interfaces** to open the **Add Interface** screen.

1. Enter **en8s0** as the name for the interface if it is the primary interface.
2. Clear the **DHCP** checkbox, then select **Autoconfigure IPv6** if you want to create the IP address using SLAAC.
   This automatically configures the IPv6 address.
   You can only use this option one time to configure an IPv6 address for the system.
3. Enter the IPv6 address assigned to the NIC port if using a fixed IP address assignment.
4. Click **Save**
5. Test the change.
   If adding the primary interface test the network connection by opening a new browser window.
   Enter the IPv6 address inside square brackets in the URL address field, for example, [*ipv6 address*].
   After the system comes up, save the changes to the network interface.

To access the UI after configuring an IPv6 address, enter the IPv6 address inside square brackets in the browser URL field.
You cannot access the UI with the assigned host name when the system is configured on an IPv6 network.

### Configuring Dual Stacking

TrueNAS supports dual-stacking IPv4 and IPv6 addresses in the same interface.
An IPv4 network cannot see or communicate with an IPv6 network unless some gateway is configured to allow IPv6 communication.
Dual stacking these two protocols allows TrueNAS to see and communicate with an all IPv6 address or website.

You must have IPv6 configured in your networking infrastructure.
Add IPv6 to your network router to permit the incoming and outgoing traffic. This provides the required gateway to permit communication with this IP protocol.
Assign a static IPv6 address and netmask, the network gateway address, and name servers to configure in TrueNAS.

{{< hint type=info >}}
When configuring dual stacking, the order in which you configure the two network IP protocols does not matter.
{{< /hint >}}

If IPv4 networking is already configured in TrueNAS, to set up dual stacking of IPv6 in the UI, go to **System > Network**:

1. Add the IPv6 gateway information.

   Click **Settings** on the **Global Configuration** widget to open the **Edit Global Configuration** screen.

   Enter the IPv6 address for the gateway in **IPv6 Default Gateway**.

   Click **Save**.

2. Add the IPv6 static IP address to the primary interface.

   Select the primary interface, **en8s0**, then click **Edit**.

   Click **Add*** to the right of **Aliases** to add another set of IP Address fields.

   Enter the IPv6 address, then select the netmask.

   Click **Save**

3. Test the network change.
   To verify the IPv6 address, in a new browser window, enter the address inside square brackets. For example, [*ffff:ff:59f8:100::12*].

   Log into the UI, and click **Save Changes**.

   Log out of that browser session, return to your other UI session.
   Both IPv4 and IPv6 addresses should show on the screen for the primary interface.

After installing TrueNAS and using the Console Setup menu to configure system networking and set up dual stacking, add the name servers and both IP protocol default gateways in general network settings (option 2 on the menu), then add both IP address, with netmasks as aliases, on the primary network interface (option 1 on the menu).

If using the Console Setup menu to set up IPv6 on an already IPv4-configured system, add the v6 default gateway in general network, then add the IPv6 IP address with netmask as an alias on the primary interface.

### Connecting to the UI IPv6 Address

Unlike IPv4, you must enter the IPv6 address with a square bracket preceding and following the address.
You cannot enter the host name assigned to the TrueNAS system to access the UI.
For example, enter <code>[<i>ffff:ff:59f8:100::12</i>]</code> into the URL field of the browser window to access the UI.

## Using IPv6 with Sharing Protocols

When configuring an SMB or NFS share, first configure the bind address in the share service.
Next, configure the share user, and add the share and dataset.
Finally, add the share owner to the dataset permissions.

1. Go to **System > Services** click **Advanced Options** then edit the share service.

   For SMB, scroll down and select the IPv6 address as the **Bind IP Address** and click **Save**.

   For NFS, also select the IPv6 address in **Bind IP Addresses**.
   Select **Allow non-root mount**, then click **Save**.

2. Go to **Credentials > Local User** to create the share user.

3. Go to either **Shares** or **Datasets** to [create the share and dataset]({{< ref "/SCALETutorials/Shares/SMB#adding-an-smb-share-and-dataset" >}}).

4. Modify the ACL permissions.
   Either click on **Edit Filesystem ACL** on the **Shares** screen or go to **Datasets**, select the dataset row, scroll down and click **Edit** on the **Permissions** widget.

   Leave the dataset permissions @owner and @group set to root or change them to the admin user.
   Next click **Add New** to create a new ACL entry for the share user(s).
   See [Setting Up Permissions]({{< ref "PermissionsSCALE" >}}) for more information on adding new entries and modifying dataset permissions.

   See [Adding NFS Shares]({{< ref "AddingNFSShares" >}}) or [Windows Shares (SMB)]({{< ref "/SCALETutorials/Shares/SMB" >}}) for more information on adding shares.

### Mounting and Accessing the Share in Windows

To mount or access the share in Windows, you must enter the share information using a particular syntax or it cannot find nor connect to the share.

The syntax requires you to replace each colon (:) in the IPv6 address with a dash (-).
Enter two forward slashes, followed by the IPv6 address with **.ipv6-literal.net** after it, then enter another forward slash, and finally the share name.

For example, <code>\\<i>ffff-ff-59f8-100--12</i>.ipv6-literal.net\<i>v6smbshare</i></code>.

### Configuring an SSH Connection

Both replication to a remote server and rsync tasks require configuring an SSH connection credential.
When both systems are using IPv6 addresses and the protocol to communicate, you must enclose the IPv6 address in square brackets when defining the remote system URL in the **TrueNAS URL** field on the **New SSH Connection** configuration screen.
<!-- 

### Using IPv6 with Applications
Commented out until we have Internet access over our IPv6 network so we can test. 
-->
