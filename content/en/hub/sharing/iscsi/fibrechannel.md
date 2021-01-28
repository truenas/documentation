---
title: "Configuring Fibre Channel"
description: "A how-to guide on creating a Fibre Channel iSCSI share."
tags: ["networking", "Fibre Channel", "iSCSI"]
---

The Fibre Channel protocol has been proven over time to be fast, cost effective, and reliable over a wide variety of storage workloads.

## What are the Hardware Requirements for using Fibre Channel?

The following TrueNAS Open Storage Products have a Fibre Channel Option:

* <a href="https://www.truenas.com/r-series/">**TrueNAS R-Series**</a> (4x16 Gbps).
* <a href="https://www.truenas.com/x-series/">**TrueNAS X-10**</a> (2x8 Gbps).
* <a href="https://www.truenas.com/x-series/">**TrueNAS X-20**</a> (2x8 Gbps).
* <a href="https://www.truenas.com/m-series/">**TrueNAS M-40**</a> (4x16 Gbps).
* <a href="https://www.truenas.com/m-series/">**TrueNAS M-50**</a> (4x16 Gbps or 2x32 Gbps).
* <a href="https://www.truenas.com/m-series/">**TrueNAS M-60**</a> (4x32 Gbps).

## What is Fibre Channel?
Fibre Channel is a high-speed data transfer protocol providing in-order, lossless delivery of raw block data. Fibre Channel is primarily used to connect computer data storage to servers in storage area networks in commercial data centers.

## Using Fibre Channel.

TrueNAS systems licensed for Fibre Channel will have a tab *Fibre Channel Ports* added to **Sharing > Block Shares (iSCSI)**.

<img src="/images/FibreTab.png"><br><br>

### Configuring a Fibre Channel ISCSI share example.

> **Note:** **Portals**, **Initiators**, and **Authorized Access** screens only apply to iSCSI and can be ignored when configuring Fibre Channel.

Navigate to **Storage > Pools**.  Select an existing pool such as tank, click the <i class="fa fa-bars" aria-hidden="true"></i>&nbsp; hamburger menu, and click **Add zvol** to create a <a href="/hub/initial-setup/storage/zvols/">new zvol</a>. 

<img src="/images/FibrezvolPool.png"><br><br>

Navigate to sharing, Block Shares (iSCSI), click portals.  If portal with listen interface `0.0.0.0:3260` does not yet exist click **Add** and add one.

<img src="/images/FibreAddPortals.png"><br><br>

Navigate to sharing, Block Shares (iSCSI), click Targets, click **Add**. Enter  or select values specified for *Target Name*, *Target Alias*, *Target Mode*, and *Portal Group*. Click the **Submit** button.

<img src="/images/FibreAddTarget"><br><br>

> **Note:** An extra *Target Mode* option appears after going to Targets and clicking **ADD**. This new option is to select whether the target to create is iSCSI, Fibre Channel, or both.

> **Note:** The *Target* tab of <a href="/hub/tasks/administrative/system-reporting/#graphs">Reporting</a> provides Fibre Channel port bandwidth graphs.

Navigate to sharing, Block Shares (iSCSI), click **Extents**, click **Add**, enter values for *Extent Name* and *Device*. Click the **Submit** button.

<img src="/images/FibreAddExtents.png"><br><br>

Navigate to **Sharing > Block Shares (iSCSI)**, click Associated Targets, click Add, select values for *Target** and **Extent*. Click the **Submit** button.

<img src="/images/FibreAddAssoc.png"><br><br>

Navigate to sharing, Block Shares (iSCSI), click **Fibre Channel Ports**, expand using > next to isp0, select options as presented under test data, and click save.

> **Note:** The iSCSI share will not work if the service is not turned on. To turn on the iSCSI service, go to **Services** and click the slider for **iSCSI**. If you wish to turn the service on automatically when the TrueNAS system is rebooted, check the **Start Automatically** box.

### Fibre Channel can be configured for NPIV (N_Port ID Virtualization). 

NPIV allows the administrator to use switch zoning to configure each virtual port as if it was a physical port in order to provide access control. This is important in an environment with a mix of Windows systems and virtual machines in order to prevent automatic or accidental reformatting of targets containing unrecognized filesystems. It can also be used to segregate data; for example, to prevent the engineering department from accessing data from the human resources department. Refer to the switch documentation for details on how to configure zoning of virtual ports.

To create the virtual ports on the TrueNAS® system, go to **System > Tunables**, click **ADD** and enter these options:

* **Variable**: input hint.isp.X.vports, replacing X with the number of the physical interface.
* **Value**: input the number of virtual ports to create. Note that there cannot be more then 125 SCSI target ports and that number includes all physical Fibre Channel ports, all virtual ports, and all configured combinations of iSCSI portals and targets.
* **Type**: make sure loader is selected.

<img src="/images/FibreTunables.png"><br><br>

In the example shown, two physical interfaces were each assigned 4 virtual ports. Note that two tunables were required, one for each physical interface. After the tunables are created, the configured number of virtual ports appears in the *Fibre Channel Ports* screen so they can be associated with targets. They will also be advertised to the switch so zoning can be configured on the switch. 

After a virtual port has been associated with a target, it is added to the *Target* tab of <a href="/hub/tasks/administrative/system-reporting/#graphs">Reporting</a> where its bandwidth usage can be viewed.
