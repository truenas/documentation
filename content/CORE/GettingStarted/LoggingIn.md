---
title: "Logging In"
weight: 50
---

Now that TrueNAS is installed, it's time to log in to the web interface and begin managing data!

{{< expand "Can I configure TrueNAS using a CLI?" "v" >}}
After installing TrueNAS, configuring and using the system is all managed through the web interface.
It is important to only use the web interface to make configuration changes to the system.
By default, using the command-line interface (CLI) to modify the system **does not modify the settings database**.
Any changes made in the command line are lost and reverted to the original database settings whenever the system restarts.
TrueNAS automatically creates a number of ways to access the web interface, but you might need to adjust the default settings to better fit the system in your network environment.
{{< /expand >}}

## Web Interface Access

By default, TrueNAS provides a default address for logging in to the web interface.
To view the web interface IP address or reconfigure web interface access, you will need to connect a monitor and keyboard to your TrueNAS system or connect with IPMI for out-of-band system management.

{{< tabs "Web Interface Access Options" >}}
{{< tab "CORE Defaults" >}}
When powering on a TrueNAS system, the system attempts to connect to a DHCP server from all live interfaces and provide access to the web interface.
On networks that support Multicast Domain Name Services (mDNS), a hostname and domain can be used to access the TrueNAS web interface.
By default, TrueNAS is configured to use the hostname and domain *truenas.local*
You can change this after logging in to the web interface by going to **Network > Global Configuration** and setting a new *Hostname* and *Domain*.

If an IP address is needed, connect a monitor to the TrueNAS system and view the console setup menu that displays at the end of the boot process.

![ConsoleSetupMenu](/images/CORE/ConsoleSetupMenu.png "TrueNAS Console Menu")

When able to automatically configure a connection, the system shows the web interface IP address at the bottom of the console setup menu.
If needed, you can reset the root password in the TrueNAS console setup menu or by clicking **Settings > Change Password** in the web interface.
To require logging in to the system before showing the system console menu, go to **System > Advanced** and unset *Show Text Console without Password Prompt*.
{{< /tab >}}
{{< tab "Enterprise Defaults" >}}
[TrueNAS Enterprise hardware]({{< relref "/Hardware/_index.md" >}}) from iXsystems is preconfigured with your provided networking details.
The IP address of the TrueNAS web interface is provided on the system sales order or configuration sheet.
Please contact iX Support if the TrueNAS web interface IP address has not been provided with these documents or cannot be identified from the TrueNAS system console.

{{< include file="static/includes/General/iXsystemsSupportContact.html.part" html="true" >}}
{{< /tab >}}
{{< tab "Configuring Web Interface Access" >}}
If the TrueNAS system is not connected to a network with a DHCP server, you can use the console network configuration menu to manually *Configure Network Interfaces*.

![ConsoleMenu](/images/CORE/ConsoleSetupMenu.png "TrueNAS Console Menu")

This example shows configuring a single interface, *em0*:

```
Enter an option from 1-12: 1
1) em0
Select an interface (q to quit): 1
Remove the current settings of this interface? (This causes a momentary disconnec
tion of the network.) (y/n) n
Configure interface for DHCP? (y/n) n
Configure IPv4? (y/n) y
Interface name:     (press enter, the name can be blank)
Several input formats are supported
Example 1 CIDR Notation:
    192.168.1.1/24
Example 2 IP and Netmask separate:
    IP: 192.168.1.1
    Netmask: 255.255.255.0, or /24 or 24
IPv4 Address: 192.168.1.108/24
Saving interface configuration: Ok
Configure IPv6? (y/n) n
Restarting network: ok

...

The web user interface is at
http://192.168.1.108
```

Depending on the network environment, review the *Configure Default Route* option to define your IPv4 or IPv6 default gateway.
*Configure Static Routes* allows adding destination network and gateway IP addresses, one for each route.
To change the DNS domain and add nameservers, select *Configure DNS*.

These settings can be adjusted later in the various **Network** options available in the web interface.
{{< /tab >}}
{{< /tabs >}}

## Logging In

On a computer that can access the same network as the TrueNAS system, enter the hostname and domain or IP address in a web browser to connect to the web interface.

![LoginCORE](/images/CORE/12.0/LoginCORE.png "TrueNAS CORE Login Screen")

By  default the `root` username is root. Only the `root` username is used to log in to the web interface.
Enter the `root` account password that was created during installation.

{{< expand "Troubleshooting" "v" >}}
If the user interface is not accessible by IP address from a browser, check these things:

* Are proxy settings enabled in the browser configuration?
  If so, disable the settings and try connecting again.
* If the page does not load, make sure that a `ping` reaches the TrueNAS system IP address.
  If the address is in a private IP address range, it is only accessible from within that private network.

If the web interface is shown but seems unresponsive or incomplete:

* Make sure the browser allows cookies, Javascript, and custom fonts from the TrueNAS system.
* Try a different browser. Firefox is recommended.

If the UI becomes unresponsive after an upgrade or other system operation, clear the site data and refresh the browser (<kbd>Shift</kbd>+<kbd>F5</kbd>).
{{< /expand >}}

After logging in, the TrueNAS web interface present options across the top and left side of the screen.

### Top Menu

The horizontal menu at the top of the web interface contains status indicators, system alerts, UI theme options, and system power options.

{{< expand "Top Menu Details" >}}

{{< include file="/_includes/CORETopMenu.md" type="page" >}}

{{< /expand >}}

### Side Menu

The column on the left side of the screen contains some information about the system and links to the various TrueNAS configuration screens.
The box at the top of the columns shows the current logged in user account and the system host name.

Configuration screens are organized by feature.
For example, to find options related to storing data, click the **Storage** option and to make data stored in TrueNAS available to client systems, go to the **Sharing** section.

## Dashboard

The system **Dashboard** is the default screen when logging in to TrueNAS.
Basic information about the installed version, systems component usage and network traffic are all presented on this screen.
For users with compatible TrueNAS Hardware, clicking the system image goes to the **System > View Enclosure** page.

![DashboardCORE](/images/CORE/12.0/DashboardCORE.png "TrueNAS CORE Dashboard")

The **Dashboard** provides access to all TrueNAS management options.

Now that you can access the TrueNAS web interface and see all the management options, it's time to begin [storing data]({{< relref "StoringData.md" >}})!
