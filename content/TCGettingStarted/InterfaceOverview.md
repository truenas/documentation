---
title: "Interface Overview"
description: "Defines the icons, provides links to articles for each function, and explains where to access alerts on the TrueCommand interface."
weight: 20
tags:
- ui
- alerts
---

## Top Toolbar

{{< trueimage src="/images/TrueCommand/Dashboard/TopBar.png" alt="TCTopBar" id="Top Bar" >}}

The top toolbar switches between the various TrueCommand feature screens and has other quick links and dropdown menus for other configuration screens.

{{< truetable >}}
| Option | Description |
|------|-------------|
| <span class="iconify" data-icon="mdi:home"></span> **Home** | Opens the primary TrueCommand Dashboard with live stats and options for connected TrueNAS systems. |
| <span class="iconify" data-icon="mdi:heart-pulse"></span> **Fleet Dash** | The expanded [**Fleet Dashboard**]({{< ref "FleetDashboard" >}}) collects metrics, notifications, and configuration details for every connected TrueNAS system. |
| <span class="iconify" data-icon="mdi:chart-line-stacked"></span> **Reports** | The [**Reports**]({{< ref "Creation" >}}) page for viewing and creating custom visualizations of connected TrueNAS system statistics. |
| <span class="iconify" data-icon="mdi:content-copy"></span> **Replication** | The [**Replication**]({{< ref "ReplicationManagement" >}}) shows created replication tasks between connected TrueNAS systems and allows creating new ZFS snapshot automated replication schedules. |
| ![iXsystemsLogo](/images/ixsystemsbw.png) | Opens a new browser tab to the [iXsystems website](https://www.ixsystems.com) |
| <i class="material-icons" aria-hidden="true" title="Settings">settings</i> | The **[Settings](#settings-menu)** menu dropdown has options for each configuration or monitoring screen in TrueCommand. Visible options vary based on the logged in user account. |
| User avatar | Opens the user account menu dropdown. |
{{< /truetable >}}

### Settings Menu
The settings dropdown menu provides links to more TrueCommand monitoring and configuration screens.

The **Settings** menu has these options:

{{< truetable >}}
| Option | Description |
|--------|-------------|
| <span class="iconify" data-icon="mdi:view-dashboard"></span> Dashboard | Opens the primary TrueCommand Dashboard. |
| <span class="iconify" data-icon="mdi:chip"></span> System Inventory | The [**System Inventory**]({{< ref "MultiSystems" >}}) screen has expanded license and serial number details about TrueNAS systems that are connected to TrueCommand. |
| <span class="iconify" data-icon="mdi:chart-line-stacked"></span> Reports | Opens the [**Reports**]({{< ref "/UserGuide/Reports/Creation" >}}) screen. |
| <span class="iconify" data-icon="mdi:playlist-check"></span> All Alerts | The [**All Alerts**]({{< ref "AlertManage.md#all-notices-screens-and-functions" >}}) screen shows every TrueNAS system notification that TrueCommand has collected or generated. |
| <span class="iconify" data-icon="ic:round-notification-important"></span> Alert Rules | The [**Alert Rules**]({{< ref "AlertManage.md#alert-rules-screens-and-functions" >}}) screen has options for viewing and creating new monitoring routines that create TrueCommand notifications when specific parameters are met. |
| <span class="iconify" data-icon="mdi:cloud-alert"></span> Alert Services | Opens the [**Alert Services**]({{< ref "AlertManage.md#alert-services-screens-and-functions" >}}) screen configures plugins for sending TrueCommand notifications to a 3rd party service. This is only available for containerized TrueCommand deployments. |
| <span class="iconify" data-icon="mdi:content-copy"></span> Replication | Opens the [**Replication**]({{< ref "ReplicationManagement" >}}) page. |
{{< /truetable >}}

These options appear when the logged in user account is a TrueCommand administrator:

{{< truetable >}}
| Option | Description |
|--------|-------------|
| <span class="iconify" data-icon="mdi:remote"></span> Systems | Opens the [**Systems**]({{< ref "Systems" >}}) screen for viewing and managing TrueNAS connections to TrueCommand. |
| <span class="iconify" data-icon="mdi:account"></span> Users | Opens the [**Users**]({{< ref "/AdminGuide/Users" >}}) screen for managing TrueCommand user accounts. |
| <span class="iconify" data-icon="mdi:account-supervisor-circle"></span> Teams | Opens the [**Teams**]({{< ref "/AdminGuide/Users" >}}) screen for grouping TrueCommand user accounts into teams with tunable permissions. |
| <span class="iconify" data-icon="mdi:text-short"></span> Logs | Opens the [**Logs**]({{< ref "SystemLog" >}}) screen for viewing all recorded user account activity within TrueCommand. |
| <span class="iconify" data-icon="mdi:key"></span> Administration | Opens the [**Administration**]({{< ref "/AdminGuide/Admin/" >}}) screen for configuring the deployed TrueCommand instance. |
| <span class="iconify" data-icon="mdi:swap-vertical-bold"></span> API |  Opens the **[API Interface]({{< ref "API" >}})** screen for testing API calls and viewing TrueCommand API documentation. |
{{< /truetable >}}

### User Avatar Menu
The user avatar provides access to the logged-in user profile, API Interface, user license (EULA), and the log out option.

{{< truetable >}}
| Option | Description |
|------|-------------|
| <span class="iconify" data-icon="mdi:account"></span> Profile | Opens the **[Profile]({{< ref "/AdminGuide/Users" >}})** screen for the logged-in user. |
| <span class="iconify" data-icon="mdi:file-document-multiple-outline"></span> Documentation | Opens a new browser tab to https://www.truenas.com/docs/truecommand/. |
| <span class="iconify" data-icon="mdi:file-document-edit-outline"></span> EULA | Opens the [TrueCommand EULA]({{< ref "/Notices/TCTermsOfService" >}}) window. |
| <span class="iconify" data-icon="mdi:login-variant"></span> Log Out | Logs the user out of TrueCommand. |
{{< /truetable >}}
