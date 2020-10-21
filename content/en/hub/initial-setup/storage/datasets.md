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

<img src="/images/pools-dataset.JPG">
<br><br>

To create a dataset in the desired pool, go to **Storage > Pools** and click <i class="fas fa-ellipsis-v" aria-hidden="true" title="Options"></i>. Next, click *Add Dataset*.

To quickly create a dataset with the default options, enter a name for the dataset and click *SAVE*. To see additional options for the dataset, click *ADVANCED MODE*. Dataset options can also be edited after creation. To edit a dataset, click <i class="fas fa-ellipsis-v" aria-hidden="true" title="Options"></i>. Then, click *Edit Options*.

Child datasets can also be created. A child dataset is simply a dataset within another dataset. The process for creating a child dataset is the same as creating a normal dataset. First, find a dataset that will store the new child dataset. Click <i class="fas fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp and *Add Dataset*. Enter a name for the child dataset and click *SAVE*.

For information regarding the exporting dataset keys, see [Creating a new ZFS Pool]({{< ref "encryption.md" >}}).
