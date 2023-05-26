---
title: "Adding a Storj Cloud Sync Task"
description: "Provides instructions on how to set up a Storj cloud sync task and how to configure a Storj-TrueNAS account to work with SCALE cloud credentials and cloud sync tasks."
weight: 30
tags:
- scalecloud
- scalestorj
- scalebackup
---

{{< toc >}}


TrueNAS can send, receive, or synchronize data with the cloud storage provider Storj. 
Cloud sync tasks allow for single-time transfers or recurring transfers on a schedule. They are an effective method to back up data to a remote location.

{{< hint type=important >}}
To take advantage of the lower-cost benefits of the Storj-TrueNAS cloud service, you must create your Storj account using the link provided on the **Add Cloud Credentials** screen.

You must also create and authorize the storage buckets on Storj for use by SCALE.

iXsystems is not responsible for any charges incurred from using a third-party vendor with the cloud sync feature.
{{< /hint >}}
This procedure provides instructions to set up both Storj and SCALE.

TrueNAS supports major providers like Amazon S3, Google Cloud, and Microsoft Azure. It also supports many other vendors. To see the full list of supported vendors, go to **Credentials > Backup Credentials > Cloud Credentials** click **Add** and open the **Provider** dropdown list.

## Cloud Sync Task Requirements

You must have all system storage (pool and datasets or zvols) configured and ready to receive or send data.

## Creating a Storj Cloud Sync Task

To create your cloud sync task for a Storj-TrueNAS transfer you:

