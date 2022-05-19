---
title: "Setting a Static IP Address for the TrueNAS UI"
weight: 40
aliases: /core/network/interfaces/settingstaticip/
---

{{< hint warning >}}
**Disruptive Change**

Making changes to the network interface the web interface uses can result in losing connection to the TrueNAS system!
Fixing any misconfigured network settings might require command line knowledge or physical access to the TrueNAS system.
{{< /hint >}}

{{< expand "Process Summary" "v" >}}
Configuring a static IP address involves both the TrueNAS web UI and the Console Setup menu.

* Web UI
  * **Network > Interfaces** > **Add** or **Edit**
    * Type address into **IP Address** and select a subnet mask.
    * **Add** or **Delete** additional addresses as needed.
  * Test saved changes before permanently applying them.
    * Dialog asks to temporarily apply changes.
    * After applying the changes, you have an adjustable amount of time to verify the new settings work before permanently saving over the previous configuration.
  * **Network > Network Summary** summarizes addressing information of every configured interface.
* Console menu 
  * Physical Interfaces: select **Configure Network Interfaces** (options are similar for other interface types)    
    * Delete interface? enter or select `n`
    * Remove interface settings? enter or select `n`
    * Configure IPv4? enter or select `y`
      * Enter IP address and subnet mask
    * Configure IPv6 enter or select `y`
      * Enter IP address
    * Configure failover? enter or select `n`
  * Saving changes interrupts the web interface and could require a system reboot.
{{< /expand >}}

## Setting Static IP Addresses

TrueNAS can configure physical network interfaces with static IP addresses in either the web interface or the system console menu.

{{< hint ok >}}
Using the web interface for this process is recommended. There are additional safety features to prevent saving misconfigured interface settings.
{{< /hint >}}

### Adding Static IP Addresses Using the Web Interface

Log in to the web interface and go to **Network > Interfaces**.
This contains creation and configuration options for physical and virtual network interfaces.

![NetworkInterfaces](/images/CORE/12.0/NetworkInterfaces.png "Interfaces List")

You can configure static IP addresses while creating or editing an interface.

{{< hint ok >}}
[High Availability]({{< relref "CORE/UIReference/System/Failover.md" >}}) must be disabled on TrueNAS Enterprise systems before you can edit an active interface.
{{< /hint >}}

![NetworkInterfacesEdit](/images/CORE/12.0/NetworkInterfacesEdit.png "Editing an Interface")

Type the desired address in the **IP Address** field and select a subnet mask.

{{< hint warning >}}
Multiple interfaces cannot be members of the same subnet.
See [Multiple network interfaces on a single subnet](https://www.ixsystems.com/community/threads/multiple-network-interfaces-on-a-single-subnet.20204/) for more information.
Check the subnet if an error is shown when setting the IP addresses on multiple interfaces.
{{< /hint >}}

Use the buttons to **Add** and **Delete** more IP addresses as needed.

To avoid permanently saving invalid or unusable settings, network changes are applied temporarily.
Saving any interface changes adds a dialog to the **Network > Interfaces** list to apply these changes.

![NetworkInterfacesChangesPresent](/images/CORE/12.0/NetworkInterfacesChangesPresent.jpg "Interface Changes Detected")

You can adjust how long to test the network changes before they are reverted back to the previous settings.
If the test is successful, another dialog allows making the network changes permanent.

To quickly view system networking settings, go to **Network > Network Summary**.

![NetworkNetworkSummary](/images/CORE/12.0/NetworkNetworkSummary.png "Network Summary")

### Using the System Console Menu to Assign Static IP Addresses to a Physical Interface

A monitor and keyboard attached to the system is needed to use the console, or, if the system hardware allows it, you can connect with [IPMI]({{< relref "CORE/CORETutorials/Network/IPMI.md" >}}).
The console menu displays after the system is fully booted.

![ConsoleSetupMenu](/images/CORE/ConsoleSetupMenu.png "TrueNAS Console Setup Menu")

Use the **Configure Network Interfaces** option to add static IP addresses to a physical interface.
Other interface types have a similar process to add static IP addresses.
Interfaces that are already configured for DHCP have that option disabled.
There are a number of prompts to answer before you can add a static address.
This example shows adding static IPv4 addresses to interface *igb0*:
{{< expand "Example" >}}
```
  Enter an option from 1-11: 1
  1) igb0
  2) igb1
  Select an interface (q to quit): 1
  Delete interface? (y/n) n
  Remove the current settings of this interface? (This causes a momentary disconne
  ction of the network.) (y/n) n
  Configure IPv4? (y/n) y
  Interface name:
  Several input formats are supported
  Example 1 CIDR Notation:
      192.168.1.1/24
  Example 2 IP and Netmask separate:
      IP: 192.168.1.1
      Netmask: 255.255.255.0, /24 or 24
  IPv4 Address:10.238.15.194/22
  Saving interface configuration: Ok
  Configure IPv6? (y/n) n
  Configure failover settings? (y/n) n
  Restarting network: ok
  Restarting routing: ok
```
{{< /expand>}}
Saving interface configuration changes disrupts the web interface while system networking restarts.
When the interface you are changing is also the interface that provides the web interface, a system reboot might be required for the new settings to take effect and the web interface to become available again.
