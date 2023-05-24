---
title: "Import Data Screen"
description: "This article provides information on the settings and functions found on the Import Data screen."
weight: 25
aliases:
tags:
- scaledisks
- scaledatasets
- scaleimport
---


The **Import Data** screen allows you to import data from a disk into a dataset.

For more information on importing data see [Importing Data (a Disk)]({{< relref "ImportingData.md" >}}).

![ImportDataScreen](/images/SCALE/22.12/ImportDataScreen.png "Import Data Screen")

{{< truetable >}}
| Setting | Description |
|---------|-------------|
| **Disk** | Select the disk from the dropdown list that has the data you want to import into the dataset. |
| **Filesystem Type** | Select the radio button for the filesystem type on the disk. Options are **UFS**, **NTFS**, **MSDOSFS**, or **EXT2FS**. |
| **Destination Path** | Enter or use the <span class="material-icons">arrow_right</span> to the left of the <span class="material-icons">folder</span>**/mnt** to expand each level of the path until you reach the location where you want to import (mount) the data. Click on the dataset to select it and populate the path. |
| **Import** | Starts the data import process. |
{{< /truetable >}}

{{< taglist tag="scaleimport" limit="10" title="Related Import Articles" >}}
{{< taglist tag="scaledisks" limit="10" title="Related Disks Articles" >}}