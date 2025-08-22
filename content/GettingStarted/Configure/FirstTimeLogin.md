---
title: "Logging In for the First Time"
description: "Describes the web interface, logging in to the TrueNAS web interface for the first time, changing from root to the admin user, and navigating through the UI."
weight: 20
tags:
- dashboard
keywords:
- nas system storage
- nas data storage solution
- nas storage software
- LDAP
---

Now that you have installed TrueNAS, or migrated from an earlier version, you can log into the web user interface (UI) to complete your initial system configuration and begin managing data!

{{< hint type="important" title="Configuring TrueNAS from the Web Interface" >}}
Use only the web user interface (UI) to make configuration changes to the system.
By default, using the LINUX shell command-line interface (CLI) to modify the system does not modify the settings database.
After a system restart, changes made in the CLI revert to the original database settings, wiping away any user-made command line changes.
{{< /hint >}}

## Web Interface Access
TrueNAS automatically creates several ways to access the UI, but you might need to adjust the default settings for your network environment.

By default, a fresh install of TrueNAS provides a default address for logging in to the web interface.
To view the web interface IP address or reconfigure web interface access, either connect a monitor and keyboard to your TrueNAS system or connect with IPMI for out-of-band system management.

When powering on a TrueNAS system, the system attempts to connect to a DHCP server from all live interfaces to access the web UI.
On networks that support Multicast Domain Name Services (mDNS), the system can use a host name and domain to access the TrueNAS web interface.
By default, TrueNAS uses the host name and domain **truenas.local**.
To change the host name and domain in the web interface, go to **Network** and click **Settings** on the **Global Configuration** widget.

To access the web interface using an IP address, either use the DHCP-assigned IP address displayed at the top of the Console Setup menu after installing TrueNAS or use the static IP address you assigned using the [Console Setup menu]({{< ref "/GettingStarted/install/ConsoleSetupMenuSCALE" >}}).

{{< enterprise >}}
TrueNAS Enterprise (HA) systems have specific network configuration requirements.
Installing TrueNAS on High Availability (HA) systems and configuring networking is complicated and should be guided by Enterprise-level support.
Contact TrueNAS Enterprise Support for assistance whenever attempting to install TrueNAS on Enterprise HA hardware or configure network settings.

Refer to the [Preparing for TrueNAS UI Configuration (Enterprise)]({{< ref "InstallPrepEnterprise" >}}) and [Installing TrueNAS Enterprise (HA)]({{< ref "InstallEnterpriseHASCALE" >}}) for information on installing HA system and configuring networking.
{{< expand "Contacting Support" "v" >}}
{{< include file="/static/includes/iXsystemsSupportContact.md" >}}
{{< /expand >}}
{{< /enterprise >}}

## Logging Into the TrueNAS UI
Use a computer with access to the same network as the TrueNAS system.
Enter the host name and domain or IP address assigned to the primary network interface in a web browser to connect to the TrueNAS web interface.

The browser used to access the TrueNAS UI can impact the quality of your user experience. We generally recommend using Firefox, Edge, or Chrome.

{{< include file="/static/includes/RootLoginWarnSCALE.md" >}}

{{< include file="/static/includes/AdminAccountSecurity.md" >}}

With the implementation of administrator accounts, the root user is no longer the default administrator username.

Based on the method used to install TrueNAS, you can be presented with different first-time login scenarios, each described below.

{{< expand "Clean Installing TrueNAS" "v" >}}
When installing TrueNAS from an <file>iso</file> file, and based on the authentication method selected in step 4 of the [TrueNAS installer]({{< ref "InstallingScale.md#using-the-truenas-installer" >}}) process, you can see a different sign-in screen for the web UI and need to use different login credentials.

* Selecting **1. Administrative user (truenas_admin)** opens the standard TrueNAS sign-in screen where you enter the new **truenas_admin** username and password created during installation.
  The root user password is disabled by default. We recommend this option, as it creates the required administrative user and disables the root user password, and which brings the system into compliance with FIPS security hardening standards.

  The root user still exists but with the password disabled by default, which means only the truenas_admin user can log into the system.
  You can activate the password for the root user for some limited uses, but you should return to a security-hardened operation by disabling the root password immediately after you finish with the limited use.

* Selecting **2. Configure using Web UI** opens a TrueNAS sign-in screen with two options. Select the option to either create the admin or root user and password.

  If creating and logging in as the admin user, after logging in you must immediately disable the root user password to comply with FIPS security hardening standards.
  
  If creating and logging in as the root user, after logging in you must create the admin user and then immediately disable the root user password to comply with FIPS security hardening standards.
  The root user still exists but with the password disabled by default, which means only the admin user can log into the system.
  You can activate the password for the root user for some limited uses, but you should return to a security-hardened operation by disabling the root password immediately after you finish with the limited use.
  
{{< /expand >}}

{{< expand "Upgrading from TrueNAS Early Releases" "v" >}}
Early Linux-based releases of TrueNAS (Angelfish and pre-22.12.3 Bluefin release) use the root user credentials to log into the system.
After upgrading from an earlier release, use the existing root user credentials to log into TrueNAS.
{{< include file="/static/includes/CreateAdminDisableRoot.md" >}}
{{< /expand >}}

{{< expand "Migrating/Upgrading from FreeBSD- to Linux-based TrueNAS Versions" "v" >}}

{{< enterprise >}}
Customers with a TrueNAS Enterprise High Availability (HA) system should review [Migration Preparation]({{< ref "MigratePrep" >}}), [Enterprise HA Migrations]({{< ref "MigrateCOREHAToSCALEHA" >}}), and consult with TrueNAS Enterprise Support prior to migrating.
{{< /enterprise >}}
For non-HA systems, there are two possible scenarios when migrating:

