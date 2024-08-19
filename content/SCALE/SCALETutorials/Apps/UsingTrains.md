---
title: "Managing Catalog Trains"
description: "Provides basic information on adding or managing application catalogs in TrueNAS SCALE."
weight: 5
aliases:
 - /scale/scaleuireference/apps/usingcatalogs/
 - /scale/apps/usingcatalogs/
 - /scale/scaletutorials/apps/usingcatalogs/
tags:
- apps
- customapp
keywords:
- nas data storage
- software storage solutions
---

TrueNAS SCALE has a pre-built official catalog of available iXsystems-approved applications.

Users can configure add catalog trains if they choose.
The default train is **stable** which shows the **charts** apps. Other available trains are **enterprise** and **community**.

{{< hint type=note >}}
TrueNAS uses outbound ports 80/443 to retrieve the TRUENAS catalog.
{{< /hint >}}

## Managing Catalogs
Users can manage the catalog trains from the **Settings** option on the **Installed** screen.
You can also click **Manage Installed Apps** at the top right side of the **Discover** screen to open the **Installed** screen.

{{< trueimage src="/images/SCALE/Apps/AppsDiscoverScreen.png" alt="Applications Discover Screen" id="Applications Discover Screen" >}} new image

Click **Train Settings** on **Settings** menu to open the **Edit Catalog** screen.
From this screen users can change the catalog trains and show apps in those trains. Changing the train resyncs the catalog of apps.

{{< trueimage src="/images/SCALE/Apps/AppsEditCatalogScreen.png" alt="Apps Edit Catalog Screen" id="Apps Edit Catalog Screen" >}} [new image]

Click **Refresh Catalog** on the **Discover** screen to pull the catalog from the repository and refresh it.

To remove a catalog from the system, remove it from the **Preferred Trains** field on the **Edit Catalog** screen and click **Save**.
Users cannot delete the default catalog train.
<!-- commenting out this section until we get confirmation of how to add a third-party catalog.
## Adding Catalogs 
{{< include file="/static/includes/ThirdPartyCatalogs.md" >}}

To deploy a third-party application, use the **Custom App** option.
 -->
## Adding the Enterprise Train

{{< include file="/static/includes/AddEnterpriseTrain.md" >}}
