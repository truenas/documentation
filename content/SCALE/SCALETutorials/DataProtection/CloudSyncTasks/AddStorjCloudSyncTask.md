---
title: "Adding a Storj Cloud Sync Task"
description: "Provides instructions on how to set up a Storj cloud sync task and how to configure a Storj-TrueNAS account to work with SCALE cloud credentials and cloud sync tasks."
weight: 30
tags:
- cloud
- backup
---

TrueNAS can send, receive, or synchronize data with the cloud storage provider Storj.
Cloud sync tasks allow for single-time transfers or recurring transfers on a schedule.
They are an effective method to back up data to a remote location.

{{< hint type=important >}}
To take advantage of the lower-cost benefits of the Storj-TrueNAS cloud service, you must create your Storj account using the link provided on the **Add Cloud Credentials** screen.

You must also create and authorize the storage buckets on Storj for use by SCALE.

iXsystems is not responsible for any charges you incur using a third-party vendor with the cloud sync feature.
{{< /hint >}}
This procedure provides instructions to set up both Storj and SCALE.

TrueNAS supports major providers like Amazon S3, Google Cloud, and Microsoft Azure.
It also supports many other vendors. To see the full list of supported vendors, go to **Credentials > Backup Credentials > Cloud Credentials** click **Add**, and open the **Provider** dropdown list.

## Cloud Sync Task Requirements
You must have all system storage (pool and datasets or zvols) configured and ready to receive or send data.

## Creating a Storj Cloud Sync Task
To create your cloud sync task for a Storj-TrueNAS transfer you:

