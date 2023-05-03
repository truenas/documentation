---
title: "Veeam"
description: "Guide for deploying TrueNAS CORE systems as a Veeam backup solution."
weight: 40
aliases:
  - /core/solutions/integrations/veeam/
  - /core/solutions/integrations/veeam/tnrecommendationsforveeam/
---
<div style="text-align:center;">

![TrueNASVeeamReady](/images/Veeam/TrueNASVeeamReadyLogo.png "TrueNAS is Veeam Ready")

</div>

{{< toc >}}

TrueNAS Unified Storage appliances are certified Veeam Ready and can be used to handle demanding backup requirements for file and VM backup.
These certification tests measure the speed and effectiveness of the data storage repository using a testing methodology defined by Veeam for Full Backups, Full Restores, Synthetic Full Backups, and Instant VM Recovery from within the Veeam Backup & Replication environment.
With the ability to seamlessly scale to petabytes of raw capacity, high-performance networking and cache, and all-flash options, TrueNAS appliances are the ideal choice for Veeam Backup & Replication repositories large and small.

{{< expand "Certified Hardware" "v" >}}
These TrueNAS products are certified by Veeam:

![VeeamReadyTrueNASProducts](/images/Veeam/VeeamReadyiX.png "TrueNAS Products that are Veeam Ready")
{{< /expand >}}

