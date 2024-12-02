---
title: "Veeam"
description: "Guide for deploying TrueNAS systems as a Veeam backup solution."
weight: 40
aliases:
  - /core/solutions/integrations/veeam/
  - /core/solutions/integrations/veeam/tnrecommendationsforveeam/
  - /scale/scaletutorials/communityrecommends/hardened-backup-repository-for-veeam/
  - /scale/communityrecommends/hardened-backup-repository-for-veeam/
---
<div style="text-align:center;">

![TrueNASVeeamReady](/images/Veeam/TrueNASVeeamReadyLogo.png "TrueNAS is Veeam Ready")

</div>

TrueNAS Unified Storage appliances are certified Veeam-ready and can be used to handle demanding backup requirements for file and VM backup.
These certification tests measure the speed and effectiveness of the data storage repository using a testing methodology defined by Veeam for full backups, full restores, synthetic full backups, and instant VM recovery from within the Veeam Backup & Replication environment.
With the ability to seamlessly scale to petabytes of raw capacity, high-performance networking and cache, and all-flash options, TrueNAS appliances are the ideal choice for large and small Veeam Backup & Replication repositories.

{{< expand "Certified Hardware" "v" >}}
These TrueNAS products are certified by Veeam:

![VeeamReadyTrueNASProducts](/images/Veeam/VeeamReadyiX.png "TrueNAS Products that are Veeam Ready")

