---
title: "Using the TrueNAS CLI Shell"
description: "This article describes how to use the SCALE CLI Shell for basic networking, updating, and storage management." 
weight: 130
---

{{< toc >}}

Users can configure SCALE in the TrueNAS CLI Shell without using the Web UI. The TrueNAS CLI Shell functions like a text-based version of the web UI. Users can enter commands to "navigate" to different menus within SCALE. This article covers basic operations like setting up networking, performing updates, and listing storage pools and datasets.

## Launch the TrueNAS CLI Shell

To open the TrueNAS CLI Shell, go to the [Console Setup Menu]({{< relref "ConsoleSetupMenuScale.md" >}}) and enter `6`.

![OpenSCALECLIShell](/images/SCALE/OpenSCALECLIShell.png "TrueNAS SCALE CLI Shell")

To close the TrueNAS CLI Shell, enter `quit`.

### Basic Networking

#### Interfaces

This section covers assigning an IP address to a network interface.

Enter `network interface`.

If you don't already know the interface you want to configure, enter `query` to display a list of all physical network interfaces.

![TrueNASCLInetworkinterfacequery](/images/SCALE/CLIShellnetworkinterfacequery.png "Network Interface Query")

To edit the interface, enter `update interfacename aliases=["IP Address/Subnet Mask"] ipv4_dhcp=false`

For example: `update ens33 aliases=["192.168.230.129/24"] ipv4_dhcp=false`

The CLI displays the message: "You have pending network interface changes. Please run 'network interface commit' to apply them."

Enter `commit`, to apply the changes, then enter `checkin` to make them permanant. 

![TrueNASCLIupdateinterfacealiases](/images/SCALE/CLIShellupdateinterfacealiases.png "Update Interface Aliases")

Enter `query` to make sure the Truenas applies the changes successfully.

Enter `..` to exit interface and go up one level to the network menu.

#### Global Configuration

This section covers configuring the defualt gateway.

Enter `configuration` (or `network configuration` if you just opened the CLI Shell).

Enter `update ipv4gateway="ipaddress"`

If entered properly, your system networking is now configured.

### Performing Manual Updates

To perform a manual update via the TrueNAS CLI Shell, you will first have to upload a manual update file onto the system.

Connect to your system with your choice of FTP program (such as [WinSCP](https://winscp.net/eng/index.php)) and place the manual update file in **/var/tmp/firmware**.

Once it finishes uploading, go to the console setup menu and launch the TrueNAS CLI Shell.

Enter `system update manual path="/var/tmp/firmware/updatefilename"

![TrueNASCLIsystemupdatemanualpath](/images/SCALE/TrueNASCLIsystemupdatemanualpath.png "Manual Update")

### Listing Storage Pools and Datasets

To list all configured storage pools, enter `storage pool query`.

![TrueNASCLIstoragepoolquery](/images/SCALE/TrueNASCLIstoragepoolquery.png "Pool Query")

Enter `q` to exit the query.

To list all configured datasets, enter `storage dataset query`.

![TrueNASCLIstoragedatasetquery](/images/SCALE/TrueNASCLIstoragedatasetquery.png "Dataset Query")

Enter `q` to exit the query.