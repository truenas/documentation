---
title: "ZFS Datasets"
description: "A quick how-to on creating a ZFS dataset."
weight: 2
type: docs
---

{{% pageinfo color="primary" %}}
A ZFS pool must be created first to create a ZFS dataset. See
[Creating a new ZFS Pool]({{< ref "pools.md" >}}).
{{% /pageinfo %}}

<img src="/images/pools-dataset.JPG">
<br><br>

To create a dataset in the desired pool, go to **Storage > Pools**, click
<i class="fas fa-ellipsis-v"></i>. Next, click *Add Dataset*.

To quickly create a dataset with the default options, enter a name for the
dataset and click *SAVE*. To modify more advanced settings of the dataset click
*ADVANCED MODE*. Dataset options can also be edited after creation. To edit a
dataset, click <i class="fas fa-ellipsis-v"></i>. Then, click *Edit Options*.

Child datasets can be created as well. A child dataset is simply a dataset
within another dataset. The process for creating a child dataset is the same as
creating a normal dataset. First, find the dataset to create a child dataset in.
Click <i class="fas fa-ellipsis-v"></i>. Then, click *Add Dataset*. Enter a name
for the child dataset and click *SAVE*.
