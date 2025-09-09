---
title: "Services"
description: "Information on the Services screen and individual service articles in the Services area."
geekdocCollapseSection: true
weight: 50
tags:
 - services
 - settings
related: false
---

**System > Services** displays each system component that runs continuously in the background. These typically control data-sharing or other external access to the system. Individual services have configuration screens and activation toggles, and you can set them to run automatically.

{{< trueimage src="/images/SCALE/SystemSettings/ServicesSCALE.png" alt="TrueNAS Services Screen" id="TrueNAS Services Screen" >}}

The <span class="material-icons">edit</span> **Configure** icon opens the service configuration screen.

The **NFS** service row has one additional **View Sessions** link that opens the [**NFS Sessions** screen]({{< ref "NFSSharesScreens" >}}).

The **SMB** service row has two additional links:
* **View Logs** opens the **Audit** screen.
* **View Sessions** opens the [**SMB Status** screen]({{< ref "SMBSharesScreens" >}}).

The **Start Automatically** toggle sets the service to start after the system restarts.

The **Status** column displays the service status with a badge (Stopped or Running) and a <span class="material-icons">play_circle</span>/<span class="material-icons">stop_circle</span> start/stop button. The start/stop button starts the service or stops it if it is running. It is recommended to stop services before changing configuration settings.

{{<include file="/static/includes/addcolumnorganizer.md">}}

<div class="noprint">

## Contents

{{< children depth="2" description="true" >}}

</div>
