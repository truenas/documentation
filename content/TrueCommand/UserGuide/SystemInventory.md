---
title: System Inventory
description: "Overview and usage notes of the TrueCommand System Inventory screen."
weight: 20
---

To access the **System Inventory** page, click the <i class="material-icons" aria-hidden="true" title="Settings">settings</i> icon and select **System Inventory**.

![SystemInventoryMenu](/images/TrueCommand/SystemInventory/SystemInventoryMenu.png "Access the System Inventory Page")

{{< hint type=note >}}
To download a comma-delimited <file>CSV</file> file for the current inventory page, click **CSV** in the upper-right area of the screen.
{{< /hint >}}

There are three inventory information tabs:

{{< tabs "System Inventory" >}}
{{< tab "System" >}}
The **System** tab provides information on the **Manufacturer**, the controllers' **Serial** numbers, the system **Support Tier**, the support Contract expiration date, the active controller **Hostname**, the **CPU**, the number of **CPU Cores**, the amount of **Physical Memory**, what **OS** the system is running, and the **Uptime**.

![SystemInventorySystem](/images/TrueCommand/SystemInventory/SystemInventorySystem.png "System Information")
{{< /tab >}}

{{< tab "Network" >}}
The **Network** tab provides information about the **Interface** names, **Type**, **Link State** and **MAC** address.

![SystemInventoryNetwork](/images/TrueCommand/SystemInventory/SystemInventoryNetwork.png "System Network Information")
{{< /tab >}}

{{< tab "Storage" >}}
The **Storage** tab provides information about the **Drives**, such as **Name**, **Type**, **Size**, **Model**, **Serial** number, and **Enclosure** location.

![SystemInventoryStorage](/images/TrueCommand/SystemInventory/SystemInventoryStorage.png "System Storage Information")
{{< /tab >}}
{{< /tabs >}}