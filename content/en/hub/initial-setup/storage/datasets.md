---
title: "ZFS Datasets"
description: "How to create a ZFS dataset."
weight: 2
tags: ["ZFS", "dataset"]
---

{{% pageinfo color="primary" %}}
A ZFS pool is required for creating a ZFS dataset.
See [Creating a new ZFS Pool]({{< ref "pools.md" >}}).
{{% /pageinfo %}}

A ZFS dataset is used in TrueNAS as a file system that is created within a data storage pool.
Datasets can contain files, directories (child datasets), and have individual permissions or flags.
Datasets can also be [encrypted](/hub/initial-setup/storage/encryption/), either using the encryption created with the pool or with a separate encryption configuration.
It is recommended to organize your pool with datasets before configuring [data sharing](/hub/sharing/), as this allows for more fine-tuning of access permissions and using different sharing protocols.

## Creating a Dataset

To create a dataset in the desired pool, go to **Storage > Pools**

<img src="/images/StoragePoolsList.png">
<br><br>

Find the pool and top-level (root) dataset for that pool, click <i class="fas fa-ellipsis-v" aria-hidden="true" title="Options"></i> and **Add Dataset**.

<img src="/images/StoragePoolsDatasetAdd.png">
<br><br>

To quickly create a dataset with the default options, enter a name for the dataset and click **SUBMIT**.

### Dataset Options

The additional options, while not required, can help you fine-tune various elements of the dataset:


