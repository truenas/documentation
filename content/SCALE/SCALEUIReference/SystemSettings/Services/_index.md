---
title: "Services"
description: "Information on the Services screen and individual service articles in the Services area."
geekdocCollapseSection: true
weight: 50
aliases: 
 - /scale/scaleuireference/systemsettings/servicesscale/
 - /scale/scaleuireference/systemsettings/services/lldpservicesscreenscale/
 - /scale/scaleclireference/service/
 - /scale/scaleclireference/service/clictdb/
tags:
 - services
 - settings
related: false
---

**System > Services** displays each system component that runs continuously in the background. These typically control data-sharing or other external access to the system. Individual services have configuration screens and activation toggles, and you can set them to run automatically.

{{< trueimage src="/images/SCALE/SystemSettings/ServicesSCALE.png" alt="TrueNAS Services Screen" id="TrueNAS Services Screen" >}}

The <span class="material-icons">edit</span> **Configure** icon opens the service configuration screen.

The **NFS** service row has one additional <span class="iconify" data-icon="material-symbols:list"></span> **NFS Sessions** icon that opens the [**NFS Sessions** screen]({{< relref "NFSSharesScreens" >}}).

The **SMB** service row has two additional icons that link to other screens:
* <span class="iconify" data-icon="material-symbols:receipt-long"></span> **Audit Logs** opens the **Audit** screen.
* <span class="iconify" data-icon="material-symbols:list"></span> **SMB Sessions** opens the [**SMB Status** screen]({{< relref "SMBSharesScreens" >}}).

Select **Start Automatically** to set the service to start after the system restarts.

Click on the **Running** toggle to start the service or to stop it if it is running. Stop services before changing configuration settings.

{{<include file="/static/includes/addcolumnorganizer.md">}}

<div class="noprint">

## Contents

{{< children depth="2" description="true" >}}

</div>
