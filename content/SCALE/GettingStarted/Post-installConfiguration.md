---
title: "Post-install Configuration"
weight: 12
---

{{< toc >}}


The Console Setup menu displays at the end of the boot process.
If the TrueNAS system has a keyboard and monitor, you can use this menu to administer the system.

By default, TrueNAS doesn't display the Console Setup menu when you connect via SSH or the web shell.
The `root` user or another user with root permissions can start the Console Setup menu by entering `/etc/netcli`.

![ConsoleSetupMenuSCALE](/images/SCALE/ConsoleSetupMenuSCALE.png "TrueNAS Console Setup Menu")

The menu provides these options:

1) **Configure network interfaces** provides options to set up network interfaces.

2) **Reset root password** resets the `root` user password.

3) **Reset configuration to defaults** resets the system to default settings.

4) **Open TrueNAS CLI Shell** starts a shell for running TrueNAS commands. Type `exit` to leave the shell.

5) **Open Linux Shell** starts a shell for running Linux commands. Type `exit` to leave the shell.

6) **Reboot** reboots the system.

7) **Shut Down** shuts down the system.

Console Setup menu options may change with software updates, service agreements, etc.

During boot, TrueNAS attempts to connect to a DHCP server from all live interfaces.
If it receives an IP address, the Console Setup menu displays it so you can access the Web UI.
In the picture above, the TrueNAS web UI is at `10.0.2.15`.

You may be able to access the web UI using `hostname.domain` (default is `truenas.local`) if your system:
* Doesn't have a monitor.
* Is on a network that supports Multicast DNS (mDNS).

## Configuring Network Interfaces

{{< tabs "Configurations" >}}
{{< tab "Simple Network Interface Configuration" >}}
### Simple Network Configuration

Enter `4` to open the TrueNAS CLI Shell.

![ConsoleNetworkConfig1SCALE](/images/SCALE/ConsoleNetworkConfig1SCALE.png "TrueNAS SCALE Console Setup Menu")
<br><br>
#### Select an Interface

1. Enter `network interface`, then enter `query` to display available physical system interfaces.

2. Once you know which interface you want to update, enter `update interface aliases=["ipaddress"] ipv4_dhcp=false`.  
   Example: `update eno1 aliases=["10.0.2.15"] ipv4_dhcp=false`

3. Enter `commit` to apply the pending changes.

4. Enter `checkin`, then enter `query` to show the updated interfaces.

![ConsoleNetworkConfig2SCALE](/images/SCALE/ConsoleNetworkConfig2SCALE.png "TrueNAS SCALE Network Configuration")
<br><br>
#### Configure the Default Gateway

1. Enter `..` to go back to the `network>` prompt, then enter `configuration`.

2. Enter `update ipv4gateway="ipaddress"`. After you execute the command, the Console Setup menu displays the new web UI address.  
   Example: `update ipv4gateway="10.0.2.15"`

![ConsoleNetworkConfig3SCALE](/images/SCALE/ConsoleNetworkConfig3SCALE.png "TrueNAS SCALE Network Configuration")

3. Enter `exit` to go back to the Console Setup menu.
{{< /tab >}}

{{< tab "Configuring LAGG and VLAN" >}}
### Configure LAGG

1. Enter `4` to open the TrueNAS CLI Shell.

2. Enter `network interface`, then enter `query` to display available physical system interfaces.  

3. Once you know the interface names, enter `create type=LINK_AGGREGATION lag_ports=["interface1","interface2"] lag_protocol=LACP`  
   Example: `network interface create type=LINK_AGGREGATION lag_ports=["eno1","eno2"] lag_protocol=LACP`

![ConsoleLAGGConfigSCALE](/images/SCALE/ConsoleLAGGConfigSCALE.png "TrueNAS SCALE LAGG Configuration")
<br><br>
### Configure VLAN

1. Enter `create type=VLAN vlan_parent_interface=bond# vlan_tag=#### aliases=[{"address": "ipaddress", "netmask": "bitlength"}]`  
   Example: `create type=VLAN vlan_parent_interface=bond0 vlan_tag=1022 aliases=[{"address": "10.0.2.15", "netmask": "32"}]`

![ConsoleVLANConfigSCALE](/images/SCALE/ConsoleVLANConfigSCALE.png "TrueNAS SCALE VLAN Configuration")

2. Enter `commit` to apply the pending changes.

3. Enter `exit` to return to the Console Setup menu.

4. Enter `5` to open the Linux Shell, then enter `ip addr show` to ensure you set the correct IP address.

5. Enter `exit` to go back to the Console Setup menu.
<br><br>
### Configure Gateway

1. Enter `4` to open the TrueNAS CLI Shell.

2. Enter `network configuration update ipv4gateway="ipaddress"`  
   Example: `network configuration update ipv4gateway="10.0.2.15"`

![ConsoleGatewayConfigSCALE](/images/SCALE/ConsoleGatewayConfigSCALE.png "TrueNAS SCALE Gateway Configuration")

3. Enter `exit` to go back to the Console Setup menu.

4. Enter `5` to open the Linux Shell.

5. Enter `ping ipaddress` to ping the gateway.  
   Example: `ping 10.0.2.15`

6. When you are ready to stop pinging, type <kbd>Ctrl+C<kbd> to view the statistics.

![ConsoleGatewayPingSCALE](/images/SCALE/ConsoleGatewayPingSCALE.png "TrueNAS SCALE Pinging the Gateway")

7. Enter `exit` to go back to the Console Setup menu.
{{< /tab >}}

{{< tab "Configuring Static Route" >}}
1. Enter `4` to open the TrueNAS CLI Shell, then enter `network interface`

2. Enter `update interface1 aliases="ipaddress"`  
   Example: `update eno1 aliases="10.0.2.15"`

![ConsoleStaticConfigSCALE](/images/SCALE/ConsoleStaticConfigSCALE.png "TrueNAS SCALE Static Route Configuration")

3. Enter `commit`, then `checkin` to apply the changes.

4. Enter `exit` to go back to the Console Setup menu.
{{< /tab >}}
{{< /tabs >}}

## Changing the Root Password

Enter `2` in the Console Setup menu, then enter and re-enter the new password you want to use.

{{< hint warning >}}
Changing the root password disables 2FA (Two-Factor Authentication).
{{< /hint >}}

## Resetting the System Configuration

Enter `3` in the Console Setup menu, then enter `y` to reset the system configuration. The system will reboot and revert to default settings.

{{< hint danger >}}
**Caution!**
Resetting the configuration deletes all settings and reverts TrueNAS to default settings. Before resetting the system, back up all data and encryption keys/passphrases! After the system resets and reboots, you can go to **Storage** and click *Import* to re-import pools.
{{< /hint >}}