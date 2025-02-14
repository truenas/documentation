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

TrueNAS offers pre-built official catalogs of available iXsystems-approved applications.

TrueNAS applications are available in three catalogs (trains):

* **stable** - Default train of official apps, vetted by iXsystems, chosen because of the features and functionality of the app and how they integrate with TrueNAS.
* **enterprise** - Default train of apps, simplified and validated for enterprise users for Enterprise-licensed systems.
* **community** - Apps proposed and maintained by the community

The default TrueNAS **Stable** catalog populates the **Discover** apps screen with apps.

Some apps proposed by community members might be adopted as official **stable** train apps.
iXsystems maintains official apps for non-enterprise and community users.

Users can change the apps that show on the **Discover** screen by adding or removing trains.

{{< hint type=note >}}
TrueNAS uses outbound ports 80/443 to retrieve the TRUENAS catalog.
{{< /hint >}}

## Changing App Trains

Click **Settings** on the **Configuration** dropdown list to open the **Settings** screen.

Select the checkbox for the train(s) to include, then click **Save**.

{{< trueimage src="/images/SCALE/Apps/AppsDiscoverScreen.png" alt="Applications Discover Screen" id="Applications Discover Screen" >}}

After making a change, go to the **Discover** screen and click on **Refresh Catalog** to pull the catalog from the repository and refresh it in TrueNAS.

{{< trueimage src="/images/SCALE/Apps/AppsTrainSettingsScreen.png" alt="Apps Train Settings Screen" id="Apps Train Settings Screen" >}}

To remove a train from the catalog, select the checkbox for the train on the **Settings** screen to clear the checkbox, then click **Save**.
You must have one train selected.