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

TrueNAS Unified Storage appliances are certified Veeam-ready and can be used to handle demanding file and VM backup requirements.
These certification tests measure the speed and effectiveness of the data storage repository using a testing methodology defined by Veeam for full backups, full restores, synthetic full backups, and instant VM recovery from within the Veeam Backup & Replication environment.
With the ability to seamlessly scale to petabytes of raw capacity, high-performance networking and cache, and all-flash options, TrueNAS appliances are ideal for large and small Veeam Backup & Replication repositories.

{{< expand "Certified Hardware" "v" >}}
These TrueNAS products are certified by Veeam:

![VeeamReadyTrueNASProducts](/images/Veeam/VeeamReadyiX.png "TrueNAS Products that are Veeam Ready")

For more information, refer to the [Veeam Ready list](https://www.veeam.com/alliance-partner-integrations-qualifications.html?alliancePartner=ixsystems) filtered for TrueNAS.
{{< /expand >}}

This article discusses some of the best practices when deploying TrueNAS with Veeam, the specific considerations users must be aware of, and some tips to help with performance.
The focus is on capabilities native to TrueNAS.
For more information on using and optimizing Veeam deployments, we encourage you to review relevant Veeam documentation, such as the [Veeam help center](https://www.veeam.com/documentation-guides-datasheets.html) and [Veeam best practices](https://bp.veeam.com/vbr) articles.

## What Do I Need?

When deploying TrueNAS with Veeam, prepare the following:

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

{{< expand "Contacting TrueNAS Enterprise Support" "v" >}}
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
Veeam and the TrueNAS appliance apply data compression though different file types and data structures in those files can affect the achieved compression levels.
Some tools for capacity estimation are listed at the end of this section, but it is always good to err on the side of caution, and three times (3x) the current storage used is not unreasonable.
ZFS performs best with utilization below 80%.
Snapshots, full backups, and incremental backups all require more storage than the primary storage used today.

### Estimating Network Bandwidth

Bandwidth is harder to estimate and must account for backup timeframes, backup sizes, and available network resources.
Typically, backups run during off-hours when IT equipment is under a lighter load.
This timeframe can be set but if each backup is several terabytes you need more time and bandwidth.
TrueNAS tests Veeam backups using a 10 GbE mixed network with the datastore storage, hypervisor hosts, and backup repository (the TrueNAS) on the same network.
However, shorter backup windows, heavy network usage, and dozens of VMs being backed up simultaneously can require 40 or 100 GbE networking and multiple Veeam backup proxies used in tandem.

For example, consider backing up 1000 VMs (each 100 GB in size) with a backup window of eight hours.
This requires around five virtual proxy servers with eight vCores (16 GB memory each) and about 3.7 GB/s throughput.
In such a scenario, we recommend 100 GbE interconnect and TrueNAS appliances with over 100+ hard drives.
However, bandwidth can be greatly reduced if users accept incremental and staggered backups.
For example, run an incremental backup on all VMs each day, and a full backup on 100 VMs per night, rotating a different VM of the 100 VMs each night.
This strategy provides a 5X increase to the maximum number of VMs and reduces costs by 75%.

### Choosing a TrueNAS Model

TrueNAS systems are excellent for backup and archiving, but must be correctly sized.
Recommended sizing:

{{< truetable >}}
| Model | Backup Only? | Number of VMs Backed Up | Network Max | Usable Capacity |
|-------|--------------|-------------------------|-------------|-----------------|
| TrueNAS M40 | No | 47,600 | 40 GbE | 2.68 PB |
| TrueNAS M50 | No | 204,000 | 100 GbE | 10.23 PB |
| TrueNAS M60 | No | 299,200 | 100 GbE | 15.1 PB |
| TrueNAS H10 | No | 13,600 | 25 GbE | 873 TB |
| TrueNAS H20 | No | 20,400 | 100 GbE | 1.34 PB |
| TrueNAS H30 | No | 20,400 | 100 GbE | 1.34 PB |
| TrueNAS F60 | No | 47,600 | 100 GbE | 2.6 PB |
| TrueNAS F100 | No | 115,600 | 100 GbE | 6.1 PB |
{{< /truetable >}}

* **Backup Only?** assumes only using the storage as a backup repository.
  This can be understood as a recommendation, not a rule.
  The number of VMs is based upon conservative throughput estimates, with an average VM size set to 100GB and a backup window of eight hours running full backups.
  All other requirements for the number of Veeam backup proxies and networking dependencies also apply.

* Number of VMs backed up.
  Numbers are based on max capacity and estimate 100GB per VM and a 2:1 optimal compression ratio.
  Compression and deduplication settings can radically change the estimates, and Veeam allows for fine-tuning.

### Configuring the Pools, Datasets, and Zvols

For high-capacity deployments, TrueNAS recommends 9+2+1 RAID groups (called virtual devices or vdevs by ZFS terminology).
This configuration consists of a RAIDZ2 (similar to RAID 6 with two drive parity, so two drives can fail without data loss) with one to two global hot spares added to the pool.
Pools can include several of these RAID groups, so the capacity can be expanded as needed.
For example, 390 TB of usable space with 12 TB drives requires four groups and 48 drives.
Detailed configurations can be discussed with TrueNAS sales representatives and engineers.

## Configuring Veeam Agent with SMB on TrueNAS

Veeam Agent for Microsoft Windows supports backing up to SMB shares hosted on TrueNAS.
This procedure details configuring a standard SMB share and dataset in TrueNAS.
To use block or fast cloning, see [Configuring Veeam with SMB and Fast Clone](#configuring-veeam-with-smb-and-fast-clone) for the correct procedure.

### Creating the SMB Share

1. Go to **Datasets**, create a dataset (example: *veeam-backups*), and set the **Dataset Preset** to **SMB**.
2. Accept the option to create the share with the dataset.
3. Create a TrueNAS user (example: *veeam*) and assign full access to the dataset ACL.
4. Enable the SMB service.

Use the Virtual IP (VIP) for high availability.

### Setting Up Veeam Agent

1. Open **Veeam Agent for Microsoft Windows**.
2. Click **Configure Backup**.
3. Select **Entire Computer**, then **Shared Folder** as the destination.
4. Enter the SMB path and TrueNAS local user credentials.
5. Adjust backup schedule and retention if desired.
6. Click **Finish**. You can now begin a backup.

## Configuring Veeam for SMB with Fast Clone

{{< enterprise >}}
To configure a TrueNAS SMB share for a Veeam repository with fast (block) cloning you must have an enterprise-licensed TrueNAS system.

First set up the TrueNAS system storage and SMB share before adding the Veeam repository.
Fast cloning fails if you add the Veeam repository before you configure TrueNAS.
You cannot use an existing Veeam repository for SMB and fast cloning.
There is no supported mechanism to convert an existing Veeam repository into one that a TrueNAS SMB share with fast cloning can use.

TrueNAS properly aligns the TrueNAS ZFS record size and SMB share block size with the Veeam repository requirements when using these instructions.

If not already created, go to **Credentials > User** and add a TrueNAS administrative user to serve as the share user.
Refer to the basic [SMB Share]({{< relref "/Scale/SCALEtutorials/Shares/SMB/_index.md" >}}) instructions for information on creating a share user.
You can assign this admin user full control or a sharing admin role. Add this user to the ACL for the dataset created for Veeam SMB with fast cloning.

### Configuring TrueNAS Storage

First, think about how you want to organize your data storage. We recommend creating the parent dataset structure before creating the dataset and share for Veeam SMB fast cloning.
For example, organizing all datasets for shares (SMB, NFS, etc.) under one common parent dataset (*shares*) with datasets for each share type nested under it.

If you have other Veeam data storage set up in the system and you want to nest the fast cloning dataset under the existing Veeam dataset, skip adding the dataset organization instructions below and go to the instructions for verifying the record size for the Veeam dataset at the bottom of this section.

To create and organize datasets in a hierarchical structure for shares, for example, *shares/smb/veeam*, go to the **Datasets** screen, select the parent dataset row in the table, and click **Add Dataset**.
Add the dataset for the next level in the organization, for example, *shares* or it exists, add *smb*, etc.

Enter a name for the dataset, then select the **SMB** option under **Dataset Preset**. Clear the option to create the share.
Clear the checkbox in **Create SMB Share** for these organizational datasets unless you plan to use them for other SMB share purposes.

Next, verify the record size. Click **Advanced Options**, and scroll down to the **Record Size** field. If not set to **128 KiB**, select it on the dropdown list.

Click **Save** to create the dataset.

Grant full access to the user created as the share admin in the dataset ACLs.

If a parent datasets exist and you only need to create the dataset and SMB share for the Veeam repository, verify the record size for the parent dataset.
Select the parent dataset row in the table, click **Edit**, and then **Advanced Options**.
Scroll down to **Record Size**. Verify it is set to **128 KiB**. Click **Save** if you make any changes.

You are ready to create the share.

### Creating the SMB Share

With the data structure organization in place and the correct record size set, go to **Shares**, and click **Add** on the **Windows SMB Shares** widget.

Browse to select the parent dataset. Click on each dataset in the path to the parent dataset, for example: */tank/shares/smb/*, and then click **Create Dataset**.
Enter the name for the Veeam SMB dataset in the **Create Dataset** dialog, then click **Create Dataset**. The dialog closes and the **Path** on the **Add SMB** screen populates with the path to the new dataset.

Select **Veeam repository with Fast Clone** on the **Purpose** dropdown list.
Click **Advanced Options** and scroll down to **Additional Parameters String**. It should show **block size = 131072**.
Select other SMB share settings you want to enable. For example, select **Enable** under **Audit Logging** to include SMB activities in audit logging.

Click **Save** to create the share.
Enable or restart the SMB service when prompted.

### Adding the Veeam Repository for SMB with Fast Cloning

With the TrueNAS storage and share properly configured, you can now add the repository in Veeam.
Follow the instructions in [Setting Up Veeam Agent](#setting-up-veeam-agent) to add the repository.
{{< /enterprise >}}

## Planning Storage Lifecycle

TrueNAS storage pools can be expanded online to the maximum size supported by a particular TrueNAS system.
Storage pools can be expanded one vdev (RAID group) at a time, so long as each vdev shares the same type.
When deploying an iSCSI share requiring a zvol (LUN), users should consider [thin provisioning]({{< ref "thinprovisioning" >}}) using the sparse option during setup.

## Other Considerations

In addition to the above considerations, you can use the many tools, forums, and other discussion groups to help verify the amount of storage you need for Veeam backup.
In many sites, Veeam compression or deduplication is around 1.5x to 2x, which is more of a reference than a rule.
Backup types, applications, and the diversity of VMs can all factor into the amount of storage you need.
You must also consider capacity alongside desired performance, as a smaller quantity of large drives often does not yield the same performance as a larger number of small drives.
The resources listed below provide rough calculations available to determine the sizes and numbers of drives needed:

* [Veeam Backup Capacity Calculator](https://calculator.veeam.com/)
* [Sizing from Veeam Best Practices](https://bp.veeam.com/vbr/VBP/3_Build_structures/B_Veeam_Components/B_VBR_Server/Backup_Server.html)
* [Veeam Size Estimation Tool](https://vse.veeambp.com/)
* [3rd Party Bandwidth Calculator](https://rps.dewin.me/bandwidth/)

## Advantages

TrueNAS is a robust, unified storage system well-suited for nearly any environment.
For backups, the platform takes advantage of the data integrity offered by ZFS, which includes features such as copy-on-write, snapshots, and checksums that prevent bit-rot.
You can expand TrueNAS Enterprise appliances at any time by simply adding more drives, allowing datasets to grow and keeping pace with your data storage needs.
Here are additional key features that are offered out-of-the-box at no extra cost to the Enterprise user:

* **Self-healing file system** - ZFS places data integrity first with data scrubs and checksums, ensuring files are saved correctly and preserved.
* **Native replication to TrueNAS systems** - TrueNAS native replication is perfect for disaster recovery and compliance.
* **High-availability (HA) architecture with 99.999% availability** - High Availability (HA) ensures the system is always ready to receive the latest backups.
* **Triple-parity** - RAID groups (vdevs) can be configured with mirror, single-parity (RAIDZ), dual-parity (RAIDZ2), or triple-parity (RAIDZ3) levels, while copy-on-write, checksums, and data scrubbing help protect long-term data integrity.
* **Certified with VMware® and Citrix® XenServer®** - TrueNAS can be a hypervisor datastore and a backup repository, with data on different datasets and even pools.
 Just be mindful of the scale of the workloads being run.
* **Unrivaled scalability in a single dataset** - TrueNAS allows scaling the backup repository from terabytes to petabytes of usable capacity.
 No LUN limits, clustering, or licenses needed.

## Setting Up TrueNAS as a Veeam Repository

Veeam Backup & Replication runs on a Windows operating system, typically Windows Server 2012 or newer, and can connect to a variety of storage systems.
TrueNAS recommends using iSCSI on TrueNAS with a [Veeam scale-out repository](https://bp.veeam.com/vbr/VBP/3_Build_structures/B_Veeam_Components/B_backup_repositories/scaleout.html) architecture.
Users can also directly mount the volume to the backup server using SMB. Refer to the SMB tutorial section for your version for more information.
With support for SMB/CIFS, NFS, AFP, iSCSI, and FC, TrueNAS offers many ways to connect to Veeam backup servers.

Veeam Backup & Replication provides [three tiers of immutability](https://helpcenter.veeam.com/docs/backup/vsphere/immutability_sobr.html) to temporarily prohibit deleting data from extents.
[To use this immutability](https://helpcenter.veeam.com/docs/backup/vsphere/immutability_sobr.html?ver=120#preparing-to-use-immutability):

* Enable S3 on the bucket you create. You can use Amazon S3 storage or another S3-compatible storage provider.
* Configure Azure storage immutability policies for the blob version, and when you create the storage account, enable blob versioning for the storage account.

Using a Veeam Backup & Replication [hardened repository](https://helpcenter.veeam.com/docs/backup/vsphere/hardened_repository.html?ver=120) protects backup files from loss due to malware or unplanned actions. A hardened repository supports immutability and single-use credentials.

![VeeamBackupRepository](/images/Veeam/VeeamBackupRepository.png "Configuring Veeam Backup Repository")
