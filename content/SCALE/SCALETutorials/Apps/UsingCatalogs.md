---
title: "Using SCALE Catalogs"
description: "Provides basic information on adding or managing application catalogs in TrueNAS SCALE."
weight: 5
aliases: /scale/scaleuireference/apps/usingcatalogs/
tags:
- scaleapps
- scaledocker
- scalecatalog
---

{{< toc >}}

TrueNAS SCALE comes with a pre-built official catalog of iXsystems-approved Docker apps that includes Plex, [MinIO]({{< relref "MinIOClustersSCALE.md" >}}), Nextcloud, [Chia]({{< relref "Chia.md" >}}), and IPFS.

Users can also configure custom apps catalogs, although iXsystems does not directly support any non-official apps in a custom catalog.

{{< hint type=note >}}
TrueNAS uses outbound ports 80/443 to retrieve the Official catalog.
{{< /hint >}}

## Managing Catalogs

To manage and add catalogs, click on the **Manage Catalogs** tab on the **Applications** screen. 

![ApplicationsManageCatalogsScreen](/images/SCALE/22.02/ApplicationsManageCatalogsScreen.png "Applications Manage Catalog") 

Users can edit, refresh, delete, and view the summary of a catalog by clicking the <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> button next to the intended catalog.

**Edit** opens the **Edit Catalog** screen where users can change the name TrueNAS uses to look up the catalog or change the trains from which the UI should retrieve available applications for the catalog.

![ApplicationsEditCatalog](/images/SCALE/22.02/ApplicationsEditCatalog.png "Edit Catalog")

**Refresh** re-pulls the catalog from its repository and applies any updates.

**Delete** allows users to remove a catalog from the system. Users cannot delete the default Official catalog.

**Summary** lists all apps in the catalog and sorts them train, app, and version.

Users can filter the list by **Train** type (**All**, **charts**, or **test**), and by **Status** (**All**, **Healthy**, or **Unhealthy**).

![ApplicationsManageCatalogsScreen](/images/SCALE/22.02/ApplicationsManageCatalogsScreen.png "Manage Catalogs")

## Adding Catalogs

To add a catalog, click the **Add Catalog** button at the top right of on the **Manage Catalogs** tab. Fill out the **Add Catalog** form. As an example, the data below to add the Truecharts catalog to SCALE.

Enter the name in **Catalog Name**, for example, type *truecharts*.

Leave the **Force Create** checkbox clear. 

Select a valid git repository in **Repository**. For example, *https://github.com/truecharts/catalog* for TrueCharts.

Now select the train TrueNAS should use to retrieve available application information of the catalog. For example, select *stable* or *incubator* for the TrueCharts example.

Finially, enter the git repository branch TrueNAS should use for the catalog in **Branch**. For example, for TrueCharts, enter *main*.

Click **Save**. 

{{< taglist tag="scaleapps" limit="10" >}}
{{< taglist tag="scalecatalog" limit="10" title="Related Catalog Articles" >}}