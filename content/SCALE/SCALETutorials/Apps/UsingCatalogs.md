---
title: "Using SCALE Catalogs"
description: "Provides basic information on adding or managing application catalogs in TrueNAS SCALE."
weight: 5
aliases: /scale/scaleuireference/apps/usingcatalogs/
tags:
- apps
- customapp
---

TrueNAS SCALE comes with a pre-built official catalog of over 50 available iXsystems-approved applications.

Users can configure custom apps catalogs if they choose, but iXsystems does not directly support non-official apps in a custom catalog.

{{< hint type=note >}}
TrueNAS uses outbound ports 80/443 to retrieve the TRUENAS catalog.
{{< /hint >}}

## Managing Catalogs
Users can manage the catalog from the **Catalogs** screen.
Click **Manage Catalogs** at the top right side of the **Discover** screen to open the **Catalogs** screen.

{{< trueimage src="/images/SCALE/Apps/AppsDiscoverScreen.png" alt="Applications Discover Screen" id="Applications Discover Screen" >}}

Users can edit, refresh, delete, and view the catalog summary by clicking on a catalog to expand and show the options.

**Edit** opens the **Edit Catalog** screen where users can change the name SCALE uses to look up a catalog, add other trains to the catalog, or change the trains from which the UI retrieves available applications for the catalog.

{{< trueimage src="/images/SCALE/Apps/AppsEditCatalogScreen.png" alt="Apps Edit Catalog Screen" id="Apps Edit Catalog Screen" >}}

**Refresh** pulls the catalog from its repository and refreshes it by applying any updates.

**Delete** allows users to remove a catalog from the system. Users cannot delete the default TRUENAS catalog.

**Summary** lists all apps in the catalog and sorts them by train, app, and version.

Users can filter the list by **Train** type (**All**, **charts**, or **test**), and by **Status** (**All**, **Healthy**, or **Unhealthy**).

## Adding Catalogs
To add a catalog, click **Add Catalog** at the top right of the **Catalogs** screen.

A warning dialog opens.

{{< trueimage src="/images/SCALE/Apps/AddCatalogWarning.png" alt="Add Catalog Warning" id="Add Catalog Warning" >}}

Click **Continue** to open the **Add Catalog** screen.

{{< trueimage src="/images/SCALE/Apps/AppsAddCatalogScreen.png" alt="Apps Add Catalog Screen" id="Apps Add Catalog Screen" >}}

Fill out the **Add Catalog** form.

Enter a name in **Catalog Name**, for example, type *mycatalog*.

We do not recommend enabling **Force Create**, since it overrides safety mechanisms that prevent adding a catalog to the system even if some trains are unhealthy.

Select a valid GitHub repository in **Repository**. For example, *https://github.com/mycatalog/catalog*.

Type the name of the train TrueNAS should use to retrieve available application information from the catalog.

Finally, enter the GitHub repository branch TrueNAS should use for the catalog in **Branch**. Leave this set to **main** unless you need to change it.

Click **Save**.

## Adding the Enterprise Train
{{< include file="/static/includes/AddEnterpriseTrain.md" >}}
