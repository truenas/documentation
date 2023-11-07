---
title: System Inventory
description: "Overview and usage notes of the TrueCommand System Inventory screen."
weight: 20
---


The **System Inventory** screen lists all systems TrueCommand manages. 
Each system includes the name given to it, product type, license and expiration date, and an option to copy the TrueNAS system serial number to the clipboard.

Click on a system to see three tabs:
* **System** 
* **Network**
* **Storage**

To access the **System Inventory** screen, click the gear <i class="material-icons" aria-hidden="true" title="Settings">settings</i> icon, then click **System Inventory**.

![SystemInventoryScreen](/images/TrueCommand/SystemInventory/SystemInventoryScreen.png "System Inventory Screen")

### System Inventory System Tab
The **System** tab provides information on the system manufacturer, TrueNAS serial numbers of the controller(s), TrueNAS system support tier and support Contract expiration date, the active controller host name, CPU type and the number of CPU cores, the amount of physical memory, OS and TrueNSA CORE or SCALE release version, and the system uptime in days, weeks, months.

![SystemInventorySystem](/images/TrueCommand/SystemInventory/SystemInventorySystem.png "System Information")

### System Inventory Network Tab
The **Network** tab provides the interface name(s), type (physical or virtual), link state (up) and Mac address. 
It also shows the default routes and name servers addresses.

![SystemInventoryNetwork](/images/TrueCommand/SystemInventory/SystemInventoryNetwork.png "System Network Information")

Click the **CSV** button to download the information to a CSV file.

### System Inventory Storage Tab
The **Storage** tab lists the drives in the system. Information includes drive name, type, size, model and serial nuber, an the location in the system corresponding to the **Enclosure** or **View Enclosure** screens in the TrueNAS system.

![SystemInventoryStorage](/images/TrueCommand/SystemInventory/SystemInventoryStorage.png "System Storage Information")

Click the **CSV** button to download the information to a CSV file.

