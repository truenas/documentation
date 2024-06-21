---
title: "Thin Provisioning"
description: "Provides general information on thin provisioning and zvol creation, their uses cases and implementation in TrueNAS."
weight: 60
tags:
 - sparse
 - zvols
 - thin provisioning
---


*Thin provisioning* is a storage management technique used to optimize storage utilization and efficiency. It allows administrators to allocate storage capacity dynamically, on an as-needed basis, rather than allocating it all upfront.

### How Does Thin Provisioning Work?

Traditional thick storage allocation involves dedicating a specific amount of physical storage space for each zvol upfront, regardless of whether that space is immediately used. This can lead to inefficient use of storage resources and increased costs.

Thin provisioning, on the other hand, enables administrators to allocate storage space virtually, without immediately assigning physical storage. When a new zvol is created, it is assigned a size limit, but it consumes physical storage only as data is actually written to the volume. This allows for more flexible and efficient use of storage resources.

### Enabling Thin Provisioning

When creating zvols in TrueNAS, select to create the zvol as sparse.

{{< trueimage src="/images/Reference/SparseZvolScreencap.png" alt="Zvol Sparse Setting" id="Zvol Sparse Setting" >}}

Once a zvol is created, you cannot change the **Sparse** option through the GUI; you must recreate the zvol.

### Benefits of Thin Provisioning

Thin provisioning helps your organization utilize storage resources more efficiently. By using the dynamic, in-line compression available in TrueNAS, you can maximize your available storage capacity.

Organizations can reduce capital expenditures on storage hardware by leveraging data-reduction features such as thin provisioning.

### Risk of Over-Allocation

While thin provisioning offers flexibility and efficiency, organizations risk over-allocating storage capacity if they do not manage it properly. It is essential for organizations to configure and monitor free space alerts in TrueNAS to avoid unexpected depletion of physical storage.

### Recommendations

When using TrueNAS to present block storage to devices that support TRIM or UNMAP functionality to reclaim disk space, organizations should create the underlying zvols as sparse volumes. This allows TrueNAS to coordinate with the guest operating system to free the underlying physical space on the storage, ensuring optimal space utilization and efficiency. Most modern operating systems and hypervisors default to this behavior, but organizations should verify it.

### Validation Examples

> Windows
Run the command `fsutil behavior query DisableDeleteNotify` in the command prompt and observe the results. If either filesystem shows that `DisableDeleteNotify` is set to 1, the TRIM functionality is disabled, and should be re-enabled.

> Linux
Run `lsblk -D` and verify that the contents of the `DISC-GRAN` and `DISC-MAX` columns are non-zero, indicating the granularity and maximum discard segment.

> VMware
Verify in the VMware UI that automatic space reclamation is enabled for your datastore.

You can also use the `esxcli` tools to confirm this by using the NAA ID of your datastore.