* Clean installing TrueNAS using the <file>iso</file> file and then uploading the previous configuration file.
* Using the 13.0 (or 13.3 for community users) **Update** UI option to upgrade.

If performing a clean install using the TrueNAS <file>iso</file> file, after installing TrueNAS and uploading the configuration file, your network settings get overwritten by the config file, so you cannot use the new IP address and admin user to access to the web UI.
Use the previous address and root credentials to access the UI.
See [TrueNAS Migrations]({{< ref "MigratingFromCORE" >}}) for instructions on recovering the new network settings and access to the UI, and recreating the administrator account.

If using the **Update** UI option, log into TrueNAS with the existing root user credentials.
{{< include file="/static/includes/CreateAdminDisableRoot.md" >}}
{{< /expand >}}

### Logging In as Truenas_Admin
After setting up the truenas_admin user from one of the scenarios documented above, enter **truenas_admin** and the password to log in.

{{< trueimage src="/images/SCALE/Login/LoginScreenSCALE.png" alt="TrueNAS Login Screen" id="TrueNAS Login Screen" >}}

To modify user credentials, go to **Credentials > Users**, click anywhere on the user row, then click **Edit**.
For more information, see [Managing Users]({{< ref "ManageLocalUsersScale" >}}).

### Logging In as Root
If logging in with the root user credentials, enter root as the user and the root password.
{{< include file="/static/includes/CreateAdminDisableRoot.md" >}}

Follow the directions in [Managing Users]({{< ref "ManageLocalUsersScale" >}}) to create an administration user with all required settings.
For environments requiring specific configurations, such as non-AD environments or those using LDAP, ensure that your admin user is properly set up to manage all aspects of the system.

### Creating an Administrator Account at First Log in
If you selected the installation option **2. Configure using Web UI**, the sign-in screen shows two authentication methods.
One allows you to log in as root or you can create the administration account.

{{< trueimage src="/images/SCALE/Login/FirstTimeLoginInstallOpt3SCALE.png" alt="TrueNAS Login Set Up Authentication Method" id="TrueNAS Login Set Up Authentication Method" >}}

Select either the **Administrative user** or **Root user (not recommended)** option, then enter the password to use with that user.

If you choose **Root user (not recommended)** as the TrueNAS authentication method, go to the **Credentials > Users** screen and [create the admin account]({{< ref "ManageLocalUsersSCALE" >}}) immediately after you enter the UI.
Enter the admin user name and password, make sure the password is enabled, and click **Save**.
After setting up the admin user, click on the root user and then click **Edit**. Disable the root user password and then click **Save**.
This brings the system into compliance with FIPS system security-hardening standards.

### Troubleshooting Accessing the Web UI
If you cannot remember the administrator password to log in to the web interface, connect a keyboard and mouse to the TrueNAS system and open the [Console Setup menu]({{< ref "ConsoleSetupMenuScale.md#changing-the-root-password" >}}) to reset the administrator account password.

{{< expand "UI is not accessible by IP address" "V" >}}
If the user interface is not accessible by IP address from a browser, check the following:

* If the browser configuration has proxy settings enabled, disable them and try connecting again.

* If the page does not load, ensure a `ping` reaches the TrueNAS system IP address.
  If the IP address is in a private range, you must access it from within that private network.
{{< /expand >}}

{{< expand "UI displays but seems unresponsive" "v" >}}
If the web interface displays but seems unresponsive or incomplete:

* Make sure the browser allows cookies, Javascript, and custom fonts from the TrueNAS system.

* Try a different browser. We recommend Firefox, Edge, or Chrome.

If the UI becomes unresponsive after an upgrade or other system operation, clear the site data and refresh the browser (<kbd>Shift</kbd>+<kbd>F5</kbd>).
{{< /expand >}}

## Introducing the TrueNAS Dashboard

After logging in for the first time, the main system **Dashboard** screen displays.
The **Dashboard** shows different system information cards (widgets) with basic information about the installed version, systems component usage, network traffic, and configured pools or storage usage.
The dashboard includes configurable widgets that include a text-only **Custom** widget and an **Apps** widget you can configure to monitor your installed applications.

{{< trueimage src="/images/SCALE/Dashboard/DashboardMainScreen.png" alt="TrueNAS Dashboard" id="TrueNAS Dashboard" >}}

TrueNAS Enterprise users with an iXsystems-provided server also see an image of the system in the **System Information** widget.
Click on the system image to open the **System > [View Enclosure]({{< ref "EnclosureScreensSCALE" >}})** screen.

The **Dashboard** for non-Enterprise systems displays the TrueNAS logo on the **System Information** widget.

To [customize the dashboard ]({{< ref "/SCALETutorials/Dashboard" >}}), click **Configure** to put the **Dashboard** into configuration mode.
Use the drag bar to move widget groups to new positions on the screen.
Click **Add** to create new widgets or the **Edit** option in the widget group to change the look or information included in a widget.

{{< trueimage src="/images/SCALE/Dashboard/DashboardInConfigMode.png" alt="Dashboard in Configuration Mode" id="Dashboard in Configuration Mode" >}}

## Introducing TrueNAS Navigation Options

The top row (toolbar) has links to outside resources and buttons to control the system.
The left-hand panel lists the main feature and functional areas and lets users navigate to the various TrueNAS configuration screens.

### Top Toolbar

{{< include file="/static/includes/TopToolbar.md" >}}

## Managing Sessions
To monitor and manage all active sessions, go to **System > Advanced Settings** and locate the **Access** widget.
{{< include file="/static/includes/SessionsSettingsWidget.md" >}}

## Next Steps
With access to the TrueNAS web interface and all the management options, you can begin [configuring your system]({{< ref "UIConfigurationSCALE" >}})!
