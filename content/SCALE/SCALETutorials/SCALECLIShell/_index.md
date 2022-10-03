---
title: "Using the SCALE CLI Shell"
description: "This article describes how to use the SCALE CLI Shell for basic networking, updating, oand storage management." 
weight: 130
---

{{< toc >}}

Users can configure SCALE in the CLI Shell without using the Web UI. The SCALE CLI Shell functions like a text-based version of the web UI. Users can enter commands to "navigate" to different menus within SCALE. This article covers basic operations like setting up networking, performing updates, and listing storage pools and datasets.

## Launch the SCALE CLI Shell

To open the SCALE CLI Shell, go to the [Console Setup Menu]({{< relref "ConsoleSetupMenuScale.md" >}}) and enter `6`.

![OpenSCALECLIShell](/images/SCALE/OpenSCALECLIShell.png "TrueNAS SCALE CLI Shell")

### Basic Networking

#### Interfaces

This section covers assigning an IP address to a network interface.

Enter `network interface`.

If you don't already know the interface you want to configure, enter `query` to display a list of all physical network interfaces.

![CLIShellnetworkinterfacequery](/images/SCALE/CLIShellnetworkinterfacequery.png "Network Interface Query")

To edit the interface, enter `update interfacename aliases=["IP Address and Subnet Mask"] ipv4_dhcp=false`

For example: `update ens33 aliases=["192.168.230.129/24"] ipv4_dhcp=false`

The CLI displays the message: "You have pending network interface changes. Please run 'network interface commit' to apply them."

Enter `commit`, to apply the changes, then enter `checkin` to make them permanant. 

![CLIShellupdateinterfacealiases](/images/SCALE/CLIShellupdateinterfacealiases.png "Update Interface Aliases")

Enter `query` to make sure the Truenas applies the changes successfully.

Enter `..` to exit interface and go up one level to the network menu.

#### Global Configuration

This section covers configuring the defualt gateway.

Enter `configuration` (or `network configuration` if you just opened the CLI Shell).

Enter `update ipv4gateway="ipaddress"`

For example: `update ipv4gateway="192.168.230.124"`

If entered properly, your system networking is now configured.

### Performing Updates

#### Manual Updates

To perform a manual update via the CLI Shell, you will first have to upload a manual update file onto the system.

Connect to your system with your choice of FTP program (such as [WinSCP](https://winscp.net/eng/index.php)) and place the manual update file in **/var/tmp/firmware**.

Once it finishes uploading, go to the console setup menu and launch the CLI Shell.

Enter `system update manual --` to open the directory with the manual update file, then enter `midclt call update.manual /var/tmp/firmware/name-of-file -job` to apply the update. 

For example: `midclt call update.manual /var/tmp/firmware/TrueNAS-SCALE-22.02.4.update -job`