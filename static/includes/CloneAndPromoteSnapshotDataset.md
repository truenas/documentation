&NewLine;

### Cloning to New Dataset
Use the **Clone to New Dataset** button to create a clone of the snapshot.
The clone appears directly beneath the parent dataset in the dataset tree table on the **Datasets** screen.
Click **Clone to New Dataset** to open a clone confirmation dialog.

{{< trueimage src="/images/SCALE/Datasets/StorageSnapshotCloneNewDatasetSCALE.png" alt="Clone Snapshot to New Dataset" id="Clone Snapshot to New Dataset" >}}

Click **Clone** to confirm.

{{< trueimage src="/images/SCALE/Datasets/StorageSnapshotCloneNewDatasetCreatedSCALE.png" alt="Dataset Successfully Created" id="Dataset Successfully Created" >}}

The **Go to Datasets** button opens the **Datasets** screen.

{{< trueimage src="/images/SCALE/Datasets/StorageSnapshotCloneNewDatasetListedContentSCALE.png" alt="Datasets Listed with Clone" id="Datasets Listed with Clone" >}}

### Promoting a Dataset
Click on the clone name in the dataset listing to populate the **Dataset Details** widget and display the **Promote** button.

{{< trueimage src="/images/SCALE/Datasets/StorageSnapshotCloneNewDatasetPromoteSCALE.png" alt="Promote Clone Button" id="Promote Clone Button" >}}

After clicking the **Promote** button, the dataset clone is promoted and this button no longer appears.

{{< trueimage src="/images/SCALE/Datasets/StorageSnapshotCloneNewDatasetAfterPromoteSCALE.png" alt="Clone After Promotion" id="Clone After Promotion" >}}

**Promote** now displays on the **Dataset Details** widget when you select the demoted parent dataset.

{{< trueimage src="/images/SCALE/Datasets/DatasetDetailsParentDataNotPromotedSCALE.png" alt="Demoted Dataset with Promote Button" id="Demoted Dataset with Promote Button" >}}

See [zfs-promote.8](https://openzfs.github.io/openzfs-docs/man/8/zfs-promote.8.html) for more information.