---
title: "SLOG Over-Provisioning"
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

For more general information on SLOG disks, see [SLOG Devices](https://www.truenas.com/docs/references/slog/).

{{< hint type=note >}}
Some SATA devices are limited to one resize per power cycle.
Some BIOS can block resize during boot and require a live power cycle.
{{< /hint >}}

## First Steps

For best stability and hardware compatibility, offline active SLOG SSDs before resizing for over-provisioning.

If the disk is assigned to an active pool, remove it from the pool.
ZFS permits removing and re-adding SLOG disks to an active pool at any time.

1. Go to **Storage** and locate the pool with the SLOG drive assigned. Click **Manage Devices** on the **Topology** widget to open the **Devices** screen.

{{< trueimage src="/images/SCALE/Storage/DevicesSLOG.png" alt="Devices Screen" id="Devices Screen" >}}

2. Select the target disk under **Log**. Click **Offline** on the **ZFS Info** widget. Confirm and click **Offline** in the **Offline Disk** dialog to offline the disk.

{{< trueimage src="/images/SCALE/Storage/DevicesSLOGoffline.png" alt="SLOG Offline" id="SLOG Offline" >}}

3. With the SLOG device still selected, click **Remove** on the **ZFS Info** widget. Confirm and click **Remove** in the **Remove device** dialog to remove the device from the pool.

## Resizing a Disk to Over-Provision

SCALE uses the [`storage disk resize`]({{< relref "CLIDisk.md #resize-command" >}}) command to change the size of a device. The SCALE UI does not have a UI function for this command yet.
The `storage disk resize` command supports SAS, SATA, SAT (interposer) and NVMe drives. Power cycle SATA drives before a second resize.

1. Open a shell session using an SSH connection or from the local console.

2. Enter **6** from the TrueNAS console or enter `cli` in the Linux shell and press <kbd>Enter</kbd> to access the TrueNAS CLI.
    See the [CLI Reference Guide]({{< relref "/SCALE/ScaleCLIReference/_index.md" >}}) for more information.

3. Enter {{< cli >}}storage disk query{{< /cli >}} to return a table of all disks on the system and locate the row(s) for the disk you want to resize.
   Record the **identifier**, **name**, and current **size** of the disk.

   {{< hint type=note >}}
   Unassigned disks are sometimes renamed when the system restarts. The **identifier**, in the format of `serial_lunid`, is a static value, which allows you to locate the correct disk to confirm changes after resizing.
   {{< /hint >}}

4. Enter {{< cli >}}storage disk resize disks={"name":"*sda*", "size":"*16*"}{{< /cli >}} where *sda* is the name of the disk and *16* is the new size for the disk (in gigabytes).
    If no size is specified, it reverts the provision back the full size of the device.

    The command returns the job progress completion percentage.

    ```
    storage disk resize disks={"name":"sda", "size":"16"}
    [0%] ...
    [100%] ...
    ```

5. Reboot the system.

6. Wait for the system to come online and then use the TrueNAS CLI to verify that the disk is resized to the correct capacity.
   Enter {{< cli >}}storage disk get_instance id="{serial_lunid}*A1BCDEFG234567H_1234567a1234bc12*"{{< /cli >}} where *A1BCDEFG234567H_1234567a1234bc12* is the disk identifier you recorded in step 3.

    ```
    storage disk get_instance id="{serial_lunid}A1BCDEFG234567H_1234567a1234bc12"
    +----------------+------------------------------------------------+
    |     identifier | {serial_lunid}A1BCDEFG234567H_1234567a1234bc12 |
    |           name | sds                                            |
    |      subsystem | scsi                                           |
    |         number | 16672                                          |
    |         serial | A1BCDEFG234567H                                |
    |          lunid | 1234567a1234bc12                               |
    |           size | 16013942784                                    |
    |    description |                                                |
    |   transfermode | Auto                                           |
    |     hddstandby | ALWAYS ON                                      |
    |   advpowermgmt | DISABLED                                       |
    |    togglesmart | true                                           |
    |   smartoptions |                                                |
    |     expiretime | <null>                                         |
    |       critical | <null>                                         |
    |     difference | <null>                                         |
    |  informational | <null>                                         |
    |          model | SAMSUNG_MZ7KM240HAGR-0E005                     |
    |   rotationrate | <null>                                         |
    |           type | SSD                                            |
    |       zfs_guid | 3102327624417314756                            |
    |            bus | ATA                                            |
    |        devname | sds                                            |
    |      enclosure | <dict>                                         |
    | supports_smart | <null>                                         |
    |           pool | <null>                                         |
    +----------------+------------------------------------------------+
    ```

   Confirm the target disk reports the updated size.
   Check if the reported **name** has changed.
   If so, record the new name.

7. Create a new pool or locate an existing pool on the **Storage Dashboard** and (re)assign the SLOG device to bring it online.

   {{< expand "To create a new pool with a SLOG device" "v" >}}

   a. Go to **Storage** in the TrueNAS SCALE UI and click **Create Pool** to open the **Pool Creation Wizard**.

   b. Enter a name for the Pool and create at least one **Data** storage VDEV that fits your use case requirements.

   c. Click **Log** and select a **Layout**.

   d. Click **Manual Disk Selection** to open the **Manual Selection** dialog, click **Add** to add a VDEV, and search by name or serial number to locate the resized SLOG disk.

   e. Drag and drop the disk to the VDEV and click **Save Selection**.

   f. Add any other optional VDEVs as needed for your storage and performance requirements.

   e. Click **Create Pool**.

   See [Create Pool]({{< relref "/SCALE/scaletutorials/storage/createpoolwizard.md" >}}) for more information on using the **Pool Creation Wizard**.

   {{< /expand >}}

   {{< expand "To (re)assign the SLOG device to an existing pool" "v" >}}

   a. Go to **Storage** in the TrueNAS SCALE UI, locate the pool that you want to assign the SLOG device to and click **Manage Devices** on the **Topology** widget to open the **Devices** screen.

   b. Click **Add VDEV** to open the **Add Vdevs to Pool** screen.

   c. Click **Log** and select a **Layout**.

   d. Click **Manual Disk Selection** to open the **Manual Selection** dialog, click **Add** to add a VDEV, and search by name or serial number to locate the resized SLOG disk.

   e. Drag and drop the disk to the VDEV and click **Save Selection**.

   f. Go to **Review** and click **Update Pool**

       See [Managing Pools]({{< relref "/SCALE/scaletutorials/storage/managepoolsscale.md" >}}) for more information on using **Add Vdevs to Pool**.

   {{< /expand >}}
