---
title: "Adding Cloud Sync Tasks"
description: "This article provides instructions on how to set up an iXsystems Storj cloud sync task, and how to configure a Storj account to work with TrueNAS SCALE cloud credentials and cloud sync tasks."
weight: 30
tags:
- scalecloud
- scalestorj
- scalebackup
---

{{< toc >}}


TrueNAS can send, receive, or synchronize data with the cloud storage provider Storj. 
Cloud sync tasks allow for single-time transfers or recurring transfers on a schedule. They are an effective method to back up data to a remote location.

{{< hint warning >}}
To take advantage of the benefits of the Storj/iXsystems cloud service, you must create your Storj account using the link provided on the **Add Cloud Credentials** screen.

You must also create add authorize the storage buckets on Storj for use by SCALE.

iXsystems is not responsible for any charges incurred from using a third-party vendor with the cloud sync feature.
{{< /expand >}}

This procedure provides instructions to set up both Storj and SCALE.

TrueNAS supports major providers like Amazon S3, Google Cloud, and Microsoft Azure. It also supports many other vendors. To see the full list of supported vendors, go to **Credentials > Backup Credentials > Cloud Credentials** click **Add** and open the **Provider** dropdown list.

## Cloud Sync Task Requirements

You must have all system storage (pool and datasets or zvols) configured and ready to receive or send data.

## Adding Storj Cloud Credentials

In this section you add your cloud service credentials in SCALE and in Storj.

Go to **Credentials > Backup Credentials** and click **Add** on the **Cloud Credentials** widget. The **Add Cloud Credential** screen opens with Storj displayed as the default provider in the **Provider** field.

![AddStorjCloudCredential](/images/SCALE/22.12/AddStorjCloudCredential.png "Adding Storj Cloud Credential")

Enter a descriptive name you want to identify this credential in the **Name** field.

Click **Signup for account** to create your Storj/iXsystem account.

{{< hint warning >}} 
You must use this link to create your Storj account for it to work with TrueNAS SCALE!
{{< /hint >}}

### Creating the Storj TrueNAS SCALE Account

Click **Signup for account** on the **Add Cloud Credential** screen. The Storj Sign In website opens. 

![StorjCreateNewTrueNASAccount](/images/SCALE/22.12/StorjCreateNewTrueNASAccount.png "Create Storj Account")

Enter your information in the fields, select the **I agree to the Terms of Service and Privacy Policy**, then click **Create an Ix-Storj Account**. 

![StorjMainDashboard](/images/SCALE/22.12/StorjMainDashboard.png "Storj Main Dashboard")

From the Storj main dashboard, click **Buckets** on the navigation panel on the left side of the screen. The **Buckets** screen opens.

![StorjMainDashboard](/images/SCALE/22.12/StorjMainDashboard.png "Storj Main Dashboard")

Click **New Bucket** to open the **Create Access** configuration screen.

![StorjCreateS3Access](/images/SCALE/22.12/StorjCreateS3Access.png "Storj Add Access")

Select **S3 Credential** as the **Type**.

Enter a name for your new Storj-TrueNAS bucket. In the example, this *ixbuckettest*.

Select the level of permissions you want to grant to this new bucket from the dropdown list. The example uses *All*.

Select the number of buckets you want to create from the **Buckets** dropdown list. The example uses *1*.

StorjCreateAccessSelectBucketsOption

Click on **Duration** to show the dropdown list field, then select the length of time you want this bucket to exist. The example selects **Forever**.

Click **Encrypt My Access** to open the xx screen.

before creating the sync task or add it at the time you create the cloud sync task on **Data Protection > Cloud Sync Task > Add Cloud Sync Task**. See the [Cloud Credentials]({{< relref "/SCALE/SCALETutorials/Credentials/BackupCredentials/AddCloudCredentials.md" >}}) article for instructions on adding a backup credential using cloud credentials.

## Creating a Cloud Sync Task
{{< expand "Adding Cloud Sync Tutorial Video" "v" >}}

{{< embed-video name="scaleangelfishcloudsync" >}}

{{< /expand >}}
To add a cloud sync task, go to **Data Protection > Cloud Sync Tasks** and click **Add**. The **Add Cloud Sync Task** configuration screen opens.

![AddCloudSyncTaskTop](/images/SCALE/22.02/AddCloudSyncTaskTop.png "Adding a Cloud Sync Task")

1. (Required) Type a memorable task description in **Description**. 

2. Select an existing backup credential from the **Credential** dropdown list.

