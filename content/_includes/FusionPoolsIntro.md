---
---

Fusion Pools are also known as ZFS allocation classes, ZFS special vdevs, and metadata vdevs (**Metadata** vdev type on the **Pool Manager** screen.).

{{< expand "What's a special VDEV?" "v" >}}
A special VDEV can store metadata such as file locations and allocation tables.
The allocations in the special class are dedicated to specific block types.
By default, this includes all metadata, the indirect blocks of user data, and any deduplication tables.
The class can also be provisioned to accept small file blocks.
This is a great use case for high-performance but smaller-sized solid-state storage.
Using a special vdev drastically speeds up random I/O and cuts the average spinning-disk I/Os needed to find and access a file by up to half.
{{< /expand >}}
