---
title: "Thin Provisioning"
description: "Provides general information on Thin Provisioning and zvol creation, their uses cases and implementation in TrueNAS."
weight: 60
tags:
 - sparse
 - zvols
 - thin provisioning
---

**Thin Provisioning**

Thin provisioning is a storage management technique used to optimize storage utilization and efficiency. It allows administrators to allocate storage capacity dynamically, on an as-needed basis, rather than allocating it all upfront.

### How Does Thin Provisioning Work?

Traditional “thick” storage allocation involves dedicating a specific amount of physical storage space for each zvol upfront, regardless of whether that space is immediately used. This can lead to inefficient use of storage resources and increased costs.

Thin provisioning, on the other hand, enables administrators to allocate storage space virtually, without immediately assigning physical storage. When a new zvol is created, it is assigned a size limit, but physical storage is only consumed as data is actually written to the volume. This allows for more flexible and efficient use of storage resources.

### Enabling Thin Provisioning

When creating zvols in TrueNAS, select to create the zvol as Sparse.

{{< trueimage src="/images/Reference/SparseZvolScreencap.png" alt="Zvol Sparse Setting" id="Zvol Sparse Setting" >}}

Once a zvol has been created, the Sparse option cannot be changed through the GUI; the zvol must be recreated.

### Benefits of Thin Provisioning

Thin provisioning helps your organization utilize storage resources more efficiently. By using the dynamic, in-line compression available in TrueNAS, you can maximize your available storage capacity.

By leveraging data-reduction features such as thin provisioning, organizations can reduce their capital expenditures on storage hardware.

### Risk of Overallocation

While thin provisioning offers flexibility and efficiency, there is a risk of over-allocating storage capacity if not managed properly. Configuring and monitoring free space alerts in TrueNAS is essential to avoid running out of physical storage unexpectedly.

### Recommendations

When using TrueNAS to present block storage to devices that support TRIM or UNMAP functionality to reclaim disk space, the underlying zvols should be created as Sparse volumes. This will allow TrueNAS to coordinate the guest operating system to free the underlying physical space on the storage, allowing for optimal space utilization and efficiency. This behavior is the default in most modern operating systems and hypervisors, but should be validated.

Validation Examples

> Windows
Using the command prompt, run the command `fsutil behavior query DisableDeleteNotify` and observe the results. If either filesystem shows that DisableDeleteNotify is set to 1, the TRIM functionality is disabled, and should be re-enabled.

> Linux
Run `lsblk -D` and verify that the contents of the `DISC-GRAN` and `DISC-MAX` columns are non-zero, indicating the granularity and maximum discard segment.

> VMware
Check in the VMware UI for your datastore to confirm that Automatic Space Reclamation is enabled.
[Add screenshot]

You may also use the `esxcli` tools to confirm this using your datastore’s NAA ID.