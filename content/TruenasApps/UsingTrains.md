---
title: "Managing App Trains"
description: "Provides basic information on adding or managing application trains in TrueNAS."
weight: 36
aliases:
 - /scale/scaleuireference/apps/usingcatalogs/
 - /scale/apps/usingcatalogs/
 - /scale/scaletutorials/apps/usingcatalogs/
 - /scale/scaletutorials/apps/
 - /truenasapps/usingcatalogs/
tags:
- apps
- customapp
keywords:
- nas data storage
- software storage solutions
---

TrueNAS has a pre-built official catalog of available TrueNAS-approved applications.

Users can configure and add catalog trains if they choose.
The default train is **stable** which shows the apps found in the charts repository. Other available trains are **enterprise** and **community**.

{{< hint type=note >}}
TrueNAS uses outbound ports 80/443 to retrieve the TRUENAS catalog.
{{< /hint >}}

## Managing the Application Catalog
Users can manage the catalog by changing the trains included in it.
To add or remove a train, from the **Installed** application screen, click **Configuration** then on **Settings** on the dropdown menu to open the **Settings** screen.
You can also click **Manage Installed Apps** at the top right of the **Discover** screen to open the **Installed** screen.

{{< trueimage src="/images/SCALE/Apps/AppsDiscoverScreen.png" alt="Applications Discover Screen" id="Applications Discover Screen" >}}

Users can change the catalog trains and show apps in those trains on the **Settings** screen.
After making a change, go to the **Discover** screen and click on **Refresh Catalog** to pull the catalog from the repository and refresh it in TrueNAS.

{{< trueimage src="/images/SCALE/Apps/AppsTrainSettingsScreen.png" alt="Apps Train Settings Screen" id="Apps Train Settings Screen" >}}

To remove a train from the catalog, select the checkbox for the train on the **Settings** screen to clear the checkbox, then click **Save**.
You must have one train selected.

<!-- commenting out this section until we get confirmation of how to add a third-party catalog.
## Adding a Catalog 
{{< include file="/static/includes/ThirdPartyCatalogs.md" >}}

To deploy a third-party application, use the **Custom App** option.
 -->
 
## Adding the Enterprise Train

{{< include file="/static/includes/apps/AddEnterpriseTrain.md" >}}
