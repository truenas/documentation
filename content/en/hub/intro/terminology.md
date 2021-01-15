---
title: "Glossary"
weight: 15
---

TrueNAS is very complicated software that combines many different Open Source solutions into one cohesive software package.
While TrueNAS is designed for and ever-evolving towards increased user friendliness, there are many terms and concepts that can be learned to improve your ability to understand and configure the software.

## General Concepts

* Operating System (OS):
* Open Source:
* Network Attach Storage (NAS):
* Storage Area Network (SAN):
* Software as a Service (SaaS):
* Storage:
* File System:
* Networking:
* Sharing:
* Virtualization:
* Encryption:

## Accounts Terminology

* Group:
* User:
* `root` User:

## Storage Terminology

* Block Device:
* Self-Encrypting Drive (SED): 
* [Zettabyte File System (ZFS)](/hub/additional-topics/reference/zfs-references/):

### ZFS

[L2ARC](/hub/additional-topics/reference/l2arcreference/): An L2ARC is sometimes called a CACHE vdev. This is a special class of vdev. ARC stands for Adaptive Replacement Cache and is a caching algorithm that tracks both the blocks in cache and blocks recently evicted from cache. The main ARC resides in system memory. The L2ARC is 2nd layer ARC assigned to a disk to expand ARC capability.

[ZFS Datasets](/hub/initial-setup/storage/datasets/): A ZFS dataset is similar to a conventional mounted filesystem. It appears in casual inspection as "just another folder". However, unlike conventional mounted filesystems, each ZFS dataset has its own set of properties.

[ZFS Pools](/hub/initial-setup/storage/pools/): A pool is a filesystem container that is composed of one or more vdevs.

[ZFS vdev](/hub/additional-topics/reference/zfs-references/): ZFS virtual device. A ZFS pool is made up by one or more vdevs. A vdev can be created using a single disk or many. A vdev has many configurations: single disk, stripe, RAIDz1, RAIDz2, RAIDz3, or mirror.

[ZFS zvols](/hub/initial-setup/storage/zvols/): A zvol is a dataset that represents a block device.


[ZIL](http://www.freenas.org/blog/zfs-zil-and-slog-demystified/)
A ZIL or ZFS Intent Log, is a special class of vdev.  This is also sometimes refered to as a SLOG or Separate Intent Log.


[Fusion Pool](/hub/initial-setup/storage/fusion-pool/)
A fusion Pool or metadata vdev is a special class of vdev.  This special vdev can store meta data such as file locations and allocation tables. Using a special vdev will drastically speed up random I/O and can cut the average number of spinning-disk I/Os needed to find and access a file by up to half.


[ZFS Snapshots](/hub/initial-setup/storage/zfs-snapshots/)
A snapshot is a read-only copy of a file system or volume.
When a snapshot of a dataset is made, ZFS records the timestamp of when the snapshot was made. No data is copied and no extra storage is consumed.  Only when changes occur in the filesystem and the data in it diverges from the snapshot does the snapshot start using additional storage. 


[ZFS Scrub](/hub/tasks/scheduled/scrub/)
A Scrub is the process that ZFS uses to verify the data on disk.  All of the data is read and checked against the computed checksums to verify that no corruption has occured.


[ZFS Resilver](/hub/tasks/scheduled/resilver/)
A Resilver is the process when a disk in a zfs pool has been replaced and ZFS reconstructs the data on the replaced disk.


[ZFS Replication](/hub/tasks/scheduled/replication/)
Replication is a process by which a ZFS dataset can be copied to another dataset.  The receiving dataset can be on the same machine or on another machine in a remote location.
Repliation works with snapshots so only the changes to the stored data need to be sent to the receiving dataset.


[Cloud Sync](h/hub/tasks/scheduled/cloudsync/)
A Cloud Sync is when TrueNAS is configured to send, receive, or synchronize data with a Cloud Storage provider like Amazon S3, Google Cloud, and Microsft Azure.

## Networking Terminology

* Certificate Authority (CA):
* Certificate:
* Virtual Private Network (VPN):
* Interface:
* Default Route:
* Nameserver:
* Domain Name Server:
* IP Address:
* Hostname:















