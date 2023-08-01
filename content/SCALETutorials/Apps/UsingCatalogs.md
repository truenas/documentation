---
title: "Using SCALE Catalogs"
description: "Provides basic information on adding or managing application catalogs in TrueNAS SCALE."
weight: 5
aliases: /scale/scaleuireference/apps/usingcatalogs/
tags:
- scaleapps
- scalecustomapp
- scalecatalog
---

{{< toc >}}

TrueNAS SCALE comes with a pre-built official catalog of iXsystems-approved apps that includes over 50 available applications. 

Users can configure custom apps catalogs, although iXsystems does not directly support any non-official apps in a custom catalog.

{{< hint type=note >}}
TrueNAS uses outbound ports 80/443 to retrieve the TRUENAS catalog.
{{< /hint >}}

## Managing Catalogs

To manage and add catalogs, click on the **Manage Catalogs** on the **Discover** screen to open the **Catalogs** screen. 

{{< trueimage src="/images/SCALE/23.10/AppsDiscoverScreen.png" alt="Applications Discover Screen" id="1: Applications Discover Screen" >}}

Users can edit, refresh, delete, and view the summary of a catalog by clicking on a catalog to expand and show the options.

**Edit** opens the **Edit Catalog** screen where users can change the name SCALE uses to look up the catalog. You cannot change the name of the TRUENAS default catalog.
You can change the trains from which the UI retrieves available applications for the catalog.

{{< trueimage src="/images/SCALE/23.10/AppsEditCatalogScreen.png" alt="Apps Edit Catalog Screen" id="2: Apps Edit Catalog Screen" >}}

**Refresh** re-pulls the catalog from its repository and applies any updates.

**Delete** allows users to remove a catalog from the system. Users cannot delete the default TRUENAS catalog.

**Summary** lists all apps in the catalog and sorts them train, app, and version.

Users can filter the list by **Train** type (**All**, **charts**, or **test**), and by **Status** (**All**, **Healthy**, or **Unhealthy**).

## Adding Catalogs

To add a catalog, click the **Add Catalog** button at the top right of on the **Catalogs** screen. 

A warning dialog opens. 

{{< trueimage src="/images/SCALE/23.10/AddCatalogWarning.png" alt="Add Catalog Warning" id="3: Add Catalog Warning" >}}

Click **CONTINUE** to open the **Add Catalog** screen.

{{< trueimage src="/images/SCALE/23.10/AppsAddCatalogScreen.png" alt="Apps Add Catalog Screen" id="4: Apps Add Catalog Screen" >}}

Fill out the **Add Catalog** form. As an example, the data below to add the Truecharts catalog to SCALE.

Enter the name in **Catalog Name**, for example, type *truecharts*.

Leave the **Force Create** checkbox clear. Selecting this option allows adding a catalog to the system even if some trains are unhealthy, so this option is not recommended.

Select a valid git repository in **Repository**. For example, *https://github.com/truecharts/catalog* for TrueCharts.

Now select the train TrueNAS should use to retrieve available application information of the catalog. For example, select *stable* or *incubator* for the TrueCharts example.

Finially, enter the git repository branch TrueNAS should use for the catalog in **Branch**. For example, for TrueCharts, enter *main*.

Click **Save**. 

{{< taglist tag="scaleapps" limit="10" >}}
{{< taglist tag="scalecatalog" limit="10" title="Related Catalog Articles" >}}