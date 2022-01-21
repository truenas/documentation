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

If you are not able to mount the volume for some reason and want to debug further check -  /var/log/glusterfs/mnt-mountdir.log. In this case /var/log/glusterfs/mnt-glusterfs.log
See http://gluster.org/ for additional references. 