1. Create the SCALE [cloud credential](#adding-storj-cloud-credentials).

   Adding the cloud credential in SCALE includes using the link to go create the Storj-TrueNAS account, create a new bucket and obtain the S3 authentication credentials you need to complete the process in SCALE.

2. Create the [Storj-TrueNAS account](#creating-the-storj-truenas-scale-account).

   You must create the new Storj-TrueNAS account to use SCALE to access a Storj account.

3. Add a  new [Storj bucket](#adding-the-storj-truenas-bucket).
   
4. [Create Storj S3 access](#setting-up-s3-access-to-the-bucket) for the new bucket.

5. Finish creating the SCALE [cloud credential](#adding-storj-cloud-credentials) using the S3 access and secret keys provided by Storj. 

6. Create the [cloud sync task](#setting-up-the-storj-cloud-sync-task) for one bucket.

### Adding Storj Cloud Credentials

In this section you add your cloud service credentials in SCALE and in Storj. This process includes going to Storj to create a new Storj-TrueNAS account and returning to SCALE to enter the S3 credentials provided by Storj for this credential.

Go to **Credentials > Backup Credentials** and click **Add** on the **Cloud Credentials** widget. 
The **Add Cloud Credential** screen opens with Storj displayed as the default provider in the **Provider** field.

![AddingStorjCloudCredential](/images/SCALE/22.12/AddingStorjCloudCredential.png "Adding Storj Cloud Credential")

1. Enter a descriptive name you want to identify this credential in the **Name** field.

2. Click **Signup for account** to create your Stor-TrueNAS account. This opens the Storj new account screen for TrueNAS.

   {{< hint type=important >}} 
   You must use this link to create your Storj account to take advantage of the benefits of the Storj-TrueNAS pricing!
   {{< /hint >}}

   After setting up your Storj-TrueNAS account, [create your Storj bucket](#adding-the-storj-truenas-bucket) and create the [Storj S3 access](#setting-up-s3-access-to-the-bucket) for the new bucket. 

3. Enter the authentication information provided but Storj in the **Acces Key ID** and **Secret Access Key** fields.

4. Click **Verify Credentials**, and wait for the system to verify the credentials.
   
   ![CloudCredentialsVerified](/images/SCALE/22.12/CloudCredentialsVerified.png "Verify Cloud Credentials")

5. Click **Save**.

After completing this configuration form, you can set up the [cloud sync task](#setting-up-the-storj-cloud-sync-task).

### Creating the Storj-TrueNAS SCALE Account
Click **Signup for account** on the **Add Cloud Credential** screen. The Storj Sign In website opens. 

![StorjCreateNewTrueNASAccount](/images/SCALE/22.12/StorjCreateNewTrueNASAccount.png "Create Storj Account")

Enter your information in the fields, select the **I agree to the Terms of Service and Privacy Policy**, then click **Create an Ix-Storj Account**. 

![StorjMainDashboard](/images/SCALE/22.12/StorjMainDashboard.png "Storj Main Dashboard")

### Adding the Storj-TrueNAS Bucket
Now add the storage bucket to use in your Storj-TrueNAS account and to add in the SCALE cloud sync task.

From the Storj main dashboard:

1. Click **Buckets** on the navigation panel on the left side of the screen to open the **Buckets** screen.
   
   ![StorjAddBucket](/images/SCALE/22.12/StorjAddBucket.png "Storj Buckets Screen")

2. Click **New Bucket** to open the **Create a bucket** window.
   
   ![StorjCreateABucketScreen](/images/SCALE/22.12/StorjCreateABucketScreen.png "Storj Create a bucket")

3. Enter a name in **Bucket Name** using lower case alphanumeric characters, with no spaces between characters, then click **Continue** to open the **Encrypt your bucket** window.
   
   ![StorjEncryptYourBucketScreen](/images/SCALE/22.12/StorjEncryptYourBucketScreen.png "Storj Encrypt your bucket")

4. Select the encryption option you want to use. Select **Generate passphrase** to let Storj provide the encryption or select **Enter Passphrase** to enter your own.
   If you already have a Storj account and want to use the same passphrase for your new bucket, select **Enter Passphrase**. 

   ![StorjGenerateAPassphraseScreen](/images/SCALE/22.12/StorjGenerateAPassphraseScreen.png "Storj Generate a Passphrase")

   If you select **Generate a passphrase** Storj presents you with the option to download the encryption keys. 
   You must keep encryption keys stored in a safe place, and where you can back up the file. 
   Select **I understand, and I have saved the passphrase** then click **Download**. 
   
5. Click **Continue** to complete the process and open the **Buckets** screen with your new bucket.
   
   ![StorjBucketAdded](/images/SCALE/22.12/StorjBucketAdded.png "Storj Create a bucket")

### Setting up S3 Access to the Bucket
After creating your bucket, add S3 access for the new bucket(s) you want to use in your Storj-TrueNAS account and use in the SCALE cloud sync task.

1. Click **Access** to open the** Access Management** dashboard, then click **Create S3 Credentials** on the middle **S3 credentials** widget.
   
   ![StorjAccessManagementScreen](/images/SCALE/22.12/StorjAccessManagementScreen.png "Storj Access Management Screen")

   The **Create Access** window opens with **Type** set to **S3 Credentials**. 

2. Enter the name you want to use for this credential. Our example uses the name of the bucket we created.
   
   ![StorjCreateAccessWindow](/images/SCALE/22.12/StorjCreateAccessWindow.png "Storj Create Access Window")

3. Select the permissions you want to allow this access from the **Permissions** dropdown and select the bucket you want to have access to this credential from the dropdown list. 
   The example selects *All* for **Permissions** and selected the one bucket we created *ixstorj1*.

   ![StorjCreateAccessSelectBuckets](/images/SCALE/22.12/StorjCreateAccessSelectBuckets.png "Storj Create Access Select Buckets")

   {{< hint type=note >}}
   If you want to use the SCALE option to [add new buckets](#creating-a-storj-cloud-sync-task) in SCALE, set Storj **Permissions** to **All** and **Buckets** to **All**.
   {{< /hint >}}

4. Select **Add Date (optional)** if you want to set the duration or length of time you want to allow this credential to exist. 
   This example set this to *Forever*. You can select a preset period of time or use the calendar to set the duration.

   ![StorjCreateAccessSelectDuration](/images/SCALE/22.12/StorjCreateAccessSelectDuration.png "Storj Create Access Select Duration")

5. Click **Encrypt My Access** to open the **Encryption Information** dialog, then click **Continue** to open the**Select Encryption** options window.
   
   ![StorjCreateAccessEncryptionDialog](/images/SCALE/22.12/StorjCreateAccessEncryptionDialog.png "Storj Create Access Encryption Dialog")

6. Select the encryption option you want to use. 
   Select **Generate Passphrase** to allow Storj to provide the encryption passphrase, or select **Create My Own Passphrase** to enter a passphrase of your choice.

   ![StorjCreateAccessSelectEncryptionOptions](/images/SCALE/22.12/StorjCreateAccessSelectEncryptionOptions.png "Storj Create Access Select Encryption Options")

   Use **Copy to Clipboard** or **Download.txt** to obtain the Storj generated passphrase. Keep this passphrase along with the access keys in a safe place where you can back up the file.

   ![StorjCreateAccessDownloadedEncryptionPassphrase](/images/SCALE/22.12/StorjCreateAccessDownloadedEncryptionPassphrase.png "Storj Create Access Encryption Passphrase Downloaded")

   {{< hint type=warning >}}
   If you lose your passphrase neither Storj or iXsystems can help you recover your stored data!
   {{< /hint >}}

7 . Click **Create my Access** to obtain the access and secret keys. Use **Download.txt** to save these keys to a text file. 

This completes the process of setting up your Storj buckets and S3 access. Enter these keys in the **Authentication** fields in TrueNAS SCALE on the **[Add Cloud Credential](#adding-storj-cloud-credentials)** screen to complete setting up the SCALE cloud credential.

### Setting Up the Storj Cloud Sync Task

To add the Storj cloud sync task, go to **Data Protection > Cloud Sync Tasks**:

1. Click **Add** to open the **Add Cloud Sync Task** screen.
   
   ![AddCloudSyncTaskTransferRemoteSettingsp](/images/SCALE/22.12/AddCloudSyncTaskTransferRemoteSettings.png "Adding a Cloud Sync Task Transfer and Remote Settings")

2. (Required) Type a memorable task description in **Description**. You can use the the name of the Storj-TrueNAS bucket or credential you created as the name of the cloud sync task.

3. Select the Storj credential you just created from the **Credential** dropdown list.
   
   ![CloudSyncTaskSelectStorjCloudCredential](/images/SCALE/22.12/CloudSyncTaskSelectStorjCloudCredential.png "Select Storj Cloud Credential")

3. Set the **Direction** and **Transfer Mode** you want to use.

4. Browse to the dataset or zvol you want to use on SCALE for data storage.

5. Select the bucket you just created in Storj from the **Bucket** dropdown list. 
   
   ![CloudSyncTaskSelectStorjBucket](/images/SCALE/22.12/CloudSyncTaskSelectStorjBucket.png "Select Storj Bucket")

   If you set the Storj S3 access to only apply to the [new bucket created in Storj](#adding-the-storj-truenas-bucket), you can only use that bucket, selecting **Add New** results in an error. 
   If you set the Storj S3 **Bucket** access to **All** you can either select the new bucket you created in Storj or **Add New** to create a new Storj bucket here in SCALE!

6. Set the task schedule when you want this task to run.

7. Click **Save**.

The task is added to the **Cloud Sync Task** widget with the **Pending** status until the task runs on schedule. 
You can click **Dry Run** to test the task or **Run Now** to run the task now and apart from the scheduled time.

{{< taglist tag="scalecloud" limit="10" >}}
