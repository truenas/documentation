---
title: "SLOG"
description: "How to best configure your ZFS Intent Log"
tags: ["ZFS"]
---

To improve read performance, ZFS utilizes system memory as an Adaptive Replacement Cache (ARC), which stores your file system’s 
most frequently and recently used data in your system memory. You can then add a Level 2 Adaptive Replacement Cache (L2ARC) to extend the ARC to a 
dedicated disk (or disks) to dramatically improve read speeds, effectively giving the user all-flash performance.  OpenZFS also includes something called the ZFS Intent Log (ZIL). The ZIL can be set up on a dedicated disk called a Separate Intent Log (SLOG) similar to the L2ARC, but it is not simply a performance boosting technology. 

ZIL is more accurately referred to as a “log” whose main purpose is actually for data integrity. 
It exists to keep track of in-progress, synchronous write operations so they can be completed or rolled back after a system crash or power failure. 
Standard caching generally utilizes system memory and data is lost in those scenarios. The ZIL prevents that.

ZIL does not handle asynchronous writes by default. Those simply go through system memory like they would on any standard caching system. 
This means that the ZIL only works out of the box in select use cases, like database storage or virtualization over NFS. OpenZFS does allow a workaround 
if you decide to opt for the extra level of data integrity in your asynchronous writes, by switching from **“sync=standard”** to **“sync=always”** mode, 
but that must be manually configured via pool options.

## Use Cases 

Database applications, NFS environments, particularly for virtualization, as well as backups are known use cases with heavy synchronous writes.  Utilizing a SLOG for your ZIL will provide benefit.

## ZIL Configuration

ZIL, in and of itself, does not improve performance. The ZIL sits in your existing data pool by default, usually comprised of spinning disks, to log synchronous writes before being periodically flushed to their final location in storage. This means that your synchronous writes are not only operating at the speed of your storage pool, but have to be written to pool twice, sometimes more depending on your level of disk redundancy.

What is needed for performance improvement is a dedicated SLOG, like a low-latency SSD or other similar device, so your ZIL-based writes will not be limited by your pool IOPS or subject to RAID penalties you face with additional parity disk writes. OpenZFS also allows for the SLOG to be mirrored, which can protect against performance degradation and avoid any data loss during a device failure.

## Creating a Pool with SLOG

Go to **Storage > Pools > ADD > CREATE POOL**.  Select two hard drives from your available disks and add them to *Data Vdevs* (or however many drives you need for your requirements).  From the **ADD VDEV** dropdown menu select *Log*. 

<br><br>
<img src="/images/slog1.png">
<br><br>

From the *Available Disks* section, select an SSD (or two if a mirrored configuration is desired) and add to *Log Vdev* then click **CREATE**.  Check the *Confirm* box and click **CREATE POOL**.

<br><br>
<img src="/images/slog2.png">
<br><br>

{{% pageinfo %}}
If a mirrored SLOG configuration is desired, the drives must be the same size as mixing disks of different sizes in a vdev is not allowed.
{{% /pageinfo %}}

It is a wise practice to check the *Status* of a pool after it has successfully been created. Select <i class="fas fa-cog" aria-hidden="true" title="Settings"></i>&nbsp (pool Operations) to the right of the pool you just created and choose **Status**.  This will take you to the *Pool Status* page.  Verify your configuration contains the hard drives in their appropriate format (Mirror, Raid-z, Raid-z2 etc.) and the Log drives are present and configured properly (Stripe, Mirror etc.).

<br><br>
<img src="/images/slog3.png">
<br><br>

## Adding SLOG Drives to an Existing Pool

Go to **Storage > Pools** and select <i class="fas fa-cog" aria-hidden="true" title="Settings"></i>&nbsp to the right of the pool you wish to add an additional cached drive.  From the menu, select *Add Vdevs*.  Access the **ADD VDEV** dropdown menu and select *Log*.  Select an SSD (or two for a mirrored SLOG configuration) and add to *Log Vdev* then click **ADD VDEVS**.  Check the *Confirm* box and click **ADD VDEVS**.

<br><br>
<img src="/images/slog6.png">
<br><br>

## Pool Sync Options

Even with a dedicated SLOG, you will not enjoy performance improvements out of the box on asynchronous writes, as they do not utilize the ZIL by default.  To change Pool Sync Options, go to **Storage->Pools**, and click <i class="fas fa-ellipsis-v" aria-hidden="true" title="Options"></i>&nbsp; for the pool you created. Select *Edit Options* from the drop down.  Under **Sync** choose *Always* from the options available and click **SAVE**.

<br><br>
<img src="/images/slog4.png">
<br><br>

<br><br>
<img src="/images/slog5.png">
<br><br>

OpenZFS provides powerful tools to give your FreeNAS & TrueNAS storage blazing performance with the cost of spinning disk storage. It allows you to add multiple levels of protection and disk redundancy to keep your data safe from corruption and loss.

**References**:

https://www.ixsystems.com/blog/o-slog-not-slog-best-configure-zfs-intent-log/