For more information, refer to the [Veeam Ready list](https://www.veeam.com/alliance-partner-integrations-qualifications.html?alliancePartner=ixsystems) filtered for iXsystems.
{{< /expand >}}

This article discusses some of the best practices when deploying TrueNAS with Veeam, the specific considerations users must be aware of, and some tips to help with performance.
The focus is on capabilities native to TrueNAS.
Fore more information on using and optimizing Veeam deployments, users are encouraged to also review relevant Veeam documentation such as what is found in the [Veeam help center](https://www.veeam.com/documentation-guides-datasheets.html) and [Veeam best practices](https://bp.veeam.com/vbr) articles.

## What is Needed?

When deploying TrueNAS with Veeam users should prepare the following:

* Veeam Backup & Replication dedicated server - either physical or VM
* Windows Server and Microsoft SQL for Veeam
* TrueNAS appliance with users pre-configured as determined by the admin
* Networking - 1/10/40/100GbE infrastructure and cables
* Veeam connected to the Hypervisor or other clients to pull the data to TrueNAS
* All appropriate licenses
* Backup proxies as defined by Veeam - these can be virtual or physical machines or the backup server itself for low workloads
* TrueNAS appliance configured with an S3 credential to use Veeam immutability and harden the server.

Update the TrueNAS systems to the latest version before beginning deployment.

This ensures the appliance has the latest bug fixes, security updates, and software enhancements to ensure maximum performance and security.
If deploying on a closed network (LAN) without access to the Internet, users can also obtain and apply an update manually.
For assistance, please contact TrueNAS support.

{{< expand "Contacting iXsystems Support" "v" >}}
{{< include file="/static/includes/iXsystemsSupportContact.md" >}}
{{< /expand >}}

## Sizing Considerations

When planning sizing, you must consider the TrueNAS storage appliances range from entry-level to high-end, and the user system current usage scenario and backup demands.

### Defining Your Storage Usage

While this guide focuses on Veeam, the unified design of TrueNAS allows it to multitask.
If TrueNAS is handling more than backup jobs, other usage needs should be taken into account.
For example, if the storage appliance has one LUN (dataset or zvol) set as a VMware datastore for hosting VMs, and another LUN set to use for backups, you must consider both capacities.

### Estimating Capacity

The first step when estimating required capacity is to understand how much capacity is currently used by existing VMs and by files that users need to back up.
Veeam and the TrueNAS appliance both apply data compression, though different file types and the structure of the data in those files affect the achieved compression levels.
Some tools for capacity estimation are listed at the end of this section, but it is always good to err on the side of caution and three times (3x) the current storage used is not unreasonable.
ZFS performs best with utilization below 80%.
Snapshots, full backups, and incremental backups all require more storage than primary storage used today.

### Estimating Network Bandwidth

Bandwidth is harder to estimate and must take into account backup timeframes, backup sizes, and available network resources.
Typically, backups run during off-hours when IT equipment is under a lighter load.
This timeframe can be set, but if each backup is several terabytes in size, a longer amount of time and greater bandwidth is required.
iXsystems tests Veeam backups using a 10 GbE mixed network with the datastore storage, hypervisor hosts, and backup repository (the TrueNAS) on the same network.
However, shorter backup windows, heavy network usage, and dozens of VMs being backed up simultaneously can require 40 or 100 GbE networking and multiple Veeam backup proxies used in tandem.

For example, consider a scenario of backing up 1000 VMs (each 100 GB in size) with a backup window of eight hours.
This requires around five virtual proxy servers with eight vCores (16 GB memory each) and around 3.7 GB/s of throughput.
In such a scenario, iXsystems recommends 100 GbE interconnect and TrueNAS appliances with over 100+ hard drives.
However, bandwidth can be greatly reduced if users can accept incremental and staggered backups.
For example, run an incremental backup on all VMs each day, and a full backup on 100 VMs per night, rotating a different 100 VMs each night.
This strategy provides a 5X increase to the  maximum number of VMs and reduces costs by 75%.

### Choosing a TrueNAS Model

TrueNAS systems are excellent for backup and archiving, but must be correctly sized.
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

* **Backup Only?** assumes using the storage only as a backup repository.
  This can be understood as a recommendation, not a rule.
  The number of VMs is based upon conservative throughput estimates with an average VM size set as 100GB and a backup window of eight hours running full backups.
  All other requirements for the number of Veeam backup proxies, and networking dependencies also apply.

* Number of VMs backed up.
  Numbers are based on max capacity and estimate 100GB per VM and a 2:1 optimal compression ratio.
  Compression and deduplication settings can radically change the estimates, and Veeam allows for fine-tuning.

### Configuring the Pools, Datasets, and Zvols

For high-capacity deployments, iXsystems recommends 9+2+1 RAID groups (called virtual devices or vdevs by ZFS terminology).
This configuration consists of a RAIDZ2 (similar to RAID 6 with two drive parity so two drives can fail without data loss) with one to two global hot spares added to the pool.
Pools can include several of these groups, so the capacity can be expanded as needed.
For example, 390 TB of usable space with 12 TB drives requires four groups and 48 drives.
Detailed configurations can be discussed with iXsystems sales representatives and engineers.

### Planning Storage Lifecycle

TrueNAS storage pools can be expanded online to the maximum size supported by a particular TrueNAS system.
Storage pools can be expanded one vdev (RAID group) at a time so long as each vdev shares the same type.
When deploying an iSCSI share requiring a zvol (LUN), users should consider [thin provisioning]({{< relref "thinprovisioning.md" >}}) using the sparse option during setup.

## Other Considerations

In addition to the above considerations, you can use the many tools, forums, and other discussion groups to help verify the amount of storage you need for Veeam backup.
In many sites, Veeam compression or deduplication is around 1.5x to 2x, which is more of a reference than a rule.
Backup types, applications, and the diversity of VMs can all factor into the amount of storage you need.
You must also consider capacity alongside desired performance, as a smaller quantity of large drives often does not yield the same performance as a larger number of small drives.
For rough calculations, additional resources are listed below.

* [Veeam Backup Capacity Calculator](https://calculator.veeam.com/)
* [Sizing from Veeam Best Practices](https://bp.veeam.com/vbr/VBP/3_Build_structures/B_Veeam_Components/B_VBR_Server/Backup_Server.html)
* [Veeam Size Estimation Tool](https://vse.veeambp.com/)
* [3rd Party Bandwidth Calculator](https://rps.dewin.me/bandwidth/)

## Advantages

TrueNAS is a robust, unified storage system well-suited for nearly any environment.
For backups, the platform takes advantage of the data integrity offered by ZFS, which includes features such as copy-on-write, snapshots, and checksums that prevent bit-rot.
TrueNAS Enterprise hardware appliances can also be expanded at any time simply by adding more drives so datasets can grow to keep pace with your data.
Here are additional key features that are offered out-of-the-box at no extra cost to the Enterprise user:

* **Self-healing file system** - ZFS places data integrity first with data scrubs and checksums to ensure files are saved correctly and preserved.
* **Native replication to TrueNAS systems** - Perfect for disaster recovery and compliance.
* **High-availability (HA) architecture with 99.999% availability** - Ensures the system is always ready to receive the latest backups.
* **Triple-parity** - RAID groups (vdevs) can be configured with mirror, single-parity (RAIDZ), dual-parity (RAIDZ2), or triple-parity (RAIDZ3) levels, while copy-on-write, checksums, and data scrubbing help protect long-term data integrity.
* **Certified with VMware® and Citrix® XenServer®** - TrueNAS can be both a hypervisor datastore and a backup repository with data on different datasets and even pools.
  Just be mindful of the scale of the workloads being run.
* **Unrivaled scalability in a single dataset** - Scale the backup repository from terabytes to petabytes of usable capacity.
  No LUN limits, clustering or licenses needed.

## Setting Up TrueNAS as a Veeam Repository

Veeam Backup & Replication runs on a Windows operating system, typically Windows Server 2012 or newer, and can connect to a variety of storage systems.
iXsystems recommends using iSCSI on TrueNAS 13.0 with a [Veeam scale-out repository](https://bp.veeam.com/vbr/VBP/3_Build_structures/B_Veeam_Components/B_backup_repositories/scaleout.html) architecture.
Users can also use [SMB]({{< relref "CORE/CORETutorials/Sharing/SMB/_index.md" >}}) to mount the volume to the backup server directly.
With support for SMB/CIFS, NFS, AFP, iSCSI, and FC, TrueNAS offers many ways to connect to Veeam backup servers.

Veeam Backup & Replication provides [three tiers of immutability](https://helpcenter.veeam.com/docs/backup/vsphere/immutability_sobr.html) to temporarily prohibit deleting data from extents.
[To use this immutability](https://helpcenter.veeam.com/docs/backup/vsphere/immutability_sobr.html?ver=120#preparing-to-use-immutability):

* Enable S3 on the bucket you create. You can use Amazon S3 storage or another S3-compatible storage provider.
* Configure Azure storage immutability policies for the blob version and enable blob versioning for the storage account when you create the storage account.

Using a Veeam Backup & Replication [hardened repository](https://helpcenter.veeam.com/docs/backup/vsphere/hardened_repository.html?ver=120) protects backup files from loss due to malware or unplanned actions. A hardened repository supports immutability  and single-use credentials.

![VeeamBackupRepository](/images/Veeam/VeeamBackupRepository.png "Configuring Veeam Backup Repository")
