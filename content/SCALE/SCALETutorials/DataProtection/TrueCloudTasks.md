---
title: "Managing TrueCloud Backup Tasks"
description: "Provides instructions on how to set up a TrueCloud Backup Task and how to configure an Storj iX account to work with TrueNAS."
weight: 5
tags:
- cloud
- backup
keywords:
- nas cloud storage
- data protection
- data backup and recovery
aliases: 
- cloudsynctasks/addstorjcloudsynctask
---

TrueNAS can send, receive, or synchronize data with the cloud storage provider Storj.
TrueCloud Backup Tasks allow for single-time transfers or recurring transfers on a schedule.
They are an effective method to back up data to a remote location.

{{< hint type=important >}}
To take advantage of the lower-cost benefits of the TrueCloud backup service, you must create your Storj iX account using the link provided on the **Add Cloud Credentials** screen.

You must also create and authorize the storage buckets on Storj for use by SCALE.

iXsystems is not responsible for any charges you incur using a third-party vendor with the TrueCloud Backup feature.
{{< /hint >}}

This procedure provides instructions to set up both Storj and SCALE.

## TrueCloud Backup Task Requirements

You must have all system storage (pool and datasets or zvols) configured and ready to receive or send data.

## Creating a TrueCloud Backup Task

To create a cloud sync task for a TrueCloud transfer:

