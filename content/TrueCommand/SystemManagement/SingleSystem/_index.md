---
title: Single System Management
description: "How to use TrueCommand to manage a single connected TrueNAS system."
weight: 20
geekdocCollapseSection: true
aliases:
tags:
---


TrueCommand allows users to manage all of their systems on a single dashboard that also lets users view single systems at a time. 

To manage a single system, either click on the name on a System card or click on the **All** dropdown <span class="material-icons">arrow_drop_down</span> on the left side of the system header at the top of main dashboard. Select or hover over **Ungrouped** to see the list of systems.  
Select the system you want to manage.

![MainDashboardSelectUngroupedSystem](/images/TrueCommand/2.3.2/MainDashboardSelectUngroupedSystem.png "Selecting a System")

Single system cards display various statistics like CPU, memory, disk, network, and storage usage, as well as existing datasets and [alerts]({{< relref "AlertManage.md" >}}).

Users can create and manage storage, replication, snapshots, and shares using the **Explore** button. 

Users can view expanded TrueNAS information details by clicking on the double arrows <span class="material-icons">keyboard_double_arrow_down</span> at the lower right corner of the system card. 
Information includes the system manufacturer, serial numbers, support tier, support expiration date, host name, CPU, CPU cores, physical memory, OS, and uptime.

![SystemInformationCardDetails](/images/TrueCommand/2.3.2/SystemInformationCardDetails.png "Single System Hardware Details")

Users with adequate permissions can update the system, [configure backups]({{< relref "TrueNASConfigManage.md" >}}), and generate system audits and [reports]({{< relref "Creation.md" >}}). If a system update is available, the **Update** label and icon turn green. You can also see which systems have updates pending on the **Systems** screen.

![SystemUpdateAvailable](/images/TrueCommand/2.3.2/SystemUpdateAvailable.png "Single System Dashboard")

## Contents

{{< children depth="2" description="true" >}}
