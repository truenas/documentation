---
---

### Cloning to New Dataset

The **Clone to New Dataset** button provides the cabability to create a clone of the selected snapshot. The clone appears directly beneath the parent dataset in the dataset tree hierarchy on the **Datasets** screen. Clicking the **Clone to New Dataset** button produces the following dialog box:

![StorageSnapshotCloneNewDatasetSCALE](/images/SCALE/22.12/StorageSnapshotCloneNewDatasetSCALE.png "Clone Snapshot to New Dataset")

Clicking the **Clone** button confirms that the clone was successfully created.

![StorageSnapshotCloneNewDatasetCreatedSCALE](/images/SCALE/22.12/StorageSnapshotCloneNewDatasetCreatedSCALE.png "Clone Successfully Created")

### Promoting a Dataset

The **Go to Datasets** button returns to the **Datasets** listings. Clicking on the clone name in the dataset listing populates the **Dataset Details** widget with the associated details. The **Promote** button is visible.

![StorageSnapshotCloneNewDatasetPromoteSCALE](/images/SCALE/22.12/StorageSnapshotCloneNewDatasetPromoteSCALE.png "Clone Promote Button")

After clicking the **Promote** button, the clone dataset is promoted and this button no longer appears. 

![StorageSnapshotCloneNewDatasetAfterPromoteSCALE](/images/SCALE/22.12/StorageSnapshotCloneNewDatasetAfterPromoteSCALE.png "Clone After Promotion")

The **Promote** button now appears on the demoted parent dataset:

![DatasetDetailsParentDataNotPromotedSCALE](/images/SCALE/22.12/DatasetDetailsParentDataNotPromotedSCALE.png "Demoted Volume Promote Button")

When you promote a dataset you reverse the parent-child association. The dataset that the clone was created from is demoted, and this original dataset can then be destroyed. See [zfs-promote.8](https://openzfs.github.io/openzfs-docs/man/8/zfs-promote.8.html).