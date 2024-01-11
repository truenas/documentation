---
title: "SLOG Over-Provision"
description: "Provides information on the disk_resize command in TrueNAS SCALE."
weight: 30
aliases:
 - /scale/scaletutorials/storage/pools/slogoverprovisionscale/
tags:
 - disks
 - pools
---

Over-provisioning SLOG SSDs is useful for different scenarios.
The most useful benefit of over-provisioning is greatly extending SSD life.
Over-provisioning an SSD distributes the total number of writes and erases across more flash blocks on the drive.

Seagate provides a thoughtful investigation into over-provisioning SSDs here:
https://www.seagate.com/blog/ssd-over-provisioning-benefits-master-ti/.

{{< hint type=note >}}
Some SATA devices are limited to one resize per power cycle.
Some BIOS can block resize during boot and require a live power cycle.
{{< /hint >}}

## First Steps

For best stability and hardware compatibility, offline SLOG SSDs before resizing for over-provisioning.

If the disk is assigned to an active pool, remove it from the pool before resizing.
ZFS permits removing and re-adding SLOG disks to an active pool at any time.

## Resizing a Disk for Over-Provisioning

SCALE uses the [`storage disk resize`]({{< relref "CLIDisk.md #resize-command" >}}) command to change the size of a device. The SCALE UI does not have a UI function for this command yet.
The `storage disk resize` command supports SAS, SATA, SAT (interposer) and NVMe drives. Power cycle SATA drives before a second resize.

To resize a disk:
1) Open a shell session using an SSH connection or from the local console.

2) Select option **6) Open TrueNAS CLI Shell** from the TrueNAS console or enter `cli` in the Linux shell to access the TrueNAS CLI.
    See the [CLI Reference Guide]({{< relref "/SCALE/ScaleCLIReference/_index.md" >}}) for more information.

3) Enter {{< cli >}}storage disk resize disks={"name":"*sda*", "size":"*32*"}{{< /cli >}} where *sda* is the name of the disk and *32* is the new size for the disk (in gigabytes).
    If no size is specified, it reverts the provision back the full size of the device.

    The command returns the job progress completion percentage.

    ```
    storage disk resize disks={"name":"sda", "size":"32"}
    [0%] ...
    [100%] ...
    ```

4) Verify the disk is resized to the correct capacity.
   Enter {{< cli >}}storage disk query{{< /cli >}} to see a table of all disks on the system or click **Disks** on the **Storage Dashboard** screen in the UI.
   Confirm the target disk reports the new size as expected.

5) Locate the pool on the **Storage Dashboard** and click **Manage Devices** on <!-- Need to confirm reattach process /--> reassign the SLOG to the pool and bring it back online.
