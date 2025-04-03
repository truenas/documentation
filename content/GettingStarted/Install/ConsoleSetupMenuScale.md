---
title: "Using the Console Setup Menu"
description: "Provides information on using the Console Setup menu after installing TrueNAS from the iso file to configure network settings."
weight: 20
tags:
- install
- network
- console
keywords:
- data storage system
- nas storage
- FIPS compliance
- storage replication
---

The Console Setup menu displays at the end of the <file>iso </file> installation process and after the system boots up.
You can access this menu to administer the TrueNAS system if it has a keyboard and monitor.

By default, TrueNAS does not display the Console Setup menu with SSH or web shell connections.
The admin user, the root user (if enabled), or another user with administrator or root-level permissions can start the Console Setup menu by entering this command:

`/usr/bin/cli --menu`  

The menu provides several options:

{{< trueimage src="/images/SCALE/CLI/ConsoleSetupMenuSCALE.png" alt="TrueNAS Console Setup Menu" id="TrueNAS Console Setup Menu" >}}

For network configuration options **1**, **2**, and **3**, we recommend using the TrueNAS UI to configure network interfaces, as it has safeguards to prevent breaking network access to TrueNAS.

* **1) Configure network interfaces**

  Use this to configure the primary network interface with a static IP.
  This is for switching away from the DHCP-assigned IP address TrueNAS provides when the system boots after installing TrueNAS.
  Also, use this to set up other network interfaces or to add alias IP addresses, also referred to as static IP addresses, for the primary interface.

* **2) Configure network settings**
  
  Use this to set up the network default gateway, host name, domain, IPv4 gateway and DNS name servers.
  Configured options display in the **Global Configuration** widget in the web UI **Network** screen.

* **3) Configure static routes**
  
  Use this to set up static IP routes, but this is not required as part of the initial configuration setup.

* **4) Change local administrator password**
  
  Use to change the administrator user password.
  If you selected option 1 on the iso installer menu, you have already configured the **truenas_admin** user and password.
  You can use this to change the admin password before you log into the TrueNAS UI.
  {{< hint type=note >}}
  This is not the password for the root user in the CLI or the root user login password for the web UI.
  The [root user password]({{< relref "AdminRoles" >}}) is disabled by default as part of security hardening.
  Activating the root user is not recommended.
  {{< /hint >}}

* **5) Reset configuration to defaults**

  Use to wipe all system configuration settings and return the system to a fresh install state.

* **6) Open TrueNAS CLI Shell**

  Use to start a shell for running TrueNAS commands, or use the TrueNAS UI **[System Settings > Shell]({{< relref "UseScaleShell" >}})**.
  Type `exit` to leave the shell.

* **7) Open Linux Shell**

  Use to start a shell window for running Linux CLI commands.
  Configuration changes made here are not written to the database and are reset on each system boot.
  We do not recommend using the Linux shell unless you are an advanced user. Type `exit` to leave the shell.

* **8) Reboot**

  Use to restart the system by powering down and then automatically powering on the system.

* **9) Shut down**

  Use to power down the system.

During the first boot, TrueNAS attempts to connect to a DHCP server from all live interfaces.
If it receives an IP address, the Console Setup menu displays it under **The web user interface is at:** so you can access the TrueNAS web UI.

You might be able to access the web UI using a `hostname.domain` command at the prompt (default is `truenas.local`) if your system:

* Does not have a monitor.
* Is on a network that supports Multicast DNS (mDNS).

## Console Setup Menu Network Settings
You can either use TrueNAS UI or the Console Setup menu to configure your network settings for the primary network interface or other interfaces such as a link aggregate (LAGG) or virtual LAN (VLAN), or aliases for an interface, and to configure other network settings such as the default gateway, host name, domain, and the DNS name servers, or add static routes.

{{< include file="/static/includes/UsingConsoleSetupMenuSCALE.md" >}}

Enter <kbd>1</kbd> to display the **Configure Network Interfaces** screen and select the interface settings.

{{< trueimage src="/images/SCALE/CLI/CSMEditInterface.png" alt="TrueNAS Console Setup Menu Edit Interface" id="TrueNAS Console Setup Menu Edit Interface" >}}

Follow the instructions on the screen to configure an IP for a network interface.
Type <kbd>n</kbd> to open the new interface screen or press <kbd>Enter</kbd> to edit the existing interface.

{{< trueimage src="/images/SCALE/CLI/CSMEditInterfaceSettings.png" alt="TrueNAS Console Setup Menu Edit Interface Settings" id="TrueNAS Console Setup Menu Edit Interface Settings" >}}

You can enter aliases for an interface when you create a new one or edit an existing interface.

{{< include file="/static/includes/AliasOrStaticIP.md" >}}

