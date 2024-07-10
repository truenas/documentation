---
title: "Adding a Google Photos Cloud Sync Task"
description: "Provides instructions on how to set up Google Photos API credentials and use them to create a cloud sync task."
weight: 40
tags:
- cloud
- backup
keywords:
- nas cloud storage
- data protection
- data backup and recovery
---

Google Photos works best in TrueNAS using a Google Photos API key and [rclone](https://rclone.org/) token.

## Creating the API Credentials
On the [Google API dashboard](https://console.cloud.google.com/apis/dashboard), click the dropdown menu to the right of the Google Cloud logo and select your project.

If you do not have a project, click **NEW PROJECT** and enter a value in **Project name**, **Organization**, and **Location**.
Click **Create**.

{{< trueimage src="/images/SCALE/DataProtection/GooglePhotosAPINewProject.png" alt="New Project" id="New Project" >}}

### Enable API
After you select your project, click **Enabled APIs & Services** on the left menu, then click **+ ENABLE APIS AND SERVICES**.

{{< trueimage src="/images/SCALE/DataProtection/GooglePhotosAPIEnableAPIsandServices.png" alt="Enable APIs and Services" id="Enable APIs and Services" >}}

Enter **photos library api** in the search bar, then select **Photos Library API** and click **ENABLE**.

{{< trueimage src="/images/SCALE/DataProtection/GooglePhotosAPIClickEnable.png" alt="Enable Photos Library API" id="Enable Photos Library API" >}}

### Configure Authentication
Next, click **OAuth consent screen** on the left menu, select **EXTERNAL**, then click **CREATE**.

{{< trueimage src="/images/SCALE/DataProtection/GooglePhotosAPICreateExternal.png" alt="Create External User" id="Create External User" >}}

Enter a value in **App name** and **User support email**.

{{< trueimage src="/images/SCALE/DataProtection/GooglePhotosAPIAppInformation.png" alt="Enter App Information" id="Enter App Information" >}}

Enter an email address in **Developer contact information**, then click **SAVE AND CONTINUE**.

{{< trueimage src="/images/SCALE/DataProtection/GooglePhotosAPIDeveloperContactInformation.png" alt="Enter Developer Contact Information" id="Enter Developer Contact Information" >}}

Continue to the **Test users** section and click **+ ADD USERS**, enter your email address, then click **ADD**.

{{< trueimage src="/images/SCALE/DataProtection/GooglePhotosAPIAddTestingUser.png" alt="Add Test User" id="Add Test User" >}}

On the **OAuth consent screen**, click **PUBLISH APP** under **Testing** and push the app to production.

{{< trueimage src="/images/SCALE/DataProtection/GooglePhotosAPIPublish.png" alt="Publish Status" id="Publish Status" >}}

{{< expand "Can I leave the app in testing mode?" "v" >}}
You can leave the app in testing mode, but testing app credentials expire after seven days.
Cloud sync tasks fail when credentials expire.
{{< /expand >}}

### Create Credentials
Click **Credentials** on the left menu, then click **+ CREATE CREDENTIALS** and select **OAuth client ID**.

{{< trueimage src="/images/SCALE/DataProtection/GooglePhotosAPIAddCredentials.png" alt="Add Credentials" id="Add Credentials" >}}

Select **Desktop app** in the **Application type** dropdown, then enter a name for the client ID and click **CREATE**.

{{< trueimage src="/images/SCALE/DataProtection/GooglePhotosAPICreateOAuthClientID.png" alt="Create OAuth Client ID" id="Create OAuth Client ID" >}}

Copy and save your client ID and secret, or download the JSON file.

{{< trueimage src="/images/SCALE/DataProtection/GooglePhotosAPICopyIDandSecret.png" alt="Copy Client ID and Secret" id="Copy Client ID and Secret" >}}

## Configuring Rclone
Download [rclone](https://rclone.org/downloads/) for your OS and open it in a command line utility following the [rclone installation instructions](https://rclone.org/install/).
The example photos in this article use Powershell in Windows OS.

Enter `rclone config`, then enter `n` to create a new remote.

{{< trueimage src="/images/SCALE/DataProtection/GooglePhotosAPIrcloneConfig.png" alt="Configure rclone Remote Name" id="Configure rclone Remote Name" >}}

Enter a name for the new remote, then enter the number from the list corresponding to Google Photos.

Enter the client id and secret you saved when you created the Google Photos API credentials, then enter `false` or press <kbd>Enter</kbd> to allow the Google Photos backend to request full access.

{{< trueimage src="/images/SCALE/DataProtection/GooglePhotosAPIrcloneConfig2.png" alt="Configure rclone Client ID and Secret" id="Configure rclone Client ID and Secret" >}}

Do not edit the advanced config. When prompted to use web browser to automatically authenticate rclone with remote, enter `y`.

A browser window opens to authorize rclone access. Click **Allow**.

In the command line, enter `y` to confirm rclone uploads media items with full resolution and complete the configuration.

Copy and save the type, client_id, client_secret, and token, then enter `y` to save the new remote.

{{< trueimage src="/images/SCALE/DataProtection/GooglePhotosAPIrcloneConfig3.png" alt="Confirm rclone Configuration" id="Confirm rclone Configuration" >}}

See the [rclone Google Photos backend documentation](https://rclone.org/googlephotos/) for additional information on using rclone to sync Google Photos.

## Creating Google Photos Cloud Credentials
Open your TrueNAS Web UI. Go to **Credentials > Backup Credentials** and click **Add** in the **Cloud Credentials** widget.

{{< trueimage src="/images/SCALE/DataProtection/GooglePhotosAPIAddCloudCredentials.png" alt="Add Cloud Credentials" id="Add Cloud Credentials" >}}

Select Google Photos as the **Provider** and enter a name.

Paste the Google Photos API client ID and client secret in the **OAuth Client ID** and **OAuth Client Secret** fields.

Paste your rclone token into the **Token** field.

Click **Verify Credential** to ensure the credentials are valid, then click **Save**.

## Creating the Cloud Sync Task

To add a cloud sync task, go to **Data Protection > Cloud Sync Tasks** and click **Add**. The **Cloud Sync Task Wizard** opens.

{{< trueimage src="/images/SCALE/DataProtection/CloudSyncTaskWizardProviderScreen.png" alt="Cloud Sync Task Wizard" id="Cloud Sync Task Wizard" >}}

1. Select the Google Photos backup credentials from the **Credentials** dropdown list.

   Click **Verify Credential** to ensure the credentials are valid then click **Next**.

2. Select the **Direction** as **PUSH** or **PULL** and set **Transfer Mode** to **SYNC**.
   Select the Google Photos location to back up data to or from in **Folder**.
   Browse to and select the **album** folder or enter **/album**.

   {{< trueimage src="/images/SCALE/DataProtection/CloudSyncTaskWizardWhatandWhenScreen.png" alt="Cloud Sync Task Wizard What and When" id="Cloud Sync Task Wizard - What and When" >}}

3. Select the local dataset in **Directory/Files**.
   This is the dataset sent to Google Photos for push tasks or the write destination for pull tasks.

   {{< hint type=info title="Sync Albums Not Files" >}}
   Push tasks containing media files saved directly to the local dataset fail with the error **Failed to sync: can't upload files here**.  

   Save files to child directories, not to the root level of the TrueNAS dataset.
   Directories under the local dataset correspond to albums in the Google Photos library.
   {{< /hint >}}

4. Enter a **Description** for the cloud sync task.

5. Select the time to run the task from the **Schedule** options.

6. Click **Save** to add the task.

TrueNAS adds the task to the **Cloud Sync Task** widget with the status **Pending**, until the task runs on schedule.

Click <i class="fa fa-refresh" aria-hidden="true" title="Dry Run"></i> **Dry Run** to test the task by to connecting to Google Photos and simulating transferring a file.
Click <i class="fa fa-play" aria-hidden="true" title="Run Job"></i> **Run Job** to start the cloud sync task immediately.