1. Create the SCALE [cloud credential](#adding-storj-cloud-credentials).

   Adding the cloud credential in SCALE includes using the link to create the Storj iX account, create a new bucket, and obtain the S3 authentication credentials needed to complete the process in SCALE.

2. Create the [Storj iX account](#creating-the-storj-truenas-scale-account).

   You must create a new Storj iX account to use SCALE to access a Storj account.

3. Add a  new [Storj bucket](#adding-the-storj-truenas-bucket).

4. [Create Storj S3 access](#setting-up-s3-access-to-the-bucket) for the new bucket.

5. Finish creating the SCALE [cloud credential](#adding-storj-cloud-credentials) using the S3 access and secret keys provided by Storj.

6. Create the [cloud sync task](#setting-up-the-storj-cloud-sync-task) for one bucket.

### Adding Storj Cloud Credentials

The instructions in this section cover adding the Storj iX account and configuring the cloud service credentials in SCALE and Storj.
The process includes going to Storj to create a new Storj iX account and returning to SCALE to enter the S3 credentials provided by Storj.

Go to **Credentials > Backup Credentials** and click **Add** on the **Cloud Credentials** widget.
The **Add Cloud Credential** screen opens with Storj displayed as the default provider in the **Provider** field.

![AddingStorjCloudCredential](/images/SCALE/Credentials/AddingStorjCloudCredential.png "Adding Storj Cloud Credential")

1. Enter a descriptive name to identify the credential in the **Name** field.

2. Click **Signup for account** to create your Storj iX account. This opens the Storj new account screen for TrueNAS.

   {{< hint type=important >}}
   You must use this link to create your Storj account to take advantage of the benefits of the Storj iX pricing!
   {{< /hint >}}

   After setting up your Storj iX account, [create your Storj bucket](#adding-the-storj-truenas-bucket) and the [Storj S3 access](#setting-up-s3-access-to-the-bucket) for the new bucket.

3. Enter the authentication information provided by Storj in the **Access Key ID** and **Secret Access Key** fields.

4. Click **Verify Credentials** and wait for the system to verify the credentials.

   ![CloudCredentialsVerified](/images/SCALE/Credentials/CloudCredentialsVerified.png "Verify Cloud Credentials")

5. Click **Save**.

After completing this configuration form, you can set up the [cloud sync task](#setting-up-the-storj-cloud-sync-task).

### Creating the Storj iX Account

You can create your Storj iX cloud service account using two methods:

* Go to the [TrueNAS Storj web page](https://www.truenas.com/ix-storj/) and click **Sign Up & Log in - iX-Storj**.
* Go to **Credentials > Backup Credentials** and click **Add**.
  Select **Storj iX** as the **Provider** on the **Cloud Credentials** screen, then click **Sign up for account**.

The [Storj Create your Storj account](https://us1.storj.io/signup?partner=ix-storj-1) web page opens.
Enter your information in the fields, select the **I agree to the Terms of Service and Privacy Policy**, and click the button at the bottom of the screen.
The Storj main dashboard opens.

![StorjMainDashboard](/images/SCALE/DataProtection/StorjMainDashboard.png "Storj Main Dashboard")

### Adding the Storj iX Bucket

Now you can add the storage bucket you want to use in your Storj iX account and SCALE cloud sync task.

From the Storj main dashboard:

1. Click **Browse** on the navigation panel on the left side of the screen to open the **Browse Buckets** screen.
   Click **New Bucket** to open the **New Bucket** window.

   ![StorjAddBucket](/images/SCALE/DataProtection/StorjAddBucket.png "Storj Browse Buckets Screen")

2. Enter a name in **Bucket Name** using lowercase alphanumeric characters, with no spaces between characters, then click **Create Bucket**.
   Your new bucket displays on the **Browse Buckets** screen.

   ![StorjCreateABucketScreen](/images/SCALE/DataProtection/StorjCreateABucketScreen.png "Storj New Bucket")

3. Click on the new bucket to open the **Enter passphrase** window and configure encryption.
   Enter a secure passphrase in **Encryption Passphrase**.

   ![StorjEncryptYourBucketScreen](/images/SCALE/DataProtection/StorjEncryptYourBucketScreen.png "Storj Enter Passphrase")

4. Click **Continue** to complete the process and open the **Browse Files** screen with your new bucket.

   ![StorjBucketAdded](/images/SCALE/DataProtection/StorjBucketAdded.png "Storj Browse Files")

### Setting up S3 Access to the Bucket

After creating your bucket, add S3 access for the new bucket(s) you want to use in your Storj iX account and the SCALE cloud sync task.

1. Click **Access Keys** to open the **Access Keys** dashboard, then click **New Access Key**.

   ![StorjAccessManagementScreen](/images/SCALE/DataProtection/StorjAccessManagementScreen.png "Storj Access Keys Screen")

   The **New Access** window opens.

2. Enter the name you want to use for this credential.
   Select **S3 Credentials** for access type, then click **Next**.

   ![StorjCreateAccessWindow](/images/SCALE/DataProtection/StorjCreateAccessWindow.png "Storj New Access Key Window")

3. Select the permissions you want to allow this access key.
   Choose **Full Access** to allow permanent full permissions to all buckets and data then click **Create Access** or select **Advanced** then click **Next** to customize access configuration.

   ![StorjCreateAccessSelectBuckets](/images/SCALE/DataProtection/StorjCreateAccessSelectConfig.png "Storj Access Permissions Window.")

   {{< hint type=note >}}
   If you want to use the SCALE option to [add new buckets](#creating-a-storj-cloud-sync-task) in SCALE, set the access configuration to **Full Access**.
   {{< /hint >}}

4. (Optional) If configuring advanced access options:

   a. Select the permissions to allow.
   Choose one or more of **Read**, **Write**, **List**, **Delete**, or choose **All Permissions**.
   Click **Next**.

   ![StorjCreateAccessSelectDuration](/images/SCALE/DataProtection/StorjCreateAccessSelectPermissions.png "Storj Access Select Permissions")

   b. Select the buckets to allow access to.
   Click **All Buckets** or click **Select Buckets** and use the **Buckets** dropdown to select one or more bucket(s).
   Click **Next**.

   ![StorjCreateAccessSelectBuckets](/images/SCALE/DataProtection/StorjCreateAccessSelectBuckets.png "Storj Access Select Buckets.")

   c. Select an expiration date if you want to set the duration or length of time to allow this credential to exist.
   You can select a preset period, click **Set Custom Expiration Date** to use the calendar to set the duration, or select **No expiration**.
   Click **Next** to open the **Access Encryption** window.

   ![StorjCreateAccessSelectDuration](/images/SCALE/DataProtection/StorjCreateAccessSelectDuration.png "Storj Create Access Select Duration")

   d. Review access details and then click **Create Access**.

   ![StorjS3ConfirmDetails](/images/SCALE/DataProtection/StorjS3ConfirmDetails.png "Storj Create Access Confirm Details")

5. Use **Copy All** or **Download All** to obtain the access key, secret key, and endpoint.
   Keep these in a safe place where you can back up the file.

   ![StorjS3CredentialsGenerated](/images/SCALE/DataProtection/StorjS3CredentialsGenerated.png "Storj S3 Credentials Generated")

   Click **Close**.

This completes the process of setting up your Storj buckets and S3 access.
Enter these keys in the **Authentication** fields in TrueNAS SCALE on the **[Add Cloud Credential](#adding-storj-cloud-credentials)** screen to complete setting up the SCALE cloud credential.

### Setting Up the Storj Cloud Sync Task

To add the Storj cloud sync task, go to **Data Protection > TrueCloud Backup Tasks**:

1. Click **Add** to open the **Add TrueCloud Backup Task** screen.

   ![CloudSyncTaskWizardProviderScreen](/images/SCALE/DataProtection/AddTrueCloudTask.png "Add TrueCloud Backup Task")

2. Enter or browse to select the local **Source Path** to the directories or files you want sent to the cloud for backup.
   Click the arrow to the left of the name to expand it, then click on the name to select it.

3. Select the Storj credential on the **Credentials** dropdown list.

   Select the bucket you created in Storj from the **Bucket** dropdown list.

   If you set the Storj S3 access to only apply to the [new bucket created in Storj](#adding-the-storj-truenas-bucket), you can only use that bucket, selecting **Add New** results in an error.
   If you set the Storj S3 **Bucket** access to **All**, you can select the new bucket you created in Storj or **Add New** to create a new Storj bucket.

   Click the arrow icon for the **Folder** field to expand the dropdown list and select the desired folder in the Storj bucket or enter a folder path.
   Enter `/name`, where *name* is a folder that does not exist, to create a new folder in the Storj bucket.

4. Enter a name for the task under **Task Settings**.
  
5. Enter the number of back up copies to retain in **Keep Last**.

6. Enter a password for the task.

7. Set the task schedule for when to run this task.

8. Click **Save**.

TrueNAS adds the task to the **TrueCloud Backup Tasks** widget with the state **N/A** until the task runs on schedule.
To test the task, click **<i class="fa fa-play" aria-hidden="true" title="Run Job"></i> Run Job** to start the task apart from the scheduled time.

The task displays the status **SUCCESS** when complete.


## Restoring TrueCloud Snapshots
