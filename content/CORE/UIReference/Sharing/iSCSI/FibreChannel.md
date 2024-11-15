---
title: "Fibre Channel"
redirect: "https://www.truenas.com/docs/core/13.0/uireference/sharing/iscsi/fibrechannel/"
description: "Provides information about using Fibre Channel with TrueNAS CORE."
weight: 20
aliases: /core/sharing/iscsi/fibrechannel/
tags:
- iscsi
---

{{< enterprise >}}
Fibre Channel is an Enterprise feature in TrueNAS CORE.
Only TrueNAS systems licensed for Fibre Channel have the **Fibre Channel Ports** tab on the **Sharing > Block Shares (iSCSI)** screen.
{{< /enterprise >}}



Fibre Channel is a high-speed data transfer protocol providing in-order, lossless delivery of raw block data.
Fibre Channel is primarily used to connect computer data storage to servers in storage area networks in commercial data centers.
The Fibre Channel protocol is fast, cost effective, and reliable over a wide variety of storage workloads.

{{< expand "Which TrueNAS Products can use Fibre Channel?" "v" >}}

* [TrueNAS R-Series](https://www.truenas.com/r-series/)(4x16 Gbps)
* [TrueNAS X-10](https://www.truenas.com/x-series/)(2x8 Gbps)
* [TrueNAS X-20](https://www.truenas.com/x-series/)(2x8 Gbps)
* [TrueNAS M-40](https://www.truenas.com/m-series/)(4x16 Gbps)
* [TrueNAS M-50](https://www.truenas.com/m-series/)(4x16 Gbps or 2x32 Gbps)
* [TrueNAS M-60](https://www.truenas.com/m-series/)(4x32 Gbps)

{{< /expand >}}

{{< hint type=note >}}
**Initiators** and **Authorized Access** screens only apply to iSCSI block shares and can be ignored when configuring Fibre Channel ports.
{{< /hint >}}

## Fibre Channel Ports
The **Fibre Channel Ports** screen displays a table of ports configured on the TrueNAS.

![FibreChannelPortsScreen](/images/CORE/Sharing/FibreChannelPortsScreen.png "Fibre Channel Ports Screen")

Use the blue **Columns** button to display options to can change the **Fibre Channel** table display. Options are **Unselect All**, **WWPN**, **State** or **Reset to Defaults**.

Click <i class="material-icons" aria-hidden="true" title="Expand">chevron_right</i> to expand the **Fibre Channel Ports** options. 

![FibreChannelPortsScreenExpanded](/images/CORE/Sharing/FibreChannelPortsScreenExpanded.png "Fibre Channel Ports Screen Expanded")

### Fibre Channel Mode Settings
The **Mode** radio buttons display additional information on the screen based on the selection made.

![FibreChannelPortConnectedInitiators12U8](/images/CORE/Sharing/FibreChannelPortConnectedInitiators12U8.png "Fibre Channel Port Connected Initiators")

{{< truetable >}}
| Name | Description |
|---------|-------------|
| **Initiator** | Sets the port as an initiator. Displays Connected Initiators on the right side of the screen for the selected target. |
| **Target** | Sets the port as a target. Dipslays the **Targets** dropdown list field on the right side of the screen. Select the port from the list. Connected Initiators for the selected target display below the dropdown field. |
| **Disabled** | Disables the selected Fibre Channel port. |
{{< /truetable >}}

**SAVE** after making any setting change.

## Targets Settings for Fibre Channels 

![Sharing ISCSI Targets Add Fibre](/images/CORE/Sharing/SharingISCSITargetsAddFibre.png "ISCSI Targets: Fibre")

The **Targets > Add** screen **Target Mode** dropdown list includes options to select **iSCSI**, **Fibre Channel**, or **Both**.

## Associated Target Settings for Fibre Channels 

![FibreChannelAssoicatedTargetsScreen](/images/CORE/Sharing/FibreChannelAssoicatedTargetsScreen.png "Fibre Channel Assoicated Targets Screen")

The **Targets > Add** screen **Target Mode** dropdown list includes options to select **iSCSI**, **Fibre Channel**, or **Both**.
