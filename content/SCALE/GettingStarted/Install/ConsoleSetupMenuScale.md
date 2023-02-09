---
title: "Using the Console Setup Menu"
description: "This article provides information on using the Console setup menu after installing TrueNAS SCALE from the iso file to configure network settings."
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

The Console setup menu (CSM) displays at the end of the <file>iso </file> installation process and after the system boots up.
You can access this menu to administer the TrueNAS system if it has a keyboard and monitor.

By default, TrueNAS does not display the Console setup menu when you connect via SSH or the web shell. 
The admin user, the root user (if enabled), or another user with root permissions can start the Console setup menu by entering this command:

`/usr/bin/cli --menu`  

The menu provides these options:

![ConsoleSetupMenuSCALE](/images/SCALE/22.12/ConsoleSetupMenuSCALE.png "TrueNAS SCALE Console Setup Menu") 

* **1) Configure network interfaces** 

  You can use this to configure the primary network interface with a static IP if you do not want to use the DHCP-assigned IP address TrueNAS provides when the system boots up after installing the SCALE <file>iso</file> file. 
  You can also use this option to set up other network interfaces, or to add alias IP addresses for the primary interface. 
  We recommend you use the SCALE UI to configure network interfaces as it has safeguards to prevent you from breaking network access to SCALE.

* **2) Configure network settings** 
  
  You can use this to set up the network default gateway, host name, domain, IPv4 gateway and the DNS name servers.
  Options configured display in the **Global Configuration** widget on the **Network** screen in the web UI. 
  We recommend you use the SCALE UI to configure network interfaces as it has safeguards to prevent you from breaking network access to SCALE.

* **3) Configure static routes** 
  
  You can use this to set up static IP routes, but this is not required as part of the initial configuration setup.
  We recommend you use the SCALE UI to configure network settings as it has safeguards to prevent you from breaking network access to SCALE.

* **4) Change local administrator password** 
  
  Use to change the administrator user password. /usr/bin/cli --menu
  If you selected option 1 on the iso installer menu you configured the admin user and password. 
  Use can use this to change the admin password before you log into the SCALE UI.
  {{< hint info >}}
  This is not the password for the root user in the CLI or the root user login password for the web UI.
  The [root user password]({{< relref "rootlessLogin.md" >}}) is disabled by default. You can turn on the root user password in the UI, but this is not recommended.
  {{< /hint >}}

* **5) Reset configuration to defaults** 
  
  Use to reset the system configuration settings back to defaults.

* **6) Open TrueNAS CLI Shell** 

  Use to start a shell for running TrueNAS commands, or use the SCALE UI **[System Settings > Shell]({{< relref "UseScaleShell.md" >}})**. 
  Type `exit` to leave the shell.

* **7) Open Linux Shell** 
  
  Use to start a shell window for running Linux CLI commands. 
  This is not recommended unless you are an advanced user. Type `exit` to leave the shell.

* **8) Reboot** 

  Use to reboot the system.

* **9) Shut down** 

  Use to shut down the system.

{{< hint info >}}
Console setup menu options can change with software updates, service agreements, etc.
{{< /hint >}}

{{< hint ok >}}
During boot, TrueNAS attempts to connect to a DHCP server from all live interfaces.
If it receives an IP address, the Console setup menu displays it under **The web user interface is at:** so you can access the SCALE web UI.
{{< /hint>}}

You might be able to access the web UI using a `hostname.domain` command at the prompt (default is `truenas.local`) if your system:

* Does not have a monitor.
* Is on a network that supports Multicast DNS (mDNS).

## Console Setup Menu Network Settings

You can either use SCALE UI or the Console setup menu to configure your network settings for the primary network interface or other interfaces such as a link aggregate (LAGG) or virtual LAN (VLAN), or aliases for an interface, and to configure global network settings such as the default gateway, host name, domain, and the DNS name servers, or add static routes. 

{{< hint info >}}
We recommend that only experienced administrators familiar with network configuration and the Console setup menu use it and that less experienced and knowledgeable system administrators use the SCALE UI. 
The TrueNAS SCALE UI includes safety measures to prevent you from completely disrupting network connectivity for your TrueNAS SCALE if you make a mistake with network interface settings.
{{< /hint >}}

To use CLI commands, enter `7` to open a Linux shell and then enter commands.

Enter <kbd>1</kbd> to display the **Configure Network Interfaces** screen where you can select the interface settings. 

![CSMEditInterface](/images/SCALE/22.12/CSMEditInterface.png "TrueNAS SCALE Console Setup Menu Edit Interface") 

Follow the instructions on the screen to configure an IP for a network interface. 
Type <kbd>n</kbd> to open the new interface screen or press <kbd>Enter</kbd> to edit the existing interface. 
You can enter aliases for an interface when you create a new or edit an existing interface.

