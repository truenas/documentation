---
title: "Using Plugins"
description: "How to install or configure application plugins."
---

{{% alert title="Notice" color="info" %}}
The Plugins feature is generally available in TrueNAS CORE and is supported by the open source TrueNAS community.
TrueNAS Enterprise does not show or support this feature unless it has been added to a TrueNAS Enterprise license.
For more details or to request plugin support in TrueNAS Enterprise, please contact iX Support:

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{font-family:Arial, sans-serif;font-size:14px;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg th{font-family:Arial, sans-serif;font-size:14px;font-weight:normal;padding:10px 5px;border-style:solid;border-width:1px;overflow:hidden;word-break:normal;border-color:black;}
.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}
</style>
<table class="tg">
  <tr>
    <th class="tg-0pky"><b>Contact Method</b></th>
    <th class="tg-0pky"><b>Contact Options</b></th>
  </tr>
  <tr>
    <td class="tg-0pky">Web</td>
    <td class="tg-0pky"><a href="https://support.ixsystems.com" target="_blank">https://support.ixsystems.com</a></td>
  </tr>
  <tr>
    <td class="tg-0pky">Email</td>
    <td class="tg-0pky"><a href="mailto://support.ixsystems.com" target="_blank">support@ixsystems.com</a></td>
  </tr>
  <tr>
    <td class="tg-0pky">Telephone</td>
    <td class="tg-0pky">Monday - Friday, 6:00AM to 6:00PM Pacific Standard Time:<br><br>US-only toll-free: 855-473-7449 option 2<br>Local and international: 408-943-4100 option 2<br></td>
  </tr>
  <tr>
    <td class="tg-0pky">Telephone</td>
    <td class="tg-0pky">After Hours (24x7 Gold Level Support only):<br><br>US-only toll-free: 855-499-5131<br>International: 408-878-3140 (international calling<br>rates will apply)<br></td>
  </tr>
</table>
{{% /alert %}}

Plugins allow you to extend the built-in NAS services by installing additional software.
A plugin is a pre-packaged application that is installed into a [FreeBSD Jail](https://en.wikipedia.org/wiki/FreeBSD_jail).
The plugin jail is limited to installing and using only the plugin software.

To begin using plugins, you need to have a data pool available for plugin storage and the system needs to be connected to the Internet.
It is also recommended to go to **Network > Interfaces** and set *Disable Hardware Offloading* for the interface that you want to use for plugins.

## Installing a Plugin

Open the **Plugins** menu to find the plugins that are available to download.
If no options appear, verify the system can `ping` an Internet address and confirm the default gateway address and DNS server address are correct in **Network > Global Configuration**.

<img src="/images/plugins-available.png">
<br><br>

Plugins are organized by those supported by [iXsystems](https://www.ixsystems.com/) and open source plugins created and maintained by the TrueNAS community.
By default, the iXsystems-supported plugins are shown.
To view the community-supported plugins, open *Browse a Collection* and select *Community*.

To install a plugin, click the plugin icon then *Install*.

<img src="/images/plugins-install.png">
<br><br>

Enter a name for the plugin jail and adjust the networking settings as needed.
Most plugins default to using Network Address Translation (NAT) for their Internet connection.
This is recommended as it does not require manual configuration of multiple available IP addresses and prevents addressing conflicts on the network.

## Plugin Configuration

## Asigra Plugin

## Process Summary

* Installing a Plugin
  * Go to Network > Interfaces and set Disable Hardware Offloading for the interface that will handle Plugins, Jails, or VMs.
  * Go to Plugins.
    * Click REFRESH INDEX to see plugins.
    * Clicking a plugin icon shows more details about that plugin.
  * Click INSTALL
    * Configuration Screen:
      * Enter a name for the Jail
      * Choose Jail networking: DHCP, NAT, or statically defined IP addresses
      * NAT is recommended as the least fragile option.
      * A plugin can default to DHCP when the management utility conflicts with NAT. These plugins should only use DHCP or static IP addresses.
      * Advanced Plugin Installation shows all configuration options for the underlying jail. Not recommended to use unless very specific jail tuning is required.
  * Clicking SAVE downloads the plugin
    * Progress is shown
    * Install notes are shown when install is complete
* Managing an installed plugin
  * Click the > for an entry in Plugins to see all plugin (jail) options
    * Clicking Update takes a snapshot of the jail and updates the jail from the plugins repository.
    * Clicking Manage opens a browser tab to log in or otherwise configure the plugin application.
    * Clicking Post Install Notes shows any options configured during the plugin installation.
* Uninstalling Plugins
  * WARNING: this destroys all datasets or snapshots that are associated with the plugin. Back up important data first.
  * Click > to expand the plugin, then UNINSTALL.
    * Type the plugin name into the field, set Confirm, and click DELETE to remove the plugin, its dataset, and any plugin snapshots.
* Asigra Plugin
  * Requires user registration with Asigra.
  * TrueNAS must have a public static IP address for Asigra plugin to function.
  * Refer to Asigra documentation for usage instructions:
    * DS-Operator Management Guide: Using the DS-Operator interface to manage the plugin DS-System service. Click Management in the plugin options to open the DS-Operator interface.
    * DS-Client Installation Guide: How to install the DS-Client system. DS-Client aggregates backup content from endpoints and transmits it to the DS-System service.
    * DS-Client Management Guide: Managing the DS-Client system after it has been successfully installed at one or more locations.

## Using Plugins

detailed article goes here
