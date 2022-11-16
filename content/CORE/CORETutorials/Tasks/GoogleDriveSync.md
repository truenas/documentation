---
title: "Backing Up Google Drive to TrueNAS"
description: "This article describes how to back up Google Drive to TrueNAS CORE."
weight: 100
tags:
- coregoogledrivesync
- corecloudsynctasks
---

Google Drive and G Suite are widely used to create and share documents, spreadsheets, and presentations with team members.

Although cloud-based tools have inherent backups and replications included by the cloud provider, certain users may require additional backup or archive capabilities.

For example, companies using G Suite for important work may need to keep records for years, potentially beyond the scope of the G Suite subscription.

TrueNAS can easily back up Google Drive using its built-in cloud sync.

### Set up Google Drive Credentials

Go to **System > Cloud Credentials** and click **ADD**.
Name the Credential and select **Google Drive** as the Provider. 
Click **LOGIN TO PROVIDER** and log in with the appropriate Google user account. 

![CloudCredentialsAddCredentials](/images/CORE/12.0/CloudCredentialsAddCredentials.png "Cloud Credentials Add Credentials")

Google requests permission to access all the Google Drive files for the FreeNAS device.

![GoogleOAuthProceed](/images/TrueNASCommon/GoogleOAuthProceed.png "Google OAuth Proceed")

![GoogleOAuthAccount](/images/TrueNASCommon/GoogleOAuthAccount.png "Google OAuth Account")

![GoogleOAuthPermissions](/images/TrueNASCommon/GoogleOAuthPermissions.png "Google OAuth Permissions")

Allow access. The appropriate access key generates in the FreeNAS access token. You may assign a Team ID if necessary. 

Click **VERIFY CREDENTIAL** and wait for it to verify, then click **SUBMIT**

![CredentialsVerify](/images/TrueNASCommon/CredentialsVerify.png "Credentials Verify")

### Create the Cloud Sync Task

Go to **Tasks > Cloud Sync Tasks** and set the backup time frame, frequency, and folders (cloud-based folder and TrueNAS dataset). 
Set whether the synchronization should sync all changes, copy new files, or move files. 
Add a description for the task and select the cloud credentials.
Choose the appropriate cloud folder target and TrueNAS storage location.

Select the file transfer mode: 

+ **Sync**: Keep files newly created or deleted the same.
+ **Copy**: Copy new files to the appropriate target (i.e., TrueNAS pulls files from Google Drive or pushes files to Google Drive).
+ **Move**: Copy files to the target and delete them from the source. With **Move**, users can set a folder in Google Drive for archival and move older documents to that folder from their Drive account. The task would automatically back up the files to the TrueNAS storage.

![TasksCloudSyncCreate](/images/CORE/12.0/TasksCloudSyncCreate.png "Tasks Cloud Sync Create")

Once you create the task, attempt a **Dry Run**. 

![CloudSyncDryRun](/images/TrueNASCommon/CloudSyncDryRun.png "Cloud Sync Dry Run")

![CloudSyncDryRunLog](/images/CORE/12.0/CloudSyncDryRunLog.png "Cloud Sync Dry Run Log")

If the Dry Run succeeds, click **SAVE**..

![CloudSyncTaskNew](/images/CORE/12.0/CloudSyncTaskNew.png "Cloud Sync Task New")

Expand the section down to see the task options.

![CloudSyncTaskNewExpanded](/images/CORE/12.0/CloudSyncTaskNewExpanded.png "Cloud Sync Task New Expanded")

Clicking **RUN NOW** prompts the task to start immediately.

![CloudSyncRunNow](/images/CORE/12.0/CloudSyncRunNow.png "Cloud Sync Run Now")

![CloudSyncTaskStarted](/images/CORE/12.0/CloudSyncTaskStarted.png "Cloud Sync Task Started")

![CloudSyncTaskRunning](/images/CORE/12.0/CloudSyncTaskRunning.png "Cloud Sync Task Running")

The web interface shows the status as **RUNNING** and **SUCCESS** upon completion. You can see details in the **Task Manager**.  While the task runs, clicking on the **RUNNING** button reveals a popup log.

![CloudSyncTaskRunningLog](/images/CORE/12.0/CloudSyncTaskRunningLog.png "Cloud Sync Task Running Log")

Once the sync reports **SUCCESS**, you can verify it by opening the folder on another computer if it is a share, through SSH access, or by checking the destination directory through the TrueNAS CLI.

![CloudSyncTaskSuccess](/images/CORE/12.0/CloudSyncTaskSuccess.png "Cloud Sync Task Success")

## Working with Google-Created Content

{{< include file="static/includes/General/GoogleDriveBadPermissions.md.part" markdown="true" >}}

{{< taglist tag="corecloudsynctasks" limit="10" >}}
