---
title: "Replacing Disks"
linkTitle: "Replacing Disks"
description: "How to replace failing disks in TrueNAS"
type: docs
---

## Process Summary

* When replacing a disk that is allocated to an encrypted pool, create a passphrase and back up the encryption key before starting disk replacement.
* Go to Storage > Pools. Open the “Settings” menu for the desired pool (gear icon) and click Status
* Find the disk to replace
  * Open the disk Options menu and Offline the disk. This removes the device from the pool and prevents swap issues.
  * If offline fails with “disk offline failed - no valid replicas” message, scrub the pool and try again.
    * Scrub: Storage > Pools > Pool Settings
    * Pool scrubbing can be configured to run on a schedule.
  * When the disk shows as OFFLINE, physically remove the disk from the system.
  * When the disk has not completely failed, it can be replaced without offlining. This is not recommended unless the exact condition of the disk is known. Attempting to replace a heavily degraded disk without offlining it first can result in a significantly slower replacement process.
* Open the disk options and click **Replace**.
  * Choose the replacement disk
    * Replacement disk must have the same or greater storage capacity.
    * Replacement will fail if the replacement disk has existing partitions or data. Forcing the replacement destroys any data on the replacement disk.
  * When the pool is encrypted, enter the passphrase.
  * Replacing a disk triggers a pool resilver
    * This can take a long time for pools with large amounts of data stored.

## Replacing Disks

Detailed article goes here.