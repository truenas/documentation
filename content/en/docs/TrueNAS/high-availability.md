---
title: "Configuring High Availability"
linkTitle: "Configuring High Availability"
description: "How to set up and manage High Availability (HA) in TrueNAS Enterprise"
---

{{% pageinfo version="FreeNAS 11.3" %}}
{{% /pageinfo %}}

{{% alert title="Licensed Feature" color="warning" %}}
This is a TrueNAS Enterprise licensed feature only.
For assistance, please contact iX Support:

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

## Process Summary

* **System > Update**
  * Update license
* **Network > Global Configuration**
  * Set the hostnames for both TrueNAS controllers
  * Set a virtual hostname
* **Network > Interfaces**
  * Interfaces cannot be edited when HA is enabled
  * Define the failover group
  * Set IP addresses for the controllers
  * Set the virtual IP address
    * This IP address is used to log in to the web interface from this point forward
* **System > Failover**
  * Designate the default TrueNAS controller
  * Define how long to wait after a network interruption to trigger a failover

## Configuring High Availability (HA)

TrueNAS Enterprise uses an active/standby configuration of dual TrueNAS controllers for HA.
Dual-ported disk drives are connected to both TrueNAS controllers simultaneously.
One TrueNAS controller is active, the other standby.

<img src="/images/ha-dashboard.png">
<br><br>

The active TrueNAS controller sends periodic announcements to the network.
If a fault occurs and the active TrueNAS controller stops sending the announcements, the standby TrueNAS controller detects this and initiates a failover.
Storage and cache devices are imported on the standby TrueNAS controller, then I/O operations switch over to it.
The standby TrueNAS controller then becomes the active TrueNAS controller.
This failover operation can happen in seconds rather than the minutes of other configurations, significantly reducing the chance of a client timeout.

The Common Address Redundancy Protocol ([CARP](https://www.openbsd.org/faq/pf/carp.html)) is used to provide high availability and failover.
CARP was originally developed by the OpenBSD project and provides an open source, non patent-encumbered alternative to the VRRP and HSRP protocols.
Failover is not allowed if both TrueNAS controllers have the same CARP state.

{{% alert title="Service Interruptions" color="warning" %}}
Seamless failover is only available with iSCSI or NFSv4. Other protocols can failover, but connections are disrupted by the failover event.
{{% /alert %}}

To configure HA, turn on both units in the array and log in to the web interface for one of the units.
If this is the first login, the UI shows a dialog to upload the TrueNAS Enterprise License.
Otherwise, go to **System > Support** and update the license.

<img src="/images/ha-system-support-license.png">
<br><br>

Paste the HA license received from iXsystems and save it.
The license contains the serial numbers for both units in the chassis.
Activating an HA license adds the **System > Failover** screen and modifies fields throughout the UI so that hostnames and IP addresses can be configured for both controllers.

After HA is configured, an icon shows when HA is active or unavailable.
When HA is disabled by the system administrator, the status icon changes to show HA is unavailable.
If the standby TrueNAS controller is not available because it is powered off, still starting up, disconnected from the network, or if failover has not been configured, the status icon changes to show HA is unavailable.
HA also becomes unavailable if a different number of disks are connected to each controller.

If both TrueNAS controllers reboot simultaneously, the passphrase for an encrypted pool must be entered at the web interface login screen.



### Networking

To make sure system networking is configured for HA, first go to **Network > Global Configuration**.

<img src="/images/ha-network-globalconfig.png">
<br><br>

You can set the host names for both controllers and a virtual host name that reaches whichever controller is currently active.

Next, go to **Network > Interfaces** and edit the primary interface.

{{% alert title="Restricted by HA" color="warning" %}}
Editing interfaces is disabled when HA is active.
To disable HA, go to **System > Failover** and disable failover.
Edit the interface, then reactivate failover immediately.
TrueNAS automatically synchronizes the configuration changes to the standby controller
{{% /alert %}}

<img src="/images/ha-network-interfaces-edit.png">
<br><br>

You can designate the interface as critical for failover and combine multiple interfaces into a failover group.
There are also options to configure IP addresses for each controller and a virtual IP address with virtual host ID to use for administrative access.

After the network configuration is complete, log out and log back in, this time using the virtual IP address.
Pools and shares can now be configured as usual and configuration automatically synchronizes between the active and standby TrueNAS controllers.

All subsequent logins should use the virtual IP address.
Connecting directly to the standby TrueNAS controller with a browser does not allow web interface logins.

When troubleshooting HA networking, the <code>ifconfig</code> command adds two additional fields to the output to help with failover troubleshooting: **CriticalGroup*n*** and **Interlink**.

### Failover Options

To make general changes to the Failover settings, go to **System > Failover**

<img src="/images/ha-system-failover.png">
<br><br>

You can manually disable failover on this screen.

Make sure to set one of the controllers as the default, so that the default controller becomes active when both boot simultaneously.
Note that booting an HA pair with failover disabled causes both TrueNAS controllers to come up in standby mode.
In this situation, the web interface shows an option to force a TrueNAS controller to become active.

You can have the system wait to failover during a network timeout by overwriting *0* with a new number of seconds.

TrueNAS is designed to automatically synchronize the system configuration, but manual sync options are available during high-risk troubleshooting situations.

{{% alert title="Danger" color="danger" %}}
Do not manually sync the TrueNAS configuration unless directed by an iXsystems Support Engineer!
{{% /alert %}}