1. Create the SCALE [cloud credential](#adding-storj-cloud-credentials).

   Adding the cloud credential in SCALE includes using the link to create the Storj-TrueNAS account, creating a new bucket, and obtaining the S3 authentication credentials you need to complete the process in SCALE.

2. Create the [Storj-TrueNAS account](#creating-the-storj-truenas-scale-account).

   You must create a new Storj-TrueNAS account to use SCALE to access a Storj account.

3. Add a  new [Storj bucket](#adding-the-storj-truenas-bucket).

4. [Create Storj S3 access](#setting-up-s3-access-to-the-bucket) for the new bucket.

5. Finish creating the SCALE [cloud credential](#adding-storj-cloud-credentials) using the S3 access and secret keys provided by Storj.

6. Create the [cloud sync task](#setting-up-the-storj-cloud-sync-task) for one bucket.

### Adding Storj Cloud Credentials
The instructions in this section covers adding the Storj-iX account and configuring the cloud service credentials in SCALE and Storj.
The process includes going to Storj to create a new Storj-iX account and returning to SCALE to enter the S3 credentials provided by Storj.

Go to **Credentials > Backup Credentials** and click **Add** on the **Cloud Credentials** widget.
The **Add Cloud Credential** screen opens with Storj displayed as the default provider in the **Provider** field.

![AddingStorjCloudCredential](/images/SCALE/Credentials/AddingStorjCloudCredential.png "Adding Storj Cloud Credential")

1. Enter a descriptive name to identify the credential in the **Name** field.

2. Click **Signup for account** to create your Stor-iX account. This opens the Storj new account screen for TrueNAS.

   {{< hint type=important >}}
   You must use this link to create your Storj account to take advantage of the benefits of the Storj-TrueNAS pricing!
   {{< /hint >}}

   After setting up your Storj-TrueNAS account, [create your Storj bucket](#adding-the-storj-truenas-bucket) and the [Storj S3 access](#setting-up-s3-access-to-the-bucket) for the new bucket.

3. Enter the authentication information provided by Storj in the **Access Key ID** and **Secret Access Key** fields.

4. Click **Verify Credentials** and wait for the system to verify the credentials.

   ![CloudCredentialsVerified](/images/SCALE/Credentials/CloudCredentialsVerified.png "Verify Cloud Credentials")

5. Click **Save**.

After completing this configuration form, you can set up the [cloud sync task](#setting-up-the-storj-cloud-sync-task).

### Creating the Storj-TrueNAS SCALE Account
You can create your iX-Storj cloud service account using two methods:

* Go to the [TrueNAS Storj web page](https://www.truenas.com/ix-storj/) and click **Sign Up & Log In - iX-Storj**.
* Go to **Credentials > Backup Credentials** and click **Add**.
  Select **StorjiX** as the **Provider** on the **Cloud Credentials** screen, then click **Signup for account**.

The [Storj Create your Storj account](https://us1.storj.io/signup?partner=ix-storj-1) web page opens.
Enter your information in the fields, select the **I agree to the Terms of Service and Privacy Policy**, then click the button at the bottom of the screen.
The Storj main dashboard opens.

![StorjMainDashboard](/images/SCALE/DataProtection/StorjMainDashboard.png "Storj Main Dashboard")

### Adding the Storj-TrueNAS Bucket
Now you can add the storage bucket you want to use in your Storj-TrueNAS account and SCALE cloud sync task.

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
After creating your bucket, add S3 access for the new bucket(s) you want to use in your Storj-TrueNAS account and the SCALE cloud sync task.

1. Click **Access Keys** to open the **Access Keys** dashboard, then click **New Access Key**.

   ![StorjAccessManagementScreen](/images/SCALE/DataProtection/StorjAccessManagementScreen.png "Storj Access Keys Screen")

   The **New Access Key** window opens.

2. Enter the name you want to use for this credential.
   Select **S3 Credentials** for access type, then click **Next** to open the **Access Permissions** window.

   ![StorjCreateAccessWindow](/images/SCALE/DataProtection/StorjCreateAccessWindow.png "Storj New Access Key Window")

3. Select the permissions you want to allow this access from the **Access Permissions** dropdown and select the bucket you want to have access to this credential from the **Access Buckets** dropdown.

   ![StorjCreateAccessSelectBuckets](/images/SCALE/DataProtection/StorjCreateAccessSelectBuckets.png "Storj Access Permissions Window.")

   {{< hint type=note >}}
   If you want to use the SCALE option to [add new buckets](#creating-a-storj-cloud-sync-task) in SCALE, set Storj **Access Permissions** and **Access Buckets** to **All**.
   {{< /hint >}}

4. Select an **Access Expiration Date** if you want to set the duration or length of time to allow this credential to exist .
   You can select a preset period, use the calendar to set the duration, or select **No expiration**.
   Click **Next** to open the **Access Encryption** window.

   ![StorjCreateAccessSelectDuration](/images/SCALE/DataProtection/StorjCreateAccessSelectDuration.png "Storj Create Access Select Duration")

5. Select the encryption option you want to use.
   Select **Use the current passphrase** to use the passphrase for the bucket you created above and click **Next** or select **Advanced Options**.

   Select **Generate Passphrase** to allow Storj to provide the encryption passphrase (see **5a** below) or select **Enter a new passphrase** to enter a passphrase of your choice.

   Click **Next** to open the **Confirm Details** screen.

   ![StorjCreateAccessEncryptionDialog](/images/SCALE/DataProtection/StorjCreateAccessEncryptionDialog.png "Storj Create Access Encryption Dialog")

   a. If **Generate Passphrase** is selected, use **Copy** or **Download** to obtain the Storj-generated passphrase.
   Keep this passphrase along with the access keys in a safe place where you can back up the file.

   ![StorjCreateAccessDownloadedEncryptionPassphrase](/images/SCALE/DataProtection/StorjCreateAccessDownloadedEncryptionPassphrase.png "Storj Create Access Encryption Passphrase Download")

   {{< hint type=warning >}}
   If you lose your passphrase, neither Storj nor iXsystems can help you recover your stored data!
   {{< /hint >}}

   Select **I saved my encryption passphrase** and then click **Next**.

6. Review access details and then click **Create Access** to open the **S3 Credentials Generated** window.

   ![StorjS3ConfirmDetails](/images/SCALE/DataProtection/StorjS3ConfirmDetails.png "Storj Create Access Confirm Details")

7. Use **Copy All** or **Download All** to obtain the access key, secret key, and endpoint.
   Keep these in a safe place where you can back up the file.

   Click **Finish**.

   ![StorjS3CredentialsGenerated](/images/SCALE/DataProtection/StorjS3CredentialsGenerated.png "Storj S3 Credentials Generated")

This completes the process of setting up your Storj buckets and S3 access.
Enter these keys in the **Authentication** fields in TrueNAS SCALE on the **[Add Cloud Credential](#adding-storj-cloud-credentials)** screen to complete setting up the SCALE cloud credential.

### Setting Up the Storj Cloud Sync Task
To add the Storj cloud sync task, go to **Data Protection > Cloud Sync Tasks**:

1. Click **Add** to open the **Cloudsync Task Wizard**.

   ![CloudSyncTaskWizardProviderScreen](/images/SCALE/DataProtection/CloudSyncTaskWizardProviderScreen.png "Cloudsync Task Wizard Provider")

2. Select the Storj credential on the **Credential** dropdown list, then click **Next** to show the **What and When** wizard screen.

3. Set the **Direction** and **Transfer Mode** you want to use.

   ![CloudSyncTaskWizardWhatandWhenScreen](/images/SCALE/DataProtection/CloudSyncTaskWizardWhatandWhenScreen.png "Cloudsync Task Wizard What and When")

4. Browse to the dataset or zvol you want to use on SCALE for data storage.
   Click the arrow to the left of the name to expand it, then click on the name to select it.

   If **Direction** is set to **PUSH**, click on the folder icon to add **/** to the **Folder** field.

5. Select the bucket you just created in Storj from the **Bucket** dropdown list.

   If you set the Storj S3 access to only apply to the [new bucket created in Storj](#adding-the-storj-truenas-bucket), you can only use that bucket, selecting **Add New** results in an error.
   If you set the Storj S3 **Bucket** access to **All**, you can either select the new bucket you created in Storj or **Add New** to create a new Storj bucket here in SCALE!

   If **Direction** is set to **PUSH**, click on the folder icon for the **Folder** field to select the desired folder in the Storj bucket from the dropdown list if not copying/moving/syncing the entire contents of the bucket with the dataset selected in the **Directory/Files** field. 

6. Set the task schedule for when to run this task.

7. Click **Save**.

TrueNAS adds the task to the **Cloud Sync Task** widget with the **Pending** status until the task runs on schedule.
To test the task, click **Dry Run** or **Run Now** to start the task apart from the scheduled time.