See **Using Scripting and Environment Variables** for more information on [environment variables](#using-scripting-and-environment-variables).

{{< expand "What happens if my cloud sync credentials are invalid?" "v" >}}
After you choose a cloud credential from the dropdown list, TrueNAS automatically validates access to that cloud sync provider. 
Invalid credentials results in the following alert: 

![CloudSyncMalformedHeaderDialog](/images/SCALE/22.02/CloudSyncMalformedHeaderDialog.png "Invalid Credentials Alert")

Click **FIX CREDENTIAL** opens the **Credentials > Cloud Credentials > Edit Cloud Credentials** screen for the cloud service selected in **Credentials**.  

![DataProtectionCloudSyncInvalidFix](/images/SCALE/DataProtectionCloudSyncInvalidFix.png "Name and Provider View")

Check your provider credentials and update the applicable authentication fields on the **Edit Cloud Credentials** screen, and then click **Verify Credential**. 
If TrueNAS successfully accesses the provider the system displays the **The Credential is valid** dialog. 
Click **Save** and then return to **Data Protection > Cloud Sync Tasks > Add** to try again.
{{< /expand >}}

### Troubleshooting Transfer Mode Problems
**Sync** keeps all the files identical between the two storage locations. 
If the sync encounters an error, it does not delete files in the destination.

#### Dropbox Issues
One common error occurs when the [Dropbox copyright detector](https://techcrunch.com/2014/03/30/how-dropbox-knows-when-youre-sharing-copyrighted-stuff-without-actually-looking-at-your-stuff/) flags a file as copyrighted.

#### BackBlaze B2 Issues
Syncing to a Backblaze B2 bucket does not delete files from the bucket, even when you deleted those files locally. 
Instead, files are tagged with a version number or moved to a hidden state. 
To automatically delete old or unwanted files from the bucket, adjust the [Backblaze B2 Lifecycle Rules](https://www.backblaze.com/blog/backblaze-b2-lifecycle-rules/).

#### Amazon S3 Issues
Sync cannot delete files stored in Amazon S3 Glacier or S3 Glacier Deep Archive. 
First restore these files by another means, like the [Amazon S3 console](https://docs.aws.amazon.com/AmazonS3/latest/user-guide/restore-archived-objects.html).

### Using Scripting and Environment Variables

Advanced users can write scripts that run immediately before or after the cloud sync task. 
Using either the **Add Cloud Sync Task** or **Edit Cloud Sync Task** screens, enter environment variables to either the **Pre-script** or **Post-script** fields.
The **Post-script** field only runs when the cloud sync task succeeds. 
{{< expand "Click here for Environment Variables" "v" >}}

#### General Environment Variables

* `CLOUD_SYNC_ID`
* `CLOUD_SYNC_DESCRIPTION`
* `CLOUD_SYNC_DIRECTION`
* `CLOUD_SYNC_TRANSFER_MODE`
* `CLOUD_SYNC_ENCRYPTION`
* `CLOUD_SYNC_FILENAME_ENCRYPTION`
* `CLOUD_SYNC_ENCRYPTION_PASSWORD`
* `CLOUD_SYNC_ENCRYPTION_SALT`
* `CLOUD_SYNC_SNAPSHOT`

#### Provider-Specific Variables
There also are provider-specific variables like CLOUD_SYNC_CLIENT_ID or CLOUD_SYNC_TOKEN or CLOUD_SYNC_CHUNK_SIZE.

Remote storage settings:
* `CLOUD_SYNC_BUCKET`
* `CLOUD_SYNC_FOLDER`

Local storage settings:
* `CLOUD_SYNC_PATH`

{{< /expand >}}

## Running an Unscheduled Cloud Sync Task 

Saved tasks activate according to their schedule or you can use the **Run Now** option the **Cloud Sync Task** widget.  
To run the sync task before the saved schedule for the task, click on the cloud sync task to open the edit configuration screen for that task. 
If not already cleared, select **Enable** below the **Schedule** field to clear the checkbox, and then click **Save**.

On the **Cloud Sync Task** widget, click the **Run Now** <i class="material-icons" aria-hidden="true" title="Run Now">play_arrow</i> button.

An in-progress cloud sync must finish before another can begin. 
Stopping an in-progress task cancels the file transfer and requires starting the file transfer over.

To view logs about a running task, or its most recent run, click **State**.

## Using Cloud Sync Task Restore

To create a new cloud sync task that uses the same options but reverses the data transfer, select <i class="material-icons" aria-hidden="true" title="Restore">history</i> for an existing cloud sync on the **Data Protection** page. The **Restore Cloud Sync Task** window opens.

![RestoreCloudSyncTaskWindow](/images/SCALE/22.02/RestoreCloudSyncTaskWindow.png "Cloud Sync Restore")

Enter a name in **Description** for this reversed task.

Select the **Transfer Mode** and then define the path for a storage location on TrueNAS scale for the transferred data.

Click **Restore**.

TrueNAS saves the restored cloud sync as another entry in **Data protection > Cloud Sync Tasks**.

If you set the restore destination to the source dataset, TrueNAS may alter ownership of the restored files to **root**. If root did not create the original files and you need them to have a different owner, you can recursively reset their ACL permissions through the GUI or run `chown` from the CLI.

{{< taglist tag="scalecloud" limit="10" >}}
