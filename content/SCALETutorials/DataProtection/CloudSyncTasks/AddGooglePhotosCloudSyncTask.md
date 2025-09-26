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

{{< hint type=important title="Changes to Google Photos API (effective March 31, 2025)" >}}
On March 31, 2025, Google changed the Google Photos API to allow external applications to access and manage only the media and albums they create.
Cloud sync tasks continue to upload photos to albums created by the TrueNAS sync client, but reading from your full photo library or from shared albums does not work as expected.
Some operations return permission errors.

Tokens issued before March 31, 2025 do not provide full-library access under the new API rules.
Generate new credentials if you need to continue uploading into albums created by the sync client.

See the [Google API update notice](https://developers.google.com/photos/support/updates) for more details.

Review existing Google Photos cloud sync tasks and configure them to use albums created by the TrueNAS source.
A complete backup of a Google Photos library through the API is not possible.
{{< /hint >}}

Google Photos cloud sync tasks in TrueNAS use the [rclone](https://rclone.org/) backend for the [Google Photos API](https://developers.google.com/photos) to authenticate credentials and transfer data.

Configuring a Google Photos cloud sync task is a multi-part procedure where you:

1. [Plan your deployment](#before-you-begin) and select a local dataset.
2. [Generate Google API credentials](#creating-the-api-credentials) on the Google Cloud API dashboard.
3. [Install rclone and generate a token](#configuring-rclone) on your remote client OS.
4. [Add Google Photos cloud credentials](#adding-google-photos-cloud-credentials) on TrueNAS.
5. [Configure the cloud sync task](#creating-the-cloud-sync-task) on TrueNAS.

## Before You Begin

Review your storage and data protection requirements before setting up a Google Photos cloud sync task.
See the [rclone Google Photos backend documentation](https://rclone.org/googlephotos/) for details on [standard options](https://rclone.org/googlephotos/#standard-options) and [API limitations](https://rclone.org/googlephotos/#limitations) that can help you plan your deployment.

Decide how you want to manage media files in Google Photos and your local dataset.
Choose the cloud sync [direction and transfer mode](#choosing-a-sync-direction-and-mode), [target folder](#choosing-a-target-folder), and [local dataset](#selecting-the-dataset-and-organizing-files) (new or existing) that best fit your needs.

### Choosing a Sync Direction and Mode

A Google Photos cloud sync task can either push local files to Google Photos or (limited) pull files from Google Photos to a local TrueNAS dataset.
Select the direction that fits how you want to manage your media files.

Pull is restricted by the Google Photos API and only accesses albums created by the TrueNAS sync client.
Pulling your full library or from shared albums is not possible.

Push uploads local files into albums created by the TrueNAS sync client.
Use push to manage media in your local dataset and back it up to Google Photos.

Next, select the data transfer mode that fits how you want to manage file retention between the source and destination.
There are three options:

* **SYNC** - Matches files on the destination to the source.
  Deletes files from the destination if they do not exist on the source.
  Only affects albums created by the sync client.
* **COPY** - Duplicates each source file into the destination.
  Overwrites files with the same name.
  Only affects albums created by the sync client.
* **MOVE** - Transfers files from the source to the destination and deletes them from the source.
  Overwrites files with the same name.
  Only affects albums created by the sync client.

### Choosing a Target Folder

After choosing the direction and mode for your cloud sync task, select the remote Google Photos folder that rclone targets.  
Each folder option has specific file management and structure requirements due to API restrictions.  
Cloud sync tasks cannot target the root folder (<file>/</file>).

{{< truetable >}}
| Folder | Recommended | Direction | Description |
|-----------|-------------|-------------|-------------|
| <file>/album</file> | Yes | Push or Pull | Use this folder for push tasks or to organize media into albums. Only albums created by the TrueNAS cloud sync client are accessible. Pull returns only items in these albums; push uploads work as expected. All local files must be in child directories (albums) under the dataset. |
| <file>/media/all</file> | **No** | Pull | API restrictions prevent reading your full Google Photos library. Only items in app-created albums are accessible. Do not use this option for full-library sync. |
| <file>/upload</file> | **No** | Push | Temporary upload location. Files pushed here are not sorted into albums, metadata can be lost, and repeated sync tasks can produce duplicates or unstable filenames. Use only for temporary transfers. |
{{< /truetable >}}

### Selecting the Dataset and Organizing Files

Select a TrueNAS local dataset or create a new one to use as the source or destination.

{{< expand "Creating a Dataset" "v" >}}
{{< include file="/static/includes/CreateDatasetSCALE.md" >}}
{{< /expand >}}

For push tasks, organize files in the local dataset so they map to albums created by the TrueNAS cloud sync client.  
For pull tasks, the Google Photos API only provides access to items in albums created by the sync client.
Full-library pulls or shared albums are not accessible.
Configure your dataset accordingly based on your chosen direction, mode, and target folder.

## Creating the API Credentials

{{< hint type=warning title="Important: API Credentials and Tokens" >}}
Tokens generated before March 31, 2025 do not provide full access to your Google Photos library under the new API rules.  
When creating credentials, ensure that your OAuth client and token are intended for use with albums created by the TrueNAS cloud sync client.
Only these app-created albums can be accessed for push or pull tasks.
{{< /hint >}}

On the [Google API dashboard](https://console.cloud.google.com/apis/dashboard), click the dropdown menu to the right of the Google Cloud logo and select your project.

If you do not have a project, click **NEW PROJECT** and enter a value in **Project name**, **Organization**, and **Location**.
Click **Create**.

{{< trueimage src="/images/SCALE/DataProtection/GooglePhotosAPINewProject.png" alt="New Project" id="New Project" >}}

### Enable API

After you select your project, click **Enabled APIs & Services** on the left menu, then click **+ ENABLE APIS AND SERVICES**.

{{< trueimage src="/images/SCALE/DataProtection/GooglePhotosAPIEnableAPIsandServices.png" alt="Enable APIs and Services" id="Enable APIs and Services" >}}

Enter **photos library api** in the search bar, then select **Photos Library API** and click **ENABLE**.
This enables the API for your project
Access remains limited to albums created by the TrueNAS cloud sync client.

{{< trueimage src="/images/SCALE/DataProtection/GooglePhotosAPIClickEnable.png" alt="Enable Photos Library API" id="Enable Photos Library API" >}}

### Configure Authentication

Click **OAuth consent screen** on the left menu, select **EXTERNAL**, then click **CREATE**.

{{< trueimage src="/images/SCALE/DataProtection/GooglePhotosAPICreateExternal.png" alt="Create External User" id="Create External User" >}}

Enter a value in **App name** and **User support email**.

{{< trueimage src="/images/SCALE/DataProtection/GooglePhotosAPIAppInformation.png" alt="Enter App Information" id="Enter App Information" >}}

Enter an email address in **Developer contact information**, then click **SAVE AND CONTINUE**.

{{< trueimage src="/images/SCALE/DataProtection/GooglePhotosAPIDeveloperContactInformation.png" alt="Enter Developer Contact Information" id="Enter Developer Contact Information" >}}

Continue to the **Test users** section and click **+ ADD USERS**, enter the email addresses of users who run cloud sync tasks, then click **ADD**.

{{< trueimage src="/images/SCALE/DataProtection/GooglePhotosAPIAddTestingUser.png" alt="Add Test User" id="Add Test User" >}}

On the **OAuth consent screen**, click **PUBLISH APP** under **Testing** and push the app to production.

{{< trueimage src="/images/SCALE/DataProtection/GooglePhotosAPIPublish.png" alt="Publish Status" id="Publish Status" >}}

{{< expand "Can I leave the app in testing mode?" "v" >}}
You can leave the app in testing mode, but testing app credentials expire after seven days.
Cloud sync tasks fail when testing mode credentials expire.
{{< /expand >}}

### Create Credentials

Click **Credentials** on the left menu, then click **+ CREATE CREDENTIALS** and select **OAuth client ID**.

{{< trueimage src="/images/SCALE/DataProtection/GooglePhotosAPIAddCredentials.png" alt="Add Credentials" id="Add Credentials" >}}

Select **Desktop app** in the **Application type** dropdown, then enter a name for the client ID and click **CREATE**.

{{< trueimage src="/images/SCALE/DataProtection/GooglePhotosAPICreateOAuthClientID.png" alt="Create OAuth Client ID" id="Create OAuth Client ID" >}}

Copy and save your client ID and secret, or download the JSON file.

{{< trueimage src="/images/SCALE/DataProtection/GooglePhotosAPICopyIDandSecret.png" alt="Copy Client ID and Secret" id="Copy Client ID and Secret" >}}

## Configuring Rclone

Download [rclone](https://rclone.org/downloads/) for your client OS and open it in a command line utility following the [rclone installation instructions](https://rclone.org/install/).
The example photos in this article use Powershell in Windows OS.

Enter `rclone config`, then enter `n` to create a new remote.

{{< trueimage src="/images/SCALE/DataProtection/GooglePhotosAPIrcloneConfig.png" alt="Configure rclone Remote Name" id="Configure rclone Remote Name" >}}

Enter a name for the new remote, then enter the number from the list corresponding to Google Photos.

Enter the client id and secret you saved when you created the Google Photos API credentials, then enter `false` or press <kbd>Enter</kbd> to allow the Google Photos backend to request full access.

**Note:** After March 31, 2025, full-library access is no longer possible under the Google Photos API.
Even if rclone requests full access, it only sees albums created by the TrueNAS cloud sync client.

{{< trueimage src="/images/SCALE/DataProtection/GooglePhotosAPIrcloneConfig2.png" alt="Configure rclone Client ID and Secret" id="Configure rclone Client ID and Secret" >}}

Do not edit the advanced config.

Enter `y` to authenticate rclone using the web browser.
A browser window opens to authorize rclone access.
Click **Allow**.

In the command line, enter `y` to confirm rclone uploads media items with full resolution and complete the configuration.
Only albums created by the TrueNAS cloud sync client are accessible.

Copy and save the type, client_id, client_secret, and token, then enter `y` to save the new remote.

{{< trueimage src="/images/SCALE/DataProtection/GooglePhotosAPIrcloneConfig3.png" alt="Confirm rclone Configuration" id="Confirm rclone Configuration" >}}

## Adding Google Photos Cloud Credentials

In the TrueNAS Web UI, go to **Credentials > Backup Credentials** and click **Add** in the **Cloud Credentials** widget.

{{< trueimage src="/images/SCALE/DataProtection/GooglePhotosAPIAddCloudCredentials.png" alt="Add Cloud Credentials" id="Add Cloud Credentials" >}}

Select Google Photos as the **Provider** and enter a name.

Paste the Google Photos API client ID and client secret in the **OAuth Client ID** and **OAuth Client Secret** fields.

Paste your rclone token into the **Token** field.

**Note:** Due to API restrictions, these credentials only provide access to albums created by the TrueNAS cloud sync client
Full-library or shared-album access is not possible.

Click **Verify Credential** to ensure the credentials are valid, then click **Save**.

## Creating the Cloud Sync Task

Go to **Data Protection > Cloud Sync Tasks** and click **Add**. The **Cloud Sync Task Wizard** opens.

{{< trueimage src="/images/SCALE/DataProtection/CloudSyncTaskWizardProviderScreen.png" alt="Cloud Sync Task Wizard" id="Cloud Sync Task Wizard" >}}

1. Select the Google Photos backup credentials from the **Credentials** dropdown list.

   Click **Verify Credential** to ensure the credentials are valid then click **Next**.

2. Select the **Direction** as **PUSH** or **PULL** and select the **Transfer Mode** as **SYNC**, **COPY**, or **MOVE**.
   Select the Google Photos location to back up data to or from in **Folder**.
   Browse to and select the **album** folder or enter **/album**.

   **Note:** Pull tasks only access albums created by the TrueNAS cloud sync client.
   Full-library pulls or shared albums are not accessible.

3. Select the local dataset in **Directory/Files**.
   This is the dataset sent to Google Photos for push tasks or the write destination for pull tasks.

   {{< hint type=info title="Sync Albums Not Files" >}}
   Push tasks containing media files saved to the local dataset root level fail with the error: **Failed to sync: can't upload files here**.  

   Save files to child directories, not to the root level of the TrueNAS dataset.
   Directories under the local dataset correspond to albums created by the TrueNAS cloud sync client in Google Photos.
   {{< /hint >}}

4. Enter a **Description** for the cloud sync task.

5. Select the time to run the task from the **Schedule** options.

6. Click **Save** to add the task.

TrueNAS adds the task to the **Cloud Sync Task** widget with the status **Pending**, until the task runs on schedule.

Click <i class="fa fa-refresh" aria-hidden="true" title="Dry Run"></i> **Dry Run** to test the task by connecting to Google Photos and simulating transferring a file.
During a dry run, TrueNAS sends or receives no data.
A dry run can report successful even for a task that fails to transfer data due to misconfiguration

Click <i class="fa fa-play" aria-hidden="true" title="Run Job"></i> **Run Job** to start the cloud sync task immediately.

### Troubleshooting

If a Google Photos cloud sync task fails, go to **Data Protection** and click the **FAILED** status in **State** on the **Cloud Sync Tasks** widget.
Review the logged error messages.
Common error messages for failed Google Photos tasks include:

{{< expand "Failed to copy: can't upload files here" "v" >}}
Problem: A push task attempts to upload files to the root level <file>/</file> folder or the <file>/upload</file> folder.

Solution: Reconfigure the push task to target the <file>/album</file> folder and organize your files into child directories (albums).
Directories under the local dataset correspond to albums the TrueNAS cloud sync client creates in Google Photos.
Only albums the sync client creates are accessible to cloud sync tasks.
{{< /expand >}}

{{< expand "Pulling from the root directory is not allowed. Please, select a specific directory" "v" >}}
Problem: A pull or push task targets the root level <file>/</file> folder.

Solution: Change the target folder to <file>/album</file>.
Pull tasks transfer only media that exist in albums created by the TrueNAS cloud sync client.
Full-library pulls and shared albums are not accessible via the API.
Do not rely on <file>/media/all</file> for a full export.
{{< /expand >}}

{{< expand "Failed to copy: directory not found" "v" >}}
Problem: A pull task targets the <file>/upload</file> folder.

Solution: The <file>/upload</file> folder functions as a temporary upload queue.
rclone cannot pull from <file>/upload</file>.
Change the target folder to <file>/album</file> and organize files accordingly.
Remember that only albums created by the TrueNAS cloud sync client are accessible for pull tasks.
{{< /expand >}}

If a pull task runs but some or all files never appear in the local dataset, those files are not in albums created by the TrueNAS cloud sync client and the API does not expose them to the sync client.
To get originals from Google Photos you can:

* Export your account via [Google Takeout](https://takeout.google.com/settings/takeout/custom/photos) (download the archive and import the files into TrueNAS).
* Download desired photos directly from [Google Photos](photos.google.com) and copy them into your TrueNAS dataset.

If you want the sync client to manage media going forward, create and sync albums via TrueNAS.
Those albums then remain accessible to the TrueNAS cloud sync client.