This article discusses some of the best practices when deploying TrueNAS with Veeam, specific considerations users must be aware of, and some tips to help with performance.
The focus is on capabilities native to TrueNAS, and users are encouraged to also review relevant Veeam documentation, such as their [help center](https://www.veeam.com/documentation-guides-datasheets.html) and [best practices](https://bp.veeam.com/vbr) for more information about using and optimizing Veeam.

## What is Needed?

When deploying TrueNAS with Veeam users should prepare the following:

* Veeam Backup & Replication dedicated server - either physical or VM
* Windows Server and Microsoft SQL for Veeam
* TrueNAS appliance with users pre-configured as determined by the admin
* Networking - 1/10/40/100GbE infrastructure and cables
* Veeam connected to the Hypervisor or other clients to pull the data to TrueNAS
* All appropriate licenses
* Backup proxies as defined by Veeam - they can be virtual machines or physical machines or the backup server itself for low workloads

[Update the TrueNAS systems]({{< relref "CORE/CORETutorials/UpdatingTrueNAS/UpdatingCORE.md" >}}) to the latest version before beginning deployment.

This ensures the appliance has the latest bug fixes, security updates and software enhancements to ensure maximum performance and security.
If deploying on a closed network (LAN) without access to the Internet, users can also obtain and apply an update manually.
For assistance, please contact TrueNAS support.

{{< expand "Contacting iXsystems Support" "v" >}}
{{< include file="content/_includes/iXsystemsSupportContact.md" type="page" >}}
{{< /expand >}}

## Sizing Considerations

TrueNAS storage appliances range from entry-level to high-end, and the user’s current usage scenario and 
backup demands must be considered.

{{< tabs "Considerations" >}}
{{< tab "Define Your Storage Usage" >}}

While this guide focuses on Veeam, the unified design of TrueNAS allows it to multitask.
If TrueNAS is handling more than backup jobs, other usage needs should be taken into account.
For example, if the storage appliance has one LUN (dataset or zvol) set as a VMware datastore for hosting VMs, and another LUN set to be used for backups, both capacities must be considered.

{{< /tab >}}
{{< tab "Estimate Capacity" >}}

The first step when estimating required capacity is to understand how much capacity is currently used by existing VMs and by files that users need to back up.
Veeam and the TrueNAS appliance both apply data compression, though different file types and the structure of the data in those files affect the achieved compression levels.
Some tools for capacity estimation are listed at the end of this section, but it is always good to err on the side of caution and 3x the current storage used is not unreasonable.
ZFS performs best with utilization below 80%.
Snapshots, full backups, and incremental backups all require more storage than primary storage being used today.

{{< /tab >}}
{{< tab "Estimate Network Bandwidth" >}}

Bandwidth is harder to estimate and must take into account backup timeframes, backup sizes, and available network resources.
Typically, backups run during off-hours when IT equipment is under a lighter load.
This timeframe can be set, but if each backup is several terabytes in size, a longer amount of time and greater bandwidth is required.
iXsystems tests its Veeam backups using a 10 GbE mixed network with the datastore storage, hypervisor hosts, and backup repository (the TrueNAS) on the same network.
However, shorter backup windows, heavy network usage, and dozens of VMs being backed up at the same time may require 40 or 100 GbE networking and multiple Veeam Backup Proxies used in tandem.

For example, consider a scenario of backing up 1000 VMs (each 100 GB in size) with a backup window of 8 hours.
This requires around 5 virtual Proxy servers with 8 vCores (16 GB memory each) and around 3.7 GB/s of throughput.
In such a scenario, iXsystems would recommend 100 GbE interconnect and TrueNAS appliances with over 100+ hard drives.
However, bandwidth can be greatly reduced if users can accept incremental and staggered backups.
For example, run an incremental backup on all VMs each day, and a full backup on 100 VMs per night, rotating a different 100 VMs each night.
This strategy provides a 5X increase to the  maximum number of VMs and reduces costs by 75%.
{{< /tab >}}
{{< tab "Choose a TrueNAS model" >}}

TrueNAS systems are excellent for backup and archiving, but must be sized correctly.
Recommended sizing:

{{< truetable >}}
| Model | Backup Only? | Number of VMs Backed Up | Network Max | Usable Capacity |
|-------|--------------|-------------------------|-------------|-----------------|
| TrueNAS X10 | Yes | 6800 | 10 GbE | 340 TB |
| TrueNAS X20 | Yes | 13600 | 10 GbE | 680 TB |
| TrueNAS M40 | No | 29400 | 40 GbE | 1.47 PB |
| TrueNAS M50 | No | 151800 | 100 GbE | 7.59 PB |
| TrueNAS M60 | No | 303600 | 100 GbE | 15.8 PB |
{{< /truetable >}}

* `Backup Only?` assumes that the storage is being used only as a backup repository.
  This can be understood as a recommendation, not a rule.
  The number of VMs is based upon conservative throughput estimates with an average VM size set as 100GB and a backup window of 8 hours running full backups.
  All other requirements for the number of Veeam Backup Proxies, and networking dependencies also apply.
* `Number of VMs Backed Up`: Numbers are based on max capacity and estimating 100GB per VM and a 2:1 optimal compression ratio.
  Compression and Deduplication settings can radically change the estimates, and Veeam allows for fine tuning.


{{< /tab >}}
{{< tab "Configure the Pools, Datasets, and Zvols" >}}

For high-capacity deployments, iXsystems recommends 9+2+1 RAID groups (called “Virtual Devices” or “vdevs” by ZFS terminology).
This configuration consists of a RAIDZ2 (similar to RAID 6 with 2 drive parity so 2 drives can fail without data loss) with one to two global hot-spares added to the pool.
Pools can include several of these groups, so the capacity can be expanded as needed.
For example, 390 TB of usable space with 12 TB drives requires four groups and 48 drives.
Detailed configurations can be discussed with iXsystems sales representatives and engineers.

{{< /tab >}}
{{< tab "Storage Lifecycle Planning" >}}

TrueNAS storage pools can be expanded online to the maximum size supported by 
a particular TrueNAS system. Storage pools can be expanded one vdev (RAID group) at a time so long as each 
vdev shares the same type. When deploying an iSCSI share requiring a zvol (LUN), users should consider thin 
provisioning using the [sparse option](https://www.truenas.com/docs/core/storage/pools/zvols/#options) during setup.

{{< /tab >}}
{{< /tabs >}}

In addition to the above considerations, there are many tools, forums, and other discussion groups to help verify 
the amount of storage needed for Veeam backup. In many sites, Veeam compression or deduplication is around 
1.5x to 2x, but this is more a reference than a rule. Backup types, applications, and the diversity of VMs can all 
factor into the true amount of storage needed. Capacity must also be considered alongside desired performance, 
as a smaller quantity of large drives often does not yield the same performance as a larger number of small drives. 
For rough calculations, additional resources are listed below.

* [Veeam Backup Capacity Calculator](https://calculator.veeam.com/)
* [Sizing from Veeam Best Practices](https://bp.veeam.com/vbr/VBP/3_Build_structures/B_Veeam_Components/B_VBR_Server/Backup_Server.html)
* [Veeam Size Estimation Tool](https://vse.veeambp.com/)
* [3rd Party Bandwidth Calculator](http://rps.dewin.me/bandwidth/)

## Advantages

TrueNAS is a robust, unified storage system well-suited for nearly any environment.
For backups, the platform takes advantage of the data integrity offered by ZFS that includes features such as copy-on-write, 
snapshots, and checksums that prevent bit-rot.
TrueNAS appliances can also be expanded at any time simply by adding more drives so datasets can grow to keep pace with your data.
Here are additional key features that are offered out-of-the-box at no extra cost to the user:

* **Self-healing file system**: ZFS places data integrity first with data scrubs and checksums to ensure files are saved 
correctly and preserved.
* **Native replication to TrueNAS systems**: perfect for disaster recovery and compliance.
* **High-availability (HA) architecture with 99.999% availability**: Ensure the system is always ready to receive the latest backups.
* **Triple-parity**: RAID groups (vdevs) can be configured with mirror, single-parity (RAIDZ), dual-parity (RAIDZ2), or triple-parity (RAIDZ3) levels, while copy-on-write, checksums, and data scrubbing help protect long-term data integrity.
* **Certified with VMware® and Citrix® XenServer®**: TrueNAS can be both a hypervisor datastore and a backup repository with data on different datasets and even pools.
  Just be mindful of the scale of the workloads being run.
* **Unrivaled scalability in a single dataset**: Scale the backup repository from terabytes to petabytes of usable capacity.
  No LUN limits, clustering or licenses needed.

## Setting Up TrueNAS as a Veeam Repository

Veeam Backup & Replication runs on a Windows operating system, typically Windows Server 2012 or newer, and can connect to a variety of storage systems.
iXsystems recommends using [iSCSI]({{< relref "CORE/CORETutorials/Sharing/iSCSI/_index.md" >}}) with a [Veeam scale-out repository](https://bp.veeam.com/vbr/VBP/3_Build_structures/B_Veeam_Components/B_backup_repositories/scaleout.html) architecture.
Users can also use [SMB]({{< relref "CORE/CORETutorials/Sharing/SMB/_index.md" >}}) to mount the volume to the backup server directly.
With support for SMB/CIFS, NFS, AFP, iSCSI, and FC, TrueNAS offers many ways to connect to Veeam backup servers.

![VeeamBackupRepository](/images/Veeam/VeeamBackupRepository.png "Configuring Veeam Backup Repository")

## Performance Tuning for Veeam Backup & Replication

**Test environment:**

* A 2TB datastore must be configured on TrueNAS System 1 utilizing the iSCSI wizard using default values.  This is the backup source.
* A 2TB datastore must be configured on TrueNAS System 2 utilizing the iSCSI wizard using default values.  This is the backup target. 
* Connect the source datastore to the Hypervisor.
* Ensure the NFS ISO datastore is mounted. 
* A 64-bit Microsoft Windows Server 2019 Standard VM should be constructed for Veaam Backup & Replication Server. 
* Install VMware guest additions.
* Configure STATIC IP for Windows Server 2019 VM.
* Connect storage to the Veeam VM
* Install Veeam software on Veeam Backup & Replication Server.

![VeeamXSeriesTestEnvironment](/images/Veeam/VeeamXSeriesTestEnv.png "X-Series Test Environment")

Using a Scale-out Backup Repository, users can link multiple backup repositories (Extents) together to help with performance and load balancing across the various repositories.
In the topology above, the TrueNAS is broken across four LUNs to act as the scale-out extents.
Both the FreeNAS datastore and the TrueNAS backup only used one 10GbE link when connecting to the VMware server pool.

{{< hint type=note >}}
Scale-out Backup Repository is only available in Veeam Backup & Replication 9.5 Enterprise and Enterprise Plus editions.
{{< /hint >}}

**Results**

Testing in this configuration with a backup server and backup proxy, Windows Server 2019 Standard VMs, yielded excellent results with the TrueNAS R-Series platform.
iXsystems reference numbers can be seen below.
These were achieved with just a single Veeam Backup Server and a Veeam Backup Proxy Server.
For more demanding workloads, results can be scaled by adding more VMs to act as the Veeam Backup Proxy.

| Test | Time Limit | TrueNAS Time | 
|------|------------|--------------|
| Full Backup | 30:00 Minutes | 27:41 Minutes | 
| Full Restore | 25:00 Minutes | 16:48 Minutes | 
| Synthetic Full Backup | 50:00 Minutes | 37:18 Minutes |
