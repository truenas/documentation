---
title: "Services"
description: "Information on the Services screen and individual service articles in the Services area."
geekdocCollapseSection: true
weight: 50
aliases: 
 - /scale/scaleuireference/systemsettings/servicesscale/
 - /scale/scaleuireference/systemsettings/services/lldpservicesscreenscale/
tags:
 - scaleservices
---


**System Settings > Services** displays each system component that runs continuously in the background. These typically control data-sharing or other external access to the system. Individual services have configuration screens and activation toggles, and you can set them to run automatically.

Documented services related to data sharing or automated tasks are in their respective [Shares]({{< relref "/SCALE/SCALEUIReference/Shares/_index.md" >}}) and [Tasks]({{< relref "/SCALE/SCALEUIReference/DataProtection/_index.md" >}}) articles.

![ServicesSCALE](/images/SCALE/ServicesSCALE.png "SCALE Service Screen")

Use the <span class="material-icons">edit</span> **Configure** icon to open the service configuration screen.

Select **Start Automatically** to set the service to start after the system reboots.

Click on the **Running** toggle to start the service or to stop it if it is running. Stop services before changing configuration settings.

## Contents

{{< children depth="2" description="true" >}}
