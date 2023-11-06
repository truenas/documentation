---
title: Single System Management
description: "How to use TrueCommand to manage a single connected TrueNAS system."
weight: 20
geekdocCollapseSection: true
aliases:
related: false
---

TrueCommand allows users to manage all the TrueNAS systems through several screens: main **Dashboard**, **Fleet Dashboard** and **Systems** screens.
Only administrator accounts have access to the **Systems** screen. 
Non-Administrator users can view and edit system information for the systems they are given access two, but cannot add new systems. 
The [**System Inventory**]({{< relref "SystemInventory.md" >}}) screen provides access to system, storage, and network information.

You can access individual system information through the system widgets (information cards) on the **Dashboard** or use the sort options on the screen top banner to filter the system widgets to show all or only a select system. 
Click on the name of main **Dashboard** system widget to open a screen with a detailed view of the system. 

![TrueCommandDashboard](/images/TrueCommand/Dashboard/TCDashBoard.png "TrueCommand Dashboard")

The [**Fleet Dashboard Systems**]({{< relref "FleetDashboard.md" >}}) widget lists all TrueNAS systems managed by TrueCommand but clicking on a system does not open a detailed individual system screen.

The **Systems** screen lists all systems managed by TrueCommand.

![SystemsPage](/images/TrueCommand/Systems/SystemsPage.png "Systems Screen Systems List")

The [individual system widgets]({{< relref "TrueCommand/UserGuide/Dashboard.md" >}} on the main **Dashboard**, systems listed in the **Systems** widget on the **Fleet Dashboard**, and systems listed on the **Systems** screen include the **New System** button and provide access to the [systems option menu]({{< relref "TrueCommand/UserGuide/Dashboard.md#system-options-menu" >}}). 
Click the triple-dot icon <span class="material-icons">more_vert</span> to open the system options menu, then click **Edit** to open the [**Edit *system***]() screen.

## Individual System Detail Screens
Access individual system detail screens from the main **Dashboard** system widgets.

The individual system detail screen includes options to update the TrueNAS release, configure backups, view a system audit, and report screens.

![SingleSystemDetailScreen](/images/TrueCommand/Systems/SingleSystemDetailScreen.png "Individual System Detail Screen")

The main **Dashboard** single system widgets and the detail screens display various performance graphs and usage for CPU, memory, disk, network, and storage, and list pools and datasets, and discovered system [alerts]({{< relref "AlertManage.md" >}}).

Users with adequate permissions can update the system, [configure backups]({{< relref "TrueNASConfigManage.md" >}}), and generate system audits and [reports]({{< relref "/TrueCommand/UserGuide/Reports/Creation.md" >}}). 
If a system update is available, the **Update** label and icon turn green. You can also see which systems have updates pending on the **Systems** screen.

![SystemUpdateAvailable](/images/TrueCommand/Dashboard/SystemUpdateAvailable.png "Single System Dashboard")

## System Inventory Screens
The [**System Inventory**]({{< relref "SystemInventory.md" >}}) screen lists all systems TrueCommand manages. 
Click on a system to see three tabs, **System**, **Network**, and **Storage**.

Administrators have access to all systems. Non-administrators only see systems they have permissions to access.

## Contents

{{< children depth="2" description="true" >}}
