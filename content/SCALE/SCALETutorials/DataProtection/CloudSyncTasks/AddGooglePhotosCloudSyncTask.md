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

Google Photos cloud sync tasks in TrueNAS use the [rclone](https://rclone.org/) backend for the [Google Photos API](https://developers.google.com/photos) to authenticate credentials and transfer data.

Configuring a Google Photos cloud sync task is a multi-part procedure where you:

1. [Plan your deployment](#before-you-begin) and selecting a local dataset.
2. [Generate Google API credentials](#creating-the-api-credentials) on the Google Cloud API dashboard.
3. [Install rclone and generate a token](#configuring-rclone) on your remote client OS.
4. [Add Google Photos cloud credentials](#adding-google-photos-cloud-credentials) on TrueNAS.
5. [Configure the cloud sync task](#creating-the-cloud-sync-task) on TrueNAS.

## Before You Begin

Review your storage and data protection requirements and consider your options before setting up a Google Photos cloud sync task.
Refer to the rclone Google Photos backend documentation for more information on using rclone to sync Google Photos, including [standard options](https://rclone.org/googlephotos/#standard-options) and [limitations of the Google Photos API](https://rclone.org/googlephotos/#limitations), that might help you plan your deployment.

Consider how you want to manage your media files on Google Photos and in your local dataset.
Decide on the cloud sync task [direction and transfer mode](#choosing-a-sync-direction-and-mode), [remote folder](#choosing-a-target-folder) to target, and [new or existing local dataset](#selecting-the-dataset-and-organizing-files) to pull to or push from, that best fit your needs.

### Choosing a Sync Direction and Mode

A Google Photos cloud sync task can either pull files from Google Photos to a local dataset on TrueNAS or push local files to Google Photos.
Select the direction that best fits the way you intend to manage your media files.

Choose to pull data from Google Photos if you prefer to manage media files via the Google Photos UI and use the local dataset as a backup target.

Choose to push data to Google Photos if you prefer to manage media files in the local dataset and use Google Photos as a cloud backup location.

Next, select the data transfer mode that best fits the way you want to manage file retention between the source and destination.
There are three options:

  * **SYNC** - Select to change files on the destination to match those on the source.
    If a file does not exist on the source, it is also deleted from the destination.
  * **COPY** - Select to duplicate each source file into the destination.
    If files with the same names are present on the destination, they are overwritten.
  * **MOVE** - Select to transfer files from the source to the destination and delete source files.
    Copies files from the source to the destination and then deletes them from the source. Files with the same names on the destination are overwritten.

### Choosing a Target Folder

After choosing the direction and mode for your cloud sync task, choose the remote Google Photos folder that rclone targets to sync data.
Because of the way rclone interacts with the Google Photos API, each target folder option has specific file management and structure requirements.
This is due to the way rclone interacts with the Google Photos API.
A cloud sync task cannot target the root level folder (<file>/</file>).

{{< truetable >}}
| Folder | Recommended | Direction | Description |
|-----------|-------------|-------------|-------------|
| <file>/album</file> | Yes | Push or Pull | Use this option for push tasks or if you prefer to organize the Google Photos library by sorting media files into one or more discrete albums. All files must be in distinct albums or child directories of the local dataset. Media files uploaded to Google Photos but not assigned to an album are not pulled to a local dataset mirroring <file>/album</file>. Files uploaded to the base level of the local dataset instead of a child directory (an album) are not pushed to <file>/album</file>. |
|  <file>/media/all</file> | Yes | Pull | Use this option if you prefer to use the Google Photos library as single directory, without organizing media files into discrete albums. The local dataset of a <file>/media/all</file> sync task contains all media files stored on the Google Photos account at the same level, with no further organization into subdirectories. Using <file>/media/all</file> allows you to upload new files to Google Photos, without needing to organize them into albums, and then pull them to TrueNAS. |
| <file>/upload</file> | **No** | Push | Media files pushed from the local dataset to <file>/upload</file> are then uploaded to Google Photos and not sorted into an album. Because <file>/upload</file> is a temporary storage location, it can not accurately synchronize from one task to the next. Pushing to this folder does not preserve metadata and can result in duplicated files, poor performance, file name instability. |
{{< /truetable >}}

### Selecting the Dataset and Organizing Files

Select TrueNAS local dataset or create a new one to use as the source or destination.

{{< expand "Creating a Dataset" "v" >}}
{{< include file="/static/includes/CreateDatasetSCALE.md" >}}
{{< /expand >}}

Configure file management structure inside the local dataset (for push tasks) or albums in the Google Photos (for pull tasks) as required by your direction, mode, and target selections (see above).

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

Click **OAuth consent screen** on the left menu, select **EXTERNAL**, then click **CREATE**.

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

Download [rclone](https://rclone.org/downloads/) for your client OS and open it in a command line utility following the [rclone installation instructions](https://rclone.org/install/).
The example photos in this article use Powershell in Windows OS.

Enter `rclone config`, then enter `n` to create a new remote.

{{< trueimage src="/images/SCALE/DataProtection/GooglePhotosAPIrcloneConfig.png" alt="Configure rclone Remote Name" id="Configure rclone Remote Name" >}}

Enter a name for the new remote, then enter the number from the list corresponding to Google Photos.

Enter the client id and secret you saved when you created the Google Photos API credentials, then enter `false` or press <kbd>Enter</kbd> to allow the Google Photos backend to request full access.

{{< trueimage src="/images/SCALE/DataProtection/GooglePhotosAPIrcloneConfig2.png" alt="Configure rclone Client ID and Secret" id="Configure rclone Client ID and Secret" >}}

Do not edit the advanced config.

Enter `y` to authenticate rclone using the web browser.
A browser window opens to authorize rclone access.
Click **Allow**.

In the command line, enter `y` to confirm rclone uploads media items with full resolution and complete the configuration.

Copy and save the type, client_id, client_secret, and token, then enter `y` to save the new remote.

{{< trueimage src="/images/SCALE/DataProtection/GooglePhotosAPIrcloneConfig3.png" alt="Confirm rclone Configuration" id="Confirm rclone Configuration" >}}

## Adding Google Photos Cloud Credentials

In the TrueNAS Web UI, go to **Credentials > Backup Credentials** and click **Add** in the **Cloud Credentials** widget.

{{< trueimage src="/images/SCALE/DataProtection/GooglePhotosAPIAddCloudCredentials.png" alt="Add Cloud Credentials" id="Add Cloud Credentials" >}}

Select Google Photos as the **Provider** and enter a name.

Paste the Google Photos API client ID and client secret in the **OAuth Client ID** and **OAuth Client Secret** fields.

Paste your rclone token into the **Token** field.

Click **Verify Credential** to ensure the credentials are valid, then click **Save**.

## Creating the Cloud Sync Task

Go to **Data Protection > Cloud Sync Tasks** and click **Add**. The **Cloud Sync Task Wizard** opens.

{{< trueimage src="/images/SCALE/DataProtection/CloudSyncTaskWizardProviderScreen.png" alt="Cloud Sync Task Wizard" id="Cloud Sync Task Wizard" >}}

1. Select the Google Photos backup credentials from the **Credentials** dropdown list.

   Click **Verify Credential** to ensure the credentials are valid then click **Next**.

2. Select the **Direction** as **PUSH** or **PULL** and select the **Transfer Mode** as **SYNC**, **COPY**, or **MOVE**.
   Select the Google Photos location to back up data to or from in **Folder**.
   Browse to and select the **album** folder or enter **/album**.

   {{< trueimage src="/images/SCALE/DataProtection/CloudSyncTaskWizardWhatandWhenScreen.png" alt="Cloud Sync Task Wizard What and When" id="Cloud Sync Task Wizard - What and When" >}}

3. Select the local dataset in **Directory/Files**.
   This is the dataset sent to Google Photos for push tasks or the write destination for pull tasks.

   {{< hint type=info title="Sync Albums Not Files" >}}
   Push tasks containing media files saved to the local dataset root level fail with the error: **Failed to sync: can't upload files here**.  

   Save files to child directories, not to the root level of the TrueNAS dataset.
   Directories under the local dataset correspond to albums in the Google Photos library.
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
Review the logged error message(s).
Common error messages for failed Google Photos tasks include:

{{< expand "Failed to copy: can't upload files here" "v" >}}
Problem: A push task is trying to upload files to the root level <file>/</file> folder or the <file>/media/all</file> folder.

Solution: Reconfigure the push task to target the <file>/album</file> folder (and organize your files into one or more subfolders/albums) or change the direction of the task to pull from Google Photos and target the <file>/media/all</file> folder.
{{< /expand >}}

{{< expand "Pulling from the root directory is not allowed. Please, select a specific directory" "v" >}}
Problem: A pull or push task is targeting the root level <file>/</file> folder.

Solution: Review [Before You Begin](#before-you-begin) above and change the target folder to <file>/album</file> or <file>/media/all</file>.
Ensure the selected folder does not conflict with the direction of the task.
{{< /expand >}}

{{< expand "Failed to copy: directory not found" "v" >}}
Problem: A pull task is targeting the <file>/upload</file> folder.

Solution: The <file>/upload</file> folder functions as a temporary queue for rclone to upload files to Google Photos.
rclone cannot pull from <file>/upload</file>.
Review [Before You Begin](#before-you-begin) above and change the target folder to <file>/album</file> or <file>/media/all</file>.
Organize your Google Photos library or local dataset as needed for the selected target.
{{< /expand >}}

After reviewing available logs, click <i class="material-icons" aria-hidden="true" title="Edit">edit</i> **Edit** on the task and review the configuration.
Compare configured options to the requirements in [Before You Begin](#before-you-begin) above and correct any issues.

If a pull task is successful but some or all files are missing from the local dataset, review your library organization in Google Photos.
Pull tasks configured with <file>/album</file> as the target folder only transfer files organized into albums.
Files uploaded to Google Photos but not added to an album are not transferred.
Using the Google Photos UI, create one or more albums and add all files to an album then click <i class="fa fa-play" aria-hidden="true" title="Run Job"></i> **Run Job** to re-run the cloud sync task.
