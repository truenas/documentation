---
title: "Disk Replacement"
weight: 20
aliases: /core/storage/disks/diskreplace/
---

{{< toc >}}

Hard drives or solid-state drives (SSDs) have a finite lifetime and can fail unexpectedly.
When a disk fails in a Stripe (RAID0) pool, the entire pool has to be recreated and all data restored from backups.
Creating non-stripe storage pools that have disk redundancy is always recommended.

To prevent further loss of redundancy or eventual data loss, always replace a failed disk as soon as possible!
TrueNAS integrates new disks into a pool to restore the pool back to full functionality.

## Replacing a Disk

Another disk of the same or greater capacity is required to replace a failed disk.
This disk must be installed in the TrueNAS system and not part of an existing storage pool.
Any data on the replacement disk is wiped as part of the process.

The TrueNAS **Dashboard** shows when a disk failure degrades a pool.

![DashboardPoolDegraded](/images/CORE/12.0/DashboardPoolDegraded.png "Degraded Pool on the Dashboard")

Click the <i class="material-icons" aria-hidden="true" title="Settings">settings</i> on the pool card to go to the **Storage > Pools > Pool Status** screen and locate the failed disk.

### Offline the Failed Disk

Clicking <i class="material-icons" aria-hidden="true" title="Options">more_vert</i> for the failed disk shows additional operations.

![StoragePoolsStatusDiskFailedOptions](/images/CORE/12.0/StoragePoolsStatusDiskFailedOptions.png "Options for a Failed Disk")

We recommend you *offline* the disk before starting the replacement. 
This removes the device from the pool and can prevent swap issues. To offline a disk:

Go to **Storage > Pools** screen. 

Click on the <i class="material-icons" aria-hidden="true" title="Settings">settings</i> settings icon, and then select **Pool Status** to display the list of disks in the pools.

Click the <span class="material-icons">chevron_right</span> icon for the disk you plan to remove, and then select **Offline**.

Select **Confirm** to activate the **OFFLINE** button, then click **OFFLINE**. The disk should now be offline.

{{< expand "Can I use a disk that is failing but still active?" "v" >}}
There are some situations where a disk that has not completely failed can be left online to provide additional redundancy during the replacement procedure.
We don't recommend leaving failed disks online unless you know the exact condition of the failing disk!
Attempting to replace a heavily degraded disk without off-lining it first results in a significantly slower replacement process.
{{< /expand >}}

{{< expand "The offline failed?" "v" >}}
If the offline operation fails with a **Disk offline failed - no valid replicas** message, go to **Storage > Pools**, click the <i class="material-icons" aria-hidden="true" title="Settings">settings</i> for the degraded pool, and select **Scrub Pool**.
When the scrub operation finishes, reopen the pool **Status** and try to offline the disk again.
{{< /expand >}}

When the disk status shows as **Offline**, physically remove the disk from the system.

![StoragePoolsStatusOffline](/images/CORE/12.0/StoragePoolsStatusOffline.png "Disk Offline Status")

If the replacement disk is not already physically added to the system, add it now.

### Online the New Disk

In the **Pool Status**, open the options for the offline disk and click **Replace**

![StoragePoolsStatusDiskReplace](/images/CORE/12.0/StoragePoolsStatusDiskReplace.png "Disk Replace Options")

Select a new member disk and click **Replace Disk**.
The new disk must have the same or greater capacity as the disk you are replacing.
The replacement fails when the chosen disk has partitions or data present.
To destroy any data on the replacement disk and allow the replacement to continue, set the **Force** option.

When the disk wipe completes and TrueNAS starts replacing the failed disk, the **Pool Status** changes to show the in-progress replacement.

![Storage Pools Status Replace Start](/images/CORE/12.0/StoragePoolsStatusReplaceStart.png "Disk Replacement Started")

TrueNAS resilvers the pool during the replacement process.
For pools with large amounts of data, this can take a long time.
When the resilver is complete, the pool status screen updates to show the new disk and the pool status returns to **Online**.

![Storage Pools Status Replace Complete](/images/CORE/12.0/StoragePoolsStatusReplaceComplete.png "Replacement Complete")

## CLI Method

{{< hint warning >}}
CLI commands are meant for advanced users and, when improperly applied, can result in serious system instability or production down scenarios.
Please use CLI commands carefully and **always back up critical data** before attempting this kind of procedure.
{{< /hint >}}

1. On a system with 13.0-RELEASE installed, access the TrueNAS shell either by logging in to the web interface and clicking **Shell** or accessing the CLI remotely using [SSH]({{< relref "ConfiguringSSH.md" >}}).
2. Find the pool and disk to replace:
   - `zpool list` shows the name of the pools on the system.
   - `zpool status <pool name>` shows the specific pool and disk state for the pool. Replace *<pool name>* with the name of your specific pool.
   - copy or note the `gptid/####` identifier for the disk to replace.
   - Example:
     ```
	  root@examplemini[~]# zpool list
	  NAME	SIZE	ALLOC	FREE	CKPOINT	EXPANDSZ	FRAG	CAP	DEDUP	HEALTH
	  tank	2.72T	444K	2.72T	      -	       -	  0%	 0%	1.00x	ONLINE
	  root@examplemini[~]# zpool status tank
	    pool: tank
	   state: ONLINE
	  config:
	  
		NAME											STATE	READ	WRITE	CKS
	 UM
		tank											ONLINE	   0	    0
	 0
		  mirror-0										ONLINE	   0	    0
	 0
			gptid/c7a10e6d-ca3d-11ec-8ec6-d05099c356a4					ONLINE	   0	    0
	 0
			gptid/c7acbd9e-ca3d-11ec-8ec6-d05099c356a4					ONLINE	   0	    0
	 0
	
	 errors: No known data errors
     ```
3. `curl -s https://raw.githubusercontent.com/truenas/gist/main/replace_disk.py -o replace_disk.py` downloads the disk replacement tool.
4. `python3 replace_disk.py <pool_name> <gptid/####> <ada#>` replaces the named disk in the pool with the designated spare. Replace *<pool_name>* with the name of the pool with the disk to be replaced, *<gptid/####>* with the disk identifier noted above in step 2, and *<ada#>* with the name of the unused disk to use as the replacement.
   Example:
   ```
   root@examplemini[~]# python3 replace_disk.py disk gptid/c7acbd9e-ca3d-11ec-8ec6-d05099c356a4 ada3
   Replace initiated.
   root@examplemini[~]#zpool status tank
   	    pool: tank
	   state: ONLINE
	    scan: resilvered 13.0M in 00:00:01 with 0 errors on Thu May 19 14:12:21 2022
	  config:
	  
		NAME											STATE	READ	WRITE	CKS
	UM
		tank											ONLINE	   0	    0
	0
		  mirror-0										ONLINE	   0	    0
	0
			gptid/c7a10e6d-ca3d-11ec-8ec6-d05099c356a4					ONLINE	   0	    0
	0
			gptid/5e10e97f-d7b8-11ec-889a-d05099c356a4					ONLINE	   0	    0
	0
	
	errors: No known data errors
	root@examplemini[~]#
   ```
