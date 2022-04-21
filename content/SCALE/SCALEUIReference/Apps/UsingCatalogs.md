---
title: "Using SCALE Catalogs"
weight: 15
---

{{< toc >}}

TrueNAS SCALE comes with a pre-built official catalog of iXsystems-approved Docker apps that includes Plex, [MinIO]({{< relref "MinIOClustersSCALE.md" >}}), Nextcloud, [Chia]({{< relref "Chia.md" >}}), and IPFS.

Users can also configure custom apps catalogs, although iXsystems will not directly support any non-official apps in a custom catalog.

## Manage Catalogs

To manage and add catalogs, click the *Manage Catalogs* tab in the **Applications** screen. 

![AppsCatalog](/images/SCALE/AppsCatalog.png "Apps Catalog")

Users can edit, refresh, delete, and view the summary of a catalog by clicking the <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> button next to the intended catalog.

**Edit**: 
The edit option allows users to respecify the name TrueNAS will use to look up the catalog, as well as the trains from which UI should retrieve available applications for the catalog.

![EditCatalogSCALE](/images/SCALE/EditCatalogSCALE.png "Edit Catalog")

**Refresh**: 
The Refresh option re-pulls the catalog from its repository and applies any updates.

**Delete**: 
The Delete option allows users to remove a catalog from the system. Users cannot delete the default Official catalog.

**Summary**: 
The Summary option lists all of the apps in the catalog and sorts them Train, App, and Version.

Users may filter the list by Train type (All, charts, or test), and by Status (All, Healthy, or Unhealthy).

![CatalogSummarySCALE](/images/SCALE/CatalogSummarySCALE.png "Catalog Summary")

## Adding Catalogs

To add a catalog, click the *Add Catalog* button in the *Manage Catalogs* tab and fill out the form. As an example, fill out the form using the data below to add the Truecharts catalog to SCALE.

| Field | Description | Truecharts |
|---------|-------|-------------|
| Catalog Name | The name the TrueNAS will use to look up the catalog. | **truecharts** |
| Force Create | Set to add the catalog to the system even if some trains are unhealthy. | **Unchecked** |
| Repository |  The valid git repository URL. | **https://github.com/truecharts/catalog** |
| Preferred Trains | The trains TrueNAS will use to retrieve available applications for the catalog. | **stable** (and optionally: **incubator**) |
| Branch | The git repository branch TrueNAS will use for the catalog. | **main** |

### Displaying Catalogs

Users can select which catalogs they want to view in the *Available Applications* tab by clicking the *Catalogs* drop-down menu and checking the catalogs they want to see.

![SelectCatalogsSCALE](/images/SCALE/SelectCatalogsSCALE.png "Catalog Summary")
