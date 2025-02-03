---
title: "Veeam Immutability"
description: "Guide for deploying Veeam immutability in a TrueNAS system using MinIO as S3 object storage."
weight: 40
aliases:
tags:
 - s3 object storage
 - backup and recovery
 - backup solution 
---

TrueNAS Enterprise systems can act as S3-compatible object storage for Veeam Backup & Replication Immutability.

Immutability is a feature of Veeam Backup & Replication. When configured with storage solutions such as TrueNAS, it prevents modifying or deleting data for a specified period of time.
Set the the immutability period based on your needs. After this period expires, backed up data can be modified or deleted again.

The immutability feature increases data security, protects data from losses incurred through malware, attacks, or other harmful actions by bad actors, and can protect configuration backups.
Veeam makes this feature available to work with a number of storage options such as S3 or S3-compatible object repositories.

## How does Veeam Immutability work?
Veeam protects a backup chain and all the restore points of this chain for the specified immutability period.
The immutability period is the number of days you have to respond to malicious actions.
During this period you can roll back to the earlier state of your backup chain. Rolling back requires running Veeam PowerShell. See [Rolling Back Immutable Data](https://helpcenter.veeam.com/docs/backup/vsphere/hiw_immutability_os.html?ver=120#rollback) for more information.

For more detailed information on Veeam Immutability, see [How Immutability Works](https://helpcenter.veeam.com/docs/backup/vsphere/hiw_immutability_os.html).

## What is required to configure Veeam Immutability?

* Obtain and apply the TrueNAS Enterprise license for VMs and Applications to your TrueNAS Enterprise system.
* Deploy the MinIO Enterprise app.
  You can deploy the MinIO Enterprise app as S3 object storage or configure a cluster to use for S3 object storage.
  To deploy a cluster follow the instructions in the [MinIO MNMD tutorial]({{< relref "/truenasApps/EnterpriseApps/MinIO/ConfigMinIOEnterpriseMNMD.md" >}}).
  A cluster consists of four systems (nodes), each with four datasets (representing drives in the cluster configuration).
* Verify the MinIO service shows your MinIO app deployment as a single or clustered configuration.
  The correct number of nodes and drives for a cluster configuration is four nodes and 12 drives.
* Set up and configure Veeam Immutability.
  Configure a new bucket and the immutability settings to use the MinIO app in TrueNAS as the S3-compatible object storage.

## Configuring TrueNAS and the MinIO Enterprise App
This guide describes the process of configuring a Veeam Immutability solution.

Before you begin, acquire and install/apply the Enterprise VM & Apps License for a single system or if a cluster, for four TrueNAS systems in the Multi-Node Multi Disk (MNMD) cluster configuration. You can apply the same license to each of the cluster systems.

Follow the instructions in the [MinIO Enterprise tutorial]({{< relref "/Content/TruenasApps/EnterpriseApps/MinIO/_index.md" >}}) for a single system deployment, or [MinIO Enterprise MNMD tutorial]({{< relref "/Content/TruenasApps/EnterpriseApps/MinIO/ConfigMinIOEnterpriseMNMD.md" >}}) to install and deploy the MinIO enterprise train app in a MNMD configuration. TrueNAS and MinIO provide the S3 compatible object storage for Veeam.

## Configuring Veeam for Immutability
Open Veeam Backup & Replication Console, go to **Backup Infrastructure** and click on **Backup Repositories**.
See [Adding S3 Compatible Object Storage](https://helpcenter.veeam.com/docs/backup/vsphere/adding_s3c_object_storage.html) for detailed instructions.

Create a new bucket for the S3-compatible object storage repository.
Enable object locking on this bucket when you create it.
See [Creating a Bucket](https://helpcenter.veeam.com/docs/backup/vsphere/restore_entire_bucket_new_bucket.html) for more information.

To create multiple child buckets automatically while creating the S3 object storage, click **Automatic bucket creation disabled** on the **New Object Storage Repository > Bucket** screen to show the **Create new buckets automatically** option. Select to have Veeam automatically create child buckets.

Click on **Object Storage**, and choose S3 Compatible. The **New Object Storage Repository** wizard opens.

On the **Account** screen, select or enter the IP address and port number for the TrueNAS server in **Service Point**. Enter as IP address:port number.
Select the region where the TrueNAS server is located in **Region**.
Browse to select the certificate used for MinIO in the TrueNAS server cluster.

Select the connection type in **Connection Mode**.
Select **Direct** to instantly move data of processed VMs to object storage repositories. This requires specifying access permissions.
Select **Through gateway server** to have Veeam Backup & Replication use a gateway server to transfer data from processed VMs or file share to object storage repositories (default setting).

**Credentials** should show the certificate for the TrueNAS system. If TrueNAS uses a self-signed certificate, a certificate security alert dialog opens. Click **Continue** to close the dialog. Click**Next**.

Select the bucket created for this repository where you want to store backup data. Add a new folder to the bucket. You must add at least one folder.
Optionally, select **Limit object storage consumption to *x* TB** and/or **Make recent backups immutable for *x* days** to enable them and set the measurement for each option.
Click **Next**.

If not already shown, specify the server you want to use as the mount server. Veeam uses this during restore operations to mount VM disks directly from objects located in the object storage repositories.
If not listed, click **Add New**. See [Adding Windows Servers](https://helpcenter.veeam.com/docs/backup/vsphere/add_windows_server.html) for instructions.
Select the folder to keep the cache created during mount operations from the **Instant recovery write cache folder** dropdown list.
Enter the NFS service settings if desired and enter the ports Veeam should suer for the NFS service. See [Specifying Mount Server Settings](https://helpcenter.veeam.com/docs/backup/vsphere/compatible_mount_server.html?ver=120#specifying-mount-server-settings) for more information.

Veeam automatically installs additional components if needed. Click **Next**, review the configuration, and then click **Finish**.

Create a new backup job in Veeam if desired. See [Creating Immutable Configuration Backups](https://helpcenter.veeam.com/docs/backup/vsphere/config_backup_immutable.html) for more information.