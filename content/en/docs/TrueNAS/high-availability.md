---
title: "Configuring High Availability"
linkTitle: "Configuring High Availability"
description: "How to set up and manage High Availability (HA) in TrueNAS Enterprise"
---

{{% alert title="Notice" color="info" %}}
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

# Process Summary

* Redundant controller with dual-ported disk drives designed to maximize storage availability time.
  * Adds options or new screens throughout the UI
    * **System > Failover**
      * Contains options for controlling failovers
        * Disable failover checkbox
        * Designating the primary TrueNAS controller
        * Determining how long to wait after a network interruption to trigger a failover
        * Buttons to sync to or from the other TrueNAS controller (Warning: Use only when directed by iXsystems Support Engineers)
          * Synchronization is typically automatic.
          * Buttons are only used for troubleshooting HA.
      * Both controllers booting as “standby”  shows an option to force the current controller to become “active”.
      * **ifconfig** shows additional fields for failover troubleshooting.
      * Rebooting both controllers simultaneously requires entering the passphrase for any encrypted pools at the UI login screen.
    * **Network > Global Configuration**
      * Allows setting the hostname of either TrueNAS controller.
      * Allows setting a virtual hostname.
        * This is also used as the Kerberos principal name.
    * **Network > Interfaces**
      * Interfaces cannot be edited when HA is enabled.
      * Interface form is used to set the Failover Group, VHID, and set the Failover IP address
    * HA Status icon (upper-right corner)

# Configuring High Availability (HA)

TrueNAS Enterprise uses an active/standby configuration of dual TrueNAS controllers for HA.
Dual-ported disk drives are connected to both TrueNAS controllers simultaneously.
One TrueNAS controller is active, the other standby.

The active TrueNAS controller sends periodic announcements to the network.
If a fault occurs and the active TrueNAS controller stops sending the announcements, the standby TrueNAS controller detects this and initiates a failover.
Storage and cache devices are imported on the standby TrueNAS controller, then I/O operations switch over to it.
The standby TrueNAS controller then becomes the active TrueNAS controller.
This failover operation can happen in seconds rather than the minutes of other configurations, significantly reducing the chance of a client timeout.