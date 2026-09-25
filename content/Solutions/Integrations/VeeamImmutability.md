---
title: "Veeam Immutability"
description: "Guide for configuring TrueNAS S3 object storage as an immutable backup repository for Veeam Backup & Replication."
weight: 45
aliases:
tags:
 - s3 object storage
 - backup and recovery
 - backup solution
---

TrueNAS can act as S3-compatible object storage for immutable backups in Veeam Backup & Replication.

Immutability is a feature of Veeam Backup & Replication. When configured with storage solutions such as TrueNAS, it prevents modifying or deleting data for a specified period of time.
Set the immutability period based on your needs. After this period expires, backed up data can be modified or deleted again.

The immutability feature increases data security, protects data from losses incurred through malware, attacks, or other harmful actions by bad actors, and can protect configuration backups.
Veeam makes this feature available to work with a number of storage options such as S3 or S3-compatible object repositories.

## How Does Veeam Immutability Work?
Veeam protects a backup chain and all the restore points of this chain for the specified immutability period.
The immutability period is the number of days you have to respond to malicious actions.
During this period you can roll back to the earlier state of your backup chain. Rolling back requires running Veeam PowerShell. See [Rolling Back Immutable Data](https://helpcenter.veeam.com/docs/backup/vsphere/hiw_immutability_os.html?ver=120#rollback) for more information.

With S3 object storage, Veeam uses the S3 object lock feature to make backups immutable.
Veeam sets a compliance mode retention period on each object it writes.
No S3 client can delete or modify an object in compliance mode before its retention period ends, including a client that uses Veeam administrator credentials.

{{< hint type=warning >}}
Choose the immutability period carefully.
You cannot shorten the retention period or delete immutable backups before the period ends, even if you need to free storage space or must delete specific data.
{{< /hint >}}

Because Veeam protects the whole backup chain, it extends the immutability of earlier restore points as it adds new ones.
Immutable backups often use more storage than the number of immutable days suggests.
Plan storage capacity with this in mind.

For more detailed information on Veeam Immutability, see [How Immutability Works](https://helpcenter.veeam.com/docs/backup/vsphere/hiw_immutability_os.html).

## What is Required to Configure Veeam Immutability?

* A TrueNAS system license that includes S3 versioning.
  Object lock requires versioning, which is a licensed feature.
  See [Licensed S3 Features]({{< ref "/SCALE/Shares/S3/_index.md#licensed-s3-features" >}}).
* A dataset on TrueNAS to hold the bucket dataset, for example *tank/s3*.
* Veeam Backup & Replication installed on a Windows server.
  The Veeam Software Appliance does not support the object storage repository type.
  See [Veeam Software Appliance]({{< ref "Veeam-Software-Appliance" >}}) for more information.

## Configuring TrueNAS S3 Object Storage for Veeam

Configure the S3 service, create an access key for Veeam, and add an object-locked bucket for the backup repository.
See [Configuring S3 Object Storage]({{< ref "ConfiguringS3" >}}) for detailed instructions on each task.

1. Configure the S3 service.
   Go to **Shares**, click the <span class="material-icons">more_vert</span> icon on the **Object Storage (S3) Buckets** widget, and then select **Config Service**.

   a. (Optional) Add a listen address with **TLS** selected to encrypt backup traffic between Veeam and TrueNAS.

   b. Select the **Certificate** for the TLS listen address, or keep **Use UI certificate**.

   c. Click **Save**.

2. Create an access key for Veeam.
   Go to **Credentials > S3 Access Keys**, and then click **Add**.

   a. Enter a **Name**, and then select or create the user account for Veeam in **User**.

   b. Select **Non-expiring**.
      An expired access key stops Veeam from writing backups.

   c. Click **Save**, and then copy the **Access Key ID** and **Secret Access Key** from the **S3 Access Key** dialog.
      The web UI does not show the secret access key again.

3. Add the bucket for the backup repository.
   Go to **Shares**, and then click **Add** on the **Object Storage (S3) Buckets** widget.

   a. Enter a **Name**, select the **Parent Dataset**, and select the Veeam user account as the **Owner**.

   b. Select **Enable Object Lock**.
      **Versioning** changes to **Enabled** and **Default Retention Mode** shows.

   c. Select **No default rule** in **Default Retention Mode**.
      Selecting **Enable Object Lock** changes **Default Retention Mode** to **Compliance**.
      Veeam requires a bucket without a default retention rule because it sets the retention for each object.

   d. Click **Save**.
      If the **Start S3 Service** dialog opens, select **Enable this service to start automatically**, and then click **Start**.

{{< hint type=warning >}}
Object lock is permanent.
After you save the bucket, you cannot disable object lock or versioning on the bucket.
Do not change the bucket settings after you add the bucket to Veeam.
{{< /hint >}}

TrueNAS reports a recommended storage block size to Veeam based on the record size of the bucket dataset.
The default 128 KiB record size reports no recommendation.

## Configuring Veeam for Immutability
Add the TrueNAS bucket to Veeam as an S3-compatible object storage repository.
See [Adding S3 Compatible Object Storage](https://helpcenter.veeam.com/docs/backup/vsphere/adding_s3c_object_storage.html) for detailed instructions.

1. Open the Veeam Backup & Replication Console, go to **Backup Infrastructure**, and click **Backup Repositories**.

2. Click **Object Storage**, and choose **S3 Compatible**. The **New Object Storage Repository** wizard opens.

3. Configure the **Account** screen.

   a. Enter the TrueNAS IP address and S3 listen port in **Service Point**, as *IP address:port number*, for example *192.168.1.10:9000*.

   b. Enter a **Region**.
      If the **Region** setting on the TrueNAS S3 service is empty, TrueNAS accepts any region, such as *us-east-1*.

   c. Add the TrueNAS S3 access key in **Credentials**, using the **Access Key ID** and **Secret Access Key**.

   d. Select the connection type in **Connection Mode**.
      Select **Direct** to move data of processed VMs directly to object storage repositories. This requires specifying access permissions.
      Select **Through gateway server** to have Veeam Backup & Replication use a gateway server to transfer data from processed VMs or file shares to object storage repositories. This is the default setting.

   e. Click **Next**.
      If TrueNAS uses a self-signed certificate, a certificate security alert dialog opens. Click **Continue** to close the dialog.

4. Configure the **Bucket** screen.

   a. Select the TrueNAS bucket for the repository.

   b. Add a folder to the bucket. You must add at least one folder.

   c. Select **Make recent backups immutable for *x* days**, and enter the number of days.

   d. (Optional) Select **Limit object storage consumption to *x* TB**, and enter the limit.

   e. Click **Next**.

5. Configure the mount server.
   Veeam uses the mount server during restore operations to mount VM disks directly from objects in the object storage repository.

   a. Select the mount server. If not listed, click **Add New**. See [Adding Windows Servers](https://helpcenter.veeam.com/docs/backup/vsphere/add_windows_server.html) for instructions.

   b. Select the folder for the cache created during mount operations from the **Instant recovery write cache folder** dropdown list.

   c. (Optional) Enter the NFS service settings and the ports Veeam uses for the NFS service. See [Specifying Mount Server Settings](https://helpcenter.veeam.com/docs/backup/vsphere/compatible_mount_server.html?ver=120#specifying-mount-server-settings) for more information.

6. Click **Next**, review the configuration, and then click **Finish**.
   Veeam automatically installs additional components if needed.

Create a new backup job in Veeam if desired. See [Creating Immutable Configuration Backups](https://helpcenter.veeam.com/docs/backup/vsphere/config_backup_immutable.html) for more information.
