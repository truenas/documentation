---
title: "Post-install Configuration"
weight: 12
---

The Console Setup menu displays at the end of the boot process.
If the TrueNAS system has a keyboard and monitor, you can use this menu to administer the system.

When connecting with SSH or the web shell, the Console Setup menu is not shown by default.
It can be started by the `root` user or another user with root permissions by entering `/etc/netcli`.

To disable the Console Setup menu, go to **System > Advanced** and unset *Show Text Console without Password Prompt*.

![ConsoleSetupMenuSCALE](/images/SCALE/ConsoleSetupMenuSCALE.png "TrueNAS Console Setup Menu")

The menu provides these options:

1) **Configure network interfaces** provides a configuration wizard to set up the system’s network interfaces.

2) **Reset root password** resets the `root` user password.

3) **Reset configuration to defaults** *Caution!* This option deletes all of the configuration settings made in the administrative GUI and is used to reset TrueNAS back to defaults. Before selecting this option, make a full backup of all data and make sure all encryption keys and passphrases are known! After selecting this option, the configuration resets to defaults and the system reboots. Navigate to **Storage** and click *Import* to re-import pools.

4) **Open TrueNAS CLI Shell** starts a shell for running TrueNAS commands. Type `exit` to leave the shell.

5) **Open Linux Shell** starts a shell for running Linux commands. Type `exit` to leave the shell.

6) **Reboot** reboots the system.

7) **Shut Down** shuts down the system.

The numbering and quantity of options on this menu can change due to software updates, service agreements, or other factors.
Please carefully check the menu before selecting an option, and keep this in mind when writing local procedures.

During boot, TrueNAS automatically attempts to connect to a DHCP server from all live interfaces.
If it successfully receives an IP address, it will display it so you can access the Web UI.
In the example shown above, TrueNAS is accessible at `10.0.2.15`.

Some TrueNAS systems are set up without a monitor, making it challenging to determine which IP address has been assigned.
On networks that support Multicast DNS (mDNS), the hostname and domain can be entered into the address bar of a browser. (`truenas.local` by default).


## Configuring Network Interfaces

{{< tabs "Configurations" >}}
{{< tab "Simple Network Interface Configuration" >}}
### Simple Network Configuration

Enter `4` to open the TrueNAS CLI Shell.

![ConsoleNetworkConfig1SCALE.png](/images/SCALE/ConsoleNetworkConfig1SCALE.png.png "TrueNAS SCALE Console Setup Menu")

#### Select an Interface

1. Enter `network interface`, then enter `query` to build a list of available physical system interfaces. 

2. Once you know which interface you want to update, enter `update interface aliases=["ipaddress"] ipv4_dhcp=false`.
   Example: `update eno1 aliases=["10.0.2.15"] ipv4_dhcp=false`

3. You should see "You have pending network interface changes. Please run `network interface commit` to apply them."

4. Enter `commit` to apply the changes.

5. You should see "Network interface changes have been applied.  Please run `network interface checkin` if the network is still operational or they will be rolled back in -- seconds".

6. Enter `checkin` (before the countdown reaches 0), then enter `query`. You should see the successfully updated interface in the table.

![ConsoleNetworkConfig2SCALE.png](/images/SCALE/ConsoleNetworkConfig2SCALE.png.png "TrueNAS SCALE Network Configuration")

#### Configure the Default Gateway

1. Enter `..` to go back to the `network>` prompt, then enter `configuration`.

2. Enter `update ipv4gateway="ipaddress"`
   Example: `update ipv4gateway="10.0.2.15"`

![ConsoleNetworkConfig3SCALE.png](/images/SCALE/ConsoleNetworkConfig3SCALE.png.png "TrueNAS SCALE Network Configuration")

If you executed the command properly, the console will display the new web UI address.

Example:
```
The web user interface is at:
http://10.0.2.15
https://10.0.2.15
```

Enter `exit` to go back to the console setup menu.
{{< /tab >}}

{{< tab "Configuring LAGG and VLAN" >}}
### Configure LAGG

1. Enter `4` to open the TrueNAS CLI Shell.

2. Enter `network interface`, then enter `query` to build a list of available physical system interfaces. 

3. Once you know the interface names, enter `create type=LINK_AGGREGATION lag_ports=["interface1","interface2"] lag_protocol=LACP` 
   Example: `network interface create type=LINK_AGGREGATION lag_ports=["eno1","eno2"] lag_protocol=LACP`

ConsoleLAGGConfigSCALE.png

### Configure VLAN

Enter `create type=VLAN vlan_parent_interface=bondname vlan_tag=tagnumber aliases=[{"address": "ipaddress", "netmask": "bitlength"}]`
      Example: `create type=VLAN vlan_parent_interface=bond0 vlan_tag=1022 aliases=[{"address": "10.0.2.15", "netmask": "32"}]`

ConsoleVLANConfigSCALE.png

Enter `exit` to return to the console main menu.

To ensure you set the IP correctly, enter `5` to open the Linux Shell, then enter `ip addr show`.

Enter `exit` to go back to the console setup menu.

### Configure Gateway

1. Enter `4` to open the TrueNAS CLI Shell.

2. Enter `network configuration update ipv4gateway="ipaddress"`
   Example: `network configuration update ipv4gateway="10.0.2.15"`

ConsoleGatewayConfigSCALE.png

3. Enter `exit` to go back to the console setup menu.

You should now be able to ping the gateway
{{< /tab >}}

{{< tab "Configuring Static Route" >}}
1. Enter `4` to open the TrueNAS CLI Shell, then enter `network interface`

2. Enter `update interface1 aliases="ipaddress"` 
   Example: `update eno1 aliases="10.0.2.15"`

ConsoleStaticConfigSCALE.png

3. Enter `commit`, then `checkin` to apply the changes.

4. Enter `exit` to go back to the console setup menu.
{{< /tab >}}
{{< /tabs >}}

## Changing the Root Password

1. Enter `2` in the console setup menu, then enter and re-enter the new password you want to use.

{{< hint warning >}}
Changing the root password disables 2FA (Two-Factor Authentication).
{{< /hint >}}

## Resetting the System Configuration

1. Enter `3` in the console setup menu, then enter `y` to reset the system configuration.

The system will reset to default settings and reboot.

{{< hint danger >}}
**Caution!**
Resetting the system configuration deletes all configuration settings made in the administrative GUI and resets TrueNAS back to defaults. Before resetting the system, backup all data and encryption keys/passphrases! After the system resets and reboots, you can navigate to **Storage** and click *Import* to re-import pools.
{{< /hint >}}