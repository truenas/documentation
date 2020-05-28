---
title: "Creating a new ZFS Pool"
description: "A quick how-to on creating a ZFS pool."
type: docs
---

Perhaps, the most important part about TrueNAS is the ability to efficiently
store lots of content that's readily accessible. The way this is accomplished
is through setting up
[ZFS Pools](https://en.wikipedia.org/wiki/ZFS#Data_structures:_Pools,_datasets_and_volumes "ZFS Pools Wikipedia").
To setup a pool in TrueNAS, go to **Storage > Pools** and click *ADD*.

<img src="/images/pools-list.png">
<br><br>

Ensure *Create a new pool* is selected and click *CREATE POOL*.

In step two of the wizard is where to configure the virtual devices (vdevs)
that make up the pool. The TrueNAS web interface makes this easy by
recommending the vdev layout based on the number of disks available. First,
enter a name for the pool. If encrypting the pool is desired, ensure
*Encryption* is set. To quickly setup a pool using all available, same
sized disks, click *SUGGEST LAYOUT*. To manually add disks in a vdev, select
the amount of disks you want to add and click
<i class="fas fa-arrow-right"></i>. TrueNAS helpfully suggests a
vdev layout based off the number of disks added. For example, if two disks are
added, TrueNAS automatically configures it as a mirror. To change the
recommended layout, click the drop down under the *Data VDevs* list and select
the desired layout.

After the desired vdev layout has been made, it can be duplicated by clicking
*REPEAT*. If more disks are available and equal in size, the *REPEAT* button
takes the current vdev layout and makes another. Thus, it creates a mirror of
vdevs. Otherwise, another vdev can be added by clicking *ADD DATA* and adding
disks as was done in the first vdev.

{{% alert title="Warning" color=warning %}}
Adding data vdevs with different numbers of disks is not recommended.
Adding data vdevs of different layouts is not supported.
{{% /alert %}}

If desired, a cache, log, and spare vdev can be added by clicking *ADD CACHE*,
*ADD LOG*, and *ADD SPARE*, respectively. When ready to proceed with the desired
vdevs, click *CREATE*.

<img src="/images/pools-vdevs.png">
<br><br>