---
title: "First Time Login"
description: "Guides with configuring web interface access and logging in to the TrueNAS SCALE web interface for the first time."
weight: 20
aliases: 
 - /scale/gettingstarted/firsttimelogin/
tags:
- dashboard
---

Now that you have installed TrueNAS SCALE or migrated from TrueNAS CORE to SCALE, you can log into the SCALE web user interface (UI) to complete your initial system configuration and then begin managing data!
{{< hint type=important >}}
Important! Use only the web user interface (UI) or the [**TrueNAS CLI**]({{< relref "/SCALE/SCALECLIReference/_index.md" >}}) to make configuration changes to the system.
{{< /hint >}}

{{< expand "Can I configure TrueNAS SCALE using a CLI?" "v" >}}
After installing TrueNAS, you can configure and use the system through the UI.

By default, using the **LINUX Shell** command-line interface (CLI) to modify the system *does not modify the settings database. If the system restarts it reverts to the original database settings and wipes any user-made command line changes.

The SCALE [**TrueNAS CLI**]({{< relref "/SCALE/SCALECLIReference/_index.md" >}}) allows administrators experienced with CLI configuration to configure SCALE settings just as in the UI. The **TrueNAS CLI** functions like a text-based version of the web UI with many functional areas grouped into parent and child namespaces that mirror the counterparts in the SCALE UI.
{{< /expand >}}

## Web Interface Access

TrueNAS automatically creates several ways to access the UI, but you might need to adjust the default settings for your network environment.

By default, a fresh install of TrueNAS SCALE provides a default address for logging in to the web interface.
To view the web interface IP address or reconfigure web interface access, either connect a monitor and keyboard to your TrueNAS system or connect with IPMI for out-of-band system management.

When powering on a TrueNAS system, the system attempts to connect to a DHCP server from all live interfaces to access the web UI.
On networks that support Multicast Domain Name Services (mDNS), the system can use a host name and domain to access the TrueNAS web interface.
By default, TrueNAS uses the host name and domain **truenas.local**.
To change the host name and domain in the web interface, go to **Network** and click **Settings** on the **Global Configuration** card.

To access the web interface using an IP address, either use the IP address displayed at the top of the Console Setup Menu after installing SCALE or use the IP address you assigned in the [Console Setup Menu]({{< relref "/SCALE/GettingStarted/install/ConsoleSetupMenuSCALE.md" >}}).

{{< enterprise >}}
SCALE Enterprise (HA) systems can use the DHCP-assigned IP address for the primary controller to access the SCALE UI or with a static IP address that is configured using the [Console Setup Menu]({{< relref "ConsoleSetupMenuSCALE.md" >}}).
{{< /enterprise >}}

## Logging Into the SCALE UI

Using a computer with access to the same network as the TrueNAS system, enter the host name and domain or IP address in a web browser to connect to the SCALE web interface.

{{< hint type=note >}}
The browser you use can impact the quality of your user experience. We generally recommend using Firefox, Edge, or Chrome.
{{< /hint >}}

{{< include file="/_includes/RootLoginWarnSCALE.md" >}}

With the implementation of rootless login, root is no longer the default administrator username, rather you use the new admin user created during the installation process.
We recommend creating the admin user during the installation process and using it to log into SCALE.

Based on the authentication method selected in step 4 of the SCALE [TrueNAS installer Console Setup]({{< relref "InstallingScale.md#using-the-truenas-installer-console-setup" >}}) process, you could see one of three sign-in splash screen options for the web UI.

* Selecting **1. Administrative user (admin)** opens the SCALE sign-in screen to log in with the admin username and password created during installation.
* Selecting **2. Root user (not recommended)** opens the SCALE sign-in screen to log in with the root username and the root password created during installation.
* Selecting **3. Configure using Web UI** opens a SCALE sign-in screen where you select the option for either the admin or root user and create the password.

If you select option 1, the root user still exists but with the password disabled by default, which means only the admin user can log into the system.
You can activate the password for the root user for some limited uses, but you should return to a security-hardened operation by disabling the root password immediately after you finish with the limited use.

### Logging In as Admin

If you set up the admin user during the installation using the option **1. Administrative user (admin)**, enter the username **admin** and password you set up.

{{< trueimage src="/images/SCALE/Login/LoginScreenSCALE.png" alt="TrueNAS SCALE Login Screen" id="TrueNAS SCALE Login Screen" >}}

To modify user credentials, go to **Credentials > Local Users**, click anywhere on the user row, then click **Edit**. For more information see [Managing Users]({{< relref "ManageLocalUsersScale.md" >}}).

### Logging In as Root

{{< include file="/_includes/RootLoginWarnSCALE.md" >}}
If you created the root user rather than setting up an admin user during the installation process, log into the UI as the root user with the root password.

To create an admin user go to **Credentials > Local Users**, and click **Add** to open the **Add User** screen.
Follow the directions in [Managing Users]({{< relref "ManageLocalUsersScale.md" >}}) to create an admin user with all required settings.

### Creating an Administrator Account at First Log in

If you select option **3. Configure using Web UI** during installation SCALE asks you to create the root or administration user when you first log into the web UI.
This option presents a sign-in splash screen with two radio buttons.

{{< trueimage src="/images/SCALE/Login/FirstTimeLoginInstallOpt3SCALE.png" alt="TrueNAS SCALE Login Screen Set Admin Password" id="Set Admin Password" >}}

Select either the **Administrative user** or **Root user (not recommended)** option, then enter the password to use with that user.

If you choose **Root user (not recommended)** as the TrueNAS authentication method, go to the **Credentials > Local Users** screen and [create the admin account]({{< relref "ManageLocalUsersSCALE.md" >}}) immediately after you enter the UI.
Create the [admin user account settings]({{< relref "ManageLocalUsersSCALE.md" >}}), enable the password, and click **Save**.
After setting up the admin user, edit the root user to disable the password and resume rootless login security hardening.

### Troubleshooting Accessing the Web UI

If you cannot remember the administrator password to log in to the web interface, connect a keyboard and mouse to the TrueNAS system and open the [Console Setup Menu]({{< relref "ConsoleSetupMenuScale.md#changing-the-root-password" >}}) to reset the admin account password.

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
After logging in for the first time, you see the main system **Dashboard** screen.
The **Dashboard** displays basic information about the installed version, systems component usage, and network traffic.

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

The Power icon <span class="material-icons">power_settings_new</span> on the right side of the top toolbar gives access to three power related settings.
**Log Out** ends the session and returns to the UI sign-in screen. This does not affect system power.
**Restart** power-cycles the system.
**Shut Down** turns the system off.

To monitor and manage all active sessions, go to **System Settings > Advanced**.
{{< include file="/_includes/SessionsSettingsWidget.md" >}}

## Next Steps

Now that you can access the TrueNAS SCALE web interface and see all the management options, you can begin [configuring your system]({{< relref "UIConfigurationSCALE.md" >}})!