![CSMEditInterfaceSettings](/images/SCALE/22.12/CSMEditInterfaceSettings.png "TrueNAS SCALE Console Setup Menu Edit Interface Settings") 

Type <kbd>q</kbd> to to return to the main Console setup menu screen. 

Enter <kbd>2</kbd> to display the **Network Settings** screen where you can set up the host name, domain, default gateway and name servers.

![CSMEditNetworkSettings](/images/SCALE/22.12/CSMEditNetworkSettings.png "TrueNAS SCALE Console Setup Menu Edit Network Settings") 

Enter <kbd>3</kbd> to display the Static Route Settings screen where you can set up any static routes. You can also add static routes in the web UI.

![CSMEditStaticRoute](/images/SCALE/22.12/CSMEditStaticRoute.png "TrueNAS SCALE Console Setup Menu Static Routes") 

{{< include file="/_includes/AliasOrStaticIP.md" type="page" >}}

### Configuring Required Network Settings 

TrueNAS uses DHCP to assign the IP address required to access the SCALE UI and displays it on the Console setup menu screen, and it sets the host name to truenas.

If you don't plan to use the DHCP-assigned network addresses provided by SCALE, identify your host and domain names, the static or fixed IP addresses you plan to assign to your network interface card(s), the default gateway, subnet mask(s), and the DNS name servers in your network. 
For Enterprise systems, have your network information ready to provide iXsystems Support when they step you through your configuration. 
For all other users, having this information ready before you begin configuring network settings makes the process go faster and reduces the risk of issues when you configure SCALE. 

If you want to use the Console setup menu to change the network interface IP address, type <kbd>1</kbd> and then press <kbd>Enter</kbd> to open the **Configure Network Interfaces** screen. 
Use either <kbd>Tab</kbd> or the arrow keys to select the interface to use as your primary network interface if you have more than one interface installed and wired to your network. 
Type in the IP address then use either <kbd>Tab</kbd> or the arrow keys to move through the menu and down to select **Save**, and then press <kbd>Enter</kbd>. 
After saving and to return to the main Console setup menu type <kbd>q</kbd>. 
If you want to configure the default gateway, host name, domain and DNS name severs using the Console setup menu type <kbd>2</kbd> and then press <kbd>Enter</kbd> to open the **Network Settings** screen. 

To configure network settings in the SCALE UI, enter the IP address displayed on the Console setup menu screen in a browser URL field and press <kbd>Enter</kbd>. 
Log in with the admin user name and the password you set for the administration user during the <file>iso</file> installation process, and then go to **Network** and or edit and interface or global network configuration settings. 

For home users, you have a few options to allow Internet access using TrueNAS SCALE:
* Use 8.8.8.8 as the DNS nameserver address
* Use your ISP provider DNS servers (contact them for assistance with these addresses)
* Use 1.1.1.1 for [Cloudflare](https://www.cloudflare.com/)
* Use 9.9.9.9 for [Quad9](https://www.quad9.net/)

## Changing the Administrator Password

SCALE has implemented rootless login, making the admin user the default account, and has disabled the root password by default. 
You can change the admin user password in the UI or from the Console setup menu.
You can set and enable the root user password in the UI but for security hardening, we recommend you leave it disabled.

{{< hint warning >}}
Disabling a password in the UI prevents the user from logging in with it. If you disable both the root and local admin user passwords and your session times out with them disabled, a temporary sign-in slash screen allows you to log in.
Immediately go to the **Credentials > Local User** screen, select the admin user, and then **Edit** where you can enable the password.
{{< /hint >}}

{{< hint warning >}}
Changing the admin user (or root if you have not created the admin user) password disables 2FA (Two-Factor Authentication).
{{< /hint >}}

## Resetting the System Configuration
{{< hint danger >}}
**Caution!**
Resetting the configuration deletes all settings and reverts TrueNAS to default settings. Before resetting the system, back up all data and encryption keys/passphrases! 
After the system resets and reboots, you can go to **Storage** and click **Import Pool** to re-import pools.
{{< /hint >}}

Enter **5** in the Console setup menu, then enter <kbd>y</kbd> to reset the system configuration. The system reboots and reverts to default settings.

## Completing your System Setup

After setting up network requirements, log into the web UI to complete your system setup by:
* [Setting up storage]({{< relref "SetUpStorageSCALE.md" >}})
* [Setting up sharing]({{< relref "SetUpSharing.md" >}})
* [Backing Up your Configuration]({{< relref "SetUpBackupSCALE.md" >}})

{{< taglist tag="scaleinstall" limit="10" >}}
{{< taglist tag="scalenetwork" limit="10" title="Related Network Articles" >}}
