---
title: "Managing TrueNAS Hosts in vCenter"
description: "How to add and configure TrueNAS hosts in vCenter."
tags: ["vCenter Plugin", "TrueNAS Enterprise"]
weight: 30
---

[vCenter Server](https://www.vmware.com/products/vcenter-server.html) provides a web interface to manage physical and virtual machines.
vCenter uses plugins to integrate servers management into the vCenter application.
The iXsystems TrueNAS vCenter Plugin activates management options for TrueNAS hardware attached to vCenter Server.
This enables TrueNAS systems to be managed from a single interface.
The images in this guide show vCenter 6.7, but versions 7.0 and 6.5 offer a similar experience.

## Connecting TrueNAS Systems to vCenter

In a browser, go to your vCenter Server web interface, log in, and click *Menu > Global Inventory Lists > Manage TrueNAS > + Add host* to add TrueNAS hosts to vCenter.

<img src="/images/vcp-10.PNG">
<br><br>

Fill in the required information.
*HTTPS* is currently unavailable, but is planned for a future release.
Click **Add Host** and the TrueNAS hostname or IP address appears in the list of connected systems.

<img src="/images/vcp-11.PNG">
<br><br>

Right-click a list entry to see options to edit the host user credentials or remove that host from vCenter.
Click a hostname to see the system management options.
Clicking a system entry opens the management interface.
The interface suspends after several minutes of inactivity and displays a warning that the interface is suspended and must be refreshed.

The system management screen shows a summary and options to modify the system.

## System Summary

Click **Summary** to view basic information about this system.
The IP address, installed version of TrueNAS, storage availability, and system service status are shown.

<img src="/images/vcp-12.PNG">
<br><br>

## Configure

To modify the TrueNAS system, click **Configure**.
Each submenu has a row of buttons to add or make changes to any items in the list.
vCenter works in the background when resolving change requests.
**Refresh** updates the list to see any items that might have finished being created or modified.
Tasks in progress display in the collapsible **Recent Tasks** area across the bottom of the screen.
Naming objects in the plugin follow a standard convention.
Names can contain spaces, alphanumeric, `-`, and `.` characters.