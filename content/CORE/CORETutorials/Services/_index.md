---
title: "Services"
description: "This article provides instructions concerning the Services screen on your TrueNAS."
geekdocCollapseSection: true
weight: 120
---

The **Services** screen lists all services available on the TrueNAS.

Activate or configure a service on the **Services** page.

![ServicesScreen](/images/CORE/13.0/ServicesScreen.png "System Services")

Use the right slider to scroll down to the bottom of the list of services or click on page **2**, or the <span class="iconify" data-icon="dashicons:arrow-right-alt2"></span> or <span class="iconify" data-icon="ci:last-page"></span> arrows.

To locate a service, type in the **Filter Search** field to narrow down the list of services.

Select **Start Automatically** for configured services that need to start after the system boots.

Click the toggle to start or stop the service, depending on the current state. Hover the mouse over the toggle to see the current state of that service. The toggle turns blue when it is running.

Click the <i class="material-icons" aria-hidden="true" title="Configure">edit</i> icon to display the settings screen for a service.

Services related to data sharing or automated tasks are documented in their respective [Sharing]({{< relref "/CORE/UIReference/Sharing/_index.md" >}}) or [Tasks]({{< relref "/CORE/UIReference/Tasks/_index.md" >}}).  

## Additional Services Articles

{{< children depth="2" sort="Name" description="true" >}}
