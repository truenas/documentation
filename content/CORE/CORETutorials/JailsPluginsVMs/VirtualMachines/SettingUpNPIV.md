---
title: "Setting Up NPIV"
description: "This article describes how to configure NPIV on TrueNAS CORE."
weight: 20
tags:
- corenpiv
- coreiscsi
---

## NPIV (N_Port ID Virtualization)

NPIV allows the administrator to use switch zoning to configure each virtual port as if it was a physical port in order to provide access control.
This is important in an environment with a mix of Windows systems and virtual machines in order to prevent automatic or accidental reformatting of targets containing unrecognized file systems.
It can also be used to segregate data; for example, to prevent the engineering department from accessing data from the human resources department.
Refer to the switch documentation for details on how to configure zoning of virtual ports.

## Creating NP Virtual Ports

To create virtual ports on the TrueNAS system, go to **System > Tunables** and click **ADD**.
Enter these options:

* **Variable** : `input hint.isp.X.vports`, replacing *X* with the number of the physical interface.
* **Value** : input the number of virtual ports to create. There cannot be more than 125 SCSI target ports, including all physical Fibre Channel ports, all virtual ports, and all configured combinations of iSCSI portals and targets.
* **Type** : make sure **loader** is selected.

![SystemTunablesFibre](/images/CORE/11.3/SystemTunablesFibre.png "Virtual Ports for Fibre Channel")

In the example shown:

* Two physical interfaces are each assigned *4* virtual ports.

* Two tunables are required, one for each physical interface.

After the tunables are created, the configured number of virtual ports appears in **Sharing > Block Shares (iSCSI) > Fibre Channel Ports** screen so they can be associated with targets.
They are also advertised to the switch so zoning can be configured on the switch.

After associating a virtual port with a target, add it to the **Target** tab of [Reporting]({{< relref "/CORE/UIReference/ReportingGraphs.md" >}}) so you can view its bandwidth usage.

{{< taglist tag="coreiscsi" limit="10" >}}