Type <kbd>q</kbd> to return to the main Console Setup menu screen.

Enter <kbd>2</kbd> to display the **Network Settings** screen to set up the host name, domain, default gateway and name servers. You can also add these settings using the web UI.

{{< trueimage src="/images/SCALE/CLI/CSMEditNetworkSettings.png" alt="TrueNAS Console Setup Menu Edit Network Settings" id="TrueNAS Console Setup Menu Edit Network Settings" >}}

Enter <kbd>3</kbd> to display the **Static Route Settings** screen to set up static routes. You can also add static routes in the web UI.

{{< trueimage src="/images/SCALE/CLI/CSMEditStaticRoute.png" alt="TrueNAS Console Setup Menu Static Routes" id="TrueNAS Console Setup Menu Static Routes" >}}

{{< include file="/static/includes/AliasOrStaticIP.md" >}}

### Configuring Required Network Settings
{{< include file="/static/includes/DHCPCreatedNetwork.md" >}}

To use the Console Setup menu to change the network interface IP address:
1. Type <kbd>1</kbd> and then press <kbd>Enter</kbd> to open the **Configure Network Interfaces** screen.
2. Use either <kbd>Tab</kbd> or the arrow keys to select the interface to use as your primary network interface if you have more than one interface installed and wired to your network.
4. Enter in the IP address, then use either <kbd>Tab</kbd> or the arrow keys to move through the menu and down to select **Save**, and then press <kbd>Enter</kbd>.
After saving, enter <kbd>q</kbd> to return to the main Console Setup menu.

To configure the default gateway, host name, domain and DNS name severs using the Console Setup menu type <kbd>2</kbd> and then press <kbd>Enter</kbd> to open the **Network Settings** screen.

To configure network settings in the TrueNAS UI, enter the IP address displayed on the Console Setup menu screen in a browser URL field and press <kbd>Enter</kbd>.
Log in with the admin user name and password set for the administration user during the <file>iso</file> installation process, and then go to **Network** to edit an interface or global network configuration settings.

#### Configuring Home User Network Settings
Home users have a few options to allow Internet access using TrueNAS:

* Use 8.8.8.8 as the DNS nameserver address
* Use your ISP provider DNS servers (contact them for assistance with these addresses)
* Use 1.1.1.1 for [Cloudflare](https://www.cloudflare.com/)
* Use 9.9.9.9 for [Quad9](https://www.quad9.net/)

## Changing the Administrator Password
TrueNAS has implemented administrator account logins as replacements for the root user.
The truenas_admin user account is the default account, and the root password is now disabled by default.
If you migrate from FreeBSD- to Linux-based TrueNAS releases and need to upload the previous system configuration file, the root user password is not disabled but you must recreate the truenas_admin (or an admin) user account and disable the root password to comply with FIPS-compliance standards and security hardening practices.

Existing TrueNAS systems migrating from earlier TrueNAS release with the **admin** user retain this administrator account.
Only a clean install using a TrueNAS 24.10 <file>iso</file> creates the **truenas_admin** administrator account.
Both the earlier **admin** and new **truenas_admin** accounts have the same permissions and privileges.
You can change the admin user password in the UI or from the Console Setup menu.
You can set and enable the root user password in the UI, but for security hardening, we recommend leaving it disabled.

Changing an admin user (or root if you have not created the admin user) password disables 2FA (Two-Factor Authentication).

{{< hint type=important >}}
Disabling a password in the UI prevents the user from logging in with it.
If both the root and local admin user passwords are disabled and the web interface session times out with these passwords disabled, TrueNAS provides a temporary sign-in screen to allow logging into the UI.
Immediately go to the **Credentials > Local User** screen, select the admin user, click **Edit** and re-enable the password.
{{< /hint >}}

## Resetting the System Configuration
{{< hint type=warning >}}
**Caution!**
Resetting the configuration deletes all settings and reverts TrueNAS to default settings.
Before resetting the system, back up all data and encryption keys/passphrases!
After the system resets and reboots, you can go to **Storage** and click **Import Pool** to re-import pools.
{{< /hint >}}

Enter **5** in the Console Setup menu, then enter <kbd>y</kbd> to reset the system configuration. The system reboots and reverts to default settings.

## Completing your System Setup
After setting up network requirements, log into the web UI to complete your system setup by:

* [Completing network configuration] ({{< relref "/SCALETutorials/Network/" >}}) if not already set up using the Console Setup menu.
* [Setting up storage]({{< relref "SetUpStorageSCALE" >}})
* [Setting up sharing]({{< relref "SetUpSharing" >}})
* [Backing Up your configuration]({{< relref "SetUpBackupSCALE" >}})
