---
title: "Logging Into SCALE the First Time"
description: "Guides with configuring web interface access and logging in to the TrueNAS SCALE web interface for the first time."
weight: 20
aliases: 
 - /scale/gettingstarted/firsttimelogin/
tags:
- dashboard
---

Now that you have installed TrueNAS SCALE or migrated from TrueNAS CORE to SCALE, you can log into the SCALE web user interface (UI) to complete your initial system configuration and then begin managing data!

{{< hint type="important" title="Configuring TrueNAS from the Web Interface" >}}
Use only the web user interface (UI) to make configuration changes to the system.
By default, using the LINUX shell command-line interface (CLI) to modify the system does not modify the settings database.
After a system restart, changes made in the CLI revert to the original database settings, wiping away any user-made command line changes.
{{< /hint >}}

## Web Interface Access
TrueNAS automatically creates several ways to access the UI, but you might need to adjust the default settings for your network environment.

By default, a fresh install of TrueNAS SCALE provides a default address for logging in to the web interface.
To view the web interface IP address or reconfigure web interface access, either connect a monitor and keyboard to your TrueNAS system or connect with IPMI for out-of-band system management.

When powering on a TrueNAS system, the system attempts to connect to a DHCP server from all live interfaces to access the web UI.
On networks that support Multicast Domain Name Services (mDNS), the system can use a host name and domain to access the TrueNAS web interface.
By default, TrueNAS uses the host name and domain **truenas.local**.
To change the host name and domain in the web interface, go to **Network** and click **Settings** on the **Global Configuration** widget.

To access the web interface using an IP address, either use the DHCP-assigned IP address displayed at the top of the Console Setup menu after installing SCALE or use the static IP address you assigned using the [Console Setup menu]({{< relref "/GettingStarted/install/ConsoleSetupMenuSCALE.md" >}}).

{{< enterprise >}}
SCALE Enterprise (HA) systems have specific network configuration requirements.
Refer to the [Preparing for SCALE UI Configuration (Enterprise)]({{< relref "InstallPrepEnterprise.md" >}}) and [Installing SCALE Enterprise (HA)]({{< relref "InstallEnterpriseHASCALE.md" >}}) for information on installing and configuring HA system networking.
{{< /enterprise >}}

## Logging Into the SCALE UI
Use a computer with access to the same network as the TrueNAS system, either enter the host name and domain or IP address assigned to the primary network interface in a web browser to connect to the SCALE web interface.

The browser used to access the SCALE UI can impact the quality of your user experience. We generally recommend using Firefox, Edge, or Chrome.

{{< include file="/_includes/RootLoginWarnSCALE.md" >}}

With the implementation of administrator accounts, the root user is no longer the default administrator username. 

Based on the method used to deploy SCALE, you are presented with different first time login scenarios described below. 

{{< expand "Clean Installing SCALE" "v" >}}
When you install SCALE from an <file>iso</file> file and based on the authentication method selected in step 4 of the SCALE [TrueNAS installer Console Setup]({{< relref "InstallingScale.md#using-the-truenas-installer-console-setup" >}}) process, you could see a different sign-in splash screen for the web UI and use different login credentials.

* Selecting **1. Administrative user (admin)** opens the standard SCALE sign-in screen where you enter the admin username and password created during installation.
  The root user password is disabled by default. We recommend this option, as it creates the required administrative user and disables the root user password, and which brings the system into compliance with FIPS security hardening standards.

  The root user still exists but with the password disabled by default, which means only the admin user can log into the system.
  You can activate the password for the root user for some limited uses, but you should return to a security-hardened operation by disabling the root password immediately after you finish with the limited use.

* Selecting **2. Root user (not recommended)** opens the standard SCALE sign-in screen where you enter the root username and the root password created during installation.
  {{< include file="/_includes/CreateAdminDisableRoot.md" >}}

* Selecting **3. Configure using Web UI** opens a SCALE sign-in screen with two options. Select the option to either create the admin or root user and password.

  If creating and logging in as the admin user, after logging in you must immediately disable the root user password to comply with FIPS security hardening standards.
  
  If creating and logging in as the root user, after logging in you must create the admin user and then immediately disable the root user password to comply with FIPS security hardeing standards.
  The root user still exists but with the password disabled by default, which means only the admin user can log into the system.
  You can activate the password for the root user for some limited uses, but you should return to a security-hardened operation by disabling the root password immediately after you finish with the limited use.
  
{{< /expand >}}

{{< expand "Upgrading from SCALE Early Releases" "v" >}}
Early releases of SCALE (Angelfish and pre-22.12.3 Bluefin release) use the root user credentials to log into the system. Use the existing root user credentials to log into SCALE.
{{< include file="/_includes/CreateAdminDisableRoot.md" >}}
{{< /expand >}}

{{< expand "Migrating/Upgrading from CORE to SCALE" "v" >}}

{{< enterprise >}}
Customers with a TrueNAS Enterprise High Availability (HA) system should review [Migration Preparation]({{< relref "MigratePrep.md" >}}), [Enterprise HA Migrations]({{< relref "MigrateCOREHAToSCALEHA.md" >}}), and consult with iXsystems Support prior to migrating from TrueNAS CORE to SCALE.
{{< /enterprise >}}
For non-HA systems, there are two possible scenarios when migrating from CORE to SCALE:

* Clean installing SCALE using the <file>iso</file> file and then uploading the CORE configuration file.
* Use the CORE **Update** UI option to upgrade to SCALE.

If performing a clean install from the <file>iso</file> file, after uploading the CORE configuration file, you lose your network settings and and access to the web UI, and the newly created administrator account.
See [Migrating CORE to SCALE]({{< relref "MigratingFromCORE.md" >}}) for instructions on recovering network settings and access to the UI, and recreating the administrator account.

If using the CORE **Update** option, log into SCALE with the CORE root user credentials.
{{< include file="/_includes/CreateAdminDisableRoot.md" >}}

{{< /expand >}}

### Logging In as Admin
After setting up the admin user from one of the scenarios documented above, enter **admin** and the password if the system created the admin user, or enter the username and password you set up to be the administrator account.

{{< trueimage src="/images/SCALE/Login/LoginScreenSCALE.png" alt="TrueNAS SCALE Login Screen" id="TrueNAS SCALE Login Screen" >}}

To modify user credentials, go to **Credentials > Local Users**, click anywhere on the user row, then click **Edit**.
For more information, see [Managing Users]({{< relref "ManageLocalUsersScale.md" >}}).

### Logging In as Root
If logging in as the root user because you only have the root credentials, log into the UI as the root user with the root password. 
{{< include file="/_includes/CreateAdminDisableRoot.md" >}}

Follow the directions in [Managing Users]({{< relref "ManageLocalUsersScale.md" >}}) to create an admin user with all required settings.

### Creating an Administrator Account at First Log in
If you select SCALE installation option **3. Configure using Web UI**, the sign-in splash screen shows two radio buttons to create the administration account.

{{< trueimage src="/images/SCALE/Login/FirstTimeLoginInstallOpt3SCALE.png" alt="SCALE Login Set Up Authentication Method" id="SCALE Login Set Up Authentication Method" >}}

Select either the **Administrative user** or **Root user (not recommended)** option, then enter the password to use with that user.

If you choose **Root user (not recommended)** as the TrueNAS authentication method, go to the **Credentials > Local Users** screen and [create the admin account]({{< relref "ManageLocalUsersSCALE.md" >}}) immediately after you enter the UI.
Enter the admin user name and password, make sure the password is enabled, and click **Save**.
After setting up the admin user, click on the root user and then click **Edit**. Disable the root user password and then click **Save**.
This brings the system into compliance with FIPS system security-hardening standards.

### Troubleshooting Accessing the Web UI
If you cannot remember the administrator password to log in to the web interface, connect a keyboard and mouse to the TrueNAS system and open the [Console Setup menu]({{< relref "ConsoleSetupMenuScale.md#changing-the-root-password" >}}) to reset the admin account password.

{{< expand "UI is not accessible by IP address" "V" >}}
If the user interface is not accessible by IP address from a browser, check these things:

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

## Introducing the Main SCALE Dashboard

{{< expand "Dashboard Video Tutorial" >}}

{{< embed-video name="scaledashboardtour" >}}

{{< /expand >}}
After logging in for the first time, the main system **Dashboard** screen displays.
The **Dashboard** shows different system information cards (widgets) with basic information about the installed version, systems component usage, network traffic, and configured pools or storage usage. 

{{< enterprise >}}
SCALE Enterprise users with an iXsystems-provided TrueNAS server also see an image of the system in the **System Information** widget. Click on the system image to open the **System Settings > [View Enclosure]({{< relref "EnclosureScreensSCALE.md" >}})** screen.

{{< trueimage src="/images/SCALE/Dashboard/DashboardMainScreenSCALE.png" alt="TrueNAS SCALE Dashboard" id="TrueNAS SCALE Dashboard" >}}

{{< /enterprise >}}

The **Dashboard** for non-Enterprise systems displays the TrueNAS SCALE logo on the **System Information** widget.

You can reorder dashboard widgets by clicking **Reorder** and then dragging them into your preferred order. You can also choose which widgets appear on the dashboard by clicking **Configure**.

{{< trueimage src="/images/SCALE/Dashboard/DashboardConfigureScreenSCALE.png" alt="Dashboard Configure Panel" id="Dashboard Configure Panel" >}}

## Introducing SCALE Navigation Options

The top row (toolbar) has links to outside resources and buttons to control the system.
The left-hand panel lists the main feature and functional areas and lets users navigate to the various TrueNAS configuration screens.

### Top Toolbar

{{< include file="/_includes/TopToolbar.md" >}}

## Managing Sessions
The **Power** icon <span class="material-icons">power_settings_new</span> on the far right side of the top toolbar shows power related settings as described in the [**Top Toolbar Power** options](https://www.truenas.com/docs/scale/gettingstarted/configure/firsttimelogin/#expand-18-First%20Time%20Login) section above.

To monitor and manage all active sessions, go to **System Settings > Advanced** and locate the **Access** widget.
{{< include file="/_includes/SessionsSettingsWidget.md" >}}

## Next Steps
With access the TrueNAS SCALE web interface and all the management options, you can begin [configuring your system]({{< relref "UIConfigurationSCALE.md" >}})!
