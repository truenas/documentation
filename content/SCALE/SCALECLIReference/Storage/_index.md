---
title: "Storage"
geekdocCollapseSection: true
description: "This article introduces the TrueNAS CLI Shell storage namespace, used to access child namespaces and commands including dataset, disk, enclosure, filesystem, pool, resilver, scrub, snapshot, and vmware." 
weight: 45
---

{{< toc >}}

## Listing Storage Pools and Datasets

To list all configured storage pools, enter `storage pool query`.

![TrueNASCLIstoragepoolquery](/images/SCALE/TrueNASCLIstoragepoolquery.png "Pool Query")

Enter `q` to exit the query.

To list all configured datasets, enter `storage dataset query`.

![TrueNASCLIstoragedatasetquery](/images/SCALE/TrueNASCLIstoragedatasetquery.png "Dataset Query")

Enter `q` to exit the query.