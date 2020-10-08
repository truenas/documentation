---
title: "Accessing the Web Interface"
Description: "How to access or configure access to the web interface."
weight: 20
tags: ["networking"]
---

After installing TrueNAS, configuring and using the system is all managed through the web interface.
By default, the system creates a number of ways to access the web interface, but you might need to adjust the default settings to better fit the system in your network environment.

{{% alert title="Preconfigured Systems" color="info" %}}
When you purchase TrueNAS Enterprise hardware from iXsystems, the system is preconfigured with your provided networking details.
The IP address of the TrueNAS web interface is provided on the system sales order or configuration sheet.
Please [contact iX Support](/hub/tasks/troubleshooting/enterprise-support/#contacting-ixsystems-support) if the TrueNAS web interface IP address has not been provided with these documents or cannot be identified from the TrueNAS system console.
{{% /alert %}}

To configure access to the web interface or view the web interface IP address, you will need to connect a monitor and keyboard to your TrueNAS system or connect with IPMI for out-of-band system management.

## Default Access to the Web Interface

When powering on a TrueNAS system, the system attempts to connect to a DHCP server from all live interfaces and provide access to the web interface.
On networks that support Multicast Domain Name Services (mDNS), a hostname and domain can be used to access the TrueNAS web interface.
By default, TrueNAS is configured to use the hostname and domain *truenas.local*
You can change this after logging in to the web interface by going to **Network > Global Configuration** and setting a new *Hostname* and *Domain*.

If an IP address is needed, connect a monitor to the TrueNAS system and view the console setup menu that displays at the end of the boot process.

<img src="/images/console-menu.png">
<br><br>

When able to automatically configure a connection, the system shows the web interface IP address at the bottom of the console setup menu.

## Configuring Web Interface Access

If the TrueNAS system is not connected to a network with a DHCP server, you can use the console network configuration menu to manually *Configure Network Interfaces*.
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

Depending on your network environment, you might also need to define your IPv4 or IPv6 default gateway with the *Configure Default Route* option.
*Configure Static Routes* allows adding destination network and gateway IP addresses, one for each route.
To change the DNS domain and add nameservers, select *Configure DNS*.

These settings can also be adjusted later in the various **Network** options available in the web interface.

## Logging In to the Web Interface

On a computer that can access the same network as the TrueNAS system, enter the hostname and domain or IP address in a web browser to connect to the web interface.

<img src="/images/tn-core-login.png">
<br><br>

Only the `root` username is used to log in to the web interface.
Enter the `root` account password that was created during installation.

<!-- Update with how to find the randomly generated password -->
{{% alert title="Root Password on Preconfigured Systems" color="info" %}}
TrueNAS systems purchased from iXsystems use a default password: *abcd1234*
{{% /alert %}}

If needed, you can reset the root password in the TrueNAS console setup menu or by clicking **Settings > Change Password** in the web interface.

After logging in, you can access the system console setup menu by going to the **Shell** and typing `/etc/netcli`.
To require logging in to the system before showing the system console menu, go to **System > Advanced** and unset *Show Text Console without Password Prompt*.

## Troubleshooting

If the user interface is not accessible by IP address from a browser, check these things:

* Are proxy settings enabled in the browser configuration?
  If so, disable the settings and try connecting again.
* If the page does not load, make sure that a `ping` reaches the TrueNAS system’s IP address.
  If the address is in a private IP address range, it is only accessible from within that private network.

If the web interface is shown but seems unresponsive or incomplete:

* Make sure the browser allows cookies, Javascript, and custom fonts from the TrueNAS® system.
* Try a different browser. Firefox is recommended.

If the UI becomes unresponsive after an upgrade or other system operation, clear the site data and refresh the browser (<kbd>Shift</kbd>+<kbd>F5</kbd>).
