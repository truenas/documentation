---
title: "Console Setup Menu Configuration"
description: "This article provides instructions on configuration network settings using the Console setup menu after you install TrueNAS SCALE from the iso file."
weight: 20
aliases:
 - /scale/gettingstarted/post-installconfiguration/
tags:
- scaleinstall
- scalenetwork
- scaleinterface
- scaleconsole
---

{{< toc >}}

The Console setup menu (CSM) displays at the end of the boot process.
If the TrueNAS system has a keyboard and monitor, you can use this menu to administer the system.

By default, TrueNAS does not display the Console setup menu when you connect via SSH or the web shell.
The root user or another user with root permissions can start the Console setup menu by entering the `/etc/netcli` command.

![ConsoleSetupMenuSCALE](/images/SCALE/22.12/ConsoleSetupMenuSCALE.png "TrueNAS SCALE Console Setup Menu") 

The menu provides these options:

* **1) Configure network interfaces** which provides options to set up network interfaces. 
  These display in the **Global Configuration** widget on the **Network** screen in the web UI.

* **2) Configure network settings** which provides options to set up the network default gateway, host name, domain, IPv4 gateway and the DNS name servers. 

* **3) Configure static routes** which provides options to setup static routes. Not required as part of the initial configuration setup.

* **4) Set up local administrator** which resets the local administrator user password. 
  This is not the password for the `root` user in the CLI or the root user login password for the web UI.

* **5) Reset configuration to defaults** which resets the system configuration settings back to defaults.

* **6) Open TrueNAS CLI shell** which starts a shell for running TrueNAS commands. Type `exit` to leave the shell.

* **7) Open Linux shell** which starts a shell window for running Linux CLI commands. Type `exit` to leave the shell.

* **8) Reboot** which reboots the system.

* **9) Shut down** which shuts down the system.

Console setup menu options can change with software updates, service agreements, etc.

{{< hint ok >}}

During boot, TrueNAS attempts to connect to a DHCP server from all live interfaces.
If it receives an IP address, the Console setup menu displays it under **The web user interface is at:** so you can access the Web UI.
{{< /hint>}}

You might be able to access the web UI using a `hostname.domain` command at the prompt (default is `truenas.local`) if your system:
* Does not have a monitor.
* Is on a network that supports Multicast DNS (mDNS).

## Configuring Network Settings

You can use the Console setup menu to configure your primary network interface and any other interfaces you want to uses such as a link aggregate (LAGG) or virtual LAN (VLAN). 
You can also use the Console setup menu to configure other network settings such as the default gateway, host name, domain, and the DNS name servers, or add static routes.

Enter `1` to display the **Configure Network Interfaces** screen where you can select the interface settings. If you want to use commands, enter `7` to open a Linux shell and then enter commands.

Enter `2` to display the Network Settings screen where you set up the host name, domain, default gateway and name servers.

Enter `3` to display the Static Route Settings screen where you can set up any static routes. You can also add static routes in the web UI.

{{< include file="/_includes/AliasOrStaticIP.md" type="page" >}}

### Configuring Required Network Settings 

First, configure your primary network interface. The IP address assigned by DHCP displays in the Console setup menu screen. You can configure the default gateway, host name, domain and DNS name severs using the Console setup menu but you should use the web UI to configure these settings. Go to the **Network** screen.

![ConsoleNetworkConfig1SCALE](/images/SCALE/ConsoleNetworkConfig1SCALE.png "TrueNAS SCALE Console Setup Menu")

To use the CSM, type **1** to display the **Configure Network Interfaces** screen. Select the interface to use as your primary network interface and the settings to use. Use <kbd>Tab</kbd> to select **Save** and then press <kbd>Enter</kbd>.  

Next, open a browser window and enter the IP address DHCP assigned to your TrueNAS. The web UI should display, verifying you can access it. If it does not, return to the Console setup menu and re-enter the correct IP address as the primary interface address.

Log into the web UI as root with the default password set up during step 4 of the TrueNAS Installer process in [Installing Scale]({{< relref "InstallingScale.md" >}}).

After configuring the interface, you can use the CSM to configure the rest of your network settings, but this procedure describes using the web UI to configure the rest of the network settings. 

To enter the remaining network settings in the web UI, go to **Network > Global Configuration** and click **Settings**. Enter the values in the appropriate fields and click **Save**.

For home users, use 8.8.8.8 as the DNS nameserver address. This allows you to access the internet using TrueNAS SCALE.

## Changing the Administrator Password

SCALE has implemented rootless login, making the admin user the default account. Change the admin user password in the UI.

{{< hint warning >}}
Disabling a password in the UI prevents the user from logging in with it. If you disable both the root and local admin user passwords and your session times out with them disabled, a temporary sign-in slash screen allows you to log in.
Immediately go to the **Credentials > Local User** screen, select the admin user and **Edit** to enable the password.
{{< /hint >}}

{{< hint warning >}}
Changing the admin user (or root if you have not created the admin user) password disables 2FA (Two-Factor Authentication).
{{< /hint >}}

## Resetting the System Configuration
{{< hint danger >}}
**Caution!**
Resetting the configuration deletes all settings and reverts TrueNAS to default settings. Before resetting the system, back up all data and encryption keys/passphrases! 
After the system resets and reboots, you can go to **Storage** and click **Import** to re-import pools.
{{< /hint >}}

Enter **5** in the Console setup menu, then enter `y` to reset the system configuration. The system reboots and reverts to default settings.

## Completing your System Setup

After setting up network requirements in the web UI, complete your system setup by:
* Setting up storage
* Setting up sharing
* Backing Up your Configuration

{{< taglist tag="scaleinstall" limit="10" >}}
{{< taglist tag="scalenetwork" limit="10" title="Related Network Articles" >}}
