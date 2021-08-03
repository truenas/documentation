---
title: "Mounting Clustered Volumes"
weight: 30
---

## Manually Mounting Volumes

{{< hint info >}}
Install the glusterfs client for your Linux distribution first, consult with your systems package documentation on specific steps to start that process.
{{< /hint >}}


To mount a volume, use the following command:

`mount -t glusterfs HOSTNAME-OR-IPADDRESS:/VOLNAME MOUNTDIR`

For example:

`mount -t glusterfs server1:/test-volume /mnt/glusterfs`


See http://gluster.org/ for additional references. 
