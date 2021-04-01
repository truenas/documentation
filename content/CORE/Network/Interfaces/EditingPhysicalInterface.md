---
title: "Editing a Physical Interface"
weight: 50
---

{{<toc>}}

## Interface Editing ###

{{< hint warning >}}
Be careful when configuring the network interface that controls the TrueNAS® web interface or you may lose web connectivity.
{{< /hint >}}

**Network > Interfaces** lists all the physical [Network Interface Controllers (NICs)]({{< relref "/CORE/Network/Interfaces/_index.md" >}}) connected
to your TrueNAS® system. 

![NetworkInterfaceOverview](/images/CORE/12.0/NetworkInterfaceOverviewPage.png "Network Interface Overview")
<br><br>

To edit an interface, click **>** next to it to expand the view and provide a general description about the chosen interface, then click *EDIT*.

{{< hint info >}}
If you are a TrueNAS Enterprise customer, remember that you cannot edit an interface if High Availability (HA) is enabled.  
Go to **System > Failover** and check the *Disable Failover* box, then click *SAVE*.
{{< /hint >}}

![NetworkInterfaceDescription](/images/CORE/12.0/NetworkInterfaceDescriptionView.png "Network Interface Description")
<br><br>

{{< hint note >}}
An interface's editing options are dependent on the *Type* of interface that you are modifying.
{{< /hint >}}

### Interface Settings ###

| Setting | Value | Description |
|---------|-------|-------------|
| Description | string | Notes or explanatory text about this interface. |
| DHCP | checkbox | Enable DHCP to auto-assign an IPv4 address to this interface. Leave unset to create a static IPv4 or IPv6 configuration. Only one interface can be configured for DHCP. |
| Autoconfigure IPv6 | checkbox | Automatically configure the IPv6 address with [rtsol](https://www.freebsd.org/cgi/man.cgi?query=rtsol). Only one interface can be configured this way. |

### Other Settings ###

| Setting | Value | Description |
|---------|-------|-------------|
| Disable Hardware Offloading | checkbox | Turn off hardware offloading for network traffic processing. WARNING: disabling hardware offloading can reduce network performance and is only recommended when the interface is managing [jails]({{< relref "/CORE/Virtualization/Jails/_index.md" >}}), [plugins]({{< relref "/CORE/Virtualization/Plugins/_index.md" >}}), or [virtual machines (VMs)]({{< relref "/CORE/Virtualization/VirtualMachines/_index.md" >}}). |
| MTU | string | Maximum Transmission Unit, the largest protocol data unit that can be communicated. The largest workable MTU size varies with network interfaces and equipment. 1500 and 9000 are standard Ethernet MTU sizes. Leaving blank restores the field to the default value of 1500. |
| Options | string | Additional parameters from [ifconfig](https://www.freebsd.org/cgi/man.cgi?query=ifconfig). Separate multiple parameters with a space. For example: mtu 9000 increases the MTU for interfaces which support jumbo frames. |

### IP Addresses ###

| Setting | Value | Description |
|---------|-------|-------------|
| IP Address | integer and drop-down menu | Static IPv4 or IPv6 address and subnet mask. Example: 10.0.0.3 and /24. Click *ADD* to add another IP address. Clicking *DELETE* removes that IP Address. |

## Saving Changes ##

After you're done editing, click *SAVE*. You have the option to *TEST CHANGES* or *REVERT CHANGES*. The default time for testing any changes is 60 seconds, but you can change it to your desired setting.  

![NetworkInterfaceTestChanges](/images/CORE/12.0/NetworkInterfaceTestChanges.png "Network Interface Test Changes")
<br><br>

After clicking *TEST CHANGES*, confirm your choice and click *TEST CHANGES* again.

![NetworkInterfaceTestChangesNotice](/images/CORE/12.0/NetworkInterfaceTestChangesNotice.png "Network Interface Test Changes Notice")
<br><br>

Users can either *SAVE CHANGES* or *REVERT CHANGES*. A user will have the time they specified to make their choice. If you select *SAVE CHANGES*, a dialog box will ask you to *CANCEL* or *SAVE* network interface changes. Click *SAVE*.

![NetworkInterfaceEditSaveChanges](/images/CORE/12.0/NetworkInterfaceEditSaveChanges.png "Network Interface Edit Save Changes ")
<br><br>

![NetworkInterfaceSaveChangesOption](/images/CORE/12.0/NetworkInterfaceSaveChangesOption.png "Network Interface Save Changes Option ")
<br><br>

The system will display a dialog box to show that Network interface changes have been made permanent.

![NetworkInterfaceDialog](/images/CORE/12.0/NetworkInterfaceDialogBox.png "Network Interface Dialog Box ")
<br><br>

